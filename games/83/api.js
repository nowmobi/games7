window.SDK_OPTIONS = {
    gameId: "sezgl4hottucvxgld398s7s9u3g6j9yb",
    onEvent: function (a) {
        switch (a.name) {
            case "SDK_GAME_PAUSE":
                // pause game logic / mute audio
                if (ig && ig.game) {
                    ig.game.adShown = true;
                    if (typeof ig.game.pauseGame == 'function') ig.game.pauseGame();
                    if (ig.soundHandler) ig.soundHandler.forceMuteAll();
                }
                break;
            case "SDK_GAME_START":
                // advertisement done, resume game logic and unmute audio
                if (ig && ig.game) {
                    ig.game.adShown = false;
                    if (typeof ig.game.resumeGame == 'function') ig.game.resumeGame();
                    if (ig.soundHandler) ig.soundHandler.forceUnMuteAll();
                }
                break;
            case "SDK_READY":
                // when sdk is ready
                break;
            case "SDK_ERROR":
                // when sdk get error
                break;
        }
    }
};
(function (a, b, c) {
    var d = a.getElementsByTagName(b)[0];
    a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
})(document, "script", "gamemonetize-sdk");

/* <!-- Global site tag (gtag.js) - Google Analytics --> */
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    var gID = 'UA-50806252-6'; // REPLACE THE ID HERE *************************
    var gURL = "https://www.googletagmanager.com/gtag/js?id=" + gID;
    js = d.createElement(s);
    js.id = id;
    js.src = gURL;
    js.async = true;
    js.onload = function () {
        js.onload = null;
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', gID);
    }.bind(this)
    fjs.parentNode.insertBefore(js, fjs);
}.bind(this)(document, 'script', 'gtag'));