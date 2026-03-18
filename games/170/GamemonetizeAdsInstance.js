"use strict";
/**
 * Gamemonetize广告
 */
var TAG = "GamemonetizeAdsInstance_AD_WEB";
var GamemonetizeAdsInstance = /** @class */ (function () {
    function GamemonetizeAdsInstance() {
        /**
         * 是否初始化
         */
        this.isInited = false;
    }
    GamemonetizeAdsInstance.prototype.adsAsyncInit = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            window["SDK_OPTIONS"] = {
                gameId: "p0elhs3sbhslkpqz6xi8hxtcpue7tm3n",
                onEvent: function (event) {
                    console.log("event.name ====", event);
                    switch (event.name) {
                        case "SDK_GAME_PAUSE":
                            break;
                        case "SDK_GAME_START":
                            if (_this.onSuccess) {
                                _this.onSuccess(false);
                                _this.onSuccess = null;
                            }
                            _this.onComplete();
                            break;
                        case "SDK_READY":
                            resolve(_this.isInited);
                            break;
                        default:
                            break;
                    }
                }
            };
            _this.init().then(function (isInited) {
                _this.isInited = isInited;
            });
        });
    };
    /**
     * 初始化googlesdk
     */
    GamemonetizeAdsInstance.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var t = _this;
            var ads = document.getElementById(TAG);
            if (ads && !_this.isInited) {
                ads = null;
            }
            if (!ads) {
                function onLoaded() {
                    resolve(true);
                }
                function onError(e) {
                    console.log("onError", e);
                    reject(false);
                }
                var library = document.createElement("script");
                library.onload = onLoaded.bind(_this);
                library.onerror = onError.bind(_this);
                library.type = "text/javascript";
                library.async = false;
                library.src = "https://api.gamemonetize.com/sdk.js";
                library.id = TAG;
                document.head.appendChild(library);
            }
            else {
                resolve(true);
            }
        });
    };
    /**
     * 广告完成
     */
    GamemonetizeAdsInstance.prototype.onComplete = function () {
		
    };
    /**
     * 请求广告
     */
    GamemonetizeAdsInstance.prototype.request = function (isRewared) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.isInited) {
                resolve(false);
                return;
            }
            _this.onSuccess = resolve;
            window["sdk"].showBanner();
        });
    };
    GamemonetizeAdsInstance.prototype.showInterstitial = function () {
        return this.request(false);
    };
    GamemonetizeAdsInstance.prototype.showReward = function () {
        return this.request(true);
    };

    return GamemonetizeAdsInstance;
}());
window["GamemonetizeAdsInstance"] = new GamemonetizeAdsInstance();
