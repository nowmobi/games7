var Ardents = {
    GA_Property_ID: "UA-117670656-2",
    GA_Domain: "undefined",
    GA_Label: "Gamejolt"
}

var _A = Ardents;
try {
    _A.GA_Domain = _A.GA_Label+'/'+document.location.hostname;
} catch (error) {
    _A.GA_Domain = _A.GA_Label+'/'+"undefined";
}

// Load Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', _A.GA_Property_ID, 'auto');


_A.trackPage = function(pagename) {
    if (ga) {
        trace("TRACK PAGE:", pagename);
        var host = false;
        try {
            host = document.location.hostname;
        } catch (error) {
            host = false;
        }
        if (!host) host = "undefined";

        // Sets the page value on the tracker.
        ga('set', 'page', '/'+_A.GA_Domain+'/'+pagename);

        // Sending the pageview no longer requires passing the page
        // value since it's now stored on the tracker object.
        ga('send', 'pageview');
    }
}

_A.track = function(category, action, value) {

    if (!value) value = 1;
    if (ga) {
        trace("TRACK:", category, action, value);

        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: category+'/'+action,
            eventLabel: _A.GA_Domain,
            eventValue: value
        });

    }
    

}

_A.startPage = function(pagename) {
    _A.trackPage(pagename);
    _A.track('Start Page', pagename, 1);
    _A.showAds();
}

_A.endPage = function(pagename) {
    _A.track('End Page', pagename, 1);
    _A.showAds();

}

_A.win = function(level, score) {
    if (!score) score = 0;
    _A.track('Level Win', level, 1);
    _A.track('Score Win', level, score);
    _A.showAds();

}
// _A.win(1,200)

_A.lose = function(level, score) {
    if (!score) score = 0;
    _A.track('Level Lose', level, 1);
    _A.track('Score Lose', level, score);
    _A.showAds();

}
// _A.lose(1,100)

_A.startLevel = function(level) {
    _A.track('Start Level', level, 1);
    _A.showAds();

}

_A.pauseHandler = function()
{
    if (!game) return;
    if (!game.paused) game.paused = true;

    datagames.bgm = false;
	global.bgmpause();
};

_A.unpauseHandler = function()
{
    if (!game) return;
    if (!game.paused) game.paused = false;

    datagames.bgm = true;
	global.bgmresume();
    
};

_A.showAds = function()
{
    sdk.showBanner();
};