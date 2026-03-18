!function() {
    "use strict";
    class e extends Laya.Scene {}
    class t {
        constructor() {
            this.forceHide = !1, this.init();
        }
        init() {
            this.scenes = [];
        }
        get getTopScene() {
            return this.topScene;
        }
        openScene(e, t = !1, a, i, s) {
            Laya.Scene.open(e, t, a, Laya.Handler.create(this, t => {
                let a = this.scenes.filter(t => t.url == e);
                a && a.length > 0 ? (console.log("已打开此场景", a), a[0].close()) : (i ? i.addChild(t) : Laya.stage.addChild(t), 
                this.scenes.push(t), this.topScene = this.scenes[this.scenes.length - 1], s && s(t));
            }));
        }
        closeScene(e) {
            if (e ? "string" == typeof e && this.scenes.forEach(t => {
                t.url != e || (e = t);
            }) : null != this.topScene && (e = this.topScene), e && e instanceof Laya.Scene) {
                var t = this.scenes.indexOf(e);
                -1 != t && (this.scenes.splice(t, 1), this.topScene = this.scenes[this.scenes.length - 1]), 
                e.close(), R.Platform.hideBanner(), Laya.timer.once(100, this, () => {
                    var e = this.topScene;
                    e.canShowAd && !e.isWuchu && 0 == F.instance.openSceneCount && (R.Platform.showBanner(), 
                    console.log("UIMgr ShowBanner", e.url));
                });
            }
        }
    }
    class a {}
    a.AD_LOAD_EVENT = "", a.AD_SHOW_EVENT = "", a.AD_VIDEO_CLOSE_EVENT = "", a.PLATFORM_WAKE_EVENT = "", 
    a.PLATFORM_SLEEP_EVENT = "", a.LOAD_FINISH_EVENT = "", a.GAME_INIT_EVENT = "", a.GAME_PLAY_EVENT = "", 
    a.GAME_REBORN_EVENT = "", a.GAME_OVER_EVENT = "", a.MOUSE_EVENT = "", a.CHANGE_SKIN_EVENT = "", 
    a.CHANGE_BRICK_EVENT = "", a.CHANGE_LEVEL_EVENT = "", a.CHANGE_COIN_EVENT = "", 
    a.SHOW_TIPS_EVENT = "", a.UPDATE_SHARE_COUNT = "", a.UPDATE_CHECK_SV = "", a.LOGIN_EVENT = "", 
    a.SHARE_BACK_EVENT = "";
    class i {
        constructor() {
            this.storageData = {
                score: 0,
                level: 1,
                playCount: 0,
                playTime: new Date().getTime(),
                gameTime: new Date().getTime() - 864e5,
                offlineTime: new Date().getTime(),
                strength: 20,
                coin: 1e3,
                key: 0,
                signDay: 1,
                signWeek: 1,
                isSign: !1,
                keyAmount: 0,
                isSound: !0,
                isVibrate: !0,
                skinPlate: [ 1, 6 ],
                skinKnife: [ 1 ],
                skinColor: [ 0 ],
                plateIndex: 1,
                knifeIndex: 1,
                colorIndex: 0,
                isNewPlay: !0,
                shareCount: 0
            }, this.storageName = {
                score: "",
                level: "",
                playCount: "",
                playTime: "",
                gameTime: "",
                strength: "",
                coin: "",
                signDay: "",
                signWeek: "",
                isSign: "",
                isSound: "",
                isVibrate: "",
                keyAmount: "",
                skinPlate: "",
                skinKnife: "",
                skinColor: "",
                plateIndex: "",
                knifeIndex: "",
                colorIndex: "",
                isNewPlay: "",
                offlineTime: "",
                shareCount: "",
                key: ""
            }, this.init();
        }
        init() {
            for (let e in this.storageData) {
                let t = this.readStorage(e);
                t ? (this.storageData[e] = JSON.parse(t), console.log("加载缓存", e, this.storageData[e])) : (this.writeStorage(e, this.storageData[e]), 
                console.log("初始化", e, this.storageData[e])), this.storageName[e] = e;
            }
            this.refreshData();
        }
        setValue(e, t) {
            this.storageData[e] = t, this.writeStorage(e, t);
        }
        writeStorage(e, t) {
            Laya.LocalStorage.setItem(e, JSON.stringify(t));
        }
        readStorage(e) {
            return Laya.LocalStorage.getItem(e);
        }
        removeStorage(e) {
            Laya.LocalStorage.removeItem(e);
        }
        refreshData() {
            Math.floor(this.storageData.gameTime / 864e5) != Math.floor(this.getCurrentTime / 864e5) && (console.log("更新每日数据"), 
            this.setValue(this.storageName.playCount, 0), this.setValue(this.storageName.playTime, this.getCurrentTime), 
            this.setValue(this.storageName.gameTime, this.getCurrentTime), this.setValue(this.storageName.strength, 20), 
            this.setValue(this.storageName.isSign, !1), this.storageData.signDay > 7 && (this.setValue(this.storageName.signDay, 1), 
            this.setValue(this.storageName.signWeek, this.storageData.signWeek + 1)), R.Event.on(a.UPDATE_SHARE_COUNT, this, this.updateShareCount));
        }
        updateShareCount(e) {
            this.setValue(this.storageName.shareCount, e.amount), console.log("剩余分享次数：", e.amount), 
            R.Event.event(a.UPDATE_CHECK_SV);
        }
        get getCurrentTime() {
            return new Date().getTime();
        }
        passLevel() {
            this.setValue(this.storageName.level, this.storageData.level + 1);
        }
        updateCoin(e) {
            this.setValue(this.storageName.coin, this.storageData.coin + e), R.Event.event(a.CHANGE_COIN_EVENT);
        }
        getSkin(e, t) {
            this.storageData[e].push(t), this.setValue(e, this.storageData[e]);
        }
        changeSkin(e, t) {
            this.setValue(e, t);
        }
    }
    class s {
        constructor() {
            this.appId = "wx47537a2fe2002c8c", this.gameVersion = "1.0.4", this.gameType = "3D", 
            this.sceneResUrl = "res/scene/Conventional/ResScene.ls", this.modelResUrl = "res/model/Conventional/ResScene.lh", 
            this.rebornCount = 0, this.playCount = 0;
        }
        get shareContext() {
            return [ "请分享到活跃的群！", "请分享到不同群！", "请分享给好友！", "请分享给20人以上的群！" ][Math.floor(4 * Math.random())];
        }
    }
    class n {
        static add(e, t) {
            var a = new Laya.Vector3();
            return Laya.Vector3.add(e, t, a), a.clone();
        }
        static subtract(e, t) {
            var a = new Laya.Vector3();
            return Laya.Vector3.subtract(e, t, a), a.clone();
        }
        static mull(e, t) {
            var a = new Laya.Vector3();
            return Laya.Vector3.scale(e, t, a), a.clone();
        }
        static dot(e, t) {
            return Laya.Vector3.dot(e, t);
        }
        static cross(e, t) {
            var a = new Laya.Vector3();
            return Laya.Vector3.cross(e, t, a), a.clone();
        }
        static normalized(e) {
            var t = new Laya.Vector3();
            return Laya.Vector3.normalize(e, t), t.clone();
        }
        static distance(e, t) {
            var a = n.subtract(e, t);
            return Laya.Vector3.scalarLength(a);
        }
    }
    var o, r, h, l, c, d;
    !function(e) {
        e.Loading = "UIScene/Loading.scene", e.BusyLoading = "UIScene/BusyLoading.scene", 
        e.Home = "UIScene/Home.scene", e.Game = "UIScene/Game.scene", e.Game3D = "UIScene/Game3D.scene", 
        e.Reborn = "UIScene/Reborn.scene", e.Settlement = "UIScene/Settlement.scene", e.Mission = "UIScene/Mission.scene", 
        e.Skin = "UIScene/Skin.scene", e.FreeSkin = "UIScene/FreeSkin.scene", e.Sign = "UIScene/Sign.scene", 
        e.Offline = "UIScene/Offline.scene", e.Strength = "UIScene/Strength.scene", e.SignTips = "UIScene/SignTips.scene", 
        e.Busy = "UIScene/Busy.scene", e.Background = "UIScene/Background.scene", e.Box = "UIScene/Box.scene", 
        e.Clean = "UIScene/Clean.scene", e.Box2 = "UIScene/Box2.scene";
    }(o || (o = {})), function(e) {
        e.BoxItem = "prefab/BoxItem.prefab", e.FontDamaged = "prefab/FontDamaged.prefab", 
        e.CompoundItem = "prefab/CompoundItem.prefab", e.DuilianIcon = "prefab/DuilianIcon.prefab";
    }(r || (r = {})), function(e) {
        e.BGM = "Bgm", e.CLICK = "Click", e.Finish2 = "Finish2", e.EndLight = "EndLight", 
        e.Roach = "Roach", e.RollDown = "RollDown", e.Fail = "Fail", e.Rolling = "Rolling", 
        e.RollingLong = "RollingLong";
    }(h || (h = {}));
    class g {
        addClickEvent(e, t, a, i, s) {
            if (e.offAllCaller(t), e instanceof Laya.Button && !s) {
                let s = e => {
                    a && a.call(t, e), R.Sound.play(h.CLICK);
                };
                e.on(Laya.Event.CLICK, t, s, [ i ]);
            } else {
                let s = 60, n = 1, o = e.scaleX * n, r = e.scaleY * n, l = .9 * n, c = !1, d = t => {
                    c = !0, Laya.Tween.to(e, {
                        scaleX: l,
                        scaleY: l
                    }, s);
                };
                e.on(Laya.Event.MOUSE_DOWN, t, d, [ i ]);
                let g = i => {
                    0 != c && (c = !1, Laya.Tween.to(e, {
                        scaleX: o,
                        scaleY: r
                    }, s), a && a.call(t, i), R.Sound.play(h.CLICK));
                };
                e.on(Laya.Event.MOUSE_UP, t, g, [ i ]);
                let u = t => {
                    Laya.Tween.to(e, {
                        scaleX: o,
                        scaleY: r
                    }, s);
                };
                e.on(Laya.Event.MOUSE_OUT, t, u, [ i ]);
            }
        }
        getRGB(e) {
            var t = [], a = [];
            let i = e.replace(/#/, "");
            if (3 == i.length) {
                for (var s = [], n = 0; n < 3; n++) s.push(i.charAt(n) + i.charAt(n));
                i = s.join("");
            }
            for (n = 0; n < 3; n++) t[n] = "0x" + i.substr(2 * n, 2), a.push(parseInt(t[n]));
            return new Laya.Vector3(a[0] / 255, a[1] / 255, a[2] / 255);
        }
        getRGBA(e) {
            var t = [], a = [];
            let i = e.replace(/#/, "");
            if (3 == i.length) {
                for (var s = [], n = 0; n < 3; n++) s.push(i.charAt(n) + i.charAt(n));
                i = s.join("");
            }
            for (n = 0; n < 3; n++) t[n] = "0x" + i.substr(2 * n, 2), a.push(parseInt(t[n]));
            return new Laya.Vector4(a[0] / 255, a[1] / 255, a[2] / 255, 1);
        }
        getColorString(e) {
            var t = 15 & e, a = t > 9 ? this.getHexValue(Number(t)) + "" : t + "";
            return ((t = 15 & e >>> 4) > 9 ? this.getHexValue(Number(t)) + "" : t + "") + a;
        }
        getHexValue(e) {
            switch (e) {
              case 10:
                return "A";

              case 11:
                return "B";

              case 12:
                return "C";

              case 13:
                return "D";

              case 14:
                return "E";

              case 15:
                return "F";
            }
        }
        getCurrentTime() {
            return Math.floor(Date.parse(new Date().toString()) / 1e3);
        }
        inverseLerp(e, t, a) {
            return (a - e) / (t - e);
        }
        linearEquation(e, t) {
            var a = (e.y - t.y) / (e.x - t.x);
            return [ a, e.y - a * e.x ];
        }
        loadJsonFile(e, t) {
            Laya.loader.load(e, Laya.Handler.create(this, a => {
                var i = Laya.loader.getRes(e);
                t(i);
            }), null, Laya.Loader.JSON);
        }
        getRandomArray(e, t) {
            var a = [], i = [];
            i = (i = i.concat(e)).sort(function() {
                return .5 - Math.random();
            });
            for (var s = 0; s < t; s++) a.push(i[s]);
            return a;
        }
        loadSubpackage(e, t, a) {
            if (Laya.Browser.onWeiXin) {
                wx.loadSubpackage({
                    name: e,
                    success: function(i) {
                        console.log("分包加载成功：", e), a.call(i, t, !0);
                    },
                    fail: function(i) {
                        console.error("分包加载失败：", e), a.call(i, t, !1);
                    }
                }).onProgressUpdate(e => {
                    console.log(e, "分包================");
                });
            }
        }
        loadSubpackagesSync(e, t, a) {
            for (var i = e.length, s = 0; s < i; s++) this.loadSubpackage(e[s], t, (e, s) => {
                s && 0 == --i && (console.log("全部分包加载完成"), a.call(this, t, !0));
            });
        }
        loadSubpackages(e, t, a) {
            var i = e.length;
            !function loadSubpackage() {
                var s = e[i - 1];
                null != s ? R.Utils.loadSubpackage(s, t, (e, t) => {
                    t && (i--, loadSubpackage());
                }) : (console.log("全部分包加载完成"), 0 == i ? a.call(this, t, !0) : a.call(this, t, !1));
            }();
        }
        getTimeLeft2BySecond(e) {
            let t = Math.round((e - 30) / 60) % 60, a = e % 60;
            return (t > 0 ? t > 9 ? t + ":" : "0" + t + ":" : "00:") + (a > 0 ? (a > 9 ? a + "" : "0" + a) + "" : "00");
        }
        objectShake(e, t = 1, a = .7) {
            var i = t, s = 1, n = e.transform.localPosition.clone();
            Laya.timer.frameLoop(1, this, function updateShake() {
                if (i > 0) {
                    var t = new Laya.Vector3();
                    Laya.Vector3.scale((o = Math.random() > .5 ? Math.random() : -Math.random(), r = Math.random() > .5 ? Math.random() : -Math.random(), 
                    new Laya.Vector3(o, r, 0)), a, t), Laya.Vector3.add(n, t, t), e.transform.localPosition = t, 
                    i -= .02 * s;
                } else i = 0, e.transform.localPosition = n, Laya.timer.clear(this, updateShake);
                var o, r;
            });
        }
        objectShake2D(e, t = 1, a = .7) {
            this.originPos && (Laya.timer.clear(this, this.updateShake), e.pos(this.originPos.x, this.originPos.y)), 
            this.shakeTime = t;
            this.originPos = new Laya.Vector2(e.x, e.y), Laya.timer.frameLoop(1, this, this.updateShake, [ a, e, 1 ]);
        }
        randomPos() {
            var e = Math.random() > .5 ? Math.random() : -Math.random(), t = Math.random() > .5 ? Math.random() : -Math.random();
            return new Laya.Vector2(e, t);
        }
        updateShake(e, t, a) {
            if (this.shakeTime > 0) {
                var i = new Laya.Vector2();
                Laya.Vector2.scale(this.randomPos(), e, i), i.setValue(i.x + this.originPos.x, i.y + this.originPos.y), 
                t.pos(i.x, i.y), this.shakeTime -= .02 * a;
            } else this.shakeTime = 0, t.pos(this.originPos.x, this.originPos.y), Laya.timer.clear(this, this.updateShake), 
            this.originPos = null;
        }
        sameSide(e, t, a, i) {
            var s = n.subtract(t, e), o = n.subtract(a, e), r = n.subtract(i, e), h = n.cross(s, o), l = n.cross(s, r);
            return n.dot(h, l) >= 0;
        }
        pointInTriangle(e, t, a, i) {
            return this.sameSide(e, t, a, i) && this.sameSide(t, a, e, i) && this.sameSide(a, e, t, i);
        }
        findNodeByName(e, t) {
            let a = null, i = e => {
                for (let s = 0; s < e.numChildren; s++) {
                    if (e.getChildAt(s).name == t) return void (a = e.getChildAt(s));
                    i(e.getChildAt(s));
                }
            };
            return i(e), a;
        }
        coinCollectAnim(e, t, a, i = 15, s = null) {
            for (var n = i, o = 0; o < i; o++) {
                let i = Laya.Pool.getItemByClass("coin", Laya.Image);
                i.skin = "ui/sy_jb_01.png", i.x = e.x, i.y = e.y, i.scale(.6, .6), a.addChild(i);
                let o = 300 + 100 * Math.random() - 50;
                Laya.Tween.to(i, {
                    x: i.x + 250 * Math.random() - 125,
                    y: i.y + 250 * Math.random() - 125
                }, o), Laya.timer.once(o + 50, this, function() {
                    Laya.Tween.to(i, {
                        x: t.x,
                        y: t.y
                    }, 400, null, new Laya.Handler(this, function() {
                        a.removeChild(i), Laya.Pool.recover("coin", i), 0 == --n && s && s(a);
                    }));
                });
            }
        }
        fixCameraField(e) {
            let t = (Laya.stage.displayHeight - 1334 < 0 ? 0 : Laya.stage.displayHeight - 1334) / 290 * 10;
            e.fieldOfView += t;
        }
        changeMatColor(e, t) {
            e.meshRenderer && (e.meshRenderer.sharedMaterial.albedoColor = t);
        }
        getRandom() {
            return this.getRandomArray([ 0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1 ], 1)[0];
        }
        getAngle(e, t) {
            var a = Laya.Vector3.dot(e, t), i = Laya.Vector3.scalarLength(e) * Laya.Vector3.scalarLength(t);
            if (0 == i) {
                if (e.z > t.z) return 0;
                if (e.z < t.z) return 180;
                if (e.y > t.y) return 90;
                if (e.y < t.y) return -90;
            }
            var s = a / i;
            return 180 * Math.acos(s) / Math.PI;
        }
        transform(e) {
            let t = [ "", "", "" ], a = 1e3, i = 3;
            for (var s = 1; e / a >= 1; ) a *= 10, i += 1;
            if (i <= 4) t[1] = "k", t[0] = (e / 1e3).toFixed(2); else if (i <= 9) {
                let a = parseInt((i - 4).toFixed(0)) / 2 > 1 ? "m" : "k";
                s = "k" === a ? 1e3 : 1e6, t[1] = a;
                let n = (e / s).toFixed(2);
                t[0] = n + "";
            } else if (i <= 16) {
                let a = "b", i = 1;
                "m" === a ? i = 1e6 : "b" === a && (i = 1e9), t[1] = a, t[0] = (e / i).toFixed(2);
            }
            return e < 1e3 && (t[1] = "", t[0] = Number(e).toFixed(0) + ""), t.join("");
        }
        static createTriangle(e, t, a) {
            void 0 === e && (e = 1), void 0 === t && (t = 1), void 0 === a && (a = 1);
            Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            var i = e / 2, s = t / 2, n = a / 2;
            new Float32Array([ -i, s, -n, 0, 1, 0, 0, 0, i, s, -n, 0, 1, 0, 1, 0, i, s, n, 0, 1, 0, 1, 1, -i, -s, -n, 0, -1, 0, 0, 0, i, -s, -n, 0, -1, 0, -1, 0, i, -s, n, 0, -1, 0, -1, -1, -i, s, -n, 0, -1, 0, 0, 0, i, s, -n, 0, -1, 0, -1, 0, i, -s, -n, 0, -1, 0, 0, -1, -i, -s, -n, 0, -1, 0, -1, -1, i, s, -n, 0, 1, 0, 0, 0, i, s, n, 0, 1, 0, 1, 0, i, -s, -n, 0, 1, 0, 0, 1, i, -s, n, 0, 1, 0, 1, 1, -i, s, -n, 0, 1, 0, 0, 0, i, s, n, 0, 1, 0, 0, 0, i, -s, n, 0, 1, 0, 0, 1, -i, -s, -n, 0, 1, 0, 1, 1 ]), 
            new Uint16Array([ 0, 1, 2, 5, 4, 3, 6, 9, 8, 8, 7, 6, 11, 10, 12, 12, 13, 11, 14, 15, 16, 16, 17, 14 ]);
        }
        getNormal(e, t, a) {
            var i = n.subtract(t, e), s = n.subtract(a, e);
            return n.normalized(n.cross(s, i));
        }
        missTouch(e, t = 300) {
            R.Platform.hideBanner(), e.bottom = 70;
            var a = F.instance.dataConfig.front_banner_show_time, i = F.instance.dataConfig.front_button_up;
            Laya.timer.once(a, e, () => {
                R.Platform.showBanner(), Laya.Tween.to(e, {
                    bottom: t
                }, i);
            });
        }
        clearMissTouch(e) {
            Laya.timer.clearAll(e);
        }
        clamp(e, t, a) {
            return e < t ? t : e > a ? a : e;
        }
        loadTexture2D(e, t) {
            Laya.Texture2D.load(e, Laya.Handler.create(null, e => {
                t(e);
            }));
        }
        setMaterialTexture(e, t) {
            this.loadTexture2D(t, t => {
                e.albedoTexture = t;
            });
        }
        cameraCrossTween(e, t) {
            let a = Laya.PrimitiveMesh.createBox(1, 1, 1), i = new Laya.MeshSprite3D(a);
            e.addChild(i), i.transform.localPosition = new Laya.Vector3(0, 0, -1);
            let s = new Laya.UnlitMaterial();
            s.alphaTest = !1, s.alphaTestValue = .5, s.blend = 1, s.blendDst = 771, s.blendSrc = 770, 
            s.cull = 1, s.depthTest = 515, s.depthWrite = !1, s.renderQueue = 3e3, s.tilingOffset = new Laya.Vector4(1, 1, 0, 0);
            let n = new Laya.Vector4(0, 0, 0, 0);
            s.albedoColor = n, i.meshRenderer.material = s;
            let o = new Laya.Tween();
            o.to(n, {
                w: 1
            }, 1e3, null, Laya.Handler.create(this, () => {
                t && t(), o.to(n, {
                    w: 0
                }, 1e3, null, Laya.Handler.create(this, () => {
                    i.destroy();
                })), o.update = new Laya.Handler(this, () => {
                    s.albedoColor = n;
                });
            })), o.update = new Laya.Handler(this, () => {
                s.albedoColor = n;
            });
        }
        emojiAnim(e, t, a, i = 15, s = null) {
            for (var n = i, o = 0; o < i; o++) {
                let i = Laya.Pool.getItemByClass("coin", Laya.Image);
                a.addChild(i), i.skin = e, i.x = t.x, i.y = t.y, i.alpha = 1, i.scale(.6, .6);
                let o = 400 + 100 * Math.random() - 50, r = Math.random() > .5 ? i.x + 150 * Math.random() + 100 : i.x - 150 * Math.random() - 100;
                Laya.Tween.to(i, {
                    x: r,
                    y: i.y - 125 * Math.random() - 150
                }, o), Laya.timer.once(o + 50, this, function() {
                    Laya.Tween.to(i, {
                        x: i.x,
                        y: i.y - 100,
                        alpha: 0
                    }, 1500, null, new Laya.Handler(this, function() {
                        a.removeChild(i), Laya.Pool.recover("coin", i), 0 == --n && s && s(a);
                    }));
                });
            }
        }
    }
    g.showPoint = function(e, t) {
        for (var a = 0; a < e.length; a++) {
            e[a], g.createBox(.1, .1, .1);
            var i = new Laya.MeshSprite3D();
            R.CommonData.mainScene.addChild(i);
        }
    }, g.createMesh = function(e, t) {
        Laya.Resource.destroyUnusedResources();
        Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL");
        for (var a = [], i = new Laya.Vector3(-1, 0, 0), s = 0; s < e.length; s++) {
            var n = e[s];
            a.push(n.x), a.push(n.y), a.push(n.z), a.push(i.x), a.push(i.y), a.push(i.z);
        }
        new Float32Array(a), new Uint16Array(t);
    }, g.createBox2 = function(e, t, a) {
        void 0 === e && (e = 1), void 0 === t && (t = 1), void 0 === a && (a = 1);
        Laya.VertexMesh.getVertexDeclaration("POSITION");
        var i = e / 2, s = t / 2, n = a / 2;
        new Float32Array([ -i, s, -n, i, s, -n, i, s, n, -i, s, n, -i, -s, -n, i, -s, -n, i, -s, n, -i, -s, n, -i, s, -n, -i, s, n, -i, -s, n, -i, -s, -n, i, s, -n, i, s, n, i, -s, n, i, -s, -n, -i, s, n, i, s, n, i, -s, n, -i, -s, n, -i, s, -n, i, s, -n, i, -s, -n, -i, -s, -n ]), 
        new Uint16Array([ 0, 1, 2, 2, 3, 0, 4, 7, 6, 6, 5, 4, 8, 9, 10, 10, 11, 8, 12, 15, 14, 14, 13, 12, 16, 17, 18, 18, 19, 16, 20, 23, 22, 22, 21, 20 ]);
    }, g.createBox = function(e, t, a) {
        void 0 === e && (e = 1), void 0 === t && (t = 1), void 0 === a && (a = 1);
        Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        var i = e / 2, s = t / 2, n = a / 2;
        new Float32Array([ -i, s, -n, 0, 1, 0, 0, 0, i, s, -n, 0, 1, 0, 1, 0, i, s, n, 0, 1, 0, 1, 1, -i, s, n, 0, 1, 0, 0, 1, -i, -s, -n, 0, -1, 0, 0, 1, i, -s, -n, 0, -1, 0, 1, 1, i, -s, n, 0, -1, 0, 1, 0, -i, -s, n, 0, -1, 0, 0, 0, -i, s, -n, -1, 0, 0, 0, 0, -i, s, n, -1, 0, 0, 1, 0, -i, -s, n, -1, 0, 0, 1, 1, -i, -s, -n, -1, 0, 0, 0, 1, i, s, -n, 1, 0, 0, 1, 0, i, s, n, 1, 0, 0, 0, 0, i, -s, n, 1, 0, 0, 0, 1, i, -s, -n, 1, 0, 0, 1, 1, -i, s, n, 0, 0, 1, 0, 0, i, s, n, 0, 0, 1, 1, 0, i, -s, n, 0, 0, 1, 1, 1, -i, -s, n, 0, 0, 1, 0, 1, -i, s, -n, 0, 0, -1, 1, 0, i, s, -n, 0, 0, -1, 0, 0, i, -s, -n, 0, 0, -1, 0, 1, -i, -s, -n, 0, 0, -1, 1, 1 ]), 
        new Uint16Array([ 0, 1, 2, 2, 3, 0, 4, 7, 6, 6, 5, 4, 8, 9, 10, 10, 11, 8, 12, 15, 14, 14, 13, 12, 16, 17, 18, 18, 19, 16, 20, 23, 22, 22, 21, 20 ]);
    };
    class u {
        constructor() {
            this.init(), Laya.loader.load(this.url, Laya.Handler.create(this, this.loadComplete), Laya.Handler.create(this, this.loadProgress), Laya.Loader.PREFAB);
        }
        init() {
            this.url = [];
            for (let e in r) this.url.push(r[e]);
        }
        getItem(e) {
            let t = Laya.loader.getRes(e);
            return t ? Laya.Pool.getItemByCreateFun(e, t.create, t) : null;
        }
        recoverItem(e, t) {
            Laya.Pool.recover(e, t), t.parent.removeChild(t);
        }
        loadProgress(e) {
            console.log("预制体资源加载中...", e);
        }
        loadComplete() {
            console.log("预制体资源加载完成!");
        }
    }
    class m {
        constructor() {
            this._isPlay = !1, this._isOver = !1, this._isPause = !1, this._isPressed = !1, 
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownClick), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpClick), 
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveClick);
        }
        get isPressed() {
            return this._isPressed;
        }
        set isPressed(e) {
            this._isPressed = e;
        }
        get isPlay() {
            return this._isPlay;
        }
        set isPlay(e) {
            this._isPlay = e;
        }
        get isOver() {
            return this._isOver;
        }
        set isOver(e) {
            this._isOver = e;
        }
        get isPause() {
            return this._isPause;
        }
        set isPause(e) {
            this._isPause = e, Laya.timer.scale = e ? 0 : 1;
        }
        set gameScale(e) {
            Laya.timer.scale = e;
        }
        onMouseDownClick(e) {
            R.Event.event(a.MOUSE_EVENT, {
                type: "down",
                evt: e
            });
        }
        onMouseUpClick(e) {
            R.Event.event(a.MOUSE_EVENT, {
                type: "up",
                evt: e
            });
        }
        onMouseMoveClick(e) {
            R.Event.event(a.MOUSE_EVENT, {
                type: "move",
                evt: e
            });
        }
        getThrowX(e, t, a, i) {
            return e * Math.pow(i, 2) + t * i + a;
        }
    }
    class f {
        toScale(e, t, a, i, s, n = !1, o = null) {
            if (e) {
                var r = null;
                e.scale(t, t), scale1();
            }
            function scale1() {
                r = n || s ? new Laya.Handler(this, scale2) : null, Laya.Tween.to(e, {
                    scaleX: a,
                    scaleY: a
                }, i, o, r);
            }
            function scale2() {
                r = n ? new Laya.Handler(this, scale1) : null, Laya.Tween.to(e, {
                    scaleX: t,
                    scaleY: t
                }, i, o, r);
            }
        }
        toAlpha(e, t, a, i, s, n = !1, o = null) {
            if (e) {
                var r = null;
                e.alpha = t, alpha1();
            }
            function alpha1() {
                r = n || s ? new Laya.Handler(this, alpha2) : null, Laya.Tween.to(e, {
                    alpha: a
                }, i, o, r);
            }
            function alpha2() {
                r = n ? new Laya.Handler(this, alpha1) : null, Laya.Tween.to(e, {
                    alpha: t
                }, i, o, r);
            }
        }
        toPosition(e, t, a, i = !1, s = 0) {
            let n = new Laya.Vector2(e.x, e.y);
            function pos1() {
                if (i) switch (s) {
                  case 0:
                    var n = new Laya.Handler(this, pos2);
                    break;

                  case 1:
                    n = new Laya.Handler(this, pos3);
                }
                Laya.Tween.to(e, {
                    x: t.x,
                    y: t.y
                }, a, null, n);
            }
            function pos2() {
                Laya.Tween.to(e, {
                    x: n.x,
                    y: n.y
                }, a, null, Laya.Handler.create(this, pos1));
            }
            function pos3() {
                e.x = n.x, e.y = n.y, pos1();
            }
            pos1();
        }
        toPosition3D(e, t, a, i, s, n, o) {
            s && (e.transform.position = s);
            var r = new Laya.Tween(), h = e.transform.position.clone();
            r.to(h, {
                x: t.x,
                y: t.y,
                z: t.z
            }, a, i, Laya.Handler.create(this, () => {
                e.destroyed ? r.clear() : (e.transform.position = t, n && n());
            })), r.update = new Laya.Handler(this, () => {
                e.destroyed ? r.clear() : (e.transform.position = h, o && o(e, h));
            });
        }
        toRotaion(e, t, a, i = !1, s = !1) {
            var n = e.rotation;
            function rotate2() {
                Laya.Tween.to(e, {
                    rotation: -t
                }, 2 * a, null, Laya.Handler.create(this, rotate3));
            }
            function rotate3() {
                Laya.Tween.to(e, {
                    rotation: t
                }, 2 * a, null, Laya.Handler.create(this, rotate2));
            }
            function rotate4() {
                Laya.Tween.to(e, {
                    rotation: n
                }, a);
            }
            !function() {
                if (i) var n = new Laya.Handler(this, rotate2); else if (s) var n = new Laya.Handler(this, rotate4);
                Laya.Tween.to(e, {
                    rotation: t
                }, a, null, n);
            }();
        }
        clear(e) {
            Laya.Tween.clearAll(e);
        }
    }
    class p extends Laya.Script3D {
        onAwake() {
            this.self = this.owner, this.init();
        }
        init(...e) {}
        onDestroy() {
            Laya.timer.clearAll(this), R.Event.offAllCaller(this);
        }
    }
    class y extends p {
        init(e, t, a, i, s, n) {
            this.sizeX = e ? e / 2 : 0, this.sizeY = t ? t / 2 : 0, this.sizeZ = a ? a / 2 : 0, 
            this.offsetX = i || 0, this.offsetY = s || 0, this.offsetZ = n || 0, this.maxSize = Math.max(this.sizeZ, Math.max(this.sizeX, this.sizeY));
        }
    }
    class L extends y {
        onAwake() {
            super.onAwake(), null == y.colliders && (y.colliders = []), y.colliders.push(this);
        }
        onDestroy() {
            y.colliders.splice(y.colliders.indexOf(this), 1), super.onDestroy();
        }
        getTarget(e) {
            if (this.touchTargets) {
                a = null;
                for (var t = 0; t < this.touchTargets.length; t++) e == this.touchTargets[t].target && (a = this.touchTargets[t]);
                null == a && (a = {
                    target: e,
                    isFirstTouch: !0
                }, this.touchTargets.push(a));
            } else {
                this.touchTargets = [];
                var a = {
                    target: e,
                    isFirstTouch: !0
                };
                this.touchTargets.push(a);
            }
            return a;
        }
        setTarget(e, t) {
            for (var a = 0; a < this.touchTargets.length; a++) {
                if (e == this.touchTargets[a].target) this.touchTargets[a].isFirstTouch = t;
            }
        }
    }
    class v extends L {
        onStart() {
            if (this.init(1, .2, .24, 0, 0, 0), this.isTrigger = !0, this.speed = 3 * Math.random() / 100 + .03, 
            this.isLeft = Math.random() > .5, !this.isLeft) {
                let e = this.self.transform.rotationEuler.clone();
                e.y += 180, this.self.transform.rotationEuler = e;
            }
        }
        onUpdate() {
            this.self.transform.translate(new Laya.Vector3(this.speed, 0, 0));
            let e = this.self.transform.position.clone();
            if (e.x > 2 || e.x < -2) {
                this.isLeft = !this.isLeft;
                let e = this.self.transform.rotationEuler.clone();
                e.y += 180, this.self.transform.rotationEuler = e;
            }
        }
    }
    class C extends p {
        constructor() {
            super(...arguments), this.canFollow = !0;
        }
        changeSkin() {
            let e = R.Level.getKnife(R.Storage.storageData.knifeIndex - 1), t = this.self.getChildByName("KnifePoint");
            t.destroyChildren(), t.addChild(e), e.transform.localPosition = new Laya.Vector3();
            let a = R.Level.getPlate(R.Storage.storageData.plateIndex - 1), i = this.self.getChildByName("PlatePoint");
            i.destroyChildren(), i.addChild(a), a.transform.localPosition = new Laya.Vector3();
        }
        start() {
            this.anim.play("CameraStart");
        }
        init() {
            this.firstX = this.self.transform.position.x, this.oriPos = this.self.transform.position.clone(), 
            this.oriRot = this.self.transform.rotationEuler.clone(), this.anim = this.self.getComponent(Laya.Animator), 
            this.fx = this.self.getChildByName("CameraWindFX").getChildAt(0).particleSystem, 
            this.fx.stop(), this.shineFX = this.self.getChildByName("ShineFX"), this.throwSushiFX = this.self.getChildByName("FX").getChildByName("ThrowSushiFX").particleSystem, 
            this.initData();
        }
        setTarget(e) {
            this.target = e;
            var t = this.self.transform.position.clone(), a = this.target.transform.position.clone();
            this.offset = new Laya.Vector3(), Laya.Vector3.subtract(t, a, this.offset);
        }
        finish(e, t) {
            this.fx.stop(), this.self.getChildByName("SushiPoint").addChild(e), e.transform.localPosition = new Laya.Vector3(0, t, 0), 
            e.transform.localRotationEuler = new Laya.Vector3(), this.canFollow = !1, this.anim.play("CameraFinish_2"), 
            Laya.timer.once(2200, this, () => {
                this.throwSushiFX.play(), R.Sound.play(h.Finish2);
            }), Laya.timer.once(3e3, this, () => {
                R.Utils.cameraCrossTween(R.Level.mainCamera, () => {
                    R.Game.isPlay = !1, R.Level.setFog("#EA9B62", !1), console.log("过度到首页"), this.initData(), 
                    Laya.timer.once(500, this, () => {
                        this.anim.play("CameraEat_2"), Laya.timer.once(1250, this, () => {
                            R.Event.event(a.GAME_OVER_EVENT);
                        });
                    });
                });
            });
        }
        onUpdate() {
            if (R.Game.isPlay && this.target && this.canFollow) {
                var e = new Laya.Vector3(), t = this.target.transform.position.clone();
                Laya.Vector3.add(t, this.offset, e), e.y = this.self.transform.position.y, Laya.Vector3.lerp(this.self.transform.position, e, .2, e), 
                this.self.transform.position = e;
            }
        }
        initData() {
            this.canFollow = !0, this.self.transform.position = this.oriPos, this.self.transform.rotationEuler = this.oriRot, 
            this.anim.play("CameraIdle"), this.shineFX.active = !1;
        }
    }
    class S extends L {
        onStart() {
            this.init(10, 5, 2.4, 0, 0, 0), this.isTrigger = !0;
        }
    }
    class _ extends L {
        onStart() {
            this.init(1, .2, .24, 0, 0, 0), this.isTrigger = !0;
        }
    }
    class w {
        constructor() {
            this.tween = new Laya.Tween(), this.tweens = [];
        }
        getTimeByFrame(e) {
            return Math.round(10 * e);
        }
        toTween(e, t, a, i, s, n = !0) {
            this.target = e, this.isLocal = n;
            var o = {}, r = {};
            if (t.pos) {
                var h = n ? e.transform.localPosition.clone() : e.transform.position.clone();
                o.posX = h.x, o.posY = h.y, o.posZ = h.z, r.posX = t.pos.x, r.posY = t.pos.y, r.posZ = t.pos.z;
            }
            if (t.rot) {
                var l = n ? e.transform.localRotationEuler.clone() : e.transform.rotationEuler.clone();
                o.rotX = l.x, o.rotY = l.y, o.rotZ = l.z, r.rotX = t.rot.x, r.rotY = t.rot.y, r.rotZ = t.rot.z;
            }
            if (t.sca) {
                var c = e.transform.getWorldLossyScale().clone();
                o.scaX = c.x, o.scaY = c.y, o.scaZ = c.z, r.scaX = t.sca.x, r.scaY = t.sca.y, r.scaZ = t.sca.z;
            }
            return this.tween.to(o, {
                posX: r.posX,
                posY: r.posY,
                posZ: r.posZ,
                rotX: r.rotX,
                rotY: r.rotY,
                rotZ: r.rotZ,
                scaX: r.scaX,
                scaY: r.scaY,
                scaZ: r.scaZ
            }, a, s, Laya.Handler.create(this, () => {
                i && i();
                var e = this.tweens.shift();
                e && this.toTween(this.target, e.value, e.time, e.completeFun, s, n);
            })), this.tween.update = new Laya.Handler(this, () => {
                t.pos && (n ? e.transform.localPosition = new Laya.Vector3(o.posX, o.posY, o.posZ) : e.transform.position = new Laya.Vector3(o.posX, o.posY, o.posZ)), 
                t.rot && (n ? e.transform.localRotationEuler = new Laya.Vector3(o.rotX, o.rotY, o.rotZ) : e.transform.rotationEuler = new Laya.Vector3(o.rotX, o.rotY, o.rotZ)), 
                t.sca && e.transform.setWorldLossyScale(new Laya.Vector3(o.scaX, o.scaY, o.scaZ));
            }), this;
        }
        clearTween(e) {
            this.tweens = [], this.tween.clear(), this.target && e && (e.pos && (this.isLocal ? this.target.transform.localPosition = new Laya.Vector3(e.pos.x, e.pos.y, e.pos.z) : this.target.transform.position = new Laya.Vector3(e.pos.x, e.pos.y, e.pos.z)), 
            e.rot && (this.target.transform.rotationEuler = new Laya.Vector3(e.rot.x, e.rot.y, e.rot.z)), 
            e.sca && this.target.transform.setWorldLossyScale(new Laya.Vector3(e.sca.x, e.sca.y, e.sca.z)));
        }
        then(e, t, a) {
            return this.tweens.push({
                value: e,
                time: t,
                completeFun: a
            }), this;
        }
    }
    class E extends y {
        onUpdate() {
            var e = y.colliders;
            if (e && 0 != e.length) for (var t = e.length - 1; t >= 0; t--) {
                var a = e[t];
                if (a.self.transform) {
                    var i = a.getTarget(this), s = a.self.transform.position.clone(), n = this.self.transform.position.clone(), o = a.sizeZ + this.sizeZ - Math.abs(s.z - n.z);
                    if (Math.abs(s.y - n.y) < this.sizeY + a.sizeY && n.z > s.z - this.sizeZ - a.sizeZ && n.z < s.z + this.sizeZ + a.sizeZ && n.x > s.x - this.sizeX - a.sizeX && n.x < s.x + this.sizeX + a.sizeX && a.isTrigger) {
                        if (s.y > n.y) {
                            n.y = s.y - (this.sizeY + a.sizeY);
                            var r = l.Up;
                        } else n.y = s.y + (this.sizeY + a.sizeY), r = l.Down;
                        i.isFirstTouch ? (a.setTarget(this, !1), a.isTrigger ? this.triggerEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n)) : a.isTrigger ? this.triggerStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n);
                    } else if (o > 0 && o < .5 && n.x > s.x - a.sizeX - this.sizeX && n.x < s.x + a.sizeX + this.sizeX && n.y > s.y - this.sizeY - a.sizeY && n.y < s.y + this.sizeY + a.sizeY) {
                        if (s.z > n.z) {
                            n.z = s.z - (a.sizeZ + this.sizeZ);
                            r = l.Forward;
                        } else n.z = s.z + (a.sizeZ + this.sizeZ), r = l.Backward;
                        i.isFirstTouch ? (a.setTarget(this, !1), a.isTrigger ? this.triggerEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n)) : a.isTrigger ? this.triggerStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n);
                    } else if (Math.abs(s.x - n.x) < a.sizeX + this.sizeX && n.z > s.z - a.sizeZ - this.sizeZ && n.z < s.z + a.sizeZ + this.sizeZ && n.y > s.y - this.sizeY - a.sizeY && n.y < s.y + this.sizeY + a.sizeY) {
                        if (s.x > n.x) {
                            n.x = s.x - (a.sizeX + this.sizeX);
                            r = l.Left;
                        } else n.x = s.x + (a.sizeX + this.sizeX), r = l.Right;
                        i.isFirstTouch ? (a.setTarget(this, !1), a.isTrigger ? this.triggerEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n)) : a.isTrigger ? this.triggerStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n);
                    } else i.isFirstTouch || (a.setTarget(this, !0), a.isTrigger ? this.triggerExit({
                        owner: this.self,
                        target: a
                    }) : this.collisionExit({
                        owner: this.self,
                        target: a
                    }));
                }
            }
        }
        triggerEnter(e) {}
        triggerStay(e) {}
        triggerExit(e) {}
        collisionEnter(e) {}
        collisionStay(e) {}
        collisionExit(e) {}
    }
    !function(e) {
        e.None = "none", e.Forward = "forward", e.Backward = "backward", e.Left = "left", 
        e.Right = "right", e.Up = "up", e.Down = "down";
    }(l || (l = {}));
    class x extends E {
        constructor() {
            super(...arguments), this.radius = 1.1, this.maxRadius = 2, this.amount = 200, this.mats = [], 
            this.canPlay = !0, this.triggerCount = 0, this.currentIndex = 0;
        }
        initData() {
            if (this.rotateTarget) {
                this.canPlay = !0, this.isPressed = !1, this.canRotate = !1, this.currentIndex = 0, 
                this.radius = 1.1, this.init(4, this.radius, this.radius);
                for (var e = 0; e < 1; e++) {
                    this.rotateTarget.getChildAt(e).getChildAt(0)._children.forEach(e => {
                        e.active = !1;
                    });
                }
                this.self.transform.position = new Laya.Vector3(0, 6.94, -16), this.self.transform.rotationEuler = new Laya.Vector3(), 
                this.rollFX.stop();
            }
        }
        onStart() {
            this.init(4, this.radius, this.radius), this.rotateTarget = this.self.getChildAt(0);
            for (var e = 0; e < 1; e++) {
                this.rotateTarget.getChildAt(e).getChildAt(0)._children.forEach(e => {
                    e.active = !1;
                });
            }
            this.tween = new w(), R.Event.on(a.MOUSE_EVENT, this, this.onMouseEvent);
            let t = this.self.transform.position.clone();
            t.y = 5.5 + this.radius, this.self.transform.position = t, this.addRadius = (this.maxRadius - 1.1) / this.amount, 
            this.rollFXSpr = R.Level.moveFX, this.rollFX = this.rollFXSpr.getChildAt(0).particleSystem, 
            this.rollFX.stop();
        }
        onMouseEvent(e) {
            "up" == e.type ? this.isPressed = !1 : "down" == e.type && (this.isPressed = !0);
        }
        onUpdate() {
            if (R.Game.isPlay) {
                if (super.onUpdate(), this.oldStatus != this.isPressed && this.canPlay) {
                    this.oldStatus = this.isPressed;
                    let e = this.self.transform.position.clone();
                    e.z += .4, this.tween.clearTween(), this.isPressed ? (e.y = 5 + this.radius, this.tween.toTween(this.self, {
                        pos: e
                    }, 50, () => {
                        R.Sound.play(h.RollDown), R.Utils.objectShake(R.Level.mainCamera, .1, .1);
                    }, Laya.Ease.backOut).then({
                        sca: new Laya.Vector3(1, .75, 1.25)
                    }, 100).then({
                        sca: new Laya.Vector3(1, 1, 1)
                    }, 100)) : (e.y = 5.5 + this.radius, this.tween.toTween(this.self, {
                        pos: e
                    }, 50).then({
                        sca: new Laya.Vector3(1, 1.25, .75)
                    }, 100).then({
                        sca: new Laya.Vector3(1, 1, 1)
                    }, 100));
                } else this.self.transform.translate(new Laya.Vector3(0, 0, .1));
                this.canRotate && this.rotateTarget.transform.rotate(new Laya.Vector3(-.15, 0, 0)), 
                this.oldRotateStatus != this.canRotate && (this.oldRotateStatus = this.canRotate, 
                this.canRotate && this.fxColor ? (this.rollFX.startColorConstant = this.fxColor, 
                this.rollFX.play(), R.Sound.play(h.RollingLong)) : (this.rollFX.stop(), R.Sound.stop(h.RollingLong)));
                var e = this.self.transform.position.clone();
                e.y = 6.94, this.rollFXSpr.transform.position = e;
            }
        }
        roach() {
            this.isRoach || (this.isRoach = !0, R.Sound.play(h.Roach), Laya.timer.once(1e3, this, () => {
                this.isRoach = !1;
            }));
        }
        triggerEnter(e) {
            var t = e.target.self.name;
            if (-1 != t.indexOf("Sushi1_")) {
                Laya.timer.clear(this, this.cancelRotate), Laya.timer.once(100, this, this.cancelRotate), 
                this.canRotate = !0;
                let t = e.target.self.meshRenderer.material.clone();
                e.target.self.destroy(), this.showPart(t.albedoTexture), R.Event.event("Update_Progress", {
                    value: 5
                });
            } else if (-1 != t.indexOf("Nail_")) Laya.timer.clear(this, this.cancelRotate), 
            Laya.timer.once(100, this, this.cancelRotate), this.canRotate = !0, e.target.self.destroy(), 
            this.showPart(R.Level.nailTexture), R.Event.event("Update_Progress", {
                value: -15
            }), this.roach(); else if ("Bug_01" == t) Laya.timer.clear(this, this.cancelRotate), 
            Laya.timer.once(100, this, this.cancelRotate), this.canRotate = !0, e.target.self.destroy(), 
            this.showPart(R.Level.bugTexture), this.showPart(R.Level.bugTexture), this.showPart(R.Level.bugTexture), 
            R.Event.event("Update_Progress", {
                value: -300
            }), this.roach(); else if ("Ground_Finish" == t) {
                this.canPlay = !1, this.tween.clearTween();
                let e = this.self.transform.position.clone();
                e.z += .4, e.y = 5 + this.radius, this.tween.toTween(this.self, {
                    pos: e
                }, 50, () => {}, Laya.Ease.backOut).then({
                    sca: new Laya.Vector3(1, .75, 1.25)
                }, 100).then({
                    sca: new Laya.Vector3(1, 1, 1)
                }, 100);
            }
        }
        triggerExit(e) {
            "Ground_Finish" == e.target.self.name && (R.Game.isPlay = !1, this.tween.clearTween(), 
            R.Level.finish(this.self, this.radius - 2), this.rollFX.stop());
        }
        cancelRotate() {
            this.canRotate = !1;
        }
        showPart(e) {
            if (this.currentIndex > 199) return;
            var t = e.url.split("/");
            switch (t[t.length - 1]) {
              case "Sushi_02.jpg":
                this.fxColor = R.Utils.getRGBA("#46572B");
                break;

              case "Sushi_04.jpg":
                this.fxColor = R.Utils.getRGBA("#FE5723");
                break;

              case "Sushi_011.jpg":
                this.fxColor = R.Utils.getRGBA("#6FC820");
                break;

              case "Sushi_012.jpg":
                this.fxColor = R.Utils.getRGBA("#EAC811");
                break;

              case "Sushi_03.png":
                this.fxColor = R.Utils.getRGBA("#E3E0C4");
                break;

              case "Sushi_05.png":
                this.fxColor = R.Utils.getRGBA("#FEE211");
                break;

              case "Sushi_06.png":
                this.fxColor = R.Utils.getRGBA("#FFE9C9");
                break;

              case "Sushi_07.png":
                this.fxColor = R.Utils.getRGBA("#D03E36");
                break;

              case "Sushi_08.png":
                this.fxColor = R.Utils.getRGBA("#F9481E");
                break;

              case "Sushi_09.png":
                this.fxColor = R.Utils.getRGBA("#41715C");
                break;

              case "Sushi_010.png":
                this.fxColor = R.Utils.getRGBA("#876540");
                break;

              case "Sushi_012.png":
                this.fxColor = R.Utils.getRGBA("#F5F5F5");
            }
            R.Platform.playVibrateShort();
            for (var a = 0; a < 1; a++) {
                let t = this.rotateTarget.getChildAt(a).getChildAt(0).getChildAt(this.currentIndex);
                t.active = !0, t.meshRenderer.material.albedoTexture = e;
            }
            this.currentIndex++, this.radius = 1.1 + this.currentIndex * this.addRadius;
            let i = this.self.transform.position.clone();
            i.y = 5 + this.radius, this.self.transform.position = i, this.init(4, this.radius, this.radius);
        }
    }
    class I extends L {
        onStart() {
            this.init(1, .2, .24, 0, 0, 0), this.isTrigger = !0;
        }
    }
    class b {
        constructor() {
            this.matType = [ [ "Sushi_02.jpg", "Sushi_03.png", "Sushi_04.jpg", "Sushi_05.png", "Sushi_06.png", "Sushi_07.png", "Sushi_08.png" ], [ "Sushi_011.jpg", "Sushi_012.jpg", "Sushi_012.png" ], [ "Sushi_09.png", "Sushi_010.png" ] ];
        }
        getKnife(e) {
            return this.cloneObj(this.knifes.getChildAt(e));
        }
        getPlate(e) {
            return this.cloneObj(this.plates.getChildAt(e));
        }
        playHero(e) {
            if (this.heroAnim.play(e), "idle" == e) var t = 1; else t = "happy" == e ? 3 : 2;
            for (var a = this.hero.getChildByName("Hero_01"), i = 1; i < 4; i++) a.getChildAt(i - 1).active = i == t;
        }
        init() {
            var e = this.loadSceneRes();
            this.setFog("#EA9B62", !1), this.moveFX = e.getChildByName("MoveFX");
            var t = e.getChildByName("Target");
            this.sushiComp = t.addComponent(x), this.parent = e.getChildByName("Parent"), this.sushi = e.getChildByName("Sushi1_01"), 
            this.nail = e.getChildByName("Nail_01"), this.bug = e.getChildByName("Bug_01"), 
            this.knifes = e.getChildByName("Knifes"), this.plates = e.getChildByName("Plates"), 
            e.getChildByName("GameScene").getChildByName("Ground_Finish").addComponent(S), this.cameraComp.setTarget(t), 
            R.Utils.loadTexture2D("res/scene/Conventional/Assets/Projects/RollSushi/Textures/" + this.matType[2][0], e => {
                this.nailTexture = e;
            }), R.Utils.loadTexture2D("res/scene/Conventional/Assets/Projects/RollSushi/Textures/" + this.matType[2][1], e => {
                this.bugTexture = e;
            });
            let a = e.getChildByName("Hero_01");
            this.heroAnim = a.getComponent(Laya.Animator), this.hero = a, this.initLevel(), 
            this.cameraComp.changeSkin();
        }
        loadSceneRes() {
            let e = Laya.loader.getRes(R.CommonData.sceneResUrl);
            Laya.stage.addChild(e), Laya.stage.setChildIndex(e, 1), this.mainScene = e;
            var t = e.getChildByName("Camera");
            return this.mainCamera = t.getChildByName("Point").getChildByName("Main Camera"), 
            R.Utils.fixCameraField(this.mainCamera), R.CommonData.mainScene = this.mainScene, 
            R.CommonData.mainCamera = this.mainCamera, this.cameraComp = t.addComponent(C), 
            e;
        }
        loadModelRes() {
            return Laya.loader.getRes(R.CommonData.modelResUrl);
        }
        createShadow(e) {
            var t = e.getChildByName("Directional Light");
            t.shadowMode = Laya.ShadowMode.SoftHigh, t.shadowDistance = 60, t.shadowResolution = 2048, 
            t.shadowCascadesMode = Laya.ShadowCascadesMode.TwoCascades, t.shadowNormalBias = .4;
        }
        setFog(e, t = !0) {
            let a = this.mainScene;
            a.enableFog = t, a.fogColor = R.Utils.getRGB(e), a.fogStart = 20, a.fogRange = 50;
        }
        initLevel() {
            this.playHero("idle"), this.cameraComp.initData(), this.parent.destroyChildren(), 
            this.parent.addChild(this.sushiComp.self), this.sushiComp.initData();
            let e = R.Storage.storageData.level;
            if (1 == e) var t = 0; else t = e < 4 ? 1 : 2;
            var a = e % 5 == 0;
            if (a) for (var i = 0; i < 5; i++) this.createSushi(20 * i - 5, a); else for (i = 0; i < 5; i++) Math.random() > .3 || 0 == t || 0 == i ? this.createSushi(20 * i - 5) : t > 0 && (Math.random() > .5 ? this.createNail(20 * i - 5) : this.createBug(20 * i - 5), 
            t--);
        }
        finish(e, t) {
            this.cameraComp.finish(e, t);
        }
        cloneObj(e) {
            return e ? e.clone() : null;
        }
        createSushi(e, t = !1) {
            let a = new Laya.Sprite3D();
            if (this.parent.addChild(a), a.transform.position = new Laya.Vector3(0, 5.9, e), 
            t) var i = R.Utils.getRandomArray(this.matType[1], 1)[0]; else i = R.Utils.getRandomArray(this.matType[0], 1)[0];
            i = "res/scene/Conventional/Assets/Projects/RollSushi/Textures/" + i, R.Utils.loadTexture2D(i, e => {
                let t = this.sushi.clone();
                a.addChild(t), t.transform.localPosition = new Laya.Vector3(0, 0, 0), t._children.forEach(t => {
                    t.addComponent(I), t.meshRenderer.material.albedoTexture = e, t.meshRenderer.material.tilingOffsetZ = 0;
                });
            });
        }
        createNail(e) {
            let t = new Laya.Sprite3D();
            this.parent.addChild(t), t.transform.position = new Laya.Vector3(0, 5.9, e);
            let a = this.nail.clone();
            t.addChild(a), a.transform.localPosition = new Laya.Vector3(0, 0, 0), a._children.forEach(e => {
                e.addComponent(_);
            });
        }
        createBug(e) {
            let t = new Laya.Sprite3D();
            this.parent.addChild(t), t.transform.position = new Laya.Vector3(0, 5.9, e);
            for (var a = 0; a < 3; a++) {
                let e = this.bug.clone();
                t.addChild(e), e.transform.localPosition = new Laya.Vector3(0, 0, 1 * a - 1), e.addComponent(v);
            }
        }
    }
    class A {
        constructor() {
            this.bannerId = "", this.videoId = "", this.interId = "", this.gridId = "", this.existBannerAd = !1, 
            this.existVideoAd = !1, this.existInterAd = !1, this.existGridAd = !1, this.init();
        }
        init() {
            console.error("初始化平台失败");
        }
        loadBanner() {
            console.error("暂不支持调用接口: loadBanner");
        }
        showBanner() {
            console.error("暂不支持调用接口: showBanner");
        }
        hideBanner() {
            console.error("暂不支持调用接口: hideBanner");
        }
        loadVideoAd() {
            console.error("暂不支持调用接口: loadVideoAd");
        }
        showVideoAd() {
            console.error("暂不支持调用接口: showVideoAd");
        }
    }
    !function(e) {
        e[e.WeiXin = 0] = "WeiXin", e[e.Qq = 1] = "Qq", e[e.Vivo = 2] = "Vivo", e[e.Oppo = 3] = "Oppo", 
        e[e.ZiJieTiaoDong = 4] = "ZiJieTiaoDong", e[e.Mgc = 5] = "Mgc", e[e.Swan = 6] = "Swan", 
        e[e.Android = 7] = "Android", e[e.Ios = 8] = "Ios";
    }(c || (c = {}));
    class T extends Laya.Scene {
        constructor() {
            super(), this.navList = this.navList, this.navData = [], this.scrollDir = 1, this.preIndex = -1, 
            this.isRandomSort = !1;
        }
        onAwake() {
            this.height = Laya.stage.height;
        }
        onOpened(e) {
            e && e.isRandomSort && (this.isRandomSort = this.isRandomSort), T.scrollScene = this, 
            this.initList();
        }
        onClosed() {
            Laya.timer.clearAll(this), T.scrollScene = null;
        }
        initList() {
            this.navData = [].concat(F.instance.navDataArr), this.isRandomSort && (this.navData = H.shuffleArr(this.navData)), 
            this.navList.hScrollBarSkin = "", this.navList.repeatX = this.navData.length, this.navList.repeatY = 1, 
            this.navList.array = this.navData, this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), 
            this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), this.ids = [], 
            this.startIndex = 0, this.startLength = 4;
            for (var e = 0; e < this.startLength; e++) {
                var t = this.navData[e];
                t && this.ids.push(t.id);
            }
            Laya.timer.frameLoop(1, this, () => {
                if (this.startIndex != this.navList.startIndex) {
                    if (this.startIndex > this.navList.startIndex) for (var e = 0; e < this.navList.repeatY; e++) this.ids.push(this.navData[this.navList.startIndex + e].id); else for (e = 0; e < this.navList.repeatY; e++) {
                        var t = this.navData[this.startLength - this.navList.repeatY + this.navList.startIndex + e];
                        t && this.ids.push(t.id);
                    }
                    this.startIndex = this.navList.startIndex;
                }
            }), this.scrollLoop();
        }
        mouseHandler(e, t) {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, this.scrollLoop);
        }
        scrollLoop() {
            Laya.timer.once(1e3, this, () => {
                let e = Math.floor(this.navList.startIndex);
                1 == this.scrollDir ? ++e >= this.navData.length - 4 && (e--, this.scrollDir = -this.scrollDir) : --e < 0 && (this.scrollDir = -this.scrollDir), 
                this.navList.tweenTo(e, 1e3, Laya.Handler.create(this, this.scrollLoop));
            });
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item");
                a.getChildByName("icon").skin = this.navData[t].icon, a.off(Laya.Event.CLICK, this, this.navCB, [ t ]), 
                a.on(Laya.Event.CLICK, this, this.navCB, [ t ]);
            }
        }
        navCB(e) {
            console.log("click id:", e), F.instance.NavigateApp(e, () => {});
        }
    }
    class B {
        constructor() {
            this.dataConfig = F.instance.dataConfig;
        }
        static get Instance() {
            return B._instance || (B._instance = new B()), B._instance;
        }
        get isOpenWuChu() {
            let e = R.Storage.storageData.level;
            return this.dataConfig.is_allow_area && H.allowScene() && e >= this.dataConfig.front_pass_gate && e < this.dataConfig.front_wuchu_finish_gate;
        }
        get isOpenExport() {
            return this.dataConfig.is_allow_export && H.allowScene() && this.dataConfig.front_all_export_switch;
        }
        get isShowExportMoreBtn() {
            return this.dataConfig.front_all_export_switch && this.dataConfig.front_jingxi_export_switch;
        }
        navClick(e) {
            console.log("click id:", e), F.instance.NavigateApp(e, () => {});
        }
        getRandomIndex() {
            return Math.floor(Math.random() * F.instance.navDataArr.length);
        }
        get getRandom0To100() {
            return 100 * Math.random();
        }
        missTouch(e, t = 300) {
            R.Platform.hideBanner(), e.bottom = 90;
            var a = F.instance.dataConfig.front_banner_appear, i = F.instance.dataConfig.front_button_up;
            Laya.timer.once(a, e, () => {
                R.Platform.showBanner(), Laya.Tween.to(e, {
                    bottom: t
                }, i);
            });
        }
        clearMissTouch(e) {
            Laya.timer.clearAll(e);
        }
        getTitle(e, t = !0) {
            let a = F.instance.navDataArr;
            return null == a[e] ? " " : t && a[e].subtitle && "" != a[e].subtitle ? a[e].subtitle : a[e].title;
        }
        loadHomePage(e) {
            this.isOpenExport && this.dataConfig.front_homepage_ad_switch ? F.instance.openScene(d.SCENE_RECOMMENDUI, !1, {
                isHomePage: !0,
                closeCallbackFun: () => {
                    F.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                        isHomePage: !0,
                        continueCallbackFun: () => {
                            e && e();
                        },
                        dontClose: !0
                    });
                },
                dontClose: !0
            }) : e && e(), this.isOpenWuChu && (this.getRandom0To100 <= this.dataConfig.front_homepage_video_chance ? (this.dataConfig.front_homepage_video_chance = 0, 
            console.log("首页自动弹出视频"), R.Platform.showVideoAd(!0), R.Event.on(a.AD_VIDEO_CLOSE_EVENT, this, () => {
                R.Platform.showInterAd(), R.Event.offAllCaller(this);
            })) : this.dataConfig.front_wx_ad_switch && R.Platform.createInterAd(!0));
        }
        showInterAd() {
            this.isOpenWuChu && this.dataConfig.front_wx_ad_switch && R.Platform.createInterAd(!0);
        }
        showDuilianTween() {
            let e = H.shuffleArr([].concat(this.duilians)).splice(0, this.duilians.length / 2);
            for (var t = 0; t < e.length; t++) {
                let a = e[t];
                a.rotation = 0, R.Tween.toRotaion(a, 20, 150, !1, !0), Laya.timer.once(300, this, () => {
                    a.rotation = 0, R.Tween.toRotaion(a, -20, 150, !1, !0), Laya.timer.once(300, this, () => {
                        a.rotation = 0, R.Tween.toRotaion(a, 10, 50, !1, !0), Laya.timer.once(100, this, () => {
                            a.rotation = 0, R.Tween.toRotaion(a, -10, 50, !1, !0);
                        });
                    });
                });
            }
            Laya.timer.once(5e3, this, this.showDuilianTween);
        }
        showDuilianIcon(e, t = 200) {
            if (this.isOpenExport && this.dataConfig.front_duilian_export_switch) {
                this.duilians = [];
                let i = this.dataConfig.front_duilian_icon_number, s = 2 * i, n = [].concat(F.instance.navDataArr);
                n = H.shuffleArr(n).slice(0, s);
                for (let a = 0; a < i; a++) for (let i = 0; i < 2; i++) {
                    let s = n.shift(), o = R.Prefab.getItem(r.DuilianIcon);
                    e.addChild(o), o.pos(0 == i ? 5 + o.width / 2 : Laya.stage.width - o.width / 2 - 5, t + 200 * a);
                    let h = o.getChildAt(0), l = o.getChildAt(1);
                    o.getChildAt(2).visible = !1, h.skin = s.icon;
                    let c = F.instance.navDataArr.indexOf(s);
                    l.text = this.getTitle(c), o.off(Laya.Event.CLICK, o.parent, B.Instance.navClick, [ c ]), 
                    o.on(Laya.Event.CLICK, o.parent, B.Instance.navClick, [ c ]), this.duilians.push(o);
                }
                let o = H.shuffleArr([].concat(this.duilians)).splice(0, this.duilians.length / 2);
                for (var a = 0; a < o.length; a++) o[a].getChildAt(2).visible = !0;
                this.showDuilianTween();
            }
        }
        clickStartGame(e) {
            Laya.timer.clear(this, this.showDuilianTween), this.isOpenWuChu && this.getRandom0To100 <= this.dataConfig.front_start_game_chance && this.dataConfig.front_start_video_number > 0 ? (this.dataConfig.front_start_video_number--, 
            console.log("开始游戏"), Laya.Browser.onWeiXin ? (R.Platform.showVideoAd(), R.Event.on(a.AD_VIDEO_CLOSE_EVENT, this, () => {
                this.showFirstBox(e), R.Event.offAllCaller(this);
            })) : this.showFirstBox(e)) : this.showFirstBox(e), this.dataConfig.front_dangezi_switch && R.Platform.createGameCustomAd();
        }
        showGameFinishExport(e) {
            this.dataConfig.front_all_export_switch ? F.instance.openScene(d.SCENE_RECOMMENDUI, !1, {
                closeCallbackFun: () => {
                    F.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                        continueCallbackFun: () => {
                            B.Instance.showSecondBox(e);
                        }
                    });
                }
            }) : B.Instance.showSecondBox(e);
        }
        showSettlement(e) {
            e && (this.isOpenWuChu ? (this.settlementBtn = e, this.missTouch(e, 290)) : (e.bottom = 290, 
            R.Platform.showBanner())), Laya.timer.once(10, this, () => {
                this.showSettlementExportUI(!0), this.settlementAutoNavigateApp();
            }), R.Storage.storageData.level >= this.dataConfig.front_top_gezi_gate && R.Platform.showSingleGridAd();
        }
        closeSettlement(e) {
            R.Platform.hideSingleGridAd(), this.settlementBtn && (this.clearMissTouch(this.settlementBtn), 
            this.settlementBtn = null), this.showSettlementExportUI(!1), this.dataConfig.front_all_export_switch && this.getRandom0To100 < this.dataConfig.front_jiesuan_next_export_chance ? F.instance.openScene(d.SCENE_RECOMMENDUI, !1, {
                closeCallbackFun: () => {
                    F.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                        continueCallbackFun: () => {
                            e && e();
                        }
                    });
                }
            }) : e && e();
        }
        wuchuBtn(e, t, a, i) {
            let s = R.Storage.storageData.level;
            (e == d.SCENE_FULLGAMEUI && s >= this.dataConfig.front_wuchu_wanghong_gate || e == d.SCENE_RECOMMENDUI && s >= this.dataConfig.front_wuchu_remen_gate) && !t && this.isOpenWuChu && !R.Platform.bannerLoadError ? (Laya.timer.once(20, this, () => {
                R.Platform.hideBanner();
            }), R.Utils.addClickEvent(a, a.parent, () => {
                a.offAllCaller(a.parent), Laya.timer.once(this.dataConfig.front_banner_show_time, this, () => {
                    R.Platform.showBanner(), Laya.timer.once(this.dataConfig.front_banner_hide_time, this, () => {
                        R.Platform.hideBanner(), R.Utils.addClickEvent(a, a.parent, i, null, !0);
                    });
                });
            }, null, !0)) : (a.bottom = 300, R.Platform.showBanner(), R.Utils.addClickEvent(a, a.parent, i, null, !0));
        }
        showFullGameUI(e) {
            this.dataConfig.front_all_export_switch && F.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                continueCallbackFun: () => {
                    e && e();
                }
            });
        }
        showRecommendUI(e) {
            this.dataConfig.front_all_export_switch && F.instance.openScene(d.SCENE_RECOMMENDUI, !1, {
                closeCallbackFun: () => {
                    e && e();
                }
            });
        }
        wanghongAutoNavigateApp(e) {
            this.isOpenExport && (e && this.getRandom0To100 < this.dataConfig.front_start_wanghong_chance || !e && this.getRandom0To100 < this.dataConfig.front_inside_wanghong_chance) && F.instance.NavigateApp(this.getRandomIndex(), () => {
                console.log("网红爆款自动跳转取消");
            }, () => {
                console.log("网红爆款自动跳转成功");
            });
        }
        remenAutoNavigateApp(e) {
            this.isOpenExport && (e && this.getRandom0To100 < this.dataConfig.front_start_remen_chance || !e && this.getRandom0To100 < this.dataConfig.front_inside_remen_chance) && F.instance.NavigateApp(this.getRandomIndex(), () => {
                console.log("热门推荐自动跳转取消");
            }, () => {
                console.log("热门推荐自动跳转成功");
            });
        }
        settlementAutoNavigateApp() {
            this.isOpenExport && this.getRandom0To100 < this.dataConfig.front_jiesuan_tiaozhuan_chance && F.instance.NavigateApp(this.getRandomIndex(), () => {
                this.settlementBtn && (this.settlementBtn.bottom = 290, this.clearMissTouch(this.settlementBtn), 
                this.settlementBtn = null), console.log("结算页自动跳转取消"), F.instance.openScene(d.SCENE_RECOMMENDUI), 
                this.remenAutoNavigateApp();
            }, () => {
                console.log("结算页自动跳转成功");
            });
        }
        showSettlementExportUI(e, t = 600) {
            this.dataConfig.front_all_export_switch && (e ? F.instance.openScene(d.SCENE_FINISHGAMEUI, !1, {
                posY: t,
                fixY: !0
            }) : F.instance.closeScene(d.SCENE_FINISHGAMEUI));
        }
        showFirstBox(e) {
            this.isOpenWuChu && R.Storage.storageData.level >= this.dataConfig.front_first_box_gate && this.getRandom0To100 < this.dataConfig.front_box_chance ? R.UI.openScene(o.Box2, !1, {
                closeCallback: () => {
                    e && e();
                }
            }) : e && e();
        }
        showSecondBox(e) {
            this.isOpenWuChu && R.Storage.storageData.level >= this.dataConfig.front_second_box_gate && this.getRandom0To100 < this.dataConfig.front_box_chance ? R.UI.openScene(o.Clean, !1, {
                isSettlement: !0,
                closeCallback: () => {
                    e && e();
                }
            }) : e && e();
        }
    }
    class D {
        constructor() {
            this.showTime = 0, this.currentUseIdIndex = 0, this.bannerColors = [ "#ff0000", "#00ff00", "#0000ff", "#ff00ff" ], 
            this.bannerIndex = 0;
        }
        static get Instance() {
            return D._instance || (D._instance = new D()), D._instance;
        }
        get sysInfo() {
            return this._sysInfo || (this._sysInfo = wx.getSystemInfoSync()), this._sysInfo;
        }
        initAd() {
            this.bannerIds = [ "adunit-4c176d6fe3b24db0" ], B.Instance.isOpenWuChu ? this.changeTime = F.instance.dataConfig.front_banner_change_time : this.changeTime = 3e4, 
            this.loadBanner();
        }
        loadBanner() {
            if (!Laya.Browser.onWeiXin) return;
            if (this.isLoading) return;
            this.isLoading = !0, this.currentBanner && (this.currentBanner.destroy(), this.currentBanner = null, 
            console.log("destroy banner"));
            let e = this.sysInfo, t = this.bannerIds[this.currentUseIdIndex], a = wx.createBannerAd({
                adUnitId: t,
                style: {
                    width: .8 * e.screenWidth,
                    top: .8 * e.screenHeight,
                    left: .2 * e.screenWidth / 2
                }
            });
            a.onLoad(() => {
                console.log("create banner success"), D.Instance.currentBanner = a, D.Instance.isLoading = !1, 
                D.Instance.isLoadBannerError = !1, D.Instance.isloadAndShow && (D.Instance.isloadAndShow = !1, 
                D.Instance.showBanner(), console.log("create and show"));
            }), a.onError(e => {
                console.log("create banner error", e), D.Instance.isLoading = !1, D.Instance.isLoadBannerError = !0, 
                R.Event.event("Hide_Clear_View");
            }), a.onResize(t => {
                let i = a.style.realHeight + .1;
                e.model.startsWith("iPhone X") && (i += 40 / Laya.Browser.height * se.height), a.style.top = e.screenHeight - i;
            });
        }
        showBanner() {
            if (!this.isShowBanner) {
                if (this.isShowBanner = !0, Laya.Browser.onWeiXin) {
                    if (!this.currentBanner) return this.isShowBanner = !1, this.isloadAndShow = !0, 
                    void this.loadBanner();
                    this.currentBanner.show(), this.setBannerTop(0);
                } else this.showVirtualBanner();
                if (console.log("show banner"), this.currentTimer) {
                    let e = this.changeTime - this.showTime;
                    Laya.timer.once(e, this, this.showNextBanner);
                } else this.showTime = 0, Laya.timer.once(this.changeTime, this, this.showNextBanner);
                this.currentTimer = new Date().getTime();
            }
        }
        hideBanner() {
            if (this.isloadAndShow = !1, this.isShowBanner) {
                if (this.isShowBanner = !1, Laya.Browser.onWeiXin) {
                    if (!this.currentBanner) return;
                    this.currentBanner.hide();
                } else this.hideVirtualBanner();
                if (console.log("hide banner"), this.currentTimer) {
                    let e = new Date().getTime() - this.currentTimer;
                    this.showTime += e, console.log("Banner剩余展示时间", this.changeTime - this.showTime);
                }
                Laya.timer.clear(this, this.showNextBanner);
            }
        }
        showNextBanner() {
            this.isShowBanner = !1, Laya.Browser.onWeiXin ? (this.currentBanner.destroy(), this.currentBanner = null) : (this.bannerIndex++, 
            this.bannerIndex > 1 && (this.bannerIndex = 0)), this.currentTimer = null, this.showBanner(), 
            console.log("显示下一个banner");
        }
        setBannerTop(e) {
            if (!this.currentBanner) return;
            let t = this.sysInfo, a = this.currentBanner, i = a.style.realHeight + .1;
            t.model.startsWith("iPhone X") && (i += 40 / Laya.Browser.height * se.height), a.style.top = t.screenHeight - i + e;
        }
        showVirtualBanner() {
            if (!this.bannerImage) {
                var e = new Laya.Scene();
                Laya.stage.addChild(e), e.zOrder = 20, e.mouseThrough = !0, e.size(Laya.stage.width, Laya.stage.height), 
                this.bannerImage = new Laya.Panel(), e.addChild(this.bannerImage), this.bannerImage.centerX = 0, 
                this.bannerImage.bottom = 0, this.bannerImage.size(525, 200), this.bannerImage.on(Laya.Event.CLICK, this, () => {
                    R.Event.event(a.PLATFORM_WAKE_EVENT);
                });
            }
            this.bannerImage.bgColor = this.bannerColors[2 * this.currentUseIdIndex + this.bannerIndex], 
            this.bannerImage.visible = !0;
        }
        hideVirtualBanner() {
            this.bannerImage && (this.bannerImage.visible = !1);
        }
    }
    class k extends A {
        constructor() {
            super(...arguments), this.bannerTopFactor = 0, this.isShowBanner = !1;
        }
        init() {
            if (Laya.Browser.onWeiXin) {
                this.getSystemInfoSync(), this.videoId = "adunit-e8d8f9adc44f082d", this.interId = "adunit-c4e7bc026ad186bd", 
                this.gridId = "adunit-7efb3f01881e231f";
                var e = wx.getLaunchOptionsSync().query;
                console.log("init query:", e);
            }
        }
        initAd() {
            Laya.Browser.onWeiXin;
        }
        getBannerId() {
            var e = Math.floor(100 * Math.random()) % this.bannerIds.length;
            return this.currentBannerId = this.bannerIds[e], this.bannerIds[e];
        }
        setBannerTop(e) {
            D.Instance.setBannerTop(e);
        }
        countBanner() {
            this.existBannerAd && (0 == this.bannerCount && (this.bannerCount = F.instance.showBannerCount, 
            this.loadBanner()), this.bannerCount--, console.log("剩余展示次数", this.bannerCount));
        }
        loadVideoAd() {
            if (Laya.Browser.onWeiXin) {
                var e, t = this;
                null != (e = this.videoAd) && (e.offLoad(onLoadVideo), e.offError(onErrorVideo), 
                e.offClose(onCloseVideo)), (e = wx.createRewardedVideoAd({
                    adUnitId: t.videoId
                })).onLoad(onLoadVideo), e.onError(onErrorVideo), e.onClose(onCloseVideo), this.videoAd = e;
            }
            function onLoadVideo() {
                console.log("video 加载成功"), t.existVideoAd = !0, t.isForceShowVideo && (t.isForceShowVideo = !1, 
                t.showVideoAd());
            }
            function onErrorVideo(e) {
                console.error("video 加载错误", e), t.existVideoAd = !1;
            }
            function onCloseVideo(e) {
                let t = !!(e && e.isEnded || void 0 === e);
                R.Event.event(a.AD_VIDEO_CLOSE_EVENT, {
                    isEnded: t
                });
            }
        }
        showVideoAd(e = !1) {
            if (Laya.Browser.onWeiXin) {
                if (!this.videoAd) return this.isForceShowVideo = !0, void this.loadVideoAd();
                if (!this.existVideoAd) return this.isForceShowVideo = e, e || (console.log("暂无视频"), 
                R.Platform.showToast("暂无视频", 2e3)), void this.videoAd.load();
                if (Laya.Browser.onWeiXin) {
                    var t = this.videoAd;
                    t.show().then(() => {}).catch(e => {
                        t.load().then(() => t.show());
                    });
                }
            }
        }
        createInterAd(e) {
            Laya.Browser.onWeiXin && (this.interAd ? this.showInterAd() : (this.interAd = wx.createInterstitialAd({
                adUnitId: this.interId
            }), this.interAd.onLoad(() => {
                console.log("插屏广告加载成功"), e && this.showInterAd();
            }), this.interAd.onError(e => {
                console.error("插屏广告加载失败"), this.interAd = null;
            })));
        }
        showInterAd() {
            this.interAd && this.interAd.show();
        }
        createHomeCustomAd(e) {
            if (Laya.Browser.onWeiXin) if (this.homeGridAds) e && this.showHomeGridAd(); else {
                let t = 2 * F.instance.dataConfig.front_gezi_number;
                this.homeGridAds = [];
                for (let a = 0; a < t; a++) {
                    let t = this.getGridPos(a, 120 * (Math.floor(a / 2) + 1)), i = wx.createCustomAd({
                        adUnitId: this.gridId,
                        adIntervals: 30,
                        style: t
                    });
                    this.homeGridAds.push(i), i.onLoad(() => {
                        e && i.show();
                    });
                }
            }
        }
        createGameCustomAd() {
            if (Laya.Browser.onWeiXin) {
                if (console.log("create gameGrid ======1"), this.gameGridAd) return;
                console.log("create gameGrid ======2"), this.gameGridAd = [];
                for (let e = 0; e < 2; e++) {
                    let t = this.getGridPos(e, 240 * (Math.floor(e / 2) + 1)), a = wx.createCustomAd({
                        adUnitId: this.gridId,
                        adIntervals: 30,
                        style: t
                    });
                    this.gameGridAd.push(a), a.onLoad(() => {
                        a.show(), console.log("show gameGrid ======");
                    }), console.log("create gameGrid ======3");
                }
            }
        }
        createSingleCustomAd() {
            if (Laya.Browser.onWeiXin) {
                let e = this.getGridPos(1), t = wx.createCustomAd({
                    adUnitId: this.gridId,
                    adIntervals: 30,
                    style: e
                });
                this.singleGridAd = t, t.onLoad(() => {});
            }
        }
        showHomeGridAd() {}
        hideHomeGridAd() {}
        showGameGridAd() {}
        hideGameGridAd() {}
        showSingleGridAd() {}
        hideSingleGridAd() {}
        getGridPos(e, t = 120) {
            let a = {
                width: 20,
                height: 20
            };
            return e % 2 == 0 ? (a.left = 20, a.top = t) : (a.left = this.sysInfo.windowWidth - 90, 
            a.top = t), a;
        }
        loadBanner(e) {
            if (Laya.Browser.onWeiXin && (e && (this.isloadAndShow = e), !this.isLoading)) {
                this.isLoading = !0, this.existBannerAd = !1;
                var t = this, a = this.sysInfo, i = this.getBannerId(), s = wx.createBannerAd({
                    adUnitId: i,
                    style: {
                        top: .8 * a.screenHeight,
                        width: .8 * a.screenWidth,
                        left: .2 * a.screenWidth / 2
                    }
                });
                s.onLoad(() => {
                    var e;
                    (console.log("Banner 加载成功"), t.existBannerAd = !0, t.bannerItem = s, t.isLoading = !1, 
                    t.bannerLoadError = !1, t.isloadAndShow) ? (t.isloadAndShow = !1, (e = R.UI.getTopScene) && e.canShowAd && !e.isWuchu && 0 == F.instance.openSceneCount && t.showBanner()) : t.isShowBanner || (e = R.UI.getTopScene) && e.canShowAd && !e.isWuchu && 0 == F.instance.openSceneCount && t.showBanner();
                }), s.onError(e => {
                    t.existBannerAd = !1, console.error("Banner 加载错误", e), t.isLoading = !1, t.bannerLoadError = !0, 
                    R.Event.event("Hide_Clear_View");
                }), s.onResize(e => {
                    if (!s) return;
                    let i = s.style.realHeight + .1;
                    a.model.startsWith("iPhone X") && (i += 40 / Laya.Browser.height * se.height), s.style.top = a.screenHeight - i + t.bannerTopFactor;
                });
            }
        }
        showScrollUI() {
            null == T.scrollScene ? F.instance.openScene(d.SCENE_SCROLLUI) : Laya.stage.setChildIndex(T.scrollScene, Laya.stage.numChildren - 1);
        }
        hideScrollUI() {
            null != T.scrollScene && (F.instance.closeScene(d.SCENE_SCROLLUI), T.scrollScene = null);
        }
        showBanner(e, t) {
            // D.Instance.showBanner();
        }
        hideBanner() {
            // D.Instance.hideBanner();
        }
        set bannerLoadError(e) {}
        get bannerLoadError() {
            return D.Instance.isLoadBannerError;
        }
        getSystemInfoSync() {
            if (Laya.Browser.onWeiXin) {
                this.sysInfo = wx.getSystemInfoSync();
                var e = this.sysInfo.model.split(" ")[1];
                Number(e) < 8 && R.Storage.setValue(R.Storage.storageName.isSound, !1);
            }
        }
        regisiterWxCallback() {
            Laya.Browser.onWeiXin && (wx.offShow(this.onShowEvent), wx.onShow(this.onShowEvent), 
            wx.offHide(this.onHideEvent), wx.onHide(this.onHideEvent));
        }
        onShowEvent(e) {
            R.Storage.storageData.isSound && R.Sound.playMusic(h.BGM), R.UI.getTopScene && R.UI.getTopScene.url == o.Game3D && 0 == F.instance.openSceneCount && (R.Game.isPlay = !0), 
            R.Event.event(a.PLATFORM_WAKE_EVENT);
        }
        onHideEvent() {
            console.log("onHide"), R.Storage.setValue(R.Storage.storageName.offlineTime, new Date().getTime()), 
            R.Event.event(a.PLATFORM_SLEEP_EVENT), R.Game.isPlay && (R.Game.isPlay = !1);
        }
        showShareMenuWithTicket(e) {
            wx.showShareMenu({
                withShareTicket: e,
                success: function() {},
                fail: function() {},
                complete: function() {}
            });
        }
        regisiterWXShareCallback() {
            if (Laya.Browser.onWeiXin) {
                var e = F.instance.shareContext;
                wx.onShareAppMessage(function() {
                    return console.log("用户点击了转发按钮"), {
                        title: e.title,
                        imageUrl: e.image,
                        query: "share_id=1",
                        success: function(e) {},
                        fail: function() {}
                    };
                });
            }
        }
        showToast(e, t) {
            Laya.Browser.onWeiXin && wx.showToast({
                title: e,
                duration: t,
                icon: "none",
                success: function() {},
                fail: function() {},
                complete: function() {},
                image: "",
                mask: !1
            });
        }
        shareGame(e) {
            if (Laya.Browser.onWeiXin) {
                console.log("分享游戏");
                var t = F.instance.shareContext;
                this.JJShareAppMessage(t, e);
            }
        }
        playVibrateShort() {
            Laya.Browser.onWeiXin && R.Storage.storageData.isVibrate && wx.vibrateShort({
                success: function() {},
                fail: function() {},
                complete: function() {}
            });
        }
        playVibrateLong() {
            Laya.Browser.onWeiXin && R.Storage.storageData.isVibrate && wx.vibrateLong({
                success: function() {},
                fail: function() {},
                complete: function() {}
            });
        }
        showModal(e) {
            if (Laya.Browser.onWeiXin) {
                var t = this;
                wx.showModal({
                    title: "提示",
                    content: e,
                    showCancel: !0,
                    confirmText: "重新分享",
                    success(e) {
                        e.confirm ? (console.log("点击确定"), t.shareGame(t.shareCallBack)) : e.cancel && console.log("点击取消");
                    }
                });
            }
        }
        aldSendEvent(e, t) {
            console.log("埋点：", e), Laya.Browser.onWeiXin && wx.JJSendEvent(() => ({
                name: e,
                param: t
            }));
        }
        aldSendOpenid(e) {}
        JJBannerAdShowCount() {
            var e = this;
            Laya.Browser.onWeiXin && wx.JJBannerAdShowCount(() => ({
                adUnitId: e.currentBannerId,
                adUnitName: "banner",
                pageName: "all"
            }));
        }
        JJSendVideoAdCount(e, t) {
            var a = this;
            Laya.Browser.onWeiXin && wx.JJSendVideoAdCount(() => ({
                adUnitId: a.videoId,
                adUnitName: t,
                isEnded: e
            }));
        }
        JJShareAppMessage(e, t) {
            wx.JJShareAppMessage(() => ({
                title: e.title,
                imageUrl: e.imageUrl,
                id: e.id
            })).then(e => {
                t(e);
            });
        }
        JJOnShareAppMessage(e) {
            wx.JJOnShareAppMessage(() => ({
                title: e.title,
                imageUrl: e.imageUrl,
                id: e.id
            }));
        }
    }
    class P extends k {}
    class M {
        constructor() {
            this.init();
        }
        init() {
            this.costStrength = 1, this.maxStrength = 20, this.recoverTime = 5, this.recoverValue_Share = 5, 
            this.recoverValue_Video = 5, this.currentStrength = R.Storage.storageData.strength;
            let e = (new Date().getTime() - R.Storage.storageData.offlineTime) / 6e4, t = Math.floor(e / this.recoverTime);
            t >= 20 - this.currentStrength && (t = 20 - this.currentStrength), this.addStrength(3, t), 
            this.currentStrength < this.maxStrength && (this.countTime = 0, Laya.timer.loop(1e3, this, this.updateStrengthValue));
        }
        addStrength(e, t) {
            switch (e) {
              case 0:
                this.currentStrength += 1;
                break;

              case 1:
                this.currentStrength += this.recoverValue_Video;
                break;

              case 2:
                this.currentStrength += this.recoverValue_Share;
                break;

              case 3:
                this.currentStrength += t;
            }
            this.currentStrength >= this.maxStrength && null == t && (this.currentStrength = this.maxStrength), 
            this.updateData();
        }
        subStrength(e) {
            if (this.currentStrength < this.costStrength) {
                var t = !1;
                this.isGetStrengthByVideo = !this.isGetStrengthByVideo;
            } else t = !0, this.currentStrength == this.maxStrength && (Laya.timer.clear(this, this.updateStrengthValue), 
            this.countTime = 0, Laya.timer.loop(1e3, this, this.updateStrengthValue)), this.currentStrength -= this.costStrength;
            this.updateData(), e(t);
        }
        get getStrengtByMaxStrength() {
            return this.currentStrength + "/" + this.maxStrength;
        }
        updateStrengthValue() {
            this.countTime++;
            let e = 60 * this.recoverTime - this.countTime;
            this.time = R.Utils.getTimeLeft2BySecond(e), 0 == e && (this.addStrength(0), this.currentStrength < this.maxStrength ? this.countTime = 0 : Laya.timer.clear(this, this.updateStrengthValue));
        }
        updateData() {
            R.Storage.setValue(R.Storage.storageName.strength, this.currentStrength);
        }
    }
    class N {
        constructor() {
            for (var e in this._pathRoot = "res/sound/", this._soundCtx = {}, this._soundFile = [], 
            h) {
                let t = h[e];
                this._soundFile.push(t);
            }
            console.log(this._soundFile), this.init(), Laya.SoundManager.autoStopMusic = !1;
        }
        init() {
            let e = this._pathRoot, t = "", a = this._soundFile, i = this._soundFile.length;
            for (let s = 0; s < i; ++s) {
                t = a[s];
                let i = new Laya.SoundChannel();
                i.url = e + t + ".mp3", -1 != t.indexOf("Bgm") && (i.loops = 0), Laya.SoundManager.addChannel(i), 
                this._soundCtx[t] = !0;
            }
            Laya.loader.load([ "res/sound/Bgm.mp3" ]);
        }
        play(e) {
            this._soundCtx[e] && R.Storage.storageData.isSound && Laya.SoundManager.playSound(this._pathRoot + e + ".mp3");
        }
        stop(e) {
            this._soundCtx[e] && Laya.SoundManager.stopSound(this._pathRoot + e + ".mp3");
        }
        playMusic(e) {
            Laya.SoundManager.stopMusic(), Laya.SoundManager.playMusic(this._pathRoot + e + ".mp3", 0);
        }
        stopMusic() {
            Laya.SoundManager.stopMusic();
        }
    }
    class V {
        constructor() {
            this.host = "https://api.jiujiuhuyu.com/", this.appKey = "1a398b4ddd333191da6d1d20794d2fde", 
            this.gameConfigs = {};
        }
        request(e, t, a, i = "get") {
            let s = new Laya.HttpRequest();
            s.once(Laya.Event.COMPLETE, this, a), s.once(Laya.Event.ERROR, this, this.errorHandler), 
            s.on(Laya.Event.PROGRESS, this, this.progressHandler);
            let n = this.host + e;
            "get" == i ? s.send(n + t, "", "get", "json") : "post" == i && s.send(n, t, "post", "json", [ "Content-Type", "application/json;charset=UTF-8" ]);
        }
        errorHandler(e) {
            console.error("HTTP 错误：", e);
        }
        progressHandler(e) {}
        getJJGameConfigs() {
            let e = {};
            e.version = R.CommonData.gameVersion, e.app_key = this.appKey, e = this.getParam(e), 
            this.request("game/configs", e, function(e) {
                console.log(e);
            });
        }
        getJJGameAds(e = "") {
            let t = {};
            t.app_key = this.appKey, t.position_id = e, t = this.getParam(t), this.request("ads", t, function(e) {
                console.log(e);
            });
        }
        getParam(e) {
            var t = "?";
            for (let a in e) t += a + "=" + e[a] + "&";
            return t;
        }
    }
    class U {
        constructor() {
            this.offset = 0, this.loadModels();
        }
        static get Instance() {
            return U._instance || (U._instance = new U()), U._instance;
        }
        loadModels() {
            Laya.loader.load("jsonFile/ModelsConfig.json", Laya.Handler.create(this, () => {
                this.modelsConfig = Laya.Loader.getRes("jsonFile/ModelsConfig.json");
            }), null, Laya.Loader.JSON);
        }
        randomCreateModels(e) {
            this.offset = e;
            let t = Math.floor(100 * Math.random() % this.modelsConfig.length);
            console.log("关卡模组：", t), this.modelsConfig[t].models.forEach(e => {
                this.createModel(e);
            });
        }
        createModel(e) {
            var t = e.name, a = this.cloneObj(this.model.getChildByName(t));
            this.parent.addChild(a);
            let i = e.position;
            a.transform.position = new Laya.Vector3(Number(i.x), Number(i.y), Number(i.z) + this.offset);
            let s = e.rotation;
            s && (a.transform.rotationEuler = new Laya.Vector3(Number(s.x), Number(s.y), Number(s.z)));
        }
        cloneObj(e) {
            return e.clone();
        }
    }
    class R {
        static get ModelCreator() {
            return U.Instance;
        }
        static init() {
            for (var e in a) a[e] = e;
            R.UI, R.Storage, R.Prefab, R.CommonData, R.Utils, R.Event, R.Game, R.Tween, R.Level, 
            R.Platform, R.Streng, R.Sound, R.ModelCreator;
        }
        static get UI() {
            return this.uiManager || (this.uiManager = new t()), this.uiManager;
        }
        static get Storage() {
            return this.storageManager || (this.storageManager = new i()), this.storageManager;
        }
        static get Utils() {
            return this.utils || (this.utils = new g()), this.utils;
        }
        static get CommonData() {
            return this.commonData || (this.commonData = new s()), this.commonData;
        }
        static get Event() {
            return this.event || (this.event = new Laya.EventDispatcher()), this.event;
        }
        static get Prefab() {
            return this.prefabManager || (this.prefabManager = new u()), this.prefabManager;
        }
        static get Game() {
            return this.gameManager || (this.gameManager = new m()), this.gameManager;
        }
        static get Tween() {
            return this.tweenManager || (this.tweenManager = new f()), this.tweenManager;
        }
        static get Level() {
            return this.levelManager || (this.levelManager = new b()), this.levelManager;
        }
        static get Platform() {
            return this.platformManager || (this.platformManager = new P()), this.platformManager;
        }
        static get Streng() {
            return this.strengthManager || (this.strengthManager = new M()), this.strengthManager;
        }
        static get Sound() {
            return this.soundManager || (this.soundManager = new N()), this.soundManager;
        }
        static get Net() {
            return this.netManager || (this.netManager = new V()), this.netManager;
        }
    }
    !function(e) {
        e.SCENE_FRIENDGAME = "JJExport/FriendGameUI.scene", e.SCENE_SCROLLUI = "JJExport/ScrollUI.scene", 
        e.SCENE_RECOMMENDUI = "JJExport/RecommendUI.scene", e.SCENE_FULLGAMEUI = "JJExport/FullGameUI.scene", 
        e.SCENE_FINISHGAMEUI = "JJExport/FinishGameUI.scene", e.SCENE_DRAWUI = "JJExport/DrawUI.scene", 
        e.SCENE_PROGRAMUI = "JJExport/ProgramUI.scene", e.SCENE_WECHATUI = "JJExport/WeChatUI.scene";
    }(d || (d = {}));
    class F {
        constructor() {
            this.dataConfig = {
                is_allow_area: !1,
                is_allow_export: !1,
                front_wuchu_scene: "1001|1002",
                front_pass_gate: 1,
                front_wuchu_finish_gate: 5,
                front_time_tag_switch: !1,
                front_share_number: 1,
                front_all_export_switch: !1,
                front_homepage_ad_switch: !1,
                front_start_remen_chance: 100,
                front_start_wanghong_chance: 100,
                front_duilian_export_switch: !1,
                front_duilian_icon_number: 4,
                front_jingxi_export_switch: !1,
                front_inside_remen_chance: 100,
                front_inside_wanghong_chance: 100,
                front_jiesuan_tiaozhuan_chance: 100,
                front_jiesuan_next_export_chance: 0,
                front_freetips_switch: !1,
                front_randompaly_start_level: 1,
                front_game_number_official: 1,
                front_first_box_gate: 1,
                front_second_box_gate: 1,
                front_box_chance: 100,
                front_progress_bar_return: .006,
                front_progress_bar_reduce: 6,
                front_box_clicks: [ 2, 8 ],
                front_is_box_force: !1,
                front_banner_show_time: 1e3,
                front_banner_hide_time: 1e3,
                front_wuchu_wanghong_gate: 1,
                front_wuchu_remen_gate: 1,
                front_banner_appear: 1e3,
                front_button_up: 1e3,
                front_banner_ids: [],
                front_create_banner_num: 2,
                front_banner_change_time: 3e3,
                front_banner_refresh_num: 2,
                front_banner_number: 8,
                front_banner_switch: !1,
                front_homepage_video_switch: !1,
                front_start_game_switch: !1,
                front_start_video_number: 1,
                front_top_gezi_gate: 1,
                front_wx_duilian_switch: !1,
                front_gezi_number: 4,
                front_wx_ad_switch: !1,
                front_dangezi_switch: !1,
                front_homepage_video_chance: 0,
                front_start_game_chance: 0,
                show_shield_appids: []
            }, this.navDataArr = [], this.openSceneCount = 0;
        }
        static get instance() {
            return this._instance || (this._instance = new F()), this._instance;
        }
        get isOpenWuChu() {
            let e = R.Storage.storageData.level;
            return this.dataConfig.is_allow_area && H.allowScene() && e >= this.dataConfig.front_pass_gate && e < this.dataConfig.front_wuchu_finish_gate;
        }
        get shareAmount() {
            var e = this.dataConfig.front_share_number;
            return null != e ? e : 4;
        }
        set shareContext(e) {
            this.shareConfig = e;
        }
        get shareContext() {
            return this.shareConfig;
        }
        get showBannerCount() {
            return this.dataConfig.front_banner_number;
        }
        openScene(e, t = !1, a, i, s) {
            Laya.Scene.open(e, t, a, Laya.Handler.create(this, t => {
                e != d.SCENE_FINISHGAMEUI && this.openSceneCount++, Laya.stage.addChild(t), t.zOrder += 10, 
                s && s();
            }));
        }
        closeScene(e) {
            Laya.Scene.close(e);
        }
        NavigateApp(e, t, a) {
            if (0 != this.navDataArr.length && (console.log("跳转", this.navDataArr[e].appid), 
            R.Platform.aldSendEvent("导出-总点击数"), Laya.Browser.onWeiXin)) {
                var i = this;
                wx.JJNavigateToMiniProgram(() => ({
                    appId: i.navDataArr[e].appid,
                    path: i.navDataArr[e].path,
                    id: i.navDataArr[e].id
                })).then(t => {
                    console.log("success"), R.Platform.aldSendEvent("导出成功-总用户数"), R.Platform.aldSendEvent("导出成功-" + i.navDataArr[e].title);
                }, e => {
                    console.log("fail", e), -1 != e.errMsg.indexOf("cancel") && t && t();
                });
            }
        }
        getTitle(e, t = !0) {
            return null == e ? " " : t && e.subtitle && "" != e.subtitle ? e.subtitle : e.title;
        }
        updateDataConfig(e) {
            var t = e.data;
            this.dataConfig.is_allow_area = e.is_allow_area, this.dataConfig.is_allow_export = e.is_allow_export, 
            this.dataConfig.front_wuchu_scene = e.front_wuchu_scene;
            for (let e in t) this.dataConfig[e] = t[e].config_val;
            console.log(this.dataConfig), R.Event.event(a.UPDATE_SHARE_COUNT, {
                amount: this.dataConfig.front_share_number
            });
        }
        updateNavData(e) {
            this.navDataArr = [];
            for (var t = 0; t < e.length; t++) {
                var a = e[t], i = new O();
                i.appid = a.channel_game_appid, i.title = a.channel_game_name, i.path = a.path, 
                i.subtitle = a.originality.copywriting, i.icon = a.originality.material, i.id = a.originality.id, 
                this.navDataArr.push(i);
            }
        }
    }
    class O {}
    class H {
        static httpRequest(e, t, a = "get", i) {
            var s = new Laya.HttpRequest();
            s.http.timeout = 5e3, s.once(Laya.Event.COMPLETE, this, i), s.once(Laya.Event.ERROR, this, this.httpRequest, [ e, t, a, i ]), 
            "get" == a ? s.send(e + "?" + t, "", a, "text") : "post" == a && s.send(e, JSON.stringify(t), a, "text");
        }
        static shuffleArr(e) {
            let t = e.length;
            for (;t; ) {
                let a = Math.floor(Math.random() * t--);
                [e[a], e[t]] = [ e[t], e[a] ];
            }
            return e;
        }
        static fixNodeY(e) {
            e.y = e.y * Laya.stage.displayHeight / Laya.stage.designHeight;
        }
        static visibleDelay(e, t = 1500) {
            e.visible = !1, Laya.timer.once(t, this, () => {
                e.visible = !0;
            });
        }
        static tMove(e, t, a, i) {
            Laya.Tween.to(e, {
                x: t
            }, a, null, new Laya.Handler(this, () => {
                i && i();
            }));
        }
        static allowScene() {
            if (Laya.Browser.onWeiXin) {
                var e = wx.getLaunchOptionsSync();
                console.log("当前场景：", e.scene);
                var t = !0;
                let a = F.instance.dataConfig.front_wuchu_scene;
                if (null == a && (t = !0), -1 == a.search("|")) {
                    t = parseInt(a) != e.scene;
                }
                let i = a.split("|");
                for (let a = 0; a < i.length; a++) {
                    parseInt(i[a]) == e.scene && (t = !1);
                }
                return t;
            }
            return !0;
        }
    }
    class G extends Laya.Script {
        constructor() {
            super(), this.isFix = !1;
        }
        onAwake() {
            if (this.isFix) {
                let e = this.owner;
                H.fixNodeY(e);
            }
        }
        onDestroy() {}
    }
    class z extends Laya.Scene {
        constructor() {
            super(), this.navList = this.navList, this.navData = [], this.clickIndex = 6;
        }
        onOpened(e) {
            e && (e.posY && (this.navList.y = e.posY), 1 == e.fixY && H.fixNodeY(this.navList)), 
            this._init();
        }
        onClosed() {
            Laya.timer.clearAll(this);
        }
        _init() {
            this.initList();
        }
        updateNavData() {
            this.navData = [].concat(H.shuffleArr(F.instance.navDataArr)).slice(0, 6), this.tweenIndex = Math.floor(Math.random() * this.navData.length), 
            this.navList.array = this.navData;
        }
        initList() {
            if (this.navData = [].concat(H.shuffleArr(F.instance.navDataArr)).slice(0, 6), this.tweenIndex = Math.floor(Math.random() * this.navData.length), 
            this.navList.vScrollBarSkin = "", this.navList.repeatX = 3, this.navList.repeatY = 2, 
            this.navList.array = this.navData, this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), 
            this.navData.length < 6) this.imgFinger.visible = !1; else {
                var e = R.Utils.getRandomArray([ 0, 1, 2, 3, 4, 5 ], 1)[0], t = this.navList.cells[e];
                t.addChild(this.imgFinger), this.imgFinger.pos(t.width / 1.5, t.height / 1.5), Laya.timer.loop(1e3, this, this.fingerAnim);
            }
        }
        fingerAnim() {
            if (!this.isPlayFinger) {
                this.isPlayFinger = !0, R.Tween.toRotaion(this.imgFinger, -30, 100, !1, !0), Laya.timer.once(200, this, () => {
                    this.isPlayFinger = !1;
                });
            }
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item");
                a.getChildByName("icon").skin = this.navData[t].icon;
                var i = F.instance.navDataArr.indexOf(this.navData[t]);
                a.off(Laya.Event.CLICK, this, this.navCB, [ t, i ]), a.on(Laya.Event.CLICK, this, this.navCB, [ t, i ]), 
                a.rotation = 0, t == this.tweenIndex && this.tween(a);
            }
        }
        navCB(e, t) {
            R.Platform.aldSendEvent("结算页 6 个 icon-总点击数"), console.log("click id:", t), F.instance.NavigateApp(t, () => {
                F.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                    closeCallbackFun: () => {
                        R.Platform.showBanner();
                    }
                });
            }, () => {
                R.Platform.aldSendEvent("结算页 6 个 icon-总成功跳转数");
            });
        }
        changeData(e) {
            this.updateNavData();
        }
        tween(e) {
            R.Tween.toRotaion(e, 20, 500, !1, !0), Laya.timer.once(1e3, this, () => {
                R.Tween.toRotaion(e, -20, 500, !1, !0), Laya.timer.once(2e3, this, () => {
                    this.updateNavData();
                });
            });
        }
    }
    const X = 600;
    class W extends Laya.Scene {
        constructor() {
            super(), this.rootNode = this.rootNode, this.closeBtn = this.closeBtn, this.navList = this.navList, 
            this.navData = [], this.scrollDir = 1, this.preIndex = -1, this.closeCallbackFun = null, 
            this.isRandomSort = !1;
        }
        onAwake() {
            this.height = Laya.stage.height;
        }
        onOpened(e) {
            e && (e.closeCallbackFun && (this.closeCallbackFun = e.closeCallbackFun), e.isRandomSort && (this.isRandomSort = this.isRandomSort)), 
            this._init(), R.Platform.aldSendEvent("[好友都在玩的爆款游戏] 弹窗-弹出次数"), R.Platform.hideBanner();
        }
        onClosed() {
            Laya.timer.clearAll(this), this.closeCallbackFun && this.closeCallbackFun(), F.instance.openSceneCount--, 
            R.Platform.hideBanner(), R.Utils.clearMissTouch(this.closeBtn);
        }
        _init() {
            this.rootNode.y = X, this.rootNode.y = this.rootNode.y * Laya.stage.displayHeight / Laya.stage.designHeight, 
            this.closeBtn.on(Laya.Event.CLICK, this, this.closeCB), this.initList(), F.instance.isOpenWuChu ? R.Utils.missTouch(this.closeBtn, 260) : Laya.timer.once(800, this, () => {
                R.Platform.showBanner();
            });
        }
        initList() {
            this.navData = [].concat(F.instance.navDataArr), this.navData = H.shuffleArr(this.navData), 
            this.navList.vScrollBarSkin = "", this.navList.repeatX = 3, this.navList.repeatY = Math.floor(this.navData.length / 3), 
            this.navList.array = this.navData, this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), 
            this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        mouseHandler(e, t) {
            this.againScroll();
        }
        againScroll() {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        scrollLoop() {
            let e = this.navList.scrollBar;
            e.value += this.scrollDir, (e.value >= e.max || e.value <= 0) && (this.scrollDir = -this.scrollDir, 
            this.againScroll());
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item"), i = a.getChildByName("icon"), s = a.getChildByName("name");
                i.skin = this.navData[t].icon, s.text = F.instance.getTitle(this.navData[t]), a.off(Laya.Event.CLICK, this, this.navCB, [ t ]), 
                a.on(Laya.Event.CLICK, this, this.navCB, [ t ]);
            }
        }
        navCB(e) {
            R.Platform.aldSendEvent("[好友都在玩的爆款游戏] 弹窗-总点击数"), console.log("click id:", e), e = F.instance.navDataArr.indexOf(this.navData[e]), 
            F.instance.NavigateApp(e, () => {
                F.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                    continueCallbackFun: () => {
                        R.Platform.showBanner();
                    }
                });
            }, () => {
                R.Platform.aldSendEvent("[好友都在玩的爆款游戏] 弹窗-总成功跳转数");
            });
        }
        closeCB() {
            F.instance.closeScene(d.SCENE_FRIENDGAME);
        }
    }
    class J extends Laya.Scene {
        constructor() {
            super(), this.exitBtn = this.exitBtn, this.continueBtn = this.continueBtn, this.navList = this.navList, 
            this.navData = [], this.scrollDir = 1, this.preIndex = -1, this.hotArr = [], this.fingerArr = [], 
            this.continueCallbackFun = null, this.curGrade = -1;
        }
        onAwake() {
            this.height = Laya.stage.height;
        }
        onOpened(e) {
            e && e.continueCallbackFun && (this.continueCallbackFun = e.continueCallbackFun), 
            e && e.grade && (this.curGrade = e.grade), e && e.dontClose && (this.dontClose = !0), 
            this._init(), R.Platform.aldSendEvent("全屏幕导出页出现次数");
            var t = e && e.isHomePage;
            (B.Instance.wanghongAutoNavigateApp(t), B.Instance.wuchuBtn(this.url, t, this.continueBtn, this.continueCB), 
            R.Storage.storageData.level >= B.Instance.dataConfig.front_top_gezi_gate && R.Platform.showSingleGridAd(), 
            R.Platform.hideHomeGridAd(), Laya.Browser.onWeiXin) && (R.Platform.sysInfo.model.startsWith("iPhone X") && (this.continueBtn.bottom += 40));
            F.instance.isOpenFullGameUI = !0;
        }
        onClosed() {
            Laya.timer.clearAll(this), R.Event.offAllCaller(this), R.Platform.hideBanner(), 
            F.instance.openSceneCount--;
            var e = R.UI.getTopScene;
            0 == F.instance.openSceneCount && (e.canShowAd && R.Platform.showBanner(), e.url == o.Home && R.Platform.showHomeGridAd()), 
            F.instance.isOpenFullGameUI = !1, R.Storage.storageData.level >= B.Instance.dataConfig.front_top_gezi_gate && R.Platform.hideSingleGridAd();
        }
        _init() {
            !F.instance.isOpenWuChu || R.Storage.storageData.level < F.instance.dataConfig.front_randompaly_start_level ? this.exitBtn.visible = !1 : this.exitBtn.on(Laya.Event.CLICK, this, this.closeCB), 
            this.getHotRandArr(), this.getFingerRandArr(), this.initList();
        }
        getHotRandArr() {
            let e = F.instance.navDataArr.length, t = [];
            for (var a = 0; a < e; a++) t.push(a);
            t = H.shuffleArr(t), this.hotArr = t.slice(0, Math.round(.2 * e));
        }
        getFingerRandArr() {
            let e = F.instance.navDataArr.length, t = [];
            for (var a = 0; a < e; a++) -1 == this.hotArr.indexOf(a) && t.push(a);
            t = H.shuffleArr(t), this.fingerArr = t.slice(0, Math.round(.2 * e));
        }
        initList() {
            this.navData = [].concat(F.instance.navDataArr), this.navData = H.shuffleArr(this.navData), 
            this.navList.vScrollBarSkin = "", this.navList.repeatX = 3, this.navList.repeatY = Math.floor(this.navData.length / 3), 
            this.navList.array = this.navData, this.navList.height = Laya.stage.displayHeight - 434, 
            this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), 
            this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        mouseHandler(e, t) {
            this.againScroll();
        }
        againScroll() {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        scrollLoop() {
            let e = this.navList.scrollBar;
            e.value += this.scrollDir, (e.value >= e.max || e.value <= 0) && (this.scrollDir = -this.scrollDir, 
            this.againScroll());
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item"), i = a.getChildByName("icon"), s = a.getChildByName("name"), n = a.getChildByName("hot"), o = a.getChildByName("color"), r = a.getChildByName("imgFinger");
                o.skin = "JJExportRes/" + (Math.floor(t % 9) + 1) + ".png", i.skin = this.navData[t].icon, 
                s.text = F.instance.getTitle(this.navData[t]), n.visible = -1 != this.hotArr.indexOf(t), 
                r.visible = -1 != this.fingerArr.indexOf(t), r.visible && (Laya.timer.clear(r, this.fingerAnim), 
                Laya.timer.loop(500, r, this.fingerAnim, [ r ])), a.off(Laya.Event.CLICK, this, this.navCB, [ t ]), 
                a.on(Laya.Event.CLICK, this, this.navCB, [ t ]);
            }
        }
        navCB(e) {
            R.Platform.aldSendEvent("网红爆款全屏幕导出页-总点击数"), console.log("click id:", e), e = F.instance.navDataArr.indexOf(this.navData[e]), 
            F.instance.NavigateApp(e, () => {}, () => {
                R.Platform.aldSendEvent("网红爆款全屏幕导出页-总成功跳转数");
            });
        }
        closeCB() {
            var e = Math.floor(Math.random() * this.navData.length);
            R.Platform.aldSendEvent("网红爆款全屏幕导出页-总点击数"), console.log("click id:", e), F.instance.NavigateApp(e, null, () => {
                R.Platform.aldSendEvent("网红爆款全屏幕导出页-总成功跳转数");
            });
        }
        continueCB() {
            this.dontClose ? this.continueCallbackFun && (this.continueCallbackFun(), this.continueCallbackFun = null) : (this.close(), 
            this.continueCallbackFun && this.continueCallbackFun());
        }
        fingerAnim(e) {
            R.Tween.toRotaion(e, -30, 100, !1, !0);
        }
    }
    class Y extends Laya.Scene {
        constructor() {
            super(), this.navList = this.navList, this.navData = [], this.scrollDir = 1, this.preIndex = -1, 
            this.closeCallbackFun = null, this.fingerArr = [];
        }
        onAwake() {
            this.height = Laya.stage.height;
        }
        onOpened(e) {
            e && e.closeCallbackFun && (this.closeCallbackFun = e.closeCallbackFun), e && e.dontClose && (this.dontClose = !0), 
            this._init(), R.Platform.aldSendEvent("热门推荐全屏幕导出页出现次数");
            var t = e && e.isHomePage;
            B.Instance.remenAutoNavigateApp(t), B.Instance.wuchuBtn(this.url, t, this.continueBtn, this.closeCB), 
            R.Storage.storageData.level >= B.Instance.dataConfig.front_top_gezi_gate && R.Platform.showSingleGridAd();
        }
        onClosed() {
            Laya.timer.clearAll(this), R.Event.offAllCaller(this), F.instance.isOpenWuChu && R.Platform.hideBanner(), 
            F.instance.openSceneCount--;
            var e = R.UI.getTopScene;
            0 == F.instance.openSceneCount && null != e && e.canShowAd && R.Platform.showBanner(), 
            R.UI.getTopScene.url == o.Reborn && R.Event.event("timeStatus", {
                isStartTimer: !0
            }), R.Storage.storageData.level >= B.Instance.dataConfig.front_top_gezi_gate && R.Platform.hideSingleGridAd(), 
            this.closeCallbackFun && this.closeCallbackFun();
        }
        getFingerRandArr() {
            let e = F.instance.navDataArr.length, t = [];
            for (var a = 0; a < e; a++) t.push(a);
            t = H.shuffleArr(t), this.fingerArr = t.slice(0, Math.round(.3 * e));
        }
        _init() {
            this.getFingerRandArr(), this.initList();
        }
        initList() {
            this.navData = [].concat(F.instance.navDataArr), this.navData = H.shuffleArr(this.navData), 
            this.navList.vScrollBarSkin = "", this.navList.repeatX = 2, this.navList.repeatY = Math.floor(this.navData.length / 2), 
            this.navList.array = this.navData, this.navList.height = Laya.stage.displayHeight - 430, 
            this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), 
            this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        mouseHandler(e, t) {
            this.againScroll();
        }
        againScroll() {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        scrollLoop() {
            let e = this.navList.scrollBar;
            e.value += this.scrollDir, (e.value >= e.max || e.value <= 0) && (this.scrollDir = -this.scrollDir, 
            this.againScroll());
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item"), i = a.getChildByName("icon"), s = a.getChildByName("name"), n = a.getChildByName("imgFinger");
                i.skin = this.navData[t].icon, s.text = F.instance.getTitle(this.navData[t]), n.visible = -1 != this.fingerArr.indexOf(t), 
                n.visible && (Laya.timer.clear(n, this.fingerAnim), Laya.timer.loop(500, n, this.fingerAnim, [ n ])), 
                a.off(Laya.Event.CLICK, this, this.navCB, [ t ]), a.on(Laya.Event.CLICK, this, this.navCB, [ t ]);
            }
        }
        navCB(e) {
            R.Platform.aldSendEvent("热门推荐全屏幕导出页-总点击数"), console.log("click id:", e), e = F.instance.navDataArr.indexOf(this.navData[e]), 
            F.instance.NavigateApp(e, () => {}, () => {
                R.Platform.aldSendEvent("热门推荐全屏幕导出页-总成功跳转数");
            });
        }
        onContinueClick() {
            var e = Math.floor(Math.random() * this.navData.length);
            R.Platform.aldSendEvent("热门推荐全屏幕导出页-总点击数"), console.log("click id:", e), F.instance.NavigateApp(e, null, () => {
                R.Platform.aldSendEvent("热门推荐全屏幕导出页-总成功跳转数");
            });
        }
        closeCB() {
            this.dontClose ? this.closeCallbackFun && (this.closeCallbackFun(), this.closeCallbackFun = null) : this.close();
        }
        fingerAnim(e) {
            R.Tween.toRotaion(e, -30, 100, !1, !0);
        }
    }
    class K extends Laya.Scene {
        checkShareOrVideo() {
            this.isVideo = R.Storage.storageData.shareCount <= 0, this.imgType && (this.isVideo ? this.imgType.skin = "ui/sy_sj_04.png" : this.imgType.skin = "ui/sy_sj_05.png"), 
            R.Event.on(a.AD_VIDEO_CLOSE_EVENT, this, this.onCloseVideo);
        }
        onAwake() {
            (this.height = Laya.stage.height, this.checkShareOrVideo(), Laya.Browser.onWeiXin && this.btmBox) && (R.Platform.sysInfo.model.startsWith("iPhone X") && (this.btmBox.bottom += 40));
            this.init(), this.initUI(), this.initData(), this.initEvent(), this.canShowAd && !this.isWuchu && 0 == F.instance.openSceneCount ? (R.Platform.showBanner(), 
            console.log("BaseScene ShowBanner")) : (R.Platform.hideBanner(), console.log("BaseScene HideBanner")), 
            Laya.timer.once(10, this, () => {
                null != T.scrollScene && Laya.stage.setChildIndex(T.scrollScene, Laya.stage.numChildren - 1);
            }), R.Event.on(a.UPDATE_CHECK_SV, this, this.checkShareOrVideo);
        }
        get isWuchu() {
            return F.instance.isOpenWuChu && this.url == o.Settlement;
        }
        onClosed() {
            Laya.timer.clearAll(this), R.Event.offAllCaller(this), this.scene.destroy();
        }
        init() {
            this.btnClose && R.Utils.addClickEvent(this.btnClose, this, this.onCloseEvent, null, !0), 
            this.fcCoin && (this.fcCoin.value = R.Storage.storageData.coin.toString(), R.Event.on(a.CHANGE_COIN_EVENT, this, () => {
                this.fcCoin.value = R.Storage.storageData.coin.toString();
            })), this.fcLevel && (this.fcLevel.value = R.Storage.storageData.level.toString());
        }
        initUI() {}
        initData() {}
        initEvent() {}
        onCloseEvent() {
            R.UI.closeScene(this.url), this.onBtnCloseCallBack && this.onBtnCloseCallBack();
        }
        RewardClick(e, t) {
            if (!Laya.Browser.onWeiXin) return this.rewardCallback = e, void this.rewardCallback();
            t || this.isVideo ? (R.Event.off(a.AD_VIDEO_CLOSE_EVENT, this, this.onCloseVideo), 
            R.Event.on(a.AD_VIDEO_CLOSE_EVENT, this, this.onCloseVideo), this.rewardCallback = e, 
            R.Platform.showVideoAd()) : R.Platform.shareGame(t => {
                t ? (e(), R.Event.event(a.UPDATE_SHARE_COUNT, {
                    amount: R.Storage.storageData.shareCount - 1
                })) : R.Platform.showModal(R.CommonData.shareContext);
            });
        }
        onCloseVideo(e) {
            this.rewardCallback && (e.isEnded ? this.rewardCallback() : (console.log("未看完视频"), 
            R.Platform.showToast("未看完视频", 2e3)), this.rewardCallback = null);
        }
        get canShowAd() {
            return this.url == o.Settlement || this.url == o.Home;
        }
    }
    class j extends K {
        constructor() {
            super(...arguments), this.boxMaskHeight = 0;
        }
        onPress() {
            this.pressBar.value += this.addProgerss, Laya.Tween.to(this.btnPress, {
                scaleX: .7,
                scaleY: .7
            }, 110, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnPress, {
                    scaleX: 1,
                    scaleY: 1
                }, 110, null);
            })), Laya.Tween.to(this.imgSushi, {
                rotation: 30
            }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.imgSushi, {
                    rotation: 0
                }, 100);
            })), console.log("前", this.pressBar.value, this.addProgerss, this.needClick), this.pressBar.value >= this.needClick * this.addProgerss && (R.Platform.showBanner(), 
            Laya.timer.once(2500, this, () => {
                this.isforce ? (R.Platform.bannerLoadError && (R.Event.offAll("Hide_Clear_View"), 
                this.onCloseEvent()), R.Platform.hideBanner()) : (R.Event.offAll("Hide_Clear_View"), 
                this.onCloseEvent());
            }));
        }
        reFreshUI() {
            this.pressBar.value > F.instance.dataConfig.front_progress_bar_return && (this.pressBar.value -= F.instance.dataConfig.front_progress_bar_return), 
            this.light.rotation += 1;
        }
        show() {
            this.pressBar.value = 0;
        }
        initUI() {
            R.Utils.addClickEvent(this.btnPress, this, this.onPress), this.show(), Laya.timer.frameLoop(1, this, this.reFreshUI), 
            this.pressBar.value = 0;
            var e = Number(F.instance.dataConfig.front_box_clicks[0]), t = Number(F.instance.dataConfig.front_box_clicks[1]);
            this.max = t, this.needClick = Math.floor(Math.random() * (t - F.instance.dataConfig.front_progress_bar_reduce - e + 1)) + e, 
            this.addProgerss = 1 / t, console.log("点击数：", this.needClick), F.instance.dataConfig.front_is_box_force ? (this.isforce = !0, 
            R.Event.on("Hide_Clear_View", this, () => {
                R.Event.offAll("Hide_Clear_View"), this.onCloseEvent();
            })) : this.isforce = !1;
        }
        initEvent() {
            R.Event.on(a.PLATFORM_WAKE_EVENT, this, this.onCloseEvent), R.Platform.bannerLoadError || R.Event.on("Hide_Clear_View", this, () => {
                R.Event.offAll("Hide_Clear_View"), this.onCloseEvent();
            });
        }
        onOpened(e) {
            super.onOpened(e), this.visible = !1, e && (this.closeCallback = e.closeCallback), 
            Laya.timer.once(100, this, () => {
                R.Platform.hideBanner();
            }), this.visible = !0, Laya.timer.once(10, this, () => {
                R.Platform.bannerLoadError && (R.Event.offAll("Hide_Clear_View"), this.onCloseEvent());
            });
        }
        onCloseEvent() {
            R.Event.offAll("Hide_Clear_View"), R.Event.off(a.PLATFORM_WAKE_EVENT, this, this.onCloseEvent), 
            R.UI.closeScene(o.Box2), this.closeCallback && (this.closeCallback(), this.closeCallback = null);
        }
    }
    class Z extends K {
        initData() {
            this.countTimer = 0, this.count = 1, Laya.timer.frameLoop(1, this, this.checkLoad);
        }
        checkLoad() {
            this.imgRotate.rotation += 5, this.countTimer += Laya.timer.delta, this.countTimer / 1e3 > .2 && (this.count++, 
            this.countTimer = 0, this.count > 3 && (this.count = 1)), this.updateLoading(), 
            R.CommonData.loadFinished && (R.CommonData.loadFinished = !1, console.log("进入游戏首页"), 
            R.UI.openScene(o.Game3D, !1, null, null, () => {
                R.Sound.playMusic(h.BGM), R.UI.openScene(o.Home, !1, null, null, () => {
                    R.UI.closeScene(o.BusyLoading), R.Platform.aldSendEvent("进入首页");
                });
            }));
        }
        updateLoading() {
            for (var e = 0; e < 3; e++) {
                this.imgLoading.getChildAt(e).visible = this.count >= e + 1;
            }
        }
    }
    class q extends K {
        constructor() {
            super(...arguments), this.boxMaskHeight = 0;
        }
        onPress() {
            this.pressBar.value += this.addProgerss, Laya.Tween.to(this.btnPress, {
                scaleX: .7,
                scaleY: .7
            }, 110, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnPress, {
                    scaleX: 1,
                    scaleY: 1
                }, 110, null);
            })), Laya.Tween.to(this.imgGift, {
                rotation: 30
            }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.imgGift, {
                    rotation: 0
                }, 100);
            })), console.log("前", this.pressBar.value, this.addProgerss, this.needClick), this.pressBar.value >= this.needClick * this.addProgerss && (R.Platform.showBanner(), 
            Laya.timer.once(2500, this, () => {
                this.isforce ? (R.Platform.bannerLoadError && (R.Event.offAll("Hide_Clear_View"), 
                this.onCloseEvent()), R.Platform.hideBanner()) : (R.Event.offAll("Hide_Clear_View"), 
                this.onCloseEvent());
            }));
        }
        reFreshUI() {
            this.pressBar.value > F.instance.dataConfig.front_progress_bar_return && (this.pressBar.value -= F.instance.dataConfig.front_progress_bar_return), 
            this.light.rotation += 1;
        }
        show() {
            this.pressBar.value = 0;
        }
        initUI() {
            R.Utils.addClickEvent(this.btnPress, this, this.onPress), this.show(), Laya.timer.frameLoop(1, this, this.reFreshUI), 
            this.pressBar.value = 0;
            var e = Number(F.instance.dataConfig.front_box_clicks[0]), t = Number(F.instance.dataConfig.front_box_clicks[1]);
            this.max = t, this.needClick = Math.floor(Math.random() * (t - F.instance.dataConfig.front_progress_bar_reduce - e)) + e, 
            this.addProgerss = 1 / t, console.log("点击数：", this.needClick), F.instance.dataConfig.front_is_box_force ? (this.isforce = !0, 
            R.Event.on("Hide_Clear_View", this, () => {
                R.Event.offAll("Hide_Clear_View"), this.onCloseEvent();
            })) : this.isforce = !1;
        }
        initEvent() {
            R.Event.on(a.PLATFORM_WAKE_EVENT, this, this.onCloseEvent), R.Platform.bannerLoadError || R.Event.on("Hide_Clear_View", this, () => {
                R.Event.offAll("Hide_Clear_View"), this.onCloseEvent();
            });
        }
        onOpened(e) {
            super.onOpened(e), e.isSettlement && (this.imgGift.skin = "ui/jx_lw_02.png"), this.visible = !1, 
            e && (this.closeCallback = e.closeCallback), Laya.timer.once(100, this, () => {
                R.Platform.hideBanner();
            }), Math.random() < F.instance.dataConfig.front_box_chance / 100 ? (this.visible = !0, 
            Laya.timer.once(10, this, () => {
                R.Platform.bannerLoadError && (R.Event.offAll("Hide_Clear_View"), this.onCloseEvent());
            })) : this.onCloseEvent();
        }
        onCloseEvent() {
            R.Event.offAll("Hide_Clear_View"), R.Event.off(a.PLATFORM_WAKE_EVENT, this, this.onCloseEvent), 
            R.UI.closeScene(o.Clean), this.closeCallback && (this.closeCallback(), this.closeCallback = null);
        }
    }
    class Q extends K {
        constructor() {
            super(...arguments), this.lastWidth = 0;
        }
        initData() {
            this.tween = new Laya.Tween();
        }
        initUI() {
            B.Instance.isOpenExport && F.instance.dataConfig.front_freetips_switch || (this.iconItem.visible = !1), 
            this.visible = !1, this.levelProgress.width = 0, this.lastWidth = 0, this.emoji1.visible = !0, 
            this.emoji2.visible = !0;
        }
        initEvent() {
            R.Event.on(a.GAME_OVER_EVENT, this, this.onGameOverEvent), R.Event.on(a.GAME_INIT_EVENT, this, this.onInitGameEvent), 
            R.Event.on(a.GAME_PLAY_EVENT, this, this.onPlayGameEvent), R.Event.on("Update_Progress", this, e => {
                let t = this.lastWidth + e.value;
                this.lastWidth = t, t > 552 ? (t = 552, this.lastWidth = 552) : t < 0 && (t = 0);
                this.tween.clear(), this.tween.to(this.levelProgress, {
                    width: t
                }, 500), this.emoji2.visible = this.levelProgress.width < 545, this.emoji1.visible = this.levelProgress.width < 280, 
                e.value < 0 ? this.showBadEmoji() : this.showGoodEmoji();
            });
        }
        showBadEmoji() {
            if (this.isShowing) return;
            this.isShowing = !0;
            let e = "ui/Face_0" + (Math.ceil(2 * Math.random()) + 6) + ".png";
            R.Utils.emojiAnim(e, {
                x: Laya.stage.width / 2,
                y: Laya.stage.height / 2
            }, this, 1, () => {
                this.isShowing = !1;
            });
        }
        showGoodEmoji() {
            if (this.isShowing) return;
            this.isShowing = !0;
            let e = "ui/Face_0" + Math.ceil(5 * Math.random()) + ".png";
            R.Utils.emojiAnim(e, {
                x: Laya.stage.width / 2,
                y: Laya.stage.height / 2
            }, this, 1, () => {
                this.isShowing = !1;
            });
        }
        onInitGameEvent() {
            R.Game.isOver = !1, R.Game.isPlay = !1, this.visible = !1, this.iconItem.left = -200, 
            this.fcLevel.value = R.Storage.storageData.level.toString(), R.Level.setFog("#EA9B62", !1), 
            R.Level.initLevel(), this.levelProgress.width = 0, this.lastWidth = 0, this.emoji1.visible = !0, 
            this.emoji2.visible = !0, R.Event.event("hide_game_gridComponent");
        }
        onPlayGameEvent(e) {
            R.Level.cameraComp.start(), this.visible = !0, R.Event.event("show_game_gridComponent"), 
            R.UI.closeScene(o.Home), R.Platform.aldSendEvent("开始游戏"), R.Platform.aldSendEvent("第" + R.Storage.storageData.level + "关：进入"), 
            Laya.timer.once(500, this, () => {
                R.Level.setFog("#EA9B62");
            }), Laya.timer.once(1e3, this, () => {
                R.Game.isPlay = !0, R.Game.isOver = !1, B.Instance.isOpenExport && F.instance.dataConfig.front_freetips_switch && Laya.timer.once(1500, this, () => {
                    this.iconItem.visible = !0, Laya.Tween.to(this.iconItem, {
                        left: 30
                    }, 500);
                }), F.instance.dataConfig.front_banner_switch && Laya.timer.once(1e3, this, () => {
                    R.Platform.showBanner();
                }), this.showTips();
            });
        }
        onGameOverEvent(e) {
            if (!R.Game.isOver) {
                if (R.Storage.passLevel(), R.Game.isPlay = !1, R.Game.isOver = !0, Laya.timer.clearAll(this), 
                this.lastWidth > 280) {
                    Laya.timer.once(100, this, () => {
                        R.Level.playHero("happy");
                    }), R.Level.cameraComp.shineFX.active = !0, R.Sound.play(h.EndLight);
                    for (var t = 0; t < 5; t++) {
                        let e = "ui/Face_0" + Math.ceil(5 * Math.random()) + ".png";
                        R.Utils.emojiAnim(e, {
                            x: Laya.stage.width / 2,
                            y: Laya.stage.height / 2
                        }, this, 1);
                    }
                } else {
                    Laya.timer.once(100, this, () => {
                        R.Level.playHero("sad");
                    }), R.Sound.play(h.Fail);
                    for (t = 0; t < 5; t++) {
                        let e = "ui/Face_0" + (Math.ceil(2 * Math.random()) + 6) + ".png";
                        R.Utils.emojiAnim(e, {
                            x: Laya.stage.width / 2,
                            y: Laya.stage.height / 2
                        }, this, 1);
                    }
                }
                Laya.timer.once(3e3, this, () => {
                    this.visible = !1, B.Instance.showGameFinishExport(() => {
                        R.UI.openScene(o.Settlement, !1);
                    });
                }), R.Platform.hideGameGridAd();
            }
        }
        showTips() {
            this.imgTips.visible = !0, R.Tween.toScale(this.imgTips, 1, 1.1, 500, !1, !0), R.Game.isPlay = !1, 
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onCloseTips);
        }
        onCloseTips() {
            R.Tween.clear(this.imgTips), this.imgTips.visible = !1, R.Game.isPlay = !0, Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onCloseTips), 
            R.Level.cameraComp.fx.play();
        }
    }
    class $ extends Laya.Script {
        constructor() {
            super(...arguments), this.currentId = 0, this.totalId = 2, this.loopTime = 3e3, 
            this.iconSize = 150, this.isShowName = !0, this.fontSize = 20, this.fontPosYFactor = 0, 
            this.fontColor = "#ffffff", this.isTween = !0, this.isTweenByParent = !1, this.tweenMode = "scale", 
            this.callbackScene = "RecommendUI";
        }
        onAwake() {
            if (this.initUI(), F.instance.navDataArr && F.instance.navDataArr.length > 0) {
                this.totalLength = F.instance.navDataArr.length, this.currentIndex = 0;
                for (var e = Math.floor(this.totalLength / this.totalId), t = [], a = 0; a < e; a++) {
                    var i = a * this.totalId + this.currentId;
                    t.push(i);
                }
                this.loopNums = t, Laya.timer.once(10, this, () => {
                    this.initData(), Laya.timer.loop(this.loopTime, this, this.initData);
                });
            } else this.imgIcon.visible = !1;
        }
        initUI() {
            if (this.imgIcon = this.owner, this.lbName = this.owner.getChildAt(0), this.imgIcon.width = this.iconSize, 
            this.imgIcon.height = this.iconSize, this.isShowName ? (this.lbName.fontSize = this.fontSize, 
            this.lbName.y = this.imgIcon.height + this.fontPosYFactor, this.lbName.color = this.fontColor) : this.lbName.visible = !1, 
            this.isTween) {
                var e = null;
                e = this.isTweenByParent ? this.owner.parent : this.imgIcon, "scale" == this.tweenMode ? R.Tween.toScale(e, 1, 1.1, 500, !0, !0) : R.Tween.toRotaion(e, 20, 500, !0);
            }
        }
        initData() {
            this.loopNums[this.currentIndex] > F.instance.navDataArr.length - 1 && (this.currentIndex = 0);
            var e = F.instance.navDataArr[this.loopNums[this.currentIndex]];
            this.imgIcon.skin = e.icon, this.lbName.text = e.title, this.imgIcon.off(Laya.Event.CLICK, this, this.navCB), 
            this.imgIcon.on(Laya.Event.CLICK, this, this.navCB, [ this.loopNums[this.currentIndex] ]), 
            this.currentIndex++, this.currentIndex > Math.floor(this.totalLength / this.totalId) - 1 && (this.currentIndex = 0);
        }
        navCB(e) {
            console.log("click id:", e), F.instance.NavigateApp(e, () => {
                if ("RecommendUI" == this.callbackScene) F.instance.openScene(d.SCENE_RECOMMENDUI); else {
                    var e = R.UI.getTopScene;
                    e.url != o.Settlement && e.url != o.Reborn && F.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                        continueCallbackFun: () => {
                            R.Game.isPlay = !0;
                        }
                    });
                }
            }, () => {
                "RecommendUI" == this.callbackScene ? R.Platform.aldSendEvent("首页导出位-总成功数") : (R.Game.isPlay = !1, 
                R.Platform.aldSendEvent("游戏内导出位-总成功数"));
            }), "RecommendUI" == this.callbackScene ? R.Platform.aldSendEvent("首页导出位-总点击数") : (R.Game.isPlay = !1, 
            R.Platform.aldSendEvent("游戏内导出位-总点击数"));
        }
        onDestroy() {
            if (this.isTween) {
                var e = null;
                e = this.isTweenByParent ? this.owner.parent : this.imgIcon, R.Tween.clear(e);
            }
            this.imgIcon.off(Laya.Event.CLICK, this, this.navCB), Laya.timer.clear(this, this.initData);
        }
    }
    class ee extends K {
        initUI() {
            this.btnMore.visible = B.Instance.isShowExportMoreBtn, this.btmBox.visible = !0, 
            R.Tween.toScale(this.btnMore, 1, 1.1, 1e3, !1, !0), this.initList();
        }
        initEvent() {
            R.Utils.addClickEvent(this.btnStart, this, this.onPlayGameClick), R.Utils.addClickEvent(this.btnMore, this, this.onBtnMoreClick), 
            R.Utils.addClickEvent(this.btnSkin, this, () => {
                R.UI.openScene(o.Skin);
            });
        }
        onBtnMoreClick() {
            R.Platform.aldSendEvent("点我有惊喜按钮点击"), B.Instance.showFullGameUI();
        }
        onOpened(e) {
            super.onOpened(e), B.Instance.showInterAd(), B.Instance.showDuilianIcon(this, 500);
        }
        onClosed() {
            super.onClosed(), R.Platform.hideHomeGridAd();
        }
        onPlayGameClick() {

            // GDAdsInstance.showInterstitial().then(()=>{
            //     B.Instance.clickStartGame(() => {
            //         R.Event.event(a.GAME_PLAY_EVENT), R.Platform.showGameGridAd();
            //     });
            // });

            GamemonetizeAdsInstance.showInterstitial().then(()=>{
                B.Instance.clickStartGame(() => {
                    R.Event.event(a.GAME_PLAY_EVENT), R.Platform.showGameGridAd();
                });
            });
           
        }
        onListRender(e, t) {
            let a = this.skinData[t], i = e.getChildByName("icon"), s = e.getChildByName("imgLock");
            i.skin = a.itemSkin, s.visible = a.isLock, t = a.selectId, e.off(Laya.Event.CLICK, this, this.selectClick, [ t ]), 
            e.on(Laya.Event.CLICK, this, this.selectClick, [ t ]);
        }
        onGetSkinClick() {
            this.isSkinClick = !0,
            GamemonetizeAdsInstance.showInterstitial().then(()=>{
                this.isSkinClick = !1, this.isKnife ? (R.Storage.getSkin(R.Storage.storageName.skinKnife, this.selectIndex + 1), 
                R.Storage.changeSkin(R.Storage.storageName.knifeIndex, this.selectIndex + 1)) : (R.Storage.getSkin(R.Storage.storageName.skinPlate, this.selectIndex + 1), 
                R.Storage.changeSkin(R.Storage.storageName.plateIndex, this.selectIndex + 1));
                let e = this.getSkinData();
                this.skinList.array = e, R.Level.cameraComp.changeSkin(), 9 != R.Storage.storageData.skinKnife.length || 9 != R.Storage.storageData.skinPlate.length || (this.skinBox.visible = !1);
            });

            // GDAdsInstance.showReward().then(isRewared=>{
            //     if(isRewared){
            //         //给奖励
            //         this.isSkinClick = !1, this.isKnife ? (R.Storage.getSkin(R.Storage.storageName.skinKnife, this.selectIndex + 1), 
            //         R.Storage.changeSkin(R.Storage.storageName.knifeIndex, this.selectIndex + 1)) : (R.Storage.getSkin(R.Storage.storageName.skinPlate, this.selectIndex + 1), 
            //         R.Storage.changeSkin(R.Storage.storageName.plateIndex, this.selectIndex + 1));
            //         let e = this.getSkinData();
            //         this.skinList.array = e, R.Level.cameraComp.changeSkin(), 9 != R.Storage.storageData.skinKnife.length || 9 != R.Storage.storageData.skinPlate.length || (this.skinBox.visible = !1);
            //     }else{
            //         //视频没看完
            //         promptTxT("Failed to get the reward, please watch the ads to the end.");
            //     }
            // });
            // this.RewardClick(() => {
            //     this.isSkinClick = !1, this.isKnife ? (R.Storage.getSkin(R.Storage.storageName.skinKnife, this.selectIndex + 1), 
            //     R.Storage.changeSkin(R.Storage.storageName.knifeIndex, this.selectIndex + 1)) : (R.Storage.getSkin(R.Storage.storageName.skinPlate, this.selectIndex + 1), 
            //     R.Storage.changeSkin(R.Storage.storageName.plateIndex, this.selectIndex + 1));
            //     let e = this.getSkinData();
            //     this.skinList.array = e, R.Level.cameraComp.changeSkin(), 9 != R.Storage.storageData.skinKnife.length || 9 != R.Storage.storageData.skinPlate.length || (this.skinBox.visible = !1);
            // });
        }
        initCurrentSkin() {}
        selectClick(e) {
            if (this.selectIndex = e, this.isKnife && -1 == R.Storage.storageData.skinKnife.indexOf(e + 1) || !this.isKnife && -1 == R.Storage.storageData.skinPlate.indexOf(e + 1)) this.onGetSkinClick(); else {
                let e = this.getSkinData();
                this.skinList.array = e;
            }
        }
        getSkinData() {
            let e = [];
            if (9 == R.Storage.storageData.skinKnife.length) {
                var t = R.Storage.storageData.skinPlate;
                this.isKnife = !1;
            } else t = R.Storage.storageData.skinKnife, this.isKnife = !0;
            for (let a = 0; a < 9; a++) {
                let i = {};
                -1 == t.indexOf(a + 1) && (i.isLock = !0, i.selectId = a, i.itemSkin = this.isKnife ? "ui/Knife_0" + (a + 1) + ".png" : "ui/Plate_0" + (a + 1) + ".png", 
                e.push(i));
            }
            return this.skinData = e, e;
        }
        initList() {
            if (9 == R.Storage.storageData.skinKnife.length && 9 == R.Storage.storageData.skinPlate.length) return void (this.skinBox.visible = !1);
            this.skinList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1), 
            this.skinList.hScrollBarSkin = "", this.skinList.elasticEnabled = !0;
            let e = this.getSkinData();
            this.skinList.array = e;
        }
    }
    class te extends K {
        initEvent() {
            R.Utils.addClickEvent(this.btnHome, this, this.backClick);
        }
        backClick() {
            B.Instance.closeSettlement(() => {
                R.UI.openScene(o.Home, !1, null, null, e => {
                    this.onCloseEvent(), R.Event.event(a.GAME_INIT_EVENT);
                });
            });
        }
        onOpened(e) {
            super.onOpened(e), (R.Storage.storageData.level - 1) % 5 == 0 ? (R.Storage.updateCoin(1e3), 
            this.fcReward.value = "1000") : (R.Storage.updateCoin(500), this.fcReward.value = "500"), 
            R.CommonData.playCount++, B.Instance.showSettlement(this.btmmBox);
        }
    }
    class ae extends K {
        constructor() {
            super(...arguments), this.tab = 1;
        }
        initUI() {
            this.skinList.vScrollBarSkin = "", this.skinList.selectEnable = !0, this.skinList.selectHandler = new Laya.Handler(this, this.onSelectItem), 
            this.skinList.renderHandler = new Laya.Handler(this, this.updateItem), this.selectIndex = R.Storage.storageData.plateIndex, 
            this.updateData(), R.Platform.hideHomeGridAd();
        }
        getSkin(e) {
            1 == this.tab ? R.Storage.getSkin(R.Storage.storageName.skinPlate, e + 1) : R.Storage.getSkin(R.Storage.storageName.skinKnife, e + 1), 
            this.selectIndex = e + 1, this.updateData();
        }
        onSelectItem(e) {
            if (-1 != e) {
                var t = this.skinData[e];
                // t.isLock ? t.isVideo ? GDAdsInstance.showReward().then(isRewared=>{
				// 	if(isRewared){
				// 		//给奖励
                //         this.getSkin(e);
				// 	}else{
				// 		//视频没看完
				// 		promptTxT("Failed to get the reward, please watch the ads to the end.");
				// 	}
				// }) : R.Storage.storageData.coin >= t.cost ? (R.Storage.updateCoin(-t.cost), 
                t.isLock ? t.isVideo ?  GamemonetizeAdsInstance.showInterstitial().then(()=>{
                    this.getSkin(e);
                }): R.Storage.storageData.coin >= t.cost ? (R.Storage.updateCoin(-t.cost), 
                this.getSkin(e)) : (console.log("金币不足"), promptTxT("Not enough money")) : (this.selectIndex = e + 1, 
                this.updateData());
               
                
            }
        }
        updateItem(e, t) {
            var a = e.getChildAt(0), i = e.getChildAt(1), s = e.getChildAt(2), n = s.getChildAt(0);
            let o = this.skinData[t];
            a.skin = o.imgSkin, o.isLock ? (i.visible = !1, s.visible = !0, o.isVideo ? (n.visible = !1, 
            s.skin = "ui/sd_btn_mf.png") : (n.visible = !0, n.value = o.cost, s.skin = "ui/sd_btn_jb.png")) : o.isSelected ? (i.visible = !0, 
            s.visible = !1) : (i.visible = !1, s.visible = !1);
        }
        initEvent() {
            R.Utils.addClickEvent(this.btnPlate, this, () => {
                this.tab = 1, this.skinList.selectedIndex = -1, this.selectIndex = R.Storage.storageData.plateIndex, 
                this.updateData();
            }), R.Utils.addClickEvent(this.btnKnife, this, () => {
                this.tab = 2, this.skinList.selectedIndex = -1, this.selectIndex = R.Storage.storageData.knifeIndex, 
                this.updateData();
            });
        }
        updateData() {
            if (this.skinData = [], 1 == this.tab) {
                this.btnPlate.skin = "ui/sd_btn_pz2.png", this.btnKnife.skin = "ui/sd_btn_xd1.png";
                for (var e = 1; e < 10; e++) {
                    let t = {
                        imgSkin: "ui/Plate_0" + e + ".png",
                        isLock: -1 == R.Storage.storageData.skinPlate.indexOf(e),
                        isSelected: this.selectIndex == e,
                        isVideo: e > 6,
                        cost: 500 * (e + 1)
                    };
                    this.skinData.push(t);
                }
                this.skinData[this.selectIndex - 1].isLock || R.Storage.changeSkin(R.Storage.storageName.plateIndex, this.selectIndex);
            } else {
                this.btnPlate.skin = "ui/sd_btn_pz1.png", this.btnKnife.skin = "ui/sd_btn_xd2.png";
                for (e = 1; e < 10; e++) {
                    let t = {
                        imgSkin: "ui/Knife_0" + e + ".png",
                        isLock: -1 == R.Storage.storageData.skinKnife.indexOf(e),
                        isSelected: this.selectIndex == e,
                        isVideo: e > 6,
                        cost: 500 * (e + 1)
                    };
                    this.skinData.push(t);
                }
                this.skinData[this.selectIndex - 1].isLock || R.Storage.changeSkin(R.Storage.storageName.knifeIndex, this.selectIndex);
            }
            this.skinList.array = this.skinData;
        }
        onClosed() {
            super.onClosed(), R.Level.cameraComp.changeSkin(), R.Platform.showHomeGridAd();
        }
    }
    class ie extends Laya.Scene {
        onAwake() {
            this.height = Laya.stage.height, this.initUI();
        }
        initUI() {
            F.instance.dataConfig.front_time_tag_switch ? (this.updateTime(), Laya.timer.loop(6e4, this, this.updateTime), 
            R.Event.on(a.GAME_OVER_EVENT, this, e => {
                Laya.timer.once(100, this, this.updateTime);
            })) : this.fcTime.visible = !1;
        }
        updateTime() {
            let e = new Date(), t = e.getMonth() + 1, a = e.getDate(), i = e.getHours(), s = e.getMinutes(), n = t < 10 ? "0" + t : t.toString(), o = a < 10 ? "0" + a : a.toString(), r = i < 10 ? "0" + i : i.toString(), h = s < 10 ? "0" + s : s.toString();
            this.fcTime.text = "V" + this.switch(h) + this.switch(r) + this.switch(o) + this.switch(n) + "-" + R.Storage.storageData.level;
        }
        switch(e) {
            let t = "";
            for (let a = e.length - 1; a >= 0; a--) t += e[a];
            return t;
        }
    }
    class se {
        constructor() {}
        static init() {
            var t = Laya.ClassUtils.regClass;
            t("JJExport/View/DrawUI.ts", e), t("JJExport/Libs/AutoFixPosY.ts", G), t("JJExport/View/FinishGameUI.ts", z), 
            t("JJExport/View/FriendGameUI.ts", W), t("JJExport/View/FullGameUI.ts", J), t("JJExport/View/RecommendUI.ts", Y), 
            t("JJExport/View/ScrollUI.ts", T), t("scripts/uiScenes/Box2.ts", j), t("scripts/uiScenes/BusyLoading.ts", Z), 
            t("scripts/uiScenes/Clean.ts", q), t("scripts/uiScenes/Game3D.ts", Q), t("JJExport/Component/SingleIcon.ts", $), 
            t("scripts/uiScenes/Home.ts", ee), t("scripts/uiScenes/Settlement.ts", te), t("scripts/uiScenes/Skin.ts", ae), 
            t("scripts/uiScenes/TimeScene.ts", ie);
        }
    }
    se.width = 750, se.height = 1334, se.scaleMode = "fixedwidth", se.screenMode = "vertical", 
    se.alignV = "middle", se.alignH = "center", se.startScene = "JJExport/FullGameUI.scene", 
    se.sceneRoot = "", se.debug = !1, se.stat = !1, se.physicsDebug = !1, se.exportSceneToJson = !0, 
    se.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(se.width, se.height) : Laya.init(se.width, se.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = se.scaleMode, Laya.stage.screenMode = se.screenMode, Laya.stage.alignV = se.alignV, 
            Laya.stage.alignH = se.alignH, Laya.URL.exportSceneToJson = se.exportSceneToJson, 
            Laya.stage.useRetinalCanvas = !1, (se.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            se.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), se.stat && Laya.Stat.show(), 
               Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            // GDAdsInstance.adsAsyncInit().then(()=>{
            //     //初始化成功
            //  })
            GamemonetizeAdsInstance.adsAsyncInit().then(()=>{
                //初始化成功
            });
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            if (R.init(), Laya.Browser.onWeiXin) {
                let e = [ "scene" ];
                R.Utils.loadSubpackagesSync(e, this, (e, t) => {
                    t && (e.load3DRes(), R.CommonData.laodSubpackageFinish = !0);
                });
            } else this.load3DRes();
            // R.Platform.aldSendEvent("进入游戏"), Laya.Browser.window.JJGetGameConfigAdShare().then(e => {
                // console.log("获取游戏配置：", e.data.config), F.instance.updateDataConfig(e.data.config), 
                // R.Platform.bannerCount = F.instance.showBannerCount, console.log("获取导出配置：", e.data.ad), 
                // F.instance.updateNavData(e.data.ad), console.log("获取分享配置：", e.data.share);
                // var t = e.data.share[0];
                if (t && (F.instance.shareContext = {
                    title: t.share_content,
                    imageUrl: t.share_img,
                    id: t.id
                }), Laya.timer.once(50, this, this.checkLoad), F.instance.dataConfig.is_allow_area, 
                H.allowScene(), F.instance.dataConfig.front_banner_number, F.instance.dataConfig.front_banner_change_time, 
                F.instance.dataConfig.front_banner_refresh_num, F.instance.dataConfig.front_create_banner_num, 
                F.instance.dataConfig.front_banner_ids, D.Instance.initAd(), Laya.Scene.open("UIScene/TimeScene.scene", !1, null, Laya.Handler.create(this, e => {
                    Laya.stage.addChild(e), e.zOrder = 100;
                })), Laya.Browser.onWeiXin) {
                    R.Platform.regisiterWxCallback(), R.Platform.showShareMenuWithTicket(!0), R.Platform.JJOnShareAppMessage(F.instance.shareContext);
                    let e = F.instance.dataConfig, t = e.show_shield_appids;
                    if (t.length > 0) {
                        var a = wx.getLaunchOptionsSync();
                        a.referrerInfo && -1 != t.indexOf(a.referrerInfo.appId) && (e.front_homepage_ad_switch = !0, 
                        e.front_pass_gate = 1, e.is_allow_export = !0, e.is_allow_area = !0);
                    }
                }
            // }, () => {
            //     F.instance.dataConfig.front_banner_number, F.instance.dataConfig.front_banner_change_time, 
            //     F.instance.dataConfig.front_banner_refresh_num, F.instance.dataConfig.front_create_banner_num, 
            //     F.instance.dataConfig.front_banner_ids, D.Instance.initAd(), Laya.Browser.onWeiXin && (R.Platform.regisiterWxCallback(), 
            //     R.Platform.showShareMenuWithTicket(!0));
            // });
        }
        loadAtlas() {
            var e = [ {
                url: "res/atlas/ui.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/ui.png",
                type: Laya.Loader.IMAGE
            }, {
                url: "res/atlas/loading.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/loading.png",
                type: Laya.Loader.IMAGE
            } ];
            Laya.loader.load(e, Laya.Handler.create(this, function() {
                R.init(), se.startScene && Laya.Scene.open(se.startScene);
            }));
        }
        load3DRes() {
            var e = [ {
                url: R.CommonData.sceneResUrl,
                clas: Laya.Scene3D,
                priority: 1
            } ];
            Laya.loader.create(e, Laya.Handler.create(this, this.onLoadFinished, [ {
                target: "3dRes"
            } ], !1), null), Laya.loader.on(Laya.Event.ERROR, this, e => {
                console.error("资源加载失败", e);
            });
        }
        onLoadFinished(e) {
            console.log("资源加载完成", e), R.CommonData.loadFinished = !0, R.Level.init();
        }
        checkLoad() {
            B.Instance.loadHomePage(() => {
                R.CommonData.loadFinished ? R.UI.openScene(o.Game3D, !1, null, null, () => {
                    R.Sound.playMusic(h.BGM), R.UI.openScene(o.Home), F.instance.closeScene(d.SCENE_FULLGAMEUI), 
                    F.instance.closeScene(d.SCENE_RECOMMENDUI);
                }) : R.UI.openScene(o.BusyLoading, !1, null, null, e => {
                    F.instance.closeScene(d.SCENE_FULLGAMEUI), F.instance.closeScene(d.SCENE_RECOMMENDUI);
                });
            });
        }
    }();
}();