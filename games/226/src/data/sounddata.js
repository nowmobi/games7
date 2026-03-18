SoundData = {
	atlasKey: "global",  // set NULL if not using atlas
	soundOn: "global/sound-on",
	soundOff: "global/sound-off",
	bgmVolume: 0.8,
	sfxVolume: 1,
	mobileSFX: true,
	bgm: [
		'dvorakpolka',
	],
	sfx: [
		'click',
		'cookstart',
		'cookfinish',
		'cash',
	],
	init: function() {
		csound.click = function(){
			csound.sfx('click');
		}

		csound.cookstart = function(){
			csound.sfx('cookstart');
		}

		csound.cookfinish = function(){
			csound.sfx('cookfinish');
		}

		csound.cash = function(){
			csound.sfx('cash');
		}
	}
}