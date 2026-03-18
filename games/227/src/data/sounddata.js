SoundData = {
	atlasKey: "global",  // set NULL if not using atlas
	soundOn: "global/sound-on",
	soundOff: "global/sound-off",
	bgmVolume: 0.8,
	sfxVolume: 1,
	mobileSFX: true,
	bgm: [
		'santorico',
		'italianafternoon',
	],
	sfx: [
		'click',
		'cash',
		'perfect', 
		'great',
		'good',
		'fall',
		'allperfect',
		'wrong',
		'nextmission',
	],
	init: function() {
		csound.click = function(){
			csound.sfx('click');
		}

		csound.perfect = function(){
			csound.sfx('perfect');
		}

		csound.great = function(){
			csound.sfx('great');
		}

		csound.good = function(){
			csound.sfx('good');
		}

		csound.cash = function(){
			csound.sfx('cash');
		}

		csound.wrong = function(){
			csound.sfx('wrong');
		}

		csound.fall = function(){
			return;
			csound.sfx('fall');
		}

		csound.allperfect = function(){
			csound.sfx('allperfect');
		}

		csound.missionsuccess = function(){
			csound.sfx('nextmission');
		}
	}
}