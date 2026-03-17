   window.SDK_OPTIONS = {
      gameId: "zrrzl1932zgh5phfqaq33axx6tv3pi8p",
      onEvent: function (a) {
         switch (a.name) {
            case "SDK_GAME_PAUSE":
               // pause game logic / mute audio
               
				console.log('PAUSED');
				Howler.mute(true);
               break;
            case "SDK_GAME_START":
               // advertisement done, resume game logic and unmute audio
               //console.log(HC);
               console.log('SDK_GAME_START');
				
				Howler.mute(false);
				if(ls){
					levelSelectionScreen();
					ls = false;
				}
				else if(SG){
					showGrid();
					SG = false;
				}
				else if(PSPB){
					pauseScreenRemove();
					PSPB = false;
				}
				else if(SI){
					howToPlay();
					SI = false;
				}
				else if(HC){
					handleClick();
					HC = false;
				}
               break;
            case "SDK_READY":
               // when sdk is ready
               break;
         }
      }
   };
(function (a, b, c) {
   var d = a.getElementsByTagName(b)[0];
   a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
})(document, "script", "gamemonetize-sdk"); 

