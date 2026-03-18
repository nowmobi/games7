_c = {}

_c.PASSIVE = 0;
_c.ACTIVE = 1;

// skills sidekicks
S_SK = [
	{
		id:0,
		name:"Extra Dps",
		desc:"Extra [x]% damage for this sidekick",
		param1:20,
		cost:50,
	},

	{
		id:1,
		name:"Extra CHC",
		desc:"Extra [x]% hero's critical chance",
		param1:2,
		cost:100,
	}
]

// SK = Sidekick heroes
SK = [
	{
		id:0,
		name:"Sidekick A",
		initDps:10,
		initCost:50,
		skills:[0] // id skills (liat var S_SK)
	},

	{
		id:1,
		name:"Sidekick B",
		initDps:15,
		initCost:100,
		skills:[1]
	},

	{
		id:2,
		name:"Sidekick C",
		initDps:15,
		initCost:100,
		skills:[0, 1]
	},
]

// Skills2 hero
S_HERO = [
	{
		id:0,
		name:"Hero's Level", 
		desc:"Fire the main gun [x]x times in 1 shot",
		type:_c.PASSIVE,
		lv1UpCost:25
	},

	{
		id:1,
		name:"Burst Shot", 
		desc:"Fire the main gun [x]x times in 1 shot",
		param1:[10, 14, 18],
		type:_c.ACTIVE,
		cooldown:300, // in seconds
		lv1UpCost:25
	},
]

// stat awal hero 
HERO = {
	initDps:1
}

GUESSED_TAP_PER_SEC = 5;

// mendapatkan hero dps (tap/click dps)
// param1 : data adalah objects dengan format :
// data.heroLevel = int - main level dari hero
// data.ownedSK = array of objects - array of objects dari sidekick yg sudah dipunyai dengan format :
//    ownedSK[x].id = int - id dari SK ini (Liat var SK di atas sendiri)       
//    ownedSK[x].lv = int - level dari SK ini
_c.getHeroDPS = function(data) {
	var hlv = data.heroLevel;
	var arrSK = data.ownedSK;

	var dps = HERO.initDps;
	dps = dps + hlv + arrSK.length;

	return dps;
}

// mendapatkan total coins yg di drop oleh foe ketika mati
// param1 : data adalah objects dengan format :
// data.maxFoeHP = int - Max HP dari foe (didapatkan dari fungsi _c.getFoeHP)
// data.currentHeroDPS = int - hero dps (didapatkan dari fungsi _c.getHeroDPS)
// data.curHeroLv = int - level sekarang dari hero
_c.getFoeCoins = function(data) {
	var normTotalUpgradeCost = _c.getHeroSkillCost({
		skillId:0,
		curLv:data.curHeroLv
	})

	var tToKillFoe = data.maxFoeHP / (data.currentHeroDPS * GUESSED_TAP_PER_SEC);

	var p = normTotalUpgradeCost / (tToKillFoe/(1*Math.pow(1.1, tToKillFoe))) ;
	return Math.floor(p);
}

// mendapatkan hp foe 
// param1 : data adalah objects dengan format :
// data.currentHeroDPS = int - hero dps (didapatkan dari fungsi _c.getHeroDPS)
// data.heroLevel = int - level dari hero (INGAT LEVEL HERO disini SAMA PERSIS DENGAN/DIANGGAP SKILL HERO DENGAN ID 0)
_c.getFoeHP = function(data) {
	var curHeroDPS = data.currentHeroDPS;
	var heroLevel = data.heroLevel;
	var heroLevelCost = _c.getHeroSkillCost(
	{
		skillId:0,
		curLv:heroLevel
	})

	var heroTrueDPS = (curHeroDPS * GUESSED_TAP_PER_SEC);
	var t = heroLevelCost / heroTrueDPS;
	var hp = heroTrueDPS * t;

	return Math.floor(hp);
}

// mendapatkan harga
// param1 : data adalah objects dengan format :
// data.skillId = int - skill id hero yang mau didapatkan harga costnya
// data.curLv = int - level sekarang dari skill 
_c.getHeroSkillCost = function(data) {
	var initCost = S_HERO[data.skillId].lv1UpCost
	var cost = initCost * Math.pow(1.2, data.curLv)

	return Math.ceil(cost);
}
/* ------------------------------------------------------------------------------------------------------------ */
/*  Internal functions */


