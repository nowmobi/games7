System.register("chunks:///_virtual/GameEnums.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }],
        execute: function() {
            var t, a, i, r;
            e({
                    CustomerEvent: void 0,
                    GameEvent: void 0,
                    GameTimerEvent: void 0,
                    PlayerLivesEvent: void 0
                }), n._RF.push({}, "038cexx92RAcJWL+VGTnxh+", "GameEnums", void 0),
                function(e) {
                    e.StartLoading = "OnStartLoadingData", e.StartAssemblying = "OnStartAssemblyingLevel", e.ShowLevelPresentation = "OnShowLevelPresentation", e.LevelPresentationClosed = "OnLevelPresentationClosed", e.ShowTutorial = "OnShowTutorial", e.TutorialFinished = "OnFinishedTutorial", e.StartPlaying = "OnStartGame", e.EndGame = "OnEndGame", e.EndlessLevelsUnlocked = "OnEndlessLevelsUnlocked"
                }(t || (t = e("GameEvent", {}))),
                function(e) {
                    e.GameTimerSet = "OnGameTimerSet", e.GameTimeStart = "OnGameTimeStart", e.GameTimeUpdate = "OnGameTimeUpdate", e.GameTimeOver = "OnGameTimeOver"
                }(a || (a = e("GameTimerEvent", {}))),
                function(e) {
                    e.PlayerLivesSet = "OnPlayerLivesSet", e.PlayerLivesUpdate = "OnPlayerLivesUpdate", e.PlayerLivesOver = "OnPlayerLivesOver"
                }(i || (i = e("PlayerLivesEvent", {}))),
                function(e) {
                    e.CustomerReachedBalcony = "OnCustomerReachedBalcony", e.CustomerFailed = "OnCustomerOrderFailed"
                }(r || (r = e("CustomerEvent", {}))), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AudioListener.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./env", "./Logger.ts"], (function(e) {
    "use strict";
    var i, t, n, r, o, s, a, c, l, u, h, g, d, p, b, m, f;
    return {
        setters: [function(e) {
            i = e.cclegacy, t = e._decorator, n = e.CCFloat, r = e.CCBoolean, o = e.Node, s = e.MeshRenderer, a = e.Color, c = e.Vec3, l = e.Component
        }, function(e) {
            u = e.defineProperty, h = e.applyDecoratedDescriptor, g = e.inheritsLoose, d = e.initializerDefineProperty, p = e.assertThisInitialized, b = e.createClass
        }, function(e) {
            m = e.DEBUG
        }, function(e) {
            f = e.logger
        }],
        execute: function() {
            var D, C, y, v, w, L, _, x, P, z, A, E, k;
            i._RF.push({}, "03e27UIeUhPkbnm9lwYkGFi", "AudioListener", void 0);
            var F = t.ccclass,
                R = t.property;
            e("AudioListener", (D = F("AudioListener"), C = R(n), y = R(n), v = R(r), w = R([o]), D((k = E = function(e) {
                function i() {
                    for (var i, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return i = e.call.apply(e, [this].concat(n)) || this, d(p(i), "minDistance", x, p(i)), d(p(i), "maxDistance", P, p(i)), d(p(i), "showDebug", z, p(i)), d(p(i), "debugCircles", A, p(i)), i
                }
                g(i, e);
                var t = i.prototype;
                return t.onEnable = function() {
                    i._instance = this, this.debugCircles[0].active = this.showDebug && m, this.debugCircles[1].active = this.showDebug && m, this.debugCircles[0].setWorldScale(2 * this.minDistance, 2 * this.minDistance, 2 * this.minDistance), this.debugCircles[1].setWorldScale(2 * this.maxDistance, 2 * this.maxDistance, 2 * this.maxDistance), this.debugCircles[0].getComponent(s).material.setProperty("color", a.GREEN), this.debugCircles[1].getComponent(s).material.setProperty("color", a.YELLOW)
                }, t.onDisable = function() {
                    i._instance == this && (i._instance = null)
                }, t.getVolumeScale = function(e) {
                    var i = c.distance(e, this.node.worldPosition);
                    if (f.log("Distance from " + e + " to " + this.node.worldPosition + " = " + i, LogCategory.Audio), i >= this.maxDistance) return 0;
                    if (i <= this.minDistance) return 1;
                    var t = this.maxDistance - this.minDistance;
                    return (i -= this.minDistance) / t
                }, b(i, null, [{
                    key: "instance",
                    get: function() {
                        return i._instance
                    }
                }]), i
            }(l), u(E, "_instance", void 0), x = h((_ = k).prototype, "minDistance", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }), P = h(_.prototype, "maxDistance", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 30
                }
            }), z = h(_.prototype, "showDebug", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), A = h(_.prototype, "debugCircles", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), L = _)) || L));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SnacksDispenser.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./FoodItemCarrier.ts", "./FoodItemObject.ts", "./FoodItem.ts", "./InteractionEnums.ts", "./PlayerCharacter.ts", "./KitchenTool.ts"], (function(e) {
    "use strict";
    var t, n, r, i, o, a, s, c, u, p, l, d, f;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, r = e.Prefab
        }, function(e) {
            i = e.applyDecoratedDescriptor, o = e.inheritsLoose, a = e.initializerDefineProperty, s = e.assertThisInitialized
        }, function(e) {
            c = e.FoodItemCarrier
        }, function(e) {
            u = e.FoodItemObject
        }, function(e) {
            p = e.FoodItem
        }, function(e) {
            l = e.InteractionResult
        }, function(e) {
            d = e.PlayerCharacter
        }, function(e) {
            f = e.KitchenTool
        }],
        execute: function() {
            var y, h, m, I, b, g, k;
            t._RF.push({}, "064faDyo2RLfL+VWjO6Ak1C", "SnacksDispenser", void 0);
            var D = n.ccclass,
                v = n.property;
            e("SnacksDispenser", (y = D("SnacksDispenser"), h = v({
                displayOrder: -1
            }), m = v({
                type: r,
                group: {
                    id: "prefabs",
                    name: "Prefabs",
                    displayOrder: 4
                }
            }), y((g = i((b = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(r)) || this, a(s(t), "id", g, s(t)), a(s(t), "snack", k, s(t)), t
                }
                o(t, e);
                var n = t.prototype;
                return n.getId = function() {
                    return this.id
                }, n.startInteraction = function() {
                    return d.instance.getComponent(c).hasItem() ? l.HandsOccupied : l.Success
                }, n.endInteraction = function() {
                    var e = d.instance.getComponent(c),
                        t = this.snack.data.getComponent(p),
                        n = u.InstantiateNew(t);
                    e.push(n) || t.node.destroy()
                }, t
            }(f)).prototype, "id", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "SnacksDispenser"
                }
            }), k = i(b.prototype, "snack", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = b)) || I));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ScoreController.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var r, i, o, t, n, l, c, u, a;
    return {
        setters: [function(e) {
            r = e.cclegacy, i = e._decorator, o = e.Component
        }, function(e) {
            t = e.defineProperty, n = e.applyDecoratedDescriptor, l = e.inheritsLoose, c = e.initializerDefineProperty, u = e.assertThisInitialized, a = e.createClass
        }],
        execute: function() {
            var s, d, p, f, m, S, h, g, y, b, w, M, _;
            e("ScoreRange", void 0), r._RF.push({}, "06b65uFsUVA8p0eqKb6XGXr", "ScoreController", void 0);
            var v, F = i.ccclass,
                L = i.property;
            ! function(e) {
                e[e.Failed = 0] = "Failed", e[e.Low = 1] = "Low", e[e.Medium = 2] = "Medium", e[e.Perfect = 3] = "Perfect"
            }(v || (v = e("ScoreRange", {})));
            e("ScoreController", (s = F("ScoreController"), d = L({
                group: {
                    id: "fullScore",
                    name: "Full Score"
                }
            }), p = L({
                group: {
                    id: "mediumScore",
                    name: "Medium Score"
                }
            }), f = L({
                group: {
                    id: "mediumScore",
                    name: "Medium Score"
                }
            }), m = L({
                group: {
                    id: "lowScore",
                    name: "Low Score"
                }
            }), s((_ = M = function(e) {
                function r() {
                    for (var r, i = arguments.length, o = new Array(i), t = 0; t < i; t++) o[t] = arguments[t];
                    return r = e.call.apply(e, [this].concat(o)) || this, c(u(r), "fullScoreThreshold", g, u(r)), c(u(r), "mediumScoreThreshold", y, u(r)), c(u(r), "mediumScoreMultiplier", b, u(r)), c(u(r), "lowScoreMultiplier", w, u(r)), r
                }
                l(r, e);
                var i = r.prototype;
                return i.onLoad = function() {
                    null == r._instance ? r._instance = this : this.node.destroy()
                }, i.onDestroy = function() {
                    r._instance == this && (r._instance = null)
                }, i.getScoreRange = function(e) {
                    return e >= this.fullScoreThreshold ? v.Perfect : e >= this.mediumScoreThreshold ? v.Medium : e > 0 ? v.Low : v.Failed
                }, i.getScoreMultiplier = function(e, r) {
                    switch (void 0 === e && (e = -1), void 0 === r && (r = v.Perfect), e > -1 && (r = this.getScoreRange(e)), r) {
                        case v.Failed:
                            return 0;
                        case v.Low:
                            return this.lowScoreMultiplier;
                        case v.Medium:
                            return this.mediumScoreMultiplier;
                        case v.Perfect:
                            return 1
                    }
                }, a(r, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), r
            }(o), t(M, "_instance", null), g = n((h = _).prototype, "fullScoreThreshold", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .6
                }
            }), y = n(h.prototype, "mediumScoreThreshold", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .2
                }
            }), b = n(h.prototype, "mediumScoreMultiplier", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .8
                }
            }), w = n(h.prototype, "lowScoreMultiplier", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5
                }
            }), S = h)) || S));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/NodeFollower.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var t, o, r, i, n, l, c, a;
    return {
        setters: [function(e) {
            t = e.cclegacy, o = e._decorator, r = e.Node, i = e.Component
        }, function(e) {
            n = e.applyDecoratedDescriptor, l = e.inheritsLoose, c = e.initializerDefineProperty, a = e.assertThisInitialized
        }],
        execute: function() {
            var s, u, p, d, f;
            t._RF.push({}, "07c28k114pARqvvsS8k+cnk", "NodeFollower", void 0);
            var h = o.ccclass,
                y = o.property;
            e("NodeFollower", (s = h("NodeFollower"), u = y(r), s((f = n((d = function(e) {
                function t() {
                    for (var t, o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(r)) || this, c(a(t), "target", f, a(t)), t
                }
                return l(t, e), t.prototype.lateUpdate = function() {
                    this.node.worldPosition = this.target.worldPosition
                }, t
            }(i)).prototype, "target", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), p = d)) || p));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TutorialData.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var i, r, e;
    return {
        setters: [function(t) {
            i = t.cclegacy
        }, function(t) {
            r = t.createClass, e = t.defineProperty
        }],
        execute: function() {
            i._RF.push({}, "0817aEkDeBPpKLSAt38sRQU", "TutorialData", void 0);
            t("TutorialData", function() {
                function t(t) {
                    e(this, "_priority", void 0), this._priority = t.priority
                }
                return r(t, [{
                    key: "priority",
                    get: function() {
                        return this._priority
                    }
                }]), t
            }());
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UIVirtualJoystick.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./TweenCollection.ts", "./VirutalJoystick%20enums.ts"], (function(t) {
    "use strict";
    var i, e, n, o, s, r, a, u, c, l, h, p, d, f, _, y, m, g, v, T, b, C, w, P;
    return {
        setters: [function(t) {
            i = t.cclegacy, e = t._decorator, n = t.Enum, o = t.Camera, s = t.UIOpacity, r = t.Node, a = t.UITransform, u = t.input, c = t.Input, l = t.Vec3, h = t.director, p = t.Vec2, d = t.screen, f = t.Canvas, _ = t.Component
        }, function(t) {
            y = t.applyDecoratedDescriptor, m = t.inheritsLoose, g = t.initializerDefineProperty, v = t.assertThisInitialized, T = t.defineProperty, b = t.createClass
        }, function(t) {
            C = t.projectEvent
        }, function(t) {
            w = t.TweenCollection
        }, function(t) {
            P = t.VirtualJoystickEvent
        }],
        execute: function() {
            var k, H, E, D, S, O, I, z, R, U, V, A, J, M, L, x, j, N, F, B, G, W, Z;
            i._RF.push({}, "09e1dLFgZhCrL2KX2024O5A", "UIVirtualJoystick", void 0);
            var q, K = e.ccclass,
                X = e.property;
            ! function(t) {
                t[t.ResetPosition = 0] = "ResetPosition", t[t.Hide = 1] = "Hide"
            }(q || (q = {}));
            t("UIVirtualJoystick", (k = K("UIVirtualJoystick"), H = X({
                type: n(q),
                visible: !0,
                group: {
                    id: "configuration",
                    name: "Configuration"
                },
                formerlySerializedAs: "style"
            }), E = X({
                visible: !0,
                group: {
                    id: "configuration",
                    name: "Configuration"
                },
                tooltip: "Leave at 0 if the joystick should not reposition itself when the user hold his finger over it."
            }), D = X({
                visible: !0,
                group: {
                    id: "configuration",
                    name: "Configuration"
                },
                tooltip: "Minimum distance in pixels needed to consider the input as a movement"
            }), S = X({
                type: o,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                tooltip: "If left blank will try to find a camera in the parent canvas"
            }), O = X({
                type: s,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                formerlySerializedAs: "contentOpacity"
            }), I = X({
                type: r,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                formerlySerializedAs: "pivot"
            }), z = X({
                type: r,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                formerlySerializedAs: "joystickBG"
            }), R = X({
                type: w,
                visible: !0,
                group: {
                    id: "fade",
                    name: "Fade Effects"
                },
                formerlySerializedAs: "tweenShow"
            }), U = X({
                type: w,
                visible: !0,
                group: {
                    id: "fade",
                    name: "Fade Effects"
                },
                formerlySerializedAs: "tweenHide"
            }), V = X({
                visible: !0
            }), k((M = y((J = function(t) {
                function i() {
                    for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                    return i = t.call.apply(t, [this].concat(n)) || this, g(v(i), "_style", M, v(i)), g(v(i), "_timeToReposition", L, v(i)), g(v(i), "_minMovementScreenHeightRatio", x, v(i)), g(v(i), "_camera", j, v(i)), g(v(i), "_contentOpacity", N, v(i)), g(v(i), "_pivot", F, v(i)), g(v(i), "_joystickBG", B, v(i)), g(v(i), "_tweenShow", G, v(i)), g(v(i), "_tweenHide", W, v(i)), g(v(i), "_detectClicksOnCanvas", Z, v(i)), T(v(i), "_radius", 64), T(v(i), "_initialVirtualJoystickPosition", void 0), T(v(i), "_touchData", null), i
                }
                m(i, t);
                var e = i.prototype;
                return e.onLoad = function() {
                    var t = this.node.getComponent(a);
                    t && (this._radius = t.contentSize.width / 2)
                }, e.start = function() {
                    u.on(c.EventType.TOUCH_START, this.onTouchStart, this), u.on(c.EventType.TOUCH_MOVE, this.onTouchMove, this), u.on(c.EventType.TOUCH_END, this.onTouchEndOrCancel, this), u.on(c.EventType.TOUCH_CANCEL, this.onTouchEndOrCancel, this), this.node.parent && this.node.setSiblingIndex(this.node.parent.children.length - 1), this._style == q.Hide && (this._contentOpacity.opacity = 0), this._initialVirtualJoystickPosition = new l(this.node.worldPosition)
                }, e.onDestroy = function() {
                    u.off(c.EventType.TOUCH_START, this.onTouchStart, this), u.off(c.EventType.TOUCH_MOVE, this.onTouchMove, this), u.off(c.EventType.TOUCH_END, this.onTouchEndOrCancel, this), u.off(c.EventType.TOUCH_CANCEL, this.onTouchEndOrCancel, this)
                }, e.update = function(t) {
                    if (this.hasInput) {
                        this.usingReposition && h.getCurrentTime() - this._touchData.lastTime >= 1e3 * this._timeToReposition && this._touchData.updateReferencePosition();
                        var i = this.getNormalizedJoystickPosition();
                        this.updatePivotPosition(i), C.emit(P[P.VistualJoystickPositionUpdated], i)
                    }
                }, e.onTouchStart = function(t) {
                    this._touchData || (this._detectClicksOnCanvas || null === t.currentTarget) && (this._touchData = new Q(t.touch.getID(), t.touch.getLocation(), t.touch.lastModified), this.onInputStart())
                }, e.onTouchMove = function(t) {
                    this._touchData && this._touchData.id == t.getID() && (p.distance(t.touch.getLocation(), this._touchData.referencePosition) >= d.windowSize.height * this._minMovementScreenHeightRatio && this._touchData.updatePosition(t.touch.getLocation(), t.touch.lastModified))
                }, e.onTouchEndOrCancel = function(t) {
                    this._touchData && this._touchData.id == t.getID() && (this._touchData = null, this.onInputEnd())
                }, e.onInputStart = function() {
                    var t, i;
                    this._style == q.Hide && (null === (t = this._tweenHide) || void 0 === t || t.stop(), null === (i = this._tweenShow) || void 0 === i || i.play())
                }, e.onInputEnd = function() {
                    var t, i;
                    this._style == q.Hide ? (null === (t = this._tweenShow) || void 0 === t || t.stop(), null === (i = this._tweenHide) || void 0 === i || i.play()) : (this.node.setWorldPosition(this._initialVirtualJoystickPosition), this._pivot.setPosition(0, 0, 0))
                }, e.updatePivotPosition = function(t) {
                    this.node.setWorldPosition(this.screenToCanvas(this._touchData.referencePosition)), this._pivot.setPosition(t.x * this._radius, t.y * this._radius, 0)
                }, e.screenToCanvas = function(t) {
                    var i = new l(t.x, t.y, 0),
                        e = new l;
                    return this.camera.screenToWorld(i, e), e
                }, e.getNormalizedJoystickPosition = function() {
                    if (!this._touchData) return new p(0, 0);
                    var t = new p(this._touchData.positionDelta);
                    return t.lengthSqr() < this._radius * this._radius ? t.multiplyScalar(1 / this._radius) : t.normalize(), t
                }, b(i, [{
                    key: "hasInput",
                    get: function() {
                        return null != this._touchData
                    }
                }, {
                    key: "camera",
                    get: function() {
                        return null == this._camera && (this._camera = this.node.parent.getComponent(f).cameraComponent), this._camera
                    }
                }, {
                    key: "usingReposition",
                    get: function() {
                        return this._timeToReposition > 0
                    }
                }]), i
            }(_)).prototype, "_style", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return q.ResetPosition
                }
            }), L = y(J.prototype, "_timeToReposition", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), x = y(J.prototype, "_minMovementScreenHeightRatio", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .01
                }
            }), j = y(J.prototype, "_camera", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = y(J.prototype, "_contentOpacity", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = y(J.prototype, "_pivot", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), B = y(J.prototype, "_joystickBG", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = y(J.prototype, "_tweenShow", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = y(J.prototype, "_tweenHide", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = y(J.prototype, "_detectClicksOnCanvas", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), A = J)) || A));
            var Q = function() {
                    function t(t, i, e) {
                        T(this, "_id", void 0), T(this, "_positionHistory", []), T(this, "_referencePositionIndex", 0), this._id = t, this.updatePosition(i, e), this._referencePositionIndex = 0
                    }
                    var i = t.prototype;
                    return i.updatePosition = function(t, i) {
                        this._positionHistory.push(new Y(t, i))
                    }, i.updateReferencePosition = function() {
                        this._referencePositionIndex = this._positionHistory.length - 1
                    }, b(t, [{
                        key: "id",
                        get: function() {
                            return this._id
                        }
                    }, {
                        key: "referencePosition",
                        get: function() {
                            return this._positionHistory[this._referencePositionIndex].position
                        }
                    }, {
                        key: "referenceTime",
                        get: function() {
                            return this._positionHistory[this._referencePositionIndex].time
                        }
                    }, {
                        key: "lastPosition",
                        get: function() {
                            return this._positionHistory[this._positionHistory.length - 1].position
                        }
                    }, {
                        key: "lastTime",
                        get: function() {
                            return this._positionHistory[this._positionHistory.length - 1].time
                        }
                    }, {
                        key: "positionDelta",
                        get: function() {
                            return new p(this.lastPosition).subtract(this.referencePosition)
                        }
                    }]), t
                }(),
                Y = function() {
                    function t(t, i) {
                        T(this, "_position", p.ZERO), T(this, "_time", 0), this._position = t, this._time = i
                    }
                    return b(t, [{
                        key: "position",
                        get: function() {
                            return this._position
                        }
                    }, {
                        key: "time",
                        get: function() {
                            return this._time
                        }
                    }]), t
                }();
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TweenNodePosition.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./TweenBase.ts"], (function(t) {
    "use strict";
    var e, i, a, n, o, s, r, u, l;
    return {
        setters: [function(t) {
            e = t.cclegacy, i = t._decorator, a = t.Vec3, n = t.tween
        }, function(t) {
            o = t.applyDecoratedDescriptor, s = t.inheritsLoose, r = t.initializerDefineProperty, u = t.assertThisInitialized
        }, function(t) {
            l = t.TweenBase
        }],
        execute: function() {
            var h, c, p, d, y, v, w, f;
            e._RF.push({}, "09f00cyaRdMraH6RbUaiRdA", "TweenNodePosition", void 0);
            var g = i.ccclass,
                b = i.property,
                P = i.menu;
            t("TweenNodePosition", (h = g("TweenNodePosition"), c = P("Tween/Position"), p = b({
                type: a
            }), d = b(a), h(y = c((w = o((v = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), n = 0; n < i; n++) a[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(a)) || this, r(u(e), "valueStart", w, u(e)), r(u(e), "valueEnd", f, u(e)), e
                }
                s(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    t.prototype.onLoad.call(this), this.useCustomStartValue ? this.target.setPosition(this.valueStart) : this.valueStart.set(this.target.position), this.useRelativeValue ? (this.tweenCache = n(this.target).delay(this.delay).by(this.duration, {
                        position: this.valueEnd
                    }, this.options).repeat(1), this.tweenReverseCache = n(this.target).delay(this.delay).by(this.duration, {
                        position: this.valueStart
                    }, this.options).repeat(1)) : (this.tweenCache = n(this.target).delay(this.delay).to(this.duration, {
                        position: this.valueEnd
                    }, this.options).repeat(1), this.tweenReverseCache = n(this.target).delay(this.delay).to(this.duration, {
                        position: this.valueStart
                    }, this.options).repeat(1))
                }, i.reset = function() {
                    this.target.setPosition(this.valueStart)
                }, e
            }(l)).prototype, "valueStart", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new a
                }
            }), f = o(v.prototype, "valueEnd", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new a(1, 1, 1)
                }
            }), y = v)) || y) || y));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomerBalconyPoint.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./FoodItemCarrier.ts", "./PizzaRecipe.ts", "./InteractionEnums.ts", "./GameplayCanvas.ts", "./UITrackWorldNode.ts", "./PlayerCharacter.ts", "./InputEnums.ts", "./FoodOrderDisplay.ts", "./CustomerReactionsController.ts", "./PizzaObject.ts"], (function(e) {
    "use strict";
    var t, n, o, i, r, a, s, l, c, u, d, p, f, y, m, h, P, b, C, I, g, v, z;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, o = e.Node, i = e.Prefab, r = e.Collider, a = e.instantiate, s = e.Component
        }, function(e) {
            l = e.applyDecoratedDescriptor, c = e.inheritsLoose, u = e.initializerDefineProperty, d = e.assertThisInitialized, p = e.defineProperty, f = e.createClass
        }, function(e) {
            y = e.FoodItemCarrier
        }, function(e) {
            m = e.PizzaState
        }, function(e) {
            h = e.InteractionResult
        }, function(e) {
            P = e.GameplayCanvas
        }, function(e) {
            b = e.UITrackWorldNode
        }, function(e) {
            C = e.PlayerCharacter
        }, function(e) {
            I = e.InputEvent
        }, function(e) {
            g = e.FoodOrderDisplay
        }, function(e) {
            v = e.CustomerReactionsController
        }, function(e) {
            z = e.PizzaObject
        }],
        execute: function() {
            var D, O, _, k, F, R, w, T, B, N, H, S, E;
            t._RF.push({}, "0da27UNS05DgaRUGz5Iaaft", "CustomerBalconyPoint", void 0);
            var U = n.ccclass,
                j = n.property;
            e("CustomerBalconyPoint", (D = U("CustomerBalconyPoint"), O = j(o), _ = j(o), k = j({
                type: o,
                visible: !0
            }), F = j(i), R = j({
                type: v,
                visible: !0
            }), D((B = l((T = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(o)) || this, u(d(t), "customerPosition", B, d(t)), u(d(t), "playerPosition", N, d(t)), u(d(t), "_customerOrderPosition", H, d(t)), u(d(t), "foodOrderDisplayPrefab", S, d(t)), u(d(t), "_customerReaction", E, d(t)), p(d(t), "collider", null), p(d(t), "customer", null), p(d(t), "_foodOrderDisplay", null), t
                }
                c(t, e);
                var n = t.prototype;
                return n.onLoad = function() {
                    this.collider = this.getComponent(r)
                }, n.onEnable = function() {
                    this.node.on(I[I.Input_Tap], this.onPlayerTap.bind(this))
                }, n.start = function() {
                    this.collider.enabled = !1, this._foodOrderDisplay = a(this.foodOrderDisplayPrefab).getComponent(g), this._foodOrderDisplay.node.setParent(P.instance.node), this._foodOrderDisplay.getComponent(b).setup(this._customerOrderPosition)
                }, n.onDisable = function() {
                    this.node.off(I[I.Input_Tap], this.onPlayerTap.bind(this))
                }, n.getCustomerPosition = function() {
                    return this.customerPosition.worldPosition
                }, n.getPlayerPosition = function() {
                    return this.playerPosition.worldPosition
                }, n.checkIn = function(e) {
                    this.setCustomer(e)
                }, n.checkOut = function() {
                    this.setCustomer(null)
                }, n.setCustomer = function(e) {
                    this.customer !== e && (this.collider.enabled = null != e, this.customer = e)
                }, n.hasCustomer = function() {
                    return null != this.customer
                }, n.onPlayerTap = function() {
                    this.movePlayerHere()
                }, n.movePlayerHere = function() {
                    C.instance.moveTo(this.playerPosition.worldPosition, this.onPlayerHere.bind(this))
                }, n.onPlayerHere = function() {
                    if (C.instance.lookAt(this.node.worldPosition), this.hasCustomer()) {
                        var e = C.instance.getComponent(y);
                        if (e.hasItem()) {
                            var t = e.peek();
                            if (t.getItem().isReadyForDelivery()) this.customer.receiveOrderItem(t.getItem()) ? (e.pull().node.destroy(), t.node.destroy()) : C.instance.playInteractionFeedback(h.ItemNotOrdered);
                            else if (t instanceof z) {
                                var n = t.getItem();
                                n.getState() == m.Raw ? C.instance.playInteractionFeedback(h.PizzaNotCooked) : n.getState() == m.Burned ? C.instance.playInteractionFeedback(h.PizzaBurned) : C.instance.playInteractionFeedback(h.Failure)
                            } else C.instance.playInteractionFeedback(h.Failure)
                        }
                    }
                }, f(t, [{
                    key: "orderDisplay",
                    get: function() {
                        return this._foodOrderDisplay
                    }
                }, {
                    key: "reactionDisplay",
                    get: function() {
                        return this._customerReaction
                    }
                }]), t
            }(s)).prototype, "customerPosition", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = l(T.prototype, "playerPosition", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = l(T.prototype, "_customerOrderPosition", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = l(T.prototype, "foodOrderDisplayPrefab", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = l(T.prototype, "_customerReaction", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), w = T)) || w));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GameplayCanvas.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(n) {
    "use strict";
    var t, e, a, s, i, c, o, r;
    return {
        setters: [function(n) {
            t = n.cclegacy, e = n._decorator, a = n.Canvas, s = n.Component
        }, function(n) {
            i = n.defineProperty, c = n.inheritsLoose, o = n.assertThisInitialized, r = n.createClass
        }],
        execute: function() {
            var l, u, p;
            t._RF.push({}, "10264BWDDZMJLXHyi53SgnS", "GameplayCanvas", void 0);
            var v = e.ccclass;
            n("GameplayCanvas", v("GameplayCanvas")((p = u = function(n) {
                function t() {
                    for (var t, e = arguments.length, a = new Array(e), s = 0; s < e; s++) a[s] = arguments[s];
                    return t = n.call.apply(n, [this].concat(a)) || this, i(o(t), "_canvas", null), t
                }
                c(t, n);
                var e = t.prototype;
                return e.onLoad = function() {
                    null == t._instance ? (t._instance = this, this._canvas = this.node.getComponent(a)) : this.node.destroy()
                }, e.onDestroy = function() {
                    t._instance == this && (t._instance = null)
                }, r(t, [{
                    key: "canvas",
                    get: function() {
                        return this._canvas
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), t
            }(s), i(u, "_instance", null), l = p)) || l);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/OrderItemScoreDisplay.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ScoreDisplay.ts"], (function(e) {
    "use strict";
    var r, t, i, o, n, a, s, c, l, u, p, m;
    return {
        setters: [function(e) {
            r = e.cclegacy, t = e._decorator, i = e.Label, o = e.animation, n = e.EventHandler, a = e.Component
        }, function(e) {
            s = e.applyDecoratedDescriptor, c = e.inheritsLoose, l = e.initializerDefineProperty, u = e.assertThisInitialized, p = e.defineProperty
        }, function(e) {
            m = e.ScoreDisplay
        }],
        execute: function() {
            var h, y, d, f, b, v, w, S, g, D, _;
            r._RF.push({}, "109f6ZYJZBBlLmE+7PVH/Aa", "OrderItemScoreDisplay", void 0);
            var P = t.ccclass,
                z = t.property;
            e("OrderItemScoreDisplay", (h = P("OrderItemScoreDisplay"), y = z(i), d = z({
                type: o.AnimationController,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), f = z({
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), b = z({
                type: n,
                visible: !0,
                group: {
                    id: "events",
                    name: "Events"
                }
            }), h((S = s((w = function(e) {
                function r() {
                    for (var r, t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                    return r = e.call.apply(e, [this].concat(i)) || this, l(u(r), "scoreText", S, u(r)), l(u(r), "animator", g, u(r)), l(u(r), "showParameter", D, u(r)), l(u(r), "_onShow", _, u(r)), p(u(r), "score", void 0), p(u(r), "tweenCache", void 0), r
                }
                c(r, e);
                var t = r.prototype;
                return t.showScore = function(e) {
                    this.score = e, this.scoreText.string = "+" + e.toFixed(), this.animator.setValue(this.showParameter, !0), n.emitEvents(this._onShow)
                }, t.addToScoreDisplay = function() {
                    m.instance.addScore(this.score)
                }, r
            }(a)).prototype, "scoreText", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = s(w.prototype, "animator", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = s(w.prototype, "showParameter", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "showScore"
                }
            }), _ = s(w.prototype, "_onShow", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), v = w)) || v));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ObjectPool.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var e, o;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }, function(t) {
            o = t.defineProperty
        }],
        execute: function() {
            e._RF.push({}, "11492o6PdtKSpWjhHMselFX", "ObjectPool", void 0);
            t("ObjectPool", function() {
                function t(t, e) {
                    void 0 === e && (e = 0), o(this, "elements", []), this.allocator = t;
                    for (var n = 0; n < e; n++) this.elements.push(this.allocator())
                }
                var e = t.prototype;
                return e.get = function() {
                    return this.elements.length > 0 ? this.elements.pop() : this.allocator()
                }, e.release = function(t) {
                    this.elements.push(t)
                }, t
            }());
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SaveGame.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./SaveGameData.ts"], (function(e) {
    "use strict";
    var a, n, t, s, i, r, o;
    return {
        setters: [function(e) {
            a = e.cclegacy, n = e.sys
        }, function(e) {
            t = e.defineProperty
        }, function(e) {
            s = e.logger
        }, function(e) {
            i = e.projectEvent
        }, function(e) {
            r = e.DataLoadingEvent
        }, function(e) {
            o = e.SaveGameData
        }],
        execute: function() {
            a._RF.push({}, "1259btpMBlCZ7sR1pCIXNCs", "SaveGame", void 0);
            var c = e("SaveGame", function() {
                function e() {
                    t(this, "_saveKey", "PandaPizzaSave"), t(this, "_savedData", null), t(this, "_runningTransaction", null), this.load()
                }
                var a = e.prototype;
                return a.isDataLoaded = function() {
                    return null != this._savedData
                }, a.getLastPlayedLevelName = function() {
                    return this._runningTransaction ? this._runningTransaction.getLastPlayedLevelName() : this._savedData.getLastPlayedLevelName()
                }, a.setLastPlayedLevelName = function(e) {
                    this._runningTransaction ? this._runningTransaction.setLastPlayedLevelName(e) : (this._savedData.setLastPlayedLevelName(e), this.save())
                }, a.getLevelMaxScore = function(e) {
                    return this._runningTransaction ? this._runningTransaction.getlevelMaxScore(e.getName()) : this._savedData.getlevelMaxScore(e.getName())
                }, a.setLevelMaxScore = function(e, a) {
                    if (this._runningTransaction) return this._runningTransaction.setlevelMaxScore(e.getName(), a);
                    this._savedData.setlevelMaxScore(e.getName(), a), this.save()
                }, a.getMaxLevelUnlockedIndex = function() {
                    return this._runningTransaction ? this._runningTransaction.getMaxUnlockedLevel() : this._savedData.getMaxUnlockedLevel()
                }, a.setMaxLevelUnlockedIndex = function(e) {
                    if (this._runningTransaction) return this._runningTransaction.setMaxUnlockedLevel(e);
                    this._savedData.setMaxUnlockedLevel(e), this.save()
                }, a.startTransaction = function() {
                    return !this._runningTransaction && (this._runningTransaction = new o(this._savedData), !0)
                }, a.commitTransaction = function() {
                    this._savedData = this._runningTransaction, this._runningTransaction = null, this.save()
                }, a.rollbackTransaction = function() {
                    this._runningTransaction = null
                }, a.save = function() {
                    if (this._savedData) {
                        var e = JSON.stringify(this._savedData, this.replacer);
                        return n.localStorage.setItem(this._saveKey, e), void s.log("Saved game: " + e)
                    }
                    s.log("No data to save.")
                }, a.load = function() {
                    var e = n.localStorage.getItem(this._saveKey);
                    e ? (this._savedData = new o(JSON.parse(e, this.reviver)), s.log("Loaded saved game: " + e)) : (this._savedData = new o, s.log("No data to load.")), i.emit(r.SaveGameLoaded)
                }, a.replacer = function(e, a) {
                    return a instanceof Map ? {
                        dataType: "Map",
                        value: Array.from(a.entries())
                    } : a
                }, a.reviver = function(e, a) {
                    return "object" == typeof a && null !== a && "Map" === a.dataType ? new Map(a.value) : a
                }, e
            }());
            e("saveGame", new c);
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TweenNodeScale.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./TweenBase.ts"], (function(e) {
    "use strict";
    var t, i, a, n, s, r, l, o, u;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, a = e.Vec3, n = e.tween
        }, function(e) {
            s = e.applyDecoratedDescriptor, r = e.inheritsLoose, l = e.initializerDefineProperty, o = e.assertThisInitialized
        }, function(e) {
            u = e.TweenBase
        }],
        execute: function() {
            var c, h, p, d, v, y, w, f;
            t._RF.push({}, "12ea43w32ZDAL2+IVCNZlsZ", "TweenNodeScale", void 0);
            var S = i.ccclass,
                g = i.property,
                T = i.menu;
            e("TweenNodeScale", (c = S("TweenNodeScale"), h = T("Tween/Scale"), p = g({
                type: a
            }), d = g({
                type: a
            }), c(v = h((w = s((y = function(e) {
                function t() {
                    for (var t, i = arguments.length, a = new Array(i), n = 0; n < i; n++) a[n] = arguments[n];
                    return t = e.call.apply(e, [this].concat(a)) || this, l(o(t), "valueStart", w, o(t)), l(o(t), "valueEnd", f, o(t)), t
                }
                r(t, e);
                var i = t.prototype;
                return i.onLoad = function() {
                    e.prototype.onLoad.call(this), this.useCustomStartValue ? this.target.setScale(this.valueStart) : this.valueStart.set(this.target.scale), this.initializeTween()
                }, i.initializeTween = function() {
                    this.useRelativeValue ? (this.tweenCache = n(this.target).delay(this.delay).by(this.duration, {
                        scale: this.valueEnd
                    }, this.options).repeat(1), this.tweenReverseCache = n(this.target).delay(this.delay).by(this.duration, {
                        scale: this.valueStart
                    }, this.options).repeat(1)) : (this.tweenCache = n(this.target).delay(this.delay).to(this.duration, {
                        scale: this.valueEnd
                    }, this.options).repeat(1), this.tweenReverseCache = n(this.target).delay(this.delay).to(this.duration, {
                        scale: this.valueStart
                    }, this.options).repeat(1))
                }, i.reset = function() {
                    this.target.setScale(this.valueStart)
                }, i.setValues = function(e, t) {
                    this.valueStart = e, this.valueEnd = t, this.initializeTween()
                }, i.setEndValue = function(e) {
                    this.valueEnd = e, this.initializeTween()
                }, t
            }(u)).prototype, "valueStart", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new a
                }
            }), f = s(y.prototype, "valueEnd", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new a(1, 1, 1)
                }
            }), v = y)) || v) || v));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelSequenceController.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./LevelSequence.ts"], (function(e) {
    "use strict";
    var n, t, l, s, i, r, o, a, c, u, d, v, f;
    return {
        setters: [function(e) {
            n = e.cclegacy, t = e._decorator, l = e.game, s = e.Component
        }, function(e) {
            i = e.defineProperty, r = e.applyDecoratedDescriptor, o = e.inheritsLoose, a = e.initializerDefineProperty, c = e.assertThisInitialized, u = e.createClass
        }, function(e) {
            d = e.projectEvent
        }, function(e) {
            v = e.DataLoadingEvent
        }, function(e) {
            f = e.LevelSequence
        }],
        execute: function() {
            var L, p, h, _, y, S, q, g, b, D, k;
            n._RF.push({}, "147367ecsFJ7rFiCzSHq9sG", "LevelSequenceController", void 0);
            var m = t.ccclass,
                C = t.property;
            e("LevelSequenceController", (L = m("LevelSequenceController"), p = C({
                visible: !0
            }), h = C({
                type: f,
                visible: !0
            }), _ = C({
                type: f,
                visible: !0
            }), L((k = D = function(e) {
                function n() {
                    for (var n, t = arguments.length, l = new Array(t), s = 0; s < t; s++) l[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(l)) || this, a(c(n), "_unlockEndlessAfterLevel", q, c(n)), a(c(n), "_levelsSequence", g, c(n)), a(c(n), "_endlessLevelsSequence", b, c(n)), n
                }
                o(n, e);
                var t = n.prototype;
                return t.onLoad = function() {
                    n._instance ? this.node.destroy() : (n._instance = this, l.addPersistRootNode(this.node), this.loadLevelsData())
                }, t.onDestroy = function() {
                    n._instance == this && (n._instance = null)
                }, t.isDataLoaded = function() {
                    return this._levelsSequence.isDataLoaded() && this._endlessLevelsSequence.isDataLoaded()
                }, t.loadLevelsData = function() {
                    this.levels.loadData(), this.endlessLevels.loadData(), d.emit(v.LevelsSequenceLoaded)
                }, u(n, [{
                    key: "levels",
                    get: function() {
                        return this._levelsSequence
                    }
                }, {
                    key: "endlessLevels",
                    get: function() {
                        return this._endlessLevelsSequence
                    }
                }, {
                    key: "endlessLevelUnlockThreshold",
                    get: function() {
                        return this._unlockEndlessAfterLevel
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), n
            }(s), i(D, "_instance", void 0), q = r((S = k).prototype, "_unlockEndlessAfterLevel", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 35
                }
            }), g = r(S.prototype, "_levelsSequence", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = r(S.prototype, "_endlessLevelsSequence", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = S)) || y));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CharacterRotation.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./TweenEnums.ts"], (function(e) {
    "use strict";
    var t, n, i, r, o, a, s, l, c, u, h, p;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.Enum, r = e.Vec3, o = e.tween, a = e.Component
        }, function(e) {
            s = e.applyDecoratedDescriptor, l = e.inheritsLoose, c = e.initializerDefineProperty, u = e.assertThisInitialized, h = e.defineProperty
        }, function(e) {
            p = e.TweenEasing
        }],
        execute: function() {
            var d, f, g, w, _, y, v;
            t._RF.push({}, "19eedIu69FLVqwAQ57fnWyu", "CharacterRotation", void 0);
            var b = n.ccclass,
                A = n.property;
            e("CharacterRotation", (d = b("CharacterRotation"), f = A({
                visible: !0,
                formerlySerializedAs: "rotationSpeed"
            }), g = A({
                type: i(p),
                visible: !0,
                formerlySerializedAs: "easing"
            }), d((y = s((_ = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(i)) || this, c(u(t), "_rotationSpeed", y, u(t)), c(u(t), "_easing", v, u(t)), h(u(t), "_tweenCache", void 0), h(u(t), "_tweenOptions", {}), t
                }
                l(t, e);
                var n = t.prototype;
                return n.rotateTo = function(e) {
                    this.stop(), this._tweenOptions.easing = p[this._easing];
                    var t = this.node.forward,
                        n = this.getSignedAngle(t, e, r.UP),
                        i = new r;
                    i.set(this.node.eulerAngles.x, this.node.eulerAngles.y + n, this.node.eulerAngles.z), this._tweenCache = o(this.node).to(Math.abs(n) / this._rotationSpeed, {
                        eulerAngles: i
                    }, this._tweenOptions).repeat(1), this._tweenCache.start()
                }, n.lookAt = function(e) {
                    var t = new r;
                    r.subtract(t, e, this.node.position), this.rotateTo(t)
                }, n.stop = function() {
                    null != this._tweenCache && (this._tweenCache.stop(), this._tweenCache = null)
                }, n.getSignedAngle = function(e, t, n) {
                    var i = Math.acos(r.dot(e.normalize(), t.normalize())) * (180 / Math.PI),
                        o = new r;
                    return r.cross(o, e, t), r.dot(n, o) < 0 && (i = -i), i
                }, t
            }(a)).prototype, "_rotationSpeed", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), v = s(_.prototype, "_easing", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return p.linear
                }
            }), w = _)) || w));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PunchTweenBase.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts"], (function(t) {
    "use strict";
    var e, n, i, r, a, o, u, s, l, c, h, g, p;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t._decorator, i = t.Node, r = t.Vec3, a = t.EventHandler, o = t.Component
        }, function(t) {
            u = t.applyDecoratedDescriptor, s = t.inheritsLoose, l = t.initializerDefineProperty, c = t.assertThisInitialized, h = t.defineProperty, g = t.createClass
        }, function(t) {
            p = t.logger
        }],
        execute: function() {
            var f, m, y, b, d, v, w, V, S, z, C, D, _, P, T, M, B, L;
            e._RF.push({}, "1a181DRx0VC2LpN/KLYDv9u", "PunchTweenBase", void 0);
            var x = n.ccclass,
                E = n.property;
            t("PunchTweenBase", (f = x("PunchTweenBase"), m = E(i), y = E(r), b = E({
                min: 0,
                unit: "sec"
            }), d = E({
                min: 0,
                unit: "sec"
            }), v = E({
                min: 0,
                max: 1
            }), w = E({
                type: [a],
                displayOrder: 20
            }), V = E({
                type: [a],
                displayOrder: 20
            }), f((C = u((z = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(i)) || this, l(c(e), "target", C, c(e)), l(c(e), "to", D, c(e)), l(c(e), "delay", _, c(e)), l(c(e), "duration", P, c(e)), l(c(e), "vibrato", T, c(e)), l(c(e), "elasticity", M, c(e)), l(c(e), "onStart", B, c(e)), l(c(e), "onComplete", L, c(e)), h(c(e), "tweenCache", void 0), h(c(e), "_startingValue", void 0), h(c(e), "segmentValues", void 0), h(c(e), "segmentDurations", void 0), e
                }
                s(e, t);
                var n = e.prototype;
                return n.getTarget = function() {
                    return this.target ? this.target : this.node
                }, n.play = function() {
                    this.tweenCache && this.stop(), this._startingValue = this.currentValue, this.setup(), this.playSegment(0)
                }, n.stop = function() {
                    this.tweenCache.stop(), this.tweenCache = null, this.currentValue = this._startingValue
                }, n.playSegment = function(t) {}, n.getSegmentValue = function(t) {
                    return this.segmentValues[t]
                }, n.getSegmentDuration = function(t) {
                    return this.segmentDurations[t]
                }, n.getTweenOptions = function(t) {
                    var e = this,
                        n = {};
                    return n.onStart = function(t) {
                        a.emitEvents(e.onStart, t)
                    }.bind(this), t < this.segmentValues.length - 1 ? n.onComplete = function() {
                        e.playSegment(t + 1)
                    }.bind(this) : n.onComplete = function(t) {
                        a.emitEvents(e.onComplete, t)
                    }.bind(this), n
                }, n.setup = function() {
                    var t = this.to.length(),
                        e = Math.max(Math.floor(this.vibrato * this.duration), 2),
                        n = t / e;
                    this.segmentDurations = new Array(e);
                    for (var i = 0, a = 0; a < e; a++) {
                        var o = (a + 1) / e,
                            u = this.duration * o;
                        i += u, this.segmentDurations[a] = u
                    }
                    for (var s = this.duration / i, l = 0; l < e; l++) this.segmentDurations[l] *= s;
                    var c = new r;
                    r.normalize(c, this.to), this.segmentValues = new Array(e);
                    for (var h = 0; h < e; h++) h < e - 1 ? (this.segmentValues[h] = 0 === h ? this.to : h % 2 != 0 ? this.clampVec3Magnitude(this.to, t * this.elasticity).multiplyScalar(-1) : this.clampVec3Magnitude(this.to, t), t -= n) : this.segmentValues[h] = r.ZERO
                }, n.clampVec3Magnitude = function(t, e) {
                    if (t.length() <= e) return new r(t);
                    var n = new r;
                    return r.normalize(n, t), n.multiplyScalar(e)
                }, n.printSequence = function(t, e) {
                    for (var n = "", i = 0; i < t.length; i++) n += "[" + t[i] + "]", i < t.length - 1 && (n += ", ");
                    for (var r = "", a = 0; a < e.length; a++) r += "" + e[a], a < e.length - 1 && (r += ", ");
                    p.log("Values: " + n + " Durations: " + r)
                }, g(e, [{
                    key: "startingValue",
                    get: function() {
                        return this._startingValue
                    }
                }, {
                    key: "currentValue",
                    get: function() {
                        return null
                    },
                    set: function(t) {}
                }]), e
            }(o)).prototype, "target", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), D = u(z.prototype, "to", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new r(1, 1, 1)
                }
            }), _ = u(z.prototype, "delay", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), P = u(z.prototype, "duration", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), T = u(z.prototype, "vibrato", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }), M = u(z.prototype, "elasticity", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), B = u(z.prototype, "onStart", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), L = u(z.prototype, "onComplete", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), S = z)) || S));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AxisInput.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var n, e, i, r, o, s;
    return {
        setters: [function(t) {
            n = t.cclegacy, e = t.Component
        }, function(t) {
            i = t.inheritsLoose, r = t.createClass, o = t.defineProperty, s = t.assertThisInitialized
        }],
        execute: function() {
            n._RF.push({}, "1a7167v2EBGjoInPfDd+oHG", "AxisInput", void 0);
            t("AxisInput", function(t) {
                function n() {
                    for (var n, e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                    return n = t.call.apply(t, [this].concat(i)) || this, o(s(n), "_horizontal", 0), o(s(n), "_vertical", 0), n
                }
                return i(n, t), r(n, [{
                    key: "horizontal",
                    get: function() {
                        return this._horizontal
                    }
                }, {
                    key: "vertical",
                    get: function() {
                        return this._vertical
                    }
                }]), n
            }(e));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomerList.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./BundleLoader.ts", "./Customer.ts"], (function(t) {
    "use strict";
    var e, o, n, r, s, u, i, a, d, c, l, m;
    return {
        setters: [function(t) {
            e = t.cclegacy, o = t.Prefab, n = t.game, r = t.Game
        }, function(t) {
            s = t.defineProperty
        }, function(t) {
            u = t.logger, i = t.LogCategory, a = t.LogType
        }, function(t) {
            d = t.projectEvent
        }, function(t) {
            c = t.DataLoadingEvent
        }, function(t) {
            l = t.contentLoader
        }, function(t) {
            m = t.Customer
        }],
        execute: function() {
            e._RF.push({}, "1dd35sVuLJG4YgdvOy0ZXJ9", "CustomerList", void 0);
            var f = t("CustomerList", function() {
                function t() {
                    var t = this;
                    s(this, "customers", []), n.on(r.EVENT_GAME_INITED, (function() {
                        l.isDataLoaded() ? t.loadDataFromBundle() : d.once(c.ContentBundleLoaded, t.loadDataFromBundle, t)
                    }), this)
                }
                var e = t.prototype;
                return e.getCustomerById = function(t) {
                    var e = this.getCustomerPrefabById(t);
                    if (null != e) {
                        var o = e.data.getComponent(m);
                        if (null != o) return o;
                        u.log("Customer with id " + t + " is missing a " + m.name + " component!", i.Generic, a.Error)
                    }
                    return null
                }, e.isDataLoaded = function() {
                    return this.customers.length > 0
                }, e.getCustomerPrefabById = function(t) {
                    var e = this.customers.findIndex((function(e) {
                        return e.data.getComponent(m).getId() === t
                    }));
                    return e > -1 ? this.customers[e] : (u.log("Customer with id " + t + " not found on foods list!", i.Generic, a.Error), null)
                }, e.loadDataFromBundle = function() {
                    l.bundle.loadDir("Customers", o, null, this.onLoadComplete.bind(this))
                }, e.onLoadComplete = function(t, e) {
                    this.customers = e.slice(), u.log("Finished loading customers. " + this.customers.length + " customers loaded."), d.emit(c.CustomersLoaded)
                }, t
            }());
            t("customersList", new f);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Ingredient.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var r, t, n, i, o, a, l, u;
    return {
        setters: [function(e) {
            r = e.cclegacy, t = e._decorator, n = e.Prefab, i = e.Component
        }, function(e) {
            o = e.applyDecoratedDescriptor, a = e.inheritsLoose, l = e.initializerDefineProperty, u = e.assertThisInitialized
        }],
        execute: function() {
            var c, p, f, s, b, d, g, y;
            r._RF.push({}, "1eda7zuu/1KAYnWuKx6MNgV", "Ingredient", void 0);
            var z = t.ccclass,
                h = t.property;
            e("Ingredient", (c = z("Ingredient"), p = h(n), f = h(n), c((d = o((b = function(e) {
                function r() {
                    for (var r, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return r = e.call.apply(e, [this].concat(n)) || this, l(u(r), "id", d, u(r)), l(u(r), "pizzaModel", g, u(r)), l(u(r), "balconyPrefab", y, u(r)), r
                }
                a(r, e);
                var t = r.prototype;
                return t.getId = function() {
                    return this.id
                }, t.getPizzaModelPrefab = function() {
                    return this.pizzaModel
                }, t.getPlatformModelPrefab = function() {
                    return this.balconyPrefab
                }, r
            }(i)).prototype, "id", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), g = o(b.prototype, "pizzaModel", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = o(b.prototype, "balconyPrefab", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), s = b)) || s));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TweenUIOpacity.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./TweenBase.ts"], (function(t) {
    "use strict";
    var e, i, a, n, r, s, o, p, c, u, h, l, y, d;
    return {
        setters: [function(t) {
            e = t.cclegacy, i = t._decorator, a = t.CCInteger, n = t.UIOpacity, r = t.tween
        }, function(t) {
            s = t.applyDecoratedDescriptor, o = t.inheritsLoose, p = t.initializerDefineProperty, c = t.assertThisInitialized, u = t.defineProperty
        }, function(t) {
            h = t.logger, l = t.LogCategory, y = t.LogType
        }, function(t) {
            d = t.TweenBase
        }],
        execute: function() {
            var g, v, O, f, w, b, m, C;
            e._RF.push({}, "1eddcq+dFJL6Kd35j8xBAOw", "TweenUIOpacity", void 0);
            var I = i.ccclass,
                S = i.property,
                T = (i.requireComponent, i.menu);
            t("TweenUIOpacity", (g = I("TweenUIOpacity"), v = T("Tween/UIOpacity"), O = S({
                type: a,
                range: [0, 255],
                step: 1,
                slide: !0
            }), f = S({
                type: a,
                range: [0, 255],
                step: 1,
                slide: !0
            }), g(w = v((m = s((b = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), n = 0; n < i; n++) a[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(a)) || this, p(c(e), "valueStart", m, c(e)), p(c(e), "valueEnd", C, c(e)), u(c(e), "uiOpacity", void 0), e
                }
                o(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    t.prototype.onLoad.call(this), this.uiOpacity = this.target.getComponent(n), this.uiOpacity || (h.log("WARNING: target: " + this.target.name + " does not have UIOpacity, adding it, please add at edit time because it is probably better than adding at runtime", l.UI, y.Warning), this.uiOpacity = this.target.addComponent(n)), this.useCustomStartValue ? this.uiOpacity.opacity = this.valueStart : this.valueStart = this.uiOpacity.opacity, this.useRelativeValue ? (this.tweenCache = r(this.uiOpacity).delay(this.delay).by(this.duration, {
                        opacity: this.valueEnd
                    }, this.options).repeat(1), this.tweenReverseCache = r(this.uiOpacity).delay(this.delay).by(this.duration, {
                        opacity: this.valueStart
                    }, this.options).repeat(1)) : (this.tweenCache = r(this.uiOpacity).delay(this.delay).to(this.duration, {
                        opacity: this.valueEnd
                    }, this.options).repeat(1), this.tweenReverseCache = r(this.uiOpacity).delay(this.delay).to(this.duration, {
                        opacity: this.valueStart
                    }, this.options).repeat(1))
                }, i.reset = function() {
                    this.uiOpacity && (this.uiOpacity.opacity = this.valueStart)
                }, e
            }(d)).prototype, "valueStart", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), C = s(b.prototype, "valueEnd", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 255
                }
            }), w = b)) || w) || w));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelFoodItems.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var e, s, o;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }, function(t) {
            s = t.createClass, o = t.defineProperty
        }],
        execute: function() {
            e._RF.push({}, "204ba/XZRtPaJO/yHdKAtCr", "LevelFoodItems", void 0);
            t("LevelFoodItems", function() {
                function t(t) {
                    o(this, "_allItems", void 0), o(this, "_itemsByType", void 0), this._allItems = [], this._itemsByType = new Map;
                    for (var e = 0; e < t.length; e++)
                        for (var s = t.getEntry(e).foodOrders, n = 0; n < s.length; n++)
                            for (var i = s.getFoodOrder(n), r = 0; r < i.length; r++) {
                                var l = i.getItem(r); - 1 == this._allItems.indexOf(l) && (this._allItems.push(l), this.addFoodToMap(this._itemsByType, l))
                            }
                }
                var e = t.prototype;
                return e.countByType = function(t) {
                    return this._itemsByType.has(t) ? this._itemsByType.get(t).length : 0
                }, e.getItem = function(t) {
                    return this._allItems[t]
                }, e.getItemOfType = function(t, e) {
                    return this._itemsByType.has(e) ? this._itemsByType.get(e)[t] : null
                }, e.addFoodToMap = function(t, e) {
                    var s = e.getFoodType();
                    t.has(s) || t.set(s, []), t.get(s).push(e)
                }, s(t, [{
                    key: "allItemsCount",
                    get: function() {
                        return this._allItems.length
                    }
                }]), t
            }());
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomerPlacer.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./LevelTimelineEnums.ts", "./LevelTimelinePlayer.ts", "./Customer.ts", "./CustomerList.ts"], (function(t) {
    "use strict";
    var e, s, a, n, i, o, r, c, u, l, m, h, g, f, P, d, _, L, C, p;
    return {
        setters: [function(t) {
            e = t.cclegacy, s = t._decorator, a = t.director, n = t.randomRange, i = t.instantiate, o = t.randomRangeInt, r = t.Component
        }, function(t) {
            c = t.GameEvent
        }, function(t) {
            u = t.inheritsLoose, l = t.defineProperty, m = t.assertThisInitialized
        }, function(t) {
            h = t.logger, g = t.LogCategory, f = t.LogType
        }, function(t) {
            P = t.projectEvent
        }, function(t) {
            d = t.DataLoadingEvent
        }, function(t) {
            _ = t.LevelTimelineEvent
        }, function(t) {
            L = t.LevelTimelinePlayer
        }, function(t) {
            C = t.Customer
        }, function(t) {
            p = t.customersList
        }],
        execute: function() {
            var v;
            e._RF.push({}, "23e7cthzvRL0KIJpVU3xvWe", "CustomerPlacer", void 0);
            var y = s.ccclass;
            t("CustomerPlacer", y("CustomerPlacer")(v = function(t) {
                function e() {
                    for (var e, s = arguments.length, a = new Array(s), n = 0; n < s; n++) a[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(a)) || this, l(m(e), "_customerPlacingData", null), l(m(e), "_customersPrefabs", []), l(m(e), "_timeToPlaceNew", 0), l(m(e), "_scene", void 0), l(m(e), "_placingCustomers", !1), e
                }
                u(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    p.isDataLoaded() || P.on(d.CustomersLoaded, this.tryToLoadPrefabsList, this), P.on(_.TimeLineEntryUpdated, this.tryToLoadPrefabsList, this), P.on(c.StartPlaying, this.startPlacingCustomers, this), P.on(c.EndGame, this.stopPlacingCustomers, this)
                }, s.start = function() {
                    this._scene = a.getScene(), L.instance && L.instance.currentEntry && this.tryToLoadPrefabsList()
                }, s.update = function(t) {
                    this._placingCustomers && (this._timeToPlaceNew <= 0 ? (this._timeToPlaceNew = n(this._customerPlacingData.minInterval, this._customerPlacingData.maxInterval), C.getCount() < this._customerPlacingData.maxSimultaneous && this.placeCustomer()) : this._timeToPlaceNew -= t)
                }, s.onDestroy = function() {
                    P.off(d.CustomersLoaded, this.tryToLoadPrefabsList, this), P.off(_.TimeLineEntryUpdated, this.tryToLoadPrefabsList, this), P.off(c.StartPlaying, this.startPlacingCustomers, this), P.off(c.EndGame, this.stopPlacingCustomers, this)
                }, s.startPlacingCustomers = function() {
                    this._timeToPlaceNew = n(this._customerPlacingData.minInterval, this._customerPlacingData.maxInterval), this._placingCustomers = !0
                }, s.stopPlacingCustomers = function() {
                    this._placingCustomers = !1
                }, s.placeCustomer = function() {
                    var t = this.getRandomCustomerPrefab(),
                        e = i(t);
                    e.setPosition(this.node.position), e.setParent(this._scene)
                }, s.tryToLoadPrefabsList = function() {
                    if (p.isDataLoaded && null != L.instance.currentEntry) {
                        this._customerPlacingData = L.instance.currentEntry.customerPlacingData, this._customersPrefabs = [];
                        for (var t = 0; t < this._customerPlacingData.totalCustomers; t++) {
                            var e = p.getCustomerPrefabById(this._customerPlacingData.getCustomer(t).id);
                            null != e && this._customersPrefabs.push(e)
                        }
                    }
                }, s.getRandomCustomerPrefab = function() {
                    for (var t = n(0, this._customerPlacingData.totalSelectionWeight), e = 0; e < this._customerPlacingData.totalCustomers; e++) {
                        var s = this._customerPlacingData.getCustomer(e).selectionWeight;
                        if (t <= s) return this._customersPrefabs[e];
                        t -= s
                    }
                    return h.log("There was an error when selecting a random customer using selection weights! Selecting one randomly.", g.Gameplay, f.Error), this._customersPrefabs[o(0, this._customersPrefabs.length)]
                }, e
            }(r)) || v);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomerReactionsController.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./LevelLoader.ts", "./ScoreController.ts", "./GameplayCanvas.ts", "./MainCamera.ts", "./UITrackWorldNode.ts", "./OrderItemScoreDisplay.ts", "./CustomerReaction.ts"], (function(e) {
    "use strict";
    var t, i, o, n, a, r, s, l, c, u, f, p, h, m, d, b, T;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, o = e.Prefab, n = e.instantiate, a = e.Component
        }, function(e) {
            r = e.applyDecoratedDescriptor, s = e.inheritsLoose, l = e.initializerDefineProperty, c = e.assertThisInitialized, u = e.defineProperty
        }, function(e) {
            f = e.LevelLoader
        }, function(e) {
            p = e.ScoreRange
        }, function(e) {
            h = e.GameplayCanvas
        }, function(e) {
            m = e.MainCamera
        }, function(e) {
            d = e.UITrackWorldNode
        }, function(e) {
            b = e.OrderItemScoreDisplay
        }, function(e) {
            T = e.CustomerReaction
        }],
        execute: function() {
            var y, w, g, P, C, z, L, R, v, D, S, k, I, M, N;
            t._RF.push({}, "24274tNDN9Ph7GMWlrl7NeQ", "CustomerReactionsController", void 0);
            var _ = i.ccclass,
                x = i.property;
            e("CustomerReactionsController", (y = _("CustomerReactionsController"), w = x({
                type: o,
                group: {
                    id: "score",
                    name: "Score"
                }
            }), g = x({
                type: o,
                group: {
                    id: "reactions",
                    name: "Reactions"
                }
            }), P = x({
                type: o,
                group: {
                    id: "reactions",
                    name: "Reactions"
                }
            }), C = x({
                type: o,
                group: {
                    id: "reactions",
                    name: "Reactions"
                }
            }), z = x({
                type: o,
                group: {
                    id: "reactions",
                    name: "Reactions"
                }
            }), L = x({
                type: o,
                group: {
                    id: "reactions",
                    name: "Reactions"
                }
            }), y((D = r((v = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), n = 0; n < i; n++) o[n] = arguments[n];
                    return t = e.call.apply(e, [this].concat(o)) || this, l(c(t), "scorePrefab", D, c(t)), l(c(t), "perfectToastPrefab", S, c(t)), l(c(t), "mediumToastPrefab", k, c(t)), l(c(t), "lowToastPrefab", I, c(t)), l(c(t), "swearToastPrefab", M, c(t)), l(c(t), "loseLifeToastPrefab", N, c(t)), u(c(t), "scoreDisplay", null), u(c(t), "perfectToast", null), u(c(t), "mediumToast", null), u(c(t), "lowToast", null), u(c(t), "swearToast", null), u(c(t), "loseLifeToast", null), t
                }
                s(t, e);
                var i = t.prototype;
                return i.start = function() {
                    this.scoreDisplay = this.initialize(this.scorePrefab).getComponent(b), this.perfectToast = this.initialize(this.perfectToastPrefab).getComponent(T), this.mediumToast = this.initialize(this.mediumToastPrefab).getComponent(T), this.lowToast = this.initialize(this.lowToastPrefab).getComponent(T), this.swearToast = this.initialize(this.swearToastPrefab).getComponent(T), f.instance.loadedLevel.isEndless() && (this.loseLifeToast = this.initialize(this.loseLifeToastPrefab).getComponent(T))
                }, i.playReaction = function(e) {
                    switch (e) {
                        case p.Perfect:
                            this.show(this.perfectToast);
                            break;
                        case p.Medium:
                            this.show(this.mediumToast);
                            break;
                        case p.Low:
                            this.show(this.lowToast);
                            break;
                        case p.Failed:
                            this.show(this.swearToast), this.loseLifeToast && this.show(this.loseLifeToast)
                    }
                }, i.showScore = function(e) {
                    this.scoreDisplay.node.setSiblingIndex(this.scoreDisplay.node.parent.children.length - 1), d.trackPosition(this.scoreDisplay.node, this.node, m.instance.camera), this.scoreDisplay.showScore(e)
                }, i.initialize = function(e) {
                    var t = n(e);
                    return t.setParent(h.instance.node), t
                }, i.show = function(e) {
                    e.node.setSiblingIndex(e.node.parent.children.length - 1), d.trackPosition(e.node, this.node, m.instance.camera), e.show()
                }, t
            }(a)).prototype, "scorePrefab", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = r(v.prototype, "perfectToastPrefab", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = r(v.prototype, "mediumToastPrefab", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = r(v.prototype, "lowToastPrefab", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = r(v.prototype, "swearToastPrefab", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = r(v.prototype, "loseLifeToastPrefab", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = v)) || R));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/KitchenBalcony.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./PlayerCharacter.ts", "./InputEnums.ts", "./KitchenTool.ts"], (function(t) {
    "use strict";
    var n, o, e, i, r, l, a, s, c, h, p, u, y, T;
    return {
        setters: [function(t) {
            n = t.cclegacy, o = t._decorator, e = t.Node, i = t.instantiate, r = t.Vec3, l = t.Component
        }, function(t) {
            a = t.applyDecoratedDescriptor, s = t.inheritsLoose, c = t.initializerDefineProperty, h = t.assertThisInitialized, p = t.defineProperty
        }, function(t) {
            u = t.PlayerCharacter
        }, function(t) {
            y = t.InputEvent
        }, function(t) {
            T = t.KitchenTool
        }],
        execute: function() {
            var f, P, d, k, b, g, v;
            n._RF.push({}, "2548b1clBJNfphwzoEnLyis", "KitchenBalcony", void 0);
            var _ = o.ccclass,
                m = o.property;
            t("KitchenBalcony", (f = _("KitchenBalcony"), P = m(e), d = m(e), f((g = a((b = function(t) {
                function n() {
                    for (var n, o = arguments.length, e = new Array(o), i = 0; i < o; i++) e[i] = arguments[i];
                    return n = t.call.apply(t, [this].concat(e)) || this, c(h(n), "playerTargetPosition", g, h(n)), c(h(n), "toolPosition", v, h(n)), p(h(n), "kitchenTool", null), n
                }
                s(n, t);
                var o = n.prototype;
                return o.onEnable = function() {
                    this.node.on(y[y.Input_Tap], this.playerTap, this)
                }, o.onDisable = function() {
                    this.node.off(y[y.Input_Tap], this.playerTap, this)
                }, o.playerTap = function() {
                    null != this.kitchenTool && (this.kitchenTool.playerTap(), this.kitchenTool.isPlayerHere() ? this.onPlayerHere() : u.instance.moveTo(this.playerTargetPosition.worldPosition, this.onPlayerHere.bind(this)))
                }, o.onPlayerHere = function() {
                    u.instance.lookAt(this.node.worldPosition), this.kitchenTool.interact()
                }, o.setTool = function(t) {
                    return this.kitchenTool = i(t).getComponent(T), this.kitchenTool.node.parent = this.toolPosition, this.kitchenTool.node.position = r.ZERO, this.kitchenTool.node.on(y[y.Input_Tap], this.playerTap, this), this.kitchenTool
                }, n
            }(l)).prototype, "playerTargetPosition", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = a(b.prototype, "toolPosition", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = b)) || k));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GameOverScreen.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./ScoreBoard.ts"], (function(e) {
    "use strict";
    var r, t, n, i, o, a, c, s, l, u, m;
    return {
        setters: [function(e) {
            r = e.cclegacy, t = e._decorator, n = e.animation, i = e.Component
        }, function(e) {
            o = e.GameEvent
        }, function(e) {
            a = e.applyDecoratedDescriptor, c = e.inheritsLoose, s = e.initializerDefineProperty, l = e.assertThisInitialized
        }, function(e) {
            u = e.projectEvent
        }, function(e) {
            m = e.ScoreBoard
        }],
        execute: function() {
            var h, p, v, f, y, _, b, w, d, G, g;
            r._RF.push({}, "25ec98/GqtNDJ5qI3XBB1Ua", "GameOverScreen", void 0);
            var S = t.ccclass,
                P = t.property;
            e("GameOverScreen", (h = S("GameOverScreen"), p = P({
                visible: !0
            }), v = P({
                type: n.AnimationController,
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), f = P({
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), y = P({
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), h((w = a((b = function(e) {
                function r() {
                    for (var r, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return r = e.call.apply(e, [this].concat(n)) || this, s(l(r), "_showDelay", w, l(r)), s(l(r), "_animationController", d, l(r)), s(l(r), "_showParameter", G, l(r)), s(l(r), "_victoryParameter", g, l(r)), r
                }
                c(r, e);
                var t = r.prototype;
                return t.onLoad = function() {
                    u.on(o.EndGame, this.showGameOverScreen, this)
                }, t.onDestroy = function() {
                    u.off(o.EndGame, this.showGameOverScreen, this)
                }, t.hideScreen = function() {
                    this._animationController.setValue(this._showParameter, !1)
                }, t.showGameOverScreen = function() {
                    var e = this;
                    this._animationController.setValue(this._victoryParameter, m.instance.victory), this.scheduleOnce((function() {
                        e._animationController.setValue(e._showParameter, !0)
                    }), this._showDelay)
                }, r
            }(i)).prototype, "_showDelay", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), d = a(b.prototype, "_animationController", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = a(b.prototype, "_showParameter", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), g = a(b.prototype, "_victoryParameter", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "victory"
                }
            }), _ = b)) || _));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PlayingInteractionFeedbackState.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./PlayerCharacterFeedback.ts"], (function(t) {
    "use strict";
    var e, n, a, c, o;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t._decorator, a = t.animation
        }, function(t) {
            c = t.inheritsLoose
        }, function(t) {
            o = t.PlayerCharacterFeedback
        }],
        execute: function() {
            var i;
            e._RF.push({}, "28510MkAHtLx5KEuM/YsbO+", "PlayingInteractionFeedbackState", void 0);
            var r = n.ccclass;
            t("PlayingInteractionFeedbackState", r("PlayingInteractionFeedbackState")(i = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                return c(e, t), e.prototype.onMotionStateExit = function(t, e) {
                    t.getComponent(o).onFeedbackAnimationEnd()
                }, e
            }(a.StateMachineComponent)) || i);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FoodItemList.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./FoodItem.ts", "./BundleLoader.ts"], (function(o) {
    "use strict";
    var t, n, e, d, i, r, a, s, u, l, f, c;
    return {
        setters: [function(o) {
            t = o.cclegacy, n = o.Prefab, e = o.game, d = o.Game
        }, function(o) {
            i = o.defineProperty
        }, function(o) {
            r = o.logger, a = o.LogCategory, s = o.LogType
        }, function(o) {
            u = o.projectEvent
        }, function(o) {
            l = o.DataLoadingEvent
        }, function(o) {
            f = o.FoodItem
        }, function(o) {
            c = o.contentLoader
        }],
        execute: function() {
            t._RF.push({}, "28f89QMj6tM842mGWqANSfU", "FoodItemList", void 0);
            var g = o("FoodItemList", function() {
                function o() {
                    var o = this;
                    i(this, "foods", []), e.on(d.EVENT_GAME_INITED, (function() {
                        c.isDataLoaded() ? o.loadDataFromBundle() : u.once(l.ContentBundleLoaded, o.loadDataFromBundle, o)
                    }), this)
                }
                var t = o.prototype;
                return t.getFoodItemById = function(o) {
                    var t = this.getFoodPrefabById(o);
                    if (null != t) {
                        var n = t.data.getComponent(f);
                        if (null != n) return n;
                        r.log("Food with id " + o + " is missing a " + f.name + " component!", a.Generic, s.Error)
                    }
                    return null
                }, t.isDataLoaded = function() {
                    return this.foods.length > 0
                }, t.loadDataFromBundle = function() {
                    c.bundle.loadDir("FoodItems", n, null, this.onLoadComplete.bind(this))
                }, t.getFoodPrefabById = function(o) {
                    var t = this.foods.findIndex((function(t) {
                        return t.data.getComponent(f).getId() === o
                    }));
                    return t > -1 ? this.foods[t] : (r.log("Food with id " + o + " not found on foods list!", a.Generic, s.Error), null)
                }, t.onLoadComplete = function(o, t) {
                    this.foods = t.slice(), r.log("Finished loading foods. " + this.foods.length + " foods loaded."), u.emit(l.FoodItemsLoaded)
                }, o
            }());
            o("foodItemsList", new g);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PizzaDoughPile.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./FoodItemCarrier.ts", "./InteractionEnums.ts", "./PlayerCharacter.ts", "./KitchenTool.ts"], (function(t) {
    "use strict";
    var e, i, n, r, o, a, c, s, u, l;
    return {
        setters: [function(t) {
            e = t.cclegacy, i = t._decorator
        }, function(t) {
            n = t.applyDecoratedDescriptor, r = t.inheritsLoose, o = t.initializerDefineProperty, a = t.assertThisInitialized
        }, function(t) {
            c = t.FoodItemCarrier
        }, function(t) {
            s = t.InteractionResult
        }, function(t) {
            u = t.PlayerCharacter
        }, function(t) {
            l = t.KitchenTool
        }],
        execute: function() {
            var h, p, d, f, z;
            e._RF.push({}, "290a5NmU4BK05cjMVAW78de", "PizzaDoughPile", void 0);
            var P = i.ccclass,
                g = i.property;
            t("PizzaDoughPile", (h = P("PizzaDoughPile"), p = g({
                displayOrder: -1
            }), h((z = n((f = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(n)) || this, o(a(e), "id", z, a(e)), e
                }
                r(e, t);
                var i = e.prototype;
                return i.getId = function() {
                    return this.id
                }, i.startInteraction = function() {
                    return u.instance.getComponent(c).hasItem() ? s.HandsOccupied : s.Success
                }, i.endInteraction = function() {
                    this.enabled && u.instance.getChef().startNewPizza()
                }, e
            }(l)).prototype, "id", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "PizzaDoughPile"
                }
            }), d = f)) || d));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PizzaOven.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./AudioManager.ts", "./FoodItemCarrier.ts", "./PizzaRecipe.ts", "./InteractionEnums.ts", "./GameplayCanvas.ts", "./UITrackWorldNode.ts", "./PlayerCharacter.ts", "./KitchenTool.ts", "./ReadyDisplay.ts", "./TimerDisplay.ts"], (function(e) {
    "use strict";
    var i, r, t, a, n, s, o, l, u, d, p, c, y, g, m, h, f, b, z, P, B, D;
    return {
        setters: [function(e) {
            i = e.cclegacy, r = e._decorator, t = e.CCFloat, a = e.Node, n = e.Prefab, s = e.instantiate
        }, function(e) {
            o = e.applyDecoratedDescriptor, l = e.inheritsLoose, u = e.initializerDefineProperty, d = e.assertThisInitialized, p = e.defineProperty, c = e.createClass
        }, function(e) {
            y = e.AudioManager
        }, function(e) {
            g = e.FoodItemCarrier
        }, function(e) {
            m = e.PizzaState
        }, function(e) {
            h = e.InteractionResult
        }, function(e) {
            f = e.GameplayCanvas
        }, function(e) {
            b = e.UITrackWorldNode
        }, function(e) {
            z = e.PlayerCharacter
        }, function(e) {
            P = e.KitchenTool
        }, function(e) {
            B = e.ReadyDisplay
        }, function(e) {
            D = e.TimerDisplay
        }],
        execute: function() {
            var k, C, T, v, w, O, R, I, A, S, M, V, F, N, _, K, H, L, E, G, U, W, j, q, x, X, J, Q, Y, Z, $, ee;
            e("PizzaOvenState", void 0), i._RF.push({}, "2ca01TkidVE0owBoXpB8SnV", "PizzaOven", void 0);
            var ie, re = r.ccclass,
                te = r.property,
                ae = r.requireComponent;
            ! function(e) {
                e[e.None = 0] = "None", e[e.Idle = 1] = "Idle", e[e.Baking = 2] = "Baking", e[e.Ready = 3] = "Ready", e[e.Burning = 4] = "Burning", e[e.Burned = 5] = "Burned"
            }(ie || (ie = e("PizzaOvenState", {})));
            e("PizzaOven", (k = re("PizzaOven"), C = ae(g), T = te({
                displayOrder: -1
            }), v = te({
                type: t,
                group: {
                    id: "mechanics",
                    name: "Mechanics",
                    displayOrder: 1
                }
            }), w = te({
                type: t,
                group: {
                    id: "mechanics",
                    name: "Mechanics",
                    displayOrder: 1
                }
            }), O = te({
                type: t,
                group: {
                    id: "mechanics",
                    name: "Mechanics",
                    displayOrder: 1
                }
            }), R = te({
                group: {
                    id: "animator",
                    name: "Animator",
                    displayOrder: 2
                }
            }), I = te({
                group: {
                    id: "animator",
                    name: "Animator",
                    displayOrder: 2
                }
            }), A = te({
                group: {
                    id: "animator",
                    name: "Animator",
                    displayOrder: 2
                }
            }), S = te({
                group: {
                    id: "animator",
                    name: "Animator",
                    displayOrder: 2
                }
            }), M = te({
                group: {
                    id: "animator",
                    name: "Animator",
                    displayOrder: 2
                }
            }), V = te({
                type: a,
                group: {
                    id: "parts",
                    name: "Parts",
                    displayOrder: 3
                }
            }), F = te({
                type: n,
                group: {
                    id: "prefabs",
                    name: "Prefabs",
                    displayOrder: 4
                }
            }), N = te({
                type: n,
                group: {
                    id: "prefabs",
                    name: "Prefabs",
                    displayOrder: 4
                }
            }), _ = te({
                type: n,
                group: {
                    id: "prefabs",
                    name: "Prefabs",
                    displayOrder: 4
                }
            }), K = te({
                type: n,
                group: {
                    id: "prefabs",
                    name: "Prefabs",
                    displayOrder: 4
                }
            }), k(H = C((E = o((L = function(e) {
                function i() {
                    for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) t[a] = arguments[a];
                    return i = e.call.apply(e, [this].concat(t)) || this, u(d(i), "id", E, d(i)), u(d(i), "timeToBake", G, d(i)), u(d(i), "timeReady", U, d(i)), u(d(i), "timeToBurn", W, d(i)), u(d(i), "idleTrigger", j, d(i)), u(d(i), "bakingTrigger", q, d(i)), u(d(i), "readyTrigger", x, d(i)), u(d(i), "burningTrigger", X, d(i)), u(d(i), "burnedTrigger", J, d(i)), u(d(i), "timerDisplayPosition", Q, d(i)), u(d(i), "timerDisplayPrefab", Y, d(i)), u(d(i), "readyDisplayPrefab", Z, d(i)), u(d(i), "pizzaReadyAudio", $, d(i)), u(d(i), "pizzaBurnedAudio", ee, d(i)), p(d(i), "foodCarrier", null), p(d(i), "timerDisplay", null), p(d(i), "readyDisplay", null), p(d(i), "state", ie.Idle), p(d(i), "timer", 0), i
                }
                l(i, e);
                var r = i.prototype;
                return r.onLoad = function() {
                    this.foodCarrier = this.getComponent(g)
                }, r.start = function() {
                    null != this.timerDisplayPrefab && (this.timerDisplay = s(this.timerDisplayPrefab).getComponent(D), this.timerDisplay.node.setParent(f.instance.node)), null != this.readyDisplayPrefab && (this.readyDisplay = s(this.readyDisplayPrefab).getComponent(B), this.readyDisplay.node.setParent(f.instance.node))
                }, r.update = function(e) {
                    if (this.timer > 0 && (this.timer -= e, this.timer <= 0)) switch (this.state) {
                        case ie.Baking:
                            this.setState(ie.Ready), this.isPlayerHere() && this.interact();
                            break;
                        case ie.Ready:
                            this.setState(ie.Burning);
                            break;
                        case ie.Burning:
                            this.setState(ie.Burned)
                    }
                }, r.getId = function() {
                    return this.id
                }, r.startInteraction = function() {
                    var e = z.instance.getChef();
                    switch (this.state) {
                        case ie.Idle:
                            return e.hasPizza() ? e.getPizza().getState() != m.Raw ? h.PizzaAlreadyCooked : h.Success : h.MissingPizza;
                        case ie.Baking:
                            return h.None;
                        case ie.Ready:
                        case ie.Burning:
                        case ie.Burned:
                            return e.getComponent(g).hasItem() ? h.HandsOccupied : h.Success
                    }
                    return h.Failure
                }, r.endInteraction = function() {
                    var e = z.instance.getComponent(g);
                    switch (this.state) {
                        case ie.Idle:
                            this.foodCarrier.push(e.pull()), this.setState(ie.Baking);
                            break;
                        case ie.Baking:
                            break;
                        case ie.Ready:
                        case ie.Burning:
                        case ie.Burned:
                            e.push(this.foodCarrier.pull()), this.setState(ie.Idle)
                    }
                }, r.setState = function(e) {
                    switch (e) {
                        case ie.Idle:
                            this.animController.setValue(this.idleTrigger, !0), null != this.readyDisplay && this.readyDisplay.hide();
                            break;
                        case ie.Baking:
                            this.animController.setValue(this.bakingTrigger, !0), this.timer = this.timeToBake, null != this.timerDisplay && (this.timerDisplay.getComponent(b).setup(this.timerPosition), this.timerDisplay.showTimer(this.timer));
                            break;
                        case ie.Ready:
                            var i;
                            if (this.foodCarrier.peek().getItem().bakePizza(), this.animController.setValue(this.readyTrigger, !0), this.timer = this.timeReady, null != this.readyDisplay && (this.readyDisplay.getComponent(b).setup(this.timerPosition), this.readyDisplay.show()), this.pizzaReadyAudio) null === (i = y.instance) || void 0 === i || i.playByKey(this.pizzaReadyAudio);
                            break;
                        case ie.Burning:
                            this.animController.setValue(this.burningTrigger, !0), this.timer = this.timeToBurn;
                            break;
                        case ie.Burned:
                            var r;
                            if (this.foodCarrier.peek().getItem().burnPizza(), this.animController.setValue(this.burnedTrigger, !0), this.pizzaBurnedAudio) null === (r = y.instance) || void 0 === r || r.playByKey(this.pizzaBurnedAudio)
                    }
                    this.state = e
                }, c(i, [{
                    key: "timerPosition",
                    get: function() {
                        return null != this.timerDisplayPosition ? this.timerDisplayPosition : this.node
                    }
                }]), i
            }(P)).prototype, "id", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "PizzaOven"
                }
            }), G = o(L.prototype, "timeToBake", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5
                }
            }), U = o(L.prototype, "timeReady", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 3
                }
            }), W = o(L.prototype, "timeToBurn", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }), j = o(L.prototype, "idleTrigger", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Idle"
                }
            }), q = o(L.prototype, "bakingTrigger", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Baking"
                }
            }), x = o(L.prototype, "readyTrigger", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Ready"
                }
            }), X = o(L.prototype, "burningTrigger", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Burning"
                }
            }), J = o(L.prototype, "burnedTrigger", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Burned"
                }
            }), Q = o(L.prototype, "timerDisplayPosition", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Y = o(L.prototype, "timerDisplayPrefab", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = o(L.prototype, "readyDisplayPrefab", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $ = o(L.prototype, "pizzaReadyAudio", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = o(L.prototype, "pizzaBurnedAudio", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = L)) || H) || H));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Panel.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./PanelEnums.ts", "./PanelManager.ts"], (function(i) {
    "use strict";
    var t, e, n, o, a, l, r, s, c, p, u, h, d, y, m, v, f, O, b;
    return {
        setters: [function(i) {
            t = i.cclegacy, e = i._decorator, n = i.Enum, o = i.Animation, a = i.Node, l = i.AnimationClip, r = i.CCBoolean, s = i.UIOpacity, c = i.Component
        }, function(i) {
            p = i.applyDecoratedDescriptor, u = i.inheritsLoose, h = i.initializerDefineProperty, d = i.assertThisInitialized, y = i.defineProperty, m = i.createClass
        }, function(i) {
            v = i.projectEvent
        }, function(i) {
            f = i.PanelId, O = i.EventPanel
        }, function(i) {
            b = i.PanelManager
        }],
        execute: function() {
            var g, C, P, z, w, S, E, F, A, _, I, L, j, k, D, M;
            t._RF.push({}, "2e50aA9tv1ElLX6TaHJkvJg", "Panel", void 0);
            var x = e.ccclass,
                B = e.property,
                H = e.executionOrder;
            i("Panel", (g = x("Panel"), C = H(-4), P = B({
                type: n(f)
            }), z = B(o), w = B({
                type: a,
                tooltip: "Used to disable the panel content so no input is processed when closed"
            }), S = B({
                type: l,
                formerlySerializedAs: "clip"
            }), E = B(l), F = B(r), g(A = C((I = p((_ = function(i) {
                function t() {
                    for (var t, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                    return t = i.call.apply(i, [this].concat(n)) || this, h(d(t), "id", I, d(t)), h(d(t), "anim", L, d(t)), h(d(t), "content", j, d(t)), h(d(t), "clipOpen", k, d(t)), h(d(t), "clipClose", D, d(t)), h(d(t), "startOpen", M, d(t)), y(d(t), "uiOpacity", void 0), t
                }
                u(t, i);
                var e = t.prototype;
                return e.onLoad = function() {
                    var i;
                    null === (i = b.instance) || void 0 === i || i.register(this), this.uiOpacity = this.node.getComponent(s), null == this.content && this.node.children.length > 0 && (this.content = this.node.children[0])
                }, e.start = function() {
                    this.startOpen ? this.open() : (this.uiOpacity && (this.uiOpacity.opacity = 0), this.content && (this.content.active = !1))
                }, e.open = function() {
                    var i, t, e = this;
                    this.uiOpacity && (this.uiOpacity.opacity = 255), this.content && (this.content.active = !0);
                    var n = null === (i = this.anim) || void 0 === i ? void 0 : i.getState(this.clipOpen.name);
                    n && (n.speed = 1), null === (t = this.anim) || void 0 === t || t.play(this.clipOpen.name), this.node.emit(O.OpenStart), v.emit(O.OpenStart, this.id, this.clipOpen.duration), this.scheduleOnce((function() {
                        e.node.emit(O.OpenFinish), v.emit(O.OpenFinish, e.id)
                    }), this.clipOpen.duration)
                }, e.close = function() {
                    var i = this,
                        t = 0;
                    if (null == this.clipClose) {
                        var e, n, o = null === (e = this.anim) || void 0 === e ? void 0 : e.getState(this.clipOpen.name);
                        o && (o.speed = -1), null === (n = this.anim) || void 0 === n || n.play(this.clipOpen.name), t = this.clipOpen.duration
                    } else {
                        var a;
                        null === (a = this.anim) || void 0 === a || a.play(this.clipClose.name), t = this.clipClose.duration
                    }
                    this.node.emit(O.CloseStart), v.emit(O.CloseStart, this.id, t), this.scheduleOnce((function() {
                        i.node.emit(O.CloseFinish), v.emit(O.CloseFinish, i.id), i.uiOpacity && (i.uiOpacity.opacity = 0), i.content && (i.content.active = !1)
                    }), t)
                }, m(t, [{
                    key: "Id",
                    get: function() {
                        return this.id
                    }
                }]), t
            }(c)).prototype, "id", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return f.None
                }
            }), L = p(_.prototype, "anim", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), j = p(_.prototype, "content", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), k = p(_.prototype, "clipOpen", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), D = p(_.prototype, "clipClose", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), M = p(_.prototype, "startOpen", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), A = _)) || A) || A));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TweenPunchScale.ts", ["cc"], (function() {
    "use strict";
    var e;
    return {
        setters: [function(c) {
            e = c.cclegacy
        }],
        execute: function() {
            e._RF.push({}, "2f99335XsBIDLj0yn+vPddq", "TweenPunchScale", void 0), e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/KitchenBalconyPizzaIngredient.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Ingredient.ts", "./PizzaRecipe.ts", "./InteractionEnums.ts", "./PlayerCharacter.ts", "./KitchenTool.ts"], (function(e) {
    "use strict";
    var t, n, i, r, a, c, o, s, u, l, d, g;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.Prefab
        }, function(e) {
            r = e.applyDecoratedDescriptor, a = e.inheritsLoose, c = e.initializerDefineProperty, o = e.assertThisInitialized
        }, function(e) {
            s = e.Ingredient
        }, function(e) {
            u = e.PizzaState
        }, function(e) {
            l = e.InteractionResult
        }, function(e) {
            d = e.PlayerCharacter
        }, function(e) {
            g = e.KitchenTool
        }],
        execute: function() {
            var z, f, p, h, y;
            t._RF.push({}, "34630g5fSZIXLJzt15KnMtT", "KitchenBalconyPizzaIngredient", void 0);
            var I = n.ccclass,
                P = n.property;
            e("KitchenBalconyPizzaIngredient", (z = I("KitchenBalconyPizzaIngredient"), f = P({
                type: i,
                group: {
                    id: "prefabs",
                    name: "Prefabs",
                    displayOrder: 4
                }
            }), z((y = r((h = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(i)) || this, c(o(t), "ingredient", y, o(t)), t
                }
                a(t, e);
                var n = t.prototype;
                return n.getId = function() {
                    return this.ingredient.data.getComponent(s).getId()
                }, n.startInteraction = function() {
                    var e = d.instance.getChef();
                    if (!e.hasPizza()) return l.MissingPizza;
                    var t = e.getPizza();
                    return t.getState() != u.Raw ? l.PizzaAlreadyCooked : t.hasIngredient(this.ingredient.data.getComponent(s)) ? l.PizzaAlreadyHasIngredient : l.Success
                }, n.endInteraction = function() {
                    d.instance.getChef().addIngredient(this.ingredient)
                }, t
            }(g)).prototype, "ingredient", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), p = h)) || p));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Restaurant.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./AudioManager.ts"], (function(e) {
    "use strict";
    var t, n, i, r, a, o, s, u, c, l, p, d, f, y;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.Prefab, r = e.Component
        }, function(e) {
            a = e.defineProperty, o = e.applyDecoratedDescriptor, s = e.inheritsLoose, u = e.initializerDefineProperty, c = e.assertThisInitialized, l = e.createClass
        }, function(e) {
            p = e.logger, d = e.LogCategory, f = e.LogType
        }, function(e) {
            y = e.AudioManager
        }],
        execute: function() {
            var g, b, h, _, S, v, m, L, R, x;
            t._RF.push({}, "36708BVOglGRbbQAPdN7C7c", "Restaurant", void 0);
            var P = n.ccclass,
                z = n.property;
            e("Restaurant", (g = P("Restaurant"), b = z(i), h = z({
                visible: !0
            }), g((x = R = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(i)) || this, u(c(t), "id", v, c(t)), u(c(t), "ambientSfx", m, c(t)), u(c(t), "_playerSpeed", L, c(t)), t
                }
                s(t, e);
                var n = t.prototype;
                return n.onLoad = function() {
                    if (t._instance) return this.node.destroy(), void p.log("Multiple restaurants loaded! Restaurant " + this.id + " destroyed.", d.Generic, f.Error);
                    t._instance = this
                }, n.start = function() {
                    this.scheduleOnce(this.onLevelStartedLoading.bind(this), .1)
                }, n.onDestroy = function() {
                    t._instance == this && (t._instance = null)
                }, n.getId = function() {
                    return this.id
                }, n.onLevelStartedLoading = function() {
                    this.ambientSfx && (p.log("Playing Ambient Sfx"), y.instance.playByKey(this.ambientSfx))
                }, l(t, [{
                    key: "playerSpeed",
                    get: function() {
                        return this._playerSpeed
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), t
            }(r), a(R, "_instance", null), v = o((S = x).prototype, "id", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), m = o(S.prototype, "ambientSfx", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = o(S.prototype, "_playerSpeed", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), _ = S)) || _));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AudioManagerInitializer.ts", ["cc", "./Logger.ts", "./AudioManager.ts", "./AudioData.ts"], (function(a) {
    "use strict";
    var i, t, n, e, o, u, r, d, g;
    return {
        setters: [function(a) {
            i = a.cclegacy, t = a.game, n = a.Game, e = a.resources, o = a.Prefab
        }, function(a) {
            u = a.logger, r = a.LogCategory
        }, function(a) {
            d = a.AudioManager
        }, function(a) {
            g = a.AudioData
        }],
        execute: function() {
            i._RF.push({}, "39e33XnAQRJhpTBTgQcVQw7", "AudioManagerInitializer", void 0);
            a("audioManagerInitializer", new function() {
                t.on(n.EVENT_GAME_INITED, (function() {
                    e.load("audio/audioData", o, (function(a, i) {
                        if (a) u.log("No default audio data found. Initiating an empty AudioManager", r.Audio), d.instantiateNewAudioManager();
                        else {
                            u.log("Found default audio data: " + i, r.Audio);
                            var t = i.data.getComponent(g);
                            d.instantiateNewAudioManager(t)
                        }
                    }))
                }), this)
            });
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TweenCollection.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./TweenBase.ts"], (function(e) {
    "use strict";
    var n, t, o, i, r, s, c, l, a;
    return {
        setters: [function(e) {
            n = e.cclegacy, t = e._decorator, o = e.Component
        }, function(e) {
            i = e.applyDecoratedDescriptor, r = e.inheritsLoose, s = e.initializerDefineProperty, c = e.assertThisInitialized, l = e.defineProperty
        }, function(e) {
            a = e.TweenBase
        }],
        execute: function() {
            var u, p, f;
            n._RF.push({}, "3ca0eUR64hHCIpL0fRF8hQx", "TweenCollection", void 0);
            var h = t.ccclass,
                w = t.property,
                y = t.menu;
            e("TweenCollection", h("TweenCollection")(u = y("Tween/Collection")((f = i((p = function(e) {
                function n() {
                    for (var n, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                    return n = e.call.apply(e, [this].concat(o)) || this, s(c(n), "getInChildren", f, c(n)), l(c(n), "tweens", []), n
                }
                r(n, e);
                var t = n.prototype;
                return t.onLoad = function() {
                    this.getInChildren ? this.tweens = this.node.getComponentsInChildren(a) : this.tweens = this.node.getComponents(a)
                }, t.play = function() {
                    this.tweens.forEach((function(e) {
                        e.play()
                    }))
                }, t.reset = function() {
                    this.tweens.forEach((function(e) {
                        e.reset()
                    }))
                }, t.playReverse = function() {
                    this.tweens.forEach((function(e) {
                        e.playReverse()
                    }))
                }, t.stop = function() {
                    this.tweens.forEach((function(e) {
                        e.stop()
                    }))
                }, n
            }(o)).prototype, "getInChildren", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), u = p)) || u) || u);
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AudioObject.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./AudioEnums.ts"], (function(i) {
    "use strict";
    var t, e, o, s, u, l, n, a, d, h;
    return {
        setters: [function(i) {
            t = i.cclegacy, e = i.clamp
        }, function(i) {
            o = i.createClass, s = i.defineProperty
        }, function(i) {
            u = i.logger, l = i.LogCategory, n = i.LogType
        }, function(i) {
            a = i.projectEvent
        }, function(i) {
            d = i.AudioEvent, h = i.LoopMode
        }],
        execute: function() {
            t._RF.push({}, "3fd7eqNPmJG85niU6MZ1UDs", "AudioObject", void 0);
            i("AudioObject", function() {
                function i() {
                    s(this, "_audioItem", void 0), s(this, "_audioSource", void 0), s(this, "_onEndCallback", void 0), s(this, "_valid", !1), s(this, "_clipsToPlay", void 0), s(this, "_playingClipIndex", 0), s(this, "_paused", !1), s(this, "_muteModifier", 1), s(this, "_volume", 1)
                }
                var t = i.prototype;
                return t.initialize = function(i, t, e, o) {
                    var s = this;
                    this._audioItem = i, this._audioSource = t, this._onEndCallback = o, this._valid = !0, this._playingClipIndex = 0, this._paused = !1, this._volume = this._audioItem.volume, this.mute = e, a.on(d.SetMuted, (function(i) {
                        s.mute = i
                    }))
                }, t.play = function() {
                    this._valid ? 0 != this._audioItem.length ? (this._paused ? (this._audioSource.scheduleOnce(this.playNextClip.bind(this), this._audioSource.duration - this._audioSource.currentTime), this._paused = !1) : (this._clipsToPlay = this._audioItem.getAudioClipsToPlay(), this._playingClipIndex = 0, this._audioSource.clip = this._clipsToPlay[this._playingClipIndex], this._audioSource.scheduleOnce(this.playNextClip.bind(this), this._clipsToPlay[this._playingClipIndex].getDuration())), this._audioSource.play()) : this.end() : u.log("Play was called on an invalid AudioObject", l.Audio, n.Error)
                }, t.pause = function() {
                    this._valid ? (this._audioSource.unschedule(this.playNextClip.bind(this)), this._audioSource.pause(), this._paused = !0) : u.log("Pause was called on an invalid AudioObject", l.Audio, n.Error)
                }, t.stop = function() {
                    this._valid ? (this._audioSource.unschedule(this.playNextClip.bind(this)), this._audioSource.stop(), this.end()) : u.log("Stop was called on an invalid AudioObject", l.Audio, n.Error)
                }, t.scaleVolume = function(i) {
                    this._valid ? this._audioSource.volume *= i : u.log("ScaleVolume was called on an invalid AudioObject", l.Audio, n.Error)
                }, t.playNextClip = function() {
                    switch (this._audioItem.loopMode) {
                        case h.Do_Not_Loop:
                            if (this._playingClipIndex += 1, this._playingClipIndex >= this._clipsToPlay.length) return void this.end();
                        case h.Loop_Subitem:
                            break;
                        case h.Loop_Sequence:
                            this._playingClipIndex += 1, this._playingClipIndex == this._clipsToPlay.length && (this._playingClipIndex = 0);
                        case h.Play_Sequence_Loop_Last:
                            this._playingClipIndex < this._clipsToPlay.length - 1 && (this._playingClipIndex += 1)
                    }
                    this._audioSource.scheduleOnce(this.playNextClip.bind(this), this._clipsToPlay[this._playingClipIndex].getDuration()), this._audioSource.clip = this._clipsToPlay[this._playingClipIndex], this._audioSource.play()
                }, t.end = function() {
                    this._valid && (this._audioItem = null, this._audioSource = null, this._valid = !1, this._onEndCallback(), this._onEndCallback = null)
                }, t.updateVolume = function() {
                    this._audioSource && (this._audioSource.volume = this._volume * this._muteModifier)
                }, o(i, [{
                    key: "isValid",
                    get: function() {
                        return this._valid
                    }
                }, {
                    key: "playing",
                    get: function() {
                        return !!this.isValid && this._audioSource.playing
                    }
                }, {
                    key: "volume",
                    get: function() {
                        return this._volume
                    },
                    set: function(i) {
                        this._volume = e(i, 0, 1), this.updateVolume()
                    }
                }, {
                    key: "mute",
                    get: function() {
                        return 0 == this._muteModifier
                    },
                    set: function(i) {
                        this._muteModifier = i ? 0 : 1, this.updateVolume()
                    }
                }]), i
            }());
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/RewardedAdOportunity.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts"], (function(e) {
    "use strict";
    var n, t, i, o, r, d, s, a, u, l, c, p, A;
    return {
        setters: [function(e) {
            n = e.cclegacy, t = e._decorator, i = e.EventHandler, o = e.Component
        }, function(e) {
            r = e.applyDecoratedDescriptor, d = e.inheritsLoose, s = e.initializerDefineProperty, a = e.assertThisInitialized, u = e.defineProperty, l = e.createClass
        }, function(e) {
            c = e.logger, p = e.LogCategory, A = e.LogType
        }],
        execute: function() {
            var y, g, f, h, m, w, v, b, _, F, E, S, C;
            n._RF.push({}, "43a3dKDHN9Dq5M6NMSKaXlx", "RewardedAdOportunity", void 0);
            var R = t.ccclass,
                k = t.property;
            e("RewardedAdOportunity", (y = R("RewardedAdOportunity"), g = k({
                type: [i],
                visible: !0,
                group: {
                    id: "events",
                    name: "Events"
                }
            }), f = k({
                type: [i],
                visible: !0,
                group: {
                    id: "events",
                    name: "Events"
                }
            }), h = k({
                type: [i],
                visible: !0,
                group: {
                    id: "events",
                    name: "Events"
                }
            }), m = k({
                type: [i],
                visible: !0,
                group: {
                    id: "events",
                    name: "Events"
                }
            }), w = k({
                type: [i],
                visible: !0,
                group: {
                    id: "events",
                    name: "Events"
                }
            }), y((_ = r((b = function(e) {
                function n() {
                    for (var n, t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                    return n = e.call.apply(e, [this].concat(i)) || this, s(a(n), "_onAdReady", _, a(n)), s(a(n), "_onStartAd", F, a(n)), s(a(n), "_onAdCompleted", E, a(n)), s(a(n), "_onAdDismissed", S, a(n)), s(a(n), "_onAdFinished", C, a(n)), u(a(n), "_showAdFunction", void 0), n
                }
                d(n, e);
                var t = n.prototype;
                return t.setup = function() {
                    var e = this;
                    if (c.log("Setting up rewarded ad opportunity"), "undefined" != typeof GAMESNACKS) {
                        var n = {};
                        n.beforeReward = function(n) {
                            c.log("beforeReward - ad is ready!"), e.showAdFunction = n
                        }.bind(this), n.beforeBreak = function() {
                            c.log("beforeBreak - game will be paused to show ad"), i.emitEvents(e._onStartAd)
                        }.bind(this), n.adComplete = function() {
                            c.log("adComplete - rewarding player"), e.showAdFunction = null, i.emitEvents(e._onAdCompleted)
                        }.bind(this), n.adDismissed = function() {
                            c.log("adDismissed - player will not receive anything"), e.showAdFunction = null, i.emitEvents(e._onAdDismissed)
                        }.bind(this), n.afterBreak = function() {
                            c.log("afterBreak - game will be resumed now"), i.emitEvents(e._onAdFinished)
                        }.bind(this), c.log("Calling GAMESNACKS.rewardedAdOpportunity"), GAMESNACKS.rewardedAdOpportunity(n)
                    } else c.log("GAMESNACKS is invalid")
                }, t.showAd = function() {
                    this._showAdFunction ? this._showAdFunction() : c.log("Trying to show ad without initializing.", p.Generic, A.Error)
                }, l(n, [{
                    key: "adIsReady",
                    get: function() {
                        return null != this._showAdFunction
                    }
                }, {
                    key: "onAdReady",
                    get: function() {
                        return this._onAdReady
                    }
                }, {
                    key: "onStartAd",
                    get: function() {
                        return this._onStartAd
                    }
                }, {
                    key: "onAdCompleted",
                    get: function() {
                        return this._onAdCompleted
                    }
                }, {
                    key: "onAdDismissed",
                    get: function() {
                        return this._onAdDismissed
                    }
                }, {
                    key: "onAdFinished",
                    get: function() {
                        return this._onAdFinished
                    }
                }, {
                    key: "showAdFunction",
                    get: function() {
                        return this._showAdFunction
                    },
                    set: function(e) {
                        this._showAdFunction = e, e && i.emitEvents(this._onAdReady)
                    }
                }]), n
            }(o)).prototype, "_onAdReady", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), F = r(b.prototype, "_onStartAd", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), E = r(b.prototype, "_onAdCompleted", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), S = r(b.prototype, "_onAdDismissed", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), C = r(b.prototype, "_onAdFinished", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), v = b)) || v));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/RestaurantLoader.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./LevelLoader.ts", "./RestaurantList.ts"], (function(t) {
    "use strict";
    var a, e, n, o, s, r, i, d, u, L, c, l, v;
    return {
        setters: [function(t) {
            a = t.cclegacy, e = t._decorator, n = t.instantiate, o = t.director, s = t.Component
        }, function(t) {
            r = t.inheritsLoose, i = t.defineProperty, d = t.assertThisInitialized
        }, function(t) {
            u = t.projectEvent
        }, function(t) {
            L = t.DataLoadingEvent, c = t.LevelLoadingEvent
        }, function(t) {
            l = t.LevelLoader
        }, function(t) {
            v = t.restaurantsList
        }],
        execute: function() {
            var f;
            a._RF.push({}, "44ea0Du5S9H/pmAYDPSOSKj", "RestaurantLoader", void 0);
            var h = e.ccclass;
            t("RestaurantLoader", h("RestaurantLoader")(f = function(t) {
                function a() {
                    for (var a, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                    return a = t.call.apply(t, [this].concat(n)) || this, i(d(a), "levelDataLoaded", !1), a
                }
                r(a, t);
                var e = a.prototype;
                return e.onLoad = function() {
                    u.on(L.RestaurantsLoaded, this.tryToLoadRestaurant, this), u.on(L.LevelDataLoaded, this.onLevelDataLoaded, this)
                }, e.onDestroy = function() {
                    u.off(L.RestaurantsLoaded, this.tryToLoadRestaurant, this), u.off(L.LevelDataLoaded, this.onLevelDataLoaded, this)
                }, e.onLevelDataLoaded = function() {
                    this.levelDataLoaded = !0, this.tryToLoadRestaurant()
                }, e.tryToLoadRestaurant = function() {
                    this.levelDataLoaded && v.isDataLoaded() && this.loadRestaurant()
                }, e.loadRestaurant = function() {
                    var t = v.getRestaurantPrefabById(l.instance.loadedLevel.getRestaurantId());
                    if (null != t) {
                        var a = n(t);
                        a.setParent(o.getScene()), a.setPosition(0, 0, 0)
                    }
                    u.emit(c.RestaurantInstantiated)
                }, a
            }(s)) || f);
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Logger.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var o, r;
    return {
        setters: [function(e) {
            o = e.cclegacy
        }, function(e) {
            r = e.defineProperty
        }],
        execute: function() {
            var g, n;
            e({
                    LogCategory: void 0,
                    LogType: void 0
                }), o._RF.push({}, "46e063+EuZIZL/iJQhAf/jc", "Logger", void 0),
                function(e) {
                    e[e.Info = 0] = "Info", e[e.Warning = 1] = "Warning", e[e.Error = 2] = "Error"
                }(g || (g = e("LogType", {}))),
                function(e) {
                    e[e.Generic = 0] = "Generic", e[e.Gameplay = 1] = "Gameplay", e[e.AI = 2] = "AI", e[e.Metagame = 3] = "Metagame", e[e.UI = 4] = "UI", e[e.Audio = 5] = "Audio"
                }(n || (n = e("LogCategory", {})));
            var t = e("Logger", function() {
                function e() {
                    for (var e in r(this, "currentLoggingLevel", g.Info), r(this, "categoryLogging", new Map), n) {
                        var o = Number(e);
                        isNaN(o) || this.categoryLogging.set(o, !0)
                    }
                }
                var o = e.prototype;
                return o.setLoggingLevel = function(e) {
                    this.currentLoggingLevel = e
                }, o.setCategoryLogging = function(e, o) {
                    this.categoryLogging.set(e, o)
                }, o.getCategoryLogging = function(e) {
                    if (this.categoryLogging.has(e)) {
                        var o = this.categoryLogging.get(e);
                        return o || !1
                    }
                    return !1
                }, o.log = function(e, o, r) {
                    if (void 0 === o && (o = n.Generic), void 0 === r && (r = g.Info), this.categoryLogging.get(o) && !(r < this.currentLoggingLevel)) {
                        var t = n[o];
                        switch (r) {
                            case g.Info:
                                console.log("[" + t + "] " + e);
                                break;
                            case g.Warning:
                                console.warn("[" + t + "] " + e);
                                break;
                            case g.Error:
                                console.error("[" + t + "] " + e)
                        }
                        g.Error
                    }
                }, e
            }());
            e("logger", new t).setLoggingLevel(g.Error), o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/InputEnums.ts", ["cc"], (function(r) {
    "use strict";
    var p;
    return {
        setters: [function(r) {
            p = r.cclegacy
        }],
        execute: function() {
            var t, e, a;
            r({
                    DropAreaEvent: void 0,
                    DroppableEvent: void 0,
                    InputEvent: void 0
                }), p._RF.push({}, "494bagGv19A6qaO01iDWWku", "InputEnums", void 0),
                function(r) {
                    r[r.Input_Tap = 0] = "Input_Tap", r[r.Input_HoldStart = 1] = "Input_HoldStart", r[r.Input_HoldEnd = 2] = "Input_HoldEnd", r[r.Input_DragStart = 3] = "Input_DragStart", r[r.Input_DragUpdate = 4] = "Input_DragUpdate", r[r.Input_DragEnd = 5] = "Input_DragEnd"
                }(t || (t = r("InputEvent", {}))),
                function(r) {
                    r[r.Droppable_ValidDrop = 0] = "Droppable_ValidDrop", r[r.Droppable_InvalidDrop = 1] = "Droppable_InvalidDrop", r[r.Droppable_EnteredADropArea = 2] = "Droppable_EnteredADropArea", r[r.Droppable_LeftAllDropAreas = 3] = "Droppable_LeftAllDropAreas"
                }(e || (e = r("DroppableEvent", {}))),
                function(r) {
                    r[r.DropArea_Targeted = 0] = "DropArea_Targeted", r[r.DropArea_Untargeted = 1] = "DropArea_Untargeted", r[r.DropArea_Dropped = 2] = "DropArea_Dropped"
                }(a || (a = r("DropAreaEvent", {}))), p._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Draggable.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./InputEnums.ts"], (function(t) {
    "use strict";
    var n, i, r, e, o, a, s, c, g, u, h, l;
    return {
        setters: [function(t) {
            n = t.cclegacy, i = t._decorator, r = t.EventHandler, e = t.Vec2, o = t.Component
        }, function(t) {
            a = t.applyDecoratedDescriptor, s = t.createClass, c = t.defineProperty, g = t.inheritsLoose, u = t.initializerDefineProperty, h = t.assertThisInitialized
        }, function(t) {
            l = t.InputEvent
        }],
        execute: function() {
            var D, _, p, S, b, f, P, d, v;
            n._RF.push({}, "4ba62TPJzhCar5/gykBs0KI", "Draggable", void 0);
            var y = i.ccclass,
                O = i.property,
                m = (t("Draggable", (D = y("Draggable"), _ = O({
                    type: [r],
                    visible: !0
                }), p = O({
                    type: [r],
                    visible: !0
                }), S = O({
                    type: [r],
                    visible: !0
                }), D((P = a((f = function(t) {
                    function n() {
                        for (var n, i = arguments.length, r = new Array(i), e = 0; e < i; e++) r[e] = arguments[e];
                        return n = t.call.apply(t, [this].concat(r)) || this, u(h(n), "_onDragStart", P, h(n)), u(h(n), "_onDragUpdate", d, h(n)), u(h(n), "_onDragEnd", v, h(n)), c(h(n), "_touchPositionOnDragStart", null), c(h(n), "_objectScreenPositionOnDragStart", null), c(h(n), "_isDragging", !1), n
                    }
                    g(n, t);
                    var i = n.prototype;
                    return i.onDisable = function() {
                        this.isDragging() && this.endDrag()
                    }, i.isDragging = function() {
                        return this._isDragging
                    }, i.startDrag = function(t, n) {
                        this._touchPositionOnDragStart = new e(t);
                        var i = n.worldToScreen(this.node.worldPosition);
                        this._objectScreenPositionOnDragStart = new e(i.x, i.y), this._isDragging = !0;
                        var o = new m(this._touchPositionOnDragStart, this._objectScreenPositionOnDragStart, this._touchPositionOnDragStart, n);
                        this.node.emit(l[l.Input_DragStart], o), r.emitEvents(this._onDragStart, o)
                    }, i.updateDrag = function(t, n) {
                        if (this.isDragging()) {
                            var i = new m(this._touchPositionOnDragStart, this._objectScreenPositionOnDragStart, t, n);
                            this.node.emit(l[l.Input_DragUpdate], i), r.emitEvents(this._onDragUpdate, i)
                        }
                    }, i.endDrag = function(t, n) {
                        void 0 === t && (t = null), void 0 === n && (n = null), this._isDragging = !1;
                        var i = new m(this._touchPositionOnDragStart, this._objectScreenPositionOnDragStart, t, n);
                        this.node.emit(l[l.Input_DragEnd], i), r.emitEvents(this._onDragEnd, i)
                    }, n
                }(o)).prototype, "_onDragStart", [_], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), d = a(f.prototype, "_onDragUpdate", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), v = a(f.prototype, "_onDragEnd", [S], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), b = f)) || b)), t("DragData", function() {
                    function t(t, n, i, r) {
                        c(this, "_touchPositionOnDragStart", null), c(this, "_objectScreenPositionOnDragStart", null), c(this, "_touchPosition", null), c(this, "_camera", null), this._touchPositionOnDragStart = t, this._objectScreenPositionOnDragStart = n, this._touchPosition = i, this._camera = r
                    }
                    return s(t, [{
                        key: "touchScreenPositionOnDragStart",
                        get: function() {
                            return this._touchPositionOnDragStart
                        }
                    }, {
                        key: "objectScreenPositionOnDragStart",
                        get: function() {
                            return this._objectScreenPositionOnDragStart
                        }
                    }, {
                        key: "touchScreenPosition",
                        get: function() {
                            return this._touchPosition
                        }
                    }, {
                        key: "camera",
                        get: function() {
                            return this._camera
                        }
                    }]), t
                }()));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AutoDisabler.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var t, i, r, n, o, a, c;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, r = e.Component
        }, function(e) {
            n = e.applyDecoratedDescriptor, o = e.inheritsLoose, a = e.initializerDefineProperty, c = e.assertThisInitialized
        }],
        execute: function() {
            var s, l, u;
            t._RF.push({}, "4bc42/+0eZJtak+i6xcVKxK", "AutoDisabler", void 0);
            var p = i.ccclass,
                b = i.property;
            e("AutoDisabler", p("AutoDisabler")((u = n((l = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                    return t = e.call.apply(e, [this].concat(r)) || this, a(c(t), "timeToDisable", u, c(t)), t
                }
                return o(t, e), t.prototype.onEnable = function() {
                    var e = this;
                    this.scheduleOnce((function() {
                        e.node.active = !1
                    }), this.timeToDisable)
                }, t
            }(r)).prototype, "timeToDisable", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), s = l)) || s);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FoodItem.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var i, r, t, n, o, u, a, c, p, l;
    return {
        setters: [function(e) {
            i = e.cclegacy, r = e._decorator, t = e.Enum, n = e.SpriteFrame, o = e.Prefab, u = e.Component
        }, function(e) {
            a = e.applyDecoratedDescriptor, c = e.inheritsLoose, p = e.initializerDefineProperty, l = e.assertThisInitialized
        }],
        execute: function() {
            var d, f, s, y, m, b, g, h, z, T, F, P, w, k, v, A, I, D, W, _, C;
            e("FoodType", void 0), i._RF.push({}, "4c7aeV5yzFBLo083d84QoPH", "FoodItem", void 0);
            var S, L = r.ccclass,
                R = r.property;
            ! function(e) {
                e[e.Pizza = 0] = "Pizza", e[e.Drink = 1] = "Drink", e[e.Snack = 2] = "Snack"
            }(S || (S = e("FoodType", {})));
            e("FoodItem", (d = L("FoodItem"), f = R({
                group: {
                    id: "id",
                    name: "Identification"
                }
            }), s = R({
                type: t(S),
                group: {
                    id: "id",
                    name: "Identification"
                }
            }), y = R({
                type: n,
                group: {
                    id: "presentation",
                    name: "Presentation"
                }
            }), m = R({
                type: o,
                group: {
                    id: "presentation",
                    name: "Presentation"
                }
            }), b = R({
                group: {
                    id: "order",
                    name: "Order"
                }
            }), g = R({
                group: {
                    id: "order",
                    name: "Order"
                }
            }), h = R({
                group: {
                    id: "carrier",
                    name: "When Carried"
                }
            }), z = R({
                type: o,
                group: {
                    id: "carrier",
                    name: "When Carried"
                }
            }), T = R({
                type: o,
                group: {
                    id: "carrier",
                    name: "When Carried"
                }
            }), d((w = a((P = function(e) {
                function i() {
                    for (var i, r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
                    return i = e.call.apply(e, [this].concat(t)) || this, p(l(i), "id", w, l(i)), p(l(i), "foodType", k, l(i)), p(l(i), "icon", v, l(i)), p(l(i), "model", A, l(i)), p(l(i), "timeToWait", I, l(i)), p(l(i), "price", D, l(i)), p(l(i), "needsTray", W, l(i)), p(l(i), "pickupAudio", _, l(i)), p(l(i), "dropAudio", C, l(i)), i
                }
                c(i, e);
                var r = i.prototype;
                return r.getId = function() {
                    return this.id
                }, r.getFoodType = function() {
                    return this.foodType
                }, r.getIcon = function() {
                    return this.icon
                }, r.getPrefab = function() {
                    return this.model
                }, r.getTimeToWait = function() {
                    return this.timeToWait
                }, r.getPrice = function() {
                    return this.price
                }, r.useTray = function() {
                    return this.needsTray
                }, r.getPickupAudioKey = function() {
                    return this.pickupAudio
                }, r.getDropAudioKey = function() {
                    return this.dropAudio
                }, r.equals = function(e) {
                    return this.id === e.id
                }, r.isReadyForDelivery = function() {
                    return !0
                }, i
            }(u)).prototype, "id", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), k = a(P.prototype, "foodType", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return S.Pizza
                }
            }), v = a(P.prototype, "icon", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = a(P.prototype, "model", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = a(P.prototype, "timeToWait", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), D = a(P.prototype, "price", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), W = a(P.prototype, "needsTray", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), _ = a(P.prototype, "pickupAudio", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = a(P.prototype, "dropAudio", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = P)) || F));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TrashCan.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./FoodItemCarrier.ts", "./InteractionEnums.ts", "./PlayerCharacter.ts", "./KitchenTool.ts"], (function(t) {
    "use strict";
    var n, e, r, i, o, a, c, s, u, l;
    return {
        setters: [function(t) {
            n = t.cclegacy, e = t._decorator
        }, function(t) {
            r = t.applyDecoratedDescriptor, i = t.inheritsLoose, o = t.initializerDefineProperty, a = t.assertThisInitialized
        }, function(t) {
            c = t.FoodItemCarrier
        }, function(t) {
            s = t.InteractionResult
        }, function(t) {
            u = t.PlayerCharacter
        }, function(t) {
            l = t.KitchenTool
        }],
        execute: function() {
            var p, f, h, d, y;
            n._RF.push({}, "4d71aWfHWVLebVDZiFPDHjz", "TrashCan", void 0);
            var C = e.ccclass,
                I = e.property;
            t("TrashCan", (p = C("TrashCan"), f = I({
                displayOrder: -1
            }), p((y = r((d = function(t) {
                function n() {
                    for (var n, e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                    return n = t.call.apply(t, [this].concat(r)) || this, o(a(n), "id", y, a(n)), n
                }
                i(n, t);
                var e = n.prototype;
                return e.getId = function() {
                    return this.id
                }, e.startInteraction = function() {
                    return u.instance.getComponent(c).hasItem() ? s.Success : s.None
                }, e.endInteraction = function() {
                    u.instance.getComponent(c).pull().node.destroy()
                }, n
            }(l)).prototype, "id", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "TrashCan"
                }
            }), h = d)) || h));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelIconList.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts"], (function(n) {
    "use strict";
    var e, t, o, i, s, c, r, l, a, u, d;
    return {
        setters: [function(n) {
            e = n.cclegacy, t = n.resources, o = n.SpriteFrame, i = n.game, s = n.Game
        }, function(n) {
            c = n.defineProperty
        }, function(n) {
            r = n.logger, l = n.LogCategory, a = n.LogType
        }, function(n) {
            u = n.projectEvent
        }, function(n) {
            d = n.DataLoadingEvent
        }],
        execute: function() {
            e._RF.push({}, "4e04133UklB37g2UvtX3RIk", "LevelIconList", void 0);
            var L = n("LevelIconList", function() {
                function n() {
                    var n = this;
                    c(this, "icons", []), i.on(s.EVENT_GAME_INITED, (function() {
                        n.loadDataFromBundle()
                    }), this)
                }
                var e = n.prototype;
                return e.isDataLoaded = function() {
                    return this.icons.length > 0
                }, e.getLevelIconByName = function(n) {
                    if (!n) return null;
                    var e = this.icons.findIndex((function(e) {
                        return e.name === n
                    }));
                    return e > -1 ? this.icons[e] : (r.log("Level icon with name " + n + " not found!", l.Generic, a.Error), null)
                }, e.loadDataFromBundle = function() {
                    t.loadDir("Levels/LevelIcons", o, null, this.onLoadComplete.bind(this))
                }, e.onLoadComplete = function(n, e) {
                    this.icons = e.slice(), r.log("Finished loading Level icons. " + this.icons.length + " icons loaded."), u.emit(d.LevelsIconsLoaded)
                }, n
            }());
            n("levelsIconsList", new L);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TouchController.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./Tappable.ts", "./Draggable.ts", "./Holdable.ts"], (function(t) {
    "use strict";
    var i, e, n, o, a, s, r, h, l, u, g, c, d, p, b, f, _, v, m, T, y;
    return {
        setters: [function(t) {
            i = t.cclegacy, e = t._decorator, n = t.Camera, o = t.input, a = t.Input, s = t.game, r = t.Vec2, h = t.geometry, l = t.PhysicsSystem, u = t.Vec3, g = t.Component
        }, function(t) {
            c = t.defineProperty, d = t.applyDecoratedDescriptor, p = t.inheritsLoose, b = t.initializerDefineProperty, f = t.assertThisInitialized, _ = t.createClass
        }, function(t) {
            v = t.logger
        }, function(t) {
            m = t.Tappable
        }, function(t) {
            T = t.Draggable
        }, function(t) {
            y = t.Holdable
        }],
        execute: function() {
            var D, H, I, S, L, E, M, C, k, w, x, F, P;
            i._RF.push({}, "4e1b0GHVi1IfJ8x0OM8H5sb", "TouchController", void 0);
            var R, B = e.ccclass,
                z = e.property;
            t("TouchController", (D = B("TouchController"), H = z({
                type: n,
                visible: !0,
                formerlySerializedAs: "camera"
            }), I = z({
                visible: !0,
                min: 0,
                formerlySerializedAs: "maxTapInterval"
            }), S = z({
                visible: !0,
                min: 0,
                tooltip: "Move distance in pixels"
            }), L = z({
                visible: !0
            }), D((P = F = function(t) {
                function i() {
                    for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                    return i = t.call.apply(t, [this].concat(n)) || this, b(f(i), "_camera", C, f(i)), b(f(i), "_maxTapInterval", k, f(i)), b(f(i), "_minMovementToDrag", w, f(i)), b(f(i), "_verboseLogging", x, f(i)), c(f(i), "_touchData", []), i
                }
                p(i, t);
                var e = i.prototype;
                return e.onLoad = function() {
                    i._instance ? this.node.destroy() : i._instance = this
                }, e.start = function() {
                    o.on(a.EventType.TOUCH_START, this.onTouchStart, this), o.on(a.EventType.TOUCH_MOVE, this.onTouchMove, this), o.on(a.EventType.TOUCH_END, this.onTouchEnd, this), o.on(a.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
                }, e.update = function() {
                    for (var t = 0; t < this._touchData.length; t++) {
                        var i = this._touchData[t];
                        i.isEligibleForTap(s.frameStartTime, this._maxTapInterval) || (i.isEligibleForDrag() && i.startDrag(i.position, s.frameStartTime, this._camera, this._verboseLogging), i.isEligibleForHold() && i.startHold(this._verboseLogging))
                    }
                }, e.onDestroy = function() {
                    i._instance == this && (i._instance = null)
                }, e.onTouchStart = function(t) {
                    if (!t.currentTarget) {
                        this.getTouchDataById(t.touch.getID()) && this.removeTouchById(t.touch.getID());
                        var i = new U(t.touch.getID(), t.touch.getLocation(), t.touch.lastModified);
                        this._touchData.push(i);
                        var e = this.getNodeUnderTouch(i.position);
                        e && (i.tappable = e.getComponent(m), i.holdable = e.getComponent(y), i.draggable = e.getComponent(T))
                    }
                }, e.onTouchMove = function(t) {
                    var i = this.getTouchDataById(t.touch.getID());
                    if (i && !i.isEligibleForTap(t.touch.lastModified, this._maxTapInterval)) switch (i.status) {
                        case R.Starting:
                            i.isEligibleForDrag() && this.isMoveRelevant(t.touch.getLocation(), i.position) && i.startDrag(t.touch.getLocation(), t.touch.lastModified, this._camera, this._verboseLogging), i.isEligibleForHold() && (this.isMoveRelevant(t.touch.getLocation(), i.position) || i.startHold(this._verboseLogging));
                            break;
                        case R.Dragging:
                            i.updatePosition(t.touch.getLocation(), t.touch.lastModified), i.draggable.updateDrag(i.position, this._camera);
                            break;
                        case R.Holding:
                            var e = this.getNodeUnderTouch(t.touch.getLocation());
                            null != e && e.getComponent(y) == i.holdable || i.endHold(this._verboseLogging)
                    }
                }, e.onTouchEnd = function(t) {
                    var i = this.getTouchDataById(t.touch.getID());
                    if (null != i) {
                        switch (i.status) {
                            case R.Starting:
                                i.isEligibleForTap(t.touch.lastModified, this._maxTapInterval) && (this._verboseLogging && v.log("Touch with id " + i.id + " is a tap on " + i.tappable.node.name), i.tappable.tap());
                                break;
                            case R.Dragging:
                                i.endDrag(t.touch.getLocation(), t.touch.lastModified, this._camera, this._verboseLogging);
                                break;
                            case R.Holding:
                                i.endHold(this._verboseLogging)
                        }
                        this.removeTouchById(t.touch.getID())
                    }
                }, e.onTouchCancel = function(t) {
                    this.removeTouchById(t.touch.getID())
                }, e.getTouchDataById = function(t) {
                    var i = this._touchData.findIndex((function(i) {
                        return i.id == t
                    }));
                    return i > -1 ? this._touchData[i] : null
                }, e.removeTouchById = function(t) {
                    var i = this._touchData.findIndex((function(i) {
                        return i.id == t
                    }));
                    i > -1 && this._touchData.splice(i, 1)
                }, e.isMoveRelevant = function(t, i) {
                    var e = new r(0, 0);
                    return r.subtract(e, t, i), e.lengthSqr() < this._minMovementToDrag * this._minMovementToDrag
                }, e.getNodeUnderTouch = function(t) {
                    var i = new h.Ray;
                    if (this._camera.screenPointToRay(t.x, t.y, i), l.instance.raycast(i)) {
                        for (var e = l.instance.raycastResults, n = null, o = Number.MAX_VALUE, a = 0; a < e.length; a++) {
                            var s = new u(0, 0, 0);
                            u.subtract(s, e[a].hitPoint, i.o), s.lengthSqr() < o && (o = s.lengthSqr(), n = e[a])
                        }
                        if (n) return n.collider.node
                    }
                    return null
                }, i
            }(g), c(F, "_instance", null), C = d((M = P).prototype, "_camera", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = d(M.prototype, "_maxTapInterval", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 200
                }
            }), w = d(M.prototype, "_minMovementToDrag", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), x = d(M.prototype, "_verboseLogging", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), E = M)) || E));
            ! function(t) {
                t[t.Starting = 0] = "Starting", t[t.Dragging = 1] = "Dragging", t[t.Holding = 2] = "Holding", t[t.Done = 3] = "Done"
            }(R || (R = {}));
            var U = function() {
                    function t(t, i, e) {
                        c(this, "_id", void 0), c(this, "_positionHistory", []), c(this, "_onScreen", !0), c(this, "_tappable", null), c(this, "_draggable", null), c(this, "_holdable", null), c(this, "_status", R.Starting), this._id = t, this.updatePosition(i, e), this._onScreen = !0
                    }
                    var i = t.prototype;
                    return i.updatePosition = function(t, i) {
                        this._positionHistory.push(new A(t, i))
                    }, i.hasMoved = function() {
                        return this._positionHistory.length > 1
                    }, i.isEligibleForTap = function(t, i) {
                        return null != this.tappable && this.status == R.Starting && this.tappable.enabled && t - this.startTime < i
                    }, i.isEligibleForDrag = function() {
                        return null != this.draggable && (this.status == R.Starting || this.status == R.Holding) && this.draggable.enabled
                    }, i.isEligibleForHold = function() {
                        return null != this.holdable && this.status == R.Starting && this.holdable.enabled
                    }, i.startDrag = function(t, i, e, n) {
                        void 0 === n && (n = !1), n && v.log("Touch with id " + this.id + " is starting a drag on " + this.draggable.node.name), this.status == R.Holding && this.endHold(n), this.status = R.Dragging, this.draggable.startDrag(t, e), this.updatePosition(t, i)
                    }, i.startHold = function(t) {
                        void 0 === t && (t = !1), t && v.log("Touch with id " + this.id + " is starting a hold on " + this.holdable.node.name), this.status = R.Holding, this.holdable.startHold()
                    }, i.endDrag = function(t, i, e, n) {
                        void 0 === n && (n = !1), n && v.log("Touch with id " + this.id + " is ending a drag on " + this.draggable.node.name), this.status = R.Done, this.draggable.endDrag(t, e)
                    }, i.endHold = function(t) {
                        void 0 === t && (t = !1), t && v.log("Touch with id " + this.id + " is ending a hold on " + this.holdable.node.name), this.status = R.Done, this.holdable.endHold()
                    }, _(t, [{
                        key: "id",
                        get: function() {
                            return this._id
                        }
                    }, {
                        key: "startTime",
                        get: function() {
                            return this._positionHistory[0].time
                        }
                    }, {
                        key: "onScreen",
                        get: function() {
                            return this._onScreen
                        },
                        set: function(t) {
                            this._onScreen = t
                        }
                    }, {
                        key: "position",
                        get: function() {
                            return this._positionHistory[this._positionHistory.length - 1].position
                        }
                    }, {
                        key: "startPosition",
                        get: function() {
                            return this._positionHistory[0].position
                        }
                    }, {
                        key: "tappable",
                        get: function() {
                            return this._tappable
                        },
                        set: function(t) {
                            this._tappable = t
                        }
                    }, {
                        key: "draggable",
                        get: function() {
                            return this._draggable
                        },
                        set: function(t) {
                            this._draggable = t
                        }
                    }, {
                        key: "holdable",
                        get: function() {
                            return this._holdable
                        },
                        set: function(t) {
                            this._holdable = t
                        }
                    }, {
                        key: "status",
                        get: function() {
                            return this._status
                        },
                        set: function(t) {
                            this._status = t
                        }
                    }]), t
                }(),
                A = function() {
                    function t(t, i, e) {
                        void 0 === e && (e = !1), c(this, "_position", r.ZERO), c(this, "_time", 0), c(this, "_moving", void 0), this._position = t, this._time = i, this._moving = e
                    }
                    return _(t, [{
                        key: "position",
                        get: function() {
                            return this._position
                        }
                    }, {
                        key: "time",
                        get: function() {
                            return this._time
                        }
                    }, {
                        key: "moving",
                        get: function() {
                            return this._moving
                        },
                        set: function(t) {
                            this._moving = t
                        }
                    }]), t
                }();
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelFoodPresenterIcon.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(i) {
    "use strict";
    var e, t, n, r, o, l, a, c, u;
    return {
        setters: [function(i) {
            e = i.cclegacy, t = i._decorator, n = i.Sprite, r = i.animation, o = i.Component
        }, function(i) {
            l = i.applyDecoratedDescriptor, a = i.inheritsLoose, c = i.initializerDefineProperty, u = i.assertThisInitialized
        }],
        execute: function() {
            var s, h, g, p, m, f, b, v, _, y, d;
            e._RF.push({}, "4ff5cHzIiVKWIUFgYebvDrB", "LevelFoodPresenterIcon", void 0);
            var A = t.ccclass,
                F = t.property;
            i("LevelFoodPresenterIcon", (s = A("LevelFoodPresenterIcon"), h = F({
                type: n,
                visible: !0
            }), g = F({
                visible: !0
            }), p = F({
                type: r.AnimationController,
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), m = F({
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), s((v = l((b = function(i) {
                function e() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return e = i.call.apply(i, [this].concat(n)) || this, c(u(e), "_icon", v, u(e)), c(u(e), "_highlightAnimationTime", _, u(e)), c(u(e), "_animationController", y, u(e)), c(u(e), "_highlightTrigger", d, u(e)), e
                }
                a(e, i);
                var t = e.prototype;
                return t.onDisable = function() {
                    this.unscheduleAllCallbacks()
                }, t.setIcon = function(i) {
                    this._icon.spriteFrame = i
                }, t.playHighlight = function(i) {
                    var e = this;
                    this.scheduleOnce((function() {
                        e._animationController.setValue(e._highlightTrigger, !0)
                    }), i * this._highlightAnimationTime)
                }, e
            }(o)).prototype, "_icon", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), _ = l(b.prototype, "_highlightAnimationTime", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), y = l(b.prototype, "_animationController", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), d = l(b.prototype, "_highlightTrigger", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "highlight"
                }
            }), f = b)) || f));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ReloadSceneButton.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./SceneLoader.ts"], (function(e) {
    "use strict";
    var t, n, o, r, c, i, a, l, u;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, o = e.director, r = e.Component
        }, function(e) {
            c = e.applyDecoratedDescriptor, i = e.inheritsLoose, a = e.initializerDefineProperty, l = e.assertThisInitialized
        }, function(e) {
            u = e.SceneLoader
        }],
        execute: function() {
            var s, d, p;
            t._RF.push({}, "505f4N6o9VOVqMDjOZBooIZ", "ReloadSceneButton", void 0);
            var f = n.ccclass,
                y = n.property;
            e("ReloadSceneButton", f("ReloadSceneButton")((p = c((d = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(l(t), "delay", p, l(t)), t
                }
                return i(t, e), t.prototype.loadScene = function() {
                    0 === this.delay ? u.load(o.getScene().name) : this.scheduleOnce((function() {
                        u.load(o.getScene().name)
                    }), this.delay)
                }, t
            }(r)).prototype, "delay", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), s = d)) || s);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FollowDragOnGroundExample.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./InputEnums.ts", "./Draggable.ts"], (function(n) {
    "use strict";
    var e, t, r, o, i, a, s, l, u, c, d, p, g, h;
    return {
        setters: [function(n) {
            e = n.cclegacy, t = n._decorator, r = n.Layers, o = n.geometry, i = n.PhysicsSystem, a = n.Collider, s = n.Vec3, l = n.Component
        }, function(n) {
            u = n.applyDecoratedDescriptor, c = n.inheritsLoose, d = n.initializerDefineProperty, p = n.assertThisInitialized
        }, function(n) {
            g = n.InputEvent
        }, function(n) {
            h = n.Draggable
        }],
        execute: function() {
            var y, f, m, v, D, b;
            e._RF.push({}, "508557u52tOdqiIYtxcbrB7", "FollowDragOnGroundExample", void 0);
            var P = t.ccclass,
                _ = t.property,
                w = t.requireComponent;
            n("FollowDragOnGroundExample", (y = P("FollowDragOnGroundExample"), f = w(h), m = _({
                type: r.BitMask,
                visible: !0
            }), y(v = f((b = u((D = function(n) {
                function e() {
                    for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    return e = n.call.apply(n, [this].concat(r)) || this, d(p(e), "_groundLayerMask", b, p(e)), e
                }
                c(e, n);
                var t = e.prototype;
                return t.onLoad = function() {
                    this.node.on(g[g.Input_DragUpdate], this.onDragUpdate, this)
                }, t.onDragUpdate = function(n) {
                    var e = this.getGroundPosition(n);
                    e && (this.node.worldPosition = e)
                }, t.getGroundPosition = function(n) {
                    var e = new o.Ray;
                    if (n.camera.screenPointToRay(n.touchScreenPosition.x, n.touchScreenPosition.y, e), i.instance.raycast(e)) {
                        for (var t = i.instance.raycastResults, r = null, l = Number.MAX_VALUE, u = this.node.getComponentsInChildren(a), c = 0; c < t.length; c++)
                            if ((t[c].collider.node.layer & this._groundLayerMask) > 0 && !this.isSubCollider(t[c].collider, u)) {
                                var d = new s(0, 0, 0);
                                s.subtract(d, t[c].hitPoint, e.o), d.lengthSqr() < l && (l = d.lengthSqr(), r = t[c])
                            }
                        if (r) return r.hitPoint
                    }
                    return null
                }, t.isSubCollider = function(n, e) {
                    return e.indexOf(n) > -1
                }, e
            }(l)).prototype, "_groundLayerMask", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return r.makeMaskInclude([r.BitMask.DEFAULT])
                }
            }), v = D)) || v) || v));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/KitchenToolList.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./BundleLoader.ts", "./KitchenTool.ts"], (function(t) {
    "use strict";
    var o, n, e, i, l, r, a, s, u, c, d, h;
    return {
        setters: [function(t) {
            o = t.cclegacy, n = t.Prefab, e = t.game, i = t.Game
        }, function(t) {
            l = t.defineProperty
        }, function(t) {
            r = t.logger, a = t.LogCategory, s = t.LogType
        }, function(t) {
            u = t.projectEvent
        }, function(t) {
            c = t.DataLoadingEvent
        }, function(t) {
            d = t.contentLoader
        }, function(t) {
            h = t.KitchenTool
        }],
        execute: function() {
            o._RF.push({}, "5104bYKQVpAkKQpEM5/15pk", "KitchenToolList", void 0);
            var f = t("KitchenToolList", function() {
                function t() {
                    var t = this;
                    l(this, "tools", []), e.on(i.EVENT_GAME_INITED, (function() {
                        d.isDataLoaded() ? t.loadDataFromBundle() : u.once(c.ContentBundleLoaded, t.loadDataFromBundle, t)
                    }), this)
                }
                var o = t.prototype;
                return o.getToolById = function(t) {
                    var o = this.getToolPrefabById(t);
                    if (null != o) {
                        var n = o.data.getComponent(h);
                        if (null != n) return n;
                        r.log("Kitchen tool with id " + t + " is missing a " + h.name + " component!", a.Generic, s.Error)
                    }
                    return null
                }, o.isDataLoaded = function() {
                    return this.tools.length > 0
                }, o.getToolPrefabById = function(t) {
                    if ("" === t) return null;
                    var o = this.tools.findIndex((function(o) {
                        return o.data.getComponent(h).getId() === t
                    }));
                    return o > -1 ? this.tools[o] : (r.log("Kitchen tool with id " + t + " not found on Kitchen Tools list!", a.Generic, s.Error), null)
                }, o.loadDataFromBundle = function() {
                    d.bundle.loadDir("Kitchen", n, null, this.onLoadComplete.bind(this))
                }, o.onLoadComplete = function(t, o) {
                    this.tools = o.slice(), r.log("Finished loading Kitchen tools. " + this.tools.length + " tools loaded."), u.emit(c.KitchenToolsLoaded)
                }, t
            }());
            t("kitchenToolsList", new f);
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/VirtualJoystick.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./VirutalJoystick%20enums.ts", "./AxisInput.ts"], (function(t) {
    "use strict";
    var i, o, s, n, c, e;
    return {
        setters: [function(t) {
            i = t.cclegacy, o = t._decorator
        }, function(t) {
            s = t.inheritsLoose
        }, function(t) {
            n = t.projectEvent
        }, function(t) {
            c = t.VirtualJoystickEvent
        }, function(t) {
            e = t.AxisInput
        }],
        execute: function() {
            var r;
            i._RF.push({}, "53d6ak+3nROapxBv5lms9wF", "VirtualJoystick", void 0);
            var u = o.ccclass;
            t("VirtualJoystick", u("VirtualJoystick")(r = function(t) {
                function i() {
                    return t.apply(this, arguments) || this
                }
                s(i, t);
                var o = i.prototype;
                return o.start = function() {
                    n.on(c[c.VistualJoystickPositionUpdated], this.onJoystickUpdate, this)
                }, o.onDestroy = function() {
                    n.off(c[c.VistualJoystickPositionUpdated], this.onJoystickUpdate, this)
                }, o.onJoystickUpdate = function(t) {
                    this._horizontal = t.x, this._vertical = t.y
                }, i
            }(e)) || r);
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GameUIElement.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts"], (function(t) {
    "use strict";
    var e, n, i, r, a, o, s, l, c, u;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t._decorator, i = t.animation, r = t.Component
        }, function(t) {
            a = t.GameEvent
        }, function(t) {
            o = t.applyDecoratedDescriptor, s = t.inheritsLoose, l = t.initializerDefineProperty, c = t.assertThisInitialized
        }, function(t) {
            u = t.projectEvent
        }],
        execute: function() {
            var h, m, f, p, y, _, d;
            e._RF.push({}, "54244w9I7dFnI7SLHaYyxyd", "GameUIElement", void 0);
            var v = n.ccclass,
                w = n.property;
            t("GameUIElement", (h = v("GameUIElement"), m = w({
                type: i.AnimationController,
                visible: !0
            }), f = w({
                visible: !0
            }), h((_ = o((y = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(i)) || this, l(c(e), "_animator", _, c(e)), l(c(e), "_showParameter", d, c(e)), e
                }
                s(e, t);
                var n = e.prototype;
                return n.onEnable = function() {
                    u.on(a.StartPlaying, this.show, this), u.on(a.EndGame, this.hide, this)
                }, n.onDisable = function() {
                    u.off(a.StartPlaying, this.show, this), u.off(a.EndGame, this.hide, this)
                }, n.show = function() {
                    this._animator && this._animator.setValue(this._showParameter, !0)
                }, n.hide = function() {
                    this._animator && this._animator.setValue(this._showParameter, !1)
                }, e
            }(r)).prototype, "_animator", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), d = o(y.prototype, "_showParameter", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), p = y)) || p));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelButton.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./AudioManager.ts", "./DataLoadingEnums.ts", "./SaveGame.ts", "./LevelLoader.ts", "./LevelIconList.ts", "./LevelUnlockerForTest.ts"], (function(e) {
    "use strict";
    var o, t, n, i, r, l, a, u, s, c, d, h, p, m, f, b, g, v, y, C, L, w;
    return {
        setters: [function(e) {
            o = e.cclegacy, t = e._decorator, n = e.Button, i = e.Label, r = e.Node, l = e.Sprite, a = e.animation, u = e.Prefab, s = e.Color, c = e.Component
        }, function(e) {
            d = e.applyDecoratedDescriptor, h = e.inheritsLoose, p = e.initializerDefineProperty, m = e.assertThisInitialized, f = e.defineProperty, b = e.createClass
        }, function(e) {
            g = e.projectEvent
        }, function(e) {
            v = e.AudioManager
        }, function(e) {
            y = e.DataLoadingEvent
        }, function(e) {
            C = e.saveGame
        }, function(e) {
            L = e.LevelLoader
        }, function(e) {
            w = e.levelsIconsList
        }, null],
        execute: function() {
            var k, _, S, B, D, I, z, x, A, T, E, P, G, H, M, O, W, F, U, V, N, j, R, q, K, Z, J, Q, X, Y, $, ee, oe, te, ne, ie, re, le, ae, ue, se;
            o._RF.push({}, "5494aaZAyFEy5rDNCRWUIpm", "LevelButton", void 0);
            var ce = t.ccclass,
                de = t.property;
            e("LevelButton", (k = ce("LevelButton"), _ = de({
                group: {
                    id: "settings",
                    name: "Settings"
                },
                formerlySerializedAs: "baseShowDelay"
            }), S = de({
                type: n,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), B = de({
                type: i,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), D = de({
                type: r,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), I = de({
                type: r,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), z = de({
                type: r,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), x = de({
                type: r,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), A = de({
                type: l,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), T = de({
                group: {
                    id: "colorscheme",
                    name: "Standard"
                }
            }), E = de({
                group: {
                    id: "colorscheme",
                    name: "Standard"
                }
            }), P = de({
                group: {
                    id: "colorscheme",
                    name: "Current"
                }
            }), G = de({
                group: {
                    id: "colorscheme",
                    name: "Current"
                }
            }), H = de({
                group: {
                    id: "colorscheme",
                    name: "Locked"
                }
            }), M = de({
                group: {
                    id: "colorscheme",
                    name: "Locked"
                }
            }), O = de({
                type: a.AnimationController,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), W = de({
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), F = de({
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), U = de({
                type: u,
                visible: !0,
                group: {
                    id: "audio",
                    name: "Audio"
                }
            }), V = de({
                visible: !0,
                group: {
                    id: "audio",
                    name: "Audio"
                }
            }), k((R = d((j = function(e) {
                function o() {
                    for (var o, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return o = e.call.apply(e, [this].concat(n)) || this, p(m(o), "_baseShowDelay", R, m(o)), p(m(o), "_button", q, m(o)), p(m(o), "levelIndexLabel", K, m(o)), p(m(o), "stars", Z, m(o)), p(m(o), "lockedOverlay", J, m(o)), p(m(o), "leftBottomPanel", Q, m(o)), p(m(o), "leftTopPanel", X, m(o)), p(m(o), "levelIcon", Y, m(o)), p(m(o), "standardBrightColor", $, m(o)), p(m(o), "standardDarkColor", ee, m(o)), p(m(o), "currentBrightColor", oe, m(o)), p(m(o), "currentDarkColor", te, m(o)), p(m(o), "lockedBrightColor", ne, m(o)), p(m(o), "lockedDarkColor", ie, m(o)), p(m(o), "animationController", re, m(o)), p(m(o), "showBoolean", le, m(o)), p(m(o), "highlightBoolean", ae, m(o)), p(m(o), "_onShowAudio", ue, m(o)), p(m(o), "_fadeOutAfter", se, m(o)), f(m(o), "_index", 0), f(m(o), "_level", null), f(m(o), "_onSaveGameLoadedCallback", null), o
                }
                h(o, e);
                var t = o.prototype;
                return t.onLoad = function() {}, t.onDestroy = function() {
                    this._onSaveGameLoadedCallback && g.off(y.SaveGameLoaded, this._onSaveGameLoadedCallback, this), g.off(y.LevelsIconsLoaded, this.loadLevelIcon, this), this.unscheduleAllCallbacks()
                }, t.setup = function(e, o) {
                    var t = this;
                    this._index = e, this.levelIndexLabel.string = (e + 1).toFixed(), C.isDataLoaded() || (this._onSaveGameLoadedCallback = g.on(y.SaveGameLoaded, (function() {
                        t.tryToSetData(o)
                    }), this)), this.tryToSetData(o) || this.lock()
                }, t.show = function() {
                    var e = this;
                    this.scheduleOnce((function() {
                        if (e.animationController.setValue(e.showBoolean, !0), C.getMaxLevelUnlockedIndex() == e._index && e.animationController.setValue(e.highlightBoolean, !0), e._onShowAudio) {
                            var o = v.instance.playByKey(e._onShowAudio);
                            o && o.scaleVolume(1 - (e._index + (e.node.parent.children.length - e._fadeOutAfter)) / e.node.parent.children.length)
                        }
                    }), this._baseShowDelay * this._index)
                }, t.quickshow = function() {
                    this.animationController.setValue(this.showBoolean, !0)
                }, t.hide = function() {
                    this.unscheduleAllCallbacks(), this.animationController.setValue(this.showBoolean, !1)
                }, t.loadLevel = function() {
                    L.loadLevel(this._level)
                }, t.lock = function(e) {
                    void 0 === e && (e = !0), this.lockedOverlay.active = e, this._button.interactable = !e
                }, t.unlock = function() {
                    this.lock(!1)
                }, t.tryToSetData = function(e) {
                    if (C.isDataLoaded() && (this._level = e, null != this._level)) {
                        w.isDataLoaded() ? this.loadLevelIcon() : g.on(y.LevelsIconsLoaded, this.loadLevelIcon, this);
                        var o = C.getLevelMaxScore(e);
                        return o > 0 && this.fillStars(o), C.getMaxLevelUnlockedIndex() > this._index ? (this.unlock(), this.setColor(this.standardBrightColor, this.standardDarkColor)) : C.getMaxLevelUnlockedIndex() == this._index ? (this.unlock(), this.setColor(this.currentBrightColor, this.currentDarkColor)) : (this.lock(), this.setColor(this.lockedBrightColor, this.lockedDarkColor)), !0
                    }
                    return !1
                }, t.fillStars = function(e) {
                    for (var o = 0; o < this.stars.length; o++) this.stars[o].active = e >= this._level.getStarScore(o)
                }, t.setColor = function(e, o) {
                    this.leftBottomPanel.getComponent(l).color = o, this.leftTopPanel.getComponent(l).color = e, this.levelIndexLabel.getComponent(i).color = o
                }, t.loadLevelIcon = function() {
                    var e = w.getLevelIconByName(this._level.getIconName());
                    null != e && (this.levelIcon.spriteFrame = e)
                }, b(o, [{
                    key: "baseShowDelay",
                    get: function() {
                        return this._baseShowDelay
                    }
                }]), o
            }(c)).prototype, "_baseShowDelay", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), q = d(j.prototype, "_button", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = d(j.prototype, "levelIndexLabel", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = d(j.prototype, "stars", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), J = d(j.prototype, "lockedOverlay", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Q = d(j.prototype, "leftBottomPanel", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), X = d(j.prototype, "leftTopPanel", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Y = d(j.prototype, "levelIcon", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $ = d(j.prototype, "standardBrightColor", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s(s.WHITE)
                }
            }), ee = d(j.prototype, "standardDarkColor", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s(s.WHITE)
                }
            }), oe = d(j.prototype, "currentBrightColor", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s(s.WHITE)
                }
            }), te = d(j.prototype, "currentDarkColor", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s(s.WHITE)
                }
            }), ne = d(j.prototype, "lockedBrightColor", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s(s.WHITE)
                }
            }), ie = d(j.prototype, "lockedDarkColor", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s(s.WHITE)
                }
            }), re = d(j.prototype, "animationController", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = d(j.prototype, "showBoolean", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), ae = d(j.prototype, "highlightBoolean", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "highlight"
                }
            }), ue = d(j.prototype, "_onShowAudio", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = d(j.prototype, "_fadeOutAfter", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 15
                }
            }), N = j)) || N));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PizzaObject.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./FoodItemObject.ts", "./LocalEventHandler.ts", "./PizzaEnums.ts", "./PizzaRecipe.ts", "./Pizza.ts", "./PizzaObjectIngredient.ts"], (function(e) {
    "use strict";
    var t, i, n, r, a, o, s, d, c, u, l, h, g, z, p, b, f, P;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, n = e.Node, r = e.ParticleSystem, a = e.instantiate, o = e.Vec3
        }, function(e) {
            s = e.applyDecoratedDescriptor, d = e.inheritsLoose, c = e.initializerDefineProperty, u = e.assertThisInitialized, l = e.defineProperty, h = e.createClass
        }, function(e) {
            g = e.FoodItemObject
        }, function(e) {
            z = e.LocalEventHandler
        }, function(e) {
            p = e.PizzaEvent
        }, function(e) {
            b = e.PizzaState
        }, function(e) {
            f = e.Pizza
        }, function(e) {
            P = e.PizzaObjectIngredient
        }],
        execute: function() {
            var k, m, y, v, I, S, D, w, j, O, T;
            t._RF.push({}, "57adfws+9JKP7ciy5YZkA2J", "PizzaObject", void 0);
            var B = i.ccclass,
                _ = i.property;
            e("PizzaObject", (k = B("PizzaObject"), m = _(n), y = _(n), v = _(r), I = _(r), k((w = s((D = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(n)) || this, c(u(t), "pizzaDough", w, u(t)), c(u(t), "ingredientsNode", j, u(t)), c(u(t), "bakedSmoke", O, u(t)), c(u(t), "burnedSmoke", T, u(t)), l(u(t), "ingredients", []), l(u(t), "addedDough", !1), t
                }
                d(t, e);
                var i = t.prototype;
                return i.start = function() {
                    this.addDoughToIngredients()
                }, i.setItem = function(t) {
                    var i = this;
                    if (e.prototype.setItem.call(this, t), t instanceof f) {
                        var n = t.getComponent(z);
                        null != n && (n.eventTarget.on(p.IngredientAdded, (function(e) {
                            i.addIngredient(e)
                        }), this), n.eventTarget.on(p.Baked, this.bakePizza, this), n.eventTarget.on(p.Burned, this.burnPizza, this));
                        for (var r = 0; r < t.recipe.getLength(); r++) this.addIngredient(t.recipe.getIngredient(r));
                        switch (t.recipe.getState()) {
                            case b.Baked:
                                this.bakePizza();
                                break;
                            case b.Burned:
                                this.burnPizza()
                        }
                    }
                }, i.addIngredient = function(e) {
                    var t = a(e.getPizzaModelPrefab());
                    t.parent = this.ingredientsNode, t.position = o.ZERO, this.ingredients.push(t.getComponent(P))
                }, i.bakePizza = function() {
                    this.addDoughToIngredients(), this.allowParticles && this.bakedSmoke.play();
                    for (var e = 0; e < this.ingredients.length; e++) this.ingredients[e].cook()
                }, i.burnPizza = function() {
                    this.addDoughToIngredients(), this.allowParticles && this.burnedSmoke.play();
                    for (var e = 0; e < this.ingredients.length; e++) this.ingredients[e].burn()
                }, i.addDoughToIngredients = function() {
                    this.addedDough || (this.addedDough = !0, this.ingredients.push(this.pizzaDough.getComponent(P)))
                }, h(t, [{
                    key: "allowParticles",
                    set: function(e) {
                        if (this._allowParticles = e, e) switch (this.getItem().getState()) {
                            case b.Baked:
                                this.bakedSmoke.play();
                                break;
                            case b.Burned:
                                this.burnedSmoke.play()
                        } else this.bakedSmoke.stop(), this.burnedSmoke.stop()
                    }
                }]), t
            }(g)).prototype, "pizzaDough", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = s(D.prototype, "ingredientsNode", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = s(D.prototype, "bakedSmoke", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = s(D.prototype, "burnedSmoke", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = D)) || S));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PizzaObjectIngredient.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var o, t, i, r, n, c, a, u;
    return {
        setters: [function(e) {
            o = e.cclegacy, t = e._decorator, i = e.Node, r = e.Component
        }, function(e) {
            n = e.applyDecoratedDescriptor, c = e.inheritsLoose, a = e.initializerDefineProperty, u = e.assertThisInitialized
        }],
        execute: function() {
            var l, d, s, p, y, v, f, b, h;
            o._RF.push({}, "5d51eYGYkxJpopMQgMv4ZVo", "PizzaObjectIngredient", void 0);
            var z = t.ccclass,
                B = t.property;
            e("PizzaObjectIngredient", (l = z("PizzaObjectIngredient"), d = B(i), s = B(i), p = B(i), l((f = n((v = function(e) {
                function o() {
                    for (var o, t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                    return o = e.call.apply(e, [this].concat(i)) || this, a(u(o), "rawBody", f, u(o)), a(u(o), "cookedBody", b, u(o)), a(u(o), "overCookedBody", h, u(o)), o
                }
                c(o, e);
                var t = o.prototype;
                return t.cook = function() {
                    this.rawBody.active = !1, this.cookedBody.active = !0, this.overCookedBody.active = !1
                }, t.burn = function() {
                    this.rawBody.active = !1, this.cookedBody.active = !1, this.overCookedBody.active = !0
                }, o
            }(r)).prototype, "rawBody", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = n(v.prototype, "cookedBody", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), h = n(v.prototype, "overCookedBody", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = v)) || y));
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TutorialDirector.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts"], (function(t) {
    "use strict";
    var e, i, n, r, o, s, u, a, c, l, h;
    return {
        setters: [function(t) {
            e = t.cclegacy, i = t._decorator, n = t.Component
        }, function(t) {
            r = t.GameEvent
        }, function(t) {
            o = t.defineProperty, s = t.applyDecoratedDescriptor, u = t.inheritsLoose, a = t.initializerDefineProperty, c = t.assertThisInitialized, l = t.createClass
        }, function(t) {
            h = t.projectEvent
        }],
        execute: function() {
            var p, f, _, y, d, v, T;
            t("CustomerState", void 0), e._RF.push({}, "5fcaamv5ZVOU6eqGgDTk1wb", "TutorialDirector", void 0);
            var g, w = i.ccclass,
                m = i.property;
            ! function(t) {
                t[t.None = 0] = "None", t[t.Entering = 1] = "Entering", t[t.Waiting = 2] = "Waiting", t[t.Leaving = 3] = "Leaving"
            }(g || (g = t("CustomerState", {})));
            t("TutorialDirector", (p = w("TutorialDirector"), f = m({
                visible: !0
            }), p((T = v = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(n)) || this, a(c(e), "_timeBetweenTutorials", d, c(e)), o(c(e), "_sequence", []), e
                }
                u(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    e._instance ? this.node.destroy() : e._instance = this
                }, i.onEnable = function() {
                    h.on(r.ShowTutorial, this.startTutorial, this)
                }, i.onDisable = function() {
                    h.off(r.ShowTutorial, this.startTutorial, this)
                }, i.onDestroy = function() {
                    e._instance == this && (e._instance = null)
                }, i.addTutorialEntry = function(t, e) {
                    void 0 === e && (e = Number.MAX_VALUE);
                    var i = this.positionToInsert(e, this._sequence);
                    i == this._sequence.length ? this._sequence.push(new E(t, this.node, e)) : this._sequence.splice(i, 0, new E(t, this.node, e))
                }, i.positionToInsert = function(t, e) {
                    if (0 == e.length) return 0;
                    var i = e.findIndex((function(e) {
                        return e.priority > t
                    }));
                    return -1 == i ? e.length : i
                }, i.startTutorial = function() {
                    var t = this;
                    this._sequence.length > 0 ? (this.schedule((function() {
                        t.playNextTutorialEntry()
                    }), this._timeBetweenTutorials, this._sequence.length + 1), this.playNextTutorialEntry()) : this.scheduleOnce((function() {
                        h.emit(r.TutorialFinished)
                    }), .1)
                }, i.playNextTutorialEntry = function() {
                    if (this._sequence.length > 0) {
                        var t = this._sequence[0];
                        this._sequence.splice(0, 1), t.show(null)
                    } else h.emit(r.TutorialFinished)
                }, l(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), e
            }(n), o(v, "_instance", null), d = s((y = T).prototype, "_timeBetweenTutorials", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), _ = y)) || _));
            var E = function() {
                function t(t, e, i) {
                    o(this, "_priority", void 0), o(this, "_displayShower", void 0), this._displayShower = t, this._displayShower.load(e), this._priority = i
                }
                return t.prototype.show = function(t) {
                    this._displayShower.show(t)
                }, l(t, [{
                    key: "priority",
                    get: function() {
                        return this._priority
                    }
                }]), t
            }();
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Customer.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./ScoreController.ts", "./ScoreBoard.ts", "./CharacterRotation.ts", "./CharacterMovement.ts", "./CustomerExitPoint.ts", "./CustomerBalcony.ts", "./RandomOrderPicker.ts"], (function(e) {
    "use strict";
    var t, i, n, o, r, a, s, c, l, u, m, d, h, p, g, f, v, C, b, y, P, T, O;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, n = e.animation, o = e.EventHandler, r = e.Vec3, a = e.Component
        }, function(e) {
            s = e.GameEvent, c = e.CustomerEvent
        }, function(e) {
            l = e.defineProperty, u = e.applyDecoratedDescriptor, m = e.inheritsLoose, d = e.initializerDefineProperty, h = e.assertThisInitialized, p = e.createClass
        }, function(e) {
            g = e.projectEvent
        }, function(e) {
            f = e.ScoreController, v = e.ScoreRange
        }, function(e) {
            C = e.ScoreBoard
        }, function(e) {
            b = e.CharacterRotation
        }, function(e) {
            y = e.CharacterMovement
        }, function(e) {
            P = e.CustomerExitPoint
        }, function(e) {
            T = e.CustomerBalcony
        }, function(e) {
            O = e.RandomOrderPicker
        }],
        execute: function() {
            var E, S, _, I, W, w, R, x, k, D, G, z, B, M, F, L, A, N, j, H, V, K, q;
            e("CustomerState", void 0), t._RF.push({}, "60466xNJ4VKiISKQAnH9mup", "Customer", void 0);
            var J, Q = i.ccclass,
                U = i.property,
                X = i.requireComponent;
            ! function(e) {
                e[e.None = 0] = "None", e[e.Entering = 1] = "Entering", e[e.Waiting = 2] = "Waiting", e[e.Leaving = 3] = "Leaving", e[e.GameOver = 4] = "GameOver"
            }(J || (J = e("CustomerState", {})));
            e("Customer", (E = Q("Customer"), S = X(y), _ = X(b), I = U({
                group: {
                    id: "settings",
                    name: "Settings"
                }
            }), W = U({
                group: {
                    id: "settings",
                    name: "Settings"
                }
            }), w = U({
                group: {
                    id: "settings",
                    name: "Settings"
                }
            }), R = U({
                type: n.AnimationController,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), x = U({
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), k = U({
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), D = U({
                type: [o],
                group: {
                    id: "events",
                    name: "Events"
                }
            }), G = U({
                type: [o],
                group: {
                    id: "events",
                    name: "Events"
                }
            }), E(z = S(z = _((q = K = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(n)) || this, d(h(t), "id", M, h(t)), d(h(t), "priceMultiplier", F, h(t)), d(h(t), "waitTimeMultiplier", L, h(t)), d(h(t), "animController", A, h(t)), d(h(t), "sadParameter", N, h(t)), d(h(t), "timeToWaitWhenSwearing", j, h(t)), d(h(t), "onReceivedOrder", H, h(t)), d(h(t), "onOrderFailed", V, h(t)), l(h(t), "state", J.None), l(h(t), "counterPlaceId", -1), l(h(t), "movement", null), l(h(t), "rotation", null), l(h(t), "remainingtimeToWait", 0), l(h(t), "totalTimeToWait", 0), l(h(t), "_order", null), l(h(t), "_orderDisplay", null), l(h(t), "_reactionsController", null), t
                }
                m(t, e), t.getCount = function() {
                    return this.count
                };
                var i = t.prototype;
                return i.onLoad = function() {
                    this.movement = this.getComponent(y), this.rotation = this.getComponent(b)
                }, i.onEnable = function() {
                    t.count += 1, this.setState(J.Entering), g.on(s.EndGame, this.onGameOver, this)
                }, i.update = function(e) {
                    this.state === J.Waiting && (this.remainingtimeToWait -= e, this.remainingtimeToWait <= 0 && this.setState(J.Leaving))
                }, i.onDisable = function() {
                    t.count -= 1, this.setState(J.None), g.off(s.EndGame, this.onGameOver, this)
                }, i.getId = function() {
                    return this.id
                }, i.receiveOrderItem = function(e) {
                    var t = this._order.indexOf(e);
                    if (-1 === t) return !1;
                    var i = this._order.getItem(t);
                    this._order.removeItem(e), this._orderDisplay.removeItem(t);
                    var n = C.instance.addScore(i.getPrice(), this.remainingtimeToWait / this.totalTimeToWait, this.priceMultiplier);
                    return this._reactionsController.showScore(n), 0 == this.order.length && (this.setState(J.Leaving), o.emitEvents(this.onReceivedOrder)), !0
                }, i.onReachedCounter = function() {
                    this.rotation.rotateTo(new r(0, 0, 1)), this.setState(J.Waiting), g.emit(c.CustomerReachedBalcony)
                }, i.onReachedExit = function() {
                    this.node.active = !1
                }, i.setState = function(e) {
                    var t = this;
                    if (e != this.state) {
                        switch (e) {
                            case J.Entering:
                                if (this.counterPlaceId = T.instance.getRandomCustomerAvailablePositionIndex(), this.counterPlaceId > -1) {
                                    var i = T.instance.getCustomerPositionCoordByIndex(this.counterPlaceId);
                                    T.instance.lockCustomerPositionIndex(this.counterPlaceId), this.scheduleOnce((function() {
                                        t.movement.moveTo(i, t.onReachedCounter.bind(t))
                                    }), .1)
                                } else this.node.active = !1;
                                break;
                            case J.Waiting:
                                this.placeOrder(), T.instance.checkIn(this, this.counterPlaceId);
                                break;
                            case J.Leaving:
                                T.instance.checkOut(this.counterPlaceId), T.instance.freeCustomerPositionIndex(this.counterPlaceId);
                                var n = f.instance.getScoreRange(this.remainingtimeToWait / this.totalTimeToWait);
                                this._reactionsController.playReaction(n), this.cancelOrder(), n === v.Failed ? (this.scheduleOnce((function() {
                                    t.movement.moveTo(P.getClosestExitPoint(t.node.worldPosition), t.onReachedExit.bind(t))
                                }), this.timeToWaitWhenSwearing), o.emitEvents(this.onOrderFailed), this.animController.setValue(this.sadParameter, !0), g.emit(c.CustomerFailed)) : this.movement.moveTo(P.getClosestExitPoint(this.node.worldPosition), this.onReachedExit.bind(this));
                                break;
                            case J.GameOver:
                                T.instance.checkOut(this.counterPlaceId), T.instance.freeCustomerPositionIndex(this.counterPlaceId), this._order && this.cancelOrder(), this.movement.moveTo(P.getClosestExitPoint(this.node.worldPosition), this.onReachedExit.bind(this))
                        }
                        this.state = e
                    }
                }, i.placeOrder = function() {
                    this._order = O.instance.getRandomFoodOrder(), this.totalTimeToWait = this.waitTimeMultiplier * this._order.timeToWait, this.remainingtimeToWait = this.totalTimeToWait, this._orderDisplay = T.instance.getBalconyOrderDisplay(this.counterPlaceId), this._orderDisplay.showOrder(this._order, this.totalTimeToWait), this._reactionsController = T.instance.getBalconyReactionsController(this.counterPlaceId)
                }, i.cancelOrder = function() {
                    this._order = null, this._orderDisplay.hide(), this._orderDisplay = null, this._reactionsController = null
                }, i.onGameOver = function() {
                    this.setState(J.GameOver)
                }, p(t, [{
                    key: "order",
                    get: function() {
                        return this._order
                    }
                }]), t
            }(a), l(K, "count", 0), M = u((B = q).prototype, "id", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), F = u(B.prototype, "priceMultiplier", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), L = u(B.prototype, "waitTimeMultiplier", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), A = u(B.prototype, "animController", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = u(B.prototype, "sadParameter", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Sad"
                }
            }), j = u(B.prototype, "timeToWaitWhenSwearing", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), H = u(B.prototype, "onReceivedOrder", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), V = u(B.prototype, "onOrderFailed", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), z = B)) || z) || z) || z));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/EmptyKitchenBalcony.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./FoodItemCarrier.ts", "./InteractionEnums.ts", "./PlayerCharacter.ts", "./KitchenTool.ts"], (function(t) {
    "use strict";
    var e, r, i, n, a, o, s, c, u, h, l;
    return {
        setters: [function(t) {
            e = t.cclegacy, r = t._decorator
        }, function(t) {
            i = t.applyDecoratedDescriptor, n = t.inheritsLoose, a = t.initializerDefineProperty, o = t.assertThisInitialized, s = t.defineProperty
        }, function(t) {
            c = t.FoodItemCarrier
        }, function(t) {
            u = t.InteractionResult
        }, function(t) {
            h = t.PlayerCharacter
        }, function(t) {
            l = t.KitchenTool
        }],
        execute: function() {
            var m, p, y, f, d;
            e._RF.push({}, "63266ExMVdBboRgrV5+KDY1", "EmptyKitchenBalcony", void 0);
            var I = r.ccclass,
                C = r.property;
            t("EmptyKitchenBalcony", (m = I("EmptyKitchenBalcony"), p = C({
                displayOrder: -1
            }), m((d = i((f = function(t) {
                function e() {
                    for (var e, r = arguments.length, i = new Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(i)) || this, a(o(e), "id", d, o(e)), s(o(e), "itemCarrier", null), e
                }
                n(e, t);
                var r = e.prototype;
                return r.start = function() {
                    this.itemCarrier = this.getComponent(c)
                }, r.getId = function() {
                    return this.id
                }, r.startInteraction = function() {
                    var t = h.instance.getComponent(c);
                    return this.itemCarrier.hasItem() && !t.hasItem() || !this.itemCarrier.hasItem() && t.hasItem() ? u.Success : this.itemCarrier.hasItem() || t.hasItem() ? u.HandsOccupied : u.None
                }, r.endInteraction = function() {
                    var t = h.instance.getComponent(c);
                    this.itemCarrier.hasItem() && !t.hasItem() ? t.push(this.itemCarrier.pull()) : !this.itemCarrier.hasItem() && t.hasItem() && this.itemCarrier.push(t.pull())
                }, e
            }(l)).prototype, "id", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "EmptyBalcony"
                }
            }), y = f)) || y));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PizzaEnums.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }],
        execute: function() {
            var t;
            e("PizzaEvent", void 0), n._RF.push({}, "64405o2akVFO5bz+x/eEJtU", "PizzaEnums", void 0),
                function(e) {
                    e.IngredientAdded = "OnIngredientAdded", e.Baked = "OnPizzaBaked", e.Burned = "OnPizzaBurned"
                }(t || (t = e("PizzaEvent", {}))), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/NavigationEnums.ts", ["cc"], (function(n) {
    "use strict";
    var t;
    return {
        setters: [function(n) {
            t = n.cclegacy
        }],
        execute: function() {
            var e;
            n("Navigation", void 0), t._RF.push({}, "64b17IzY51MhLh+U1mnDsSM", "NavigationEnums", void 0),
                function(n) {
                    n.ChangeScreen = "ChangeScreen"
                }(e || (e = n("Navigation", {}))), t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SpeechBalloon.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var n, o, t, i, r, a, l, u, s, c;
    return {
        setters: [function(e) {
            n = e.cclegacy, o = e._decorator, t = e.Sprite, i = e.animation, r = e.EventHandler, a = e.Component
        }, function(e) {
            l = e.applyDecoratedDescriptor, u = e.inheritsLoose, s = e.initializerDefineProperty, c = e.assertThisInitialized
        }],
        execute: function() {
            var p, h, m, f, d, b, y, g, w, v, B, C, S, z, P;
            n._RF.push({}, "64d38kZZFRC7pqDDQW45PwD", "SpeechBalloon", void 0);
            var A = o.ccclass,
                D = o.property;
            e("SpeechBalloon", (p = A("SpeechBalloon"), h = D({
                group: {
                    id: "configuration",
                    name: "Configuration"
                }
            }), m = D({
                group: {
                    id: "configuration",
                    name: "Configuration"
                }
            }), f = D({
                type: t,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), d = D({
                type: i.AnimationController,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), b = D({
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), y = D({
                type: [r],
                group: {
                    id: "events",
                    name: "Events"
                }
            }), p((v = l((w = function(e) {
                function n() {
                    for (var n, o = arguments.length, t = new Array(o), i = 0; i < o; i++) t[i] = arguments[i];
                    return n = e.call.apply(e, [this].concat(t)) || this, s(c(n), "delay", v, c(n)), s(c(n), "displayTime", B, c(n)), s(c(n), "balloonContent", C, c(n)), s(c(n), "animator", S, c(n)), s(c(n), "showBoolParameter", z, c(n)), s(c(n), "onShowEvent", P, c(n)), n
                }
                u(n, e);
                var o = n.prototype;
                return o.setBalloonIcon = function(e) {
                    this.balloonContent.spriteFrame = e
                }, o.showBalloon = function() {
                    this.unscheduleAllCallbacks(), this.scheduleOnce(this.onShow.bind(this), this.delay)
                }, o.hideBalloon = function() {
                    this.unscheduleAllCallbacks(), this.animator.setValue(this.showBoolParameter, !1)
                }, o.onShow = function() {
                    this.animator.setValue(this.showBoolParameter, !0), this.scheduleOnce(this.hideBalloon.bind(this), this.displayTime), r.emitEvents(this.onShowEvent)
                }, n
            }(a)).prototype, "delay", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), B = l(w.prototype, "displayTime", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1.5
                }
            }), C = l(w.prototype, "balloonContent", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = l(w.prototype, "animator", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = l(w.prototype, "showBoolParameter", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), P = l(w.prototype, "onShowEvent", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), g = w)) || g));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/InteractionEnums.ts", ["cc"], (function(e) {
    "use strict";
    var i;
    return {
        setters: [function(e) {
            i = e.cclegacy
        }],
        execute: function() {
            var n;
            e("InteractionResult", void 0), i._RF.push({}, "66febpNl2dMo6ohXoDHkbPq", "InteractionEnums", void 0),
                function(e) {
                    e[e.Success = 0] = "Success", e[e.Failure = 1] = "Failure", e[e.None = 2] = "None", e[e.MissingPizza = 3] = "MissingPizza", e[e.HandsOccupied = 4] = "HandsOccupied", e[e.ItemNotOrdered = 5] = "ItemNotOrdered", e[e.PizzaNotCooked = 6] = "PizzaNotCooked", e[e.PizzaBurned = 7] = "PizzaBurned", e[e.PizzaAlreadyCooked = 8] = "PizzaAlreadyCooked", e[e.PizzaAlreadyHasIngredient = 9] = "PizzaAlreadyHasIngredient"
                }(n || (n = e("InteractionResult", {}))), i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MainMenuNavigationButton.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./NavigationEnums.ts", "./MainMenu.ts"], (function(n) {
    "use strict";
    var t, i, e, a, o, r, u, c, s, p, l;
    return {
        setters: [function(n) {
            t = n.cclegacy, i = n._decorator, e = n.Enum, a = n.Component
        }, function(n) {
            o = n.applyDecoratedDescriptor, r = n.inheritsLoose, u = n.initializerDefineProperty, c = n.assertThisInitialized
        }, function(n) {
            s = n.projectEvent
        }, function(n) {
            p = n.Navigation
        }, function(n) {
            l = n.MainMenuState
        }],
        execute: function() {
            var v, g, f, M, y;
            t._RF.push({}, "67d43gUa/tJLa1sHxF0MVSa", "MainMenuNavigationButton", void 0);
            var h = i.ccclass,
                N = i.property;
            n("MainMenuNavigationButton", (v = h("MainMenuNavigationButton"), g = N({
                type: e(l)
            }), v((y = o((M = function(n) {
                function t() {
                    for (var t, i = arguments.length, e = new Array(i), a = 0; a < i; a++) e[a] = arguments[a];
                    return t = n.call.apply(n, [this].concat(e)) || this, u(c(t), "navigation", y, c(t)), t
                }
                return r(t, n), t.prototype.navigate = function() {
                    s.emit(p.ChangeScreen, this.navigation)
                }, t
            }(a)).prototype, "navigation", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return l.None
                }
            }), f = M)) || f));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PlayerLivesDisplay.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./AudioManager.ts"], (function(e) {
    "use strict";
    var i, t, a, r, n, s, l, o, u, p, c, h, v, y, f;
    return {
        setters: [function(e) {
            i = e.cclegacy, t = e._decorator, a = e.Label, r = e.Prefab, n = e.animation, s = e.Component
        }, function(e) {
            l = e.PlayerLivesEvent, o = e.GameEvent
        }, function(e) {
            u = e.applyDecoratedDescriptor, p = e.inheritsLoose, c = e.initializerDefineProperty, h = e.assertThisInitialized, v = e.defineProperty
        }, function(e) {
            y = e.projectEvent
        }, function(e) {
            f = e.AudioManager
        }],
        execute: function() {
            var d, b, m, _, P, L, g, D, w, A, C, k, S;
            i._RF.push({}, "680e114b+FDxK57UYh8VeDm", "PlayerLivesDisplay", void 0);
            var z = t.ccclass,
                U = t.property;
            e("PlayerLivesDisplay", (d = z("PlayerLivesDisplay"), b = U({
                type: a,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), m = U({
                type: r,
                visible: !0,
                group: {
                    id: "audios",
                    name: "Audios"
                }
            }), _ = U({
                type: n.AnimationController,
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), P = U({
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), L = U({
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), d((w = u((D = function(e) {
                function i() {
                    for (var i, t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                    return i = e.call.apply(e, [this].concat(a)) || this, c(h(i), "_livesLabel", w, h(i)), c(h(i), "_livesOverAudio", A, h(i)), c(h(i), "_animator", C, h(i)), c(h(i), "_showParameter", k, h(i)), c(h(i), "_updateParameter", S, h(i)), v(h(i), "_displaySetupCallback", void 0), v(h(i), "_livesUpdateCallback", void 0), i
                }
                p(i, e);
                var t = i.prototype;
                return t.onEnable = function() {
                    var e = this;
                    this._displaySetupCallback = y.on(l.PlayerLivesSet, (function(i) {
                        e.setupLives(i)
                    }), this)
                }, t.onDisable = function() {
                    y.off(l.PlayerLivesSet, this._displaySetupCallback, this), y.off(o.StartPlaying, this.showDisplay, this), this._livesUpdateCallback && y.off(l.PlayerLivesUpdate, this._livesUpdateCallback, this), y.off(l.PlayerLivesOver, this.hideDisplay, this)
                }, t.setupLives = function(e) {
                    var i = this;
                    this.refreshLabel(e), y.on(o.StartPlaying, this.showDisplay, this), this._livesUpdateCallback = y.on(l.PlayerLivesUpdate, (function(e) {
                        i.updateDisplay(e)
                    }), this), y.on(l.PlayerLivesOver, this.hideDisplay, this)
                }, t.showDisplay = function() {
                    this._animator.setValue(this._showParameter, !0)
                }, t.updateDisplay = function(e) {
                    this.refreshLabel(e), this._animator.setValue(this._updateParameter, !0)
                }, t.hideDisplay = function() {
                    var e;
                    (this.refreshLabel(0), this._animator.setValue(this._showParameter, !1), this._livesOverAudio) && (null === (e = f.instance) || void 0 === e || e.playByKey(this._livesOverAudio))
                }, t.refreshLabel = function(e) {
                    this._livesLabel.string = "x " + e.toFixed()
                }, i
            }(s)).prototype, "_livesLabel", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = u(D.prototype, "_livesOverAudio", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = u(D.prototype, "_animator", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = u(D.prototype, "_showParameter", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), S = u(D.prototype, "_updateParameter", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "update"
                }
            }), g = D)) || g));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FoodItemCarrier.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./AudioManager.ts"], (function(e) {
    "use strict";
    var t, i, n, r, o, a, l, u, s, p, m, c, h;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, n = e.Node, r = e.animation, o = e.EventHandler, a = e.Vec3, l = e.Component
        }, function(e) {
            u = e.applyDecoratedDescriptor, s = e.inheritsLoose, p = e.initializerDefineProperty, m = e.assertThisInitialized, c = e.defineProperty
        }, function(e) {
            h = e.AudioManager
        }],
        execute: function() {
            var f, d, y, b, g, P, v, C, w, A, j, O, z, I, E, k, D, q, F;
            t._RF.push({}, "69305LT/EhGTo7WqtQk7zlN", "FoodItemCarrier", void 0);
            var _ = i.ccclass,
                K = i.property;
            e("FoodItemCarrier", (f = _("FoodItemCarrier"), d = K({
                group: {
                    id: "configurations",
                    name: "Configurations"
                }
            }), y = K({
                group: {
                    id: "configurations",
                    name: "Configurations"
                }
            }), b = K({
                type: n,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), g = K({
                type: r.AnimationController,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), P = K({
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), v = K({
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), C = K({
                type: [o],
                group: {
                    id: "events",
                    name: "Events"
                }
            }), w = K({
                type: [o],
                group: {
                    id: "events",
                    name: "Events"
                }
            }), f((O = u((j = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(n)) || this, p(m(t), "allowParticles", O, m(t)), p(m(t), "playAudios", z, m(t)), p(m(t), "itemParent", I, m(t)), p(m(t), "animController", E, m(t)), p(m(t), "equippedParameter", k, m(t)), p(m(t), "trayParameter", D, m(t)), p(m(t), "onPickUp", q, m(t)), p(m(t), "onDrop", F, m(t)), c(m(t), "itemObject", null), t
                }
                s(t, e);
                var i = t.prototype;
                return i.hasItem = function() {
                    return null != this.itemObject
                }, i.peek = function() {
                    return this.itemObject
                }, i.push = function(e) {
                    if (this.hasItem()) return !1;
                    if (this.itemObject = e, null != this.itemParent ? this.itemObject.node.setParent(this.itemParent, !1) : this.itemObject.node.setParent(this.node, !1), this.itemObject.node.position = a.ZERO, this.itemObject.allowParticles = this.allowParticles, null != this.animController && (this.trayParameter.length > 0 && this.animController.setValue(this.trayParameter, e.getItem().useTray()), this.animController.setValue(this.equippedParameter, !0)), this.playAudios) {
                        var t, i = this.itemObject.getItem().getPickupAudioKey();
                        if (i) null === (t = h.instance) || void 0 === t || t.playByKey(i)
                    }
                    return o.emitEvents(this.onPickUp), !0
                }, i.pull = function() {
                    if (!this.hasItem()) return null;
                    var e = this.itemObject;
                    if (this.itemObject = null, null != this.animController && this.animController.setValue(this.equippedParameter, !1), this.playAudios) {
                        var t, i = e.getItem().getDropAudioKey();
                        if (i) null === (t = h.instance) || void 0 === t || t.playByKey(i)
                    }
                    return o.emitEvents(this.onDrop), e
                }, t
            }(l)).prototype, "allowParticles", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), z = u(j.prototype, "playAudios", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), I = u(j.prototype, "itemParent", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = u(j.prototype, "animController", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = u(j.prototype, "equippedParameter", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Equipped"
                }
            }), D = u(j.prototype, "trayParameter", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), q = u(j.prototype, "onPickUp", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), F = u(j.prototype, "onDrop", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), A = j)) || A));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LoadSceneButton.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./SceneLoader.ts"], (function(e) {
    "use strict";
    var t, n, r, o, i, a, c, s;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, r = e.Component
        }, function(e) {
            o = e.applyDecoratedDescriptor, i = e.inheritsLoose, a = e.initializerDefineProperty, c = e.assertThisInitialized
        }, function(e) {
            s = e.SceneLoader
        }],
        execute: function() {
            var u, l, d, p;
            t._RF.push({}, "6a262YCY7dFsqhgW1wATd0E", "LoadSceneButton", void 0);
            var f = n.ccclass,
                h = n.property;
            e("LoadSceneButton", f("LoadSceneButton")((d = o((l = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(r)) || this, a(c(t), "sceneName", d, c(t)), a(c(t), "delay", p, c(t)), t
                }
                return i(t, e), t.prototype.loadScene = function() {
                    var e = this;
                    0 === this.delay ? s.load(this.sceneName) : this.scheduleOnce((function() {
                        s.load(e.sceneName)
                    }), this.delay)
                }, t
            }(r)).prototype, "sceneName", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), p = o(l.prototype, "delay", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), u = l)) || u);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PlayerCharacter.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./FoodItemCarrier.ts", "./DataLoadingEnums.ts", "./PizzaChef.ts", "./Restaurant.ts", "./ScoreBoard.ts", "./CharacterRotation.ts", "./CharacterMovement.ts", "./PlayerCharacterFeedback.ts"], (function(e) {
    "use strict";
    var t, n, o, i, r, a, s, c, l, u, h, m, f, p, d, _, v, y, C, b, k;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, o = e.animation, i = e.Vec3, r = e.Component
        }, function(e) {
            a = e.GameEvent
        }, function(e) {
            s = e.defineProperty, c = e.applyDecoratedDescriptor, l = e.inheritsLoose, u = e.initializerDefineProperty, h = e.assertThisInitialized, m = e.createClass
        }, function(e) {
            f = e.projectEvent
        }, function(e) {
            p = e.FoodItemCarrier
        }, function(e) {
            d = e.LevelLoadingEvent
        }, function(e) {
            _ = e.PizzaChef
        }, function(e) {
            v = e.Restaurant
        }, function(e) {
            y = e.ScoreBoard
        }, function(e) {
            C = e.CharacterRotation
        }, function(e) {
            b = e.CharacterMovement
        }, function(e) {
            k = e.PlayerCharacterFeedback
        }],
        execute: function() {
            var P, g, F, z, S, E, O, A, B, R, G, I, T, w;
            e("PlayerEvent", void 0), t._RF.push({}, "6b32b+kpS9I4otUXSpeR9JG", "PlayerCharacter", void 0);
            var L, M = n.ccclass,
                D = n.property,
                j = n.requireComponent;
            ! function(e) {
                e.PlayerMoved = "OnPlayerMoved"
            }(L || (L = e("PlayerEvent", {})));
            e("PlayerCharacter", (P = M("PlayerCharacter"), g = j(b), F = j(C), z = j(_), S = D({
                type: k,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                formerlySerializedAs: "interactionFeedbacks"
            }), E = D({
                type: o.AnimationController,
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                },
                formerlySerializedAs: "animController"
            }), O = D({
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                },
                formerlySerializedAs: "victoryParameter"
            }), P(A = g(A = F(A = z((w = T = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(o)) || this, u(h(t), "_interactionFeedbacks", R, h(t)), u(h(t), "_animController", G, h(t)), u(h(t), "_victoryParameter", I, h(t)), s(h(t), "_movement", null), s(h(t), "_rotation", null), s(h(t), "_chef", null), s(h(t), "_locked", !1), s(h(t), "_moveOrderBuffer", null), t
                }
                l(t, e);
                var n = t.prototype;
                return n.onLoad = function() {
                    null == t._instance ? (t._instance = this, this._movement = this.getComponent(b), this._rotation = this.getComponent(C), this._chef = this.getComponent(_), f.once(d.RestaurantInstantiated, this.setPlayerSpeed, this), f.once(a.EndGame, this.onGameOver, this)) : this.node.destroy()
                }, n.onDestroy = function() {
                    t._instance == this && (t._instance = null), f.off(d.RestaurantInstantiated, this.setPlayerSpeed, this), f.off(a.EndGame, this.onGameOver, this)
                }, n.moveTo = function(e, t) {
                    this._locked ? this._moveOrderBuffer = new V(e, t) : (this._interactionFeedbacks.abortFeedback(), this._movement.moveTo(e, t), f.emit(L.PlayerMoved))
                }, n.rotateTo = function(e) {
                    this._rotation.rotateTo(e)
                }, n.lookAt = function(e) {
                    this._rotation.lookAt(e)
                }, n.stop = function() {
                    this._movement.stop()
                }, n.getChef = function() {
                    return this._chef
                }, n.lock = function(e) {
                    void 0 === e && (e = !0), this._locked != e && (this._locked = e, this._locked || null != this._moveOrderBuffer && (this.moveTo(this._moveOrderBuffer.position, this._moveOrderBuffer.onComplete), this._moveOrderBuffer = null))
                }, n.unlock = function() {
                    this.lock(!1)
                }, n.playInteractionFeedback = function(e) {
                    this._interactionFeedbacks.playInteractionFeedback(e)
                }, n.onGameOver = function() {
                    this.stop(), this.lock();
                    var e = this.node.getComponent(p).pull();
                    null != e && e.node.destroy(), this.rotateTo(new i(0, 0, 1)), y.instance.victory && this._animController.setValue(this._victoryParameter, !0)
                }, n.setPlayerSpeed = function() {
                    this._movement.speed = v.instance.playerSpeed
                }, m(t, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), t
            }(r), s(T, "_instance", null), R = c((B = w).prototype, "_interactionFeedbacks", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = c(B.prototype, "_animController", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = c(B.prototype, "_victoryParameter", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Victory"
                }
            }), A = B)) || A) || A) || A) || A));
            var V = function() {
                function e(e, t) {
                    s(this, "_position", null), s(this, "_onComplete", null), this._position = e, this._onComplete = t
                }
                return m(e, [{
                    key: "position",
                    get: function() {
                        return this._position
                    }
                }, {
                    key: "onComplete",
                    get: function() {
                        return this._onComplete
                    }
                }]), e
            }();
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MainCamera.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(n) {
    "use strict";
    var e, t, a, r, i, c, s, o;
    return {
        setters: [function(n) {
            e = n.cclegacy, t = n._decorator, a = n.Camera, r = n.Component
        }, function(n) {
            i = n.defineProperty, c = n.inheritsLoose, s = n.assertThisInitialized, o = n.createClass
        }],
        execute: function() {
            var u, l, h;
            e._RF.push({}, "73302icFHZA1Ilv6HcU+JSE", "MainCamera", void 0);
            var _ = t.ccclass;
            n("MainCamera", _("MainCamera")((h = l = function(n) {
                function e() {
                    for (var e, t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                    return e = n.call.apply(n, [this].concat(a)) || this, i(s(e), "_camera", null), e
                }
                c(e, n);
                var t = e.prototype;
                return t.onLoad = function() {
                    null == e._instance ? (e._instance = this, this._camera = this.node.getComponent(a)) : this.node.destroy()
                }, t.onDestroy = function() {
                    e._instance == this && (e._instance = null)
                }, o(e, [{
                    key: "camera",
                    get: function() {
                        return this._camera
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), e
            }(r), i(l, "_instance", null), u = h)) || u);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomerReaction.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var e, i, r, n, o, a, l, c, s, u;
    return {
        setters: [function(t) {
            e = t.cclegacy, i = t._decorator, r = t.animation, n = t.ParticleSystem, o = t.EventHandler, a = t.Component
        }, function(t) {
            l = t.applyDecoratedDescriptor, c = t.inheritsLoose, s = t.initializerDefineProperty, u = t.assertThisInitialized
        }],
        execute: function() {
            var p, m, f, y, g, h, b, w, d, v, R, z, C;
            e._RF.push({}, "74f35j4URRH2LZSdFG+nV+c", "CustomerReaction", void 0);
            var E = i.ccclass,
                S = i.property;
            t("CustomerReaction", (p = E("CustomerReaction"), m = S({
                type: r.AnimationController,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), f = S({
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), y = S({
                type: n,
                group: {
                    id: "particles",
                    name: "Particles"
                }
            }), g = S({
                type: n,
                group: {
                    id: "particles",
                    name: "Particles"
                }
            }), h = S({
                type: [o],
                group: {
                    id: "events",
                    name: "Events"
                }
            }), p((d = l((w = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(r)) || this, s(u(e), "animator", d, u(e)), s(u(e), "showTrigger", v, u(e)), s(u(e), "startExplosion", R, u(e)), s(u(e), "circle", z, u(e)), s(u(e), "onShow", C, u(e)), e
                }
                c(e, t);
                var i = e.prototype;
                return i.show = function() {
                    this.animator.setValue(this.showTrigger, !0), o.emitEvents(this.onShow)
                }, i.playStartExplosion = function() {
                    this.startExplosion.play()
                }, i.playCircleParticles = function() {
                    this.circle.play()
                }, e
            }(a)).prototype, "animator", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = l(w.prototype, "showTrigger", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), R = l(w.prototype, "startExplosion", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = l(w.prototype, "circle", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = l(w.prototype, "onShow", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), b = w)) || b));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/BundleLoader.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts"], (function(e) {
    "use strict";
    var n, t, o, u, i, r, a, d, l, s, c;
    return {
        setters: [function(e) {
            n = e.cclegacy, t = e.game, o = e.Game, u = e.assetManager
        }, function(e) {
            i = e.createClass, r = e.defineProperty
        }, function(e) {
            a = e.logger, d = e.LogCategory, l = e.LogType
        }, function(e) {
            s = e.projectEvent
        }, function(e) {
            c = e.DataLoadingEvent
        }],
        execute: function() {
            n._RF.push({}, "770891hSo9Km6j65TdHaU5X", "BundleLoader", void 0);
            var g = e("BundleLoader", function() {
                function e(e, n) {
                    var i = this;
                    r(this, "_bundle", null), r(this, "_onDoneEventType", void 0), t.on(o.EVENT_GAME_INITED, (function() {
                        i._onDoneEventType = n, u.loadBundle(e, i.onLoadComplete.bind(i))
                    }), this)
                }
                var n = e.prototype;
                return n.isDataLoaded = function() {
                    return null != this._bundle
                }, n.onLoadComplete = function(e, n) {
                    null != e && a.log(e.message, d.Generic, l.Error), this._bundle = n, a.log("Finished loading " + this._bundle.name + " bundle"), s.emit(this._onDoneEventType)
                }, i(e, [{
                    key: "bundle",
                    get: function() {
                        return this._bundle
                    }
                }]), e
            }());
            e("contentLoader", new g("Content", c.ContentBundleLoaded));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ReadyDisplay.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./UITrackWorldNode.ts"], (function(e) {
    "use strict";
    var r, t, i, n, o, a, l, s, c, u;
    return {
        setters: [function(e) {
            r = e.cclegacy, t = e._decorator, i = e.animation, n = e.CCString, o = e.Component
        }, function(e) {
            a = e.applyDecoratedDescriptor, l = e.inheritsLoose, s = e.initializerDefineProperty, c = e.assertThisInitialized
        }, function(e) {
            u = e.UITrackWorldNode
        }],
        execute: function() {
            var p, y, h, d, f, m, w, v;
            r._RF.push({}, "775dcNSp5REcZs62EDEq4AM", "ReadyDisplay", void 0);
            var C = t.ccclass,
                D = t.property,
                b = t.requireComponent;
            e("ReadyDisplay", (p = C("ReadyDisplay"), y = b(u), h = D(i.AnimationController), d = D(n), p(f = y((w = a((m = function(e) {
                function r() {
                    for (var r, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                    return r = e.call.apply(e, [this].concat(i)) || this, s(c(r), "animController", w, c(r)), s(c(r), "showParameter", v, c(r)), r
                }
                l(r, e);
                var t = r.prototype;
                return t.show = function(e) {
                    void 0 === e && (e = !0), this.animController.setValue(this.showParameter, e)
                }, t.hide = function() {
                    this.show(!1)
                }, r
            }(o)).prototype, "animController", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = a(m.prototype, "showParameter", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Show"
                }
            }), f = m)) || f) || f));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FoodOrdersList.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./FoodOrder.ts"], (function(e) {
    "use strict";
    var t, r, o, n, i, s, d, g, l;
    return {
        setters: [function(e) {
            t = e.cclegacy, r = e.randomRange, o = e.randomRangeInt
        }, function(e) {
            n = e.createClass, i = e.defineProperty
        }, function(e) {
            s = e.logger, d = e.LogCategory, g = e.LogType
        }, function(e) {
            l = e.FoodOrder
        }],
        execute: function() {
            t._RF.push({}, "787d0o29R9FJK697cTvVly/", "FoodOrdersList", void 0);
            e("FoodOrdersList", function() {
                function e(e) {
                    i(this, "_orders", []), i(this, "_totalSelectionWeight", 0);
                    for (var t = e.orders.length, r = 0; r < t; r++) this._orders.push(new l(e.orders[r])), this._totalSelectionWeight += this._orders[r].selectionWeight
                }
                var t = e.prototype;
                return t.getFoodOrder = function(e) {
                    return this._orders[e]
                }, t.getRandomFoodOrder = function() {
                    for (var e = r(0, this.totalSelectionWeight), t = 0; t < this.length; t++) {
                        var n = this._orders[t].selectionWeight;
                        if (e <= n) return this._orders[t];
                        e -= n
                    }
                    return s.log("There was an error when selecting a random order using selection weights! Selecting one randomly.", d.Gameplay, g.Error), this._orders[o(0, this._orders.length)]
                }, n(e, [{
                    key: "length",
                    get: function() {
                        return this._orders.length
                    }
                }, {
                    key: "totalSelectionWeight",
                    get: function() {
                        return this._totalSelectionWeight
                    }
                }]), e
            }());
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/IContentLoader.ts", ["cc"], (function() {
    "use strict";
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            t._RF.push({}, "7ace88PfydEKZSgD3tjNQ5J", "IContentLoader", void 0), t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CharacterMovement.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./TweenEnums.ts", "./CharacterRotation.ts"], (function(e) {
    "use strict";
    var t, n, i, r, o, a, s, l, u, c, p, h, _, m, f, v;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.animation, r = e.Enum, o = e.EventHandler, a = e.Vec3, s = e.tween, l = e.Component
        }, function(e) {
            u = e.applyDecoratedDescriptor, c = e.inheritsLoose, p = e.initializerDefineProperty, h = e.assertThisInitialized, _ = e.defineProperty, m = e.createClass
        }, function(e) {
            f = e.TweenEasing
        }, function(e) {
            v = e.CharacterRotation
        }],
        execute: function() {
            var d, b, y, w, C, g, z, S, P, A, M, E, O, R, T;
            t._RF.push({}, "7c5174abvFJrq9Qg/8o6Ar1", "CharacterMovement", void 0);
            var D = n.ccclass,
                F = n.property;
            e("CharacterMovement", (d = D("CharacterMovement"), b = F({
                type: i.AnimationController,
                visible: !0,
                formerlySerializedAs: "animController"
            }), y = F({
                visible: !0,
                formerlySerializedAs: "runParameter"
            }), w = F({
                visible: !0,
                formerlySerializedAs: "speed"
            }), C = F({
                type: r(f),
                visible: !0,
                formerlySerializedAs: "easing"
            }), g = F({
                type: [o],
                visible: !0,
                formerlySerializedAs: "onMove"
            }), z = F({
                type: [o],
                visible: !0,
                formerlySerializedAs: "onStop"
            }), d((A = u((P = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(i)) || this, p(h(t), "_animController", A, h(t)), p(h(t), "_runParameter", M, h(t)), p(h(t), "_speed", E, h(t)), p(h(t), "_easing", O, h(t)), p(h(t), "_onMove", R, h(t)), p(h(t), "_onStop", T, h(t)), _(h(t), "_tweenCache", void 0), _(h(t), "_tweenOptions", {}), _(h(t), "_rotation", null), t
                }
                c(t, e);
                var n = t.prototype;
                return n.onLoad = function() {
                    this._rotation = this.getComponent(v)
                }, n.moveTo = function(e, t) {
                    var n = this;
                    this.stop();
                    var i = a.distance(this.node.getWorldPosition(), e);
                    if (this._tweenOptions = {}, this._tweenOptions.easing = f[this._easing], this._tweenOptions.onComplete = function() {
                            n._animController.setValue(n._runParameter, !1), null != t && t(), o.emitEvents(n._onStop)
                        }.bind(this), this._tweenCache = s(this.node).to(i / this.speed, {
                            worldPosition: e
                        }, this._tweenOptions).repeat(1), this._tweenCache.start(), null != this._rotation) {
                        var r = new a;
                        a.subtract(r, e, this.node.getWorldPosition()), this._rotation.rotateTo(r.normalize())
                    }
                    this._animController.setValue(this._runParameter, !0), o.emitEvents(this._onMove)
                }, n.stop = function() {
                    null != this._tweenCache && (this._tweenCache.stop(), this._tweenCache = null, o.emitEvents(this._onStop))
                }, m(t, [{
                    key: "speed",
                    get: function() {
                        return this._speed
                    },
                    set: function(e) {
                        this._speed = e
                    }
                }]), t
            }(l)).prototype, "_animController", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = u(P.prototype, "_runParameter", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Run"
                }
            }), E = u(P.prototype, "_speed", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), O = u(P.prototype, "_easing", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return f.linear
                }
            }), R = u(P.prototype, "_onMove", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), T = u(P.prototype, "_onStop", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), S = P)) || S));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SceneLoader.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./SceneLoaderEnums.ts"], (function(e) {
    "use strict";
    var n, t, o, i, r, a, c, d, s, l, u, h, f, p, S, g;
    return {
        setters: [function(e) {
            n = e.cclegacy, t = e._decorator, o = e.animation, i = e.game, r = e.director, a = e.Component
        }, function(e) {
            c = e.defineProperty, d = e.applyDecoratedDescriptor, s = e.inheritsLoose, l = e.initializerDefineProperty, u = e.assertThisInitialized
        }, function(e) {
            h = e.logger, f = e.LogCategory, p = e.LogType
        }, function(e) {
            S = e.projectEvent
        }, function(e) {
            g = e.SceneLoaderEvent
        }],
        execute: function() {
            var v, L, C, m, y, b, _, w, P;
            n._RF.push({}, "7cd0bkZZD9NY5H0lPcLINb4", "SceneLoader", void 0);
            var k = t.ccclass,
                A = t.property;
            e("SceneLoader", (v = k("SceneLoader"), L = A({
                type: o.AnimationController,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), C = A({
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), v((P = w = function(e) {
                function n() {
                    for (var n, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                    return n = e.call.apply(e, [this].concat(o)) || this, l(u(n), "animationController", b, u(n)), l(u(n), "coverScreenBoolean", _, u(n)), c(u(n), "loadedScene", void 0), c(u(n), "content", []), c(u(n), "addContentLoaderCallback", void 0), c(u(n), "waitingContent", !1), n
                }
                s(n, e), n.load = function(e) {
                    this._instance ? this._instance.loadScene(e) : h.log("Missing Scene Loader. Can't load scene " + e, f.Generic, p.Error)
                };
                var t = n.prototype;
                return t.onLoad = function() {
                    var e = this;
                    n._instance ? this.node.destroy() : (n._instance = this, i.addPersistRootNode(this.node), this.addContentLoaderCallback = S.on(g.NewContentLoaderAdded, (function(n) {
                        e.addContentLoader(n)
                    })))
                }, t.update = function(e) {
                    this.waitingContent && this.allContentLoaded && (this.waitingContent = !1, this.uncoverScreen())
                }, t.onDestroy = function() {
                    n._instance == this && (n._instance = null, S.off(this.addContentLoaderCallback))
                }, t.onScreenCovered = function() {
                    r.loadScene(this.loadedScene, this.onSceneLoaded.bind(this))
                }, t.onScreenUncovered = function() {
                    this.node.active = !1, S.emit(g.SceneUncovered)
                }, t.loadScene = function(e) {
                    this.loadedScene = e, this.node.active = !0, this.node.setSiblingIndex(-1), this.content = [], this.waitingContent = !1, this.animationController.setValue(this.coverScreenBoolean, !0)
                }, t.onSceneLoaded = function() {
                    S.emit(g.SceneLoaded), this.content.length > 0 ? this.waitingContent = !0 : this.uncoverScreen()
                }, t.uncoverScreen = function() {
                    this.animationController.setValue(this.coverScreenBoolean, !1)
                }, t.addContentLoader = function(e) {
                    this.content.push(e)
                }, t.allContentLoaded = function() {
                    for (var e = 0; e < this.content.length; e++)
                        if (!this.content[e].doneLoading()) return !1;
                    return !0
                }, n
            }(a), c(w, "_instance", null), b = d((y = P).prototype, "animationController", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = d(y.prototype, "coverScreenBoolean", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), m = y)) || m));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelData.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./KitchenBalconyData.ts", "./LevelFoodItems.ts", "./LevelTimeline.ts"], (function(t) {
    "use strict";
    var e, i, n, s, o, r, u;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }, function(t) {
            i = t.createClass, n = t.defineProperty
        }, function(t) {
            s = t.logger
        }, function(t) {
            o = t.KitchenBalconyData
        }, function(t) {
            r = t.LevelFoodItems
        }, function(t) {
            u = t.LevelTimeline
        }],
        execute: function() {
            e._RF.push({}, "7cfe938D8JNRY9x+M2Hrhbw", "LevelData", void 0);
            t("LevelData", function() {
                function t(t, e) {
                    n(this, "_name", void 0), n(this, "icon", void 0), n(this, "restaurant", void 0), n(this, "time", -1), n(this, "stars", []), n(this, "kitchen", null), n(this, "_timeline", null), n(this, "_foods", null), s.log("Loading data for level " + t), this._name = t, this.icon = e.icon, this.restaurant = e.restaurant, e.time && (this.time = e.time), this.stars = e.stars, this.kitchen = new o(e.kitchen), this._timeline = new u(e.timeline), this._foods = null, s.log("Data for level " + this._name + " loaded successfully.")
                }
                var e = t.prototype;
                return e.getName = function() {
                    return this._name
                }, e.getIconName = function() {
                    return this.icon
                }, e.getRestaurantId = function() {
                    return this.restaurant
                }, e.isEndless = function() {
                    return -1 == this.time
                }, e.getTime = function() {
                    return this.time
                }, e.getStarScore = function(t) {
                    return this.stars[t]
                }, e.getKitchenData = function() {
                    return this.kitchen
                }, e.getFoods = function() {
                    return null == this._foods && (this._foods = new r(this._timeline)), this._foods
                }, i(t, [{
                    key: "timeline",
                    get: function() {
                        return this._timeline
                    }
                }]), t
            }());
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelTimeline.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./LevelTimelineEntry.ts"], (function(e) {
    "use strict";
    var t, n, i, r;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            n = e.createClass, i = e.defineProperty
        }, function(e) {
            r = e.LevelTimelineEntry
        }],
        execute: function() {
            t._RF.push({}, "807bbvgD1ROAbHZNLmbamMk", "LevelTimeline", void 0);
            e("LevelTimeline", function() {
                function e(e) {
                    i(this, "_entries", []);
                    for (var t = e.entries.length, n = 0; n < t; n++) this._entries.push(new r(e.entries[n]))
                }
                return e.prototype.getEntry = function(e) {
                    return this._entries[e]
                }, n(e, [{
                    key: "length",
                    get: function() {
                        return this._entries.length
                    }
                }]), e
            }());
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Pizza.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./LocalEventHandler.ts", "./FoodItem.ts", "./Ingredient.ts", "./PizzaEnums.ts", "./PizzaRecipe.ts"], (function(e) {
    "use strict";
    var t, i, n, r, a, o, c, s, u, p, l, d, f, h, g;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, n = e.Prefab
        }, function(e) {
            r = e.applyDecoratedDescriptor, a = e.inheritsLoose, o = e.initializerDefineProperty, c = e.assertThisInitialized, s = e.defineProperty, u = e.createClass
        }, function(e) {
            p = e.LocalEventHandler
        }, function(e) {
            l = e.FoodItem
        }, function(e) {
            d = e.Ingredient
        }, function(e) {
            f = e.PizzaEvent
        }, function(e) {
            h = e.PizzaState, g = e.PizzaRecipe
        }],
        execute: function() {
            var z, v, m, y, P, I;
            t._RF.push({}, "829a65e0KZATK6IQM+4hDKX", "Pizza", void 0);
            var _ = i.ccclass,
                b = i.property,
                k = i.requireComponent;
            e("Pizza", (z = _("Pizza"), v = k(p), m = b({
                type: n
            }), z(y = v((I = r((P = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(n)) || this, o(c(t), "ingredients", I, c(t)), s(c(t), "_recipe", null), t
                }
                a(t, e);
                var i = t.prototype;
                return i.equals = function(i) {
                    return i instanceof t ? this.recipe.match(i.recipe) > .9 : e.prototype.equals.call(this, i)
                }, i.isReadyForDelivery = function() {
                    return this.getState() === h.Baked
                }, i.getState = function() {
                    return null != this.recipe ? this.recipe.getState() : h.Raw
                }, i.addIngredient = function(e) {
                    var t = e.data.getComponent(d);
                    this.recipe.addIngredient(t), this.emit(f.IngredientAdded, t)
                }, i.bakePizza = function() {
                    this.recipe.bake(), this.emit(f.Baked)
                }, i.burnPizza = function() {
                    this.recipe.burn(), this.emit(f.Burned)
                }, i.emit = function(e, t) {
                    var i = this.getComponent(p);
                    null != i && (t ? i.eventTarget.emit(e, t) : i.eventTarget.emit(e))
                }, u(t, [{
                    key: "recipe",
                    get: function() {
                        if (null == this._recipe) {
                            this._recipe = new g;
                            for (var e = 0; e < this.ingredients.length; e++) {
                                var t = this.ingredients[e].data.getComponent(d);
                                this._recipe.addIngredient(t)
                            }
                        }
                        return this._recipe
                    }
                }]), t
            }(l)).prototype, "ingredients", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), y = P)) || y) || y));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FoodItemObject.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var e, n, r, o, i, c, s, a;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t._decorator, r = t.instantiate, o = t.Component
        }, function(t) {
            i = t.inheritsLoose, c = t.defineProperty, s = t.assertThisInitialized, a = t.createClass
        }],
        execute: function() {
            var l;
            e._RF.push({}, "851f5cRgGNB8JNrhgZAi7x5", "FoodItemObject", void 0);
            var u = n.ccclass;
            t("FoodItemObject", u("FoodItemObject")(l = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(r)) || this, c(s(e), "_item", null), c(s(e), "_allowParticles", !1), e
                }
                i(e, t), e.InstantiateNew = function(t) {
                    var n = r(t.getPrefab()).getComponent(e);
                    return n.setItem(t), n
                };
                var n = e.prototype;
                return n.getItem = function() {
                    return this._item
                }, n.setItem = function(t) {
                    this._item = t
                }, a(e, [{
                    key: "allowParticles",
                    get: function() {
                        return this._allowParticles
                    },
                    set: function(t) {
                        this._allowParticles = t
                    }
                }]), e
            }(o)) || l);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PanelEnums.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }],
        execute: function() {
            var t, s;
            e({
                    EventPanel: void 0,
                    PanelId: void 0
                }), n._RF.push({}, "8b3edgXZadK4Lxacf0H30hG", "PanelEnums", void 0),
                function(e) {
                    e[e.None = 0] = "None", e[e.DebugMenu = 1] = "DebugMenu"
                }(t || (t = e("PanelId", {}))),
                function(e) {
                    e.OpenStart = "panel-open-start", e.OpenFinish = "panel-open-finish", e.CloseStart = "panel-close-start", e.CloseFinish = "panel-close-finish"
                }(s || (s = e("EventPanel", {}))), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AudioEnums.ts", ["cc"], (function(e) {
    "use strict";
    var o;
    return {
        setters: [function(e) {
            o = e.cclegacy
        }],
        execute: function() {
            var i, t, n;
            e({
                    AudioEvent: void 0,
                    LoopMode: void 0,
                    PickSubitemMode: void 0
                }), o._RF.push({}, "8fdc8EKGHVNmrekSIJ8Q6Ho", "AudioEnums", void 0),
                function(e) {
                    e[e.Do_Not_Loop = 0] = "Do_Not_Loop", e[e.Loop_Subitem = 1] = "Loop_Subitem", e[e.Loop_Sequence = 2] = "Loop_Sequence", e[e.Play_Sequence_Loop_Last = 3] = "Play_Sequence_Loop_Last"
                }(i || (i = e("LoopMode", {}))),
                function(e) {
                    e[e.Disabled = 0] = "Disabled", e[e.Random = 1] = "Random", e[e.Random_Not_Same_Twice = 2] = "Random_Not_Same_Twice", e[e.Sequence = 3] = "Sequence"
                }(t || (t = e("PickSubitemMode", {}))),
                function(e) {
                    e[e.AudioManagerInitialized = 0] = "AudioManagerInitialized", e[e.SetMuted = 1] = "SetMuted"
                }(n || (n = e("AudioEvent", {}))), o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PizzaRecipe.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var e, n, i;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t._decorator
        }, function(t) {
            i = t.defineProperty
        }],
        execute: function() {
            var r;
            t("PizzaState", void 0), e._RF.push({}, "8feea6ffElMMIVH2EAjHwiN", "PizzaRecipe", void 0);
            var a, s = n.ccclass;
            ! function(t) {
                t[t.Raw = 0] = "Raw", t[t.Baked = 1] = "Baked", t[t.Burned = 2] = "Burned"
            }(a || (a = t("PizzaState", {})));
            t("PizzaRecipe", s("PizzaRecipe")(r = function() {
                function t() {
                    i(this, "pizzaIngredients", []), i(this, "state", a.Raw)
                }
                var e = t.prototype;
                return e.getLength = function() {
                    return this.pizzaIngredients.length
                }, e.getState = function() {
                    return this.state
                }, e.getIngredient = function(t) {
                    return this.pizzaIngredients[t]
                }, e.addIngredient = function(t) {
                    return this.state === a.Raw && !this.hasIngredient(t) && (this.pizzaIngredients.push(t), !0)
                }, e.hasIngredient = function(t) {
                    for (var e = 0; e < this.pizzaIngredients.length; e++)
                        if (this.pizzaIngredients[e] === t) return !0;
                    return !1
                }, e.bake = function() {
                    return this.state === a.Raw && (this.state = a.Baked, !0)
                }, e.burn = function() {
                    return this.state === a.Baked && (this.state = a.Burned, !0)
                }, e.match = function(t) {
                    for (var e = 1 / Math.max(this.pizzaIngredients.length, t.pizzaIngredients.length), n = 0, i = 0; i < this.pizzaIngredients.length; i++)
                        for (var r = 0; r < t.pizzaIngredients.length; r++)
                            if (this.pizzaIngredients[i] == t.pizzaIngredients[r]) {
                                n += e;
                                break
                            }
                    return n
                }, t
            }()) || r);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UIClickSFX.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./AudioManager.ts"], (function(e) {
    "use strict";
    var t, i, n, r, o, c, a, l, s, u;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, n = e.Button, r = e.Prefab, o = e.Component
        }, function(e) {
            c = e.applyDecoratedDescriptor, a = e.inheritsLoose, l = e.initializerDefineProperty, s = e.assertThisInitialized
        }, function(e) {
            u = e.AudioManager
        }],
        execute: function() {
            var p, y, f, h, k, d;
            t._RF.push({}, "9173aMkALVIoLKQ9YSJ5EVS", "UIClickSFX", void 0);
            var v = i.ccclass,
                C = i.property,
                g = i.requireComponent;
            e("UIClickSFX", (p = v("UIClickSFX"), y = g(n), f = C(r), p(h = y((d = c((k = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(n)) || this, l(s(t), "key", d, s(t)), t
                }
                a(t, e);
                var i = t.prototype;
                return i.onLoad = function() {
                    this.node.on(n.EventType.CLICK, this.onclick, this)
                }, i.onclick = function() {
                    var e;
                    this.key && (null === (e = u.instance) || void 0 === e || e.playByKey(this.key))
                }, t
            }(o)).prototype, "key", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), h = k)) || h) || h));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/RestaurantList.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./Restaurant.ts", "./BundleLoader.ts"], (function(t) {
    "use strict";
    var n, e, a, r, o, s, u, i, d, l, c, f;
    return {
        setters: [function(t) {
            n = t.cclegacy, e = t.Prefab, a = t.game, r = t.Game
        }, function(t) {
            o = t.defineProperty
        }, function(t) {
            s = t.logger, u = t.LogCategory, i = t.LogType
        }, function(t) {
            d = t.projectEvent
        }, function(t) {
            l = t.DataLoadingEvent
        }, function(t) {
            c = t.Restaurant
        }, function(t) {
            f = t.contentLoader
        }],
        execute: function() {
            n._RF.push({}, "91c18Ftc8hMPrfZPkU6hmNr", "RestaurantList", void 0);
            var g = t("RestaurantList", function() {
                function t() {
                    var t = this;
                    o(this, "restaurants", []), a.on(r.EVENT_GAME_INITED, (function() {
                        f.isDataLoaded() ? t.loadDataFromBundle() : d.once(l.ContentBundleLoaded, t.loadDataFromBundle, t)
                    }), this)
                }
                var n = t.prototype;
                return n.getRestaurantById = function(t) {
                    var n = this.getRestaurantPrefabById(t);
                    if (null != n) {
                        var e = n.data.getComponent(c);
                        if (null != e) return e;
                        s.log("Restaurant with id " + t + " is missing a " + c.name + " component!", u.Generic, i.Error)
                    }
                    return null
                }, n.isDataLoaded = function() {
                    return this.restaurants.length > 0
                }, n.loadDataFromBundle = function() {
                    f.bundle.loadDir("Restaurants", e, null, this.onLoadComplete.bind(this))
                }, n.getRestaurantPrefabById = function(t) {
                    var n = this.restaurants.findIndex((function(n) {
                        return n.data.getComponent(c).getId() === t
                    }));
                    return n > -1 ? this.restaurants[n] : (s.log("Restaurant with id " + t + " not found on Restaurants list!", u.Generic, i.Error), null)
                }, n.onLoadComplete = function(t, n) {
                    this.restaurants = n.slice(), s.log("Finished loading restaurants. " + this.restaurants.length + " restaurants loaded."), d.emit(l.RestaurantsLoaded)
                }, t
            }());
            t("restaurantsList", new g);
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TweenNodeRotation.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./TweenBase.ts"], (function(e) {
    "use strict";
    var t, i, a, n, r, s, o, l, u;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, a = e.Vec3, n = e.tween
        }, function(e) {
            r = e.applyDecoratedDescriptor, s = e.inheritsLoose, o = e.initializerDefineProperty, l = e.assertThisInitialized
        }, function(e) {
            u = e.TweenBase
        }],
        execute: function() {
            var h, c, p, d, v, y, g, w;
            t._RF.push({}, "925cc7HsYRKfKoUI6HIv/Em", "TweenNodeRotation", void 0);
            var f = i.ccclass,
                R = i.property,
                b = i.menu;
            e("TweenNodeRotation", (h = f("TweenNodeRotation"), c = b("Tween/Rotation"), p = R({
                type: a
            }), d = R(a), h(v = c((g = r((y = function(e) {
                function t() {
                    for (var t, i = arguments.length, a = new Array(i), n = 0; n < i; n++) a[n] = arguments[n];
                    return t = e.call.apply(e, [this].concat(a)) || this, o(l(t), "valueStart", g, l(t)), o(l(t), "valueEnd", w, l(t)), t
                }
                s(t, e);
                var i = t.prototype;
                return i.onLoad = function() {
                    e.prototype.onLoad.call(this), this.useCustomStartValue ? this.target.eulerAngles.set(this.valueStart) : this.valueStart = this.target.eulerAngles, this.useRelativeValue ? (this.tweenCache = n(this.target).delay(this.delay).by(this.duration, {
                        eulerAngles: this.valueEnd
                    }, this.options).repeat(1), this.tweenReverseCache = n(this.target).delay(this.delay).by(this.duration, {
                        eulerAngles: this.valueStart
                    }, this.options).repeat(1)) : (this.tweenCache = n(this.target).delay(this.delay).to(this.duration, {
                        eulerAngles: this.valueEnd
                    }, this.options).repeat(1), this.tweenReverseCache = n(this.target).delay(this.delay).to(this.duration, {
                        eulerAngles: this.valueStart
                    }, this.options).repeat(1))
                }, i.reset = function() {
                    this.target.eulerAngles.set(this.valueStart)
                }, t
            }(u)).prototype, "valueStart", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new a
                }
            }), w = r(y.prototype, "valueEnd", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new a(1, 1, 1)
                }
            }), v = y)) || v) || v));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/IngredientList.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./Ingredient.ts", "./BundleLoader.ts"], (function(n) {
    "use strict";
    var e, t, i, o, r, d, a, s, g, u, l, c;
    return {
        setters: [function(n) {
            e = n.cclegacy, t = n.Prefab, i = n.game, o = n.Game
        }, function(n) {
            r = n.defineProperty
        }, function(n) {
            d = n.logger, a = n.LogCategory, s = n.LogType
        }, function(n) {
            g = n.projectEvent
        }, function(n) {
            u = n.DataLoadingEvent
        }, function(n) {
            l = n.Ingredient
        }, function(n) {
            c = n.contentLoader
        }],
        execute: function() {
            e._RF.push({}, "92df646eNhALKgyDvRIC3AC", "IngredientList", void 0);
            var f = n("IngredientList", function() {
                function n() {
                    var n = this;
                    r(this, "ingredients", []), i.on(o.EVENT_GAME_INITED, (function() {
                        c.isDataLoaded() ? n.loadDataFromBundle() : g.once(u.ContentBundleLoaded, n.loadDataFromBundle, n)
                    }), this)
                }
                var e = n.prototype;
                return e.getIngredientById = function(n) {
                    var e = this.getIngredientPrefabById(n);
                    if (null != e) {
                        var t = e.data.getComponent(l);
                        if (null != t) return t;
                        d.log("Food with id " + n + " is missing a " + l.name + " component!", a.Generic, s.Error)
                    }
                    return null
                }, e.isDataLoaded = function() {
                    return this.ingredients.length > 0
                }, e.loadDataFromBundle = function() {
                    c.bundle.loadDir("Ingredients", t, null, this.onLoadComplete.bind(this))
                }, e.getIngredientPrefabById = function(n) {
                    var e = this.ingredients.findIndex((function(e) {
                        return e.data.getComponent(l).getId() === n
                    }));
                    return e > -1 ? this.ingredients[e] : (d.log("Ingredient with id " + n + " not found on ingredients list!", a.Generic, s.Error), null)
                }, e.onLoadComplete = function(n, e) {
                    this.ingredients = e.slice(), d.log("Finished loading ingredients. " + this.ingredients.length + " ingredients loaded."), g.emit(u.IngredientsLoaded)
                }, n
            }());
            n("ingredientsList", new f);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PizzaCollection.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var i, e, n, r, o, a, c, l, s, u;
    return {
        setters: [function(t) {
            i = t.cclegacy, e = t._decorator, n = t.CCString, r = t.Prefab, o = t.randomRangeInt, a = t.Component
        }, function(t) {
            c = t.applyDecoratedDescriptor, l = t.inheritsLoose, s = t.initializerDefineProperty, u = t.assertThisInitialized
        }],
        execute: function() {
            var z, p, f, g, h, d, y;
            i._RF.push({}, "95a46aHVmtIbrMK4d94mCv7", "PizzaCollection", void 0);
            var b = e.ccclass,
                P = e.property;
            t("PizzaCollection", (z = b("PizzaCollection"), p = P(n), f = P({
                type: r
            }), z((d = c((h = function(t) {
                function i() {
                    for (var i, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(n)) || this, s(u(i), "id", d, u(i)), s(u(i), "pizzas", y, u(i)), i
                }
                l(i, t);
                var e = i.prototype;
                return e.getId = function() {
                    return this.id
                }, e.getLength = function() {
                    return this.pizzas.length
                }, e.getPizza = function(t) {
                    return this.pizzas[t]
                }, e.getRandomPizza = function() {
                    return this.pizzas[o(0, this.pizzas.length)]
                }, i
            }(a)).prototype, "id", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), y = c(h.prototype, "pizzas", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), g = h)) || g));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AdButtonShower.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./AudioManager.ts", "./LevelLoader.ts", "./RewardedAdOportunity.ts"], (function(t) {
    "use strict";
    var n, e, o, i, a, d, r, s, u, c, h, p, l, f, m;
    return {
        setters: [function(t) {
            n = t.cclegacy, e = t._decorator, o = t.Node, i = t.EventHandler, a = t.Component
        }, function(t) {
            d = t.GameEvent
        }, function(t) {
            r = t.applyDecoratedDescriptor, s = t.inheritsLoose, u = t.initializerDefineProperty, c = t.assertThisInitialized, h = t.defineProperty
        }, function(t) {
            p = t.projectEvent
        }, function(t) {
            l = t.AudioManager
        }, function(t) {
            f = t.LevelLoader
        }, function(t) {
            m = t.RewardedAdOportunity
        }],
        execute: function() {
            var A, y, v, _, w, E;
            n._RF.push({}, "95ec4lmpCBGjY3/YSJRdmNp", "AdButtonShower", void 0);
            var O = e.ccclass,
                g = e.property,
                B = e.requireComponent;
            t("AdButtonShower", (A = O("AdButtonShower"), y = B(m), v = g({
                type: o,
                visible: !0
            }), A(_ = y((E = r((w = function(t) {
                function n() {
                    for (var n, e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
                    return n = t.call.apply(t, [this].concat(o)) || this, u(c(n), "_showAdButton", E, c(n)), h(c(n), "_audioWasMutted", void 0), h(c(n), "_adOportunity", null), n
                }
                s(n, t);
                var e = n.prototype;
                return e.onLoad = function() {
                    this._adOportunity = this.getComponent(m)
                }, e.onEnable = function() {
                    p.on(d.EndGame, this.onEndGame, this)
                }, e.start = function() {
                    var t;
                    (this._showAdButton.active = !1, f.instance.ranked) && ((t = new i).target = this.node, t.component = n.name, t.handler = this.onStartAd.name, this._adOportunity.onStartAd.push(t), (t = new i).target = this.node, t.component = n.name, t.handler = this.onAdCompleted.name, this._adOportunity.onAdCompleted.push(t), (t = new i).target = this.node, t.component = n.name, t.handler = this.onAdFinished.name, this._adOportunity.onAdFinished.push(t), this._adOportunity.setup())
                }, e.onDisable = function() {
                    p.off(d.EndGame, this.onEndGame, this)
                }, e.onStartAd = function() {
                    this._audioWasMutted = !l.instance.audioEnabled, l.instance.audioEnabled = !1
                }, e.onAdCompleted = function() {
                    f.useSuperToolsOnNextLevel()
                }, e.onAdFinished = function() {
                    this._audioWasMutted || (l.instance.audioEnabled = !0), f.loadLevel(f.instance.loadedLevel)
                }, e.onEndGame = function() {
                    this._adOportunity.adIsReady && (this._showAdButton.active = !0)
                }, e.showAd = function() {
                    this._showAdButton.active = !1, this._adOportunity.adIsReady && this._adOportunity.showAd()
                }, n
            }(a)).prototype, "_showAdButton", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = w)) || _) || _));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ProjectEvent.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var e, n, r;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t.EventTarget
        }, function(t) {
            r = t.inheritsLoose
        }],
        execute: function() {
            e._RF.push({}, "973baCDLAVIVo6OxiqmUpR2", "ProjectEvent", void 0);
            t("projectEvent", new(function(t) {
                function e() {
                    return t.call(this) || this
                }
                return r(e, t), e
            }(n)));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Tappable.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./InputEnums.ts"], (function(e) {
    "use strict";
    var t, n, r, i, a, o, p, s, c;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, r = e.EventHandler, i = e.Component
        }, function(e) {
            a = e.applyDecoratedDescriptor, o = e.inheritsLoose, p = e.initializerDefineProperty, s = e.assertThisInitialized
        }, function(e) {
            c = e.InputEvent
        }],
        execute: function() {
            var l, u, f, y, v;
            t._RF.push({}, "9af9dOKerdLvJjnt/yI4qE+", "Tappable", void 0);
            var d = n.ccclass,
                T = n.property;
            e("Tappable", (l = d("Tappable"), u = T({
                type: [r],
                visible: !0,
                formerlySerializedAs: "onTap"
            }), l((v = a((y = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(r)) || this, p(s(t), "_onTap", v, s(t)), t
                }
                return o(t, e), t.prototype.tap = function() {
                    this.node.emit(c[c.Input_Tap]), r.emitEvents(this._onTap)
                }, t
            }(i)).prototype, "_onTap", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), f = y)) || f));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/KitchenTool.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./InteractionEnums.ts", "./PlayerCharacter.ts", "./Tappable.ts"], (function(e) {
    "use strict";
    var n, t, r, i, a, o, l, c, s, u, p, y, d, f, h, m, v;
    return {
        setters: [function(e) {
            n = e.cclegacy, t = e._decorator, r = e.Prefab, i = e.animation, a = e.EventHandler, o = e.Component
        }, function(e) {
            l = e.GameEvent
        }, function(e) {
            c = e.applyDecoratedDescriptor, s = e.inheritsLoose, u = e.initializerDefineProperty, p = e.assertThisInitialized, y = e.defineProperty
        }, function(e) {
            d = e.projectEvent
        }, function(e) {
            f = e.InteractionResult
        }, function(e) {
            h = e.PlayerEvent, m = e.PlayerCharacter
        }, function(e) {
            v = e.Tappable
        }],
        execute: function() {
            var b, g, E, T, I, O, P, H, z, C, w, L, S, G, D, A, M, V;
            n._RF.push({}, "9ded60AvSJDUoHN7rpl7LlY", "KitchenTool", void 0);
            var _ = t.ccclass,
                k = t.property,
                K = t.requireComponent;
            e("KitchenTool", (b = _("KitchenTool"), g = K(v), E = k({
                group: {
                    id: "mechanics",
                    name: "Mechanics",
                    displayOrder: 1
                },
                displayOrder: 0
            }), T = k({
                type: r,
                group: {
                    id: "mechanics",
                    name: "Mechanics",
                    displayOrder: 1
                },
                displayOrder: 0
            }), I = k({
                type: i.AnimationController,
                group: {
                    id: "animator",
                    name: "Animator",
                    displayOrder: 0
                },
                displayOrder: -1
            }), O = k({
                group: {
                    id: "animator",
                    name: "Animator",
                    displayOrder: 2
                },
                displayOrder: 0
            }), P = k({
                type: a,
                group: {
                    id: "events",
                    name: "Events",
                    displayOrder: 5
                },
                displayOrder: 0
            }), H = k({
                type: a,
                group: {
                    id: "events",
                    name: "Events",
                    displayOrder: 5
                },
                displayOrder: 1
            }), z = k({
                type: a,
                group: {
                    id: "events",
                    name: "Events",
                    displayOrder: 5
                },
                displayOrder: 2
            }), b(C = g((L = c((w = function(e) {
                function n() {
                    for (var n, t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                    return n = e.call.apply(e, [this].concat(r)) || this, u(p(n), "interactionTime", L, p(n)), u(p(n), "superVersion", S, p(n)), u(p(n), "animController", G, p(n)), u(p(n), "interactionTrigger", D, p(n)), u(p(n), "onPlayerTap", A, p(n)), u(p(n), "onInteractionStart", M, p(n)), u(p(n), "onInteractionEnd", V, p(n)), y(p(n), "playerHere", !1), n
                }
                s(n, e);
                var t = n.prototype;
                return t.onEnable = function() {
                    d.on(l.EndGame, this.onGameOver, this)
                }, t.onDisable = function() {
                    d.off(l.EndGame, this.onGameOver, this)
                }, t.onDestroy = function() {
                    d.off(h.PlayerMoved, this.playerLeft, this)
                }, t.getId = function() {
                    return "id"
                }, t.getSuperVersion = function() {
                    return this.superVersion
                }, t.playerTap = function() {
                    a.emitEvents(this.onPlayerTap)
                }, t.interact = function() {
                    var e = this;
                    this.playerisHere();
                    var n = this.startInteraction();
                    n == f.Success ? (a.emitEvents(this.onInteractionStart), null != this.animController && "" != this.interactionTrigger && this.animController.setValue(this.interactionTrigger, !0), this.interactionTime > 0 ? (m.instance.lock(), this.scheduleOnce((function() {
                        m.instance.unlock(), e.playInteractionEnd()
                    }), this.interactionTime)) : this.playInteractionEnd()) : m.instance.playInteractionFeedback(n)
                }, t.isPlayerHere = function() {
                    return this.playerHere
                }, t.startInteraction = function() {
                    return f.Success
                }, t.endInteraction = function() {}, t.onPlayerLeave = function() {}, t.playInteractionEnd = function() {
                    this.endInteraction(), a.emitEvents(this.onInteractionEnd)
                }, t.playerisHere = function() {
                    this.playerHere || (this.playerHere = !0, d.once(h.PlayerMoved, this.playerLeft, this))
                }, t.playerLeft = function() {
                    this.playerHere = !1, this.onPlayerLeave()
                }, t.onGameOver = function() {
                    this.enabled = !1
                }, n
            }(o)).prototype, "interactionTime", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), S = c(w.prototype, "superVersion", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = c(w.prototype, "animController", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = c(w.prototype, "interactionTrigger", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), A = c(w.prototype, "onPlayerTap", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), M = c(w.prototype, "onInteractionStart", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), V = c(w.prototype, "onInteractionEnd", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), C = w)) || C) || C));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AudioItem.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./AudioEnums.ts"], (function(e) {
    "use strict";
    var t, i, n, s, o, r, a, l, u, c, p, h, d;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, n = e.Prefab, s = e.CCFloat, o = e.Enum, r = e.AudioClip, a = e.randomRangeInt
        }, function(e) {
            l = e.applyDecoratedDescriptor, u = e.createClass, c = e.initializerDefineProperty, p = e.defineProperty
        }, function(e) {
            h = e.LoopMode, d = e.PickSubitemMode
        }],
        execute: function() {
            var b, f, _, y, m, g, v, k, x, I, S, M, w;
            t._RF.push({}, "9e1e3rX0ktE9pKy3qyrVu/Z", "AudioItem", void 0);
            var z = i.ccclass,
                P = i.property;
            e("AudioItem", (b = z("AudioItem"), f = P({
                type: n,
                visible: !0,
                serializable: !0
            }), _ = P({
                type: s,
                visible: !0,
                slide: !0,
                range: [0, 1]
            }), y = P({
                type: o(h),
                visible: !0,
                serializable: !0
            }), m = P({
                type: o(d),
                visible: !0,
                serializable: !0
            }), g = P({
                type: [r],
                visible: !0,
                serializable: !0
            }), b((x = l((k = function() {
                function e() {
                    c(this, "_key", x, this), c(this, "_volume", I, this), c(this, "_loopMode", S, this), c(this, "_pickSubitemMode", M, this), c(this, "_sfxs", w, this), p(this, "notPlayedIndexes", [])
                }
                var t = e.prototype;
                return t.getAudioClipsToPlay = function() {
                    var e = [];
                    if (0 == this._sfxs.length) return e;
                    switch (this._pickSubitemMode) {
                        case d.Disabled:
                            e.push(this.getInSequence());
                            break;
                        case d.Random:
                            e.push(this._sfxs[a(0, this._sfxs.length)]);
                            break;
                        case d.Random_Not_Same_Twice:
                            e.push(this.getRandomNotSameTwice());
                            break;
                        case d.Sequence:
                            e = this._sfxs.slice()
                    }
                    return e
                }, t.getInSequence = function() {
                    var e = this.availableIndexes[0];
                    return this.availableIndexes.splice(0, 1), this._sfxs[e]
                }, t.getRandomNotSameTwice = function() {
                    var e = a(0, this.availableIndexes.length),
                        t = this.availableIndexes[e];
                    return this.availableIndexes.splice(e, 1), this._sfxs[t]
                }, u(e, [{
                    key: "key",
                    get: function() {
                        return this._key
                    }
                }, {
                    key: "volume",
                    get: function() {
                        return this._volume
                    }
                }, {
                    key: "loopMode",
                    get: function() {
                        return this._loopMode
                    }
                }, {
                    key: "pickSubItemMode",
                    get: function() {
                        return this._pickSubitemMode
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this._sfxs.length
                    }
                }, {
                    key: "availableIndexes",
                    get: function() {
                        if (0 == this.notPlayedIndexes.length)
                            for (var e = 0; e < this._sfxs.length; e++) this.notPlayedIndexes.push(e);
                        return this.notPlayedIndexes
                    }
                }]), e
            }()).prototype, "_key", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), I = l(k.prototype, "_volume", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), S = l(k.prototype, "_loopMode", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return h.Do_Not_Loop
                }
            }), M = l(k.prototype, "_pickSubitemMode", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return d.Random_Not_Same_Twice
                }
            }), w = l(k.prototype, "_sfxs", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), v = k)) || v));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PunchRotationTween.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./PunchTweenBase.ts"], (function(t) {
    "use strict";
    var e, n, i, r, a, o, s;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t._decorator, i = t.Quat, r = t.tween
        }, function(t) {
            a = t.inheritsLoose, o = t.createClass
        }, function(t) {
            s = t.PunchTweenBase
        }],
        execute: function() {
            var u;
            e._RF.push({}, "9e8723yU89EV46tgMTi8wWs", "PunchRotationTween", void 0);
            var c = n.ccclass;
            t("PunchRotationTween", c("PunchRotationTween")(u = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                return a(e, t), e.prototype.playSegment = function(t) {
                    var e = this.delay;
                    t > 0 && (e = 0);
                    var n = this.getSegmentValue(t),
                        a = new i;
                    i.fromEuler(a, n.x, n.y, n.z);
                    var o = new i;
                    i.multiply(o, this.startingValue, a), this.tweenCache = r(this.getTarget()).delay(e).to(this.getSegmentDuration(t), {
                        rotation: o
                    }, this.getTweenOptions(t)).repeat(1), this.tweenCache.start()
                }, o(e, [{
                    key: "currentValue",
                    get: function() {
                        return new i(this.getTarget().rotation)
                    },
                    set: function(t) {
                        this.getTarget().rotation = t
                    }
                }]), e
            }(s)) || u);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TutorialDisplayShower.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./TutorialDisplay.ts"], (function(i) {
    "use strict";
    var t, e, o, r, n, a, l, s, p, u, c, y, h, f, g, d, b;
    return {
        setters: [function(i) {
            t = i.cclegacy, e = i._decorator, o = i.Node, r = i.SpriteFrame, n = i.Prefab, a = i.instantiate, l = i.Component
        }, function(i) {
            s = i.applyDecoratedDescriptor, p = i.inheritsLoose, u = i.initializerDefineProperty, c = i.assertThisInitialized, y = i.defineProperty, h = i.createClass
        }, function(i) {
            f = i.logger, g = i.LogCategory, d = i.LogType
        }, function(i) {
            b = i.TutorialDisplay
        }],
        execute: function() {
            var _, w, v, m, S, D, P, T, C, z, L;
            t._RF.push({}, "a0eb9m7XXtPKoEdjb4hbMbp", "TutorialDisplayShower", void 0);
            var k = e.ccclass,
                F = e.property;
            i("TutorialDisplayShower", (_ = k("TutorialDisplayShower"), w = F({
                type: o,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), v = F({
                visible: !0,
                group: {
                    id: "configuration",
                    name: "Configuration"
                }
            }), m = F({
                type: r,
                visible: !0,
                group: {
                    id: "configuration",
                    name: "Configuration"
                }
            }), S = F({
                type: n,
                visible: !0,
                group: {
                    id: "configuration",
                    name: "Configuration"
                }
            }), _((T = s((P = function(i) {
                function t() {
                    for (var t, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
                    return t = i.call.apply(i, [this].concat(o)) || this, u(c(t), "_pivot", T, c(t)), u(c(t), "_alwaysShow", C, c(t)), u(c(t), "_icon", z, c(t)), u(c(t), "_displayPrefab", L, c(t)), y(c(t), "_display", null), t
                }
                p(t, i);
                var e = t.prototype;
                return e.load = function(i) {
                    this._display = a(this._displayPrefab).getComponent(b), this._display.node.setParent(i), this._display.setup(this.pivot, this._icon)
                }, e.show = function(i) {
                    this._display ? this._display.show(i) : (f.log("TutorialDisplayShower.show called without properly loading the display earlier!", g.UI, d.Error), i && i())
                }, h(t, [{
                    key: "pivot",
                    get: function() {
                        return this._pivot ? this._pivot : this.node
                    }
                }, {
                    key: "alwaysShow",
                    get: function() {
                        return this._alwaysShow
                    }
                }]), t
            }(l)).prototype, "_pivot", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = s(P.prototype, "_alwaysShow", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), z = s(P.prototype, "_icon", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = s(P.prototype, "_displayPrefab", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = P)) || D));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FailedInteractionSetting.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./InteractionEnums.ts"], (function(e) {
    "use strict";
    var t, n, i, r, o, a, c, l, u, p;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.Enum, r = e.SpriteFrame, o = e.Component
        }, function(e) {
            a = e.applyDecoratedDescriptor, c = e.inheritsLoose, l = e.initializerDefineProperty, u = e.assertThisInitialized
        }, function(e) {
            p = e.InteractionResult
        }],
        execute: function() {
            var s, f, y, g, d, h, F;
            t._RF.push({}, "a3694Zf93lH04OOcWegpew1", "FailedInteractionSetting", void 0);
            var I = n.ccclass,
                b = n.property;
            e("FailedInteractionSetting", (s = I("FailedInteractionSetting"), f = b({
                type: i(p)
            }), y = b({
                type: r
            }), s((h = a((d = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(i)) || this, l(u(t), "failType", h, u(t)), l(u(t), "icon", F, u(t)), t
                }
                c(t, e);
                var n = t.prototype;
                return n.getFailureType = function() {
                    return this.failType
                }, n.getIcon = function() {
                    return this.icon
                }, t
            }(o)).prototype, "failType", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return p.Failure
                }
            }), F = a(d.prototype, "icon", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = d)) || g));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/KitchenBalconyData.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./KitchenBalconyDataItem.ts"], (function(t) {
    "use strict";
    var n, e, a, c;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }, function(t) {
            e = t.createClass, a = t.defineProperty
        }, function(t) {
            c = t.KitchenBalconyDataItem
        }],
        execute: function() {
            n._RF.push({}, "a37e3HdIMtGUqoc/SFdzLKQ", "KitchenBalconyData", void 0);
            t("KitchenBalconyData", function() {
                function t(t) {
                    a(this, "data", []);
                    for (var n = t.tools.length, e = 0; e < n; e++) this.data.push(new c(t.tools[e]))
                }
                return t.prototype.getItem = function(t) {
                    return t >= 0 && t < this.data.length ? this.data[t] : null
                }, e(t, [{
                    key: "length",
                    get: function() {
                        return this.data.length
                    }
                }]), t
            }());
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TutorialDisplay.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./UITrackWorldNode.ts"], (function(t) {
    "use strict";
    var i, e, n, o, r, a, l, s, p, u, c;
    return {
        setters: [function(t) {
            i = t.cclegacy, e = t._decorator, n = t.Sprite, o = t.animation, r = t.Component
        }, function(t) {
            a = t.applyDecoratedDescriptor, l = t.inheritsLoose, s = t.initializerDefineProperty, p = t.assertThisInitialized, u = t.defineProperty
        }, function(t) {
            c = t.UITrackWorldNode
        }],
        execute: function() {
            var m, h, _, g, f, y, d, b, T, v;
            i._RF.push({}, "a5363pFcLxKAqm1Bg3QI0IB", "TutorialDisplay", void 0);
            var C = e.ccclass,
                w = e.property,
                D = e.requireComponent;
            t("TutorialDisplay", (m = C("TutorialDisplay"), h = D(c), _ = w({
                type: n,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), g = w({
                type: o.AnimationController,
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), f = w({
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), m(y = h((b = a((d = function(t) {
                function i() {
                    for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                    return i = t.call.apply(t, [this].concat(n)) || this, s(p(i), "_icon", b, p(i)), s(p(i), "_animator", T, p(i)), s(p(i), "_showTrigger", v, p(i)), u(p(i), "_onComplete", void 0), u(p(i), "_trackTarget", null), i
                }
                l(i, t);
                var e = i.prototype;
                return e.setup = function(t, i) {
                    this._trackTarget = t, this._icon.spriteFrame = i
                }, e.show = function(t) {
                    this.getComponent(c).setup(this._trackTarget), this._onComplete = t, this._animator.setValue(this._showTrigger, !0)
                }, e.onDisplayClosed = function() {
                    this._onComplete && (this._onComplete(), this._onComplete = null)
                }, i
            }(r)).prototype, "_icon", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = a(d.prototype, "_animator", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = a(d.prototype, "_showTrigger", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), y = d)) || y) || y));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/EndlessModeButton.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./SaveGame.ts", "./LevelLoader.ts", "./LevelSequenceController.ts"], (function(e) {
    "use strict";
    var t, n, o, l, i, s, c, a, r, u, d, v, L, h, p, f;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, o = e.Button, l = e.Node, i = e.Component
        }, function(e) {
            s = e.applyDecoratedDescriptor, c = e.inheritsLoose, a = e.initializerDefineProperty, r = e.assertThisInitialized, u = e.defineProperty, d = e.createClass
        }, function(e) {
            v = e.projectEvent
        }, function(e) {
            L = e.DataLoadingEvent
        }, function(e) {
            h = e.saveGame
        }, function(e) {
            p = e.LevelLoader
        }, function(e) {
            f = e.LevelSequenceController
        }],
        execute: function() {
            var y, k, m, b, g, S;
            t._RF.push({}, "a79dfk6yVVOx5ChAeEN6epl", "EndlessModeButton", void 0);
            var q = n.ccclass,
                C = n.property,
                E = n.requireComponent;
            e("EndlessModeButton", (y = q("EndlessModeButton"), k = E(o), m = C({
                type: l,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), y(b = k((S = s((g = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(o)) || this, a(r(t), "lockedOverlay", S, r(t)), u(r(t), "_button", null), t
                }
                c(t, e);
                var n = t.prototype;
                return n.start = function() {
                    this.lock(), f.instance && f.instance.isDataLoaded() ? this.onLevelSequenceLoaded() : v.on(L.LevelsSequenceLoaded, this.onLevelSequenceLoaded, this)
                }, n.onDestroy = function() {
                    v.off(L.LevelsSequenceLoaded, this.onLevelSequenceLoaded, this), this.unscheduleAllCallbacks()
                }, n.loadRandomLevel = function() {
                    p.loadLevel(f.instance.endlessLevels.getRandomLevel(), !1)
                }, n.onLevelSequenceLoaded = function() {
                    h.getMaxLevelUnlockedIndex() >= f.instance.endlessLevelUnlockThreshold && this.unlock()
                }, n.lock = function(e) {
                    void 0 === e && (e = !0), this.lockedOverlay && (this.lockedOverlay.active = e), this.button.interactable = !e
                }, n.unlock = function() {
                    this.lock(!1)
                }, d(t, [{
                    key: "button",
                    get: function() {
                        return null == this._button && (this._button = this.getComponent(o)), this._button
                    }
                }]), t
            }(i)).prototype, "lockedOverlay", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), b = g)) || b) || b));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AudioData.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./AudioItem.ts"], (function(t) {
    "use strict";
    var e, i, r, n, o, a, s, u, c;
    return {
        setters: [function(t) {
            e = t.cclegacy, i = t._decorator, r = t.Component
        }, function(t) {
            n = t.applyDecoratedDescriptor, o = t.inheritsLoose, a = t.initializerDefineProperty, s = t.assertThisInitialized, u = t.createClass
        }, function(t) {
            c = t.AudioItem
        }],
        execute: function() {
            var l, p, f, d, y;
            e._RF.push({}, "aaf09Ao+q5OhKsNi2Dc5zdI", "AudioData", void 0);
            var h = i.ccclass,
                m = i.property;
            t("AudioData", (l = h("AudioData"), p = m({
                type: [c],
                visible: !0,
                formerlySerializedAs: "items"
            }), l((y = n((d = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(r)) || this, a(s(e), "_items", y, s(e)), e
                }
                return o(e, t), e.prototype.getItem = function(t) {
                    return this._items.find((function(e) {
                        return e.key == t
                    }))
                }, u(e, [{
                    key: "length",
                    get: function() {
                        return this._items.length
                    }
                }]), e
            }(r)).prototype, "_items", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), f = d)) || f));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Holdable.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./InputEnums.ts"], (function(t) {
    "use strict";
    var n, e, i, o, r, l, s, a, d, u;
    return {
        setters: [function(t) {
            n = t.cclegacy, e = t._decorator, i = t.EventHandler, o = t.Component
        }, function(t) {
            r = t.applyDecoratedDescriptor, l = t.inheritsLoose, s = t.initializerDefineProperty, a = t.assertThisInitialized, d = t.defineProperty
        }, function(t) {
            u = t.InputEvent
        }],
        execute: function() {
            var c, p, H, f, _, h, b;
            n._RF.push({}, "ab113lawTxJjoAF39Ss9o+K", "Holdable", void 0);
            var v = e.ccclass,
                y = e.property;
            t("Holdable", (c = v("Holdable"), p = y({
                type: [i],
                visible: !0
            }), H = y({
                type: [i],
                visible: !0
            }), c((h = r((_ = function(t) {
                function n() {
                    for (var n, e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                    return n = t.call.apply(t, [this].concat(i)) || this, s(a(n), "_onHoldStart", h, a(n)), s(a(n), "_onHoldEnd", b, a(n)), d(a(n), "_isHolding", !1), n
                }
                l(n, t);
                var e = n.prototype;
                return e.onDisable = function() {
                    this.isHolding() && this.endHold()
                }, e.startHold = function() {
                    this._isHolding = !0, this.node.emit(u[u.Input_HoldStart]), i.emitEvents(this._onHoldStart)
                }, e.endHold = function() {
                    this._isHolding = !1, this.node.emit(u[u.Input_HoldEnd]), i.emitEvents(this._onHoldEnd)
                }, e.isHolding = function() {
                    return this._isHolding
                }, n
            }(o)).prototype, "_onHoldStart", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), b = r(_.prototype, "_onHoldEnd", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), f = _)) || f));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Star.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./LevelLoader.ts", "./ScoreBoard.ts"], (function(n) {
    "use strict";
    var e, r, t, i, u, o, a, l, f, c, s, p;
    return {
        setters: [function(n) {
            e = n.cclegacy, r = n._decorator, t = n.Label, i = n.animation, u = n.EventHandler, o = n.Component
        }, function(n) {
            a = n.applyDecoratedDescriptor, l = n.inheritsLoose, f = n.initializerDefineProperty, c = n.assertThisInitialized
        }, function(n) {
            s = n.LevelLoader
        }, function(n) {
            p = n.ScoreBoard
        }],
        execute: function() {
            var g, b, d, O, m, y, T, h, v, S, z, D, w, L, x, C, E, _, B, A;
            e._RF.push({}, "ab4e1bR2bZB3qdDz6CEC99b", "Star", void 0);
            var F = r.ccclass,
                R = r.property;
            n("Star", (g = F("Star"), b = R({
                type: t
            }), d = R(i.AnimationController), O = R({
                group: {
                    id: "turnOn",
                    name: "Turn On"
                }
            }), m = R({
                group: {
                    id: "turnOn",
                    name: "Turn On"
                }
            }), y = R({
                type: [u],
                group: {
                    id: "turnOn",
                    name: "Turn On"
                }
            }), T = R({
                group: {
                    id: "turnOff",
                    name: "Turn Off"
                }
            }), h = R({
                group: {
                    id: "turnOff",
                    name: "Turn Off"
                }
            }), v = R({
                type: [u],
                group: {
                    id: "turnOff",
                    name: "Turn Off"
                }
            }), g((D = a((z = function(n) {
                function e() {
                    for (var e, r = arguments.length, t = new Array(r), i = 0; i < r; i++) t[i] = arguments[i];
                    return e = n.call.apply(n, [this].concat(t)) || this, f(c(e), "index", D, c(e)), f(c(e), "neededScore", w, c(e)), f(c(e), "animator", L, c(e)), f(c(e), "turnOnDelay", x, c(e)), f(c(e), "turnOnTrigger", C, c(e)), f(c(e), "onTurnOn", E, c(e)), f(c(e), "turnOffDelay", _, c(e)), f(c(e), "turnOffTrigger", B, c(e)), f(c(e), "onTurnOff", A, c(e)), e
                }
                l(e, n);
                var r = e.prototype;
                return r.onEnable = function() {
                    var n = this,
                        e = s.instance.loadedLevel.getStarScore(this.index);
                    this.neededScore && (this.neededScore.string = e.toFixed()), p.instance.score >= e ? this.scheduleOnce((function() {
                        null != n.animator && "" != n.turnOnTrigger && n.animator.setValue(n.turnOnTrigger, !0), u.emitEvents(n.onTurnOn)
                    }), this.turnOnDelay) : this.scheduleOnce((function() {
                        null != n.animator && "" != n.turnOffTrigger && n.animator.setValue(n.turnOffTrigger, !0), u.emitEvents(n.onTurnOff)
                    }), this.turnOffDelay)
                }, r.onDisable = function() {
                    this.unscheduleAllCallbacks()
                }, e
            }(o)).prototype, "index", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), w = a(z.prototype, "neededScore", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), L = a(z.prototype, "animator", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = a(z.prototype, "turnOnDelay", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), C = a(z.prototype, "turnOnTrigger", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), E = a(z.prototype, "onTurnOn", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), _ = a(z.prototype, "turnOffDelay", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), B = a(z.prototype, "turnOffTrigger", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), A = a(z.prototype, "onTurnOff", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), S = z)) || S));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AudioProxy.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./AudioManager.ts"], (function(e) {
    "use strict";
    var r, i, t, n, o, a, u, c, l;
    return {
        setters: [function(e) {
            r = e.cclegacy, i = e._decorator, t = e.Prefab, n = e.Component
        }, function(e) {
            o = e.applyDecoratedDescriptor, a = e.inheritsLoose, u = e.initializerDefineProperty, c = e.assertThisInitialized
        }, function(e) {
            l = e.AudioManager
        }],
        execute: function() {
            var s, y, p, d, f;
            r._RF.push({}, "ac879rTendCEbpZWFz/jexs", "AudioProxy", void 0);
            var h = i.ccclass,
                v = i.property;
            e("AudioProxy", (s = h("AudioProxy"), y = v({
                type: t,
                visible: !0,
                formerlySerializedAs: "key"
            }), s((f = o((d = function(e) {
                function r() {
                    for (var r, i = arguments.length, t = new Array(i), n = 0; n < i; n++) t[n] = arguments[n];
                    return r = e.call.apply(e, [this].concat(t)) || this, u(c(r), "_key", f, c(r)), r
                }
                return a(r, e), r.prototype.playSFX = function() {
                    var e;
                    this._key && (null === (e = l.instance) || void 0 === e || e.playByKey(this._key))
                }, r
            }(n)).prototype, "_key", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), p = d)) || p));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/RandomOrderPicker.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./LevelTimelinePlayer.ts"], (function(n) {
    "use strict";
    var e, r, t, o, i, c;
    return {
        setters: [function(n) {
            e = n.cclegacy, r = n._decorator, t = n.Component
        }, function(n) {
            o = n.defineProperty, i = n.inheritsLoose
        }, function(n) {
            c = n.LevelTimelinePlayer
        }],
        execute: function() {
            var s, a, u;
            e._RF.push({}, "aca4frDHLlNAZLoi351NoB0", "RandomOrderPicker", void 0);
            var l = r.ccclass;
            n("RandomOrderPicker", l("RandomOrderPicker")((u = a = function(n) {
                function e() {
                    return n.apply(this, arguments) || this
                }
                i(e, n);
                var r = e.prototype;
                return r.onLoad = function() {
                    null == e.instance && (e.instance = this)
                }, r.onDestroy = function() {
                    e.instance == this && (e.instance = null)
                }, r.getRandomFoodOrder = function() {
                    return c.instance.currentEntry.foodOrders.getRandomFoodOrder().copy()
                }, e
            }(t), o(a, "instance", null), s = u)) || s);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/NextLevelButtonShower.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./LevelLoader.ts", "./LevelSequenceController.ts", "./ScoreBoard.ts"], (function(e) {
    "use strict";
    var t, n, o, r, l, i, c, a, u, s, v;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, o = e.Node, r = e.Component
        }, function(e) {
            l = e.applyDecoratedDescriptor, i = e.inheritsLoose, c = e.initializerDefineProperty, a = e.assertThisInitialized
        }, function(e) {
            u = e.LevelLoader
        }, function(e) {
            s = e.LevelSequenceController
        }, function(e) {
            v = e.ScoreBoard
        }],
        execute: function() {
            var L, p, d, f, h;
            t._RF.push({}, "ae4f4REW7lCHqzoASDgAScz", "NextLevelButtonShower", void 0);
            var x = n.ccclass,
                S = n.property;
            e("NextLevelButtonShower", (L = x("NextLevelButtonShower"), p = S(o), L((h = l((f = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, c(a(t), "nextLevelButton", h, a(t)), t
                }
                i(t, e);
                var n = t.prototype;
                return n.onEnable = function() {
                    this.nextLevelButton.active = u.instance.ranked && s.instance.levels.getNextLevel(u.instance.loadedLevel) && v.instance.victory
                }, n.loadNextLevel = function() {
                    u.loadLevel(s.instance.levels.getNextLevel(u.instance.loadedLevel))
                }, t
            }(r)).prototype, "nextLevelButton", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), d = f)) || d));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GSGameReadyEmitter.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts"], (function(e) {
    "use strict";
    var t, r, i, n, o, a;
    return {
        setters: [function(e) {
            t = e.cclegacy, r = e._decorator, i = e.Component
        }, function(e) {
            n = e.defineProperty, o = e.inheritsLoose
        }, function(e) {
            a = e.logger
        }],
        execute: function() {
            var c, s, u;
            t._RF.push({}, "af4c4SAxahBnKABmij0pkqV", "GSGameReadyEmitter", void 0);
            var m = r.ccclass;
            e("GSGameReadyEmitter", m("GSGameReadyEmitter")((u = s = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return o(t, e), t.prototype.start = function() {
                    if (!t._emitted && "undefined" != typeof GAMESNACKS) {
                        var e = GAMESNACKS.gameReady();
                        a.log(e), a.log(JSON.stringify(e)), t._emitted = !0
                    }
                }, t
            }(i), n(s, "_emitted", !1), c = u)) || c);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomerExitPoint.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var n, i, o, e, r, s;
    return {
        setters: [function(t) {
            n = t.cclegacy, i = t._decorator, o = t.Vec3, e = t.Component
        }, function(t) {
            r = t.defineProperty, s = t.inheritsLoose
        }],
        execute: function() {
            var u, c, a;
            t("CustomerState", void 0), n._RF.push({}, "b3fcdHhrr9LDLCZ3i6yFvbF", "CustomerExitPoint", void 0);
            var p, f = i.ccclass;
            ! function(t) {
                t[t.None = 0] = "None", t[t.Entering = 1] = "Entering", t[t.Waiting = 2] = "Waiting", t[t.Leaving = 3] = "Leaving"
            }(p || (p = t("CustomerState", {})));
            t("CustomerExitPoint", f("CustomerExitPoint")((a = c = function(t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                s(n, t);
                var i = n.prototype;
                return i.onEnable = function() {
                    n.points.push(this)
                }, i.onDisable = function() {
                    var t = this,
                        i = n.points.findIndex((function(n) {
                            return n === t
                        }));
                    if (i > -1) return n.points.splice(i, 1), !0
                }, n.getClosestExitPoint = function(t) {
                    for (var n = Number.MAX_VALUE, i = new o, e = 0; e < this.points.length; e++) {
                        var r = o.squaredDistance(t, this.points[e].node.worldPosition);
                        r < n && (i = this.points[e].node.worldPosition, n = r)
                    }
                    return i
                }, n
            }(e), r(c, "points", []), u = a)) || u);
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GameTimer.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./LevelLoader.ts"], (function(e) {
    "use strict";
    var t, i, n, a, o, s, r, m, c, u, h, f, l, L;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, n = e.Component
        }, function(e) {
            a = e.GameTimerEvent, o = e.CustomerEvent
        }, function(e) {
            s = e.inheritsLoose, r = e.defineProperty, m = e.assertThisInitialized
        }, function(e) {
            c = e.logger, u = e.LogCategory, h = e.LogType
        }, function(e) {
            f = e.projectEvent
        }, function(e) {
            l = e.DataLoadingEvent
        }, function(e) {
            L = e.LevelLoader
        }],
        execute: function() {
            var d;
            t._RF.push({}, "b3fdcu/6pRPgZeW8qjj8/bj", "GameTimer", void 0);
            var g = i.ccclass;
            e("GameTimer", g("GameTimer")(d = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(n)) || this, r(m(t), "_time", 0), r(m(t), "_running", !1), r(m(t), "_timeLeft", 0), t
                }
                s(t, e);
                var i = t.prototype;
                return i.onLoad = function() {
                    f.on(l.LevelDataLoaded, this.onLevelDataLoaded, this)
                }, i.update = function(e) {
                    this._running && (this._timeLeft -= e, this._timeLeft <= 0 ? (this._timeLeft = 0, this._running = !1, f.emit(a.GameTimeOver, this._timeLeft)) : f.emit(a.GameTimeUpdate, this._timeLeft))
                }, i.onDestroy = function() {
                    f.off(l.LevelDataLoaded, this.onLevelDataLoaded, this), f.off(o.CustomerReachedBalcony, this.startTimer, this)
                }, i.setTime = function(e) {
                    this._running ? c.log("Can't change the level time if the timer is already running!", u.Gameplay, h.Error) : this._time = e
                }, i.startTimer = function() {
                    this._timeLeft = this._time, this._running = !0, f.emit(a.GameTimeStart, this._timeLeft)
                }, i.onLevelDataLoaded = function() {
                    L.instance.loadedLevel.isEndless() || (this.setTime(L.instance.loadedLevel.getTime()), f.once(o.CustomerReachedBalcony, this.startTimer, this), f.emit(a.GameTimerSet, this._time))
                }, t
            }(n)) || d);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PrefabPool.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var e, n, i, o, s, a, r, l, c, u, h, f;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t._decorator, i = t.director, o = t.NodePool, s = t.instantiate, a = t.Node, r = t.Component
        }, function(t) {
            l = t.defineProperty, c = t.inheritsLoose, u = t.assertThisInitialized, h = t.createForOfIteratorHelperLoose, f = t.createClass
        }],
        execute: function() {
            var p, v, d;
            e._RF.push({}, "b7fd3GtjZNCgZZkkorYWOYh", "PrefabPool", void 0);
            var g = n.ccclass,
                P = (n.property, n.executionOrder);
            t("PrefabPool", g("PrefabPool")(p = P(-5)((d = v = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(i)) || this, l(u(e), "pools", new Map), l(u(e), "scene", void 0), e
                }
                c(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    null == e._instance && (e._instance = this), this.scene = i.getScene()
                }, n.onDestroy = function() {
                    this.unscheduleAllCallbacks(), this.clearAll(), e._instance == this && (e._instance = null)
                }, n.initializeWithCallbacks = function(t, e, n) {
                    void 0 === n && (n = 3), this.initialize(t, e, n)
                }, n.initialize = function(t, e, n) {
                    if (void 0 === n && (n = 3), 0 == this.pools.has(t)) {
                        for (var i = new o, a = 0; a < n; a++) {
                            var r = s(t);
                            i.put(r)
                        }
                        this.pools.set(t, i)
                    }
                }, n.getInScene = function(t) {
                    var e = this.get(t);
                    return e.setParent(this.scene), e
                }, n.get = function(t) {
                    var e;
                    0 == this.pools.has(t) && this.initialize(t);
                    var n = null === (e = this.pools.get(t)) || void 0 === e ? void 0 : e.get();
                    return null == n && (n = s(t)), n
                }, n.putByName = function(t, e) {
                    for (var n, i = h(this.pools); !(n = i()).done;) {
                        var o = n.value,
                            s = o[0];
                        o[1];
                        if (s.name == t) {
                            this.put(s, e);
                            break
                        }
                    }
                }, n.put = function(t, e) {
                    var n;
                    this.pools.has(t) && (null === (n = this.pools.get(t)) || void 0 === n || n.put(e))
                }, n.schedulePut = function(t, e, n) {
                    var i = this;
                    this.scheduleOnce((function() {
                        i.put(t, e)
                    }), n)
                }, n.clear = function(t) {
                    var e;
                    this.pools.has(t) && (null === (e = this.pools.get(t)) || void 0 === e || e.clear())
                }, n.clearAll = function() {
                    this.pools.forEach((function(t) {
                        t.clear()
                    }))
                }, n.has = function(t) {
                    return this.pools.has(t)
                }, f(e, null, [{
                    key: "instance",
                    get: function() {
                        if (null == e._instance) {
                            var t = new a(e.name);
                            t.setParent(i.getScene()), this._instance = t.addComponent(e)
                        }
                        return e._instance
                    }
                }]), e
            }(r), l(v, "_instance", void 0), p = d)) || p) || p);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PunchScaleTween.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./PunchTweenBase.ts"], (function(e) {
    "use strict";
    var t, n, c, a, s, r, i;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, c = e.Vec3, a = e.tween
        }, function(e) {
            s = e.inheritsLoose, r = e.createClass
        }, function(e) {
            i = e.PunchTweenBase
        }],
        execute: function() {
            var u;
            t._RF.push({}, "b8f08y0xb5CoqUTV49W2AU6", "PunchScaleTween", void 0);
            var l = n.ccclass;
            e("PunchScaleTween", l("PunchScaleTween")(u = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return s(t, e), t.prototype.playSegment = function(e) {
                    var t = this.delay;
                    e > 0 && (t = 0);
                    var n = new c;
                    c.add(n, this.getSegmentValue(e), c.ONE);
                    var s = new c;
                    c.multiply(s, n, new c(this.startingValue)), this.tweenCache = a(this.getTarget()).delay(t).to(this.getSegmentDuration(e), {
                        scale: s
                    }, this.getTweenOptions(e)).repeat(1), this.tweenCache.start()
                }, r(t, [{
                    key: "currentValue",
                    get: function() {
                        return new c(this.getTarget().scale)
                    },
                    set: function(e) {
                        this.getTarget().scale = e
                    }
                }]), t
            }(i)) || u);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/KitchenBalconyDataItem.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./TutorialData.ts"], (function(t) {
    "use strict";
    var o, n, a, i;
    return {
        setters: [function(t) {
            o = t.cclegacy
        }, function(t) {
            n = t.createClass, a = t.defineProperty
        }, function(t) {
            i = t.TutorialData
        }],
        execute: function() {
            o._RF.push({}, "b924cVEqfNGL7WBeS8jWEqY", "KitchenBalconyDataItem", void 0);
            t("KitchenBalconyDataItem", function() {
                function t(t) {
                    a(this, "_balconyId", void 0), a(this, "_toolId", void 0), a(this, "_tutorialData", null), this._balconyId = t.balcony, this._toolId = t.tool, t.tutorial && (this._tutorialData = new i(t.tutorial))
                }
                return n(t, [{
                    key: "balconyId",
                    get: function() {
                        return this._balconyId
                    }
                }, {
                    key: "toolId",
                    get: function() {
                        return this._toolId
                    }
                }, {
                    key: "tutorialData",
                    get: function() {
                        return this._tutorialData
                    }
                }]), t
            }());
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MainMenu.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./NavigationEnums.ts", "./MenuScreen.ts"], (function(e) {
    "use strict";
    var t, n, i, o, c, a, r, s, l, u, S, h, v;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.Node, o = e.EventHandler, c = e.Component
        }, function(e) {
            a = e.applyDecoratedDescriptor, r = e.inheritsLoose, s = e.initializerDefineProperty, l = e.assertThisInitialized, u = e.defineProperty
        }, function(e) {
            S = e.projectEvent
        }, function(e) {
            h = e.Navigation
        }, function(e) {
            v = e.MenuScreen
        }],
        execute: function() {
            var f, p, b, g, d, y, C, M, _;
            e("MainMenuState", void 0), t._RF.push({}, "b92ecmG1gxBXoBTOR5c1BCa", "MainMenu", void 0);
            var m, w = n.ccclass,
                k = n.property;
            ! function(e) {
                e[e.None = 0] = "None", e[e.Start = 1] = "Start", e[e.LevelSelection = 2] = "LevelSelection"
            }(m || (m = e("MainMenuState", {})));
            e("MainMenu", (f = w("MainMenu"), p = k({
                type: i,
                visible: !0
            }), b = k({
                type: i,
                visible: !0
            }), g = k({
                type: o,
                visible: !0
            }), f((C = a((y = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)) || this, s(l(t), "_startScreen", C, l(t)), s(l(t), "_levelSelectionScreen", M, l(t)), s(l(t), "onTransition", _, l(t)), u(l(t), "state", m.None), u(l(t), "changeSceneCallback", void 0), t
                }
                r(t, e);
                var n = t.prototype;
                return n.onEnable = function() {
                    var e = this;
                    this.changeSceneCallback = S.on(h.ChangeScreen, (function(t) {
                        e.setState(t)
                    }), this)
                }, n.start = function() {
                    var e = this;
                    this.scheduleOnce((function() {
                        e.showStartScreen(!1)
                    }), .01)
                }, n.onDisable = function() {
                    S.off(this.changeSceneCallback)
                }, n.onDestroy = function() {
                    this.unscheduleAllCallbacks()
                }, n.showStartScreen = function(e) {
                    void 0 === e && (e = !0), this.setState(m.Start, e)
                }, n.showLevelSelection = function(e) {
                    void 0 === e && (e = !0), this.setState(m.LevelSelection, e)
                }, n.setState = function(e, t) {
                    switch (void 0 === t && (t = !0), this.state) {
                        case m.None:
                            this.concludeStateChange(e);
                            break;
                        case m.Start:
                            this._startScreen.getComponent(v).hideScreen(), this.concludeStateChange(e);
                            break;
                        case m.LevelSelection:
                            this._levelSelectionScreen.getComponent(v).hideScreen(), this.concludeStateChange(e)
                    }
                    t && o.emitEvents(this.onTransition)
                }, n.concludeStateChange = function(e) {
                    switch (e) {
                        case m.Start:
                            this._startScreen.getComponent(v).showScreen();
                            break;
                        case m.LevelSelection:
                            this._levelSelectionScreen.getComponent(v).showScreen()
                    }
                    this.state = e
                }, t
            }(c)).prototype, "_startScreen", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = a(y.prototype, "_levelSelectionScreen", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = a(y.prototype, "onTransition", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), d = y)) || d));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FoodOrderDisplay.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./UITrackWorldNode.ts"], (function(e) {
    "use strict";
    var t, i, r, o, n, a, l, s, m, u, c, p, h, d;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, r = e.Sprite, o = e.Gradient, n = e.animation, a = e.EventHandler, l = e.Layout, s = e.Component
        }, function(e) {
            m = e.applyDecoratedDescriptor, u = e.inheritsLoose, c = e.initializerDefineProperty, p = e.assertThisInitialized, h = e.defineProperty
        }, function(e) {
            d = e.UITrackWorldNode
        }],
        execute: function() {
            var f, g, y, v, b, w, F, T, I, P, z, C, _, B, D, k;
            t._RF.push({}, "b97dfPA0vpE4aQ+rjmRIe5/", "FoodOrderDisplay", void 0);
            var A = i.ccclass,
                L = i.property,
                N = i.requireComponent;
            e("FoodOrderDisplay", (f = A("FoodOrderDisplay"), g = N(d), y = L({
                type: r,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), v = L({
                type: r,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), b = L({
                type: o,
                group: {
                    id: "configuration",
                    name: "Configuration"
                }
            }), w = L({
                type: n.AnimationController,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), F = L({
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), T = L({
                type: [a],
                group: {
                    id: "events",
                    name: "Events"
                }
            }), f(I = g((z = m((P = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(r)) || this, c(p(t), "timerBarFill", z, p(t)), c(p(t), "items", C, p(t)), c(p(t), "colors", _, p(t)), c(p(t), "animator", B, p(t)), c(p(t), "showParameter", D, p(t)), c(p(t), "onShow", k, p(t)), h(p(t), "totalTime", 0), h(p(t), "remainingTime", 0), h(p(t), "layout", void 0), h(p(t), "_trackWorldNode", null), t
                }
                u(t, e);
                var i = t.prototype;
                return i.onLoad = function() {
                    this.layout = this.items[0].node.parent.getComponent(l), this._trackWorldNode = this.getComponent(d)
                }, i.update = function(e) {
                    if (this.remainingTime > 0) {
                        this.remainingTime -= e;
                        var t = Math.max(0, this.remainingTime / this.totalTime);
                        this.timerBarFill.fillRange = t, this.timerBarFill.color = this.colors.evaluate(t)
                    }
                }, i.showOrder = function(e, t) {
                    this._trackWorldNode.updatePosition(), this.remainingTime = t, this.totalTime = t, this.timerBarFill.fillRange = 1, this.timerBarFill.color = this.colors.evaluate(1), this.clearItems();
                    for (var i = 0; i < e.length; i++) this.items[i].spriteFrame = e.getItem(i).getIcon(), this.items[i].node.active = !0;
                    this.layout.updateLayout(!0), this.animator.setValue(this.showParameter, !0), a.emitEvents(this.onShow)
                }, i.removeItem = function(e) {
                    this.items[e].node.active = !1
                }, i.hide = function() {
                    this.animator.setValue(this.showParameter, !1)
                }, i.clearItems = function() {
                    for (var e = 0; e < this.items.length; e++) this.items[e].node.active = !1
                }, t
            }(s)).prototype, "timerBarFill", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = m(P.prototype, "items", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), _ = m(P.prototype, "colors", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new o
                }
            }), B = m(P.prototype, "animator", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = m(P.prototype, "showParameter", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), k = m(P.prototype, "onShow", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), I = P)) || I) || I));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelLoader.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./SaveGame.ts", "./SceneLoader.ts", "./LevelData.ts"], (function(e) {
    "use strict";
    var t, n, o, l, a, i, s, r, u, c, d, v, L, _, g, p, f, h, y, T;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, o = e.JsonAsset, l = e.game, a = e.Component
        }, function(e) {
            i = e.GameEvent
        }, function(e) {
            s = e.defineProperty, r = e.applyDecoratedDescriptor, u = e.inheritsLoose, c = e.initializerDefineProperty, d = e.assertThisInitialized, v = e.createClass
        }, function(e) {
            L = e.logger, _ = e.LogCategory, g = e.LogType
        }, function(e) {
            p = e.projectEvent
        }, function(e) {
            f = e.DataLoadingEvent
        }, function(e) {
            h = e.saveGame
        }, function(e) {
            y = e.SceneLoader
        }, function(e) {
            T = e.LevelData
        }],
        execute: function() {
            var m, S, D, N, b, k, x;
            t._RF.push({}, "ba589NOAptFc5algoVbyTgx", "LevelLoader", void 0);
            var E = n.ccclass,
                G = n.property;
            e("LevelLoader", (m = E("LevelLoader"), S = G({
                type: o,
                visible: !0
            }), m((x = k = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(o)) || this, c(d(t), "_level", b, d(t)), s(d(t), "_loadNextLevelWithSuperTools", !1), s(d(t), "_usingSuperTools", !1), t
                }
                u(t, e), t.loadLevel = function(e, n) {
                    void 0 === n && (n = !0), t._levelToLoad = e, t._ranked = n, y.load("Game")
                }, t.useSuperToolsOnNextLevel = function() {
                    this._instance._loadNextLevelWithSuperTools = !0
                };
                var n = t.prototype;
                return n.onLoad = function() {
                    if (null != t._instance) return L.log("ERROR: LevelDataLoader already exists", _.Generic, g.Warning), void this.node.destroy();
                    t._instance = this, l.addPersistRootNode(this.node), p.on(i.StartAssemblying, this.loadLevel, this)
                }, n.onDestroy = function() {
                    t._instance == this && (t._instance = null, p.off(i.StartAssemblying, this.loadLevel, this))
                }, n.loadLevel = function() {
                    null == t._levelToLoad && (t._levelToLoad = new T(this._level.name, this._level.json)), L.log("Loading level " + t._levelToLoad.getName()), this._usingSuperTools = this._loadNextLevelWithSuperTools, this._loadNextLevelWithSuperTools = !1, h.setLastPlayedLevelName(t._levelToLoad.getName()), p.emit(f.LevelDataLoaded)
                }, v(t, [{
                    key: "loadedLevel",
                    get: function() {
                        return t._levelToLoad
                    }
                }, {
                    key: "ranked",
                    get: function() {
                        return !t._levelToLoad.isEndless() || t._ranked
                    }
                }, {
                    key: "usingSuperTools",
                    get: function() {
                        return this._usingSuperTools
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), t
            }(a), s(k, "_levelToLoad", null), s(k, "_ranked", !0), s(k, "_instance", null), b = r((N = x).prototype, "_level", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = N)) || D));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelTimelineEntry.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./CustomerPlacingData.ts", "./FoodOrdersList.ts"], (function(e) {
    "use strict";
    var t, r, i, n, s;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }, function(e) {
            r = e.createClass, i = e.defineProperty
        }, function(e) {
            n = e.CustomerPlacingData
        }, function(e) {
            s = e.FoodOrdersList
        }],
        execute: function() {
            t._RF.push({}, "bba0bk7mYpCCrWTfzyKt6qD", "LevelTimelineEntry", void 0);
            e("LevelTimelineEntry", function() {
                function e(e) {
                    i(this, "_time", void 0), i(this, "_foodOrders", null), i(this, "_customers", null), this._time = e.time, this._foodOrders = new s(e.foodOrders), this._customers = new n(e.customerPlacing)
                }
                return r(e, [{
                    key: "time",
                    get: function() {
                        return this._time
                    }
                }, {
                    key: "foodOrders",
                    get: function() {
                        return this._foodOrders
                    }
                }, {
                    key: "customerPlacingData",
                    get: function() {
                        return this._customers
                    }
                }]), e
            }());
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PizzaChef.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./FoodItemCarrier.ts", "./FoodItemObject.ts", "./PizzaRecipe.ts", "./Pizza.ts"], (function(e) {
    "use strict";
    var t, r, i, n, a, o, u, s, l, c, p, f, z, m;
    return {
        setters: [function(e) {
            t = e.cclegacy, r = e._decorator, i = e.Prefab, n = e.instantiate, a = e.Component
        }, function(e) {
            o = e.applyDecoratedDescriptor, u = e.inheritsLoose, s = e.initializerDefineProperty, l = e.assertThisInitialized, c = e.defineProperty
        }, function(e) {
            p = e.FoodItemCarrier
        }, function(e) {
            f = e.FoodItemObject
        }, function(e) {
            z = e.PizzaState
        }, function(e) {
            m = e.Pizza
        }],
        execute: function() {
            var h, C, d, g, P;
            t._RF.push({}, "bd29aOpXqtM4aXStdB9rV8V", "PizzaChef", void 0);
            var I = r.ccclass,
                v = r.property;
            e("PizzaChef", (h = I("PizzaChef"), C = v(i), h((P = o((g = function(e) {
                function t() {
                    for (var t, r = arguments.length, i = new Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                    return t = e.call.apply(e, [this].concat(i)) || this, s(l(t), "pizzaPrefab", P, l(t)), c(l(t), "itemCarrier", null), t
                }
                u(t, e);
                var r = t.prototype;
                return r.start = function() {
                    this.itemCarrier = this.getComponent(p)
                }, r.hasPizza = function() {
                    return !!this.itemCarrier.hasItem() && null != this.itemCarrier.peek().getItem().getComponent(m)
                }, r.startNewPizza = function() {
                    if (!this.itemCarrier.hasItem()) {
                        var e = n(this.pizzaPrefab).getComponent(m),
                            t = f.InstantiateNew(e);
                        this.itemCarrier.push(t)
                    }
                }, r.addIngredient = function(e) {
                    if (!this.itemCarrier.hasItem()) return !1;
                    var t = this.itemCarrier.peek().getItem().getComponent(m);
                    return null != t && t.getState() == z.Raw && (t.addIngredient(e), !0)
                }, r.getPizza = function() {
                    var e = this.itemCarrier.peek();
                    if (null == e) return null;
                    var t = e.getItem().getComponent(m);
                    return null == t ? null : t.recipe
                }, r.removePizza = function() {
                    var e = this.itemCarrier.peek();
                    if (null != e && null != e.getItem().getComponent(m)) return this.itemCarrier.pull().node.destroy(), !0;
                    return !1
                }, t
            }(a)).prototype, "pizzaPrefab", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), d = g)) || d));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PlayerCharacterFeedback.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./InteractionEnums.ts", "./FailedInteractionsController.ts", "./GameplayCanvas.ts", "./SpeechBalloon.ts", "./UITrackWorldNode.ts"], (function(e) {
    "use strict";
    var n, t, o, i, a, r, l, c, s, p, u, h, d, f, b, g, m;
    return {
        setters: [function(e) {
            n = e.cclegacy, t = e._decorator, o = e.Prefab, i = e.Node, a = e.animation, r = e.instantiate, l = e.Component
        }, function(e) {
            c = e.applyDecoratedDescriptor, s = e.inheritsLoose, p = e.initializerDefineProperty, u = e.assertThisInitialized, h = e.defineProperty
        }, function(e) {
            d = e.InteractionResult
        }, function(e) {
            f = e.FailedInteractionsController
        }, function(e) {
            b = e.GameplayCanvas
        }, function(e) {
            g = e.SpeechBalloon
        }, function(e) {
            m = e.UITrackWorldNode
        }],
        execute: function() {
            var y, B, F, I, C, P, k, v, w, T, z, A, S;
            n._RF.push({}, "bd3376MQ+ZN44Pfi8HvIPSM", "PlayerCharacterFeedback", void 0);
            var N = t.ccclass,
                _ = t.property;
            e("PlayerCharacterFeedback", (y = N("PlayerCharacterFeedback"), B = _({
                type: o,
                group: {
                    id: "configurations",
                    name: "Configurations"
                }
            }), F = _({
                type: i,
                group: {
                    id: "components",
                    name: "Components"
                }
            }), I = _({
                type: a.AnimationController,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), C = _({
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), P = _({
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }), y((w = c((v = function(e) {
                function n() {
                    for (var n, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                    return n = e.call.apply(e, [this].concat(o)) || this, p(u(n), "speechBalloonPrefab", w, u(n)), p(u(n), "speechBalloonPosition", T, u(n)), p(u(n), "animController", z, u(n)), p(u(n), "failedInteractionTrigger", A, u(n)), p(u(n), "abortFailedInteractionTrigger", S, u(n)), h(u(n), "playingFeedback", void 0), h(u(n), "speechBalloon", void 0), n
                }
                s(n, e);
                var t = n.prototype;
                return t.start = function() {
                    null == this.speechBalloon && (this.speechBalloon = r(this.speechBalloonPrefab).getComponent(g), this.speechBalloon.node.setParent(b.instance.node))
                }, t.playInteractionFeedback = function(e) {
                    if (e != d.None && (this.playingFeedback = !0, this.animController.setValue(this.failedInteractionTrigger, !0), f.instance)) {
                        var n = f.instance.getFailureSettings(e);
                        n && (this.speechBalloon.setBalloonIcon(n.getIcon()), this.showSpechBalloon())
                    }
                }, t.showSpechBalloon = function() {
                    null != this.speechBalloon && (this.speechBalloon.getComponent(m).setup(this.speechBalloonPosition), this.speechBalloon.showBalloon())
                }, t.onFeedbackAnimationEnd = function() {
                    this.playingFeedback = !1
                }, t.abortFeedback = function() {
                    this.playingFeedback && (this.animController.setValue(this.abortFailedInteractionTrigger, !0), this.speechBalloon.hideBalloon())
                }, n
            }(l)).prototype, "speechBalloonPrefab", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = c(v.prototype, "speechBalloonPosition", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = c(v.prototype, "animController", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = c(v.prototype, "failedInteractionTrigger", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "FailedInteraction"
                }
            }), S = c(v.prototype, "abortFailedInteractionTrigger", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "AbortFailedInteraction"
                }
            }), k = v)) || k));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FailedInteractionsController.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./FailedInteractionSetting.ts"], (function(t) {
    "use strict";
    var e, n, i, r, o, s, a, c, l, u, p;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t._decorator, i = t.Prefab, r = t.Component
        }, function(t) {
            o = t.defineProperty, s = t.applyDecoratedDescriptor, a = t.inheritsLoose, c = t.initializerDefineProperty, l = t.assertThisInitialized, u = t.createClass
        }, function(t) {
            p = t.FailedInteractionSetting
        }],
        execute: function() {
            var f, d, g, h, y, _, F;
            e._RF.push({}, "bd98clUS2RBOrT7NffP13BY", "FailedInteractionsController", void 0);
            var v = n.ccclass,
                C = n.property;
            t("FailedInteractionsController", (f = v("FailedInteractionsController"), d = C({
                type: i
            }), f((F = _ = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(i)) || this, c(l(e), "settings", y, l(e)), e
                }
                a(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    e._instance ? this.node.destroy() : e._instance = this
                }, n.onDestroy = function() {
                    e._instance == this && (e._instance = null)
                }, n.getFailureSettings = function(t) {
                    for (var e = 0; e < this.settings.length; e++)
                        if (this.settings[e].data.getComponent(p).getFailureType() == t) return this.settings[e].data.getComponent(p);
                    return null
                }, u(e, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), e
            }(r), o(_, "_instance", void 0), y = s((h = F).prototype, "settings", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), g = h)) || g));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelUnlockerForTest.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts"], (function(e) {
    "use strict";
    var t, n, i, o, r, l, c, s, u;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.Component
        }, function(e) {
            o = e.applyDecoratedDescriptor, r = e.inheritsLoose, l = e.initializerDefineProperty, c = e.assertThisInitialized, s = e.defineProperty
        }, function(e) {
            u = e.projectEvent
        }],
        execute: function() {
            var a, h, v, p, _;
            e("LevelUnlockEvents", void 0), t._RF.push({}, "c2779t4YAZGWZRWl0It9Ihu", "LevelUnlockerForTest", void 0);
            var f, d = n.ccclass,
                k = n.property;
            ! function(e) {
                e.UnlockAllLevels = "OnUnlockAllLevels"
            }(f || (f = e("LevelUnlockEvents", {})));
            e("LevelUnlockerForTest", (a = d("LevelUnlockerForTest"), h = k({
                visible: !0
            }), a((_ = o((p = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)) || this, l(c(t), "_unlockTime", _, c(t)), s(c(t), "_holding", !1), s(c(t), "_timer", 0), t
                }
                r(t, e);
                var n = t.prototype;
                return n.onLoad = function() {
                    this.enabled = !1
                }, n.update = function(e) {
                    this._holding && this._timer < this._unlockTime && (this._timer += e, this._timer >= this._unlockTime && u.emit(f.UnlockAllLevels))
                }, n.onTouchStart = function(e) {
                    this._holding = !0, this._timer = 0
                }, n.onTouchEnd = function(e) {
                    this._holding = !1
                }, t
            }(i)).prototype, "_unlockTime", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 3
                }
            }), v = p)) || v));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PunchPositionTween.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./PunchTweenBase.ts"], (function(e) {
    "use strict";
    var t, n, i, s, o, c, r;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.Vec3, s = e.tween
        }, function(e) {
            o = e.inheritsLoose, c = e.createClass
        }, function(e) {
            r = e.PunchTweenBase
        }],
        execute: function() {
            var u;
            t._RF.push({}, "c3d3d1BwjRM46w7Jwj5DBqA", "PunchPositionTween", void 0);
            var a = n.ccclass;
            e("PunchPositionTween", a("PunchPositionTween")(u = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return o(t, e), t.prototype.playSegment = function(e) {
                    var t = this.delay;
                    e > 0 && (t = 0);
                    var n = new i;
                    i.add(n, this.startingValue, this.getSegmentValue(e)), this.tweenCache = s(this.getTarget()).delay(t).to(this.getSegmentDuration(e), {
                        position: n
                    }, this.getTweenOptions(e)).repeat(1), this.tweenCache.start()
                }, c(t, [{
                    key: "currentValue",
                    get: function() {
                        return new i(this.getTarget().position)
                    },
                    set: function(e) {
                        this.getTarget().position = e
                    }
                }]), t
            }(r)) || u);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomerBalcony.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./CustomerBalconyPoint.ts"], (function(t) {
    "use strict";
    var n, i, o, e, s, r, a, c, l, u;
    return {
        setters: [function(t) {
            n = t.cclegacy, i = t._decorator, o = t.randomRangeInt, e = t.Component
        }, function(t) {
            s = t.defineProperty, r = t.applyDecoratedDescriptor, a = t.inheritsLoose, c = t.initializerDefineProperty, l = t.assertThisInitialized
        }, function(t) {
            u = t.CustomerBalconyPoint
        }],
        execute: function() {
            var p, h, f, y, d, v, P;
            n._RF.push({}, "c625bReeUtJgpFdDfLH+Q6F", "CustomerBalcony", void 0);
            var m = i.ccclass,
                b = i.property;
            t("CustomerBalcony", (p = m("CustomerBalcony"), h = b([u]), p((P = v = function(t) {
                function n() {
                    for (var n, i = arguments.length, o = new Array(i), e = 0; e < i; e++) o[e] = arguments[e];
                    return n = t.call.apply(t, [this].concat(o)) || this, c(l(n), "positions", d, l(n)), s(l(n), "availablePositions", []), n
                }
                a(n, t);
                var i = n.prototype;
                return i.onLoad = function() {
                    null == n.instance && (n.instance = this);
                    for (var t = 0; t < this.positions.length; t++) this.availablePositions.push(t)
                }, i.onDestroy = function() {
                    n.instance == this && (n.instance = null)
                }, i.getRandomCustomerAvailablePositionIndex = function() {
                    return this.availablePositions.length > 0 ? this.availablePositions[o(0, this.availablePositions.length)] : -1
                }, i.lockCustomerPositionIndex = function(t) {
                    var n = this.availablePositions.findIndex((function(n) {
                        return n === t
                    }));
                    return n > -1 && (this.availablePositions.splice(n, 1), !0)
                }, i.freeCustomerPositionIndex = function(t) {
                    return -1 == this.availablePositions.findIndex((function(n) {
                        return n === t
                    })) && (this.availablePositions.push(t), !0)
                }, i.checkIn = function(t, n) {
                    this.positions[n].checkIn(t)
                }, i.checkOut = function(t) {
                    this.positions[t].checkOut()
                }, i.getCustomerPositionCoordByIndex = function(t) {
                    return this.positions[t].getCustomerPosition()
                }, i.getBalconyOrderDisplay = function(t) {
                    return this.positions[t].orderDisplay
                }, i.getBalconyReactionsController = function(t) {
                    return this.positions[t].reactionDisplay
                }, n
            }(e), s(v, "instance", null), d = r((y = P).prototype, "positions", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), f = y)) || f));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomerData.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(t) {
    "use strict";
    var e, i, n;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }, function(t) {
            i = t.createClass, n = t.defineProperty
        }],
        execute: function() {
            e._RF.push({}, "c68a79iYl9I9Y9hPAw5zbJM", "CustomerData", void 0);
            t("CustomerData", function() {
                function t(t) {
                    n(this, "_id", void 0), n(this, "_selectionWeight", 1), this._id = t.customerId, t.selectionWeight && (this._selectionWeight = t.selectionWeight)
                }
                return i(t, [{
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "selectionWeight",
                    get: function() {
                        return this._selectionWeight
                    }
                }]), t
            }());
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelTimelinePlayer.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./LevelLoader.ts", "./LevelTimelineEnums.ts"], (function(t) {
    "use strict";
    var e, n, i, r, s, o, l, a, c, u, h, y, d, m;
    return {
        setters: [function(t) {
            e = t.cclegacy, n = t._decorator, i = t.math, r = t.Component
        }, function(t) {
            s = t.CustomerEvent, o = t.GameEvent
        }, function(t) {
            l = t.defineProperty, a = t.inheritsLoose, c = t.assertThisInitialized, u = t.createClass
        }, function(t) {
            h = t.projectEvent
        }, function(t) {
            y = t.DataLoadingEvent
        }, function(t) {
            d = t.LevelLoader
        }, function(t) {
            m = t.LevelTimelineEvent
        }],
        execute: function() {
            var _, f, E;
            e._RF.push({}, "c7a0eFTLP1JzKTLQsn4Ho/b", "LevelTimelinePlayer", void 0);
            var p = n.ccclass;
            t("LevelTimelinePlayer", p("LevelTimelinePlayer")((E = f = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(i)) || this, l(c(e), "_timeline", null), l(c(e), "_currentEntry", null), l(c(e), "_currentEntryIndex", 0), l(c(e), "_playing", !1), l(c(e), "_time", 0), e
                }
                a(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    e._instance ? this.node.destroy() : (e._instance = this, h.on(y.LevelDataLoaded, this.loadTimeline, this), h.once(s.CustomerReachedBalcony, this.play, this), h.on(o.EndGame, this.stop, this))
                }, n.update = function(t) {
                    this._playing && !this.isDone() && (this._time += t, this._time >= this.nextEntry.time && this.currentEntryIndex++)
                }, n.onDestroy = function() {
                    e._instance == this && (e._instance = null, h.off(y.LevelDataLoaded, this.loadTimeline, this), h.off(o.StartPlaying, this.play, this), h.off(o.EndGame, this.stop, this))
                }, n.isDone = function() {
                    return this.currentEntryIndex == this._timeline.length - 1
                }, n.loadTimeline = function() {
                    this._timeline = d.instance.loadedLevel.timeline, this.currentEntryIndex = 0
                }, n.play = function() {
                    this._playing = !0
                }, n.stop = function() {
                    this._playing = !1
                }, u(e, [{
                    key: "currentEntry",
                    get: function() {
                        return this._currentEntry
                    }
                }, {
                    key: "nextEntry",
                    get: function() {
                        return this.currentEntryIndex < this._timeline.length - 1 ? this._timeline.getEntry(this.currentEntryIndex + 1) : null
                    }
                }, {
                    key: "currentEntryIndex",
                    get: function() {
                        return this._currentEntryIndex
                    },
                    set: function(t) {
                        this._currentEntryIndex = i.clamp(t, 0, this._timeline.length - 1), this._currentEntry = this._timeline.getEntry(this._currentEntryIndex), h.emit(m.TimeLineEntryUpdated, this._currentEntry)
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return e._instance
                    }
                }]), e
            }(r), l(f, "_instance", void 0), _ = E)) || _);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/DataLoadingEnums.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }],
        execute: function() {
            var a, d;
            e({
                    DataLoadingEvent: void 0,
                    LevelLoadingEvent: void 0
                }), n._RF.push({}, "c81c5zp5KFLNZyYhcM/qCNp", "DataLoadingEnums", void 0),
                function(e) {
                    e.ContentBundleLoaded = "ContentBundleLoaded", e.RestaurantsLoaded = "OnRestaurantsLoaded", e.FoodItemsLoaded = "OnFoodItemsLoaded", e.IngredientsLoaded = "OnIngredientsLoaded", e.KitchenToolsLoaded = "OnKitchenToolsLoaded", e.CustomersLoaded = "OnCustomersLoaded", e.LevelDataLoaded = "OnLevelDataLoaded", e.LevelsSequenceLoaded = "OnLevelsSequenceLoaded", e.LevelsIconsLoaded = "OnLevelsIconsLoaded", e.SaveGameLoaded = "OnSaveLoaded"
                }(a || (a = e("DataLoadingEvent", {}))),
                function(e) {
                    e.RestaurantInstantiated = "OnLevelRestaurantInstantiated", e.KitchenToolsInstantiated = "OnKitchenToolsPlaced"
                }(d || (d = e("LevelLoadingEvent", {}))), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/DrinkDispenser.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./FoodItemCarrier.ts", "./FoodItemObject.ts", "./FoodItem.ts", "./InteractionEnums.ts", "./GameplayCanvas.ts", "./UITrackWorldNode.ts", "./PlayerCharacter.ts", "./KitchenTool.ts", "./TimerDisplay.ts"], (function(i) {
    "use strict";
    var e, t, n, r, o, a, l, s, u, c, p, m, d, f, y, h, g, b, D, T, P;
    return {
        setters: [function(i) {
            e = i.cclegacy, t = i._decorator, n = i.Prefab, r = i.Node, o = i.EventHandler, a = i.instantiate
        }, function(i) {
            l = i.applyDecoratedDescriptor, s = i.inheritsLoose, u = i.initializerDefineProperty, c = i.assertThisInitialized, p = i.defineProperty, m = i.createClass
        }, function(i) {
            d = i.FoodItemCarrier
        }, function(i) {
            f = i.FoodItemObject
        }, function(i) {
            y = i.FoodItem
        }, function(i) {
            h = i.InteractionResult
        }, function(i) {
            g = i.GameplayCanvas
        }, function(i) {
            b = i.UITrackWorldNode
        }, function(i) {
            D = i.PlayerCharacter
        }, function(i) {
            T = i.KitchenTool
        }, function(i) {
            P = i.TimerDisplay
        }],
        execute: function() {
            var F, C, v, _, I, w, S, O, z, E, k, R, H, N, j, L, M, V, W;
            e._RF.push({}, "c8753tVQFdEopWMHb7/Q17w", "DrinkDispenser", void 0);
            var A = t.ccclass,
                G = t.property;
            i("DrinkDispenser", (F = A("DrinkDispenser"), C = G({
                displayOrder: -1
            }), v = G({
                type: n,
                group: {
                    id: "prefabs",
                    name: "Prefabs",
                    displayOrder: 4
                }
            }), _ = G({
                group: {
                    id: "mechanics",
                    name: "Mechanics",
                    displayOrder: 1
                }
            }), I = G({
                group: {
                    id: "animator",
                    name: "Animator",
                    displayOrder: 2
                }
            }), w = G({
                type: r,
                group: {
                    id: "timer",
                    name: "Timer",
                    displayOrder: 3
                }
            }), S = G({
                type: n,
                group: {
                    id: "timer",
                    name: "Timer",
                    displayOrder: 3
                }
            }), O = G({
                type: o,
                group: {
                    id: "events",
                    name: "Events",
                    displayOrder: 5
                }
            }), z = G({
                type: o,
                group: {
                    id: "events",
                    name: "Events",
                    displayOrder: 5
                }
            }), F((R = l((k = function(i) {
                function e() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return e = i.call.apply(i, [this].concat(n)) || this, u(c(e), "id", R, c(e)), u(c(e), "soda", H, c(e)), u(c(e), "timeToFill", N, c(e)), u(c(e), "fillingParam", j, c(e)), u(c(e), "timerDisplayPosition", L, c(e)), u(c(e), "timerDisplayPrefab", M, c(e)), u(c(e), "onStartFillingSoda", V, c(e)), u(c(e), "onEndFillingSoda", W, c(e)), p(c(e), "_fillingTime", 0), p(c(e), "_timerDisplay", null), e
                }
                s(e, i);
                var t = e.prototype;
                return t.start = function() {
                    null != this.timerDisplayPrefab && (this._timerDisplay = a(this.timerDisplayPrefab).getComponent(P), this._timerDisplay.node.setParent(g.instance.node))
                }, t.update = function(i) {
                    this.isReadyToCollect() || (this._fillingTime -= i, this._fillingTime <= 0 && (this.animController.setValue(this.fillingParam, !1), this._fillingTime = 0, this.isPlayerHere() && this.interact(), o.emitEvents(this.onEndFillingSoda)))
                }, t.getId = function() {
                    return this.id
                }, t.startInteraction = function() {
                    return this.isReadyToCollect() ? D.instance.getComponent(d).hasItem() ? h.HandsOccupied : h.Success : h.None
                }, t.endInteraction = function() {
                    if (this.isReadyToCollect()) {
                        var i = D.instance.getComponent(d),
                            e = this.soda.data.getComponent(y),
                            t = f.InstantiateNew(e);
                        i.push(t) ? (this.animController.setValue(this.fillingParam, !0), this._fillingTime = this.timeToFill, o.emitEvents(this.onStartFillingSoda)) : e.node.destroy()
                    }
                }, t.onPlayerLeave = function() {
                    this.isReadyToCollect() || null != this._timerDisplay && (this._timerDisplay.getComponent(b).setup(this.timerPosition), this._timerDisplay.showTimer(this.timeToFill, this._fillingTime))
                }, t.isReadyToCollect = function() {
                    return 0 === this._fillingTime
                }, m(e, [{
                    key: "timerPosition",
                    get: function() {
                        return null != this.timerDisplayPosition ? this.timerDisplayPosition : this.node
                    }
                }]), e
            }(T)).prototype, "id", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "SodaDispenser"
                }
            }), H = l(k.prototype, "soda", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = l(k.prototype, "timeToFill", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 3
                }
            }), j = l(k.prototype, "fillingParam", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "Filling"
                }
            }), L = l(k.prototype, "timerDisplayPosition", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = l(k.prototype, "timerDisplayPrefab", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = l(k.prototype, "onStartFillingSoda", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), W = l(k.prototype, "onEndFillingSoda", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), E = k)) || E));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelButtonsLoader.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./SaveGame.ts", "./LevelSequenceController.ts", "./LevelButton.ts"], (function(e) {
    "use strict";
    var t, n, o, i, r, l, a, s, u, c, v, h, d, p, f, L, b, g, _, y, m;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, o = e.Prefab, i = e.ScrollView, r = e.Node, l = e.instantiate, a = e.UITransform, s = e.Layout, u = e.Vec2, c = e.clamp01, v = e.Component
        }, function(e) {
            h = e.applyDecoratedDescriptor, d = e.inheritsLoose, p = e.initializerDefineProperty, f = e.assertThisInitialized, L = e.defineProperty
        }, function(e) {
            b = e.projectEvent
        }, function(e) {
            g = e.DataLoadingEvent
        }, function(e) {
            _ = e.saveGame
        }, function(e) {
            y = e.LevelSequenceController
        }, function(e) {
            m = e.LevelButton
        }],
        execute: function() {
            var S, B, w, C, P, z, q, D, V;
            t._RF.push({}, "cae66pHLNVJ6J8joW3fWNMz", "LevelButtonsLoader", void 0);
            var T = n.ccclass,
                j = n.property;
            e("LevelButtonsLoader", (S = T("LevelButtonsLoader"), B = j({
                type: o,
                visible: !0,
                formerlySerializedAs: "levelButton"
            }), w = j({
                type: i,
                visible: !0
            }), C = j({
                type: r,
                visible: !0,
                formerlySerializedAs: "buttonsParent"
            }), S((q = h((z = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(o)) || this, p(f(t), "_levelButton", q, f(t)), p(f(t), "_buttonsScrollView", D, f(t)), p(f(t), "_buttonsParent", V, f(t)), L(f(t), "_shown", !1), t
                }
                d(t, e);
                var n = t.prototype;
                return n.start = function() {
                    y.instance && y.instance.isDataLoaded() ? this.onLevelSequenceLoaded() : b.on(g.LevelsSequenceLoaded, this.onLevelSequenceLoaded, this)
                }, n.onDestroy = function() {
                    b.off(g.LevelsSequenceLoaded, this.onLevelSequenceLoaded, this), this.unscheduleAllCallbacks()
                }, n.showButtons = function() {
                    for (var e = this._buttonsParent.children, t = 0; t < e.length; t++) this._shown ? e[t].getComponent(m).quickshow() : (e[t].getComponent(m).show(), this.scrollToCurrentLevel());
                    this._shown = !0
                }, n.hideButtons = function() {
                    for (var e = this._buttonsParent.children, t = 0; t < e.length; t++) e[t].getComponent(m).hide()
                }, n.onLevelSequenceLoaded = function() {
                    for (var e = 0; e < y.instance.levels.length; e++) {
                        var t = l(this._levelButton);
                        t.setParent(this._buttonsParent), t.getComponent(m).setup(e, y.instance.levels.getLevelByIndex(e))
                    }
                }, n.calculateButtonYPosition = function(e) {
                    var t = this._levelButton.data.getComponent(a).contentSize.y;
                    return -t / 2 - (this._buttonsParent.getComponent(s).spacingY + t) * e
                }, n.scrollToCurrentLevel = function() {
                    var e = this;
                    if (_.isDataLoaded()) {
                        var t = _.getMaxLevelUnlockedIndex(),
                            n = this._buttonsScrollView.getComponent(a).contentSize.y,
                            o = this._levelButton.data.getComponent(a).contentSize.y + this._buttonsParent.getComponent(s).spacingY,
                            i = n / o;
                        i = Math.floor(i);
                        var r = -this.calculateButtonYPosition(t);
                        if (r > n) {
                            r = r - n + o;
                            var l = this._buttonsParent.getComponent(a).contentSize.y;
                            l -= n;
                            var v = this._levelButton.data.getComponent(m).baseShowDelay;
                            this.scheduleOnce((function() {
                                e._buttonsScrollView.scrollTo(new u(0, 1 - c(r / l)), (t - (i - 1)) * v)
                            }), (i - 1) * v)
                        }
                    }
                }, t
            }(v)).prototype, "_levelButton", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = h(z.prototype, "_buttonsScrollView", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = h(z.prototype, "_buttonsParent", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = z)) || P));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/VirutalJoystick%20enums.ts", ["cc"], (function(t) {
    "use strict";
    var i;
    return {
        setters: [function(t) {
            i = t.cclegacy
        }],
        execute: function() {
            var s;
            t("VirtualJoystickEvent", void 0), i._RF.push({}, "cea81xfwhNP8KT0y4dCiHFO", "VirutalJoystick%20enums", void 0),
                function(t) {
                    t[t.VistualJoystickPositionUpdated = 0] = "VistualJoystickPositionUpdated"
                }(s || (s = t("VirtualJoystickEvent", {}))), i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelFoodsPresenter.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./FoodItem.ts", "./FoodItemList.ts", "./LevelLoader.ts", "./LevelFoodPresenterIcon.ts"], (function(e) {
    "use strict";
    var t, n, i, o, a, r, s, l, c, u, d, h, f, p, m, v, b, g, _;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.Node, o = e.Prefab, a = e.animation, r = e.instantiate, s = e.Component
        }, function(e) {
            l = e.GameEvent
        }, function(e) {
            c = e.applyDecoratedDescriptor, u = e.inheritsLoose, d = e.initializerDefineProperty, h = e.assertThisInitialized, f = e.defineProperty
        }, function(e) {
            p = e.projectEvent
        }, function(e) {
            m = e.DataLoadingEvent
        }, function(e) {
            v = e.FoodType
        }, function(e) {
            b = e.foodItemsList
        }, function(e) {
            g = e.LevelLoader
        }, function(e) {
            _ = e.LevelFoodPresenterIcon
        }],
        execute: function() {
            var y, L, P, z, w, C, D, F, k, I, S, T, E, A, B, j, G, H, O, x, M, R, V, J, N;
            t._RF.push({}, "cf102Ds2pxEB4MJHGUP4Ie9", "LevelFoodsPresenter", void 0);
            var U = n.ccclass,
                q = n.property;
            e("LevelFoodsPresenter", (y = U("LevelFoodsPresenter"), L = q({
                type: i,
                visible: !0,
                group: {
                    id: "containers",
                    name: "Pizzas"
                }
            }), P = q({
                type: i,
                visible: !0,
                group: {
                    id: "containers",
                    name: "Pizzas"
                }
            }), z = q({
                type: i,
                visible: !0,
                group: {
                    id: "containers",
                    name: "Drinks"
                }
            }), w = q({
                type: i,
                visible: !0,
                group: {
                    id: "containers",
                    name: "Drinks"
                }
            }), C = q({
                type: i,
                visible: !0,
                group: {
                    id: "containers",
                    name: "Snacks"
                }
            }), D = q({
                type: i,
                visible: !0,
                group: {
                    id: "containers",
                    name: "Snacks"
                }
            }), F = q({
                type: o,
                visible: !0,
                group: {
                    id: "prefabs",
                    name: "Prefabs"
                }
            }), k = q({
                type: a.AnimationController,
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), I = q({
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), S = q({
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), T = q({
                visible: !0,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), y((B = c((A = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)) || this, d(h(t), "_pizzaContainer", B, h(t)), d(h(t), "_pizzaParent", j, h(t)), d(h(t), "_drinksContainer", G, h(t)), d(h(t), "_drinksParent", H, h(t)), d(h(t), "_snacksContainer", O, h(t)), d(h(t), "_snacksParent", x, h(t)), d(h(t), "_foodIconPrefab", M, h(t)), d(h(t), "_animationController", R, h(t)), d(h(t), "_showParameter", V, h(t)), d(h(t), "_highlightFoodsDelay", J, h(t)), d(h(t), "_closingScreenTime", N, h(t)), f(h(t), "_foodIcons", []), f(h(t), "_levelLoaded", void 0), t
                }
                u(t, e);
                var n = t.prototype;
                return n.onEnable = function() {
                    p.on(m.LevelDataLoaded, this.onLevelLoaded, this), b.isDataLoaded() || p.on(m.FoodItemsLoaded, this.tryToLoadData, this), p.on(l.ShowLevelPresentation, this.showScreen, this), p.on(l.ShowTutorial, this.deactivateContent, this)
                }, n.onDisable = function() {
                    p.off(m.LevelDataLoaded, this.onLevelLoaded, this), p.off(m.FoodItemsLoaded, this.tryToLoadData, this), p.off(l.ShowLevelPresentation, this.showScreen, this), p.off(l.ShowTutorial, this.deactivateContent, this), this.unscheduleAllCallbacks()
                }, n.closeScreen = function() {
                    var e = this;
                    this._animationController.setValue(this._showParameter, !1), this.scheduleOnce((function() {
                        p.emit(l.LevelPresentationClosed), e.deactivateContent()
                    }), this._closingScreenTime)
                }, n.onLevelLoaded = function() {
                    this._levelLoaded = !0, this.tryToLoadData()
                }, n.tryToLoadData = function() {
                    this._levelLoaded && b.isDataLoaded() && this.loadScreenData()
                }, n.loadScreenData = function() {
                    var e = g.instance.loadedLevel.getFoods();
                    this._pizzaContainer.active = e.countByType(v.Pizza) > 0, this.addFoods(e, v.Pizza, this._pizzaParent), this._drinksContainer.active = e.countByType(v.Drink) > 0, this.addFoods(e, v.Drink, this._drinksParent), this._snacksContainer.active = e.countByType(v.Snack) > 0, this.addFoods(e, v.Snack, this._snacksParent)
                }, n.showScreen = function() {
                    p.off(l.ShowTutorial, this.deactivateContent, this), this._animationController.setValue(this._showParameter, !0), this.scheduleOnce(this.highlightFoods.bind(this), this._highlightFoodsDelay)
                }, n.addFoods = function(e, t, n) {
                    for (var i = 0; i < e.countByType(t); i++) {
                        var o = r(this._foodIconPrefab).getComponent(_);
                        o.setIcon(e.getItemOfType(i, t).getIcon()), o.node.setParent(n), this._foodIcons.push(o)
                    }
                }, n.highlightFoods = function() {
                    for (var e = 0; e < this._foodIcons.length; e++) this._foodIcons[e].playHighlight(e)
                }, n.deactivateContent = function() {
                    this._animationController.node.active = !1
                }, t
            }(s)).prototype, "_pizzaContainer", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = c(A.prototype, "_pizzaParent", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), G = c(A.prototype, "_drinksContainer", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = c(A.prototype, "_drinksParent", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = c(A.prototype, "_snacksContainer", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = c(A.prototype, "_snacksParent", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = c(A.prototype, "_foodIconPrefab", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = c(A.prototype, "_animationController", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = c(A.prototype, "_showParameter", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), J = c(A.prototype, "_highlightFoodsDelay", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), N = c(A.prototype, "_closingScreenTime", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5
                }
            }), E = A)) || E));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GSGameEventsEmitter.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./LevelLoader.ts", "./LevelSequenceController.ts", "./ScoreEnums.ts", "./ScoreBoard.ts"], (function(e) {
    "use strict";
    var t, n, o, a, r, l, i, c, s, d, S, v, u;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, o = e.Component
        }, function(e) {
            a = e.GameEvent
        }, function(e) {
            r = e.inheritsLoose, l = e.defineProperty, i = e.assertThisInitialized
        }, function(e) {
            c = e.logger
        }, function(e) {
            s = e.projectEvent
        }, function(e) {
            d = e.LevelLoader
        }, function(e) {
            S = e.LevelSequenceController
        }, function(e) {
            v = e.ScoreEvent
        }, function(e) {
            u = e.ScoreBoard
        }],
        execute: function() {
            var f;
            t._RF.push({}, "d122er9tDlIrI5B/QnoV4yM", "GSGameEventsEmitter", void 0);
            var g = n.ccclass;
            e("GSGameEventsEmitter", g("GSGameEventsEmitter")(f = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)) || this, l(i(t), "_totalScoreUpdatedCallback", void 0), l(i(t), "_gameOverCalled", !1), t
                }
                r(t, e);
                var n = t.prototype;
                return n.onEnable = function() {
                    var e = this;
                    s.on(a.EndGame, this.onGameOver, this), this._totalScoreUpdatedCallback = s.on(v.TotalScoreUpdated, (function(t) {
                        e.onTotalScoreUpdated(t)
                    }))
                }, n.onDisable = function() {
                    if (s.off(a.EndGame, this.onGameOver, this), s.off(v.TotalScoreUpdated, this._totalScoreUpdatedCallback), this._totalScoreUpdatedCallback = null, !this._gameOverCalled && "undefined" != typeof GAMESNACKS) {
                        c.log("Sending GameSnacks game over");
                        var e = GAMESNACKS.gameOver();
                        c.log(e), c.log(JSON.stringify(e))
                    }
                }, n.onGameOver = function() {
                    var e;
                    (this._gameOverCalled = !0, "undefined" != typeof GAMESNACKS) && (u.instance.victory ? (c.log("Sending GameSnacks level complete"), e = d.instance.loadedLevel.isEndless() ? GAMESNACKS.levelComplete(0) : GAMESNACKS.levelComplete(S.instance.levels.getLevelIndex(d.instance.loadedLevel) + 1)) : (c.log("Sending GameSnacks game over"), e = GAMESNACKS.gameOver()), c.log(e), c.log(JSON.stringify(e)))
                }, n.onTotalScoreUpdated = function(e) {
                    if ("undefined" != typeof GAMESNACKS) {
                        c.log("Sending GameSnacks score");
                        var t = GAMESNACKS.sendScore(e);
                        c.log(t), c.log(JSON.stringify(t))
                    }
                }, t
            }(o)) || f);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TweenBase.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./TweenEnums.ts"], (function(e) {
    "use strict";
    var t, n, i, r, o, a, u, s, l, c, p, f, h;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, i = e.Node, r = e.Enum, o = e.CCBoolean, a = e.EventHandler, u = e.Component
        }, function(e) {
            s = e.applyDecoratedDescriptor, l = e.inheritsLoose, c = e.initializerDefineProperty, p = e.assertThisInitialized, f = e.defineProperty
        }, function(e) {
            h = e.TweenEasing
        }],
        execute: function() {
            var b, y, d, m, g, v, w, C, z, S, R, T, B, E, V, _, D, H, L;
            t._RF.push({}, "d9856qOejhH7aDieMy/A3MW", "TweenBase", void 0);
            var M = n.ccclass,
                O = n.property;
            e("TweenBase", (b = M("TweenBase"), y = O(i), d = O({
                min: 0,
                unit: "sec"
            }), m = O({
                min: 0,
                unit: "sec"
            }), g = O({
                type: r(h)
            }), v = O(o), w = O(o), C = O({
                type: [a],
                displayOrder: 20
            }), z = O({
                type: [a],
                displayOrder: 20
            }), b((T = s((R = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(i)) || this, c(p(t), "target", T, p(t)), c(p(t), "delay", B, p(t)), c(p(t), "duration", E, p(t)), c(p(t), "easing", V, p(t)), c(p(t), "useCustomStartValue", _, p(t)), c(p(t), "useRelativeValue", D, p(t)), c(p(t), "onStart", H, p(t)), c(p(t), "onComplete", L, p(t)), f(p(t), "tweenCache", void 0), f(p(t), "tweenReverseCache", void 0), f(p(t), "options", {}), t
                }
                l(t, e);
                var n = t.prototype;
                return n.onLoad = function() {
                    var e = this;
                    this.target || (this.target = this.node), this.options.onStart = function(t) {
                        a.emitEvents(e.onStart, t)
                    }.bind(this), this.options.onComplete = function(t) {
                        a.emitEvents(e.onComplete, t)
                    }.bind(this), this.options.easing = h[this.easing]
                }, n.play = function() {
                    this.useCustomStartValue && this.reset(), this.tweenCache.start()
                }, n.reset = function() {}, n.playReverse = function() {
                    var e;
                    null === (e = this.tweenReverseCache) || void 0 === e || e.start()
                }, n.stop = function() {
                    this.tweenCache.stop()
                }, t
            }(u)).prototype, "target", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), B = s(R.prototype, "delay", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }), E = s(R.prototype, "duration", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), V = s(R.prototype, "easing", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return h.linear
                }
            }), _ = s(R.prototype, "useCustomStartValue", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), D = s(R.prototype, "useRelativeValue", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), H = s(R.prototype, "onStart", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), L = s(R.prototype, "onComplete", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), S = R)) || S));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GameController.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./SceneLoaderEnums.ts", "./FoodItemList.ts", "./LevelLoader.ts", "./CustomerList.ts", "./RestaurantList.ts", "./KitchenToolList.ts", "./IngredientList.ts"], (function(e) {
    "use strict";
    var t, i, o, s, n, a, d, r, l, h, L, c, m, v, u, f, S, g, T;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, o = e.Component
        }, function(e) {
            s = e.GameEvent, n = e.GameTimerEvent, a = e.PlayerLivesEvent
        }, function(e) {
            d = e.inheritsLoose, r = e.defineProperty, l = e.assertThisInitialized
        }, function(e) {
            h = e.projectEvent
        }, function(e) {
            L = e.DataLoadingEvent, c = e.LevelLoadingEvent
        }, function(e) {
            m = e.SceneLoaderEvent
        }, function(e) {
            v = e.foodItemsList
        }, function(e) {
            u = e.LevelLoader
        }, function(e) {
            f = e.customersList
        }, function(e) {
            S = e.restaurantsList
        }, function(e) {
            g = e.kitchenToolsList
        }, function(e) {
            T = e.ingredientsList
        }],
        execute: function() {
            var y;
            e("GameState", void 0), t._RF.push({}, "da428tc7mpKdK7Ej5q/USUd", "GameController", void 0);
            var b, A = i.ccclass;
            ! function(e) {
                e[e.None = 0] = "None", e[e.Loading = 1] = "Loading", e[e.ShowingLevelFoods = 2] = "ShowingLevelFoods", e[e.ShowingTutorial = 3] = "ShowingTutorial", e[e.Assemblying = 4] = "Assemblying", e[e.Playing = 5] = "Playing", e[e.End = 6] = "End"
            }(b || (b = e("GameState", {})));
            e("GameController", A("GameController")(y = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(o)) || this, r(l(t), "_state", b.None), r(l(t), "_levelLoaded", !1), r(l(t), "_kitchenAssembled", !1), r(l(t), "_gameConditionSet", !1), t
                }
                d(t, e);
                var i = t.prototype;
                return i.onLoad = function() {
                    h.emit(m.NewContentLoaderAdded, this), h.on(s.LevelPresentationClosed, this.showTutorial, this), h.on(s.TutorialFinished, this.onTutorialFinished, this), T.isDataLoaded() || h.once(L.IngredientsLoaded, this.tryToAssembleLevel, this), v.isDataLoaded() || h.once(L.FoodItemsLoaded, this.tryToAssembleLevel, this), g.isDataLoaded() || h.once(L.KitchenToolsLoaded, this.tryToAssembleLevel, this), S.isDataLoaded() || h.once(L.RestaurantsLoaded, this.tryToAssembleLevel, this), h.on(L.LevelDataLoaded, this.onLevelDataLoaded, this), h.on(n.GameTimerSet, this.onGameTimerSet, this), h.on(a.PlayerLivesSet, this.onPlayerLivesSet, this), h.on(c.KitchenToolsInstantiated, this.onKitchenAssembled, this), h.on(n.GameTimeOver, this.onGameOver, this), h.on(a.PlayerLivesOver, this.onGameOver, this), h.on(m.SceneLoaded, this.onSceneFinishedLoading, this), h.on(m.SceneUncovered, this.onSceneUncovered, this)
                }, i.onDestroy = function() {
                    h.off(s.LevelPresentationClosed, this.showTutorial, this), h.off(s.TutorialFinished, this.onTutorialFinished, this), h.off(L.IngredientsLoaded, this.tryToAssembleLevel, this), h.off(L.FoodItemsLoaded, this.tryToAssembleLevel, this), h.off(L.KitchenToolsLoaded, this.tryToAssembleLevel, this), h.off(L.RestaurantsLoaded, this.tryToAssembleLevel, this), h.off(L.LevelDataLoaded, this.onLevelDataLoaded, this), h.off(n.GameTimerSet, this.onGameTimerSet, this), h.off(a.PlayerLivesSet, this.onPlayerLivesSet, this), h.off(c.KitchenToolsInstantiated, this.onKitchenAssembled, this), h.off(n.GameTimeOver, this.onGameOver, this), h.off(a.PlayerLivesOver, this.onGameOver, this), h.off(m.SceneLoaded, this.onSceneFinishedLoading, this), h.off(m.SceneUncovered, this.onSceneUncovered, this)
                }, i.doneLoading = function() {
                    return this.isLevelAssembled()
                }, i.setState = function(e) {
                    switch (e) {
                        case b.Loading:
                            h.emit(s.StartLoading);
                            break;
                        case b.Assemblying:
                            h.emit(s.StartAssemblying);
                            break;
                        case b.ShowingLevelFoods:
                            h.emit(s.ShowLevelPresentation);
                            break;
                        case b.ShowingTutorial:
                            h.emit(s.ShowTutorial);
                            break;
                        case b.Playing:
                            h.emit(s.StartPlaying);
                            break;
                        case b.End:
                            h.emit(s.EndGame)
                    }
                    this._state = e
                }, i.onSceneFinishedLoading = function() {
                    this.setState(b.Loading), this.tryToAssembleLevel()
                }, i.onLevelDataLoaded = function() {
                    this._levelLoaded = !0
                }, i.tryToAssembleLevel = function() {
                    this.isAllDataLoaded() && this.setState(b.Assemblying)
                }, i.onSceneUncovered = function() {
                    this.isLevelAssembled() && (u.instance.loadedLevel.isEndless() ? this.showTutorial() : this.setState(b.ShowingLevelFoods))
                }, i.showTutorial = function() {
                    this.setState(b.ShowingTutorial)
                }, i.onTutorialFinished = function() {
                    this.setState(b.Playing)
                }, i.isAllDataLoaded = function() {
                    return T.isDataLoaded() && v.isDataLoaded() && g.isDataLoaded() && f.isDataLoaded() && S.isDataLoaded()
                }, i.isLevelAssembled = function() {
                    return this._levelLoaded && this._gameConditionSet && this._kitchenAssembled
                }, i.onGameTimerSet = function() {
                    this._gameConditionSet = !0
                }, i.onPlayerLivesSet = function() {
                    this._gameConditionSet = !0
                }, i.onKitchenAssembled = function() {
                    this._kitchenAssembled = !0
                }, i.onGameOver = function() {
                    this.setState(b.End)
                }, t
            }(o)) || y);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TweenEnums.ts", ["cc"], (function(u) {
    "use strict";
    var n;
    return {
        setters: [function(u) {
            n = u.cclegacy
        }],
        execute: function() {
            var t;
            u("TweenEasing", void 0), n._RF.push({}, "dae1f6+YdpIfrf5W5sHkb2b", "TweenEnums", void 0),
                function(u) {
                    u[u.linear = 0] = "linear", u[u.smooth = 1] = "smooth", u[u.fade = 2] = "fade", u[u.constant = 3] = "constant", u[u.quadIn = 4] = "quadIn", u[u.quadOut = 5] = "quadOut", u[u.quadInOut = 6] = "quadInOut", u[u.quadOutIn = 7] = "quadOutIn", u[u.cubicIn = 8] = "cubicIn", u[u.cubicOut = 9] = "cubicOut", u[u.cubicInOut = 10] = "cubicInOut", u[u.cubicOutIn = 11] = "cubicOutIn", u[u.quartIn = 12] = "quartIn", u[u.quartOut = 13] = "quartOut", u[u.quartInOut = 14] = "quartInOut", u[u.quartOutIn = 15] = "quartOutIn", u[u.quintIn = 16] = "quintIn", u[u.quintOut = 17] = "quintOut", u[u.quintInOut = 18] = "quintInOut", u[u.quintOutIn = 19] = "quintOutIn", u[u.sineIn = 20] = "sineIn", u[u.sineOut = 21] = "sineOut", u[u.sineInOut = 22] = "sineInOut", u[u.sineOutIn = 23] = "sineOutIn", u[u.expoIn = 24] = "expoIn", u[u.expoOut = 25] = "expoOut", u[u.expoInOut = 26] = "expoInOut", u[u.expoOutIn = 27] = "expoOutIn", u[u.circIn = 28] = "circIn", u[u.circOut = 29] = "circOut", u[u.circInOut = 30] = "circInOut", u[u.circOutIn = 31] = "circOutIn", u[u.elasticIn = 32] = "elasticIn", u[u.elasticOut = 33] = "elasticOut", u[u.elasticInOut = 34] = "elasticInOut", u[u.elasticOutIn = 35] = "elasticOutIn", u[u.backIn = 36] = "backIn", u[u.backOut = 37] = "backOut", u[u.backInOut = 38] = "backInOut", u[u.backOutIn = 39] = "backOutIn", u[u.bounceIn = 40] = "bounceIn", u[u.bounceOut = 41] = "bounceOut", u[u.bounceInOut = 42] = "bounceInOut", u[u.bounceOutIn = 43] = "bounceOutIn"
                }(t || (t = u("TweenEasing", {}))), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PanelManager.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts"], (function(n) {
    "use strict";
    var e, t, o, a, s, i, r;
    return {
        setters: [function(n) {
            e = n.cclegacy, t = n._decorator, o = n.Component
        }, function(n) {
            a = n.defineProperty, s = n.inheritsLoose, i = n.assertThisInitialized
        }, function(n) {
            r = n.logger
        }],
        execute: function() {
            var l, c, u;
            e._RF.push({}, "dd60fb0cwVANrUPb0SN5V4w", "PanelManager", void 0);
            var p = t.ccclass,
                f = (t.property, t.executionOrder);
            n("PanelManager", p("PanelManager")(l = f(-5)((u = c = function(n) {
                function e() {
                    for (var e, t = arguments.length, o = new Array(t), s = 0; s < t; s++) o[s] = arguments[s];
                    return e = n.call.apply(n, [this].concat(o)) || this, a(i(e), "panels", new Map), e
                }
                s(e, n);
                var t = e.prototype;
                return t.onLoad = function() {
                    null == e.instance && (e.instance = this)
                }, t.onDestroy = function() {
                    e.instance == this && (e.instance = null)
                }, t.register = function(n) {
                    this.panels.set(n.Id, n)
                }, t.open = function(n) {
                    var e;
                    this.panels && (this.panels.has(n) ? null === (e = this.panels.get(n)) || void 0 === e || e.open() : r.log("Could not find panel: " + n))
                }, t.close = function(n) {
                    var e;
                    null === (e = this.panels.get(n)) || void 0 === e || e.close()
                }, e
            }(o), a(c, "instance", void 0), l = u)) || l) || l);
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GSAudioController.ts", ["cc", "./ProjectEvent.ts", "./AudioEnums.ts", "./AudioManager.ts"], (function(n) {
    "use strict";
    var o, e, t, i, a, u, c;
    return {
        setters: [function(n) {
            o = n.cclegacy, e = n._decorator, t = n.game, i = n.Game
        }, function(n) {
            a = n.projectEvent
        }, function(n) {
            u = n.AudioEvent
        }, function(n) {
            c = n.AudioManager
        }],
        execute: function() {
            var r;
            o._RF.push({}, "ddf62x5xI9Aa6bFwfhqRm0f", "GSAudioController", void 0);
            var d = e.ccclass,
                s = n("GSAudioController", d("GSAudioController")(r = function() {
                    function n() {
                        var n = this;
                        t.on(i.EVENT_GAME_INITED, (function() {
                            c.instance ? n.connectToAudioManager() : a.once(u.AudioManagerInitialized, n.connectToAudioManager, n)
                        }), this)
                    }
                    var o = n.prototype;
                    return o.connectToAudioManager = function() {
                        "undefined" != typeof GAMESNACKS && (c.instance.audioEnabled = GAMESNACKS.isAudioEnabled(), GAMESNACKS.subscribeToAudioUpdates(this.audioEnabledUpdate.bind(this)))
                    }, o.audioEnabledUpdate = function(n) {
                        c.instance.audioEnabled = n
                    }, n
                }()) || r);
            n("gameSnacksAudioController", new s);
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FinalScoreDisplay.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ScoreBoard.ts"], (function(e) {
    "use strict";
    var r, t, i, n, o, c, a, s, l;
    return {
        setters: [function(e) {
            r = e.cclegacy, t = e._decorator, i = e.Label, n = e.Component
        }, function(e) {
            o = e.applyDecoratedDescriptor, c = e.inheritsLoose, a = e.initializerDefineProperty, s = e.assertThisInitialized
        }, function(e) {
            l = e.ScoreBoard
        }],
        execute: function() {
            var p, u, y, f, d;
            r._RF.push({}, "def86SA1U5N/KypSQI85NKX", "FinalScoreDisplay", void 0);
            var S = t.ccclass,
                h = t.property;
            e("FinalScoreDisplay", (p = S("FinalScoreDisplay"), u = h(i), p((d = o((f = function(e) {
                function r() {
                    for (var r, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                    return r = e.call.apply(e, [this].concat(i)) || this, a(s(r), "scoreText", d, s(r)), r
                }
                return c(r, e), r.prototype.onEnable = function() {
                    this.scoreText.string = l.instance.score.toFixed()
                }, r
            }(n)).prototype, "scoreText", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = f)) || y));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/Droppable.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./InputEnums.ts", "./Draggable.ts", "./DropArea.ts"], (function(e) {
    "use strict";
    var r, t, i, o, n, a, s, l, p, h, d, u, g, c, D, _;
    return {
        setters: [function(e) {
            r = e.cclegacy, t = e._decorator, i = e.Collider, o = e.EventHandler, n = e.Vec3, a = e.Component
        }, function(e) {
            s = e.applyDecoratedDescriptor, l = e.inheritsLoose, p = e.initializerDefineProperty, h = e.assertThisInitialized, d = e.defineProperty, u = e.createClass
        }, function(e) {
            g = e.InputEvent, c = e.DroppableEvent
        }, function(e) {
            D = e.Draggable
        }, function(e) {
            _ = e.DropArea
        }],
        execute: function() {
            var f, A, b, E, v, y, m, C, T, I, S, x, L, w;
            r._RF.push({}, "e0197pg1alPh4ShgAIZoXQ0", "Droppable", void 0);
            var z = t.ccclass,
                V = t.property,
                F = t.requireComponent;
            e("Droppable", (f = z("Droppable"), A = F(D), b = V({
                type: i,
                visible: !0
            }), E = V({
                type: [o],
                visible: !0
            }), v = V({
                type: [o],
                visible: !0
            }), y = V({
                type: [o],
                visible: !0
            }), m = V({
                type: [o],
                visible: !0
            }), f(C = A((I = s((T = function(e) {
                function r() {
                    for (var r, t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                    return r = e.call.apply(e, [this].concat(i)) || this, p(h(r), "_collider", I, h(r)), p(h(r), "_onValidDrop", S, h(r)), p(h(r), "_onFailedDrop", x, h(r)), p(h(r), "_onEnteredADropArea", L, h(r)), p(h(r), "_onLeftAllDropArea", w, h(r)), d(h(r), "_draggable", null), d(h(r), "_dropArea", null), d(h(r), "_closeDropAreas", []), r
                }
                l(r, e);
                var t = r.prototype;
                return t.onLoad = function() {
                    this._draggable = this.node.getComponent(D)
                }, t.onEnable = function() {
                    this.node.on(g[g.Input_DragStart], this.onDragStart, this), this.node.on(g[g.Input_DragEnd], this.onDragEnd, this), this._collider.on("onTriggerEnter", this.onTriggerEnter, this), this._collider.on("onTriggerExit", this.onTriggerExit, this)
                }, t.onDisable = function() {
                    this._draggable && (this.node.off(g[g.Input_DragStart], this.onDragStart, this), this.node.off(g[g.Input_DragEnd], this.onDragEnd, this)), this._collider && (this._collider.off("onTriggerEnter", this.onTriggerEnter, this), this._collider.off("onTriggerExit", this.onTriggerExit, this))
                }, t.onDragStart = function(e) {
                    this._closeDropAreas = [], this.dropArea = null
                }, t.onDragEnd = function(e) {
                    this.dropArea ? (this.dropArea.drop(this), this.node.emit(c[c.Droppable_ValidDrop]), o.emitEvents(this._onValidDrop)) : (this.node.emit(c[c.Droppable_InvalidDrop]), o.emitEvents(this._onFailedDrop)), this.dropArea = null
                }, t.onTriggerEnter = function(e) {
                    if (this._draggable.isDragging()) {
                        var r = e.otherCollider.node.getComponent(_);
                        if (r && r.enabled) - 1 == this._closeDropAreas.findIndex((function(e) {
                            return e == r
                        })) && (this._closeDropAreas.push(r), this.dropArea = this.getClosestDropArea())
                    }
                }, t.onTriggerExit = function(e) {
                    if (this._draggable.isDragging()) {
                        var r = e.otherCollider.node.getComponent(_);
                        if (r) {
                            var t = this._closeDropAreas.findIndex((function(e) {
                                return e == r
                            }));
                            t > -1 && (this._closeDropAreas.splice(t, 1), this.dropArea = this.getClosestDropArea())
                        }
                    }
                }, t.getClosestDropArea = function() {
                    for (var e = null, r = Number.MAX_VALUE, t = 0; t < this._closeDropAreas.length; t++) {
                        var i = new n;
                        n.subtract(i, this._closeDropAreas[t].node.position, this.node.position), i.lengthSqr() < r && (e = this._closeDropAreas[t], r = i.lengthSqr())
                    }
                    return e
                }, u(r, [{
                    key: "dropArea",
                    get: function() {
                        return this._dropArea
                    },
                    set: function(e) {
                        if (this._dropArea != e) {
                            var r = !0;
                            null != this._dropArea && (this._dropArea.setUntargetedBy(this), r = !1), this._dropArea = e, null != this._dropArea ? (this._dropArea.setTargetedBy(this), r && (this.node.emit(c[c.Droppable_EnteredADropArea]), o.emitEvents(this._onEnteredADropArea))) : r || (this.node.emit(c[c.Droppable_LeftAllDropAreas]), o.emitEvents(this._onLeftAllDropArea))
                        }
                    }
                }]), r
            }(a)).prototype, "_collider", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = s(T.prototype, "_onValidDrop", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), x = s(T.prototype, "_onFailedDrop", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), L = s(T.prototype, "_onEnteredADropArea", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), w = s(T.prototype, "_onLeftAllDropArea", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), C = T)) || C) || C));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/KitchenBalconyLoader.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./Restaurant.ts", "./LevelLoader.ts", "./KitchenTool.ts", "./KitchenBalcony.ts", "./KitchenToolList.ts", "./TutorialDirector.ts", "./TutorialDisplayShower.ts"], (function(t) {
    "use strict";
    var e, o, n, a, i, r, s, l, c, d, u, h, L, f, p, y, g, v, T, D, K;
    return {
        setters: [function(t) {
            e = t.cclegacy, o = t._decorator, n = t.Component
        }, function(t) {
            a = t.applyDecoratedDescriptor, i = t.inheritsLoose, r = t.initializerDefineProperty, s = t.assertThisInitialized, l = t.defineProperty
        }, function(t) {
            c = t.logger, d = t.LogCategory, u = t.LogType
        }, function(t) {
            h = t.projectEvent
        }, function(t) {
            L = t.DataLoadingEvent, f = t.LevelLoadingEvent
        }, function(t) {
            p = t.Restaurant
        }, function(t) {
            y = t.LevelLoader
        }, function(t) {
            g = t.KitchenTool
        }, function(t) {
            v = t.KitchenBalcony
        }, function(t) {
            T = t.kitchenToolsList
        }, function(t) {
            D = t.TutorialDirector
        }, function(t) {
            K = t.TutorialDisplayShower
        }],
        execute: function() {
            var m, I, b, R, w;
            e._RF.push({}, "e08e8Fw0K9JJ5oodA6EwbcD", "KitchenBalconyLoader", void 0);
            var E = o.ccclass,
                B = o.property;
            t("KitchenBalconyLoader", (m = E("KitchenBalconyLoader"), I = B([v]), m((w = a((R = function(t) {
                function e() {
                    for (var e, o = arguments.length, n = new Array(o), a = 0; a < o; a++) n[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(n)) || this, r(s(e), "balconies", w, s(e)), l(s(e), "levelDataLoaded", !1), e
                }
                i(e, t);
                var o = e.prototype;
                return o.onLoad = function() {
                    h.on(L.KitchenToolsLoaded, this.tryToLoadKitchenTools, this), h.on(L.LevelDataLoaded, this.onLevelDataLoaded, this), h.on(f.RestaurantInstantiated, this.onRestaurantLoaded, this), this.levelDataLoaded = null != y.instance.loadedLevel
                }, o.onDestroy = function() {
                    h.off(L.KitchenToolsLoaded, this.tryToLoadKitchenTools, this), h.off(L.LevelDataLoaded, this.onLevelDataLoaded, this), h.off(f.RestaurantInstantiated, this.onRestaurantLoaded, this)
                }, o.onLevelDataLoaded = function() {
                    this.levelDataLoaded = !0
                }, o.onRestaurantLoaded = function() {
                    this.tryToLoadKitchenTools()
                }, o.tryToLoadKitchenTools = function() {
                    this.levelDataLoaded && p.instance && T.isDataLoaded() && this.placeKitchenTools()
                }, o.placeKitchenTools = function() {
                    for (var t = y.instance.loadedLevel.getKitchenData(), e = 0; e < t.length; e++) {
                        var o = T.getToolPrefabById(t.getItem(e).toolId);
                        if (null != o) {
                            if (y.instance.usingSuperTools) {
                                var n = o.data.getComponent(g).getSuperVersion();
                                n && (c.log("Replacing " + o.name + " for " + n.name), o = n)
                            }
                            var a = this.balconies[t.getItem(e).balconyId].setTool(o);
                            if (t.getItem(e).tutorialData) {
                                var i = a.getComponent(K);
                                i ? D.instance.addTutorialEntry(i, t.getItem(e).tutorialData.priority) : c.log(a.name + " is missing a TutorialDisplayShower component", d.Generic, u.Error)
                            } else {
                                var r = a.getComponent(K);
                                r && r.alwaysShow && D.instance.addTutorialEntry(r)
                            }
                        }
                    }
                    h.emit(f.KitchenToolsInstantiated)
                }, e
            }(n)).prototype, "balconies", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), b = R)) || b));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelTimelineEnums.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }],
        execute: function() {
            var i;
            e("LevelTimelineEvent", void 0), n._RF.push({}, "e3fb6jeBjhL0bXFH36y6YnQ", "LevelTimelineEnums", void 0),
                function(e) {
                    e.TimeLineEntryUpdated = "OnLevelTimelineEntryUpdated"
                }(i || (i = e("LevelTimelineEvent", {}))), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/TimerDisplay.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./UITrackWorldNode.ts"], (function(i) {
    "use strict";
    var e, r, t, n, o, l, a, m, s, u, g;
    return {
        setters: [function(i) {
            e = i.cclegacy, r = i._decorator, t = i.Sprite, n = i.animation, o = i.Component
        }, function(i) {
            l = i.applyDecoratedDescriptor, a = i.inheritsLoose, m = i.initializerDefineProperty, s = i.assertThisInitialized, u = i.defineProperty
        }, function(i) {
            g = i.UITrackWorldNode
        }],
        execute: function() {
            var p, c, T, h, f, d, y, _, b, v, w, z, A, S;
            e._RF.push({}, "e4aa3432gJLjoztkggYhuXw", "TimerDisplay", void 0);
            var C = r.ccclass,
                D = r.property,
                F = r.requireComponent;
            i("TimerDisplay", (p = C("TimerDisplay"), c = F(g), T = D({
                visible: !0,
                group: {
                    id: "settings",
                    name: "Settings"
                }
            }), h = D({
                type: t,
                visible: !0,
                group: {
                    id: "settings",
                    name: "Settings"
                },
                formerlySerializedAs: "timerFill"
            }), f = D({
                type: n.AnimationController,
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                },
                formerlySerializedAs: "animController"
            }), d = D({
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                },
                formerlySerializedAs: "showTimerTrigger"
            }), y = D({
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                },
                formerlySerializedAs: "timerOverTrigger"
            }), p(_ = c((v = l((b = function(i) {
                function e() {
                    for (var e, r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
                    return e = i.call.apply(i, [this].concat(t)) || this, m(s(e), "_fill", v, s(e)), m(s(e), "_timerFill", w, s(e)), m(s(e), "_animController", z, s(e)), m(s(e), "_showTimerTrigger", A, s(e)), m(s(e), "_timerOverTrigger", S, s(e)), u(s(e), "remainingTime", 0), u(s(e), "totalTime", 0), e
                }
                a(e, i);
                var r = e.prototype;
                return r.update = function(i) {
                    this.remainingTime > 0 && (this.remainingTime = Math.max(0, this.remainingTime - i), this.updateTimer(), 0 == this.remainingTime && this._animController.setValue(this._timerOverTrigger, !0))
                }, r.showTimer = function(i, e) {
                    void 0 === e && (e = -1), this.totalTime = i, this.remainingTime = e > -1 ? e : i, this.updateTimer(), this._animController.setValue(this._showTimerTrigger, !0)
                }, r.updateTimer = function() {
                    this._fill ? this._timerFill.fillRange = 1 - this.remainingTime / this.totalTime : this._timerFill.fillRange = this.remainingTime / this.totalTime
                }, e
            }(o)).prototype, "_fill", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), w = l(b.prototype, "_timerFill", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = l(b.prototype, "_animController", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = l(b.prototype, "_showTimerTrigger", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "ShowTimer"
                }
            }), S = l(b.prototype, "_timerOverTrigger", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "TimerOver"
                }
            }), _ = b)) || _) || _));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/GameTimerDisplay.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./AudioManager.ts"], (function(e) {
    "use strict";
    var i, t, r, n, a, o, s, l, m, u, c, d, p, f, h, b;
    return {
        setters: [function(e) {
            i = e.cclegacy, t = e._decorator, r = e.Label, n = e.animation, a = e.Prefab, o = e.EventHandler, s = e.Component
        }, function(e) {
            l = e.GameTimerEvent, m = e.GameEvent
        }, function(e) {
            u = e.applyDecoratedDescriptor, c = e.inheritsLoose, d = e.initializerDefineProperty, p = e.assertThisInitialized, f = e.defineProperty
        }, function(e) {
            h = e.projectEvent
        }, function(e) {
            b = e.AudioManager
        }],
        execute: function() {
            var _, v, y, S, g, T, A, w, P, z, C, G, L, U, k, W, E, F, D, O, B, V, K, j, x, H, M, I, R;
            i._RF.push({}, "e4d3fwgIHNLiYECGJxs56Ao", "GameTimerDisplay", void 0);
            var J = t.ccclass,
                N = t.property;
            e("GameTimerDisplay", (_ = J("GameTimerDisplay"), v = N({
                type: r,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                formerlySerializedAs: "timerLabel"
            }), y = N({
                type: n.AnimationController,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                formerlySerializedAs: "animator"
            }), S = N({
                visible: !0,
                group: {
                    id: "showTimer",
                    name: "Show Timer"
                },
                tooltip: "This parameter is set to false on time over.",
                formerlySerializedAs: "showParameter"
            }), g = N({
                type: a,
                visible: !0,
                group: {
                    id: "start",
                    name: "Start"
                },
                formerlySerializedAs: "startTimerAudio"
            }), T = N({
                visible: !0,
                group: {
                    id: "start",
                    name: "Start"
                },
                formerlySerializedAs: "startParameter"
            }), A = N({
                type: a,
                visible: !0,
                group: {
                    id: "tenSeconds",
                    name: "10s Warning"
                }
            }), w = N({
                visible: !0,
                group: {
                    id: "tenSeconds",
                    name: "10s Warning"
                }
            }), P = N({
                type: [o],
                visible: !0,
                group: {
                    id: "tenSeconds",
                    name: "10s Warning"
                }
            }), z = N({
                type: a,
                visible: !0,
                group: {
                    id: "fiveSeconds",
                    name: "5s Warning"
                },
                formerlySerializedAs: "fiveSecondsAudio"
            }), C = N({
                visible: !0,
                group: {
                    id: "fiveSeconds",
                    name: "5s Warning"
                }
            }), G = N({
                type: [o],
                visible: !0,
                group: {
                    id: "fiveSeconds",
                    name: "5s Warning"
                }
            }), L = N({
                type: a,
                visible: !0,
                group: {
                    id: "end",
                    name: "Time Over"
                },
                formerlySerializedAs: "timesUpAudio"
            }), U = N({
                type: [o],
                visible: !0,
                group: {
                    id: "end",
                    name: "Time Over"
                }
            }), _((E = u((W = function(e) {
                function i() {
                    for (var i, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return i = e.call.apply(e, [this].concat(r)) || this, d(p(i), "_timerLabel", E, p(i)), d(p(i), "_animator", F, p(i)), d(p(i), "_showAnimatorParameter", D, p(i)), d(p(i), "_startTimerAudio", O, p(i)), d(p(i), "_startAnimatorParameter", B, p(i)), d(p(i), "_tenSecondsAudio", V, p(i)), d(p(i), "_tenSecondsAnimatorParameter", K, p(i)), d(p(i), "_onTenSecondsLeft", j, p(i)), d(p(i), "_fiveSecondsAudio", x, p(i)), d(p(i), "_fiveSecondsAnimatorParameter", H, p(i)), d(p(i), "_onFiveSecondsLeft", M, p(i)), d(p(i), "_timesUpAudio", I, p(i)), d(p(i), "_onTimesUp", R, p(i)), f(p(i), "_timerSetupCallback", void 0), f(p(i), "_timerUpdateCallback", void 0), f(p(i), "_timerOverCallback", void 0), f(p(i), "_startedTenSecondsWarning", !1), f(p(i), "_startedFiveSecondsWarning", !1), i
                }
                c(i, e);
                var t = i.prototype;
                return t.onEnable = function() {
                    var e = this;
                    this._timerSetupCallback = h.on(l.GameTimerSet, (function(i) {
                        e.setupTimer(i)
                    }), this)
                }, t.onDisable = function() {
                    h.off(l.GameTimerSet, this._timerSetupCallback, this), h.off(m.StartPlaying, this.showTimer, this), h.off(l.GameTimeStart, this.startTimer, this), this._timerUpdateCallback && h.off(l.GameTimeUpdate, this._timerUpdateCallback, this), this._timerOverCallback && h.off(l.GameTimeOver, this._timerOverCallback, this)
                }, t.setupTimer = function(e) {
                    var i = this;
                    this.updateTimer(e), h.on(m.StartPlaying, this.showTimer, this), h.on(l.GameTimeStart, this.startTimer, this), this._timerUpdateCallback = h.on(l.GameTimeUpdate, (function(e) {
                        i.updateTimer(e)
                    }), this), this._timerOverCallback = h.on(l.GameTimeOver, (function(e) {
                        i.hideTimer(e), o.emitEvents(i._onTimesUp)
                    }), this)
                }, t.showTimer = function() {
                    this._animator.setValue(this._showAnimatorParameter, !0)
                }, t.startTimer = function() {
                    var e;
                    (this._animator.setValue(this._startAnimatorParameter, !0), this._startTimerAudio) && (null === (e = b.instance) || void 0 === e || e.playByKey(this._startTimerAudio))
                }, t.updateTimer = function(e) {
                    if (this._timerLabel.string = e.toFixed(), !this._startedTenSecondsWarning && e <= 10) {
                        var i;
                        if (this._startedTenSecondsWarning = !0, this._tenSecondsAudio) null === (i = b.instance) || void 0 === i || i.playByKey(this._tenSecondsAudio);
                        this._tenSecondsAnimatorParameter.length > 0 && this._animator.setValue(this._tenSecondsAnimatorParameter, !0), o.emitEvents(this._onTenSecondsLeft)
                    } else if (!this._startedFiveSecondsWarning && e <= 5) {
                        var t;
                        if (this._startedFiveSecondsWarning = !0, this._fiveSecondsAudio) null === (t = b.instance) || void 0 === t || t.playByKey(this._fiveSecondsAudio);
                        this._fiveSecondsAnimatorParameter.length > 0 && this._animator.setValue(this._fiveSecondsAnimatorParameter, !0), o.emitEvents(this._onFiveSecondsLeft)
                    }
                }, t.hideTimer = function(e) {
                    var i;
                    (this.updateTimer(e), this._animator.setValue(this._showAnimatorParameter, !1), this._timesUpAudio) && (null === (i = b.instance) || void 0 === i || i.playByKey(this._timesUpAudio))
                }, i
            }(s)).prototype, "_timerLabel", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = u(W.prototype, "_animator", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = u(W.prototype, "_showAnimatorParameter", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "showTimer"
                }
            }), O = u(W.prototype, "_startTimerAudio", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), B = u(W.prototype, "_startAnimatorParameter", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "startTimer"
                }
            }), V = u(W.prototype, "_tenSecondsAudio", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = u(W.prototype, "_tenSecondsAnimatorParameter", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), j = u(W.prototype, "_onTenSecondsLeft", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), x = u(W.prototype, "_fiveSecondsAudio", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = u(W.prototype, "_fiveSecondsAnimatorParameter", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }), M = u(W.prototype, "_onFiveSecondsLeft", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), I = u(W.prototype, "_timesUpAudio", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = u(W.prototype, "_onTimesUp", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), k = W)) || k));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/MenuScreen.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(n) {
    "use strict";
    var e, t, o, r, i, a, l, u;
    return {
        setters: [function(n) {
            e = n.cclegacy, t = n._decorator, o = n.animation, r = n.Component
        }, function(n) {
            i = n.applyDecoratedDescriptor, a = n.inheritsLoose, l = n.initializerDefineProperty, u = n.assertThisInitialized
        }],
        execute: function() {
            var c, s, p, h, m, f, y;
            e._RF.push({}, "e60bd15qtBGLalftdlf/49W", "MenuScreen", void 0);
            var d = t.ccclass,
                w = t.property;
            n("MenuScreen", (c = d("MenuScreen"), s = w({
                type: o.AnimationController,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), p = w({
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), c((f = i((m = function(n) {
                function e() {
                    for (var e, t = arguments.length, o = new Array(t), r = 0; r < t; r++) o[r] = arguments[r];
                    return e = n.call.apply(n, [this].concat(o)) || this, l(u(e), "animationController", f, u(e)), l(u(e), "showBoolean", y, u(e)), e
                }
                a(e, n);
                var t = e.prototype;
                return t.showScreen = function() {
                    null != this.animationController && this.animationController.setValue(this.showBoolean, !0)
                }, t.hideScreen = function() {
                    null != this.animationController && this.animationController.setValue(this.showBoolean, !1)
                }, e
            }(r)).prototype, "animationController", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = i(m.prototype, "showBoolean", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "show"
                }
            }), h = m)) || h));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AudioDataLoader.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./AudioManager.ts", "./AudioData.ts"], (function(t) {
    "use strict";
    var a, e, i, o, n, r, u, s, c, d, l;
    return {
        setters: [function(t) {
            a = t.cclegacy, e = t._decorator, i = t.Prefab, o = t.Component
        }, function(t) {
            n = t.applyDecoratedDescriptor, r = t.inheritsLoose, u = t.initializerDefineProperty, s = t.assertThisInitialized, c = t.defineProperty
        }, function(t) {
            d = t.AudioManager
        }, function(t) {
            l = t.AudioData
        }],
        execute: function() {
            var p, f, y, D, _;
            a._RF.push({}, "e638ajtZ9xGNJqPUA/g/vww", "AudioDataLoader", void 0);
            var h = e.ccclass,
                A = e.property;
            t("AudioDataLoader", (p = h("AudioDataLoader"), f = A({
                type: i,
                visible: !0,
                formerlySerializedAs: "key"
            }), p((_ = n((D = function(t) {
                function a() {
                    for (var a, e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                    return a = t.call.apply(t, [this].concat(i)) || this, u(s(a), "_audioData", _, s(a)), c(s(a), "_data", null), a
                }
                r(a, t);
                var e = a.prototype;
                return e.onLoad = function() {
                    this._data = this._audioData.data.getComponent(l), d.instance.load(this._data)
                }, e.onDestroy = function() {
                    d.instance && d.instance.unload(this._data)
                }, a
            }(o)).prototype, "_audioData", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), y = D)) || y));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/CustomerPlacingData.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./CustomerData.ts"], (function(t) {
    "use strict";
    var e, n, i, s;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }, function(t) {
            n = t.createClass, i = t.defineProperty
        }, function(t) {
            s = t.CustomerData
        }],
        execute: function() {
            e._RF.push({}, "e6515GqoddKgoUytSDFHENI", "CustomerPlacingData", void 0);
            t("CustomerPlacingData", function() {
                function t(t) {
                    i(this, "_minInterval", void 0), i(this, "_maxInterval", void 0), i(this, "_maxSimultaneous", void 0), i(this, "_customers", []), i(this, "_totalSelectionWeight", 0), this._minInterval = t.minInterval, this._maxInterval = t.maxInterval, this._maxSimultaneous = t.maxSimultaneous;
                    for (var e = t.customers.length, n = 0; n < e; n++) this._customers.push(new s(t.customers[n])), this._totalSelectionWeight += this._customers[n].selectionWeight
                }
                return t.prototype.getCustomer = function(t) {
                    return t >= 0 && t < this._customers.length ? this._customers[t] : null
                }, n(t, [{
                    key: "minInterval",
                    get: function() {
                        return this._minInterval
                    }
                }, {
                    key: "maxInterval",
                    get: function() {
                        return this._maxInterval
                    }
                }, {
                    key: "maxSimultaneous",
                    get: function() {
                        return this._maxSimultaneous
                    }
                }, {
                    key: "totalCustomers",
                    get: function() {
                        return this._customers.length
                    }
                }, {
                    key: "totalSelectionWeight",
                    get: function() {
                        return this._totalSelectionWeight
                    }
                }]), t
            }());
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ScoreBoard.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./ProjectEvent.ts", "./SaveGame.ts", "./LevelLoader.ts", "./LevelSequenceController.ts", "./ScoreController.ts", "./ScoreEnums.ts"], (function(e) {
    "use strict";
    var t, n, o, r, i, c, a, s, l, u, d, v, f, h, g, p, L, S, y;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, o = e.Component
        }, function(e) {
            r = e.GameEvent
        }, function(e) {
            i = e.defineProperty, c = e.applyDecoratedDescriptor, a = e.inheritsLoose, s = e.initializerDefineProperty, l = e.assertThisInitialized, u = e.createClass
        }, function(e) {
            d = e.logger, v = e.LogCategory, f = e.LogType
        }, function(e) {
            h = e.projectEvent
        }, function(e) {
            g = e.saveGame
        }, function(e) {
            p = e.LevelLoader
        }, function(e) {
            L = e.LevelSequenceController
        }, function(e) {
            S = e.ScoreController
        }, function(e) {
            y = e.ScoreEvent
        }],
        execute: function() {
            var m, _, x, E, k, G, M;
            t._RF.push({}, "e8084SQga9M8YefTfGP3XdE", "ScoreBoard", void 0);
            var T = n.ccclass,
                b = n.property;
            e("ScoreBoard", (m = T("ScoreBoard"), _ = b({
                visible: !0,
                min: 1,
                max: 3,
                step: 1
            }), m((M = G = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this, s(l(t), "_starsNeededForVictory", k, l(t)), i(l(t), "_totalScore", 0), t
                }
                a(t, e);
                var n = t.prototype;
                return n.onLoad = function() {
                    null == t._instance ? t._instance = this : this.node.destroy()
                }, n.onEnable = function() {
                    h.on(r.EndGame, this.onGameOver, this)
                }, n.onDisable = function() {
                    h.off(r.EndGame, this.onGameOver, this)
                }, n.onDestroy = function() {
                    t._instance == this && (t._instance = null)
                }, n.addScore = function(e, t, n) {
                    void 0 === n && (n = 1);
                    var o = e * n * S.instance.getScoreMultiplier(t);
                    return o = Math.floor(o), this._totalScore += o, o
                }, n.onGameOver = function() {
                    if (p.instance.ranked) {
                        var e = p.instance.loadedLevel;
                        if (this.score > g.getLevelMaxScore(e))
                            if (g.startTransaction()) {
                                if (g.setLevelMaxScore(p.instance.loadedLevel, this.score), this.victory) {
                                    var t = L.instance.levels.getLevelIndex(e) + 1;
                                    g.getMaxLevelUnlockedIndex() < t && (t >= L.instance.endlessLevelUnlockThreshold && g.getMaxLevelUnlockedIndex() < L.instance.endlessLevelUnlockThreshold && h.emit(r.EndlessLevelsUnlocked), g.setMaxLevelUnlockedIndex(t))
                                }
                                g.commitTransaction(), h.emit(y.TotalScoreUpdated, this.getTotalScore())
                            } else d.log("Error saving player score!", v.Gameplay, f.Error)
                    }
                }, n.getTotalScore = function() {
                    for (var e = 0, t = L.instance.levels.length, n = 0; n < t; n++) e += g.getLevelMaxScore(L.instance.levels.getLevelByIndex(n));
                    return e
                }, u(t, [{
                    key: "score",
                    get: function() {
                        return this._totalScore
                    }
                }, {
                    key: "victory",
                    get: function() {
                        return this.score >= p.instance.loadedLevel.getStarScore(Math.floor(this._starsNeededForVictory) - 1)
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), t
            }(o), i(G, "_instance", null), k = c((E = M).prototype, "_starsNeededForVictory", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }), x = E)) || x));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/DropArea.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./InputEnums.ts"], (function(e) {
    "use strict";
    var t, r, n, o, i, a, p, s, c;
    return {
        setters: [function(e) {
            t = e.cclegacy, r = e._decorator, n = e.EventHandler, o = e.Component
        }, function(e) {
            i = e.applyDecoratedDescriptor, a = e.inheritsLoose, p = e.initializerDefineProperty, s = e.assertThisInitialized
        }, function(e) {
            c = e.DropAreaEvent
        }],
        execute: function() {
            var l, u, d, f, D, g, _, b, v;
            t._RF.push({}, "f05cdFrYUFEhLDfRJevq1qh", "DropArea", void 0);
            var y = r.ccclass,
                h = r.property;
            e("DropArea", (l = y("DropArea"), u = h({
                type: [n],
                visible: !0
            }), d = h({
                type: [n],
                visible: !0
            }), f = h({
                type: [n],
                visible: !0
            }), l((_ = i((g = function(e) {
                function t() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(n)) || this, p(s(t), "_onTargeted", _, s(t)), p(s(t), "_onUntargeted", b, s(t)), p(s(t), "_onDroppableDropped", v, s(t)), t
                }
                a(t, e);
                var r = t.prototype;
                return r.setTargetedBy = function(e) {
                    this.node.emit(c[c.DropArea_Targeted], e), n.emitEvents(this._onTargeted, e)
                }, r.setUntargetedBy = function(e) {
                    this.node.emit(c[c.DropArea_Untargeted], e), n.emitEvents(this._onUntargeted, e)
                }, r.drop = function(e) {
                    this.node.emit(c[c.DropArea_Dropped], e), n.emitEvents(this._onDroppableDropped, e)
                }, t
            }(o)).prototype, "_onTargeted", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), b = i(g.prototype, "_onUntargeted", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), v = i(g.prototype, "_onDroppableDropped", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), D = g)) || D));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/FoodOrder.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./FoodItemList.ts"], (function(t) {
    "use strict";
    var e, i, s, n, o, r;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }, function(t) {
            i = t.createClass, s = t.defineProperty
        }, function(t) {
            n = t.projectEvent
        }, function(t) {
            o = t.DataLoadingEvent
        }, function(t) {
            r = t.foodItemsList
        }],
        execute: function() {
            e._RF.push({}, "f13664spfVHjJ8spAKO6HNh", "FoodOrder", void 0);
            t("FoodOrder", function() {
                function t(t) {
                    s(this, "itemsIds", []), s(this, "_items", []), s(this, "_timetoWait", -1), s(this, "_basePrice", -1), s(this, "_selectionWeight", 1), t && (this.itemsIds = t.itemsIds, r.isDataLoaded() ? this.loadItemsReferences() : n.once(o.FoodItemsLoaded, this.loadItemsReferences, this), t.selectionWeight && (this._selectionWeight = t.selectionWeight))
                }
                var e = t.prototype;
                return e.getItem = function(t) {
                    return this._items[t]
                }, e.removeItem = function(t) {
                    var e = this.indexOf(t);
                    return e > -1 ? (this._items.splice(e, 1), e) : -1
                }, e.contains = function(t) {
                    return this.indexOf(t) > -1
                }, e.indexOf = function(t) {
                    return this._items.findIndex((function(e) {
                        return e.equals(t)
                    }))
                }, e.copy = function() {
                    var e = new t;
                    return e._items = this._items.slice(), e
                }, e.loadItemsReferences = function() {
                    for (var t = 0; t < this.itemsIds.length; t++) {
                        var e = r.getFoodItemById(this.itemsIds[t]);
                        null != e && this._items.push(e)
                    }
                }, i(t, [{
                    key: "timeToWait",
                    get: function() {
                        if (-1 === this._timetoWait) {
                            this._timetoWait = 0;
                            for (var t = 0; t < this._items.length; t++) this._timetoWait += this._items[t].getTimeToWait()
                        }
                        return this._timetoWait
                    }
                }, {
                    key: "basePrice",
                    get: function() {
                        if (-1 === this._basePrice) {
                            this._basePrice = 0;
                            for (var t = 0; t < this._items.length; t++) this._basePrice += this._items[t].getPrice()
                        }
                        return this._timetoWait
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this._items.length
                    }
                }, {
                    key: "selectionWeight",
                    get: function() {
                        return this._selectionWeight
                    }
                }]), t
            }());
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LocalEventHandler.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var t, n, r, a, c, o, i, s;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, r = e.EventTarget, a = e.Component
        }, function(e) {
            c = e.inheritsLoose, o = e.defineProperty, i = e.assertThisInitialized, s = e.createClass
        }],
        execute: function() {
            var l;
            t._RF.push({}, "f1573k16KhAgpOhRKBn2ijg", "LocalEventHandler", void 0);
            var u = n.ccclass;
            e("LocalEventHandler", u("LocalEventHandler")(l = function(e) {
                function t() {
                    for (var t, n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(a)) || this, o(i(t), "_eventTarget", new r), t
                }
                return c(t, e), s(t, [{
                    key: "eventTarget",
                    get: function() {
                        return this._eventTarget
                    }
                }]), t
            }(a)) || l);
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/PlayerLives.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./DataLoadingEnums.ts", "./LevelLoader.ts"], (function(e) {
    "use strict";
    var t, i, n, r, s, a, o, c, v, u, L, l, d;
    return {
        setters: [function(e) {
            t = e.cclegacy, i = e._decorator, n = e.Component
        }, function(e) {
            r = e.CustomerEvent, s = e.PlayerLivesEvent
        }, function(e) {
            a = e.applyDecoratedDescriptor, o = e.inheritsLoose, c = e.initializerDefineProperty, v = e.assertThisInitialized, u = e.defineProperty
        }, function(e) {
            L = e.projectEvent
        }, function(e) {
            l = e.DataLoadingEvent
        }, function(e) {
            d = e.LevelLoader
        }],
        execute: function() {
            var f, h, p, y, _;
            t._RF.push({}, "f1febU5cbxPkLJ3vK1beU5C", "PlayerLives", void 0);
            var P = i.ccclass,
                m = i.property;
            e("PlayerLives", (f = P("PlayerLives"), h = m({
                visible: !0
            }), f((_ = a((y = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(n)) || this, c(v(t), "_initialLives", _, v(t)), u(v(t), "_currentLives", void 0), t
                }
                o(t, e);
                var i = t.prototype;
                return i.onLoad = function() {
                    L.on(l.LevelDataLoaded, this.onLevelDataLoaded, this)
                }, i.onDestroy = function() {
                    L.off(l.LevelDataLoaded, this.onLevelDataLoaded, this), L.off(r.CustomerFailed, this.subtractLife, this)
                }, i.addLife = function(e) {
                    void 0 === e && (e = 1), this._currentLives += e, L.emit(s.PlayerLivesUpdate, this._currentLives)
                }, i.subtractLife = function(e) {
                    void 0 === e && (e = 1), this._currentLives -= e, this._currentLives > 0 ? L.emit(s.PlayerLivesUpdate, this._currentLives) : (this._currentLives = 0, L.emit(s.PlayerLivesOver))
                }, i.onLevelDataLoaded = function() {
                    d.instance.loadedLevel.isEndless() && (this._currentLives = this._initialLives, L.on(r.CustomerFailed, this.subtractLife, this), L.emit(s.PlayerLivesSet, this._currentLives))
                }, t
            }(n)).prototype, "_initialLives", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 3
                }
            }), p = y)) || p));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SaveGameData.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js"], (function(e) {
    "use strict";
    var l, t;
    return {
        setters: [function(e) {
            l = e.cclegacy
        }, function(e) {
            t = e.defineProperty
        }],
        execute: function() {
            l._RF.push({}, "f393dWTfgdGlq+fGd3USx9y", "SaveGameData", void 0);
            e("SaveGameData", function() {
                function e(e) {
                    void 0 === e && (e = null), t(this, "lastPlayedLevel", ""), t(this, "levelsMaxScore", new Map), t(this, "maxUnlockedLevel", 0), null == e ? (this.lastPlayedLevel = "", this.levelsMaxScore = new Map, this.maxUnlockedLevel = 0) : (this.lastPlayedLevel = e.lastPlayedLevel, this.levelsMaxScore = e.levelsMaxScore, this.maxUnlockedLevel = e.maxUnlockedLevel)
                }
                var l = e.prototype;
                return l.getLastPlayedLevelName = function() {
                    return this.lastPlayedLevel
                }, l.setLastPlayedLevelName = function(e) {
                    this.lastPlayedLevel = e
                }, l.getlevelMaxScore = function(e) {
                    return this.levelsMaxScore.has(e) ? this.levelsMaxScore.get(e) : 0
                }, l.setlevelMaxScore = function(e, l) {
                    this.levelsMaxScore.set(e, l)
                }, l.getMaxUnlockedLevel = function() {
                    return this.maxUnlockedLevel
                }, l.setMaxUnlockedLevel = function(e) {
                    this.maxUnlockedLevel = e
                }, e
            }());
            l._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelSequence.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./LevelData.ts"], (function(e) {
    "use strict";
    var t, n, l, i, s, r, o, a, u, v, c, h, g, L, f;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, l = e.JsonAsset, i = e.randomRangeInt, s = e.Component
        }, function(e) {
            r = e.applyDecoratedDescriptor, o = e.inheritsLoose, a = e.initializerDefineProperty, u = e.assertThisInitialized, v = e.defineProperty, c = e.createClass
        }, function(e) {
            h = e.logger, g = e.LogCategory, L = e.LogType
        }, function(e) {
            f = e.LevelData
        }],
        execute: function() {
            var d, p, _, y, x;
            t._RF.push({}, "f4e28jhKYFNMKra4PhiF+zT", "LevelSequence", void 0);
            var D = n.ccclass,
                I = n.property;
            e("LevelSequence", (d = D("LevelSequence"), p = I({
                type: l,
                visible: !0
            }), d((x = r((y = function(e) {
                function t() {
                    for (var t, n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(l)) || this, a(u(t), "_levelsList", x, u(t)), v(u(t), "_levels", []), t
                }
                o(t, e);
                var n = t.prototype;
                return n.loadData = function() {
                    this.loadLevelsData()
                }, n.isDataLoaded = function() {
                    return this._levels.length == this._levelsList.length
                }, n.getLevelByIndex = function(e) {
                    return e >= 0 && e < this._levels.length ? this._levels[e] : (h.log("Index " + e + " is not a valid level index!", g.Generic, L.Error), null)
                }, n.getLevelIndex = function(e) {
                    return this._levels.findIndex((function(t) {
                        return t === e
                    }))
                }, n.getNextLevel = function(e) {
                    var t = this.getLevelIndex(e);
                    return t > -1 && t < this._levels.length - 1 ? this.getLevelByIndex(t + 1) : null
                }, n.getRandomLevel = function() {
                    return this._levels[i(0, this._levels.length)]
                }, n.loadLevelsData = function() {
                    this._levels = [];
                    for (var e = 0; e < this._levelsList.length; e++) this._levels.push(new f(this._levelsList[e].name, this._levelsList[e].json))
                }, c(t, [{
                    key: "length",
                    get: function() {
                        return this._levels.length
                    }
                }]), t
            }(s)).prototype, "_levelsList", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), _ = y)) || _));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/EndlessLevelsUnlocked.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts"], (function(e) {
    "use strict";
    var n, t, s, o, l, i, r, c, d, u;
    return {
        setters: [function(e) {
            n = e.cclegacy, t = e._decorator, s = e.Node, o = e.Component
        }, function(e) {
            l = e.GameEvent
        }, function(e) {
            i = e.applyDecoratedDescriptor, r = e.inheritsLoose, c = e.initializerDefineProperty, d = e.assertThisInitialized
        }, function(e) {
            u = e.projectEvent
        }],
        execute: function() {
            var a, v, p, f, E;
            n._RF.push({}, "f5942eggxRLHazgWnR/pbVv", "EndlessLevelsUnlocked", void 0);
            var L = t.ccclass,
                h = t.property;
            e("EndlessLevelsUnlocked", (a = L("EndlessLevelsUnlocked"), v = h({
                type: s,
                visible: !0
            }), a((E = i((f = function(e) {
                function n() {
                    for (var n, t = arguments.length, s = new Array(t), o = 0; o < t; o++) s[o] = arguments[o];
                    return n = e.call.apply(e, [this].concat(s)) || this, c(d(n), "_endlessModeButton", E, d(n)), n
                }
                r(n, e);
                var t = n.prototype;
                return t.onLoad = function() {
                    u.on(l.EndlessLevelsUnlocked, this.onEndlessLevelsUnlocked, this)
                }, t.onDestroy = function() {
                    u.off(l.EndlessLevelsUnlocked, this.onEndlessLevelsUnlocked, this)
                }, t.onEndlessLevelsUnlocked = function() {
                    this._endlessModeButton.active = !0
                }, n
            }(o)).prototype, "_endlessModeButton", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), p = f)) || p));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/UITrackWorldNode.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./MainCamera.ts"], (function(t) {
    "use strict";
    var e, i, r, o, a, n, s, c, l, u, p;
    return {
        setters: [function(t) {
            e = t.cclegacy, i = t._decorator, r = t.Node, o = t.Vec3, a = t.Component
        }, function(t) {
            n = t.applyDecoratedDescriptor, s = t.inheritsLoose, c = t.initializerDefineProperty, l = t.assertThisInitialized, u = t.defineProperty
        }, function(t) {
            p = t.MainCamera
        }],
        execute: function() {
            var d, f, h, y, g;
            e._RF.push({}, "f5e88atlt5K+651HYtHVayy", "UITrackWorldNode", void 0);
            var m = i.ccclass,
                v = i.property;
            t("UITrackWorldNode", (d = m("UITrackWorldNode"), f = v({
                type: r,
                visible: !0,
                formerlySerializedAs: "target"
            }), d((g = n((y = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(r)) || this, c(l(e), "_target", g, l(e)), u(l(e), "camera", void 0), e
                }
                s(e, t);
                var i = e.prototype;
                return i.start = function() {
                    this.camera = p.instance.camera, this.updatePosition()
                }, i.update = function() {
                    this.updatePosition()
                }, e.trackPosition = function(t, e, i) {
                    if (null != i && null != e && null != t.parent) {
                        var r = new o;
                        i.convertToUINode(e.worldPosition, t.parent, r), t.setPosition(r)
                    }
                }, i.setup = function(t) {
                    this._target = t, this.updatePosition()
                }, i.updatePosition = function() {
                    this._target && this.camera && e.trackPosition(this.node, this._target, this.camera)
                }, e
            }(a)).prototype, "_target", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), h = y)) || h));
            e._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/SceneLoaderEnums.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }],
        execute: function() {
            var c;
            e("SceneLoaderEvent", void 0), n._RF.push({}, "f6247tzLMtKO5S8JnHYSKqu", "SceneLoaderEnums", void 0),
                function(e) {
                    e.NewContentLoaderAdded = "OnNewContentLoader", e.SceneLoaded = "OnSceneLoaded", e.SceneUncovered = "OnSceneUncovered"
                }(c || (c = e("SceneLoaderEvent", {}))), n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ScoreDisplay.ts", ["cc", "./GameEnums.ts", "./_rollupPluginModLoBabelHelpers.js", "./ProjectEvent.ts", "./ScoreBoard.ts"], (function(e) {
    "use strict";
    var t, n, r, i, o, a, s, c, u, l, h, d, p, m, f;
    return {
        setters: [function(e) {
            t = e.cclegacy, n = e._decorator, r = e.Label, i = e.animation, o = e.EventHandler, a = e.Component
        }, function(e) {
            s = e.GameEvent
        }, function(e) {
            c = e.defineProperty, u = e.applyDecoratedDescriptor, l = e.inheritsLoose, h = e.initializerDefineProperty, d = e.assertThisInitialized, p = e.createClass
        }, function(e) {
            m = e.projectEvent
        }, function(e) {
            f = e.ScoreBoard
        }],
        execute: function() {
            var S, y, b, g, v, w, P, E, _, D, A, z, x, L, G;
            t._RF.push({}, "f9b7enverdL7pceSIHqEv4q", "ScoreDisplay", void 0);
            var T = n.ccclass,
                j = n.property;
            e("ScoreDisplay", (S = T("ScoreDisplay"), y = j(r), b = j({
                type: i.AnimationController,
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), g = j({
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), v = j({
                group: {
                    id: "animator",
                    name: "Animator"
                }
            }), w = j({
                type: [o],
                group: {
                    id: "events",
                    name: "Events"
                }
            }), S((G = L = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(r)) || this, h(d(t), "scoreText", _, d(t)), h(d(t), "animator", D, d(t)), h(d(t), "showParameter", A, d(t)), h(d(t), "addScoreParameter", z, d(t)), h(d(t), "onScoreAdded", x, d(t)), c(d(t), "score", 0), t
                }
                l(t, e);
                var n = t.prototype;
                return n.onLoad = function() {
                    null == t._instance ? t._instance = this : this.node.destroy()
                }, n.onEnable = function() {
                    m.on(s.StartPlaying, this.showScore, this), m.on(s.EndGame, this.hideScore, this)
                }, n.start = function() {
                    this.updateScore(f.instance.score)
                }, n.onDisable = function() {
                    m.off(s.StartPlaying, this.showScore, this), m.off(s.EndGame, this.hideScore, this)
                }, n.onDestroy = function() {
                    t._instance == this && (t._instance = null)
                }, n.addScore = function(e) {
                    this.updateScore(this.score + e), null != this.animator && this.animator.setValue(this.addScoreParameter, !0), o.emitEvents(this.onScoreAdded)
                }, n.showScore = function() {
                    null != this.animator && this.animator.setValue(this.showParameter, !0)
                }, n.hideScore = function() {
                    null != this.animator && this.animator.setValue(this.showParameter, !1)
                }, n.updateScore = function(e) {
                    this.score = e, this.scoreText.string = this.score.toFixed()
                }, p(t, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }]), t
            }(a), c(L, "_instance", null), _ = u((E = G).prototype, "scoreText", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = u(E.prototype, "animator", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = u(E.prototype, "showParameter", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "showScore"
                }
            }), z = u(E.prototype, "addScoreParameter", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "addScore"
                }
            }), x = u(E.prototype, "onScoreAdded", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), P = E)) || P));
            t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/LevelIndexDisplay.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./LevelLoader.ts", "./LevelSequenceController.ts"], (function(e) {
    "use strict";
    var n, t, l, i, r, o, a, s, c, u;
    return {
        setters: [function(e) {
            n = e.cclegacy, t = e._decorator, l = e.Label, i = e.Component
        }, function(e) {
            r = e.applyDecoratedDescriptor, o = e.inheritsLoose, a = e.initializerDefineProperty, s = e.assertThisInitialized
        }, function(e) {
            c = e.LevelLoader
        }, function(e) {
            u = e.LevelSequenceController
        }],
        execute: function() {
            var p, d, v, L, f;
            n._RF.push({}, "f9ebbTOqYJKgq/5ilV8B1jd", "LevelIndexDisplay", void 0);
            var y = t.ccclass,
                b = t.property;
            e("LevelIndexDisplay", (p = y("LevelIndexDisplay"), d = b({
                type: l
            }), p((f = r((L = function(e) {
                function n() {
                    for (var n, t = arguments.length, l = new Array(t), i = 0; i < t; i++) l[i] = arguments[i];
                    return n = e.call.apply(e, [this].concat(l)) || this, a(s(n), "label", f, s(n)), n
                }
                return o(n, e), n.prototype.onEnable = function() {
                    c.instance.loadedLevel.isEndless() ? this.label.string = "" : this.label.string = (u.instance.levels.getLevelIndex(c.instance.loadedLevel) + 1).toFixed()
                }, n
            }(i)).prototype, "label", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = L)) || v));
            n._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/ScoreEnums.ts", ["cc"], (function(e) {
    "use strict";
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }],
        execute: function() {
            var c;
            e("ScoreEvent", void 0), t._RF.push({}, "f9f5fL/z4VKwbh4BvchAyK8", "ScoreEnums", void 0),
                function(e) {
                    e.TotalScoreUpdated = "OnTotalScoreUpdated"
                }(c || (c = e("ScoreEvent", {}))), t._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/AudioManager.ts", ["cc", "./_rollupPluginModLoBabelHelpers.js", "./Logger.ts", "./AudioListener.ts", "./ProjectEvent.ts", "./AudioEnums.ts", "./AudioObject.ts", "./ObjectPool.ts"], (function(i) {
    "use strict";
    var o, e, n, a, t, u, d, r, s, l, c, A, h, g, f, _, y, E, b, v, p, S, D;
    return {
        setters: [function(i) {
            o = i.cclegacy, e = i._decorator, n = i.systemEvent, a = i.SystemEventType, t = i.director, u = i.Director, d = i.Node, r = i.game, s = i.KeyCode, l = i.AudioSource, c = i.Component
        }, function(i) {
            A = i.defineProperty, h = i.inheritsLoose, g = i.assertThisInitialized, f = i.createClass
        }, function(i) {
            _ = i.logger, y = i.LogCategory, E = i.LogType
        }, function(i) {
            b = i.AudioListener
        }, function(i) {
            v = i.projectEvent
        }, function(i) {
            p = i.AudioEvent
        }, function(i) {
            S = i.AudioObject
        }, function(i) {
            D = i.ObjectPool
        }],
        execute: function() {
            var m, w, C;
            o._RF.push({}, "fa285OT0dpI3qmSmqpPzoY2", "AudioManager", void 0);
            var M = e.ccclass,
                L = e.executionOrder;
            i("AudioManager", M("AudioManager")(m = L(-10)((C = w = function(i) {
                function o() {
                    for (var o, e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    return o = i.call.apply(i, [this].concat(n)) || this, A(g(o), "_loadedAudioData", []), A(g(o), "_audioObjectPool", new D((function() {
                        return new S
                    }), 5)), A(g(o), "_availableAudioSources", []), A(g(o), "_playingAudioSources", []), A(g(o), "_isAudioEnabled", !0), A(g(o), "_storageKey", "debugIsAudioEnabled"), o
                }
                h(o, i);
                var e = o.prototype;
                return e.onLoad = function() {
                    o._instance != this && (_.log("ERROR: Audio manager already exists", y.Audio, E.Warning), this.node.destroy())
                }, e.onEnable = function() {
                    n.on(a.KEY_DOWN, this.onMuteKeyDown, this)
                }, e.start = function() {
                    t.on(u.EVENT_AFTER_SCENE_LAUNCH, this.onChangedScene, this), this.initializeAvailableAudioSourcesList(), v.emit(p.AudioManagerInitialized)
                }, e.onDisable = function() {
                    n.off(a.KEY_DOWN, this.onMuteKeyDown, this)
                }, e.onDestroy = function() {
                    t.off(u.EVENT_AFTER_SCENE_LAUNCH, this.onChangedScene, this)
                }, o.instantiateNewAudioManager = function(i) {
                    if (void 0 === i && (i = null), null == o._instance) {
                        var e = new d("AudioManager");
                        o._instance = e.addComponent(o), r.addPersistRootNode(e), i && o._instance.load(i)
                    } else _.log("Can't instantiate a new AudioManager when one already exists.", y.Audio, E.Error)
                }, e.load = function(i) {
                    return i ? this.findAudioDataIndex(i) > -1 ? (_.log("Error loading AudioData. The AudioData " + i.node.name + " is already loaded", y.Audio, E.Error), !1) : (this._loadedAudioData.push(i), !0) : (_.log("Error loading AudioData. The AudioData object is null", y.Audio, E.Error), !1)
                }, e.unload = function(i) {
                    var o = this.findAudioDataIndex(i);
                    return o > -1 ? (this._loadedAudioData.splice(o, 1), !0) : (_.log("Error unloading AudioData. The AudioData " + i.node.name + " was not loaded", y.Audio, E.Error), !1)
                }, e.playSpatialSound = function(i, o, e) {
                    if (void 0 === e && (e = 1), _.log("Playing spatial sound from " + o + ", original scale = " + e, y.Audio), b.instance) {
                        e *= b.instance.getVolumeScale(o), _.log("Final scale = " + e, y.Audio);
                        var n = this.playByKey(i);
                        return n && n.scaleVolume(e), n
                    }
                    var a = this.playByKey(i);
                    return a && a.scaleVolume(e), a
                }, e.playByKey = function(i) {
                    var o = this;
                    if (!i) return _.log("Received null key to play audio", y.Audio, E.Error), null;
                    if (0 == this._loadedAudioData.length) return _.log("Can not play audio. No audio data was loaded", y.Audio, E.Error), null;
                    var e = this.findAudio(i);
                    if (e) {
                        var n = this.getAvailableAudioSource(),
                            a = this._audioObjectPool.get();
                        return a.initialize(e, n, !this._isAudioEnabled, (function() {
                            o.releaseAudioSource(n)
                        })), a.play(), a
                    }
                    return _.log("Can not play audio. No audio was found with key " + i.name, y.Audio, E.Error), null
                }, e.onMuteKeyDown = function(i) {
                    i.keyCode == s.KEY_M && (this.audioEnabled = !this._isAudioEnabled)
                }, e.onAudioEnabled = function() {
                    _.log("Audio enabled", y.Audio), this._isAudioEnabled = !0, v.emit(p.SetMuted, !this._isAudioEnabled)
                }, e.onAudioDisabled = function() {
                    _.log("Audio disabled", y.Audio), this._isAudioEnabled = !1, v.emit(p.SetMuted, !this._isAudioEnabled)
                }, e.getAvailableAudioSource = function() {
                    var i;
                    return this._availableAudioSources.length > 0 ? (i = this._availableAudioSources[0], this._availableAudioSources.splice(0, 1)) : i = this.newAudioSource(), this._playingAudioSources.push(i), i
                }, e.newAudioSource = function() {
                    var i = new d("AudioSource"),
                        o = i.addComponent(l);
                    return i.setParent(t.getScene()), o
                }, e.releaseAudioSource = function(i) {
                    i || _.log("Releasing a null audioSource? AudioManager is confused :/");
                    var o = this._playingAudioSources.findIndex((function(o) {
                        return o === i
                    })); - 1 == o ? _.log("Released audio source was not listed as in use. AudioManager is sad :(") : (this._playingAudioSources.splice(o, 1), this._availableAudioSources.push(i))
                }, e.onChangedScene = function() {
                    this.initializeAvailableAudioSourcesList(), this._playingAudioSources = []
                }, e.initializeAvailableAudioSourcesList = function(i) {
                    void 0 === i && (i = 5), this._availableAudioSources = [];
                    for (var o = 0; o < i; o++) this._availableAudioSources.push(this.newAudioSource())
                }, e.findAudioDataIndex = function(i) {
                    return this._loadedAudioData.findIndex((function(o) {
                        return o == i
                    }))
                }, e.findAudio = function(i) {
                    for (var o = this._loadedAudioData.length - 1; o > -1; o--) {
                        var e = this._loadedAudioData[o].getItem(i);
                        if (e) return e
                    }
                    return null
                }, f(o, [{
                    key: "audioEnabled",
                    get: function() {
                        return this._isAudioEnabled
                    },
                    set: function(i) {
                        this._isAudioEnabled = i, i ? this.onAudioEnabled() : this.onAudioDisabled()
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return o._instance
                    }
                }]), o
            }(c), A(w, "_instance", null), m = C)) || m) || m);
            o._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/main", ["./GameEnums.ts", "./Logger.ts", "./AudioListener.ts", "./ProjectEvent.ts", "./AudioEnums.ts", "./AudioObject.ts", "./ObjectPool.ts", "./AudioManager.ts", "./FoodItemCarrier.ts", "./DataLoadingEnums.ts", "./FoodItemObject.ts", "./LocalEventHandler.ts", "./FoodItem.ts", "./Ingredient.ts", "./PizzaEnums.ts", "./PizzaRecipe.ts", "./Pizza.ts", "./PizzaChef.ts", "./Restaurant.ts", "./SaveGameData.ts", "./SaveGame.ts", "./SceneLoaderEnums.ts", "./SceneLoader.ts", "./TutorialData.ts", "./KitchenBalconyDataItem.ts", "./KitchenBalconyData.ts", "./LevelFoodItems.ts", "./CustomerData.ts", "./CustomerPlacingData.ts", "./BundleLoader.ts", "./FoodItemList.ts", "./FoodOrder.ts", "./FoodOrdersList.ts", "./LevelTimelineEntry.ts", "./LevelTimeline.ts", "./LevelData.ts", "./LevelLoader.ts", "./LevelSequence.ts", "./LevelSequenceController.ts", "./ScoreController.ts", "./ScoreEnums.ts", "./ScoreBoard.ts", "./TweenEnums.ts", "./CharacterRotation.ts", "./CharacterMovement.ts", "./InteractionEnums.ts", "./FailedInteractionSetting.ts", "./FailedInteractionsController.ts", "./GameplayCanvas.ts", "./SpeechBalloon.ts", "./MainCamera.ts", "./UITrackWorldNode.ts", "./PlayerCharacterFeedback.ts", "./PlayerCharacter.ts", "./InputEnums.ts", "./Tappable.ts", "./KitchenTool.ts", "./SnacksDispenser.ts", "./NodeFollower.ts", "./TweenBase.ts", "./TweenCollection.ts", "./VirutalJoystick%20enums.ts", "./UIVirtualJoystick.ts", "./TweenNodePosition.ts", "./FoodOrderDisplay.ts", "./ScoreDisplay.ts", "./OrderItemScoreDisplay.ts", "./CustomerReaction.ts", "./CustomerReactionsController.ts", "./PizzaObjectIngredient.ts", "./PizzaObject.ts", "./CustomerBalconyPoint.ts", "./TweenNodeScale.ts", "./PunchTweenBase.ts", "./AxisInput.ts", "./CustomerExitPoint.ts", "./CustomerBalcony.ts", "./LevelTimelineEnums.ts", "./LevelTimelinePlayer.ts", "./RandomOrderPicker.ts", "./Customer.ts", "./CustomerList.ts", "./TweenUIOpacity.ts", "./CustomerPlacer.ts", "./KitchenBalcony.ts", "./GameOverScreen.ts", "./PlayingInteractionFeedbackState.ts", "./PizzaDoughPile.ts", "./ReadyDisplay.ts", "./TimerDisplay.ts", "./PizzaOven.ts", "./PanelEnums.ts", "./PanelManager.ts", "./Panel.ts", "./TweenPunchScale.ts", "./KitchenBalconyPizzaIngredient.ts", "./AudioItem.ts", "./AudioData.ts", "./AudioManagerInitializer.ts", "./RewardedAdOportunity.ts", "./RestaurantList.ts", "./RestaurantLoader.ts", "./Draggable.ts", "./AutoDisabler.ts", "./TrashCan.ts", "./LevelIconList.ts", "./Holdable.ts", "./TouchController.ts", "./LevelFoodPresenterIcon.ts", "./ReloadSceneButton.ts", "./FollowDragOnGroundExample.ts", "./KitchenToolList.ts", "./VirtualJoystick.ts", "./GameUIElement.ts", "./LevelUnlockerForTest.ts", "./LevelButton.ts", "./TutorialDirector.ts", "./EmptyKitchenBalcony.ts", "./NavigationEnums.ts", "./MenuScreen.ts", "./MainMenu.ts", "./MainMenuNavigationButton.ts", "./PlayerLivesDisplay.ts", "./LoadSceneButton.ts", "./IContentLoader.ts", "./UIClickSFX.ts", "./TweenNodeRotation.ts", "./IngredientList.ts", "./PizzaCollection.ts", "./AdButtonShower.ts", "./PunchRotationTween.ts", "./TutorialDisplay.ts", "./TutorialDisplayShower.ts", "./EndlessModeButton.ts", "./Star.ts", "./AudioProxy.ts", "./NextLevelButtonShower.ts", "./GSGameReadyEmitter.ts", "./GameTimer.ts", "./PrefabPool.ts", "./PunchScaleTween.ts", "./PunchPositionTween.ts", "./DrinkDispenser.ts", "./LevelButtonsLoader.ts", "./LevelFoodsPresenter.ts", "./GSGameEventsEmitter.ts", "./GameController.ts", "./GSAudioController.ts", "./FinalScoreDisplay.ts", "./DropArea.ts", "./Droppable.ts", "./KitchenBalconyLoader.ts", "./GameTimerDisplay.ts", "./AudioDataLoader.ts", "./PlayerLives.ts", "./EndlessLevelsUnlocked.ts", "./LevelIndexDisplay.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}));

(function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }],
            execute: function() {}
        };
    });
});