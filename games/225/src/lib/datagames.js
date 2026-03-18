datagames = {};

datagames.bgm = true;

datagames.lastPlay = 0;

datagames.firstPlay = true;
// datagames.firstPlay = 	false;	// hack

datagames.awal = [0, 0, 0, 0, 0, 0];	// status pada adonan dan pizza jika 0 maka belum maen, 1 sudah maen
// datagames.awal = [1, 1, 1, 1, 0, 0];	// hack
// datagames.awal = [1, 1, 1, 1, 1, 0];	// hack
// datagames.tutor = [0, 0];
datagames.tutor = [1, 1];	// hack	-- paten jangan dirubah
datagames.flagDough = false;
// datagames.flagDough = true;		// hack
// datagames.doughScore = 0;	// score diisi 1, 2, 3 menunjukkan nilai bintang
// datagames.doughScore = 3;	// hack
datagames.score = [0, 0, 0, 0, 0, 0];
// datagames.score = [3, 3, 3, 3, 0, 0];	// hack
// datagames.score = [3, 3, 3, 3, 3, 0];	// hack
datagames.jnsMasak = 0;		// 0 untuk dough, 1 untuk pizza
datagames.jnsPizza = 1;

datagames.stepPotong = [
	3, 2, 2, 3, 3, 2, 2, 3, 2, 3,
	5, 2, 2, 3, 4, 4, 3, 2
];	// step untuk memotong bahan

datagames.resep = [
	[7, 9, 11],
	// [11, 9, 11],
	[8, 10, 13, 15, 16, 17],
	[7, 18, 19],
	[5, 6, 13],
	[3, 4, 12, 13, 16]
];	// ini hanya nomer index dari bahan raw, harus dikurangi 1 untuk disamakan dengan index step potong

datagames.potong = [
	[7, 9, 11],
	// [11, 9, 11],
	[8, 10, 13, 15, 16, 17],
	[7, 7, 18, 18],
	[5, 5, 6, 6, 13, 13],
	[3, 3, 4, 12, 12, 13, 16]
];	// ini hanya nomer index dari bahan raw, harus dikurangi 1 untuk disamakan dengan index step potong

datagames.saos = [
	1, 2, 3, 4, 1
];	// index pizza yg memakai saos, isi merupakan nama saos