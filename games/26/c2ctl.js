 function ctlArcadeSaveScore(iScore) {
     if (parent.__ctlArcadeSaveScore) {
         parent.__ctlArcadeSaveScore({
             score: iScore
         });
     }
 }


 function ctlArcadeStartSession() {
     if (parent.__ctlArcadeStartSession) {
         parent.__ctlArcadeStartSession();
     }
 }

 function ctlArcadeEndSession() {
     if (parent.__ctlArcadeEndSession) {
         parent.__ctlArcadeEndSession();
     }
 }

 function ctlArcadeRestartLevel() {
     if (parent.__ctlArcadeRestartLevel) {
         parent.__ctlArcadeRestartLevel();
     }
 }

 function ctlArcadeStartLevel() {
     if (parent.__ctlArcadeStartLevel) {
         parent.__ctlArcadeStartLevel();
     }
 }

 function ctlArcadeEndLevel() {
     if (parent.__ctlArcadeEndLevel) {
         parent.__ctlArcadeEndLevel();
     }
 }

 function ctlArcadeShowInterlevelAD() {
     gdApi.showBanner();
 }

 function ctlArcadeShareEvent(szImg, szTitle, szMsg, szMsgShare) {
     if (parent.__ctlArcadeShareEvent) {
         parent.__ctlArcadeShareEvent({
             img: szImg,
             title: szTitle,
             msg: szMsg,
             msg_share: szMsgShare
         });
     }
 }

 function ctlArcadeResume() {
     c2_callFunction("c2ctlArcadeResume");
 }

 function ctlArcadePause() {
     c2_callFunction("c2ctlArcadePause");
 }

 function inIframe() {
     try {
         return window.self !== window.top;
     } catch (e) {
         return true;
     }
 }

 // GAME DISTRIBUTION API

 // Settings	
 let settings = {
     // This is the gameId you get when you've create a game on gamemonetize.com
     gameId: "od325ee0a7h8dhk3xhykdwddvpuqamsa",

     // Along with the gameid you'll also be supplied a userId, put it here
     userId: "91A55D35-4129-4833-9EE3-8C96BA2CA479-s1",

     // This function will be called when the ad begins and when your game should be paused. It's required that you mute your game at this point
     pauseGame: function() {
         c2_callFunction("c2ctlArcadePause");
     },

     // This callback is called when the ad is finished, you can resume your game and unmute your audio
     resumeGame: function() {
         c2_callFunction("c2ctlArcadeResume");
     },

     // Called when the gdApi initlialized, will be deprecated soon
     onInit: function(data) {
         console.log("Init: ", data);
     },

     // Called when an error appears in the gdApi, will be deprecated soon
     onError: function(data) {
         console.log("Error: ", data);
     }
 };

 //Include the gdApi script
 (function(i, s, o, g, r, a, m) {
     i['gamemonetize'] = r;
     i[r] = i[r] || function() {
         (i[r].q = i[r].q || []).push(arguments)
     };
     i[r].l = 1 * new Date();
     a = s.createElement(o);
     m = s.getElementsByTagName(o)[0];
     a.async = 1;
     a.src = g;
     m.parentNode.insertBefore(a, m);
 })(window, document, 'script', '//api.gamemonetize.com/sdk.js', 'gdApi');


 //Initialize the gdApi script with the previously defined settings
 gdApi(settings);