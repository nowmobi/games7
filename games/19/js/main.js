var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,

    shutterOn: [true],

    d_arr: [1, 1, 1, 1, 1, 1, 1],
    d_alpha: [1, 1, 1, 1, 0, 0, 0],

    selectionarr: [0],
    roombg: [0],

    rp_arr: [1, 1, 1, 1, 1, 1, 1, 1],
    fulldress_arr: [0],

    tool15X: [257, 257, 263, 229, 207, 191, 177, 157, 151, 149, 147, 166, 162, 200, 218, 193, 223, 218, 197, 289, 314, 334, 345, 359, 325, 315,
        317, 301, 312, 350, 364, 360, 354, 356, 374, 290, 310, 177, 199, 206, 161, 171, 242, 280, 327, 360, 375,
    ],

    tool15Y: [136, 164, 198, 139, 155, 184, 214, 237, 283, 339, 371, 413, 459, 468, 432, 375, 192, 221, 248, 141, 161, 193, 225, 279, 368, 406,
        446, 465, 489, 481, 318, 359, 402, 437, 474, 201, 237, 341, 424, 397, 306, 264, 219, 175, 251, 249, 388,
    ],

    tool2X: [252, 240, 207, 185, 176, 154, 160, 181, 216, 298, 327, 358, 309, 338, 373, 321, 351, 346, 374, 314, 330, 357, 354, 313, 228,
        268, 282, 270, 213, 173, 134, 193, 141, 188, 236, 316, 285, 375, 357, 166, 132, 291, 159, 344, 204, 379, 225, 185
    ],

    tool2Y: [121, 157, 171, 203, 245, 314, 369, 472, 471, 510, 499, 503, 467, 462, 467, 418, 419, 367, 382, 137, 181, 204, 241, 251, 230, 236,
        199, 152, 127, 151, 240, 396, 428, 438, 195, 214, 129, 326, 277, 275, 347, 168, 193, 151, 254, 248, 437, 352,
    ],

    tool3X: [252, 240, 207, 185, 176, 154, 160, 181, 216, 298, 327, 358, 309, 338, 373, 321, 351, 346, 374, 314, 330, 357, 354, 313, 228,
        268, 282, 270, 213, 173, 134, 193, 141, 188, 236, 316, 285, 375, 357, 166, 132, 291, 159, 344, 204, 379, 225, 185
    ],

    tool3Y: [121, 157, 171, 203, 245, 314, 369, 472, 471, 510, 499, 503, 467, 462, 467, 418, 419, 367, 382, 137, 181, 204, 241, 251, 230, 236,
        199, 152, 127, 151, 240, 396, 428, 438, 195, 214, 129, 326, 277, 275, 347, 168, 193, 151, 254, 248, 437, 352,
    ],



    tool4X: [252, 240, 207, 185, 176, 154, 160, 181, 216, 298, 327, 358, 309, 338, 373, 321, 351, 346, 374, 314, 330, 357, 354, 313, 228,
        268, 282, 270, 213, 173, 134, 193, 141, 188, 236, 316, 285, 375, 357, 166, 132, 291, 159, 344, 204, 379, 225, 185
    ],

    tool4Y: [121, 157, 171, 203, 245, 314, 369, 472, 471, 510, 499, 503, 467, 462, 467, 418, 419, 367, 382, 137, 181, 204, 241, 251, 230, 236,
        199, 152, 127, 151, 240, 396, 428, 438, 195, 214, 129, 326, 277, 275, 347, 168, 193, 151, 254, 248, 437, 352,
    ],



    tool5X: [252, 240, 207, 185, 176, 154, 160, 181, 216, 298, 327, 358, 309, 338, 373, 321, 351, 346, 374, 314, 330, 357, 354, 313, 228,
        268, 282, 270, 213, 173, 134, 193, 141, 188, 236, 316, 285, 375, 357, 166, 132, 291, 159, 344, 204, 379, 225, 185
    ],

    tool5Y: [121, 157, 171, 203, 245, 314, 369, 472, 471, 510, 499, 503, 467, 462, 467, 418, 419, 367, 382, 137, 181, 204, 241, 251, 230, 236,
        199, 152, 127, 151, 240, 396, 428, 438, 195, 214, 129, 326, 277, 275, 347, 168, 193, 151, 254, 248, 437, 352,
    ],

    tool6X: [257, 199, 223, 249, 271, 290, 323, 206, 228, 253, 288, 313, 268, 237, 290, 269, 285, 238],

    tool6Y: [246, 309, 314, 323, 321, 320, 321, 345, 375, 389, 392, 359, 358, 340, 354, 285, 260, 263, ],


    tool7X: [257, 199, 223, 249, 271, 290, 323, 206, 228, 253, 288, 313, 268, 237, 290, 269, 285, 238],

    tool7Y: [246, 309, 314, 323, 321, 320, 321, 345, 375, 389, 392, 359, 358, 340, 354, 285, 260, 263, ],



    // 
    tool8X: [257, 199, 223, 249, 271, 290, 323, 206, 228, 253, 288, 313, 268, 237, 290, 269, 285, 238],

    tool8Y: [246, 309, 314, 323, 321, 320, 321, 345, 375, 389, 392, 359, 358, 340, 354, 285, 260, 263, ],


    tool9X: [257, 199, 223, 249, 271, 290, 323, 206, 228, 253, 288, 313, 268, 237, 290, 269, 285, 238],

    tool9Y: [246, 309, 314, 323, 321, 320, 321, 345, 375, 389, 392, 359, 358, 340, 354, 285, 260, 263, ],

    tool10X: [207, 232, 264, 295, 323, 263, 265, 196, 235, 213, 240, 268, 298, 336, 297, 270, 320, 240, 289, 233, 293],

    tool10Y: [254, 239, 229, 229, 251, 274, 307, 324, 322, 357, 389, 393, 386, 317, 328, 347, 351, 357, 262, 265, 351, ],


    tool11X: [207, 232, 264, 295, 323, 263, 265, 196, 235, 213, 240, 268, 298, 336, 297, 270, 320, 240, 289, 233, 293],

    tool11Y: [254, 239, 229, 229, 251, 274, 307, 324, 322, 357, 389, 393, 386, 317, 328, 347, 351, 357, 262, 265, 351, ],



    // 

    // 

};

Main.boot = function() {};
Main.boot.prototype = {
    preload: function() {
        game.stage.backgroundColor = '#b8175f';
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.refresh();
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.stage.disableVisibilityChange = true;
        game.renderer.renderSession.roundPixels = true;

        game.scale.setResizeCallback(this.gameResized, this);

        game.load.image('loading', 'assets/prebar.png');
        game.load.image('prelogo', 'assets/prebg_logo.png');
        game.load.image('barover', 'assets/barover.png');

        game.load.image('Go', 'assets/Go.png');


        game.load.onFileComplete.add(this.fileLoadFun, this);
    },
    gameResized: function(manager, bounds) {
        var xpos = window.innerWidth - (window.innerWidth / game.width);
        var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
        manager.setUserScale(scale, scale, 0, 0);
        game.scale.pageAlignHorizontally = true;
    },
    fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        if (progress == 100) {
            game.load.onFileComplete.removeAll();
            game.state.start('preloader');
        }
    }
}
Main.preloader = function() {};

Main.preloader.prototype = {
    init: function() {
        this.progressbar;
        this.check = 10;
        this.bgbtn;
        this.progress;
        this.prelogo;
    },
    preload: function() {
        this.progress = game.add.text(game.world.centerX, 500, "LOADING: 0%", {
            font: "bold 22px Arial",
            fill: "#ffffff",
            align: "center"
        });
        this.progress.anchor.setTo(0.5)
        this.prelogo = game.add.sprite((game.width / 2) - 100, (game.height / 2) - 100, 'prelogo');

        this.prelogo.inputEnabled = true
        this.prelogo.input.useHandCursor = true;
        this.prelogo.events.onInputUp.add(this.openLink, this);

        game.load.crossOrigin = '*';
        game.load.audio('music', ['assets/music.mp3']);
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 109, 109, 2);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);
        game.load.spritesheet('t_timer', 'assets/t_timer.png', 160, 160, 60);
        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);

        game.load.image('s_bg', 'assets/s_bg.jpg');
        game.load.image('lock', 'assets/lock.png');
        game.load.image('ad_faild_btn', 'assets/ad_faild_btn.png');

        ///////////////////////////////////////


        for (i = 1; i <= 5; i++) {

            game.load.image('btn' + i, 'assets/btns/btn' + i + '.png');

        }

        ///////////////////

        //spa

        game.load.image('spabg', 'assets/spa/spabg.png');
        game.load.image('eyebro', 'assets/spa/eyebro.png');
        game.load.image('hairabove1', 'assets/spa/hairabove1.png');
        game.load.image('spafronthair', 'assets/spa/spafronthair.png');
        game.load.image('spabackhair', 'assets/spa/spabackhair.png');
        game.load.image('spabody', 'assets/spa/spabody.png');
        game.load.image('spaface', 'assets/spa/spaface.png');
        game.load.image('spadress', 'assets/spa/spadress.png');
        game.load.image('bot', 'assets/spa/bot.png');
        game.load.image('spatable', 'assets/spa/spatable.png');
        game.load.image('spapimble', 'assets/spa/spapimble.png');
        game.load.image('h_hand', 'assets/h_hand.png');
        game.load.image('yellowdot', 'assets/spa/yellowdot.png');
        game.load.image('orangeful', 'assets/spa/orangeful.png');
        game.load.image('lastwater', 'assets/spa/lastwater.png');
        game.load.image('towel', 'assets/spa/towel.png');
        game.load.image('bubhair', 'assets/spa/bubhair.png');
        game.load.image('newcap', 'assets/spa/newcap.png');
        game.load.image('spafront2', 'assets/spa/spafront2.png');
        game.load.image('bluemask', 'assets/spa/bluemask.png');
        game.load.image('stream', 'assets/spa/stream.png');
        game.load.image('cumcumber', 'assets/spa/cumcumber.png');
        game.load.image('pin', 'assets/spa/pin.png');
        game.load.image('redfull', 'assets/spa/redfull.png');
        game.load.image('redbox', 'assets/spa/redbox.png');
        game.load.image('bluebox', 'assets/spa/bluebox.png');
        game.load.image('newwaterlast', 'assets/spa/newwaterlast.png');
        game.load.image('bluestrick', 'assets/spa/bluestrick.png');
        game.load.image('greendot', 'assets/spa/greendot.png');
        game.load.image('eyedown', 'assets/spa/eyedown.png');
        game.load.image('vghhjgyjil', 'assets/spa/vghhjgyjil.png');
        game.load.image('facebubble', 'assets/spa/facebubble.png');
        game.load.image('box1', 'assets/selection/box1.png');
        game.load.image('box2', 'assets/selection/box2.png');
        game.load.image('framenew', 'assets/selection/framenew.png');
        game.load.image('download', 'assets/selection/download.png');
        game.load.image('selectbg', 'assets/selection/selectbg.png');
        game.load.image('selectcghjk', 'assets/selection/selectcghjk.png');
        game.load.image('box3', 'assets/selection/box3.png');
        game.load.image('box4', 'assets/selection/box4.png');
        game.load.spritesheet('hairani', 'assets/spa/hairani.png', 301, 436, 7);
        game.load.spritesheet('firtsbottleani', 'assets/spa/firtsbottleani.png', 89, 229, 14);
        game.load.spritesheet('hairdyer', 'assets/spa/hairdyer.png', 171, 133, 10);
        game.load.spritesheet('waterani', 'assets/spa/waterani.png', 363, 371, 11);
        game.load.spritesheet('eyetool', 'assets/spa/eyetool.png', 182, 70, 2);
        game.load.spritesheet('aveani', 'assets/spa/aveani.png', 116, 266, 10);
        game.load.spritesheet('grennbottleani', 'assets/spa/grennbottleani.png', 67, 145, 16);

        ////////////////////////////////////////////////////

        //vignesh

        game.load.image('icon1', 'assets/btns/icon1.png');
        game.load.image('icon2', 'assets/btns/icon2.png');
        game.load.image('icon3', 'assets/btns/icon3.png');
        game.load.image('icon4', 'assets/btns/icon4.png');
        game.load.image('icon5', 'assets/btns/icon5.png');
        game.load.image('icon6', 'assets/btns/icon6.png');
        game.load.image('close', 'assets/btns/close.png');
        game.load.image('box11', 'assets/selection/box11.png');
        game.load.image('box22', 'assets/selection/box22.png');
        game.load.image('box33', 'assets/selection/box33.png');
        game.load.image('bgtop', 'assets/selection/bgtop.png');
        game.load.image('box44', 'assets/selection/box44.png');

        for (i = 1; i <= 3; i++) {

            game.load.image('bg' + i, 'assets/dressup/bg' + i + '.jpg');
            // game.load.image('box1'+i,'assets/dressup/box1'+i+'.png');

        }
        for (i = 1; i <= 5; i++) {
            game.load.image('btn' + i, 'assets/btns/btn' + i + '.png');
        }

        game.load.image('d_bg', 'assets/dressup/d_bg.png');
        game.load.image('mr_dfltmascaranew', 'assets/spa/mr_dfltmascaranew.png');
        game.load.image('d_body', 'assets/dressup/d_body.png');
        game.load.image('d_face', 'assets/dressup/d_face.png');
        game.load.image('d_panel', 'assets/dressup/d_panel.png');
        game.load.image('d_tophand', 'assets/dressup/d_tophand.png');
        game.load.image('philips', 'assets/dressup/philips.png');
        game.load.image('d_tophand1', 'assets/dressup/d_tophand1.png');
        game.load.image('bg4', 'assets/dressup/bg4.png');
        game.load.image('imagechange', 'assets/dressup/imagechange.png');
        game.load.image('camera', 'assets/dressup/camera.png');
        game.load.image('dfull_bdress', 'assets/dressup/dfull_bdress.png');
        game.load.image('dm_face', 'assets/dressup/dm_face.png');
        game.load.image('d_bg', 'assets/dressup/d_bg.png');
        game.load.image('newcamera', 'assets/dressup/newcamera.png');
        game.load.image('title', 'assets/dressup/title.png');
        game.load.image('panel', 'assets/dressup/panel.png');
        // game.load.image('t_ch', 'assets/dressup/t_ch.png');

        for (i = 1; i <= 5; i++) {
            game.load.image('d_bottem000' + i, 'assets/dressup/d_bottem000' + i + '.png');
            game.load.image('d_top000' + i, 'assets/dressup/d_top000' + i + '.png');
            game.load.image('d_full000' + i, 'assets/dressup/d_full000' + i + '.png');
            game.load.image('d_earrings000' + i, 'assets/dressup/d_earrings000' + i + '.png');
            game.load.image('d_flower000' + i, 'assets/dressup/d_flower000' + i + '.png');
            game.load.image('d_necklace000' + i, 'assets/dressup/d_necklace000' + i + '.png');
            game.load.image('d_shoe000' + i, 'assets/dressup/d_shoe000' + i + '.png');
            game.load.image('d_shoe000' + i, 'assets/dressup/d_shoe000' + i + '.png');
        }

        for (i = 1; i <= 5; i++) {
            game.load.image('dbhair000' + i, 'assets/dressup/dbhair000' + i + '.png');
            game.load.image('dfhair000' + i, 'assets/dressup/dfhair000' + i + '.png');
        }


        for (i = 1; i <= 5; i++) {
            game.load.image('blush000' + i, 'assets/dressup/blush000' + i + '.png');
            game.load.image('eyelash000' + i, 'assets/dressup/eyelash000' + i + '.png');
            game.load.image('eyeshdw000' + i, 'assets/dressup/eyeshdw000' + i + '.png');
            game.load.image('lense000' + i, 'assets/dressup/lense000' + i + '.png');
            game.load.image('lips000' + i, 'assets/dressup/lips000' + i + '.png');
            game.load.image('zoe1cap' + i, 'assets/dressup/zoe1cap' + i + '.png');
            game.load.image('zoe2cap' + i, 'assets/dressup/zoe2cap' + i + '.png');
            game.load.image('zoe3cap' + i, 'assets/dressup/zoe3cap' + i + '.png');
            game.load.image('zoe4cap' + i, 'assets/dressup/zoe4cap' + i + '.png');
            game.load.image('zoe5cap' + i, 'assets/dressup/zoe5cap' + i + '.png');
        }


        ///////////// r1 _assets

        game.load.image('r_mkbg', 'assets/r1/r_mkbg.png');
        game.load.image('r_panel', 'assets/r1/r_panel.png');
        game.load.image('r_pnldec', 'assets/r1/r_pnldec.png');

        game.load.image('mr_body', 'assets/r1/mr_body.png');
        game.load.image('mr_drs', 'assets/r1/mr_drs.png');
        game.load.image('mr_head', 'assets/r1/mr_head.png');
        game.load.image('mr_dfltebrow', 'assets/r1/mr_dfltebrow.png');
        game.load.image('mr_dfltlip', 'assets/r1/mr_dfltlip.png');
        game.load.image('mr_dfltmascara', 'assets/r1/mr_dfltmascara.png');
        game.load.image('mr_eye', 'assets/r1/mr_eye.png');
        game.load.image('removetool', 'assets/r1/removetool.png');
        game.load.image('mr_dflthair', 'assets/r1/mr_dflthair.png');
        game.load.image('r_clsbtn', 'assets/r1/r_clsbtn.png');
        game.load.image('newarrow', 'assets/r1/newarrow.png');
        game.load.image('mr_eyeballdef', 'assets/r1/mr_eyeballdef.png');
        game.load.image('r_tool9', 'assets/r1/r_tool9.png');
        game.load.image('mback', 'assets/r1/mback.png');
        game.load.image('r_tool10', 'assets/r1/r_tool10.png');

        for (i = 1; i <= 6; i++) {
            game.load.image('r_tool' + i, 'assets/r1/r_tool' + i + '.png');
            if (i <= 5) {
                game.load.image('lippanel' + i, 'assets/r1/lippanel' + i + '.png');
                game.load.image('mr_blush000' + i, 'assets/r1/mr_blush000' + i + '.png');
                game.load.image('icn_crwn' + i, 'assets/r1/icn_crwn' + i + '.png');
                game.load.image('icn_ear' + i, 'assets/r1/icn_ear' + i + '.png');
                game.load.image('mr_eyeball000' + i, 'assets/r1/mr_eyeball000' + i + '.png');
                game.load.image('mr_eyeshad000' + i, 'assets/r1/mr_eyeshad000' + i + '.png');
                game.load.image('mr_fhair000' + i, 'assets/r1/mr_fhair000' + i + '.png');
                game.load.image('mr_bhair000' + i, 'assets/r1/mr_bhair000' + i + '.png');
                game.load.image('mr_lip000' + i, 'assets/r1/mr_lip000' + i + '.png');
                game.load.image('mr_mascara000' + i, 'assets/r1/mr_mascara000' + i + '.png');
                game.load.image('mr_ear000' + i, 'assets/r1/mr_ear000' + i + '.png');

                game.load.image('mr_h1crown000' + i, 'assets/r1/mr_h1crown000' + i + '.png');
                game.load.image('mr_h2crown000' + i, 'assets/r1/mr_h2crown000' + i + '.png');
                game.load.image('mr_h3crown000' + i, 'assets/r1/mr_h3crown000' + i + '.png');
                game.load.image('mr_h4crown000' + i, 'assets/r1/mr_h4crown000' + i + '.png');
                game.load.image('mr_h5crown000' + i, 'assets/r1/mr_h5crown000' + i + '.png');
                // game.load.image('pnl_hiar'+i, 'assets/r1/pnl_hiar'+i+'.png');
                game.load.image('pnl_eye' + i, 'assets/r1/pnl_eye' + i + '.png');
                game.load.image('pnl_bls000' + i, 'assets/r1/pnl_bls000' + i + '.png');
                game.load.image('pnl_eshd000' + i, 'assets/r1/pnl_eshd000' + i + '.png');

            }
        }


        for (i = 0; i < RelatedGames.length; i++) {
            game.load.image('thumb_' + i, RelatedGames[i]["thumb"]);
        }
        game.load.image('Tump_frame', 'assets/Tump_frame.png');

        //LLLLL
        game.load.onFileComplete.add(this.fileLoadFunPre, this);


    },
    fileLoadFunPre: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.progress.setText('LOADING: ' + parseInt(progress) + '%');
        if (progress == 100) {
            this.progress.visible = false;
            game.load.onFileComplete.removeAll();
            //AAAAAA

            // game.state.start('dressup');

            this.Go = game.add.sprite(game.world.width / 2.05, game.world.height / 1.65, 'Go');
            this.Go.anchor.setTo(0.5);
            this.Go.scale.setTo(0);
            this.Go.inputEnabled = true;
            this.Go.input.useHandCursor = true;
            this.Go.events.onInputDown.add(function() {
                if (Main.music == null) {
                    Main.music = game.add.audio('music', 0.5, true);
                    // Main.music.resume();
                };
                Main.music.play();
                // 
                game.state.start('title');
                // 

            }, this);
            game.add.tween(this.Go.scale).to({
                x: 1,
                y: 1
            }, 800, Phaser.Easing.Bounce.Out, true);



        }
    },

    openLink: function() {
        YYGGames.navigate("loading", "logo");
    },
}
Main.title = function() {}

Main.title.prototype = {
    create: function() {
        if (Main.music == null) {
            Main.music = game.add.audio('music', 0.5, true);
            Main.music.play();
        };
        this.levelGroup = game.add.group();
        this.bg1 = game.add.sprite(0, 0, 'bg3');
        this.levelGroup.add(this.bg1);
        // this.bg1.visible=false;

        this.philips = game.add.sprite(175, 385, 'philips');
        this.philips.anchor.setTo(0.5);
        this.philips.scale.setTo(0.85);


        this.dressupgroup = game.add.group();

        this.dressupgroup.x = 105;
        this.dressupgroup.y = 55;
        this.dressupgroup.scale.setTo(0.8);

        this.dbhair0001 = game.add.sprite(250, 243.5, 'dbhair000' + Main.rp_arr[0]);
        this.dbhair0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.dbhair0001);

        this.dfull_bdress = game.add.sprite(259, 460, 'dfull_bdress');
        this.dfull_bdress.anchor.setTo(0.5);
        this.dfull_bdress.visible = false;
        this.dressupgroup.add(this.dfull_bdress);

        this.d_body = game.add.sprite(255, 487, 'd_body');
        this.d_body.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_body);

        // this.d_face = game.add.sprite(251.5,178.5,'d_face');
        // this.d_face.anchor.setTo(0.5);
        // this.dressupgroup.add(this.d_face);

        this.dm_face = game.add.sprite(251.5, 178.5, 'dm_face');
        this.dm_face.anchor.setTo(0.5);
        this.dressupgroup.add(this.dm_face);

        this.eyeshdw0001 = game.add.sprite(252, 172, 'eyeshdw0005');
        this.eyeshdw0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.eyeshdw0001);

        this.blush0001 = game.add.sprite(253, 204, 'blush000' + Main.rp_arr[2]);
        this.blush0001.anchor.setTo(0.5);
        this.blush0001.alpha = 0.85;
        this.dressupgroup.add(this.blush0001);

        this.lense0001 = game.add.sprite(253, 179, 'lense000' + Main.rp_arr[1]);
        this.lense0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.lense0001);

        this.eyelash0001 = game.add.sprite(251, 177, 'eyelash0005');
        this.eyelash0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.eyelash0001);

        this.lips0001 = game.add.sprite(252, 210, 'lips0002');
        this.lips0001.anchor.setTo(0.5);
        this.lips0001.scale.setTo(0.9);
        this.dressupgroup.add(this.lips0001);



        this.d_shoe0001 = game.add.sprite(238, 707.5, 'd_shoe000' + Main.d_arr[3]);
        this.d_shoe0001.anchor.setTo(0.5);
        // this.d_shoe0001.alpha=Main.d_alpha[3];
        this.dressupgroup.add(this.d_shoe0001);



        this.d_bottem0001 = game.add.sprite(262.5, 546.5, 'd_bottem000' + Main.d_arr[1]);
        this.d_bottem0001.anchor.setTo(0.5);
        // this.d_bottem0001.alpha=Main.d_alpha[1];
        this.dressupgroup.add(this.d_bottem0001);
        // this.d_bottem0001.visible=false;
        // 


        this.d_full0001 = game.add.sprite(259, 507.5, 'd_full000' + Main.d_arr[2]);
        this.d_full0001.anchor.setTo(0.5);
        // this.d_full0001.alpha=Main.d_alpha[2];
        this.dressupgroup.add(this.d_full0001);



        this.d_tophand1 = game.add.sprite(256, 486, 'd_tophand1');
        this.d_tophand1.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_tophand1);

        this.d_top0001 = game.add.sprite(265.5, 319.5, 'd_top000' + Main.d_arr[0]);
        this.d_top0001.anchor.setTo(0.5);
        // this.d_top0001.alpha=Main.d_alpha[0];
        this.dressupgroup.add(this.d_top0001);
        // this.d_top0001.visible=false;

        this.d_necklace0001 = game.add.sprite(251, 257, 'd_necklace000' + Main.d_arr[4]);
        this.d_necklace0001.anchor.setTo(0.5);
        // this.d_necklace0001.alpha=Main.d_alpha[4];
        this.dressupgroup.add(this.d_necklace0001);


        this.dfhair0001 = game.add.sprite(252.5, 245, 'dfhair000' + Main.rp_arr[0]);
        this.dfhair0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.dfhair0001);


        this.d_earrings1 = game.add.sprite(219, 207.5, 'd_earrings000' + Main.rp_arr[6]);
        this.d_earrings1.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_earrings1);



        this.d_earrings0001 = game.add.sprite(283, 207.5, 'd_earrings000' + Main.rp_arr[6]);
        this.d_earrings0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_earrings0001);


        this.d_tophand = game.add.sprite(262, 486, 'd_tophand');
        this.d_tophand.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_tophand);



        // this.d_flower0001 = game.add.sprite(148,451,'d_flower000'+Main.d_arr[5]);
        // this.d_flower0001.anchor.setTo(0.5);
        // this.d_flower0001.scale.setTo(1.5);
        // this.d_flower0001.alpha=Main.d_alpha[5];
        // this.dressupgroup.add(this.d_flower0001);



        // this.d_flower0001 = game.add.sprite(148,451,'d_flower000'+Main.d_arr[5]);
        // this.d_flower0001.anchor.setTo(0.5);
        // // this.d_flower0001.alpha=Main.d_alpha[5];
        // this.d_flower0001.scale.setTo(1.1);


        // this.dressupgroup.add(this.d_flower0001);



        this.zoe1cap1 = game.add.sprite(252.5, 140, 'zoe1cap' + Main.rp_arr[7]);
        this.zoe1cap1.anchor.setTo(0.5);
        // this.zoe1cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe1cap1);

        this.zoe2cap1 = game.add.sprite(252.5, 140, 'zoe2cap' + Main.rp_arr[7]);
        this.zoe2cap1.anchor.setTo(0.5);
        this.zoe2cap1.scale.setTo(0.85);
        // this.zoe2cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe2cap1);



        this.zoe3cap1 = game.add.sprite(252.5, 140, 'zoe3cap' + Main.rp_arr[7]);
        this.zoe3cap1.anchor.setTo(0.5);
        this.zoe3cap1.scale.setTo(0.9);
        // this.zoe3cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe3cap1);



        this.zoe4cap1 = game.add.sprite(252.5, 140, 'zoe4cap' + Main.rp_arr[7]);
        this.zoe4cap1.anchor.setTo(0.5);
        // this.zoe4cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe4cap1);

        this.zoe5cap1 = game.add.sprite(252.5, 140, 'zoe5cap' + Main.rp_arr[7]);
        this.zoe5cap1.anchor.setTo(0.5);
        // this.zoe5cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe5cap1);




        if (Main.rp_arr[0] == 1) {
            this.zoe1cap1.visible = true;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = false;
        }

        if (Main.rp_arr[0] == 2) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = true;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = false;
        }

        if (Main.rp_arr[0] == 3) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = true;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = false;
        }

        if (Main.rp_arr[0] == 4) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = true;
            this.zoe5cap1.visible = false;
        }
        if (Main.rp_arr[0] == 5) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = true;
        }






        if (Main.fulldress_arr[0] == 1) {
            this.d_full0001.visible = true;
            this.d_bottem0001.visible = false;
            this.d_top0001.visible = false;

        } else {

            this.d_full0001.visible = false;
            this.d_bottem0001.visible = true;
            this.d_top0001.visible = true;
        }

        this.title = game.add.sprite(250, 575, 'title');
        this.title.anchor.setTo(0.5);
        this.title.scale.setTo(0.75);

        game.add.tween(this.title.scale).to({
            x: 0.8,
            y: 0.8
        }, 700, Phaser.Easing.Quadratic.Out, true, 0, -1).yoyo(300, true);





        this.morebtn = game.add.sprite(85, 730, 'btn4');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn3');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.9);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(415, 5, "soundicon");
        this.musicButton.scale.setTo(0.75);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        YYGGames.navigate("menu", "logo");
    },
    moreLink: function() {
        YYGGames.navigate("menu", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        MyShowAD('selection');
    },
}

Main.intro = function() {}

Main.intro.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'introbg');
        this.levelGroup.add(this.introbg);



        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(415, 5, "soundicon");
        this.musicButton.scale.setTo(0.75);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }



    },
    startPopUp: function() {
        game.add.tween(this.popup1.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);
    },
    bringPopUp2: function() {
        game.add.tween(this.popup1).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000);
        game.add.tween(this.popup2.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
    },
    bringPopUp3: function() {
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000)
        game.add.tween(this.popup3.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
    },
    bringBottons: function() {
        game.add.tween(this.morebtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        YYGGames.navigate("game", "logo");

    },
    moreLink: function() {
        YYGGames.navigate("game", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            MyShowAD('elsaScreen');
        });

    },
}

//hsssssssssssssssssssssssssssssssssss



Main.hairspa = function() {}

Main.hairspa.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'spabg');
        this.levelGroup.add(this.introbg);




        this.spagroup = game.add.group();


        this.spabackhair = game.add.sprite(257, 255, 'spabackhair');
        this.spabackhair.anchor.setTo(0.5);
        this.spagroup.add(this.spabackhair);


        this.spabody = game.add.sprite(260, 537, 'spabody');
        this.spabody.anchor.setTo(0.5);
        this.spagroup.add(this.spabody);


        this.spadress = game.add.sprite(260, 602, 'spadress');
        this.spadress.anchor.setTo(0.5);
        this.spagroup.add(this.spadress);


        this.spaface = game.add.sprite(267, 211, 'spaface');
        this.spaface.anchor.setTo(0.5);
        this.spagroup.add(this.spaface);



        this.mr_dfltmascaranew = game.add.sprite(267, 211, 'mr_dfltmascaranew');
        this.mr_dfltmascaranew.anchor.setTo(0.5);
        this.spagroup.add(this.mr_dfltmascaranew);


        this.eyedownup = game.add.sprite(268, 230, 'eyedown');
        this.eyedownup.anchor.setTo(0.5);
        // this.eyedownup.scale.setTo(0.95);
        this.spagroup.add(this.eyedownup);
        this.eyedownup.visible = false;



        this.eyebro2 = game.add.sprite(325, 165, 'eyebro');
        this.eyebro2.anchor.setTo(0.5);
        this.spagroup.add(this.eyebro2);
        //  this.eyebro2.inputEnabled=true;
        // this.eyebro2.input.useHandCursor=true;
        this.eyebro2.events.onInputDown.add(function() {
            this.eyebro2.inputEnabled = false;
            this.s_arrow1.visible = false;

            this.eyetooldrag = false;
            this.eyetool.x = 385;
            this.eyetool.y = 250;
            this.eyetool.animations.add('eyetool')
            this.eyetool.animations.play('eyetool', 10, false).onComplete.add(function() {
                this.eyetool.frame = 0;
                game.add.tween(this.eyebro2).to({
                    y: 1000
                }, 1000, Phaser.Easing.Quadratic.Out, true, ).onComplete.add(function() {
                    this.eyetooldrag = true;
                    this.eyebro1.inputEnabled = true;
                    this.eyebro1.input.useHandCursor = true;
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 295;
                    this.s_arrow1.y = 205;
                }, this);
            }, this);
        }, this);


        this.eyebro1 = game.add.sprite(300, 170, 'eyebro');
        this.eyebro1.anchor.setTo(0.5);
        this.spagroup.add(this.eyebro1);
        //  this.eyebro1.inputEnabled=true;
        // this.eyebro1.input.useHandCursor=true;
        this.eyebro1.events.onInputDown.add(function() {
            this.eyebro1.inputEnabled = false;
            this.s_arrow1.visible = false;

            this.eyetooldrag = false;
            this.eyetool.x = 360;
            this.eyetool.y = 260;
            this.eyetool.animations.add('eyetool')
            this.eyetool.animations.play('eyetool', 10, false).onComplete.add(function() {
                this.eyetool.frame = 0;
                game.add.tween(this.eyebro1).to({
                    y: 1000
                }, 1000, Phaser.Easing.Quadratic.Out, true, ).onComplete.add(function() {
                    this.eyetooldrag = true;
                    this.eyebro4.inputEnabled = true;
                    this.eyebro4.input.useHandCursor = true;
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 235;
                    this.s_arrow1.y = 205;
                }, this);
            }, this);
        }, this);


        this.eyebro4 = game.add.sprite(235, 172, 'eyebro');
        this.eyebro4.anchor.setTo(0.5);
        this.spagroup.add(this.eyebro4);
        this.eyebro4.rotation = -180;
        //    this.eyebro4.inputEnabled=true;
        // this.eyebro4.input.useHandCursor=true;
        this.eyebro4.events.onInputDown.add(function() {
            this.eyebro4.inputEnabled = false;
            this.s_arrow1.visible = false;

            this.eyetooldrag = false;
            this.eyetool.x = 300;
            this.eyetool.y = 260;
            this.eyetool.animations.add('eyetool')
            this.eyetool.animations.play('eyetool', 10, false).onComplete.add(function() {
                this.eyetool.frame = 0;
                game.add.tween(this.eyebro4).to({
                    y: 1000
                }, 1000, Phaser.Easing.Quadratic.Out, true, ).onComplete.add(function() {
                    this.eyetooldrag = true;
                    this.eyebro5.inputEnabled = true;
                    this.eyebro5.input.useHandCursor = true;
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 215;
                    this.s_arrow1.y = 205;
                }, this);
            }, this);
        }, this);

        this.eyebro5 = game.add.sprite(215, 167, 'eyebro');
        this.eyebro5.anchor.setTo(0.5);
        this.spagroup.add(this.eyebro5);
        this.eyebro5.rotation = -180;
        //    this.eyebro5.inputEnabled=true;
        // this.eyebro5.input.useHandCursor=true;
        this.eyebro5.events.onInputDown.add(function() {
            this.eyebro5.inputEnabled = false;
            this.s_arrow1.visible = false;

            this.eyetooldrag = false;
            this.eyetool.x = 285;
            this.eyetool.y = 255;
            this.eyetool.animations.add('eyetool')
            this.eyetool.animations.play('eyetool', 10, false).onComplete.add(function() {
                this.eyetool.frame = 0;
                game.add.tween(this.eyebro5).to({
                    y: 1000
                }, 1000, Phaser.Easing.Quadratic.Out, true, ).onComplete.add(function() {
                    this.eyetooldrag = true;
                    game.add.tween(this.eyetool).to({
                        x: 350,
                        y: 700
                    }, 1000, Phaser.Easing.Quadratic.Out, true, ).onComplete.add(function() {
                        this.eyetooldrag = false;
                        game.add.tween(this.morebtn.scale).to({
                            x: 0.9,
                            y: 0.9
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.playbtn.scale).to({
                            x: 0.9,
                            y: 0.9
                        }, 700, Phaser.Easing.Quadratic.Out, true);

                    }, this);
                }, this);
            }, this);
        }, this);


        this.pimcnt = 0;
        this.spapimble1 = game.add.sprite(325, 250, 'spapimble');
        this.spapimble1.anchor.setTo(0.5);
        this.spagroup.add(this.spapimble1);
        //         this.spapimble1.inputEnabled=true; 
        // this.spapimble1.input.useHandCursor=true; 
        // this.spapimble1.events.onInputOver.add(this.btnOver,this); 
        // this.spapimble1.events.onInputOut.add(this.btnOut,this); 
        this.spapimble1.events.onInputDown.add(function() {
            this.pimcnt++;

            if (this.pimcnt == 1) {
                this.spapimble1.inputEnabled = false;
                this.s_arrow1.visible = false;
                this.pindrag = false;
                this.pin.x = 317;
                this.pin.y = 390;
                game.add.tween(this.spapimble1).to({
                    alpha: 0.5
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.pindrag = true;
                    this.spapimble2.inputEnabled = true;
                    this.spapimble2.input.useHandCursor = true;
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 230;
                    this.s_arrow1.y = 285;
                }, this);
            }
            if (this.pimcnt == 2) {
                this.spapimble1.inputEnabled = false;
                this.s_arrow1.visible = false;
                this.redfull.x = 310;
                this.redfull.y = 360;
                this.redfulldrag = false;
                game.add.tween(this.redfull).to({
                    x: 335
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.spapimble1).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.redfulldrag = true;
                        this.spapimble2.inputEnabled = true;
                        this.spapimble2.input.useHandCursor = true;
                        this.s_arrow1.visible = true;
                        this.s_arrow1.x = 230;
                        this.s_arrow1.y = 285;
                    }, this);
                }, this);
            }
        }, this);



        this.pimcnt2 = 0;
        this.spapimble2 = game.add.sprite(225, 260, 'spapimble');
        this.spapimble2.anchor.setTo(0.5);
        this.spagroup.add(this.spapimble2);
        // this.spapimble2.inputEnabled=true; 
        // this.spapimble2.input.useHandCursor=true; 
        // this.spapimble2.events.onInputOver.add(this.btnOver,this); 
        // this.spapimble2.events.onInputOut.add(this.btnOut,this); 
        this.spapimble2.events.onInputDown.add(function() {
            this.pimcnt2++;
            if (this.pimcnt2 == 1) {
                this.spapimble2.inputEnabled = false;
                this.s_arrow1.visible = false;

                this.pindrag = false;
                this.pin.x = 230;
                this.pin.y = 405;
                game.add.tween(this.spapimble2).to({
                    alpha: 0.5
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.pindrag = true;
                    this.spapimble3.inputEnabled = true;
                    this.spapimble3.input.useHandCursor = true;
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 260;
                    this.s_arrow1.y = 220;
                }, this);
            }
            if (this.pimcnt2 == 2) {
                this.spapimble1.inputEnabled = false;
                this.s_arrow1.visible = false;
                this.redfull.x = 210;
                this.redfull.y = 370;
                this.redfulldrag = false;
                game.add.tween(this.redfull).to({
                    x: 235
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.spapimble2).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.redfulldrag = true;
                        this.spapimble3.inputEnabled = true;
                        this.spapimble3.input.useHandCursor = true;
                        this.s_arrow1.visible = true;
                        this.s_arrow1.x = 260;
                        this.s_arrow1.y = 220;
                    }, this);
                }, this);
            }
        }, this);

        this.pimcnt3 = 0;
        this.spapimble3 = game.add.sprite(260, 175, 'spapimble');
        this.spapimble3.anchor.setTo(0.5);
        this.spagroup.add(this.spapimble3);
        //         this.spapimble3.inputEnabled=true; 
        // this.spapimble3.input.useHandCursor=true; 
        // this.spapimble3.events.onInputOver.add(this.btnOver,this); 
        // this.spapimble3.events.onInputOut.add(this.btnOut,this); 
        this.spapimble3.events.onInputDown.add(function() {
            this.pimcnt3++

                if (this.pimcnt3 == 1) {
                    this.spapimble3.inputEnabled = false;
                    this.s_arrow1.visible = false;
                    this.pindrag = false;
                    this.pin.x = 260;
                    this.pin.y = 325;
                    game.add.tween(this.spapimble3).to({
                        alpha: 0.5
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.pindrag = true;
                        this.s_arrow1.visible = true;
                        this.s_arrow1.x = 265;
                        this.s_arrow1.y = 360;
                        this.spapimble4.inputEnabled = true;
                        this.spapimble4.input.useHandCursor = true;
                    }, this);

                }

            if (this.pimcnt3 == 2) {
                this.spapimble1.inputEnabled = false;
                this.s_arrow1.visible = false;
                this.redfull.x = 250;
                this.redfull.y = 290;
                this.redfulldrag = false;
                game.add.tween(this.redfull).to({
                    x: 275
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.spapimble3).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.redfulldrag = true;
                        this.spapimble4.inputEnabled = true;
                        this.spapimble4.input.useHandCursor = true;
                        this.s_arrow1.visible = true;
                        this.s_arrow1.x = 265;
                        this.s_arrow1.y = 360;
                    }, this);
                }, this);
            }
        }, this);

        this.pimcnt4 = 0;
        this.spapimble4 = game.add.sprite(270, 335, 'spapimble');
        this.spapimble4.anchor.setTo(0.5);
        this.spagroup.add(this.spapimble4);
        //         this.spapimble4.inputEnabled=true; 
        // this.spapimble4.input.useHandCursor=true; 
        // this.spapimble4.events.onInputOver.add(this.btnOver,this); 
        // this.spapimble4.events.onInputOut.add(this.btnOut,this); 
        this.spapimble4.events.onInputDown.add(function() {
            this.pimcnt4++
                if (this.pimcnt4 == 1) {
                    this.spapimble4.inputEnabled = false;
                    this.s_arrow1.visible = false;
                    this.pindrag = false;
                    this.pin.x = 270;
                    this.pin.y = 465;
                    game.add.tween(this.spapimble4).to({
                        alpha: 0.5
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.pin).to({
                            x: 250,
                            y: 650
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.pindrag = false;
                            this.s_arrow1.visible = true;
                            this.s_arrow1.x = 425;
                            this.s_arrow1.y = 600;
                            this.redfull.inputEnabled = true;
                            this.redfull.input.useHandCursor = true;
                            this.redfull.input.enableDrag();
                        }, this);

                    }, this);

                }
            if (this.pimcnt4 == 2) {
                this.spapimble1.inputEnabled = false;
                this.s_arrow1.visible = false;
                this.redfull.x = 250;
                this.redfull.y = 435;
                this.redfulldrag = false;
                game.add.tween(this.redfull).to({
                    x: 275
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.spapimble4).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.redfull).to({
                            x: 425,
                            y: 650
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.redfulldrag = false;

                            game.add.tween(this.fifthgroup).to({
                                alpha: 0
                            }, 1000, Phaser.Easing.Quadratic.Out, true)
                            game.add.tween(this.sixthgroup).to({
                                alpha: 1
                            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.bluestrick.inputEnabled = true;
                                this.bluestrick.input.useHandCursor = true;
                                this.s_arrow1.visible = true;
                                this.s_arrow1.x = 100;
                                this.s_arrow1.y = 590;

                            }, this);
                        }, this);
                    }, this);
                }, this);
            }
        }, this);

        this.facebubble = game.add.sprite(267, 211, 'facebubble');
        this.facebubble.anchor.setTo(0.5);
        this.spagroup.add(this.facebubble);
        this.facebubble.visible = false;


        this.lastwater = game.add.sprite(267, 211, 'lastwater');
        this.lastwater.anchor.setTo(0.5);
        this.spagroup.add(this.lastwater);
        this.lastwater.alpha = 0;


        this.bluemask = game.add.sprite(267, 211, 'bluemask');
        this.bluemask.anchor.setTo(0.5);
        this.spagroup.add(this.bluemask);
        this.bluemask.visible = false;

        this.cumcumberup = game.add.sprite(267, 211, 'cumcumber');
        this.cumcumberup.anchor.setTo(0.5);
        this.spagroup.add(this.cumcumberup);
        this.cumcumberup.visible = false;
        // this.cumcumberup.inputEnabled=true;
        // this.cumcumberup.input.useHandCursor=true; 
        this.cumcumberup.events.onInputDown.add(function() {
            this.cumcumberup.inputEnabled = false;
            this.s_arrow1.visible = false;
            this.cumcumberup.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 425;
            this.s_arrow1.y = 550;
            this.wateranilast123.inputEnabled = true;
            this.wateranilast123.input.useHandCursor = true;

        }, this);

        this.spafronthair = game.add.sprite(260, 251, 'spafronthair');
        this.spafronthair.anchor.setTo(0.5);
        this.spagroup.add(this.spafronthair);


        this.newwaterlast = game.add.sprite(260, 251, 'newwaterlast');
        this.newwaterlast.anchor.setTo(0.5);
        this.spagroup.add(this.newwaterlast);
        this.newwaterlast.alpha = 0;

        // this.spafronthair.visible=false;
        // this.spabackhair.visible=false;
        this.spafront2 = game.add.sprite(255, 207, 'spafront2');
        this.spafront2.anchor.setTo(0.5);
        this.spagroup.add(this.spafront2);
        this.spafront2.visible = false;

        this.newcap12 = game.add.sprite(255, 50, 'newcap');
        this.newcap12.anchor.setTo(0.5);
        this.newcap12.scale.setTo(0.6);
        this.spagroup.add(this.newcap12);
        this.newcap12.visible = false;

        this.firtsbottleaniup = game.add.sprite(225, 65, 'firtsbottleani');
        this.firtsbottleaniup.anchor.setTo(0.5);
        this.firtsbottleaniup.scale.setTo(0.75);
        this.firtsbottleaniup.angle = 25;
        this.spagroup.add(this.firtsbottleaniup);
        this.firtsbottleaniup.visible = false;

        this.grennbottleani = game.add.sprite(225, 65, 'grennbottleani');
        this.grennbottleani.anchor.setTo(0.5);
        this.grennbottleani.scale.setTo(0.9);
        this.grennbottleani.angle = 25;
        this.spagroup.add(this.grennbottleani);
        this.grennbottleani.visible = false;

        this.yellowdot = game.add.sprite(250, 75, 'yellowdot');
        this.yellowdot.anchor.setTo(0.5);
        this.yellowdot.scale.setTo(0.75);
        this.spagroup.add(this.yellowdot);
        this.yellowdot.visible = false;


        this.yellowdot1 = game.add.sprite(250, 75, 'greendot');
        this.yellowdot1.anchor.setTo(0.5);
        this.yellowdot1.scale.setTo(0.75);
        this.spagroup.add(this.yellowdot1);
        this.yellowdot1.visible = false;


        this.yellowdotface = game.add.sprite(265, 175, 'yellowdot');
        this.yellowdotface.anchor.setTo(0.5);
        this.yellowdotface.scale.setTo(0.75);
        this.spagroup.add(this.yellowdotface);
        this.yellowdotface.visible = false;


        this.bubhair = game.add.sprite(260, 245, 'bubhair');
        this.bubhair.anchor.setTo(0.5);
        // this.bubhair.scale.setTo(1.12);     
        this.spagroup.add(this.bubhair);
        this.bubhair.visible = false;
        // 
        this.hairani = game.add.sprite(260, 250, 'hairani');
        this.hairani.anchor.setTo(0.5);
        this.spagroup.add(this.hairani);
        this.hairani.visible = false;


        this.hairani11 = game.add.sprite(260, 250, 'hairani');
        this.hairani11.anchor.setTo(0.5);
        this.spagroup.add(this.hairani11);
        this.hairani11.visible = false;

        this.hairabove1 = game.add.sprite(265, 245, 'hairabove1');
        this.hairabove1.anchor.setTo(0.5);
        this.spagroup.add(this.hairabove1);
        this.hairabove1.visible = false;


        this.spagroup.scale.setTo(0.9);
        this.spagroup.x = 25;
        this.spagroup.y = 100;

        this.spatable = game.add.sprite(260, 723, 'spatable');
        this.spatable.anchor.setTo(0.5);

        //1111111111111
        this.firstgroup = game.add.group();


        this.firtsbottleani = game.add.sprite(175, 640, 'firtsbottleani');
        this.firtsbottleani.anchor.setTo(0.5);
        this.firtsbottleani.scale.setTo(0.6);
        this.firstgroup.add(this.firtsbottleani);
        // this.firtsbottleani.inputEnabled=true;
        // this.firtsbottleani.input.useHandCursor=true;
        // this.firtsbottleani.input.enableDrag();
        this.firtsbottleani.events.onInputOver.add(this.btnOver, this);
        this.firtsbottleani.events.onInputOut.add(this.btnOut, this);
        this.firtsbottleani.events.onInputDown.add(function() {
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 125;
        }, this);
        this.firtsbottleani.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 475 && game.input.activePointer.y > 75 && game.input.activePointer.y < 350)) {
                this.s_arrow1.visible = false;
                this.firtsbottleani.visible = false;
                this.firtsbottleaniup.visible = true;
                this.firtsbottleaniup.animations.add('firtsbottleani')
                this.firtsbottleaniup.animations.play('firtsbottleani', 10, false).onComplete.add(function() {
                    this.yellowdot.visible = true;
                    this.firtsbottleani.visible = true;
                    this.firtsbottleani.inputEnabled = false;
                    this.firtsbottleaniup.visible = false;
                    game.add.tween(this.firtsbottleani).to({
                        x: 175,
                        y: 640
                    }, 1000, Phaser.Easing.Quadratic.Out, true);
                    this.h_handdrag = true;
                    this.h_hand.visible = true;
                }, this);
            } else {
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 175;
                this.s_arrow1.y = 535;
                game.add.tween(this.firtsbottleani).to({
                    x: 175,
                    y: 650
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);




        this.wateranidrag = false;
        this.waterani = game.add.sprite(250, 700, 'waterani');
        this.waterani.anchor.setTo(0.5);
        this.waterani.scale.setTo(0.7);
        this.firstgroup.add(this.waterani);
        // this.waterani.inputEnabled=true;
        // this.waterani.input.useHandCursor=true;
        this.waterani.events.onInputOver.add(this.btnOver, this);
        this.waterani.events.onInputOut.add(this.btnOut, this);
        this.waterani.events.onInputDown.add(function() {
            this.waterani.inputEnabled = false;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 125;
            this.wateranidrag = true;
            this.waterani.animations.add('waterani')
            this.waterani.animations.play('waterani', 10, true).onComplete.add(function() {}, this);
        }, this);


        this.hitGroup2 = game.add.group();
        for (var i = 0; i <= Main.tool2X.length - 1; i++) {
            this["hitCircle_dd2" + i] = game.add.graphics(Main.tool2X[i], Main.tool2Y[i]);
            this["hitCircle_dd2" + i].beginFill(0x000000, 0);
            this["hitCircle_dd2" + i].drawCircle(0, 0, 50);
            this["hitCircle_dd2" + i].id = i;
            this.hitGroup2.add(this["hitCircle_dd2" + i]);
            game.physics.arcade.enable([this["hitCircle_dd2" + i]]);
            this["hitCircle_dd2" + i].body.collideWorldBounds = true;
        }


        this.circleGroup2 = game.add.group();
        this.circle2 = game.add.graphics(0, 0);
        this.circle2.beginFill(0x000000, 0);
        this.circleGroup2.add(this.circle2);
        // this.hairani.mask = this.circle2;

        this.dragCircla2 = game.add.graphics(0, 0);
        this.dragCircla2.beginFill(0x000000, 0);
        this.dragCircla2.drawCircle(0, 0, 50);
        this.dragCircla2.endFill();

        this.hitSpritea2cnt = 0;

        game.physics.arcade.enable([this.dragCircla2]);
        this.dragCircla2.body.collideWorldBounds = true;
        this.dragCircla2.body.onCollide = new Phaser.Signal();
        this.dragCircla2.body.onCollide.add(this.hitSprite2, this);

        this.h_handdrag = false;
        this.h_hand = game.add.sprite(75, 650, 'h_hand');
        this.h_hand.anchor.setTo(0.5);
        this.h_hand.visible = false;
        this.firstgroup.add(this.h_hand);
        // this.h_hand.inputEnabled=true;
        // this.h_hand.input.useHandCursor=true;         
        this.h_hand.events.onInputDown.add(function() {
            this.h_hand.inputEnabled = false;
            this.h_handdrag = true;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 125;
        }, this);


        this.hitGroup15 = game.add.group();
        for (var i = 0; i <= Main.tool15X.length - 1; i++) {
            this["hitCircle_dd15" + i] = game.add.graphics(Main.tool15X[i], Main.tool15Y[i]);
            this["hitCircle_dd15" + i].beginFill(0x000000, 0);
            this["hitCircle_dd15" + i].drawCircle(0, 0, 50);
            this["hitCircle_dd15" + i].id = i;
            this.hitGroup15.add(this["hitCircle_dd15" + i]);
            game.physics.arcade.enable([this["hitCircle_dd15" + i]]);
            this["hitCircle_dd15" + i].body.collideWorldBounds = true;
        }


        this.circleGroup15 = game.add.group();
        this.circle15 = game.add.graphics(0, 0);
        this.circle15.beginFill(0x000000, 0);
        this.circleGroup15.add(this.circle15);
        this.bubhair.mask = this.circle15;

        this.dragCircla15 = game.add.graphics(0, 0);
        this.dragCircla15.beginFill(0x000000, 0);
        this.dragCircla15.drawCircle(0, 0, 50);
        this.dragCircla15.endFill();
        // this.dragCircla15.visible=false;
        this.hitSpritea15cnt = 0;

        game.physics.arcade.enable([this.dragCircla15]);
        this.dragCircla15.body.collideWorldBounds = true;
        this.dragCircla15.body.onCollide = new Phaser.Signal();
        this.dragCircla15.body.onCollide.add(this.hitSprite15, this);
        ////22222222222222222222222222222

        this.secondgroup = game.add.group();


        this.secondgroup.alpha = 0;


        this.botdrag = false;
        this.bot = game.add.sprite(150, 650, 'bot');
        this.bot.anchor.setTo(0.5);
        this.bot.scale.setTo(0.5);
        // this.bot.visible=false;
        this.secondgroup.add(this.bot);
        // this.bot.inputEnabled=true;
        // this.bot.input.useHandCursor=true;
        // this.bot.input.enableDrag();
        this.bot.events.onInputOver.add(this.btnOver, this);
        this.bot.events.onInputOut.add(this.btnOut, this);
        this.bot.events.onInputDown.add(function() {
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 125;
        }, this);
        this.bot.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 475 && game.input.activePointer.y > 75 && game.input.activePointer.y < 350)) {
                this.s_arrow1.visible = false;
                this.bot.visible = false;
                this.grennbottleani.visible = true;
                this.grennbottleani.animations.add('grennbottleani')
                this.grennbottleani.animations.play('grennbottleani', 10, false).onComplete.add(function() {
                    this.yellowdot1.visible = true;
                    this.firtsbottleani.visible = true;
                    this.firtsbottleani.inputEnabled = false;
                    this.grennbottleani.visible = false;
                    game.add.tween(this.grennbottleani).to({
                        x: 175,
                        y: 640
                    }, 1000, Phaser.Easing.Quadratic.Out, true);
                    this.h_handsecdrag = true;
                    this.h_handsec.visible = true;
                }, this);
            } else {
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 150;
                this.s_arrow1.y = 535;
                game.add.tween(this.bot).to({
                    x: 150,
                    y: 650
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.h_handsecdrag = false;
        this.h_handsec = game.add.sprite(75, 650, 'h_hand');
        this.h_handsec.anchor.setTo(0.5);
        this.h_handsec.visible = false;
        this.secondgroup.add(this.h_handsec);
        // this.h_handsec.inputEnabled=true;
        // this.h_handsec.input.useHandCursor=true;         
        this.h_handsec.events.onInputDown.add(function() {
            this.h_handsec.inputEnabled = false;
            this.h_handsecdrag = true;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 125;
        }, this);

        this.hitGroup3 = game.add.group();
        for (var i = 0; i <= Main.tool3X.length - 1; i++) {
            this["hitCircle_dd3" + i] = game.add.graphics(Main.tool3X[i], Main.tool3Y[i]);
            this["hitCircle_dd3" + i].beginFill(0x000000, 0);
            this["hitCircle_dd3" + i].drawCircle(0, 0, 80);
            this["hitCircle_dd3" + i].id = i;
            this.hitGroup3.add(this["hitCircle_dd3" + i]);
            game.physics.arcade.enable([this["hitCircle_dd3" + i]]);
            this["hitCircle_dd3" + i].body.collideWorldBounds = true;
        }


        this.circleGroup3 = game.add.group();
        this.circle3 = game.add.graphics(0, 0);
        this.circle3.beginFill(0x000000, 0);
        this.circleGroup3.add(this.circle3);
        this.hairabove1.mask = this.circle3;

        this.dragCircla3 = game.add.graphics(0, 0);
        this.dragCircla3.beginFill(0x000000, 0);
        this.dragCircla3.drawCircle(0, 0, 50);
        this.dragCircla3.endFill();

        this.hitSpritea3cnt = 0;

        game.physics.arcade.enable([this.dragCircla3]);
        this.dragCircla3.body.collideWorldBounds = true;
        this.dragCircla3.body.onCollide = new Phaser.Signal();
        this.dragCircla3.body.onCollide.add(this.hitSprite3, this);



        this.waterani11drag = false;
        this.waterani11 = game.add.sprite(250, 700, 'waterani');
        this.waterani11.anchor.setTo(0.5);
        this.waterani11.scale.setTo(0.7);
        this.secondgroup.add(this.waterani11);
        // this.waterani11.inputEnabled=true;
        // this.waterani11.input.useHandCursor=true;
        this.waterani11.events.onInputOver.add(this.btnOver, this);
        this.waterani11.events.onInputOut.add(this.btnOut, this);
        this.waterani11.events.onInputDown.add(function() {
            this.waterani11.inputEnabled = false;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 125;
            this.waterani11drag = true;
            this.waterani11.animations.add('waterani')
            this.waterani11.animations.play('waterani', 10, true).onComplete.add(function() {}, this);
        }, this);


        this.hitGroup4 = game.add.group();
        for (var i = 0; i <= Main.tool4X.length - 1; i++) {
            this["hitCircle_dd4" + i] = game.add.graphics(Main.tool4X[i], Main.tool4Y[i]);
            this["hitCircle_dd4" + i].beginFill(0x000000, 0);
            this["hitCircle_dd4" + i].drawCircle(0, 0, 50);
            this["hitCircle_dd4" + i].id = i;
            this.hitGroup4.add(this["hitCircle_dd4" + i]);
            game.physics.arcade.enable([this["hitCircle_dd4" + i]]);
            this["hitCircle_dd4" + i].body.collideWorldBounds = true;
        }


        this.circleGroup4 = game.add.group();
        this.circle4 = game.add.graphics(0, 0);
        this.circle4.beginFill(0x000000, 0);
        this.circleGroup4.add(this.circle4);
        // this.hairani11.mask = this.circle4;

        this.dragCircla4 = game.add.graphics(0, 0);
        this.dragCircla4.beginFill(0x000000, 0);
        this.dragCircla4.drawCircle(0, 0, 50);
        this.dragCircla4.endFill();

        this.hitSpritea4cnt = 0;

        game.physics.arcade.enable([this.dragCircla4]);
        this.dragCircla4.body.collideWorldBounds = true;
        this.dragCircla4.body.onCollide = new Phaser.Signal();
        this.dragCircla4.body.onCollide.add(this.hitSprite4, this);


        //333333333333333333


        this.thirdgroup = game.add.group();

        this.thirdgroup.alpha = 0;





        this.hairdyerdrag = false;
        this.hairdyer = game.add.sprite(100, 650, 'hairdyer');
        this.hairdyer.anchor.setTo(0.5);
        // this.hairdyer.scale.setTo(0.6);
        this.thirdgroup.add(this.hairdyer);
        // this.hairdyer.inputEnabled=true;
        //  this.hairdyer.input.useHandCursor=true;
        this.hairdyer.events.onInputOver.add(this.btnOver, this);
        this.hairdyer.events.onInputOut.add(this.btnOut, this);
        this.hairdyer.events.onInputDown.add(function() {
            this.hairdyer.inputEnabled = false;
            this.hairdyerdrag = true;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 250;
            this.s_arrow1.y = 150;
            this.hairdyer.animations.add('hairdyer', [1, 2, 3, 4, 5, 6, 7, 8])
            this.hairdyer.animations.play('hairdyer', 25, true).onComplete.add(function() {}, this);
        }, this);



        this.hitGroup5 = game.add.group();
        for (var i = 0; i <= Main.tool5X.length - 1; i++) {
            this["hitCircle_dd5" + i] = game.add.graphics(Main.tool5X[i], Main.tool5Y[i]);
            this["hitCircle_dd5" + i].beginFill(0x000000, 0);
            this["hitCircle_dd5" + i].drawCircle(0, 0, 50);
            this["hitCircle_dd5" + i].id = i;
            this.hitGroup5.add(this["hitCircle_dd5" + i]);
            game.physics.arcade.enable([this["hitCircle_dd5" + i]]);
            this["hitCircle_dd5" + i].body.collideWorldBounds = true;
        }


        this.circleGroup5 = game.add.group();
        this.circle5 = game.add.graphics(0, 0);
        this.circle5.beginFill(0x000000, 0);
        this.circleGroup5.add(this.circle5);
        // this.anna_hairs15.mask = this.circle5;

        this.dragCircla5 = game.add.graphics(0, 0);
        this.dragCircla5.beginFill(0x000000, 0);
        this.dragCircla5.drawCircle(0, 0, 50);
        this.dragCircla5.endFill();

        this.hitSpritea5cnt = 0;

        game.physics.arcade.enable([this.dragCircla5]);
        this.dragCircla5.body.collideWorldBounds = true;
        this.dragCircla5.body.onCollide = new Phaser.Signal();
        this.dragCircla5.body.onCollide.add(this.hitSprite5, this);





        this.newcap = game.add.sprite(350, 675, 'newcap');
        this.newcap.anchor.setTo(0.5);
        this.newcap.scale.setTo(0.5);
        this.thirdgroup.add(this.newcap);
        // this.newcap.inputEnabled=true;
        //    this.newcap.input.useHandCursor=true;
        //    this.newcap.input.enableDrag();
        this.newcap.events.onInputDown.add(function() {
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 250;
            this.s_arrow1.y = 125;


            this.spafront2.visible = true;
            this.spafronthair.visible = false;
            this.spabackhair.visible = false;

        }, this);
        this.newcap.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 75 && game.input.activePointer.x < 475 && game.input.activePointer.y > 125 && game.input.activePointer.y < 450)) {
                this.newcap.visible = false;
                this.s_arrow1.visible = false;
                this.newcap12.visible = true;


                game.add.tween(this.thirdgroup).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true)
                game.add.tween(this.fourthgroup).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 100;
                    this.s_arrow1.y = 535;
                    this.firtsbottleani44444.inputEnabled = true;
                    this.firtsbottleani44444.input.useHandCursor = true;
                    this.firtsbottleani44444.input.enableDrag();
                }, this);
            } else {
                this.spafront2.visible = false;
                this.spafronthair.visible = true;
                this.spabackhair.visible = true;
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 350;
                this.s_arrow1.y = 620;
                game.add.tween(this.newcap).to({
                    x: 350,
                    y: 675
                }, 700, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);





        //444444444444444444444


        this.fourthgroup = game.add.group();

        this.fourthgroup.alpha = 0;





        this.firtsbottleani44444 = game.add.sprite(100, 640, 'firtsbottleani');
        this.firtsbottleani44444.anchor.setTo(0.5);
        this.firtsbottleani44444.scale.setTo(0.6);
        this.fourthgroup.add(this.firtsbottleani44444);
        // this.firtsbottleani44444.inputEnabled=true;
        // this.firtsbottleani44444.input.useHandCursor=true;
        // this.firtsbottleani44444.input.enableDrag();
        this.firtsbottleani44444.events.onInputOver.add(this.btnOver, this);
        this.firtsbottleani44444.events.onInputOut.add(this.btnOut, this);
        this.firtsbottleani44444.events.onInputDown.add(function() {
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 175;
        }, this);
        this.firtsbottleani44444.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 475 && game.input.activePointer.y > 75 && game.input.activePointer.y < 350)) {
                this.firtsbottleani44444.visible = false;
                this.s_arrow1.visible = false;

                this.firtsbottleaniup.visible = true;
                this.firtsbottleaniup.x = 235;
                this.firtsbottleaniup.y = 175;

                this.firtsbottleaniup.animations.add('firtsbottleani')
                this.firtsbottleaniup.animations.play('firtsbottleani', 10, false).onComplete.add(function() {
                    this.yellowdotface.visible = true;
                    this.firtsbottleani.visible = true;
                    this.firtsbottleani.inputEnabled = false;
                    this.firtsbottleaniup.visible = false;
                    game.add.tween(this.firtsbottleani).to({
                        x: 100,
                        y: 640
                    }, 1000, Phaser.Easing.Quadratic.Out, true);
                    this.handfacedrag = true;
                    this.handface.visible = true;
                }, this);
            } else {
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 100;
                this.s_arrow1.y = 535;
                game.add.tween(this.firtsbottleani44444).to({
                    x: 100,
                    y: 640
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);


        this.handfacedrag = false;
        this.handface = game.add.sprite(75, 650, 'h_hand');
        this.handface.anchor.setTo(0.5);
        this.handface.visible = false;
        this.fourthgroup.add(this.handface);
        // this.handface.inputEnabled=true;
        // this.handface.input.useHandCursor=true;         
        this.handface.events.onInputDown.add(function() {
            this.handface.inputEnabled = false;
            this.handfacedrag = true;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 125;
        }, this);


        this.hitGroup6 = game.add.group();
        for (var i = 0; i <= Main.tool6X.length - 1; i++) {
            this["hitCircle_dd6" + i] = game.add.graphics(Main.tool6X[i], Main.tool6Y[i]);
            this["hitCircle_dd6" + i].beginFill(0x000000, 0);
            this["hitCircle_dd6" + i].drawCircle(0, 0, 50);
            this["hitCircle_dd6" + i].id = i;
            this.hitGroup6.add(this["hitCircle_dd6" + i]);
            game.physics.arcade.enable([this["hitCircle_dd6" + i]]);
            this["hitCircle_dd6" + i].body.collideWorldBounds = true;
        }


        this.circleGroup6 = game.add.group();
        this.circle6 = game.add.graphics(0, 0);
        this.circle6.beginFill(0x000000, 0);
        this.circleGroup6.add(this.circle6);
        this.facebubble.mask = this.circle6;

        this.dragCircla6 = game.add.graphics(0, 0);
        this.dragCircla6.beginFill(0x000000, 0);
        this.dragCircla6.drawCircle(0, 0, 50);
        this.dragCircla6.endFill();

        this.hitSpritea6cnt = 0;

        game.physics.arcade.enable([this.dragCircla6]);
        this.dragCircla6.body.collideWorldBounds = true;
        this.dragCircla6.body.onCollide = new Phaser.Signal();
        this.dragCircla6.body.onCollide.add(this.hitSprite6, this);





        this.orangefuldrag = false;
        this.orangeful = game.add.sprite(250, 675, 'orangeful');
        this.orangeful.anchor.setTo(0.5);
        this.orangeful.scale.setTo(0.65);
        this.fourthgroup.add(this.orangeful);
        // this.orangeful.inputEnabled=true;
        //  this.orangeful.input.useHandCursor=true;         
        this.orangeful.events.onInputDown.add(function() {
            this.orangeful.inputEnabled = false;
            this.orangefuldrag = true;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 175;
        }, this);



        this.hitGroup7 = game.add.group();
        for (var i = 0; i <= Main.tool7X.length - 1; i++) {
            this["hitCircle_dd7" + i] = game.add.graphics(Main.tool7X[i], Main.tool7Y[i]);
            this["hitCircle_dd7" + i].beginFill(0x000000, 0);
            this["hitCircle_dd7" + i].drawCircle(0, 0, 50);
            this["hitCircle_dd7" + i].id = i;
            this.hitGroup7.add(this["hitCircle_dd7" + i]);
            game.physics.arcade.enable([this["hitCircle_dd7" + i]]);
            this["hitCircle_dd7" + i].body.collideWorldBounds = true;
        }


        this.circleGroup7 = game.add.group();
        this.circle7 = game.add.graphics(0, 0);
        this.circle7.beginFill(0x000000, 0);
        this.circleGroup7.add(this.circle7);
        // this.anna_hairs15.mask = this.circle7;

        this.dragCircla7 = game.add.graphics(0, 0);
        this.dragCircla7.beginFill(0x000000, 0);
        this.dragCircla7.drawCircle(0, 0, 50);
        this.dragCircla7.endFill();

        this.hitSpritea7cnt = 0;

        game.physics.arcade.enable([this.dragCircla7]);
        this.dragCircla7.body.collideWorldBounds = true;
        this.dragCircla7.body.onCollide = new Phaser.Signal();
        this.dragCircla7.body.onCollide.add(this.hitSprite7, this);




        this.toweldrag = false;
        this.towel = game.add.sprite(400, 700, 'towel');
        this.towel.anchor.setTo(0.5);
        this.towel.scale.setTo(0.5);
        this.fourthgroup.add(this.towel);
        // this.towel.inputEnabled=true;
        //  this.towel.input.useHandCursor=true;
        this.towel.events.onInputOver.add(this.btnOver, this);
        this.towel.events.onInputOut.add(this.btnOut, this);
        this.towel.events.onInputDown.add(function() {
            this.towel.inputEnabled = false;
            this.toweldrag = true;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 175;
        }, this);

        this.hitGroup8 = game.add.group();
        for (var i = 0; i <= Main.tool8X.length - 1; i++) {
            this["hitCircle_dd8" + i] = game.add.graphics(Main.tool8X[i], Main.tool8Y[i]);
            this["hitCircle_dd8" + i].beginFill(0x000000, 0);
            this["hitCircle_dd8" + i].drawCircle(0, 0, 50);
            this["hitCircle_dd8" + i].id = i;
            this.hitGroup8.add(this["hitCircle_dd8" + i]);
            game.physics.arcade.enable([this["hitCircle_dd8" + i]]);
            this["hitCircle_dd8" + i].body.collideWorldBounds = true;
        }


        this.circleGroup8 = game.add.group();
        this.circle8 = game.add.graphics(0, 0);
        this.circle8.beginFill(0x000000, 0);
        this.circleGroup8.add(this.circle8);
        // this.anna_hairs15.mask = this.circle8;

        this.dragCircla8 = game.add.graphics(0, 0);
        this.dragCircla8.beginFill(0x000000, 0);
        this.dragCircla8.drawCircle(0, 0, 35);
        this.dragCircla8.endFill();

        this.hitSpritea8cnt = 0;

        game.physics.arcade.enable([this.dragCircla8]);
        this.dragCircla8.body.collideWorldBounds = true;
        this.dragCircla8.body.onCollide = new Phaser.Signal();
        this.dragCircla8.body.onCollide.add(this.hitSprite8, this);


        // this.firstgroup.alpha=0;
        // this.secondgroup.alpha=0;
        // this.thirdgroup.alpha=0;
        // this.fourthgroup.alpha=0;


        //555555555555555555

        this.fifthgroup = game.add.group();

        this.fifthgroup.alpha = 0;



        this.aveani = game.add.sprite(270, 450, 'aveani');
        this.aveani.anchor.setTo(0.5);
        this.aveani.scale.setTo(0.9);
        this.fifthgroup.add(this.aveani);
        this.aveani.visible = false;
        //          this.aveani.animations.add('aveani')
        // this.aveani.animations.play('aveani',10,true)

        this.stream = game.add.sprite(100, 650, 'stream');
        this.stream.anchor.setTo(0.5);
        this.stream.scale.setTo(0.9);
        this.fifthgroup.add(this.stream);
        //  this.stream.inputEnabled = true;
        // this.stream.input.useHandCursor = true;
        // this.stream.input.enableDrag();
        this.stream.events.onInputDown.add(function() {
            this.s_arrow1.visible = true
            this.s_arrow1.x = 265;
            this.s_arrow1.y = 125;
        }, this);
        this.stream.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 50 && game.input.activePointer.x < 500 && game.input.activePointer.y > 50 && game.input.activePointer.y < 525)) {
                this.stream.visible = false;
                this.s_arrow1.visible = false;
                this.stream.visible = false;
                this.aveani.visible = true;
                this.aveani.animations.add('aveani', );
                this.aveani.animations.play('aveani', 10, false).onComplete.add(function() {
                    game.add.tween(this.aveani).to({
                        alpha: 0
                    }, 1500, Phaser.Easing.Quadratic.Out, true, ).onComplete.add(function() {
                        this.s_arrow1.visible = false;
                        this.s_arrow1.visible = true;
                        this.s_arrow1.x = 250;
                        this.s_arrow1.y = 550;
                        this.pin.inputEnabled = true;
                        this.pin.input.useHandCursor = true;


                    }, this);
                }, this);
            } else {
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 100;
                this.s_arrow1.y = 550;
                game.add.tween(this.stream).to({
                    x: 100,
                    y: 650
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);



        this.pindrag = false;
        this.pin = game.add.sprite(250, 650, 'pin');
        this.pin.anchor.setTo(0.5);
        this.pin.scale.setTo(0.6);
        this.fifthgroup.add(this.pin);
        // this.pin.inputEnabled=true;
        //  this.pin.input.useHandCursor=true;
        //      this.pin.events.onInputOver.add(this.btnOver, this);
        // this.pin.events.onInputOut.add(this.btnOut, this);
        this.pin.events.onInputDown.add(function() {
            this.pin.inputEnabled = false;
            this.pindrag = true;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 320;
            this.s_arrow1.y = 285;
            this.spapimble1.inputEnabled = true;
            this.spapimble1.input.useHandCursor = true;


        }, this);





        this.redbox = game.add.sprite(425, 650, 'redbox');
        this.redbox.anchor.setTo(0.5);
        this.redbox.scale.setTo(0.8);
        this.fifthgroup.add(this.redbox);

        this.redfulldrag = false;
        this.redfull = game.add.sprite(425, 650, 'redfull');
        this.redfull.anchor.setTo(0.5);
        this.redfull.scale.setTo(0.8);
        this.fifthgroup.add(this.redfull);
        // this.redfull.inputEnabled=true;
        //  this.redfull.input.useHandCursor=true;
        //      this.redfull.events.onInputOver.add(this.btnOver, this);
        // this.redfull.events.onInputOut.add(this.btnOut, this);
        this.redfull.events.onInputDown.add(function() {
            this.redfull.inputEnabled = false;
            this.redfulldrag = true;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 320;
            this.s_arrow1.y = 285;
            this.spapimble1.inputEnabled = true;
            this.spapimble1.input.useHandCursor = true;
        }, this);


        // this.hitGroup9= game.add.group();
        // for(var i=0; i<=Main.tool9X.length-1; i++)
        //     {
        // this["hitCircle_dd9"+i] = game.add.graphics(Main.tool9X[i],Main.tool9Y[i]);
        // this["hitCircle_dd9"+i].beginFill(0x000000,0);
        // this["hitCircle_dd9"+i].drawCircle(0,0,50);
        // this["hitCircle_dd9"+i].id = i;
        // this.hitGroup9.add(this["hitCircle_dd9"+i]);
        // game.physics.arcade.enable([this["hitCircle_dd9"+i]]);
        // this["hitCircle_dd9"+i].body.collideWorldBounds = true;
        //       }


        // this.circleGroup9= game.add.group();
        // this.circle9= game.add.graphics(0,0);
        // this.circle9.beginFill(0x000000,0);
        // this.circleGroup9.add(this.circle9);
        // // this.anna_hairs15.mask = this.circle9;

        // this.dragCircla9= game.add.graphics(0,0);
        // this.dragCircla9.beginFill(0x000000, 0);
        // this.dragCircla9.drawCircle(0,0,50);
        // this.dragCircla9.endFill();

        // this.hitSpritea9cnt = 0;

        // game.physics.arcade.enable([this.dragCircla9]);  
        // this.dragCircla9.body.collideWorldBounds = true;
        // this.dragCircla9.body.onCollide = new Phaser.Signal();
        // this.dragCircla9.body.onCollide.add(this.hitSprite9,this);





        //66666666666666666666666

        this.sixthgroup = game.add.group();

        this.sixthgroup.alpha = 0;

        this.bluebox = game.add.sprite(100, 675, 'bluebox');
        this.bluebox.anchor.setTo(0.5);
        this.bluebox.scale.setTo(0.8);
        this.sixthgroup.add(this.bluebox);

        this.bluestrickdrag = false;
        this.bluestrick = game.add.sprite(100, 675, 'bluestrick');
        this.bluestrick.anchor.setTo(0.5);
        this.bluestrick.scale.setTo(0.8);
        this.sixthgroup.add(this.bluestrick);
        // this.bluestrick.inputEnabled=true;
        //  this.bluestrick.input.useHandCursor=true;
        //      this.bluestrick.events.onInputOver.add(this.btnOver, this);
        // this.bluestrick.events.onInputOut.add(this.btnOut, this);
        this.bluestrick.events.onInputDown.add(function() {
            this.bluestrick.inputEnabled = false;
            this.bluestrickdrag = true;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 255;
            this.s_arrow1.y = 175;
        }, this);




        this.hitGroup10 = game.add.group();
        for (var i = 0; i <= Main.tool10X.length - 1; i++) {
            this["hitCircle_dd10" + i] = game.add.graphics(Main.tool10X[i], Main.tool10Y[i]);
            this["hitCircle_dd10" + i].beginFill(0x000000, 0);
            this["hitCircle_dd10" + i].drawCircle(0, 0, 50);
            this["hitCircle_dd10" + i].id = i;
            this.hitGroup10.add(this["hitCircle_dd10" + i]);
            game.physics.arcade.enable([this["hitCircle_dd10" + i]]);
            this["hitCircle_dd10" + i].body.collideWorldBounds = true;
        }


        this.circleGroup10 = game.add.group();
        this.circle10 = game.add.graphics(0, 0);
        this.circle10.beginFill(0x000000, 0);
        this.circleGroup10.add(this.circle10);
        this.bluemask.mask = this.circle10;

        this.dragCircla10 = game.add.graphics(0, 0);
        this.dragCircla10.beginFill(0x000000, 0);
        this.dragCircla10.drawCircle(0, 0, 35);
        this.dragCircla10.endFill();

        this.hitSpritea10cnt = 0;

        game.physics.arcade.enable([this.dragCircla10]);
        this.dragCircla10.body.collideWorldBounds = true;
        this.dragCircla10.body.onCollide = new Phaser.Signal();
        this.dragCircla10.body.onCollide.add(this.hitSprite10, this);




        this.cumcumber = game.add.sprite(275, 685, 'cumcumber');
        this.cumcumber.anchor.setTo(0.5);
        this.cumcumber.scale.setTo(0.8);
        this.sixthgroup.add(this.cumcumber);
        //         this.cumcumber.inputEnabled = true;
        // this.cumcumber.input.useHandCursor = true;
        // this.cumcumber.input.enableDrag();
        this.cumcumber.events.onInputDown.add(function() {
            this.s_arrow1.visible = true
            this.s_arrow1.x = 265;
            this.s_arrow1.y = 200;
        }, this);
        this.cumcumber.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 25 && game.input.activePointer.x < 500 && game.input.activePointer.y > 100 && game.input.activePointer.y < 425)) {
                this.cumcumber.visible = false;
                this.s_arrow1.visible = false;
                this.cumcumber.visible = false;
                this.cumcumberup.visible = true;

                game.add.tween(this.t_timer).to({
                    x: 75
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.t_timer.animations.add('t_timer', );
                    this.t_timer.animations.play('t_timer', 15, false).onComplete.add(function() {
                        game.add.tween(this.t_timer).to({
                            x: -500
                        }, 1500, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                            this.cumcumberup.inputEnabled = true;
                            this.cumcumberup.input.useHandCursor = true;
                            this.s_arrow1.visible = true
                            this.s_arrow1.x = 265;
                            this.s_arrow1.y = 205;


                        }, this);
                    }, this);
                }, this);
            } else {
                this.s_arrow1.visible = false;
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 275;
                this.s_arrow1.y = 625;
                game.add.tween(this.cumcumber).to({
                    x: 275,
                    y: 685
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);



        this.wateranilast123drag = false;
        this.wateranilast123 = game.add.sprite(325, 725, 'waterani');
        this.wateranilast123.anchor.setTo(0.5);
        this.wateranilast123.scale.setTo(0.8);
        this.sixthgroup.add(this.wateranilast123);
        // this.wateranilast123.inputEnabled=true;
        //  this.wateranilast123.input.useHandCursor=true;
        //      this.wateranilast123.events.onInputOver.add(this.btnOver, this);
        // this.wateranilast123.events.onInputOut.add(this.btnOut, this);
        this.wateranilast123.events.onInputDown.add(function() {
            this.wateranilast123.inputEnabled = false;
            this.wateranilast123drag = true;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 265;
            this.s_arrow1.y = 200;
            this.wateranilast123.animations.add('waterani')
            this.wateranilast123.animations.play('waterani', 10, true).onComplete.add(function() {
                this.s_arrow1.visible = false;
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 255;
                this.s_arrow1.y = 175;
            }, this);
        }, this);


        this.hitGroup11 = game.add.group();
        for (var i = 0; i <= Main.tool11X.length - 1; i++) {
            this["hitCircle_dd11" + i] = game.add.graphics(Main.tool11X[i], Main.tool11Y[i]);
            this["hitCircle_dd11" + i].beginFill(0x000000, 0);
            this["hitCircle_dd11" + i].drawCircle(0, 0, 50);
            this["hitCircle_dd11" + i].id = i;
            this.hitGroup11.add(this["hitCircle_dd11" + i]);
            game.physics.arcade.enable([this["hitCircle_dd11" + i]]);
            this["hitCircle_dd11" + i].body.collideWorldBounds = true;
        }


        this.circleGroup11 = game.add.group();
        this.circle11 = game.add.graphics(0, 0);
        this.circle11.beginFill(0x000000, 0);
        this.circleGroup11.add(this.circle11);
        // this.anna_hairs15.mask = this.circle11;

        this.dragCircla11 = game.add.graphics(0, 0);
        this.dragCircla11.beginFill(0x000000, 0);
        this.dragCircla11.drawCircle(0, 0, 50);
        this.dragCircla11.endFill();

        this.hitSpritea11cnt = 0;

        game.physics.arcade.enable([this.dragCircla11]);
        this.dragCircla11.body.collideWorldBounds = true;
        this.dragCircla11.body.onCollide = new Phaser.Signal();
        this.dragCircla11.body.onCollide.add(this.hitSprite11, this);


        this.t_timer = game.add.sprite(75, 250, 't_timer');
        this.t_timer.anchor.setTo(0.5);
        this.t_timer.scale.setTo(0.8);
        this.sixthgroup.add(this.t_timer);
        this.t_timer.x = -500



        // this.spafronthair.visible=false;
        // this.spabackhair.visible=false;

        //  this.spafront2.visible=true;

        ////77777777777777777777777777777777777777


        this.seventhgroup = game.add.group();

        this.seventhgroup.alpha = 0;


        this.vghhjgyjil = game.add.sprite(125, 685, 'vghhjgyjil');
        this.vghhjgyjil.anchor.setTo(0.5);
        this.vghhjgyjil.scale.setTo(0.8);
        this.seventhgroup.add(this.vghhjgyjil);
        // this.vghhjgyjil.inputEnabled=true;
        //  this.vghhjgyjil.input.useHandCursor=true;
        //      this.vghhjgyjil.events.onInputOver.add(this.btnOver, this);
        // this.vghhjgyjil.events.onInputOut.add(this.btnOut, this);
        this.vghhjgyjil.events.onInputDown.add(function() {
            this.vghhjgyjil.inputEnabled = false;
            this.eyedowndown.visible = true;
            this.eyedowndown.inputEnabled = true;
            this.eyedowndown.input.useHandCursor = true;
            this.eyedowndown.input.enableDrag();

        }, this);



        this.eyedowndowndrag = false;
        this.eyedowndown = game.add.sprite(125, 685, 'eyedown');
        this.eyedowndown.anchor.setTo(0.5);
        this.eyedowndown.scale.setTo(0.8);
        this.seventhgroup.add(this.eyedowndown);
        this.eyedowndown.visible = false;
        //       this.eyedowndown.inputEnabled=true;
        // this.eyedowndown.input.useHandCursor=true;
        // this.eyedowndown.input.enableDrag();
        this.eyedowndown.events.onInputDown.add(function() {
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 260;
            this.s_arrow1.y = 250;

        }, this);
        this.eyedowndown.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 25 && game.input.activePointer.x < 475 && game.input.activePointer.y > 225 && game.input.activePointer.y < 350)) {
                this.eyedowndown.visible = false;
                this.s_arrow1.visible = false;
                this.eyedownup.visible = true;
                this.eyetool.inputEnabled = true;
                this.eyetool.input.useHandCursor = true;
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 360;
                this.s_arrow1.y = 650;
                game.add.tween(this.eyedownup).to({
                    alpha: 0
                }, 1500, Phaser.Easing.Quadratic.Out, true, 1500)



            } else {
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 125;
                this.s_arrow1.y = 650;
                game.add.tween(this.eyedowndown).to({
                    x: 125,
                    y: 685
                }, 700, Phaser.Easing.Quadratic.Out, true, )

            }
        }, this);


        this.eyetooldrag = false;
        this.eyetool = game.add.sprite(350, 700, 'eyetool');
        this.eyetool.anchor.setTo(0.5);
        this.eyetool.scale.setTo(0.8);
        this.seventhgroup.add(this.eyetool);
        //  this.eyetool.inputEnabled=true;
        // this.eyetool.input.useHandCursor=true;
        this.eyetool.events.onInputDown.add(function() {
            this.eyetooldrag = true;
            this.eyetool.inputEnabled = false;
            this.s_arrow1.visible = false;
            this.s_arrow1.visible = true;
            this.s_arrow1.x = 315;
            this.s_arrow1.y = 205;
            this.eyebro2.inputEnabled = true;
            this.eyebro2.input.useHandCursor = true;
        }, this);


        // ///Mark

        // this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0.1);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        // this.mcnt1++;
        // this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        // this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,0.5);
        // this.mcir.drawCircle(0,0,45);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // // console.log(this['ycnt'+this.mcnt1]);
        // },this);





        // // arrrrrrrr

        this.arrowgp = game.add.group();
        var arro2x = [250, 205]; //40
        var arro2y = [325, 420]; //660

        for (i = 1; i <= 2; i++) {

            this['s_arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['s_arrow' + i].anchor.setTo(0.5);
            this['s_arrow' + i].animations.add('s_arrow');
            this['s_arrow' + i].animations.play('s_arrow', 20, true);
            this['s_arrow' + i].visible = false;
            if (i == 1) {
                this['s_arrow' + i].visible = false;
            }

            this.arrowgp.add(this['s_arrow' + i]);

        }

        this.morebtn = game.add.sprite(85, 600, 'btn4');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 600, 'btn2');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.firtsbottleani.inputEnabled = true;
                this.firtsbottleani.input.useHandCursor = true;
                this.firtsbottleani.input.enableDrag();

                this.s_arrow1.visible = true;
                this.s_arrow1.x = 175;
                this.s_arrow1.y = 535;
            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(415, 5, "soundicon");
        this.musicButton.scale.setTo(0.75);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    // hitSprite1:function(sprite1, sprite2){
    //           console.log(this.hitSpritea1cnt);
    //           sprite2.kill();
    //           this.hitSpritea1cnt ++            
    //             this.bubhair.visible=true;
    //           if (this.hitSpritea1cnt >=3) { 
    //           this.s_arrow1.visible =false;
    //  this.yellowdot.visible=false;
    //            }          
    //           if (this.hitSpritea1cnt >=47) {  
    //           game.add.tween(this.h_hand).to({alpha:0},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){  
    //               this.waterani.inputEnabled=true;
    //          this.waterani.input.useHandCursor=true;
    //          this.s_arrow1.visible=true;
    //          this.s_arrow1.x=350;
    //          this.s_arrow1.y=525;
    //       },this);
    //              }
    //             this.circle1.drawCircle(Main.tool1X[sprite2.id],Main.tool1Y[sprite2.id],75);
    //            },



    hitSprite15: function(sprite1, sprite2) {
        // console.log(this.hitSpritea15cnt);
        sprite2.kill();
        this.hitSpritea15cnt++
            this.bubhair.visible = true;
        // this.dragCircla15.visible=true;

        if (this.hitSpritea15cnt >= 3) {
            this.s_arrow1.visible = false;
            this.yellowdot.visible = false;
        }
        if (this.hitSpritea15cnt >= 47) {
            game.add.tween(this.h_hand).to({
                alpha: 0
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.waterani.inputEnabled = true;
                this.waterani.input.useHandCursor = true;
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 350;
                this.s_arrow1.y = 525;
            }, this);
        }
        this.circle15.drawCircle(Main.tool15X[sprite2.id], Main.tool15Y[sprite2.id], 60);
    },


    hitSprite2: function(sprite1, sprite2) {
        // console.log(this.hitSpritea2cnt);
        sprite2.kill();
        this.hitSpritea2cnt++
            this.hairani.visible = true;
        this.bubhair.visible = false;

        this.hairani.animations.add('hairani', [0, 1, 2, 3, 4, 5])
        this.hairani.animations.play('hairani', 10, true)
        if (this.hitSpritea2cnt >= 10) {
            this.s_arrow1.visible = false;
        }
        if (this.hitSpritea2cnt >= 48) {

            game.add.tween(this.waterani).to({
                x: 250,
                y: 700
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                this.wateranidrag = false;
                this.hairani.animations.stop();
                this.waterani.animations.stop();
                this.waterani.frame = 0;
                this.hairani.frame = 6;
                this.hairani.visible = false;



                game.add.tween(this.firstgroup).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true)
                game.add.tween(this.secondgroup).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.bot.inputEnabled = true;
                    this.bot.input.useHandCursor = true;
                    this.bot.input.enableDrag();
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 150;
                    this.s_arrow1.y = 550;

                }, this);
            }, this);
        }
        this.circle2.drawCircle(Main.tool2X[sprite2.id], Main.tool2Y[sprite2.id], 50);
    },

    hitSprite3: function(sprite1, sprite2) {
        // console.log(this.hitSpritea3cnt);
        sprite2.kill();
        this.hitSpritea3cnt++
            this.hairabove1.visible = true;

        if (this.hitSpritea3cnt >= 5) {
            this.yellowdot1.visible = false;

            this.s_arrow1.visible = false;
        }
        if (this.hitSpritea3cnt >= 48) {
            game.add.tween(this.h_handsec).to({
                alpha: 0
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                this.h_handsecdrag = false;
                this.waterani11.inputEnabled = true;
                this.waterani11.input.useHandCursor = true;
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 350;
                this.s_arrow1.y = 525;
            }, this);
        }
        this.circle3.drawCircle(Main.tool3X[sprite2.id], Main.tool3Y[sprite2.id], 75);
    },


    hitSprite4: function(sprite1, sprite2) {
        // console.log(this.hitSpritea4cnt);
        sprite2.kill();
        this.hitSpritea4cnt++
            this.hairani11.visible = true;
        this.hairabove1.visible = false;
        if (this.hitSpritea4cnt >= 5) {
            this.s_arrow1.visible = false;
        }

        this.hairani11.animations.add('hairani', [0, 1, 2, 3, 4, 5])
        this.hairani11.animations.play('hairani', 10, true)
        if (this.hitSpritea4cnt >= 48) {

            game.add.tween(this.waterani11).to({
                x: 250,
                y: 700
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                this.waterani11drag = false;
                this.hairani11.animations.stop();
                this.waterani11.animations.stop();
                this.waterani11.frame = 0;
                this.hairani11.frame = 6;
                this.hairani11.visible = false;


                game.add.tween(this.newwaterlast).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true)
                game.add.tween(this.secondgroup).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true)
                game.add.tween(this.thirdgroup).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 110;
                    this.s_arrow1.y = 535;
                    this.hairdyer.inputEnabled = true;
                    this.hairdyer.input.useHandCursor = true;
                }, this);
            }, this);

        }
        this.circle4.drawCircle(Main.tool4X[sprite2.id], Main.tool4Y[sprite2.id], 50);
    },

    hitSprite5: function(sprite1, sprite2) {
        // console.log(this.hitSpritea5cnt);
        sprite2.kill();
        this.hitSpritea5cnt++

            if (this.hitSpritea5cnt >= 5) {
                this.s_arrow1.visible = false;

            }


        if (this.hitSpritea5cnt >= 10) {

            game.add.tween(this.newwaterlast).to({
                alpha: 0
            }, 1000, Phaser.Easing.Quadratic.Out, true)

            this.s_arrow1.visible = false;

        }
        if (this.hitSpritea5cnt >= 48) {

            game.add.tween(this.hairdyer).to({
                x: 100,
                y: 650
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                this.hairdyerdrag = false;
                this.hairdyer.animations.stop();
                this.hairdyer.frame = 0;

                this.newcap.inputEnabled = true;
                this.newcap.input.useHandCursor = true;
                this.newcap.input.enableDrag();
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 350;
                this.s_arrow1.y = 620;

            }, this);

        }
        this.circle5.drawCircle(Main.tool5X[sprite2.id], Main.tool5Y[sprite2.id], 50);
    },

    hitSprite6: function(sprite1, sprite2) {
        // console.log(this.hitSpritea6cnt);
        sprite2.kill();
        this.hitSpritea6cnt++
            this.facebubble.visible = true;
        this.yellowdotface.visible = false;

        if (this.hitSpritea6cnt >= 5) {
            this.s_arrow1.visible = false;
        }
        if (this.hitSpritea6cnt >= 18) {
            game.add.tween(this.handface).to({
                alpha: 0
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 250;
                this.s_arrow1.y = 625;

                this.orangeful.inputEnabled = true;
                this.orangeful.input.useHandCursor = true;
            }, this);
        }
        this.circle6.drawCircle(Main.tool6X[sprite2.id], Main.tool6Y[sprite2.id], 50);
    },
    hitSprite7: function(sprite1, sprite2) {
        // console.log(this.hitSpritea7cnt);
        sprite2.kill();
        this.hitSpritea7cnt++
            if (this.hitSpritea7cnt >= 5) {
                this.s_arrow1.visible = false
                game.add.tween(this.facebubble).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true)

            }
        if (this.hitSpritea7cnt >= 18) {
            game.add.tween(this.lastwater).to({
                alpha: 0.5
            }, 1000, Phaser.Easing.Quadratic.Out, true)

            game.add.tween(this.orangeful).to({
                x: 250,
                y: 675
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                this.orangefuldrag = false;
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 400;
                this.s_arrow1.y = 600;
                this.towel.inputEnabled = true;
                this.towel.input.useHandCursor = true;
            }, this);
        }
        this.circle7.drawCircle(Main.tool7X[sprite2.id], Main.tool7Y[sprite2.id], 50);
    },


    hitSprite8: function(sprite1, sprite2) {
        // console.log(this.hitSpritea8cnt);
        sprite2.kill();
        this.hitSpritea8cnt++
            // this.lastwater.visible=false
            if (this.hitSpritea8cnt >= 5) {
                this.s_arrow1.visible = false
                game.add.tween(this.lastwater).to({
                    alpha: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true);

            }
        if (this.hitSpritea8cnt >= 18) {
            game.add.tween(this.towel).to({
                x: 400,
                y: 700
            }, 700, Phaser.Easing.Quadratic.Out, true, ).onComplete.add(function() {


                this.toweldrag = false;
                game.add.tween(this.fourthgroup).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true)
                game.add.tween(this.fifthgroup).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 100;
                    this.s_arrow1.y = 550;
                    this.stream.inputEnabled = true;
                    this.stream.input.useHandCursor = true;
                    this.stream.input.enableDrag();

                }, this);
            }, this);
        }

        this.circle8.drawCircle(Main.tool8X[sprite2.id], Main.tool8Y[sprite2.id], 50);
    },



    //           hitSprite9:function(sprite1, sprite2){
    //           // console.log(this.hitSpritea9cnt);
    //           sprite2.kill();
    //           this.hitSpritea9cnt ++

    //           if (this.hitSpritea9cnt >=5) { 
    //             this.s_arrow1.visible=false;


    //            game.add.tween(this.spapimble1).to({alpha:0},2000,Phaser.Easing.Quadratic.Out,true);
    //            game.add.tween(this.spapimble2).to({alpha:0},2000,Phaser.Easing.Quadratic.Out,true);
    //            game.add.tween(this.spapimble3).to({alpha:0},2000,Phaser.Easing.Quadratic.Out,true);
    //            game.add.tween(this.spapimble4).to({alpha:0},2000,Phaser.Easing.Quadratic.Out,true);

    //           }

    //           if (this.hitSpritea9cnt >=18) {  
    //          game.add.tween(this.redfull).to({x:425,y:650},700,Phaser.Easing.Quadratic.Out,true,).onComplete.add(function(){

    // this.redfulldrag=false;
    //   game.add.tween(this.fifthgroup).to({alpha:0},1000,Phaser.Easing.Quadratic.Out,true) 
    //           game.add.tween(this.sixthgroup).to({alpha:1},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){  
    //         this.bluestrick.inputEnabled=true;
    //          this.bluestrick.input.useHandCursor=true;
    //  this.s_arrow1.visible=true;
    //  this.s_arrow1.x=100;
    //  this.s_arrow1.y=590;

    //       },this);       
    //       },this);       

    //              }
    //             this.circle9.drawCircle(Main.tool9X[sprite2.id],Main.tool9Y[sprite2.id],50);
    //            }, 

    hitSprite10: function(sprite1, sprite2) {
        // console.log(this.hitSpritea10cnt);
        sprite2.kill();
        this.hitSpritea10cnt++
            this.bluemask.visible = true;


        if (this.hitSpritea10cnt >= 5) {
            this.s_arrow1.visible = false;
        }
        if (this.hitSpritea10cnt >= 21) {
            game.add.tween(this.bluestrick).to({
                x: 100,
                y: 675
            }, 700, Phaser.Easing.Quadratic.Out, true, ).onComplete.add(function() {
                this.bluestrickdrag = false;
                this.s_arrow1.visible = true;
                this.s_arrow1.x = 275;
                this.s_arrow1.y = 625;
                this.cumcumber.inputEnabled = true;
                this.cumcumber.input.useHandCursor = true;
                this.cumcumber.input.enableDrag();
            }, this);
        }
        this.circle10.drawCircle(Main.tool10X[sprite2.id], Main.tool10Y[sprite2.id], 50);
    },

    hitSprite11: function(sprite1, sprite2) {
        // console.log(this.hitSpritea11cnt);
        sprite2.kill();
        this.hitSpritea11cnt++

            if (this.hitSpritea11cnt >= 5) {
                this.s_arrow1.visible = false;

            }


        if (this.hitSpritea11cnt >= 10) {

            game.add.tween(this.bluemask).to({
                alpha: 0.5
            }, 1500, Phaser.Easing.Quadratic.Out, true, );

        }
        if (this.hitSpritea11cnt >= 19) {
            game.add.tween(this.bluemask).to({
                alpha: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true, );

        }
        if (this.hitSpritea11cnt >= 21) {

            game.add.tween(this.wateranilast123).to({
                x: 325,
                y: 725
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                this.wateranilast123drag = false;

                this.wateranilast123.animations.stop();
                this.wateranilast123.frame = 0;
                game.add.tween(this.sixthgroup).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true)
                game.add.tween(this.seventhgroup).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.vghhjgyjil.inputEnabled = true;
                    this.vghhjgyjil.input.useHandCursor = true;
                    this.s_arrow1.visible = true;
                    this.s_arrow1.x = 125;
                    this.s_arrow1.y = 650;
                }, this);
            }, this);
        }
        this.circle11.drawCircle(Main.tool11X[sprite2.id], Main.tool11Y[sprite2.id], 50);
    },


    update: function() {
        // if(this.h_handdrag) {

        //    this.h_hand.x = game.input.activePointer.x;
        //    this.h_hand.y = game.input.activePointer.y+25;

        //    this.dragCircla1.x = this.game.input.activePointer.x;
        //    this.dragCircla1.y = this.game.input.activePointer.y+25;

        // for(var i=0;i<=Main.tool1X.length;i++)
        //    {
        // game.physics.arcade.collide(this.dragCircla1, this['hitCircle_dd1'+i]);
        //    }
        //    }

        if (this.h_handdrag) {

            this.h_hand.x = game.input.activePointer.x;
            this.h_hand.y = game.input.activePointer.y + 25;

            this.dragCircla15.x = this.game.input.activePointer.x;
            this.dragCircla15.y = this.game.input.activePointer.y + 25;

            for (var i = 0; i <= Main.tool15X.length; i++) {
                game.physics.arcade.collide(this.dragCircla15, this['hitCircle_dd15' + i]);
            }
        }

        if (this.wateranidrag) {

            this.waterani.x = game.input.activePointer.x - 110;
            this.waterani.y = game.input.activePointer.y + 75;

            this.dragCircla2.x = this.game.input.activePointer.x - 35;
            this.dragCircla2.y = this.game.input.activePointer.y - 25;

            for (var i = 0; i <= Main.tool2X.length; i++) {
                game.physics.arcade.collide(this.dragCircla2, this['hitCircle_dd2' + i]);
            }
        }

        if (this.h_handsecdrag) {

            this.h_handsec.x = game.input.activePointer.x;
            this.h_handsec.y = game.input.activePointer.y;

            this.dragCircla3.x = this.game.input.activePointer.x;
            this.dragCircla3.y = this.game.input.activePointer.y;

            for (var i = 0; i <= Main.tool3X.length; i++) {
                game.physics.arcade.collide(this.dragCircla3, this['hitCircle_dd3' + i]);
            }
        }



        if (this.waterani11drag) {

            this.waterani11.x = game.input.activePointer.x - 110;
            this.waterani11.y = game.input.activePointer.y + 75;

            this.dragCircla4.x = this.game.input.activePointer.x - 35;
            this.dragCircla4.y = this.game.input.activePointer.y - 25;

            for (var i = 0; i <= Main.tool4X.length; i++) {
                game.physics.arcade.collide(this.dragCircla4, this['hitCircle_dd4' + i]);
            }
        }

        if (this.pindrag) {

            this.pin.x = game.input.activePointer.x;
            this.pin.y = game.input.activePointer.y + 65;
        }



        if (this.eyetooldrag) {

            this.eyetool.x = game.input.activePointer.x + 60;
            this.eyetool.y = game.input.activePointer.y;
        }



        if (this.hairdyerdrag) {

            this.hairdyer.x = game.input.activePointer.x - 50;
            this.hairdyer.y = game.input.activePointer.y;

            this.dragCircla5.x = this.game.input.activePointer.x - 75;
            this.dragCircla5.y = this.game.input.activePointer.y;

            for (var i = 0; i <= Main.tool5X.length; i++) {
                game.physics.arcade.collide(this.dragCircla5, this['hitCircle_dd5' + i]);
            }
        }


        if (this.handfacedrag) {

            this.handface.x = game.input.activePointer.x;
            this.handface.y = game.input.activePointer.y;

            this.dragCircla6.x = this.game.input.activePointer.x;
            this.dragCircla6.y = this.game.input.activePointer.y;

            for (var i = 0; i <= Main.tool6X.length; i++) {
                game.physics.arcade.collide(this.dragCircla6, this['hitCircle_dd6' + i]);
            }
        }




        if (this.orangefuldrag) {

            this.orangeful.x = game.input.activePointer.x;
            this.orangeful.y = game.input.activePointer.y;

            this.dragCircla7.x = this.game.input.activePointer.x;
            this.dragCircla7.y = this.game.input.activePointer.y;

            for (var i = 0; i <= Main.tool7X.length; i++) {
                game.physics.arcade.collide(this.dragCircla7, this['hitCircle_dd7' + i]);
            }
        }


        if (this.toweldrag) {

            this.towel.x = game.input.activePointer.x;
            this.towel.y = game.input.activePointer.y + 50;

            this.dragCircla8.x = this.game.input.activePointer.x;
            this.dragCircla8.y = this.game.input.activePointer.y;

            for (var i = 0; i <= Main.tool8X.length; i++) {
                game.physics.arcade.collide(this.dragCircla8, this['hitCircle_dd8' + i]);
            }
        }

        if (this.redfulldrag) {

            this.redfull.x = game.input.activePointer.x;
            this.redfull.y = game.input.activePointer.y + 35;

            //    this.dragCircla9.x = this.game.input.activePointer.x;
            //    this.dragCircla9.y = this.game.input.activePointer.y;

            // for(var i=0;i<=Main.tool9X.length;i++)
            //    {
            // game.physics.arcade.collide(this.dragCircla9, this['hitCircle_dd9'+i]);
        }
        // }

        if (this.bluestrickdrag) {

            this.bluestrick.x = game.input.activePointer.x;
            this.bluestrick.y = game.input.activePointer.y + 25;

            this.dragCircla10.x = this.game.input.activePointer.x;
            this.dragCircla10.y = this.game.input.activePointer.y + 25;

            for (var i = 0; i <= Main.tool10X.length; i++) {
                game.physics.arcade.collide(this.dragCircla10, this['hitCircle_dd10' + i]);
            }
        }




        if (this.wateranilast123drag) {

            this.wateranilast123.x = game.input.activePointer.x - 125;
            this.wateranilast123.y = game.input.activePointer.y + 75;

            this.dragCircla11.x = this.game.input.activePointer.x - 35;
            this.dragCircla11.y = this.game.input.activePointer.y - 25;

            for (var i = 0; i <= Main.tool11X.length; i++) {
                game.physics.arcade.collide(this.dragCircla11, this['hitCircle_dd11' + i]);
            }
        }

    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        YYGGames.navigate("game", "logo");
    },
    moreLink: function() {
        YYGGames.navigate("game", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            MyShowAD('selection');
        });

    },
}

///ddddddddddddddddddddddddddd


Main.dressup = function() {}

Main.dressup.prototype = {
    create: function() {

        // Main.rp_arr[0]=4;   
        // Main.rp_arr[7]=3;   



        this.d1_arr = [0, 0, 0, 0, 0];

        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'd_bg');
        this.levelGroup.add(this.introbg);

        this.dressupgroup = game.add.group();
        this.dressupgroup.scale.setTo(0.95);

        this.dressupgroup.x = -30;
        this.dressupgroup.y = 25;
        //          this.dressupgroup.scale.setTo(1.5); 

        // this.dressupgroup.x=-125;
        // this.dressupgroup.y=25;

        this.dbhair0001 = game.add.sprite(250, 243.5, 'dbhair000' + Main.rp_arr[0]);
        this.dbhair0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.dbhair0001);

        this.dfull_bdress = game.add.sprite(259, 460, 'dfull_bdress');
        this.dfull_bdress.anchor.setTo(0.5);
        this.dfull_bdress.visible = false;
        this.dressupgroup.add(this.dfull_bdress);

        this.d_body = game.add.sprite(255, 487, 'd_body');
        this.d_body.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_body);

        // this.d_face = game.add.sprite(251.5,178.5,'d_face');
        // this.d_face.anchor.setTo(0.5);
        // this.dressupgroup.add(this.d_face);

        this.dm_face = game.add.sprite(251.5, 178.5, 'dm_face');
        this.dm_face.anchor.setTo(0.5);
        this.dressupgroup.add(this.dm_face);

        this.eyeshdw0001 = game.add.sprite(252, 172, 'eyeshdw000' + Main.rp_arr[3]);
        this.eyeshdw0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.eyeshdw0001);

        this.blush0001 = game.add.sprite(253, 204, 'blush000' + Main.rp_arr[2]);
        this.blush0001.anchor.setTo(0.5);
        this.blush0001.alpha = 0.85;
        this.dressupgroup.add(this.blush0001);

        this.lense0001 = game.add.sprite(253, 179, 'lense000' + Main.rp_arr[1]);
        this.lense0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.lense0001);

        // this.eyelash0001 = game.add.sprite(251,177,'eyelash000'+Main.rp_arr[4]);
        // this.eyelash0001.anchor.setTo(0.5);
        // this.dressupgroup.add(this.eyelash0001);  


        this.eyelash0001 = game.add.sprite(251, 177, 'eyelash0004');
        this.eyelash0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.eyelash0001);

        this.lips0001 = game.add.sprite(252, 210, 'lips000' + Main.rp_arr[4]);
        this.lips0001.anchor.setTo(0.5);
        this.lips0001.scale.setTo(0.9);
        this.dressupgroup.add(this.lips0001);



        this.d_shoe0001 = game.add.sprite(238, 707.5, 'd_shoe000' + Main.d_arr[3]);
        this.d_shoe0001.anchor.setTo(0.5);
        this.d_shoe0001.alpha = Main.d_alpha[3];
        this.dressupgroup.add(this.d_shoe0001);



        this.d_bottem0001 = game.add.sprite(262.5, 546.5, 'd_bottem000' + Main.d_arr[1]);
        this.d_bottem0001.anchor.setTo(0.5);
        this.d_bottem0001.alpha = Main.d_alpha[1];
        this.dressupgroup.add(this.d_bottem0001);
        this.d_bottem0001.visible = false;



        this.d_full0001 = game.add.sprite(259, 507.5, 'd_full000' + Main.d_arr[2]);
        this.d_full0001.anchor.setTo(0.5);
        this.d_full0001.alpha = Main.d_alpha[2];
        this.dressupgroup.add(this.d_full0001);



        this.d_tophand1 = game.add.sprite(256, 486, 'd_tophand1');
        this.d_tophand1.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_tophand1);

        this.d_top0001 = game.add.sprite(265.5, 319.5, 'd_top000' + Main.d_arr[0]);
        this.d_top0001.anchor.setTo(0.5);
        this.d_top0001.alpha = Main.d_alpha[0];
        this.dressupgroup.add(this.d_top0001);
        this.d_top0001.visible = false;

        this.d_necklace0001 = game.add.sprite(251, 257, 'd_necklace000' + Main.d_arr[4]);
        this.d_necklace0001.anchor.setTo(0.5);
        this.d_necklace0001.alpha = Main.d_alpha[4];
        this.dressupgroup.add(this.d_necklace0001);


        this.dfhair0001 = game.add.sprite(252.5, 245, 'dfhair000' + Main.rp_arr[0]);
        this.dfhair0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.dfhair0001);


        this.d_earrings1 = game.add.sprite(219, 207.5, 'd_earrings000' + Main.rp_arr[6]);
        this.d_earrings1.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_earrings1);



        this.d_earrings0001 = game.add.sprite(283, 207.5, 'd_earrings000' + Main.rp_arr[6]);
        this.d_earrings0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_earrings0001);


        this.d_tophand = game.add.sprite(262, 486, 'd_tophand');
        this.d_tophand.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_tophand);



        // this.d_flower0001 = game.add.sprite(148,451,'d_flower000'+Main.d_arr[5]);
        // this.d_flower0001.anchor.setTo(0.5);
        // this.d_flower0001.scale.setTo(1.5);
        // this.d_flower0001.alpha=Main.d_alpha[5];
        // this.dressupgroup.add(this.d_flower0001);



        this.zoe1cap1 = game.add.sprite(252.5, 140, 'zoe1cap' + Main.rp_arr[7]);
        this.zoe1cap1.anchor.setTo(0.5);
        // this.zoe1cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe1cap1);





        this.zoe2cap1 = game.add.sprite(252.5, 140, 'zoe2cap' + Main.rp_arr[7]);
        this.zoe2cap1.anchor.setTo(0.5);
        this.zoe2cap1.scale.setTo(0.85);
        // this.zoe2cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe2cap1);



        this.zoe3cap1 = game.add.sprite(252.5, 140, 'zoe3cap' + Main.rp_arr[7]);
        this.zoe3cap1.anchor.setTo(0.5);
        this.zoe3cap1.scale.setTo(0.9);
        // this.zoe3cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe3cap1);




        this.zoe4cap1 = game.add.sprite(252.5, 140, 'zoe4cap' + Main.rp_arr[7]);
        this.zoe4cap1.anchor.setTo(0.5);
        // this.zoe4cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe4cap1);

        this.zoe5cap1 = game.add.sprite(252.5, 140, 'zoe5cap' + Main.rp_arr[7]);
        this.zoe5cap1.anchor.setTo(0.5);
        // this.zoe5cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe5cap1);


        if (Main.rp_arr[0] == 1) {
            this.zoe1cap1.visible = true;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = false;
        }

        if (Main.rp_arr[0] == 2) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = true;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = false;
        }

        if (Main.rp_arr[0] == 3) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = true;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = false;
        }

        if (Main.rp_arr[0] == 4) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = true;
            this.zoe5cap1.visible = false;
        }
        if (Main.rp_arr[0] == 5) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = true;
        }



        ////////////////////////

        this.panelgroup = game.add.group();

        this.d_panel = game.add.sprite(442, 430, 'd_panel');
        this.d_panel.anchor.setTo(0.5);
        this.panelgroup.add(this.d_panel);



        this.icon1 = game.add.sprite(460, 210, 'icon1');
        this.icon1.anchor.setTo(0.5);
        this.icon1.scale.setTo(0.8);
        this.icon1.inputEnabled = true;
        this.icon1.input.useHandCursor = true;
        this.icon1.events.onInputOver.add(this.btnOver, this);
        this.icon1.events.onInputOut.add(this.btnOut, this);
        this.icon1.events.onInputDown.add(function() {

            this.topgroup.visible = true;
            this.panelgroup.visible = false;

        }, this);
        this.panelgroup.add(this.icon1);


        this.icon2 = game.add.sprite(460, 317, 'icon2');
        this.icon2.anchor.setTo(0.5);
        this.icon2.scale.setTo(0.8);
        this.icon2.inputEnabled = true;
        this.icon2.input.useHandCursor = true;
        this.icon2.events.onInputOver.add(this.btnOver, this);
        this.icon2.events.onInputOut.add(this.btnOut, this);
        this.icon2.events.onInputDown.add(function() {


            this.bottomgroup.visible = true;
            this.panelgroup.visible = false;

        }, this);
        this.panelgroup.add(this.icon2);




        this.icon3 = game.add.sprite(460, 410, 'icon3');
        this.icon3.anchor.setTo(0.5);
        this.icon3.scale.setTo(0.8);
        this.icon3.inputEnabled = true;
        this.icon3.input.useHandCursor = true;
        this.icon3.events.onInputOver.add(this.btnOver, this);
        this.icon3.events.onInputOut.add(this.btnOut, this);
        this.icon3.events.onInputDown.add(function() {

            this.fullgroup.visible = true;
            this.panelgroup.visible = false;


        }, this);
        this.panelgroup.add(this.icon3);



        this.icon4 = game.add.sprite(460, 525, 'icon4');
        this.icon4.anchor.setTo(0.5);
        this.icon4.scale.setTo(0.8);
        this.icon4.inputEnabled = true;
        this.icon4.input.useHandCursor = true;
        this.icon4.events.onInputOver.add(this.btnOver, this);
        this.icon4.events.onInputOut.add(this.btnOut, this);
        this.icon4.events.onInputDown.add(function() {

            this.shoegroup.visible = true;
            this.panelgroup.visible = false;


        }, this);
        this.panelgroup.add(this.icon4);


        this.icon5 = game.add.sprite(460, 625, 'icon5');
        this.icon5.anchor.setTo(0.5);
        this.icon5.scale.setTo(0.8);
        this.icon5.inputEnabled = true;
        this.icon5.input.useHandCursor = true;
        this.icon5.events.onInputOver.add(this.btnOver, this);
        this.icon5.events.onInputOut.add(this.btnOut, this);
        this.icon5.events.onInputDown.add(function() {

            this.necklacegroup.visible = true;
            this.panelgroup.visible = false;


        }, this);
        this.panelgroup.add(this.icon5);


        // this.icon6 = game.add.sprite(460,680,'icon6');
        // this.icon6.anchor.setTo(0.5);
        // this.icon6.scale.setTo(0.8);
        // this.icon6.inputEnabled=true;
        // this.icon6.input.useHandCursor=true;
        // this.icon6.events.onInputOver.add(this.btnOver,this);
        // this.icon6.events.onInputOut.add(this.btnOut,this);
        // this.icon6.events.onInputDown.add(function(){

        //  this.flowergroup.visible=true;
        //  this.panelgroup.visible=false;

        // },this);
        // this.panelgroup.add(this.icon6);

        ///////////////////////////////////////////////////////////////


        this.topgroup = game.add.group();
        this.topgroup.visible = false;

        this.d_panel1 = game.add.sprite(455, 400, 'd_panel');
        this.d_panel1.anchor.setTo(0.5);
        this.topgroup.add(this.d_panel1);




        this.d_top1 = game.add.sprite(460, 180, 'd_top0001');
        this.d_top1.anchor.setTo(0.5);
        this.d_top1.scale.setTo(0.6);
        this.d_top1.inputEnabled = true;
        this.d_top1.input.useHandCursor = true;
        this.d_top1.events.onInputOver.add(this.btnOver, this);
        this.d_top1.events.onInputOut.add(this.btnOut, this);
        this.d_top1.events.onInputDown.add(function() {

            Main.d_alpha[0] = 1;
            Main.d_arr[0] = 1;
            this.d_top0001.alpha = 1;
            this.d_top0001.loadTexture('d_top0001');

            // if(Main.d_arr[0]==1){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }


            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }



            this.d1_arr[0] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.topgroup.add(this.d_top1);


        this.d_top2 = game.add.sprite(460, 300, 'd_top0002');
        this.d_top2.anchor.setTo(0.5);
        this.d_top2.scale.setTo(0.6);
        this.d_top2.inputEnabled = true;
        this.d_top2.input.useHandCursor = true;
        this.d_top2.events.onInputOver.add(this.btnOver, this);
        this.d_top2.events.onInputOut.add(this.btnOut, this);
        this.d_top2.events.onInputDown.add(function() {

            Main.d_alpha[0] = 1;
            Main.d_arr[0] = 2;
            this.d_top0001.alpha = 1;
            this.d_top0001.loadTexture('d_top0002');

            // if(Main.d_arr[0]==2){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }



            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }


            this.d1_arr[0] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.topgroup.add(this.d_top2);

        this.d_top3 = game.add.sprite(465, 400, 'd_top0003');
        this.d_top3.anchor.setTo(0.5);
        this.d_top3.scale.setTo(0.5);
        this.d_top3.inputEnabled = true;
        this.d_top3.input.useHandCursor = true;
        this.d_top3.events.onInputOver.add(this.btnOver, this);
        this.d_top3.events.onInputOut.add(this.btnOut, this);
        this.d_top3.events.onInputDown.add(function() {

            Main.d_alpha[0] = 1;
            Main.d_arr[0] = 3;
            this.d_top0001.alpha = 1;
            this.d_top0001.loadTexture('d_top0003');

            // if(Main.d_arr[0]==3){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }

            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }



            this.d1_arr[0] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.topgroup.add(this.d_top3);

        this.d_top4 = game.add.sprite(460, 500, 'd_top0004');
        this.d_top4.anchor.setTo(0.5);
        this.d_top4.scale.setTo(0.55);
        this.d_top4.inputEnabled = true;
        this.d_top4.input.useHandCursor = true;
        this.d_top4.events.onInputOver.add(this.btnOver, this);
        this.d_top4.events.onInputOut.add(this.btnOut, this);
        this.d_top4.events.onInputDown.add(function() {

            Main.d_alpha[0] = 1;
            Main.d_arr[0] = 4;
            this.d_top0001.alpha = 1;
            this.d_top0001.loadTexture('d_top0004');

            // if(Main.d_arr[0]==4){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }

            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }



            this.d1_arr[0] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.topgroup.add(this.d_top4);


        this.d_top5 = game.add.sprite(460, 620, 'd_top0005');
        this.d_top5.anchor.setTo(0.5);
        this.d_top5.scale.setTo(0.55);
        this.d_top5.inputEnabled = true;
        this.d_top5.input.useHandCursor = true;
        this.d_top5.events.onInputOver.add(this.btnOver, this);
        this.d_top5.events.onInputOut.add(this.btnOut, this);
        this.d_top5.events.onInputDown.add(function() {

            Main.d_alpha[0] = 1;
            Main.d_arr[0] = 5;
            this.d_top0001.alpha = 1;
            this.d_top0001.loadTexture('d_top0005');

            // if(Main.d_arr[0]==5){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }


            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }


            this.d1_arr[0] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.topgroup.add(this.d_top5);

        this.close = game.add.sprite(400, 100, 'close');
        this.close.anchor.setTo(0.5);
        this.close.scale.setTo(0.55);
        this.close.inputEnabled = true;
        this.close.input.useHandCursor = true;
        this.close.events.onInputOver.add(this.btnOver, this);
        this.close.events.onInputOut.add(this.btnOut, this);
        this.close.events.onInputDown.add(function() {
            this.topgroup.visible = false;
            this.panelgroup.visible = true;

        }, this);
        this.topgroup.add(this.close);

        ///////////////////////////////////////

        this.bottomgroup = game.add.group();
        this.bottomgroup.visible = false;

        this.d_panel2 = game.add.sprite(455, 400, 'd_panel');
        this.d_panel2.anchor.setTo(0.5);
        this.bottomgroup.add(this.d_panel2);

        this.d_bottem1 = game.add.sprite(460, 180, 'd_bottem0001');
        this.d_bottem1.anchor.setTo(0.5);
        this.d_bottem1.scale.setTo(0.25);
        this.d_bottem1.inputEnabled = true;
        this.d_bottem1.input.useHandCursor = true;
        this.d_bottem1.events.onInputOver.add(this.btnOver, this);
        this.d_bottem1.events.onInputOut.add(this.btnOut, this);
        this.d_bottem1.events.onInputDown.add(function() {

            Main.d_alpha[1] = 1;
            Main.d_arr[1] = 1;
            this.d_bottem0001.alpha = 1;
            this.d_bottem0001.loadTexture('d_bottem0001');

            // if(Main.d_arr[1]==1){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }

            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }



            this.d1_arr[0] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.bottomgroup.add(this.d_bottem1);


        this.d_bottem2 = game.add.sprite(460, 300, 'd_bottem0002');
        this.d_bottem2.anchor.setTo(0.5);
        this.d_bottem2.scale.setTo(0.3);
        this.d_bottem2.inputEnabled = true;
        this.d_bottem2.input.useHandCursor = true;
        this.d_bottem2.events.onInputOver.add(this.btnOver, this);
        this.d_bottem2.events.onInputOut.add(this.btnOut, this);
        this.d_bottem2.events.onInputDown.add(function() {

            Main.d_alpha[1] = 1;
            Main.d_arr[1] = 2;
            this.d_bottem0001.alpha = 1;
            this.d_bottem0001.loadTexture('d_bottem0002');

            // if(Main.d_arr[1]==2){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }

            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }


            this.d1_arr[1] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.bottomgroup.add(this.d_bottem2);

        this.d_bottem3 = game.add.sprite(465, 450, 'd_bottem0003');
        this.d_bottem3.anchor.setTo(0.5);
        this.d_bottem3.scale.setTo(0.3);
        this.d_bottem3.inputEnabled = true;
        this.d_bottem3.input.useHandCursor = true;
        this.d_bottem3.events.onInputOver.add(this.btnOver, this);
        this.d_bottem3.events.onInputOut.add(this.btnOut, this);
        this.d_bottem3.events.onInputDown.add(function() {

            Main.d_alpha[1] = 1;
            Main.d_arr[1] = 3;
            this.d_bottem0001.alpha = 1;
            this.d_bottem0001.loadTexture('d_bottem0003');

            // if(Main.d_arr[1]==3){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }

            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }


            this.d1_arr[1] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.bottomgroup.add(this.d_bottem3);

        this.d_bottem4 = game.add.sprite(460, 570, 'd_bottem0004');
        this.d_bottem4.anchor.setTo(0.5);
        this.d_bottem4.scale.setTo(0.4);
        this.d_bottem4.inputEnabled = true;
        this.d_bottem4.input.useHandCursor = true;
        this.d_bottem4.events.onInputOver.add(this.btnOver, this);
        this.d_bottem4.events.onInputOut.add(this.btnOut, this);
        this.d_bottem4.events.onInputDown.add(function() {

            Main.d_alpha[1] = 1;
            Main.d_arr[1] = 4;
            this.d_bottem0001.alpha = 1;
            this.d_bottem0001.loadTexture('d_bottem0004');

            // if(Main.d_arr[1]==4){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }


            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }

            this.d1_arr[1] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.bottomgroup.add(this.d_bottem4);


        this.d_bottem5 = game.add.sprite(460, 670, 'd_bottem0005');
        this.d_bottem5.anchor.setTo(0.5);
        this.d_bottem5.scale.setTo(0.4);
        this.d_bottem5.inputEnabled = true;
        this.d_bottem5.input.useHandCursor = true;
        this.d_bottem5.events.onInputOver.add(this.btnOver, this);
        this.d_bottem5.events.onInputOut.add(this.btnOut, this);
        this.d_bottem5.events.onInputDown.add(function() {

            Main.d_alpha[1] = 1;
            Main.d_arr[1] = 5;
            this.d_bottem0001.alpha = 1;
            this.d_bottem0001.loadTexture('d_bottem0005');

            // if(Main.d_arr[1]==5){
            // this.d_full0001.visible=false;
            // this.d_top0001.visible=true;
            // this.d_bottem0001.visible=true;
            //  }

            Main.fulldress_arr[0] = 0;

            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }


            this.d1_arr[1] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.bottomgroup.add(this.d_bottem5);


        this.close1 = game.add.sprite(400, 100, 'close');
        this.close1.anchor.setTo(0.5);
        this.close1.scale.setTo(0.55);
        this.close1.inputEnabled = true;
        this.close1.input.useHandCursor = true;
        this.close1.events.onInputOver.add(this.btnOver, this);
        this.close1.events.onInputOut.add(this.btnOut, this);
        this.close1.events.onInputDown.add(function() {
            this.bottomgroup.visible = false;
            this.panelgroup.visible = true;

        }, this);
        this.bottomgroup.add(this.close1);

        //////////////////////////////////////////////

        this.fullgroup = game.add.group();
        this.fullgroup.visible = false;

        this.d_panel3 = game.add.sprite(455, 400, 'd_panel');
        this.d_panel3.anchor.setTo(0.5);
        this.fullgroup.add(this.d_panel3);




        this.d_full1 = game.add.sprite(460, 180, 'd_full0001');
        this.d_full1.anchor.setTo(0.5);
        this.d_full1.scale.setTo(0.2);
        this.d_full1.inputEnabled = true;
        this.d_full1.input.useHandCursor = true;
        this.d_full1.events.onInputOver.add(this.btnOver, this);
        this.d_full1.events.onInputOut.add(this.btnOut, this);
        this.d_full1.events.onInputDown.add(function() {
            this.dfull_bdress.visible = false;
            // this.d_full1.input.useHandCursor=true;

            Main.d_alpha[2] = 1;
            Main.d_arr[2] = 1;
            this.d_full0001.alpha = 1;
            this.d_full0001.loadTexture('d_full0001');

            // if(Main.d_arr[2]==1){
            // this.d_full0001.visible=true;
            // this.d_top0001.visible=false;
            // this.d_bottem0001.visible=false;
            //  }
            Main.fulldress_arr[0] = 1;
            console.log(Main.fulldress_arr[0]);
            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }

            this.d1_arr[2] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.fullgroup.add(this.d_full1);


        this.d_full2 = game.add.sprite(460, 300, 'd_full0002');
        this.d_full2.anchor.setTo(0.5);
        this.d_full2.scale.setTo(0.2);
        this.d_full2.inputEnabled = true;
        this.d_full2.input.useHandCursor = true;
        this.d_full2.events.onInputOver.add(this.btnOver, this);
        this.d_full2.events.onInputOut.add(this.btnOut, this);
        this.d_full2.events.onInputDown.add(function() {
            this.dfull_bdress.visible = false;

            Main.d_alpha[2] = 1;
            Main.d_arr[2] = 2;
            this.d_full0001.alpha = 1;
            this.d_full0001.loadTexture('d_full0002');

            //  if(Main.d_arr[2]==2){
            // this.d_full0001.visible=true;
            // this.d_top0001.visible=false;
            // this.d_bottem0001.visible=false;
            //  }

            Main.fulldress_arr[0] = 1;
            console.log(Main.fulldress_arr[0]);
            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }
            this.d1_arr[2] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.fullgroup.add(this.d_full2);

        this.d_full3 = game.add.sprite(465, 430, 'd_full0003');
        this.d_full3.anchor.setTo(0.5);
        this.d_full3.scale.setTo(0.2);
        this.d_full3.inputEnabled = true;
        this.d_full3.input.useHandCursor = true;
        this.d_full3.events.onInputOver.add(this.btnOver, this);
        this.d_full3.events.onInputOut.add(this.btnOut, this);
        this.d_full3.events.onInputDown.add(function() {
            this.dfull_bdress.visible = false;

            Main.d_alpha[2] = 1;
            Main.d_arr[2] = 3;
            this.d_full0001.alpha = 1;
            this.d_full0001.loadTexture('d_full0003');

            // if(Main.d_arr[2]==3){
            //   this.d_full0001.visible=true;
            //   this.d_top0001.visible=false;
            //   this.d_bottem0001.visible=false;
            //    }
            Main.fulldress_arr[0] = 1;
            console.log(Main.fulldress_arr[0]);
            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }

            this.d1_arr[2] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.fullgroup.add(this.d_full3);

        this.d_full4 = game.add.sprite(460, 540, 'd_full0004');
        this.d_full4.anchor.setTo(0.5);
        this.d_full4.scale.setTo(0.2);
        this.d_full4.inputEnabled = true;
        this.d_full4.input.useHandCursor = true;
        this.d_full4.events.onInputOver.add(this.btnOver, this);
        this.d_full4.events.onInputOut.add(this.btnOut, this);
        this.d_full4.events.onInputDown.add(function() {
            this.dfull_bdress.visible = false;

            Main.d_alpha[2] = 1;
            Main.d_arr[2] = 4;
            this.d_full0001.alpha = 1;
            this.d_full0001.loadTexture('d_full0004');

            // if(Main.d_arr[2]==4){
            // this.d_full0001.visible=true;
            // this.d_top0001.visible=false;
            // this.d_bottem0001.visible=false;
            //  }
            Main.fulldress_arr[0] = 1;
            console.log(Main.fulldress_arr[0]);
            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }

            this.d1_arr[2] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.fullgroup.add(this.d_full4);


        this.d_full5 = game.add.sprite(460, 660, 'd_full0005');
        this.d_full5.anchor.setTo(0.5);
        this.d_full5.scale.setTo(0.2);
        this.d_full5.inputEnabled = true;
        this.d_full5.input.useHandCursor = true;
        this.d_full5.events.onInputOver.add(this.btnOver, this);
        this.d_full5.events.onInputOut.add(this.btnOut, this);
        this.d_full5.events.onInputDown.add(function() {
            this.dfull_bdress.visible = true;


            Main.d_alpha[2] = 1;
            Main.d_arr[2] = 5;
            this.d_full0001.alpha = 1;
            this.d_full0001.loadTexture('d_full0005');

            // if(Main.d_arr[2]==5){
            //   this.d_full0001.visible=true;
            //   this.d_top0001.visible=false;
            //   this.d_bottem0001.visible=false;
            //    }

            Main.fulldress_arr[0] = 1;
            console.log(Main.fulldress_arr[0]);
            if (Main.fulldress_arr[0] == 1) {
                this.d_full0001.visible = true;
                this.d_bottem0001.visible = false;
                this.d_top0001.visible = false;

            } else {

                this.d_full0001.visible = false;
                this.d_bottem0001.visible = true;
                this.d_top0001.visible = true;
            }
            this.d1_arr[2] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.fullgroup.add(this.d_full5);


        this.close2 = game.add.sprite(400, 100, 'close');
        this.close2.anchor.setTo(0.5);
        this.close2.scale.setTo(0.55);
        this.close2.inputEnabled = true;
        this.close2.input.useHandCursor = true;
        this.close2.events.onInputOver.add(this.btnOver, this);
        this.close2.events.onInputOut.add(this.btnOut, this);
        this.close2.events.onInputDown.add(function() {
            this.fullgroup.visible = false;
            this.panelgroup.visible = true;

        }, this);
        this.fullgroup.add(this.close2);



        //////////////////////////////////////////////////////

        this.shoegroup = game.add.group();
        this.shoegroup.visible = false;

        this.d_panel4 = game.add.sprite(455, 400, 'd_panel');
        this.d_panel4.anchor.setTo(0.5);
        this.shoegroup.add(this.d_panel4);

        this.d_shoe1 = game.add.sprite(460, 180, 'd_shoe0001');
        this.d_shoe1.anchor.setTo(0.5);
        this.d_shoe1.scale.setTo(0.5);
        this.d_shoe1.inputEnabled = true;
        this.d_shoe1.input.useHandCursor = true;
        this.d_shoe1.events.onInputOver.add(this.btnOver, this);
        this.d_shoe1.events.onInputOut.add(this.btnOut, this);
        this.d_shoe1.events.onInputDown.add(function() {

            Main.d_alpha[3] = 1;
            Main.d_arr[3] = 1;
            this.d_shoe0001.alpha = 1;
            this.d_shoe0001.loadTexture('d_shoe0001');




            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.shoegroup.add(this.d_shoe1);


        this.d_shoe2 = game.add.sprite(460, 300, 'd_shoe0002');
        this.d_shoe2.anchor.setTo(0.5);
        this.d_shoe2.scale.setTo(0.5);
        this.d_shoe2.inputEnabled = true;
        this.d_shoe2.input.useHandCursor = true;
        this.d_shoe2.events.onInputOver.add(this.btnOver, this);
        this.d_shoe2.events.onInputOut.add(this.btnOut, this);
        this.d_shoe2.events.onInputDown.add(function() {

            Main.d_alpha[3] = 2;
            Main.d_arr[3] = 2;
            this.d_shoe0001.alpha = 1;
            this.d_shoe0001.loadTexture('d_shoe0002');



            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.shoegroup.add(this.d_shoe2);

        this.d_shoe3 = game.add.sprite(465, 430, 'd_shoe0003');
        this.d_shoe3.anchor.setTo(0.5);
        this.d_shoe3.scale.setTo(0.5);
        this.d_shoe3.inputEnabled = true;
        this.d_shoe3.input.useHandCursor = true;
        this.d_shoe3.events.onInputOver.add(this.btnOver, this);
        this.d_shoe3.events.onInputOut.add(this.btnOut, this);
        this.d_shoe3.events.onInputDown.add(function() {

            Main.d_alpha[3] = 3;
            Main.d_arr[3] = 3;
            this.d_shoe0001.alpha = 1;
            this.d_shoe0001.loadTexture('d_shoe0003');




            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.shoegroup.add(this.d_shoe3);

        this.d_shoe4 = game.add.sprite(460, 540, 'd_shoe0004');
        this.d_shoe4.anchor.setTo(0.5);
        this.d_shoe4.scale.setTo(0.5);
        this.d_shoe4.inputEnabled = true;
        this.d_shoe4.input.useHandCursor = true;
        this.d_shoe4.events.onInputOver.add(this.btnOver, this);
        this.d_shoe4.events.onInputOut.add(this.btnOut, this);
        this.d_shoe4.events.onInputDown.add(function() {

            Main.d_alpha[3] = 4;
            Main.d_arr[3] = 4;
            this.d_shoe0001.alpha = 1;
            this.d_shoe0001.loadTexture('d_shoe0004');



            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.shoegroup.add(this.d_shoe4);


        this.d_shoe5 = game.add.sprite(460, 660, 'd_shoe0005');
        this.d_shoe5.anchor.setTo(0.5);
        this.d_shoe5.scale.setTo(0.5);
        this.d_shoe5.inputEnabled = true;
        this.d_shoe5.input.useHandCursor = true;
        this.d_shoe5.events.onInputOver.add(this.btnOver, this);
        this.d_shoe5.events.onInputOut.add(this.btnOut, this);
        this.d_shoe5.events.onInputDown.add(function() {

            Main.d_alpha[3] = 5;
            Main.d_arr[3] = 5;
            this.d_shoe0001.alpha = 1;
            this.d_shoe0001.loadTexture('d_shoe0005');




            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.shoegroup.add(this.d_shoe5);

        this.close3 = game.add.sprite(400, 100, 'close');
        this.close3.anchor.setTo(0.5);
        this.close3.scale.setTo(0.55);
        this.close3.inputEnabled = true;
        this.close3.input.useHandCursor = true;
        this.close3.events.onInputOver.add(this.btnOver, this);
        this.close3.events.onInputOut.add(this.btnOut, this);
        this.close3.events.onInputDown.add(function() {
            this.shoegroup.visible = false;
            this.panelgroup.visible = true;

        }, this);
        this.shoegroup.add(this.close3);

        //////////////////////////////////////////////

        this.necklacegroup = game.add.group();
        this.necklacegroup.visible = false;

        this.d_panel5 = game.add.sprite(455, 400, 'd_panel');
        this.d_panel5.anchor.setTo(0.5);
        this.necklacegroup.add(this.d_panel5);

        this.d_necklace1 = game.add.sprite(460, 180, 'd_necklace0001');
        this.d_necklace1.anchor.setTo(0.5);
        this.d_necklace1.scale.setTo(0.95);
        this.d_necklace1.inputEnabled = true;
        this.d_necklace1.input.useHandCursor = true;
        this.d_necklace1.events.onInputOver.add(this.btnOver, this);
        this.d_necklace1.events.onInputOut.add(this.btnOut, this);
        this.d_necklace1.events.onInputDown.add(function() {

            Main.d_alpha[4] = 1;
            Main.d_arr[4] = 1;
            this.d_necklace0001.alpha = 1;
            this.d_necklace0001.loadTexture('d_necklace0001');




            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.necklacegroup.add(this.d_necklace1);


        this.d_necklace2 = game.add.sprite(460, 300, 'd_necklace0002');
        this.d_necklace2.anchor.setTo(0.5);
        this.d_necklace2.scale.setTo(0.95);
        this.d_necklace2.inputEnabled = true;
        this.d_necklace2.input.useHandCursor = true;
        this.d_necklace2.events.onInputOver.add(this.btnOver, this);
        this.d_necklace2.events.onInputOut.add(this.btnOut, this);
        this.d_necklace2.events.onInputDown.add(function() {

            Main.d_alpha[4] = 1;
            Main.d_arr[4] = 2;
            this.d_necklace0001.alpha = 1;
            this.d_necklace0001.loadTexture('d_necklace0002');



            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.necklacegroup.add(this.d_necklace2);

        this.d_necklace3 = game.add.sprite(465, 400, 'd_necklace0003');
        this.d_necklace3.anchor.setTo(0.5);
        this.d_necklace3.scale.setTo(0.95);
        this.d_necklace3.inputEnabled = true;
        this.d_necklace3.input.useHandCursor = true;
        this.d_necklace3.events.onInputOver.add(this.btnOver, this);
        this.d_necklace3.events.onInputOut.add(this.btnOut, this);
        this.d_necklace3.events.onInputDown.add(function() {

            Main.d_alpha[4] = 1;
            Main.d_arr[4] = 3;
            this.d_necklace0001.alpha = 1;
            this.d_necklace0001.loadTexture('d_necklace0003');




            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.necklacegroup.add(this.d_necklace3);

        this.d_necklace4 = game.add.sprite(460, 540, 'd_necklace0004');
        this.d_necklace4.anchor.setTo(0.5);
        this.d_necklace4.scale.setTo(0.95);
        this.d_necklace4.inputEnabled = true;
        this.d_necklace4.input.useHandCursor = true;
        this.d_necklace4.events.onInputOver.add(this.btnOver, this);
        this.d_necklace4.events.onInputOut.add(this.btnOut, this);
        this.d_necklace4.events.onInputDown.add(function() {

            Main.d_alpha[4] = 1;
            Main.d_arr[4] = 4;
            this.d_necklace0001.alpha = 1;
            this.d_necklace0001.loadTexture('d_necklace0004');



            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.necklacegroup.add(this.d_necklace4);


        this.d_necklace5 = game.add.sprite(460, 660, 'd_necklace0005');
        this.d_necklace5.anchor.setTo(0.5);
        this.d_necklace5.scale.setTo(0.95);
        this.d_necklace5.inputEnabled = true;
        this.d_necklace5.input.useHandCursor = true;
        this.d_necklace5.events.onInputOver.add(this.btnOver, this);
        this.d_necklace5.events.onInputOut.add(this.btnOut, this);
        this.d_necklace5.events.onInputDown.add(function() {

            Main.d_alpha[4] = 1;
            Main.d_arr[4] = 5;
            this.d_necklace0001.alpha = 1;
            this.d_necklace0001.loadTexture('d_necklace0005');




            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.necklacegroup.add(this.d_necklace5);

        this.close4 = game.add.sprite(400, 100, 'close');
        this.close4.anchor.setTo(0.5);
        this.close4.scale.setTo(0.55);
        this.close4.inputEnabled = true;
        this.close4.input.useHandCursor = true;
        this.close4.events.onInputOver.add(this.btnOver, this);
        this.close4.events.onInputOut.add(this.btnOut, this);
        this.close4.events.onInputDown.add(function() {
            this.necklacegroup.visible = false;
            this.panelgroup.visible = true;

        }, this);
        this.necklacegroup.add(this.close4);

        ///////////////////////////////////////////////////////////////////

        this.flowergroup = game.add.group();
        this.flowergroup.visible = false;

        this.d_panel5 = game.add.sprite(455, 400, 'd_panel');
        this.d_panel5.anchor.setTo(0.5);
        this.flowergroup.add(this.d_panel5);

        this.d_flower1 = game.add.sprite(460, 180, 'd_flower0001');
        this.d_flower1.anchor.setTo(0.5);
        this.d_flower1.scale.setTo(1.1);
        this.d_flower1.inputEnabled = true;
        this.d_flower1.input.useHandCursor = true;
        this.d_flower1.events.onInputOver.add(this.btnOver, this);
        this.d_flower1.events.onInputOut.add(this.btnOut, this);
        this.d_flower1.events.onInputDown.add(function() {

            Main.d_alpha[5] = 1;
            Main.d_arr[5] = 1;
            this.d_flower0001.alpha = 1;
            this.d_flower0001.loadTexture('d_flower0001');




            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.flowergroup.add(this.d_flower1);


        this.d_flower2 = game.add.sprite(460, 300, 'd_flower0002');
        this.d_flower2.anchor.setTo(0.5);
        this.d_flower2.scale.setTo(1.1);
        this.d_flower2.inputEnabled = true;
        this.d_flower2.input.useHandCursor = true;
        this.d_flower2.events.onInputOver.add(this.btnOver, this);
        this.d_flower2.events.onInputOut.add(this.btnOut, this);
        this.d_flower2.events.onInputDown.add(function() {

            Main.d_alpha[5] = 1;
            Main.d_arr[5] = 2;
            this.d_flower0001.alpha = 1;
            this.d_flower0001.loadTexture('d_flower0002');



            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.flowergroup.add(this.d_flower2);

        this.d_flower3 = game.add.sprite(465, 420, 'd_flower0003');
        this.d_flower3.anchor.setTo(0.5);
        this.d_flower3.scale.setTo(1.1);
        this.d_flower3.inputEnabled = true;
        this.d_flower3.input.useHandCursor = true;
        this.d_flower3.events.onInputOver.add(this.btnOver, this);
        this.d_flower3.events.onInputOut.add(this.btnOut, this);
        this.d_flower3.events.onInputDown.add(function() {

            Main.d_alpha[5] = 1;
            Main.d_arr[5] = 3;
            this.d_flower0001.alpha = 1;
            this.d_flower0001.loadTexture('d_flower0003');




            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.flowergroup.add(this.d_flower3);

        this.d_flower4 = game.add.sprite(460, 540, 'd_flower0004');
        this.d_flower4.anchor.setTo(0.5);
        this.d_flower4.scale.setTo(1.1);
        this.d_flower4.inputEnabled = true;
        this.d_flower4.input.useHandCursor = true;
        this.d_flower4.events.onInputOver.add(this.btnOver, this);
        this.d_flower4.events.onInputOut.add(this.btnOut, this);
        this.d_flower4.events.onInputDown.add(function() {

            Main.d_alpha[5] = 1;
            Main.d_arr[5] = 4;
            this.d_flower0001.alpha = 1;
            this.d_flower0001.loadTexture('d_flower0004');



            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.flowergroup.add(this.d_flower4);


        this.d_flower5 = game.add.sprite(460, 660, 'd_flower0005');
        this.d_flower5.anchor.setTo(0.5);
        this.d_flower5.scale.setTo(1.1);
        this.d_flower5.inputEnabled = true;
        this.d_flower5.input.useHandCursor = true;
        this.d_flower5.events.onInputOver.add(this.btnOver, this);
        this.d_flower5.events.onInputOut.add(this.btnOut, this);
        this.d_flower5.events.onInputDown.add(function() {

            Main.d_alpha[5] = 1;
            Main.d_arr[5] = 5;
            this.d_flower0001.alpha = 1;
            this.d_flower0001.loadTexture('d_flower0005');




            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < (0)) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
            // effectssd = game.add.sprite(this.d_full0001.x,this.d_full0001.y,'effectssd');
            // effectssd.anchor.setTo(0.5);
            // effectssd.animations.add('effectssd');
            // effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            // evt.destroy();
            // },this);
        }, this);
        this.flowergroup.add(this.d_flower5);

        this.close5 = game.add.sprite(400, 100, 'close');
        this.close5.anchor.setTo(0.5);
        this.close5.scale.setTo(0.55);
        this.close5.inputEnabled = true;
        this.close5.input.useHandCursor = true;
        this.close5.events.onInputOver.add(this.btnOver, this);
        this.close5.events.onInputOut.add(this.btnOut, this);
        this.close5.events.onInputDown.add(function() {
            this.flowergroup.visible = false;
            this.panelgroup.visible = true;

        }, this);
        this.flowergroup.add(this.close5);















        this.morebtn = game.add.sprite(85, 730, 'btn4');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(350, 730, 'btn2');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(415, 5, "soundicon");
        this.musicButton.scale.setTo(0.75);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        YYGGames.navigate("game", "logo");
    },
    moreLink: function() {
        YYGGames.navigate("game", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            MyShowAD('selection');
        });

    },
}

//sssssssssssssssssssss

Main.selection = function() {}

Main.selection.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'selectbg');
        this.levelGroup.add(this.introbg);


        this.box1 = game.add.sprite(175, 325, 'box1');
        this.box1.anchor.setTo(0.5);
        if (Main.selectionarr[0] == 0) {
            this.box1.inputEnabled = true;
            this.box1.input.useHandCursor = true;
            this.box1.events.onInputOver.add(this.btnOver, this);
            this.box1.events.onInputOut.add(this.btnOut, this);
            this.box1.events.onInputDown.add(function() {
                Main.selectionarr[0] = 1;

                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    MyShowAD('hairspa');

                }, this);
            }, this);

        } else {
            this.box1.loadTexture('box11');

        }






        this.box2 = game.add.sprite(325, 335, 'box2');
        this.box2.anchor.setTo(0.5);
        if (Main.selectionarr[0] == 1) {
            this.box2.inputEnabled = true;
            this.box2.input.useHandCursor = true;
            // this.box2.events.onInputOver.add(this.btnOver,this);
            // this.box2.events.onInputOut.add(this.btnOut,this);
            this.box2.events.onInputDown.add(function() {
                Main.selectionarr[0] = 2;

                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    MyShowAD('r_makeup');

                }, this);
            }, this);

        } else {
            this.box2.loadTexture('box22');

        }



        this.box3 = game.add.sprite(175, 580, 'box3');
        this.box3.anchor.setTo(0.5);
        if (Main.selectionarr[0] == 2) {
            this.box3.inputEnabled = true;
            this.box3.input.useHandCursor = true;
            // this.box3.events.onInputOver.add(this.btnOver,this);
            // this.box3.events.onInputOut.add(this.btnOut,this);
            this.box3.events.onInputDown.add(function() {
                Main.selectionarr[0] = 3;

                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    MyShowAD('dressup');

                }, this);
            }, this);

        } else {
            this.box3.loadTexture('box33');

        }


        this.box4 = game.add.sprite(337, 586, 'box4');
        this.box4.anchor.setTo(0.5);
        if (Main.selectionarr[0] == 3) {
            this.box4.inputEnabled = true;
            this.box4.input.useHandCursor = true;
            // this.box4.events.onInputOver.add(this.btnOver,this);
            // this.box4.events.onInputOut.add(this.btnOut,this);
            this.box4.events.onInputDown.add(function() {
                Main.selectionarr[0] = 4;

                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    MyShowAD('photoscence');

                }, this);
            }, this);

        } else {
            this.box4.loadTexture('box44');

        }




        this.selectcghjk = game.add.sprite(254, 401, 'selectcghjk');
        this.selectcghjk.anchor.setTo(0.5);

        if (Main.selectionarr[0] == 1) {
            this.box1.inputEnabled = true;
            this.box1.input.useHandCursor = true;
        }

        if (Main.selectionarr[0] == 2) {
            this.box2.inputEnabled = true;
            this.box2.input.useHandCursor = true;

        }

        if (Main.selectionarr[0] == 3) {
            this.box3.inputEnabled = true;
            this.box3.input.useHandCursor = true;
        }
        if (Main.selectionarr[0] == 4) {
            this.box4.inputEnabled = true;
            this.box4.input.useHandCursor = true;
        }






        this.bgtop = game.add.sprite(0, 0, 'bgtop');

        // this.morebtn = game.add.sprite(85,730,'morebtn');
        // this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        // this.morebtn.inputEnabled = true;
        // this.morebtn.input.useHandCursor = true;
        // this.morebtn.events.onInputUp.add(this.moreLink, this);
        // this.morebtn.events.onInputOver.add(this.btnOver, this);
        // this.morebtn.events.onInputOut.add(this.btnOut, this);

        // this.playbtn = game.add.sprite(430,730,'playbtn');
        // this.playbtn.anchor.setTo(0.5);
        // this.playbtn.scale.setTo(0);
        // this.playbtn.inputEnabled = true;
        // this.playbtn.input.useHandCursor = true;
        // this.playbtn.events.onInputUp.add(this.enterRoom, this);
        // this.playbtn.events.onInputOver.add(this.btnOver, this);
        // this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(415, 5, "soundicon");
        this.musicButton.scale.setTo(0.75);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        YYGGames.navigate("game", "logo");
    },
    moreLink: function() {
        YYGGames.navigate("game", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            MyShowAD('elsaScreen');
        });

    },
}

//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm



Main.r_makeup = function() {}

Main.r_makeup.prototype = {
    create: function() {

        this.r_mkbg = game.add.sprite(0, 0, 'r_mkbg');

        this.d1_arr = [0, 0, 0, 0, 0, 0, 0];
        this.d2_arr = [0, 0, 0];

        this.rmr_grp = game.add.group();
        // this.rmr_grp.scale.setTo(0.9);
        this.rmr_grp.x = -40;

        this.mback = game.add.sprite(249, 360, 'mback');
        this.mback.anchor.setTo(0.5);
        this.rmr_grp.add(this.mback);



        this.mr_bhair0001 = game.add.sprite(268, 478, 'mr_bhair000' + Main.rp_arr[0]);
        this.mr_bhair0001.anchor.setTo(0.5);
        this.mr_bhair0001.alpha = 0;
        this.rmr_grp.add(this.mr_bhair0001);

        this.mr_body = game.add.sprite(252, 640, 'mr_body');
        this.mr_body.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_body);

        this.mr_drs = game.add.sprite(252, 640, 'mr_drs');
        this.mr_drs.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_drs);

        this.mr_head = game.add.sprite(265, 480, 'mr_head');
        this.mr_head.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_head);

        this.mr_dfltebrow = game.add.sprite(260, 273, 'mr_dfltebrow');
        this.mr_dfltebrow.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_dfltebrow);

        this.mr_eyeshad0001 = game.add.sprite(262, 299, 'mr_eyeshad000' + Main.rp_arr[3]);
        this.mr_eyeshad0001.anchor.setTo(0.5);
        this.mr_eyeshad0001.alpha = 0;
        this.rmr_grp.add(this.mr_eyeshad0001);

        this.mr_eye = game.add.sprite(262, 315, 'mr_eye');
        this.mr_eye.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_eye);

        this.mr_dfltmascara = game.add.sprite(262, 315, 'mr_dfltmascara');
        this.mr_dfltmascara.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_dfltmascara);

        this.mr_eyeball0001 = game.add.sprite(264, 320, 'mr_eyeball000' + Main.rp_arr[1]);
        this.mr_eyeball0001.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_eyeball0001);

        this.mr_mascara0001 = game.add.sprite(263, 313, 'mr_mascara000' + Main.rp_arr[4]);
        this.mr_mascara0001.anchor.setTo(0.5);
        this.mr_mascara0001.alpha = 0;
        this.rmr_grp.add(this.mr_mascara0001);

        this.mr_dfltlip = game.add.sprite(260, 406, 'mr_dfltlip');
        this.mr_dfltlip.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_dfltlip);

        this.mr_lip0001 = game.add.sprite(260, 406, 'mr_lip000' + Main.rp_arr[4]);
        this.mr_lip0001.anchor.setTo(0.5);
        this.mr_lip0001.alpha = 0;
        this.rmr_grp.add(this.mr_lip0001);

        this.mr_blush0001 = game.add.sprite(255, 370, 'mr_blush000' + Main.rp_arr[2]);
        this.mr_blush0001.anchor.setTo(0.5);
        this.mr_blush0001.alpha = 0;
        this.rmr_grp.add(this.mr_blush0001);

        this.mr_dflthair = game.add.sprite(249, 360, 'mr_dflthair');
        this.mr_dflthair.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_dflthair);



        this.mr_fhair0001 = game.add.sprite(266, 480, 'mr_fhair000' + Main.rp_arr[0]);
        this.mr_fhair0001.anchor.setTo(0.5);
        this.mr_fhair0001.alpha = 0;
        this.rmr_grp.add(this.mr_fhair0001);

        this.mr_ear0001 = game.add.sprite(170, 393, 'mr_ear000' + Main.rp_arr[6]);
        this.mr_ear0001.anchor.setTo(0.5);
        this.mr_ear0001.alpha = 0;
        this.rmr_grp.add(this.mr_ear0001);

        this.mr_ear11 = game.add.sprite(346, 396, 'mr_ear000' + Main.rp_arr[6]);
        this.mr_ear11.anchor.setTo(0.5);
        this.mr_ear11.alpha = 0;
        this.rmr_grp.add(this.mr_ear11);

        this.mr_h1crown0001 = game.add.sprite(266, 480, 'mr_h1crown000' + Main.rp_arr[7]);
        this.mr_h1crown0001.anchor.setTo(0.5);
        this.mr_h1crown0001.alpha = 0;
        this.rmr_grp.add(this.mr_h1crown0001);

        this.mr_h2crown0001 = game.add.sprite(266, 480, 'mr_h2crown000' + Main.rp_arr[7]);
        this.mr_h2crown0001.anchor.setTo(0.5);
        this.mr_h2crown0001.alpha = 0;
        this.rmr_grp.add(this.mr_h2crown0001);

        this.mr_h3crown0001 = game.add.sprite(266, 480, 'mr_h3crown000' + Main.rp_arr[7]);
        this.mr_h3crown0001.anchor.setTo(0.5);
        this.mr_h3crown0001.alpha = 0;
        this.rmr_grp.add(this.mr_h3crown0001);

        this.mr_h4crown0001 = game.add.sprite(266, 480, 'mr_h4crown000' + Main.rp_arr[7]);
        this.mr_h4crown0001.anchor.setTo(0.5);
        this.mr_h4crown0001.alpha = 0;
        this.rmr_grp.add(this.mr_h4crown0001);

        this.mr_h5crown0001 = game.add.sprite(266, 480, 'mr_h5crown000' + Main.rp_arr[7]);
        this.mr_h5crown0001.anchor.setTo(0.5);
        this.mr_h5crown0001.alpha = 0;
        this.rmr_grp.add(this.mr_h5crown0001);




        this.pnl_grp1 = game.add.group();
        this.pnl_grp1.visible = false;


        this.r_pnldec = game.add.sprite(441, 360, 'r_pnldec');
        this.r_pnldec.anchor.setTo(0.5);
        this.r_pnldec.scale.setTo(0.94);
        this.pnl_grp1.add(this.r_pnldec);

        this.pnl_hiar1 = game.add.sprite(440, 180, 'mr_fhair0001');
        this.pnl_hiar1.anchor.setTo(0.5);
        this.pnl_hiar1.scale.setTo(0.2);
        this.pnl_hiar1.inputEnabled = true;
        this.pnl_hiar1.input.useHandCursor = true;
        // this.pnl_hiar1.events.onInputOver.add(this.btnOver,this);
        // this.pnl_hiar1.events.onInputOut.add(this.btnOut,this);
        this.pnl_hiar1.events.onInputDown.add(function() {
            this.mr_dflthair.visible = false;

            this.mback.visible = false;
            this.mr_bhair0001.alpha = 1;
            this.mr_fhair0001.alpha = 1;
            this.mr_bhair0001.loadTexture('mr_bhair0001');
            this.mr_fhair0001.loadTexture('mr_fhair0001');
            Main.rp_arr[0] = 1;


            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }




            this.d1_arr[0] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }


        }, this);
        this.pnl_grp1.add(this.pnl_hiar1);

        this.pnl_hiar2 = game.add.sprite(480, 277, 'mr_fhair0002');
        this.pnl_hiar2.anchor.setTo(0.5);
        this.pnl_hiar2.scale.setTo(0.2);
        this.pnl_hiar2.inputEnabled = true;
        this.pnl_hiar2.input.useHandCursor = true;
        // this.pnl_hiar2.events.onInputOver.add(this.btnOver,this);
        // this.pnl_hiar2.events.onInputOut.add(this.btnOut,this);
        this.pnl_hiar2.events.onInputDown.add(function() {
            this.mr_dflthair.visible = false;
            this.mr_bhair0001.alpha = 1;
            this.mr_fhair0001.alpha = 1;
            this.mback.visible = false;

            this.mr_bhair0001.loadTexture('mr_bhair0002');
            this.mr_fhair0001.loadTexture('mr_fhair0002');
            Main.rp_arr[0] = 2;
            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }

            this.d1_arr[0] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp1.add(this.pnl_hiar2);

        this.pnl_hiar3 = game.add.sprite(445, 375, 'mr_fhair0003');
        this.pnl_hiar3.anchor.setTo(0.5);
        this.pnl_hiar3.scale.setTo(0.2);
        this.pnl_hiar3.inputEnabled = true;
        this.pnl_hiar3.input.useHandCursor = true;
        // this.pnl_hiar3.events.onInputOver.add(this.btnOver,this);
        // this.pnl_hiar3.events.onInputOut.add(this.btnOut,this);
        this.pnl_hiar3.events.onInputDown.add(function() {
            this.mr_dflthair.visible = false;
            this.mr_dflthair.visible = false;
            this.mr_bhair0001.alpha = 1;
            this.mr_fhair0001.alpha = 1;
            this.mback.visible = false;

            this.mr_bhair0001.loadTexture('mr_bhair0003');
            this.mr_fhair0001.loadTexture('mr_fhair0003');
            Main.rp_arr[0] = 3;
            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }

            this.d1_arr[0] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp1.add(this.pnl_hiar3);

        this.pnl_hiar4 = game.add.sprite(465, 490, 'mr_fhair0004');
        this.pnl_hiar4.anchor.setTo(0.5);
        this.pnl_hiar4.scale.setTo(0.2);
        this.pnl_hiar4.inputEnabled = true;
        this.pnl_hiar4.input.useHandCursor = true;
        // this.pnl_hiar4.events.onInputOver.add(this.btnOver,this);
        // this.pnl_hiar4.events.onInputOut.add(this.btnOut,this);
        this.pnl_hiar4.events.onInputDown.add(function() {
            this.mr_dflthair.visible = false;
            this.mr_dflthair.visible = false;
            this.mr_bhair0001.alpha = 1;
            this.mr_fhair0001.alpha = 1;
            this.mback.visible = false;

            this.mr_bhair0001.loadTexture('mr_bhair0004');
            this.mr_fhair0001.loadTexture('mr_fhair0004');
            Main.rp_arr[0] = 4;
            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }

            this.d1_arr[0] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp1.add(this.pnl_hiar4);

        this.pnl_hiar5 = game.add.sprite(445, 563, 'mr_fhair0005');
        this.pnl_hiar5.anchor.setTo(0.5);
        this.pnl_hiar5.scale.setTo(0.22);
        this.pnl_hiar5.inputEnabled = true;
        this.pnl_hiar5.input.useHandCursor = true;
        // this.pnl_hiar5.events.onInputOver.add(this.btnOver,this);
        // this.pnl_hiar5.events.onInputOut.add(this.btnOut,this);
        this.pnl_hiar5.events.onInputDown.add(function() {
            this.mr_dflthair.visible = false;
            this.mr_dflthair.visible = false;
            this.mr_bhair0001.alpha = 1;
            this.mback.visible = false;

            this.mr_fhair0001.alpha = 1;
            this.mr_bhair0001.loadTexture('mr_bhair0005');
            this.mr_fhair0001.loadTexture('mr_fhair0005');
            Main.rp_arr[0] = 5;
            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }
            this.d1_arr[0] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp1.add(this.pnl_hiar5);




        this.close = game.add.sprite(400, 85, 'close');
        this.close.anchor.setTo(0.5);
        this.close.scale.setTo(0.6);
        this.pnl_grp1.add(this.close);
        this.close.inputEnabled = true;
        this.close.input.useHandCursor = true;
        // this.close.events.onInputOver.add(this.btnOver,this);
        // this.close.events.onInputOut.add(this.btnOut,this);
        this.close.events.onInputDown.add(function() {
            this.pnl_grp1.visible = false;
        }, this);


        /////////////////////


        //         this.pnl_grp2 =game.add.group();
        //         this.pnl_grp2.visible=false;

        //        this.r_pnldec = game.add.sprite(441,360,'r_pnldec');
        //         this.r_pnldec.anchor.setTo(0.5);
        //         this.r_pnldec.scale.setTo(0.94);
        //        this.pnl_grp2.add(this.r_pnldec);


        //         this.pnl_eye1 = game.add.sprite(450,160,'pnl_eye1');
        //         this.pnl_eye1.anchor.setTo(0.5);
        //         this.pnl_eye1.inputEnabled=true;
        //         this.pnl_eye1.input.useHandCursor=true;
        //         this.pnl_eye1.events.onInputOver.add(this.btnOver,this);
        //         this.pnl_eye1.events.onInputOut.add(this.btnOut,this);
        //         this.pnl_eye1.events.onInputDown.add(function(){
        //         Main.rp_arr[1]=1;


        //         this.mr_eyeball0001.loadTexture('mr_eyeball0001');
        //  this.d1_arr[1]=1;

        //                if(this.d1_arr.indexOf(0)<0){
        //          game.add.tween(this.morebtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //          game.add.tween(this.playbtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //                   }
        //         },this);
        //         this.pnl_grp2.add(this.pnl_eye1);

        //         this.pnl_eye2 = game.add.sprite(450,255,'pnl_eye2');
        //         this.pnl_eye2.anchor.setTo(0.5);
        //         this.pnl_eye2.inputEnabled=true;
        //         this.pnl_eye2.input.useHandCursor=true;
        //         this.pnl_eye2.events.onInputOver.add(this.btnOver,this);
        //         this.pnl_eye2.events.onInputOut.add(this.btnOut,this);
        //         this.pnl_eye2.events.onInputDown.add(function(){
        //          Main.rp_arr[1]=2;


        //         this.mr_eyeball0001.loadTexture('mr_eyeball0002');
        //              this.d1_arr[1]=1;

        //                if(this.d1_arr.indexOf(0)<0){
        //          game.add.tween(this.morebtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //          game.add.tween(this.playbtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //                   }
        //         },this); 
        //        this.pnl_grp2.add(this.pnl_eye2);

        //         this.pnl_eye3 = game.add.sprite(450,355,'pnl_eye3');
        //         this.pnl_eye3.anchor.setTo(0.5);
        //         this.pnl_eye3.inputEnabled=true;
        //         this.pnl_eye3.input.useHandCursor=true;
        //         this.pnl_eye3.events.onInputOver.add(this.btnOver,this);
        //         this.pnl_eye3.events.onInputOut.add(this.btnOut,this);
        //         this.pnl_eye3.events.onInputDown.add(function(){
        //         Main.rp_arr[1]=3;
        //         this.mr_eyeball0001.loadTexture('mr_eyeball0003');
        //              this.d1_arr[1]=1;

        //                if(this.d1_arr.indexOf(0)<0){
        //          game.add.tween(this.morebtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //          game.add.tween(this.playbtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //                   }
        //         },this);
        //        this.pnl_grp2.add(this.pnl_eye3); 

        //         this.pnl_eye4 = game.add.sprite(450,460,'pnl_eye4');
        //         this.pnl_eye4.anchor.setTo(0.5);
        //         this.pnl_eye4.inputEnabled=true;
        //         this.pnl_eye4.input.useHandCursor=true;
        //         this.pnl_eye4.events.onInputOver.add(this.btnOver,this);
        //         this.pnl_eye4.events.onInputOut.add(this.btnOut,this);
        //         this.pnl_eye4.events.onInputDown.add(function(){
        //         Main.rp_arr[1]=4;
        //         this.mr_eyeball0001.loadTexture('mr_eyeball0004');
        //            this.d1_arr[1]=1;

        //                if(this.d1_arr.indexOf(0)<0){
        //          game.add.tween(this.morebtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //          game.add.tween(this.playbtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //                   }  
        //         },this);
        //         this.pnl_grp2.add(this.pnl_eye4);

        //         this.pnl_eye5 = game.add.sprite(450,563,'pnl_eye5');
        //         this.pnl_eye5.anchor.setTo(0.5);
        //         this.pnl_eye5.inputEnabled=true;
        //         this.pnl_eye5.input.useHandCursor=true;
        //         this.pnl_eye5.events.onInputOver.add(this.btnOver,this);
        //         this.pnl_eye5.events.onInputOut.add(this.btnOut,this);
        //         this.pnl_eye5.events.onInputDown.add(function(){
        //         Main.rp_arr[1]=5;
        //         this.mr_eyeball0001.loadTexture('mr_eyeball0005');
        //             this.d1_arr[1]=1;

        //                if(this.d1_arr.indexOf(0)<0){
        //          game.add.tween(this.morebtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //          game.add.tween(this.playbtn.scale).to({x:0.95,y:0.95},400,Phaser.Easing.Bounce.Out,true);
        //                   } 
        //         },this);
        //         this.pnl_grp2.add(this.pnl_eye5);

        // this.close = game.add.sprite(400,85,'close');
        //         this.close.anchor.setTo(0.5);
        //         this.close.scale.setTo(0.6);
        //        this.pnl_grp2.add(this.close);         
        //         this.close.inputEnabled=true;
        //         this.close.input.useHandCursor=true;
        //         // this.close.events.onInputOver.add(this.btnOver,this);
        //         // this.close.events.onInputOut.add(this.btnOut,this);
        //         this.close.events.onInputDown.add(function(){
        //        this.pnl_grp2.visible=false;
        //         },this);


        ///////////////////
        this.pnl_grp3 = game.add.group();
        this.pnl_grp3.visible = false;
        this.r_pnldec = game.add.sprite(441, 360, 'r_pnldec');
        this.r_pnldec.anchor.setTo(0.5);
        this.r_pnldec.scale.setTo(0.94);
        this.pnl_grp3.add(this.r_pnldec);


        this.pnl_bls0001 = game.add.sprite(450, 160, 'pnl_bls0001');
        this.pnl_bls0001.anchor.setTo(0.5);
        this.pnl_bls0001.inputEnabled = true;
        this.pnl_bls0001.input.useHandCursor = true;
        this.pnl_bls0001.events.onInputOver.add(this.btnOver, this);
        this.pnl_bls0001.events.onInputOut.add(this.btnOut, this);
        this.pnl_bls0001.events.onInputDown.add(function() {
            Main.rp_arr[2] = 1;
            this.mr_blush0001.alpha = 1;
            this.mr_blush0001.loadTexture('mr_blush0001');
            this.d1_arr[1] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp3.add(this.pnl_bls0001);

        this.pnl_bls0002 = game.add.sprite(450, 255, 'pnl_bls0002');
        this.pnl_bls0002.anchor.setTo(0.5);
        this.pnl_bls0002.inputEnabled = true;
        this.pnl_bls0002.input.useHandCursor = true;
        this.pnl_bls0002.events.onInputOver.add(this.btnOver, this);
        this.pnl_bls0002.events.onInputOut.add(this.btnOut, this);
        this.pnl_bls0002.events.onInputDown.add(function() {
            Main.rp_arr[2] = 2;
            this.mr_blush0001.alpha = 1;
            this.mr_blush0001.loadTexture('mr_blush0002');
            this.d1_arr[1] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp3.add(this.pnl_bls0002);

        this.pnl_bls0003 = game.add.sprite(450, 355, 'pnl_bls0003');
        this.pnl_bls0003.anchor.setTo(0.5);
        this.pnl_bls0003.inputEnabled = true;
        this.pnl_bls0003.input.useHandCursor = true;
        this.pnl_bls0003.events.onInputOver.add(this.btnOver, this);
        this.pnl_bls0003.events.onInputOut.add(this.btnOut, this);
        this.pnl_bls0003.events.onInputDown.add(function() {
            Main.rp_arr[2] = 3;
            this.mr_blush0001.alpha = 1;
            this.mr_blush0001.loadTexture('mr_blush0003');
            this.d1_arr[1] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp3.add(this.pnl_bls0003);

        this.pnl_bls0004 = game.add.sprite(450, 460, 'pnl_bls0004');
        this.pnl_bls0004.anchor.setTo(0.5);
        this.pnl_bls0004.inputEnabled = true;
        this.pnl_bls0004.input.useHandCursor = true;
        this.pnl_bls0004.events.onInputOver.add(this.btnOver, this);
        this.pnl_bls0004.events.onInputOut.add(this.btnOut, this);
        this.pnl_bls0004.events.onInputDown.add(function() {
            Main.rp_arr[2] = 4;
            this.mr_blush0001.alpha = 1;
            this.mr_blush0001.loadTexture('mr_blush0004');
            this.d1_arr[1] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp3.add(this.pnl_bls0004);

        this.pnl_bls0005 = game.add.sprite(450, 563, 'pnl_bls0005');
        this.pnl_bls0005.anchor.setTo(0.5);
        this.pnl_bls0005.inputEnabled = true;
        this.pnl_bls0005.input.useHandCursor = true;
        this.pnl_bls0005.events.onInputOver.add(this.btnOver, this);
        this.pnl_bls0005.events.onInputOut.add(this.btnOut, this);
        this.pnl_bls0005.events.onInputDown.add(function() {
            Main.rp_arr[2] = 5;
            this.mr_blush0001.alpha = 1;
            this.mr_blush0001.loadTexture('mr_blush0005');
            this.d1_arr[1] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp3.add(this.pnl_bls0005);

        this.close = game.add.sprite(400, 85, 'close');
        this.close.anchor.setTo(0.5);
        this.close.scale.setTo(0.6);
        this.pnl_grp3.add(this.close);
        this.close.inputEnabled = true;
        this.close.input.useHandCursor = true;
        // this.close.events.onInputOver.add(this.btnOver,this);
        // this.close.events.onInputOut.add(this.btnOut,this);
        this.close.events.onInputDown.add(function() {
            this.pnl_grp3.visible = false;
        }, this);


        this.pnl_grp4 = game.add.group();
        this.pnl_grp4.visible = false;
        this.r_pnldec = game.add.sprite(441, 360, 'r_pnldec');
        this.r_pnldec.anchor.setTo(0.5);
        this.r_pnldec.scale.setTo(0.94);
        this.pnl_grp4.add(this.r_pnldec);


        this.pnl_eshd0001 = game.add.sprite(450, 160, 'pnl_eshd0001');
        this.pnl_eshd0001.anchor.setTo(0.5);
        this.pnl_eshd0001.inputEnabled = true;
        this.pnl_eshd0001.input.useHandCursor = true;
        this.pnl_eshd0001.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0001.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0001.events.onInputDown.add(function() {
            Main.rp_arr[3] = 1;
            this.mr_eyeshad0001.alpha = 1;
            this.mr_eyeshad0001.loadTexture('mr_eyeshad0001');
            this.d1_arr[2] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp4.add(this.pnl_eshd0001);

        this.pnl_eshd0002 = game.add.sprite(450, 255, 'pnl_eshd0002');
        this.pnl_eshd0002.anchor.setTo(0.5);
        this.pnl_eshd0002.inputEnabled = true;
        this.pnl_eshd0002.input.useHandCursor = true;
        this.pnl_eshd0002.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0002.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0002.events.onInputDown.add(function() {
            Main.rp_arr[3] = 2;
            this.mr_eyeshad0001.alpha = 1;
            this.mr_eyeshad0001.loadTexture('mr_eyeshad0002');
            this.d1_arr[2] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp4.add(this.pnl_eshd0002);

        this.pnl_eshd0003 = game.add.sprite(450, 355, 'pnl_eshd0003');
        this.pnl_eshd0003.anchor.setTo(0.5);
        this.pnl_eshd0003.inputEnabled = true;
        this.pnl_eshd0003.input.useHandCursor = true;
        this.pnl_eshd0003.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0003.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0003.events.onInputDown.add(function() {
            Main.rp_arr[3] = 3;
            this.mr_eyeshad0001.alpha = 1;
            this.mr_eyeshad0001.loadTexture('mr_eyeshad0003');
            this.d1_arr[2] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp4.add(this.pnl_eshd0003);

        this.pnl_eshd0004 = game.add.sprite(450, 460, 'pnl_eshd0004');
        this.pnl_eshd0004.anchor.setTo(0.5);
        this.pnl_eshd0004.inputEnabled = true;
        this.pnl_eshd0004.input.useHandCursor = true;
        this.pnl_eshd0004.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0004.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0004.events.onInputDown.add(function() {
            Main.rp_arr[3] = 4;
            this.mr_eyeshad0001.alpha = 1;
            this.mr_eyeshad0001.loadTexture('mr_eyeshad0004');
            this.d1_arr[2] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp4.add(this.pnl_eshd0004);

        this.pnl_eshd0005 = game.add.sprite(450, 563, 'pnl_eshd0005');
        this.pnl_eshd0005.anchor.setTo(0.5);
        this.pnl_eshd0005.inputEnabled = true;
        this.pnl_eshd0005.input.useHandCursor = true;
        this.pnl_eshd0005.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0005.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0005.events.onInputDown.add(function() {
            Main.rp_arr[3] = 5;
            this.mr_eyeshad0001.alpha = 1;
            this.mr_eyeshad0001.loadTexture('mr_eyeshad0005');
            this.d1_arr[2] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp4.add(this.pnl_eshd0005);

        this.close = game.add.sprite(400, 85, 'close');
        this.close.anchor.setTo(0.5);
        this.close.scale.setTo(0.6);
        this.pnl_grp4.add(this.close);
        this.close.inputEnabled = true;
        this.close.input.useHandCursor = true;
        // this.close.events.onInputOver.add(this.btnOver,this);
        // this.close.events.onInputOut.add(this.btnOut,this);
        this.close.events.onInputDown.add(function() {
            this.pnl_grp4.visible = false;
        }, this);

        // this.pnl_grp1.visible=false;
        // this.pnl_grp2.visible=false;
        // this.pnl_grp3.visible=false;
        // this.pnl_grp4.visible=false;


        this.pnl_grp5 = game.add.group();
        this.pnl_grp5.visible = false;
        this.r_pnldec = game.add.sprite(441, 360, 'r_pnldec');
        this.r_pnldec.anchor.setTo(0.5);
        this.r_pnldec.scale.setTo(0.94);
        this.pnl_grp5.add(this.r_pnldec);


        this.pnl_eshd0001 = game.add.sprite(450, 160, 'lippanel1');
        this.pnl_eshd0001.anchor.setTo(0.5);
        this.pnl_eshd0001.inputEnabled = true;
        this.pnl_eshd0001.input.useHandCursor = true;
        this.pnl_eshd0001.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0001.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0001.events.onInputDown.add(function() {
            Main.rp_arr[4] = 1;
            this.mr_lip0001.alpha = 1;
            this.mr_lip0001.loadTexture('mr_lip0001');
            this.d1_arr[3] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp5.add(this.pnl_eshd0001);

        this.pnl_eshd0002 = game.add.sprite(450, 255, 'lippanel2');
        this.pnl_eshd0002.anchor.setTo(0.5);
        this.pnl_eshd0002.inputEnabled = true;
        this.pnl_eshd0002.input.useHandCursor = true;
        this.pnl_eshd0002.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0002.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0002.events.onInputDown.add(function() {
            Main.rp_arr[4] = 2;
            this.mr_lip0001.alpha = 1;
            this.mr_lip0001.loadTexture('mr_lip0002');
            this.d1_arr[3] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp5.add(this.pnl_eshd0002);

        this.pnl_eshd0003 = game.add.sprite(450, 355, 'lippanel3');
        this.pnl_eshd0003.anchor.setTo(0.5);
        this.pnl_eshd0003.inputEnabled = true;
        this.pnl_eshd0003.input.useHandCursor = true;
        this.pnl_eshd0003.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0003.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0003.events.onInputDown.add(function() {
            Main.rp_arr[4] = 3;
            this.mr_lip0001.alpha = 1;
            this.mr_lip0001.loadTexture('mr_lip0003');
            this.d1_arr[3] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp5.add(this.pnl_eshd0003);

        this.pnl_eshd0004 = game.add.sprite(450, 460, 'lippanel4');
        this.pnl_eshd0004.anchor.setTo(0.5);
        this.pnl_eshd0004.inputEnabled = true;
        this.pnl_eshd0004.input.useHandCursor = true;
        this.pnl_eshd0004.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0004.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0004.events.onInputDown.add(function() {
            Main.rp_arr[4] = 4;
            this.mr_lip0001.alpha = 1;
            this.mr_lip0001.loadTexture('mr_lip0004');
            this.d1_arr[3] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp5.add(this.pnl_eshd0004);

        this.pnl_eshd0005 = game.add.sprite(450, 563, 'lippanel5');
        this.pnl_eshd0005.anchor.setTo(0.5);
        this.pnl_eshd0005.inputEnabled = true;
        this.pnl_eshd0005.input.useHandCursor = true;
        this.pnl_eshd0005.events.onInputOver.add(this.btnOver, this);
        this.pnl_eshd0005.events.onInputOut.add(this.btnOut, this);
        this.pnl_eshd0005.events.onInputDown.add(function() {
            Main.rp_arr[4] = 5;
            this.mr_lip0001.alpha = 1;
            this.mr_lip0001.loadTexture('mr_lip0005');
            this.d1_arr[3] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp5.add(this.pnl_eshd0005);

        this.close = game.add.sprite(400, 85, 'close');
        this.close.anchor.setTo(0.5);
        this.close.scale.setTo(0.6);
        this.pnl_grp5.add(this.close);
        this.close.inputEnabled = true;
        this.close.input.useHandCursor = true;
        // this.close.events.onInputOver.add(this.btnOver,this);
        // this.close.events.onInputOut.add(this.btnOut,this);
        this.close.events.onInputDown.add(function() {
            this.pnl_grp5.visible = false;
        }, this);




        this.pnl_grp6 = game.add.group();
        this.pnl_grp6.visible = false;
        this.r_pnldec = game.add.sprite(441, 360, 'r_pnldec');
        this.r_pnldec.anchor.setTo(0.5);
        this.r_pnldec.scale.setTo(0.94);
        this.pnl_grp6.add(this.r_pnldec);


        this.pnmas1 = game.add.sprite(450, 160, 'mr_mascara0001');
        this.pnmas1.anchor.setTo(0.5);
        this.pnmas1.scale.setTo(0.55);
        this.pnmas1.inputEnabled = true;
        this.pnmas1.input.useHandCursor = true;
        this.pnmas1.events.onInputOver.add(this.btnOver, this);
        this.pnmas1.events.onInputOut.add(this.btnOut, this);
        this.pnmas1.events.onInputDown.add(function() {
            Main.rp_arr[5] = 1;
            this.mr_mascara0001.alpha = 1;
            this.mr_dfltmascara.visible = false;

            this.mr_mascara0001.loadTexture('mr_mascara0001');
            this.d1_arr[4] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp6.add(this.pnmas1);

        this.pnmas2 = game.add.sprite(450, 255, 'mr_mascara0002');
        this.pnmas2.anchor.setTo(0.5);
        this.pnmas2.scale.setTo(0.55);
        this.pnmas2.inputEnabled = true;
        this.pnmas2.input.useHandCursor = true;
        this.pnmas2.events.onInputOver.add(this.btnOver, this);
        this.pnmas2.events.onInputOut.add(this.btnOut, this);
        this.pnmas2.events.onInputDown.add(function() {
            Main.rp_arr[5] = 2;
            this.mr_mascara0001.alpha = 1;
            this.mr_dfltmascara.visible = false;
            this.mr_mascara0001.loadTexture('mr_mascara0002');
            this.d1_arr[4] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp6.add(this.pnmas2);

        this.pnmas3 = game.add.sprite(450, 355, 'mr_mascara0003');
        this.pnmas3.anchor.setTo(0.5);
        this.pnmas3.scale.setTo(0.55);
        this.pnmas3.inputEnabled = true;
        this.pnmas3.input.useHandCursor = true;
        this.pnmas3.events.onInputOver.add(this.btnOver, this);
        this.pnmas3.events.onInputOut.add(this.btnOut, this);
        this.pnmas3.events.onInputDown.add(function() {
            Main.rp_arr[5] = 3;
            this.mr_mascara0001.alpha = 1;
            this.mr_dfltmascara.visible = false;

            this.mr_mascara0001.loadTexture('mr_mascara0003');
            this.d1_arr[4] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp6.add(this.pnmas3);

        this.pnmas4 = game.add.sprite(450, 460, 'mr_mascara0004');
        this.pnmas4.anchor.setTo(0.5);
        this.pnmas4.scale.setTo(0.55);
        this.pnmas4.inputEnabled = true;
        this.pnmas4.input.useHandCursor = true;
        this.pnmas4.events.onInputOver.add(this.btnOver, this);
        this.pnmas4.events.onInputOut.add(this.btnOut, this);
        this.pnmas4.events.onInputDown.add(function() {
            Main.rp_arr[5] = 4;
            this.mr_mascara0001.alpha = 1;
            this.mr_dfltmascara.visible = false;

            this.mr_mascara0001.loadTexture('mr_mascara0004');
            this.d1_arr[4] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp6.add(this.pnmas4);

        this.pnmas5 = game.add.sprite(450, 563, 'mr_mascara0005');
        this.pnmas5.anchor.setTo(0.5);
        this.pnmas5.scale.setTo(0.55);
        this.pnmas5.inputEnabled = true;
        this.pnmas5.input.useHandCursor = true;
        this.pnmas5.events.onInputOver.add(this.btnOver, this);
        this.pnmas5.events.onInputOut.add(this.btnOut, this);
        this.pnmas5.events.onInputDown.add(function() {
            Main.rp_arr[5] = 5;
            this.mr_mascara0001.alpha = 1;
            this.mr_dfltmascara.visible = false;

            this.mr_mascara0001.loadTexture('mr_mascara0005');
            this.d1_arr[4] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp6.add(this.pnmas5);

        this.close = game.add.sprite(400, 85, 'close');
        this.close.anchor.setTo(0.5);
        this.close.scale.setTo(0.6);
        this.pnl_grp6.add(this.close);
        this.close.inputEnabled = true;
        this.close.input.useHandCursor = true;
        // this.close.events.onInputOver.add(this.btnOver,this);
        // this.close.events.onInputOut.add(this.btnOut,this);
        this.close.events.onInputDown.add(function() {
            this.pnl_grp6.visible = false;
        }, this);


        ///7777

        this.pnl_grp7 = game.add.group();
        this.pnl_grp7.visible = false;
        this.r_pnldec = game.add.sprite(441, 360, 'r_pnldec');
        this.r_pnldec.anchor.setTo(0.5);
        this.r_pnldec.scale.setTo(0.94);
        this.pnl_grp7.add(this.r_pnldec);


        this.pnearing1 = game.add.sprite(450, 160, 'icn_ear1');
        this.pnearing1.anchor.setTo(0.5);
        this.pnearing1.scale.setTo(0.5);
        this.pnearing1.inputEnabled = true;
        this.pnearing1.input.useHandCursor = true;
        this.pnearing1.events.onInputOver.add(this.btnOver, this);
        this.pnearing1.events.onInputOut.add(this.btnOut, this);
        this.pnearing1.events.onInputDown.add(function() {
            Main.rp_arr[6] = 1;
            this.mr_ear0001.alpha = 1;
            this.mr_ear11.alpha = 1;
            this.mr_ear11.loadTexture('mr_ear0001');

            this.mr_ear0001.loadTexture('mr_ear0001');
            this.d1_arr[5] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp7.add(this.pnearing1);

        this.pnearing2 = game.add.sprite(450, 255, 'icn_ear2');
        this.pnearing2.anchor.setTo(0.5);
        this.pnearing2.scale.setTo(0.5);
        this.pnearing2.inputEnabled = true;
        this.pnearing2.input.useHandCursor = true;
        this.pnearing2.events.onInputOver.add(this.btnOver, this);
        this.pnearing2.events.onInputOut.add(this.btnOut, this);
        this.pnearing2.events.onInputDown.add(function() {
            Main.rp_arr[6] = 2;
            this.mr_ear0001.alpha = 1;
            this.mr_ear0001.loadTexture('mr_ear0002');
            this.mr_ear11.alpha = 1;
            this.mr_ear11.loadTexture('mr_ear0002');

            this.d1_arr[5] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp7.add(this.pnearing2);

        this.pnearing3 = game.add.sprite(450, 355, 'icn_ear3');
        this.pnearing3.anchor.setTo(0.5);
        this.pnearing3.scale.setTo(0.5);
        this.pnearing3.inputEnabled = true;
        this.pnearing3.input.useHandCursor = true;
        this.pnearing3.events.onInputOver.add(this.btnOver, this);
        this.pnearing3.events.onInputOut.add(this.btnOut, this);
        this.pnearing3.events.onInputDown.add(function() {
            Main.rp_arr[6] = 3;
            this.mr_ear0001.alpha = 1;
            this.mr_ear0001.loadTexture('mr_ear0003');
            this.mr_ear11.alpha = 1;
            this.mr_ear11.loadTexture('mr_ear0003');
            this.d1_arr[5] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp7.add(this.pnearing3);

        this.pnearing4 = game.add.sprite(450, 460, 'icn_ear4');
        this.pnearing4.anchor.setTo(0.5);
        this.pnearing4.scale.setTo(0.5);
        this.pnearing4.inputEnabled = true;
        this.pnearing4.input.useHandCursor = true;
        this.pnearing4.events.onInputOver.add(this.btnOver, this);
        this.pnearing4.events.onInputOut.add(this.btnOut, this);
        this.pnearing4.events.onInputDown.add(function() {
            Main.rp_arr[6] = 4;
            this.mr_ear0001.alpha = 1;
            this.mr_ear0001.loadTexture('mr_ear0004');
            this.mr_ear11.alpha = 1;
            this.mr_ear11.loadTexture('mr_ear0004');
            this.d1_arr[5] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp7.add(this.pnearing4);

        this.pnearing5 = game.add.sprite(450, 563, 'icn_ear5');
        this.pnearing5.anchor.setTo(0.5);
        this.pnearing5.scale.setTo(0.5);
        this.pnearing5.inputEnabled = true;
        this.pnearing5.input.useHandCursor = true;
        this.pnearing5.events.onInputOver.add(this.btnOver, this);
        this.pnearing5.events.onInputOut.add(this.btnOut, this);
        this.pnearing5.events.onInputDown.add(function() {
            Main.rp_arr[6] = 5;
            this.mr_ear0001.alpha = 1;
            this.mr_ear0001.loadTexture('mr_ear0005');
            this.mr_ear11.alpha = 1;
            this.mr_ear11.loadTexture('mr_ear0005');
            this.d1_arr[5] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp7.add(this.pnearing5);

        this.close = game.add.sprite(400, 85, 'close');
        this.close.anchor.setTo(0.5);
        this.close.scale.setTo(0.6);
        this.pnl_grp7.add(this.close);
        this.close.inputEnabled = true;
        this.close.input.useHandCursor = true;
        // this.close.events.onInputOver.add(this.btnOver,this);
        // this.close.events.onInputOut.add(this.btnOut,this);
        this.close.events.onInputDown.add(function() {
            this.pnl_grp7.visible = false;
        }, this);
        ///888888

        this.pnl_grp8 = game.add.group();
        this.pnl_grp8.visible = false;
        this.r_pnldec = game.add.sprite(441, 360, 'r_pnldec');
        this.r_pnldec.anchor.setTo(0.5);
        this.r_pnldec.scale.setTo(0.94);
        this.pnl_grp8.add(this.r_pnldec);


        this.pncrown1 = game.add.sprite(450, 160, 'icn_crwn1');
        this.pncrown1.anchor.setTo(0.5);
        this.pncrown1.scale.setTo(0.5);
        this.pncrown1.inputEnabled = true;
        this.pncrown1.input.useHandCursor = true;
        this.pncrown1.events.onInputOver.add(this.btnOver, this);
        this.pncrown1.events.onInputOut.add(this.btnOut, this);
        this.pncrown1.events.onInputDown.add(function() {
            this.mr_h1crown0001.alpha = 1;
            this.mr_h2crown0001.alpha = 1;
            this.mr_h3crown0001.alpha = 1;
            this.mr_h4crown0001.alpha = 1;
            this.mr_h5crown0001.alpha = 1;
            this.mr_h1crown0001.loadTexture('mr_h1crown0001');
            this.mr_h2crown0001.loadTexture('mr_h2crown0001');
            this.mr_h3crown0001.loadTexture('mr_h3crown0001');
            this.mr_h4crown0001.loadTexture('mr_h4crown0001');
            this.mr_h5crown0001.loadTexture('mr_h5crown0001');
            Main.rp_arr[7] = 1;


            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }

            this.d1_arr[6] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }

        }, this);
        this.pnl_grp8.add(this.pncrown1);

        this.pncrown2 = game.add.sprite(450, 255, 'icn_crwn2');
        this.pncrown2.anchor.setTo(0.5);
        this.pncrown2.scale.setTo(0.5);
        this.pncrown2.inputEnabled = true;
        this.pncrown2.input.useHandCursor = true;
        this.pncrown2.events.onInputOver.add(this.btnOver, this);
        this.pncrown2.events.onInputOut.add(this.btnOut, this);
        this.pncrown2.events.onInputDown.add(function() {
            this.mr_h1crown0001.alpha = 1;
            this.mr_h2crown0001.alpha = 1;
            this.mr_h3crown0001.alpha = 1;
            this.mr_h4crown0001.alpha = 1;
            this.mr_h5crown0001.alpha = 1;
            this.mr_h1crown0001.loadTexture('mr_h1crown0002');
            this.mr_h2crown0001.loadTexture('mr_h2crown0002');
            this.mr_h3crown0001.loadTexture('mr_h3crown0002');
            this.mr_h4crown0001.loadTexture('mr_h4crown0002');
            this.mr_h5crown0001.loadTexture('mr_h5crown0002');
            Main.rp_arr[7] = 2;


            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }

            this.d1_arr[6] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }


        }, this);
        this.pnl_grp8.add(this.pncrown2);

        this.pncrown3 = game.add.sprite(450, 355, 'icn_crwn3');
        this.pncrown3.anchor.setTo(0.5);
        this.pncrown3.scale.setTo(0.5);
        this.pncrown3.inputEnabled = true;
        this.pncrown3.input.useHandCursor = true;
        this.pncrown3.events.onInputOver.add(this.btnOver, this);
        this.pncrown3.events.onInputOut.add(this.btnOut, this);
        this.pncrown3.events.onInputDown.add(function() {
            this.mr_h1crown0001.alpha = 1;
            this.mr_h2crown0001.alpha = 1;
            this.mr_h3crown0001.alpha = 1;
            this.mr_h4crown0001.alpha = 1;
            this.mr_h5crown0001.alpha = 1;
            this.mr_h1crown0001.loadTexture('mr_h1crown0003');
            this.mr_h2crown0001.loadTexture('mr_h2crown0003');
            this.mr_h3crown0001.loadTexture('mr_h3crown0003');
            this.mr_h4crown0001.loadTexture('mr_h4crown0003');
            this.mr_h5crown0001.loadTexture('mr_h5crown0003');
            Main.rp_arr[7] = 3;

            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }


            this.d1_arr[6] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }

        }, this);
        this.pnl_grp8.add(this.pncrown3);

        this.pncrown4 = game.add.sprite(450, 460, 'icn_crwn4');
        this.pncrown4.anchor.setTo(0.5);
        this.pncrown4.scale.setTo(0.5);
        this.pncrown4.inputEnabled = true;
        this.pncrown4.input.useHandCursor = true;
        this.pncrown4.events.onInputOver.add(this.btnOver, this);
        this.pncrown4.events.onInputOut.add(this.btnOut, this);
        this.pncrown4.events.onInputDown.add(function() {
            this.mr_h1crown0001.alpha = 1;
            this.mr_h2crown0001.alpha = 1;
            this.mr_h3crown0001.alpha = 1;
            this.mr_h4crown0001.alpha = 1;
            this.mr_h5crown0001.alpha = 1;
            this.mr_h1crown0001.loadTexture('mr_h1crown0004');
            this.mr_h2crown0001.loadTexture('mr_h2crown0004');
            this.mr_h3crown0001.loadTexture('mr_h3crown0004');
            this.mr_h4crown0001.loadTexture('mr_h4crown0004');
            this.mr_h5crown0001.loadTexture('mr_h5crown0004');
            Main.rp_arr[7] = 4;


            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }

            this.d1_arr[6] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }

        }, this);
        this.pnl_grp8.add(this.pncrown4);

        this.pncrown5 = game.add.sprite(450, 563, 'icn_crwn5');
        this.pncrown5.anchor.setTo(0.5);
        this.pncrown5.scale.setTo(0.5);
        this.pncrown5.inputEnabled = true;
        this.pncrown5.input.useHandCursor = true;
        this.pncrown5.events.onInputOver.add(this.btnOver, this);
        this.pncrown5.events.onInputOut.add(this.btnOut, this);
        this.pncrown5.events.onInputDown.add(function() {
            this.mr_h1crown0001.alpha = 1;
            this.mr_h2crown0001.alpha = 1;
            this.mr_h3crown0001.alpha = 1;
            this.mr_h4crown0001.alpha = 1;
            this.mr_h5crown0001.alpha = 1;
            this.mr_h1crown0001.loadTexture('mr_h1crown0005');
            this.mr_h2crown0001.loadTexture('mr_h2crown0005');
            this.mr_h3crown0001.loadTexture('mr_h3crown0005');
            this.mr_h4crown0001.loadTexture('mr_h4crown0005');
            this.mr_h5crown0001.loadTexture('mr_h5crown0005');
            Main.rp_arr[7] = 5;


            if (Main.rp_arr[0] == 1) {
                this.mr_h1crown0001.visible = true;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 2) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = true;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 3) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = true;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = false;
            }

            if (Main.rp_arr[0] == 4) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = true;
                this.mr_h5crown0001.visible = false;
            }
            if (Main.rp_arr[0] == 5) {
                this.mr_h1crown0001.visible = false;
                this.mr_h2crown0001.visible = false;
                this.mr_h3crown0001.visible = false;
                this.mr_h4crown0001.visible = false;
                this.mr_h5crown0001.visible = true;
            }


            this.d1_arr[6] = 1;

            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.morebtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.95,
                    y: 0.95
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.pnl_grp8.add(this.pncrown5);

        this.close = game.add.sprite(400, 85, 'close');
        this.close.anchor.setTo(0.5);
        this.close.scale.setTo(0.6);
        this.pnl_grp8.add(this.close);
        this.close.inputEnabled = true;
        this.close.input.useHandCursor = true;
        // this.close.events.onInputOver.add(this.btnOver,this);
        // this.close.events.onInputOut.add(this.btnOut,this);
        this.close.events.onInputDown.add(function() {
            this.pnl_grp8.visible = false;
        }, this);

        //////




        this.r_panel = game.add.sprite(252, 722, 'r_panel');
        this.r_panel.anchor.setTo(0.5);

        this.icon_grp1 = game.add.group();

        this.r_tool1 = game.add.sprite(65, 705, 'r_tool1');
        this.r_tool1.anchor.setTo(0.5);
        this.r_tool1.scale.setTo(0.75);
        this.r_tool1.rotation = -0.6;
        this.r_tool1.inputEnabled = true;
        this.r_tool1.input.useHandCursor = true;
        this.r_tool1.events.onInputOver.add(this.btnOver, this);
        this.r_tool1.events.onInputOut.add(this.btnOut, this);
        this.r_tool1.events.onInputDown.add(function() {
            this.pnl_grp1.visible = true;
            // this.pnl_grp2.visible=false;
            this.pnl_grp3.visible = false;
            this.pnl_grp4.visible = false;
            this.pnl_grp5.visible = false;
            this.pnl_grp6.visible = false;
            this.pnl_grp7.visible = false;
            this.pnl_grp8.visible = false;
            this.d2_arr[0] = 1;
            if (this.d2_arr.indexOf(0) < 0) {
                this.arrow1.visible = true;
            }
        }, this);
        this.icon_grp1.add(this.r_tool1);

        this.r_tool3 = game.add.sprite(250, 700, 'r_tool3');
        this.r_tool3.anchor.setTo(0.5);
        this.r_tool3.scale.setTo(0.4);
        this.r_tool3.inputEnabled = true;
        this.r_tool3.input.useHandCursor = true;
        this.r_tool3.events.onInputOver.add(this.btnOver, this);
        this.r_tool3.events.onInputOut.add(this.btnOut, this);
        this.r_tool3.events.onInputDown.add(function() {
            this.pnl_grp1.visible = false;
            // this.pnl_grp2.visible=false;
            this.pnl_grp3.visible = true;
            this.pnl_grp4.visible = false;
            this.pnl_grp5.visible = false;
            this.pnl_grp6.visible = false;
            this.pnl_grp7.visible = false;
            this.pnl_grp8.visible = false;
            this.d2_arr[1] = 1;
            if (this.d2_arr.indexOf(0) < 0) {
                this.arrow1.visible = true;
            }
        }, this);
        this.icon_grp1.add(this.r_tool3);

        this.r_tool4 = game.add.sprite(375, 695, 'r_tool4');
        this.r_tool4.anchor.setTo(0.5);
        this.r_tool4.scale.setTo(0.98);
        this.r_tool4.inputEnabled = true;
        this.r_tool4.input.useHandCursor = true;
        this.r_tool4.events.onInputOver.add(this.btnOver, this);
        this.r_tool4.events.onInputOut.add(this.btnOut, this);
        this.r_tool4.events.onInputDown.add(function() {
            this.pnl_grp1.visible = false;
            // this.pnl_grp2.visible=false;
            this.pnl_grp3.visible = false;
            this.pnl_grp4.visible = true;
            this.pnl_grp5.visible = false;
            this.pnl_grp6.visible = false;
            this.pnl_grp7.visible = false;
            this.pnl_grp8.visible = false;
            this.d2_arr[2] = 1;
            if (this.d2_arr.indexOf(0) < 0) {
                this.arrow1.visible = true;
            }
        }, this);
        this.icon_grp1.add(this.r_tool4);

        /////////////////////





        this.arrow1 = game.add.sprite(375, 615, 'newarrow');
        this.arrow1.anchor.setTo(0.5);
        this.arrow1.scale.setTo(0.9);
        this.arrow1.angle = -90;
        this.arrow1.visible = false;
        this.icon_grp1.add(this.arrow1);
        this.arrow1.inputEnabled = true;
        this.arrow1.input.useHandCursor = true;
        this.arrow1.events.onInputOver.add(this.btnOver, this);
        this.arrow1.events.onInputOut.add(this.btnOut, this);
        this.arrow1.events.onInputDown.add(function() {
            this.icon_grp1.visible = false;
            this.icon_grp2.visible = true;
        }, this);

        this.icon_grp1.add(this.arrow1);


        // this.icon_grp1.visible=false; 
        this.icon_grp2 = game.add.group();
        this.icon_grp2.visible = false;

        this.r_tool6 = game.add.sprite(75, 675, 'r_tool6');
        this.r_tool6.anchor.setTo(0.5);
        this.r_tool6.scale.setTo(0.75);
        // this.r_tool6.rotation=-0.6;
        this.r_tool6.inputEnabled = true;
        this.r_tool6.input.useHandCursor = true;
        // this.r_tool6.events.onInputOver.add(this.btnOver,this);
        // this.r_tool6.events.onInputOut.add(this.btnOut,this);
        this.r_tool6.events.onInputDown.add(function() {
            this.pnl_grp1.visible = false;
            // this.pnl_grp2.visible=false;
            this.pnl_grp3.visible = false;
            this.pnl_grp4.visible = false;
            this.pnl_grp5.visible = true;
            this.pnl_grp6.visible = false;
            this.pnl_grp7.visible = false;
            this.pnl_grp8.visible = false;
        }, this);
        this.icon_grp2.add(this.r_tool6);




        this.r_tool5 = game.add.sprite(175, 675, 'r_tool5');
        this.r_tool5.anchor.setTo(0.5);
        this.r_tool5.scale.setTo(0.5);
        // this.r_tool5.rotation=-0.6;
        this.r_tool5.inputEnabled = true;
        this.r_tool5.input.useHandCursor = true;
        // this.r_tool5.events.onInputOver.add(this.btnOver,this);
        // this.r_tool5.events.onInputOut.add(this.btnOut,this);
        this.r_tool5.events.onInputDown.add(function() {
            this.pnl_grp1.visible = false;
            // this.pnl_grp2.visible=false;
            this.pnl_grp3.visible = false;
            this.pnl_grp4.visible = false;
            this.pnl_grp5.visible = false;
            this.pnl_grp6.visible = true;
            this.pnl_grp7.visible = false;
            this.pnl_grp8.visible = false;
        }, this);
        this.icon_grp2.add(this.r_tool5);


        //          this.removetool = game.add.sprite(210,675,'removetool');
        // this.removetool.anchor.setTo(0.5);
        // this.removetool.scale.setTo(0.75);
        // this.icon_grp2.add(this.removetool);         
        // // this.removetool.rotation=-0.6;
        // this.removetool.inputEnabled=true;
        // this.removetool.input.useHandCursor=true;
        // // this.removetool.events.onInputOver.add(this.btnOver,this);
        // // this.removetool.events.onInputOut.add(this.btnOut,this);
        // this.removetool.events.onInputDown.add(function(){
        //  this.mr_eyeshad0001.alpha=0;
        // this.mr_mascara0001.alpha=0;
        // this.mr_lip0001.alpha=0;
        // this.mr_blush0001.alpha=0;
        // this.mr_eyeball0001.loadTexture('mr_eyeball0001');


        // },this);

        this.r_tool9 = game.add.sprite(300, 675, 'r_tool9');
        this.r_tool9.anchor.setTo(0.5);
        this.r_tool9.scale.setTo(0.75);
        // this.r_tool9.rotation=-0.6;
        this.r_tool9.inputEnabled = true;
        this.r_tool9.input.useHandCursor = true;
        // this.r_tool9.events.onInputOver.add(this.btnOver,this);
        // this.r_tool9.events.onInputOut.add(this.btnOut,this);
        this.r_tool9.events.onInputDown.add(function() {
            this.pnl_grp1.visible = false;
            // this.pnl_grp2.visible=false;
            this.pnl_grp3.visible = false;
            this.pnl_grp4.visible = false;
            this.pnl_grp5.visible = false;
            this.pnl_grp6.visible = false;
            this.pnl_grp7.visible = true;
            this.pnl_grp8.visible = false;
        }, this);
        this.icon_grp2.add(this.r_tool9);


        this.r_tool10 = game.add.sprite(425, 675, 'r_tool10');
        this.r_tool10.anchor.setTo(0.5);
        this.r_tool10.scale.setTo(0.75);
        // this.r_tool10.rotation=-0.6;
        this.r_tool10.inputEnabled = true;
        this.r_tool10.input.useHandCursor = true;
        // this.r_tool10.events.onInputOver.add(this.btnOver,this);
        // this.r_tool10.events.onInputOut.add(this.btnOut,this);
        this.r_tool10.events.onInputDown.add(function() {
            this.pnl_grp1.visible = false;
            // this.pnl_grp2.visible=false;
            this.pnl_grp3.visible = false;
            this.pnl_grp4.visible = false;
            this.pnl_grp5.visible = false;
            this.pnl_grp6.visible = false;
            this.pnl_grp7.visible = false;
            this.pnl_grp8.visible = true;
        }, this);
        this.icon_grp2.add(this.r_tool10);


        this.arrow2 = game.add.sprite(50, 585, 'newarrow');
        this.arrow2.anchor.setTo(0.5);
        this.arrow2.scale.setTo(1.25);
        this.arrow2.angle = 90;
        this.icon_grp2.add(this.arrow2);
        this.arrow2.inputEnabled = true;
        this.arrow2.input.useHandCursor = true;
        this.arrow2.events.onInputOver.add(this.btnOver, this);
        this.arrow2.events.onInputOut.add(this.btnOut, this);
        this.arrow2.events.onInputDown.add(function() {
            this.icon_grp1.visible = true;
            this.icon_grp2.visible = false;
        }, this);



        /////////////////////
        this.morebtn = game.add.sprite(85, 730, 'btn4');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn2');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(420, 5, "soundicon");
        this.musicButton.scale.setTo(0.7);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        YYGGames.navigate("game", "logo");
    },
    moreLink: function() {
        YYGGames.navigate("game", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            MyShowAD('selection');

        });

    },
}



Main.menu = function() {}

Main.menu.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'introbg');
        this.levelGroup.add(this.introbg);
        // Main.rp_arr[7]=3
        this.rmr_grp = game.add.group();
        // this.rmr_grp.scale.setTo(0.9);
        this.rmr_grp.x = -40;

        this.mr_bhair0001 = game.add.sprite(268, 478, 'mr_bhair000' + Main.rp_arr[0]);
        this.mr_bhair0001.anchor.setTo(0.5);
        // this.mr_bhair0001.alpha=0;
        this.rmr_grp.add(this.mr_bhair0001);

        this.mr_body = game.add.sprite(252, 640, 'mr_body');
        this.mr_body.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_body);

        this.mr_drs = game.add.sprite(252, 640, 'mr_drs');
        this.mr_drs.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_drs);

        this.mr_head = game.add.sprite(265, 480, 'mr_head');
        this.mr_head.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_head);

        this.mr_dfltebrow = game.add.sprite(260, 273, 'mr_dfltebrow');
        this.mr_dfltebrow.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_dfltebrow);

        this.mr_eyeshad0001 = game.add.sprite(257, 294, 'mr_eyeshad000' + Main.rp_arr[3]);
        this.mr_eyeshad0001.anchor.setTo(0.5);
        // this.mr_eyeshad0001.alpha=0;
        this.rmr_grp.add(this.mr_eyeshad0001);

        this.mr_eye = game.add.sprite(262, 315, 'mr_eye');
        this.mr_eye.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_eye);

        this.mr_eyeball0001 = game.add.sprite(264, 320, 'mr_eyeball000' + Main.rp_arr[1]);
        this.mr_eyeball0001.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_eyeball0001);

        this.mr_mascara0001 = game.add.sprite(256, 310, 'mr_mascara000' + Main.rp_arr[4]);
        this.mr_mascara0001.anchor.setTo(0.5);
        // this.mr_mascara0001.alpha=0;
        this.rmr_grp.add(this.mr_mascara0001);

        this.mr_dfltlip = game.add.sprite(260, 406, 'mr_dfltlip');
        this.mr_dfltlip.anchor.setTo(0.5);
        this.rmr_grp.add(this.mr_dfltlip);

        this.mr_lip0001 = game.add.sprite(260, 406, 'mr_lip000' + Main.rp_arr[5]);
        this.mr_lip0001.anchor.setTo(0.5);
        // this.mr_lip0001.alpha=0;
        this.rmr_grp.add(this.mr_lip0001);

        this.mr_blush0001 = game.add.sprite(250, 370, 'mr_blush000' + Main.rp_arr[2]);
        this.mr_blush0001.anchor.setTo(0.5);
        // this.mr_blush0001.alpha=0;
        this.rmr_grp.add(this.mr_blush0001);

        // this.mr_dflthair = game.add.sprite(245,360,'mr_dflthair');
        // this.mr_dflthair.anchor.setTo(0.5);
        // this.rmr_grp.add(this.mr_dflthair);

        this.mr_fhair0001 = game.add.sprite(266, 480, 'mr_fhair000' + Main.rp_arr[0]);
        this.mr_fhair0001.anchor.setTo(0.5);
        // this.mr_fhair0001.alpha=0;
        this.rmr_grp.add(this.mr_fhair0001);

        this.mr_ear0001 = game.add.sprite(165, 388, 'mr_ear000' + Main.rp_arr[6]);
        this.mr_ear0001.anchor.setTo(0.5);
        // this.mr_ear0001.alpha=0;
        this.rmr_grp.add(this.mr_ear0001);

        this.mr_ear11 = game.add.sprite(346, 390, 'mr_ear000' + Main.rp_arr[6]);
        this.mr_ear11.anchor.setTo(0.5);
        // this.mr_ear11.alpha=0;
        this.rmr_grp.add(this.mr_ear11);

        this.mr_h1crown0001 = game.add.sprite(266, 480, 'mr_h1crown000' + Main.rp_arr[7]);
        this.mr_h1crown0001.anchor.setTo(0.5);
        // this.mr_h1crown0001.alpha=0;
        this.rmr_grp.add(this.mr_h1crown0001);

        this.mr_h2crown0001 = game.add.sprite(266, 480, 'mr_h2crown000' + Main.rp_arr[7]);
        this.mr_h2crown0001.anchor.setTo(0.5);
        // this.mr_h2crown0001.alpha=0;
        this.rmr_grp.add(this.mr_h2crown0001);

        this.mr_h3crown0001 = game.add.sprite(266, 480, 'mr_h3crown000' + Main.rp_arr[7]);
        this.mr_h3crown0001.anchor.setTo(0.5);
        // this.mr_h3crown0001.alpha=0;
        this.rmr_grp.add(this.mr_h3crown0001);

        this.mr_h4crown0001 = game.add.sprite(266, 480, 'mr_h4crown000' + Main.rp_arr[7]);
        this.mr_h4crown0001.anchor.setTo(0.5);
        // this.mr_h4crown0001.alpha=0;
        this.rmr_grp.add(this.mr_h4crown0001);

        this.mr_h5crown0001 = game.add.sprite(266, 480, 'mr_h5crown000' + Main.rp_arr[7]);
        this.mr_h5crown0001.anchor.setTo(0.5);
        // this.mr_h5crown0001.alpha=0;
        this.rmr_grp.add(this.mr_h5crown0001);

        if (Main.rp_arr[0] == 1) {
            this.mr_h1crown0001.visible = true;
            this.mr_h2crown0001.visible = false;
            this.mr_h3crown0001.visible = false;
            this.mr_h4crown0001.visible = false;
            this.mr_h5crown0001.visible = false;
        }

        if (Main.rp_arr[0] == 2) {
            this.mr_h1crown0001.visible = false;
            this.mr_h2crown0001.visible = true;
            this.mr_h3crown0001.visible = false;
            this.mr_h4crown0001.visible = false;
            this.mr_h5crown0001.visible = false;
        }

        if (Main.rp_arr[0] == 3) {
            this.mr_h1crown0001.visible = false;
            this.mr_h2crown0001.visible = false;
            this.mr_h3crown0001.visible = true;
            this.mr_h4crown0001.visible = false;
            this.mr_h5crown0001.visible = false;
        }

        if (Main.rp_arr[0] == 4) {
            this.mr_h1crown0001.visible = false;
            this.mr_h2crown0001.visible = false;
            this.mr_h3crown0001.visible = false;
            this.mr_h4crown0001.visible = true;
            this.mr_h5crown0001.visible = false;
        }
        if (Main.rp_arr[0] == 5) {
            this.mr_h1crown0001.visible = false;
            this.mr_h2crown0001.visible = false;
            this.mr_h3crown0001.visible = false;
            this.mr_h4crown0001.visible = false;
            this.mr_h5crown0001.visible = true;
        }

        //  if(Main.rp_arr[7]==1){
        //    this.mr_h1crown0001.visible=true;
        //    this.mr_h2crown0001.visible=false;
        //    this.mr_h3crown0001.visible=false;
        //    this.mr_h4crown0001.visible=false;
        //    this.mr_h5crown0001.visible=false;
        // }

        // if(Main.rp_arr[7]==2){
        //    this.mr_h1crown0001.visible=false;
        //    this.mr_h2crown0001.visible=true;
        //    this.mr_h3crown0001.visible=false;
        //    this.mr_h4crown0001.visible=false;
        //    this.mr_h5crown0001.visible=false;
        // }

        // if(Main.rp_arr[7]==3){
        //    this.mr_h1crown0001.visible=false;
        //    this.mr_h2crown0001.visible=false;
        //    this.mr_h3crown0001.visible=true;
        //    this.mr_h4crown0001.visible=false;
        //    this.mr_h5crown0001.visible=false;
        // }

        // if(Main.rp_arr[7]==4){
        //    this.mr_h1crown0001.visible=false;
        //    this.mr_h2crown0001.visible=false;
        //    this.mr_h3crown0001.visible=false;
        //    this.mr_h4crown0001.visible=true;
        //    this.mr_h5crown0001.visible=false;
        // }
        // if(Main.rp_arr[7]==5){
        //    this.mr_h1crown0001.visible=false;
        //    this.mr_h2crown0001.visible=false;
        //    this.mr_h3crown0001.visible=false;
        //    this.mr_h4crown0001.visible=false;
        //    this.mr_h5crown0001.visible=true;
        // }


        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        // this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(415, 5, "soundicon");
        this.musicButton.scale.setTo(0.75);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        YYGGames.navigate("game", "logo");
    },
    moreLink: function() {
        YYGGames.navigate("game", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            MyShowAD('selection');
        });

    },
}

Main.sdk_menu = function() {}

Main.sdk_menu.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 's_bg');
        this.levelGroup.add(this.introbg);


        this.lock = game.add.sprite(260, 440, 'lock');
        this.lock.anchor.setTo(0.5);
        // this.lock.addChild(this.lock_rect);
        this.lock.inputEnabled = true;
        this.lock.input.useHandCursor = true;
        this.lock.input.pixelPerfectClick = true;
        this.lock.input.pixelPerfectOver = true;
        this.lock.events.onInputDown.add(function() {

            const canShowReward = YYGGames.canShowReward(); //return true of flase

            console.log(YYGGames.canShowReward());

            switch (YYGGames.canShowReward()) {

                case true:
                    YYGGames.showReward({
                        beforeShowAd: () => {
                            Main.music.pause();
                            console.log("music pause");
                        },
                        afterShowAd: () => {
                            Main.music.resume();
                            console.log("music resume");
                        },
                        rewardComplete: () => {
                            console.log("rewarded")
                            this.lock.inputEnabled = false;
                            this.arrow.visible = false;
                            this.lock.visible = false;

                            // game.time.events.add(500, function () {
                            //     this.arrow.visible = true;
                            //     this.arrow.x = 200;
                            //     this.arrow.y = 570;
                            //     game.add.tween(this.arrow).to({ y: this.arrow.y + 10 }, 700, Phaser.Easing.Quadratic.Out, true, 0, -1);
                            // }, this);
                            // this.paperroll.inputEnabled = true;
                            // this.paperroll.input.useHandCursor = true;
                            // this.paperroll.events.onInputDown.add(this.pickPaper, this);
                            // this.paperroll.events.onInputUp.add(this.dropPaper, this);

                        },

                        rewardDismissed: () => {
                            console.log("reward dismissed")

                        }
                    })

                    break;
                case false:
                    this.ad_faild_btn.visible = true;
                    this.lock.visible = false;
                    this.arrow.visible = false;

                    break;

            }



        }, this);


        this.ad_faild_btn = game.add.sprite(250, 350, 'ad_faild_btn');
        this.ad_faild_btn.anchor.setTo(0.5);
        this.ad_faild_btn.visible = false;
        this.ad_faild_btn.inputEnabled = true;
        this.ad_faild_btn.input.useHandCursor = true;
        this.ad_faild_btn.input.pixelPerfectClick = true;
        this.ad_faild_btn.input.pixelPerfectOver = true;
        this.ad_faild_btn.events.onInputDown.add(function() {
            this.ad_faild_btn.visible = false;

            this.lock.visible = true;
            this.arrow.visible = true;
        }, this);


        this.arrowGroup = game.add.group();

        this.arrow = game.add.sprite(250, 320, 'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrowGroup.add(this.arrow);

        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow', 10, true);


        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(415, 5, "soundicon");
        this.musicButton.scale.setTo(0.75);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        YYGGames.navigate("game", "logo");
    },
    moreLink: function() {
        YYGGames.navigate("game", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            MyShowAD('elsaScreen');
        });

    },
}


//psssssssssssssssssssssssssss



Main.photoscence = function() {}

Main.photoscence.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        // this.introbg = game.add.sprite(0,0,'introbg');
        //       this.levelGroup = game.add.group();


        this.d_bg = game.add.sprite(0, 0, 'd_bg');


        // this.bg1 = game.add.sprite(0,0,'bg'+Main.roombg[0]);
        // this.levelGroup.add(this.bg1);
        // this.bg1.visible=false;
        this.bg1 = game.add.sprite(0, 0, 'bg1');
        this.levelGroup.add(this.bg1);
        this.bg1.visible = false;

        this.philips = game.add.sprite(175, 440, 'philips');
        this.philips.anchor.setTo(0.5);
        this.philips.scale.setTo(0.85);


        this.dressupgroup = game.add.group();

        this.dressupgroup.x = 115;
        this.dressupgroup.y = 120;
        this.dressupgroup.scale.setTo(0.8);


        this.dbhair0001 = game.add.sprite(250, 243.5, 'dbhair000' + Main.rp_arr[0]);
        this.dbhair0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.dbhair0001);

        this.dfull_bdress = game.add.sprite(259, 460, 'dfull_bdress');
        this.dfull_bdress.anchor.setTo(0.5);
        this.dfull_bdress.visible = false;
        this.dressupgroup.add(this.dfull_bdress);

        this.d_body = game.add.sprite(255, 487, 'd_body');
        this.d_body.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_body);

        // this.d_face = game.add.sprite(251.5,178.5,'d_face');
        // this.d_face.anchor.setTo(0.5);
        // this.dressupgroup.add(this.d_face);

        this.dm_face = game.add.sprite(251.5, 178.5, 'dm_face');
        this.dm_face.anchor.setTo(0.5);
        this.dressupgroup.add(this.dm_face);

        this.eyeshdw0001 = game.add.sprite(252, 172, 'eyeshdw000' + Main.rp_arr[3]);
        this.eyeshdw0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.eyeshdw0001);

        this.blush0001 = game.add.sprite(253, 204, 'blush000' + Main.rp_arr[2]);
        this.blush0001.anchor.setTo(0.5);
        this.blush0001.alpha = 0.85;
        this.dressupgroup.add(this.blush0001);

        this.lense0001 = game.add.sprite(253, 179, 'lense000' + Main.rp_arr[1]);
        this.lense0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.lense0001);

        this.eyelash0001 = game.add.sprite(251, 177, 'eyelash000' + Main.rp_arr[4]);
        this.eyelash0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.eyelash0001);

        this.lips0001 = game.add.sprite(252, 210, 'lips000' + Main.rp_arr[4]);
        this.lips0001.anchor.setTo(0.5);
        this.lips0001.scale.setTo(0.9);
        this.dressupgroup.add(this.lips0001);



        this.d_shoe0001 = game.add.sprite(238, 707.5, 'd_shoe000' + Main.d_arr[3]);
        this.d_shoe0001.anchor.setTo(0.5);
        // this.d_shoe0001.alpha=Main.d_alpha[3];
        this.dressupgroup.add(this.d_shoe0001);



        this.d_bottem0001 = game.add.sprite(262.5, 546.5, 'd_bottem000' + Main.d_arr[1]);
        this.d_bottem0001.anchor.setTo(0.5);
        // this.d_bottem0001.alpha=Main.d_alpha[1];
        this.dressupgroup.add(this.d_bottem0001);
        // this.d_bottem0001.visible=false;
        // 


        this.d_full0001 = game.add.sprite(259, 507.5, 'd_full000' + Main.d_arr[2]);
        this.d_full0001.anchor.setTo(0.5);
        // this.d_full0001.alpha=Main.d_alpha[2];
        this.dressupgroup.add(this.d_full0001);



        this.d_tophand1 = game.add.sprite(256, 486, 'd_tophand1');
        this.d_tophand1.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_tophand1);

        this.d_top0001 = game.add.sprite(265.5, 319.5, 'd_top000' + Main.d_arr[0]);
        this.d_top0001.anchor.setTo(0.5);
        // this.d_top0001.alpha=Main.d_alpha[0];
        this.dressupgroup.add(this.d_top0001);
        // this.d_top0001.visible=false;

        this.d_necklace0001 = game.add.sprite(251, 257, 'd_necklace000' + Main.d_arr[4]);
        this.d_necklace0001.anchor.setTo(0.5);
        // this.d_necklace0001.alpha=Main.d_alpha[4];
        this.dressupgroup.add(this.d_necklace0001);


        this.dfhair0001 = game.add.sprite(252.5, 245, 'dfhair000' + Main.rp_arr[0]);
        this.dfhair0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.dfhair0001);


        this.d_earrings1 = game.add.sprite(219, 207.5, 'd_earrings000' + Main.rp_arr[6]);
        this.d_earrings1.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_earrings1);



        this.d_earrings0001 = game.add.sprite(283, 207.5, 'd_earrings000' + Main.rp_arr[6]);
        this.d_earrings0001.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_earrings0001);


        this.d_tophand = game.add.sprite(262, 486, 'd_tophand');
        this.d_tophand.anchor.setTo(0.5);
        this.dressupgroup.add(this.d_tophand);



        // this.d_flower0001 = game.add.sprite(148,451,'d_flower000'+Main.d_arr[5]);
        // this.d_flower0001.anchor.setTo(0.5);
        // this.d_flower0001.scale.setTo(1.5);
        // this.d_flower0001.alpha=Main.d_alpha[5];
        // this.dressupgroup.add(this.d_flower0001);



        // this.d_flower0001 = game.add.sprite(148,451,'d_flower000'+Main.d_arr[5]);
        // this.d_flower0001.anchor.setTo(0.5);
        // // this.d_flower0001.alpha=Main.d_alpha[5];
        // this.d_flower0001.scale.setTo(1.1);


        // this.dressupgroup.add(this.d_flower0001);



        this.zoe1cap1 = game.add.sprite(252.5, 140, 'zoe1cap' + Main.rp_arr[7]);
        this.zoe1cap1.anchor.setTo(0.5);
        // this.zoe1cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe1cap1);

        this.zoe2cap1 = game.add.sprite(252.5, 140, 'zoe2cap' + Main.rp_arr[7]);
        this.zoe2cap1.anchor.setTo(0.5);
        this.zoe2cap1.scale.setTo(0.85);
        // this.zoe2cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe2cap1);



        this.zoe3cap1 = game.add.sprite(252.5, 140, 'zoe3cap' + Main.rp_arr[7]);
        this.zoe3cap1.anchor.setTo(0.5);
        this.zoe3cap1.scale.setTo(0.9);
        // this.zoe3cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe3cap1);



        this.zoe4cap1 = game.add.sprite(252.5, 140, 'zoe4cap' + Main.rp_arr[7]);
        this.zoe4cap1.anchor.setTo(0.5);
        // this.zoe4cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe4cap1);

        this.zoe5cap1 = game.add.sprite(252.5, 140, 'zoe5cap' + Main.rp_arr[7]);
        this.zoe5cap1.anchor.setTo(0.5);
        // this.zoe5cap1.alpha=Main.d_alpha[5];
        this.dressupgroup.add(this.zoe5cap1);




        if (Main.rp_arr[0] == 1) {
            this.zoe1cap1.visible = true;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = false;
        }

        if (Main.rp_arr[0] == 2) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = true;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = false;
        }

        if (Main.rp_arr[0] == 3) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = true;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = false;
        }

        if (Main.rp_arr[0] == 4) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = true;
            this.zoe5cap1.visible = false;
        }
        if (Main.rp_arr[0] == 5) {
            this.zoe1cap1.visible = false;
            this.zoe2cap1.visible = false;
            this.zoe3cap1.visible = false;
            this.zoe4cap1.visible = false;
            this.zoe5cap1.visible = true;
        }



        //    if(Main.d_arr[0]==1||Main.d_arr[1]==1){
        //         this.d_top0001.visible=true;
        //          this.d_bottem0001.visible=true;
        //          this.d_full0001.visible=false;

        // }



        //         if(Main.d_arr[2]==1){
        //          this.d_full0001.visible=true;
        //          this.d_top0001.visible=false;
        //          this.d_bottem0001.visible=false;
        //           }

        if (Main.fulldress_arr[0] == 1) {
            this.d_full0001.visible = true;
            this.d_bottem0001.visible = false;
            this.d_top0001.visible = false;

        } else {

            this.d_full0001.visible = false;
            this.d_bottem0001.visible = true;
            this.d_top0001.visible = true;
        }


        //   if(Main.d_arr[0]==2){
        //  this.d_full0001.visible=true;
        //  this.d_top0001.visible=false;
        //  this.d_bottem0001.visible=false;
        //   }



        this.count2 = 1;
        this.imagechange = game.add.sprite(200, 725, 'imagechange');
        this.imagechange.anchor.setTo(0.5);
        // this.imagechange.scale.setTo(0.8);
        this.imagechange.inputEnabled = true;
        this.imagechange.input.useHandCursor = true;
        this.imagechange.events.onInputOver.add(this.btnOver, this);
        this.imagechange.events.onInputOut.add(this.btnOut, this);
        this.imagechange.events.onInputDown.add(function() {
            this.count2++
                this.d_bg.visible = false;
            this.bg1.visible = true;
            this.bg1.loadTexture('bg' + this.count2);
            Main.roombg[0] = this.count2;
            if (this.count2 == 4) {
                this.count2 = 0;
            }
            this.camera.visible = true;
            this.camera.inputEnabled = true;
            this.camera.input.useHandCursor = true;
        }, this);








        this.newcamera = game.add.sprite(0, 0, 'newcamera');
        this.newcamera.visible = false;



        this.thumbGroup = game.add.group();
        game.load.crossOrigin = '*';
        this.randomId = game.rnd.integerInRange(0, RelatedGames.length - 1);
        this.thumbVar = game.add.sprite(140, 656, 'thumb_' + this.randomId);
        this.thumbVar.inputEnabled = true
        this.thumbVar.input.useHandCursor = true;
        this.thumbVar.events.onInputUp.add(this.thumbLink, this);
        this.thumbframeVar = game.add.sprite(135, 651, 'Tump_frame');
        this.thumbVar.height = this.thumbframeVar.height - 10;
        this.thumbVar.width = this.thumbframeVar.width - 10;
        this.thumbGroup.add(this.thumbVar);
        this.thumbGroup.add(this.thumbframeVar);
        this.thumbGroup.y = 150;

        this.camera = game.add.sprite(325, 725, 'camera');
        this.camera.anchor.setTo(0.5);
        this.camera.scale.setTo(0.75);
        this.camera.visible = false;
        // this.camera.inputEnabled=true;
        //    this.camera.input.useHandCursor=true;
        // this.camera.events.onInputOver.add(this.btnOver,this);
        // this.camera.events.onInputOut.add(this.btnOut,this);
        this.camera.events.onInputDown.add(function() {
            // this.camera.visible=false;
            this.camera.inputEnabled = false;
            this.newcamera.visible = true;

            game.camera.flash(0xFFFFFF, 500)
            // game.add.tween(this.thumbGroup).to({y:-37},700,Phaser.Easing.Quadratic.Out,true);
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
            this.camera.visible = false;

            game.add.tween(this.thumbGroup).to({
                y: -37
            }, 700, Phaser.Easing.Quadratic.Out, true);

            game.add.tween(this.morebtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);

        }, this);


        this.morebtn = game.add.sprite(75, 730, 'btn4');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn1');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(415, 5, "soundicon");
        this.musicButton.scale.setTo(0.75);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    thumbLink: function() {
        YYGGames.navigate("gameover", "thumb", RelatedGames[this.randomId]['id']);
    },
    openLink: function() {
        YYGGames.navigate("gameover", "logo");
    },
    moreLink: function() {
        YYGGames.navigate("gameover", "more");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            MyShowAD('selection');

            Main.d_arr = [1, 1, 1, 1, 1, 1, 1];
            Main.d_alpha = [1, 1, 1, 1, 0, 0, 0];

            Main.selectionarr = [0];
            Main.roombg = [0];

            Main.rp_arr = [1, 1, 1, 1, 1, 1, 1, 1];
            Main.fulldress_arr = [0];
        });

    },
}




// // ffffffffff

// Main.final_screen = function(){}

// Main.final_screen.prototype = {
//     create:function(){
//         this.levelGroup = game.add.group();


//         // this.d_bg = game.add.sprite(0,0,'d_bg');


// this.fullgroup=game.add.group();
// this.fullgroup.x=50
// this.fullgroup.y=125
// this.fullgroup.scale.setTo(0.8);

//         this.bg1 = game.add.sprite(0,0,'bg'+Main.roombg[0]);
//         this.fullgroup.add(this.bg1);
//         // // this.bg1.visible=false;
//         //         this.bg1 = game.add.sprite(32,0,'bg1');
//         //          this.bg1.scale.setTo(0.9)
//         // this.fullgroup.add(this.bg1);

//         // this.bg1.visible=false;

//          this.philips = game.add.sprite(175,385,'philips');
//          this.philips.anchor.setTo(0.5);
//          this.philips.scale.setTo(0.75);
//         this.fullgroup.add(this.philips);





//    this.dressupgroup=game.add.group();

//         this.dressupgroup.x=85;
//         this.dressupgroup.y=50;
//          this.dressupgroup.scale.setTo(0.8);

//         this.fullgroup.add(this.dressupgroup);

//          this.dbhair0001 = game.add.sprite(250,243.5,'dbhair000'+Main.rp_arr[0]);
//          this.dbhair0001.anchor.setTo(0.5); 
//          this.dressupgroup.add(this.dbhair0001);

//          this.dfull_bdress = game.add.sprite(259,460,'dfull_bdress');
//          this.dfull_bdress.anchor.setTo(0.5); 
//          this.dfull_bdress.visible=false; 
//          this.dressupgroup.add(this.dfull_bdress);

//          this.d_body = game.add.sprite(255,487,'d_body');
//          this.d_body.anchor.setTo(0.5);
//          this.dressupgroup.add(this.d_body);

//          // this.d_face = game.add.sprite(251.5,178.5,'d_face');
//          // this.d_face.anchor.setTo(0.5);
//          // this.dressupgroup.add(this.d_face);

//          this.dm_face = game.add.sprite(251.5,178.5,'dm_face');
//          this.dm_face.anchor.setTo(0.5);
//          this.dressupgroup.add(this.dm_face);

//          this.eyeshdw0001 = game.add.sprite(252,172,'eyeshdw000'+Main.rp_arr[3]);
//          this.eyeshdw0001.anchor.setTo(0.5);
//          this.dressupgroup.add(this.eyeshdw0001);

//          this.blush0001 = game.add.sprite(253,204,'blush000'+Main.rp_arr[2]);
//          this.blush0001.anchor.setTo(0.5);
//          this.dressupgroup.add(this.blush0001);

//          this.lense0001 = game.add.sprite(253,179,'lense000'+Main.rp_arr[1]);
//          this.lense0001.anchor.setTo(0.5);
//          this.dressupgroup.add(this.lense0001);

//          this.eyelash0001 = game.add.sprite(251,177,'eyelash000'+Main.rp_arr[5]);
//          this.eyelash0001.anchor.setTo(0.5);
//          this.dressupgroup.add(this.eyelash0001);

//          this.lips0001 = game.add.sprite(252,210,'lips000'+Main.rp_arr[4]);
//          this.lips0001.anchor.setTo(0.5);
//          this.dressupgroup.add(this.lips0001);



//          this.d_shoe0001 = game.add.sprite(238,707.5,'d_shoe000'+Main.d_arr[3]);
//          this.d_shoe0001.anchor.setTo(0.5);
//          // this.d_shoe0001.alpha=Main.d_alpha[3];
//          this.dressupgroup.add(this.d_shoe0001);


//          this.d_bottem0001 = game.add.sprite(262.5,546.5,'d_bottem000'+Main.d_arr[1]);
//          this.d_bottem0001.anchor.setTo(0.5);
//          this.d_bottem0001.alpha=Main.d_alpha[1];
//          this.dressupgroup.add(this.d_bottem0001);


//          this.d_top0001 = game.add.sprite(265.5,319.5,'d_top000'+Main.d_arr[0]);
//          this.d_top0001.anchor.setTo(0.5);
//          this.d_top0001.alpha=Main.d_alpha[0];
//          this.dressupgroup.add(this.d_top0001);


//          this.d_full0001 = game.add.sprite(259,507.5,'d_full000'+Main.d_arr[2]);
//          this.d_full0001.anchor.setTo(0.5);
//          this.d_full0001.alpha=Main.d_alpha[2];
//          this.dressupgroup.add(this.d_full0001);


//          this.d_necklace0001 = game.add.sprite(251,257,'d_necklace000'+Main.d_arr[4]);
//          this.d_necklace0001.anchor.setTo(0.5);
//          // this.d_necklace0001.alpha=Main.d_alpha[4];
//          this.dressupgroup.add(this.d_necklace0001);


//          this.dfhair0001 = game.add.sprite(252.5,245,'dfhair000'+Main.rp_arr[0]);
//          this.dfhair0001.anchor.setTo(0.5);
//          this.dressupgroup.add(this.dfhair0001);

//          this.d_earrings1 = game.add.sprite(219,207.5,'d_earrings000'+Main.rp_arr[6]);
//          this.d_earrings1.anchor.setTo(0.5);
//          this.dressupgroup.add(this.d_earrings1);



//          this.d_earrings0001 = game.add.sprite(283,207.5,'d_earrings000'+Main.rp_arr[6]);
//          this.d_earrings0001.anchor.setTo(0.5);
//          this.dressupgroup.add(this.d_earrings0001);


//          this.d_tophand = game.add.sprite(262,486,'d_tophand');
//          this.d_tophand.anchor.setTo(0.5);
//          this.dressupgroup.add(this.d_tophand);

//          this.d_tophand1 = game.add.sprite(256,486,'d_tophand1');
//          this.d_tophand1.anchor.setTo(0.5);
//          this.dressupgroup.add(this.d_tophand1);



//          this.d_flower0001 = game.add.sprite(148,451,'d_flower000'+Main.d_arr[5]);
//          this.d_flower0001.anchor.setTo(0.5);
//          // this.d_flower0001.alpha=Main.d_alpha[5];
//          this.d_flower0001.scale.setTo(1.1);         
//          this.dressupgroup.add(this.d_flower0001);



//          this.zoe1cap1 = game.add.sprite(252.5,140,'zoe1cap'+Main.rp_arr[7]);
//          this.zoe1cap1.anchor.setTo(0.5);
//          // this.zoe1cap1.alpha=Main.d_alpha[5];
//          this.dressupgroup.add(this.zoe1cap1);


//          this.zoe2cap1 = game.add.sprite(252.5,140,'zoe2cap'+Main.rp_arr[7]);
//          this.zoe2cap1.anchor.setTo(0.5);
//          // this.zoe2cap1.alpha=Main.d_alpha[5];
//          this.dressupgroup.add(this.zoe2cap1);


//          this.zoe3cap1 = game.add.sprite(252.5,140,'zoe3cap'+Main.rp_arr[7]);
//          this.zoe3cap1.anchor.setTo(0.5);
//          // this.zoe3cap1.alpha=Main.d_alpha[5];
//          this.dressupgroup.add(this.zoe3cap1);


//          this.zoe4cap1 = game.add.sprite(252.5,140,'zoe4cap'+Main.rp_arr[7]);
//          this.zoe4cap1.anchor.setTo(0.5);
//          // this.zoe4cap1.alpha=Main.d_alpha[5];
//          this.dressupgroup.add(this.zoe4cap1);

//          this.zoe5cap1 = game.add.sprite(252.5,140,'zoe5cap'+Main.rp_arr[7]);
//          this.zoe5cap1.anchor.setTo(0.5);
//          // this.zoe5cap1.alpha=Main.d_alpha[5];
//          this.dressupgroup.add(this.zoe5cap1);

//           // this.circle3= game.add.graphics(0,0);
//           // this.circle3.beginFill(0x000000,0);
//           // this.hairabove1.mask = this.circle3;

//    this.rect1 = game.add.graphics(45,125);
//             this.rect1.anchor.setTo(0.5);
//             // this.rect1.scale.setTo(0.9);
//             this.rect1.beginFill(0xFFFFFF, 0);
//             this.rect1.drawRect(0, 0, 504,450);
//           this.fullgroup.mask = this.rect1;

//             if (Main.rp_arr[0]==1) {
//             this.zoe1cap1.visible=true;
//             this.zoe2cap1.visible=false;
//             this.zoe3cap1.visible=false;
//             this.zoe4cap1.visible=false;
//             this.zoe5cap1.visible=false;
//             }

//             if (Main.rp_arr[0]==2) {
//             this.zoe1cap1.visible=false;
//             this.zoe2cap1.visible=true;
//             this.zoe3cap1.visible=false;
//             this.zoe4cap1.visible=false;
//             this.zoe5cap1.visible=false;
//             }

//             if (Main.rp_arr[0]==3) {
//             this.zoe1cap1.visible=false;
//             this.zoe2cap1.visible=false;
//             this.zoe3cap1.visible=true;
//             this.zoe4cap1.visible=false;
//             this.zoe5cap1.visible=false;
//             }

//            if (Main.rp_arr[0]==4) {
//             this.zoe1cap1.visible=false;
//             this.zoe2cap1.visible=false;
//             this.zoe3cap1.visible=false;
//             this.zoe4cap1.visible=true;
//             this.zoe5cap1.visible=false;
//             }
//             if (Main.rp_arr[0]==5) {
//             this.zoe1cap1.visible=false;
//             this.zoe2cap1.visible=false;
//             this.zoe3cap1.visible=false;
//             this.zoe4cap1.visible=false;
//             this.zoe5cap1.visible=true;
//             }



// //    if(Main.d_arr[0]==1||Main.d_arr[1]==1){
// //         this.d_top0001.visible=true;
// //          this.d_bottem0001.visible=true;
// //          this.d_full0001.visible=false;

// // }



// //         if(Main.d_arr[2]==1){
// //          this.d_full0001.visible=true;
// //          this.d_top0001.visible=false;
// //          this.d_bottem0001.visible=false;
// //           }

//  if (Main.fulldress_arr[0]==1) {
//                this.d_full0001.visible = true;
//                this.d_bottem0001.visible = false;
//                this.d_top0001.visible = false;

//            }else{

//                 this.d_full0001.visible = false;
//                this.d_bottem0001.visible = true;
//                this.d_top0001.visible = true;
//            }




//    this.framenew = game.add.sprite(0,0,'framenew');



//          this.morebtn = game.add.sprite(70,730,'btn4');
//          this.morebtn.anchor.setTo(0.5);
//          // this.morebtn.scale.setTo(0);
//          this.morebtn.inputEnabled = true;
//          this.morebtn.input.useHandCursor = true;
//          this.morebtn.events.onInputUp.add(this.moreLink, this);
//          this.morebtn.events.onInputOver.add(this.btnOver, this);
//          this.morebtn.events.onInputOut.add(this.btnOut, this);

//          this.playbtn = game.add.sprite(438,730,'btn1');
//          this.playbtn.anchor.setTo(0.5);
//          this.playbtn.scale.setTo(0);
//          this.playbtn.inputEnabled = true;
//          this.playbtn.input.useHandCursor = true;
//          this.playbtn.events.onInputUp.add(this.enterRoom, this);
//          this.playbtn.events.onInputOver.add(this.btnOver, this);
//          this.playbtn.events.onInputOut.add(this.btnOut, this);

//            this.thumbGroup=game.add.group();
//             game.load.crossOrigin='*';
//             this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
//             this.thumbVar = game.add.sprite(140, 656, 'thumb_'+this.randomId);
//             this.thumbVar.inputEnabled = true
//             this.thumbVar.input.useHandCursor = true;
//             this.thumbVar.events.onInputUp.add(this.thumbLink, this);
//             this.thumbframeVar = game.add.sprite(135, 651, 'Tump_frame'); 
//             this.thumbVar.height=this.thumbframeVar.height-10;
//             this.thumbVar.width=this.thumbframeVar.width-10;
//             this.thumbGroup.add(this.thumbVar);
//             this.thumbGroup.add(this.thumbframeVar);
//             this.thumbGroup.y=150;

//       if (Main.shutterOn[0]) {
//          this.shutter = game.add.sprite(0,0,'download');
//           game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//           game.add.tween(this.thumbGroup).to({y:-37},700,Phaser.Easing.Quadratic.Out,true);
//           game.add.tween(this.playbtn.scale).to({x:1,y:1},700,Phaser.Easing.Quadratic.Out,true);

//          },this);
//         }


//          this.logoVar = game.add.sprite(5, 5, 'logo');
//          this.logoVar.scale.setTo(0.8);
//          this.logoVar.inputEnabled = true
//          this.logoVar.input.useHandCursor = true;
//          this.logoVar.events.onInputUp.add(this.openLink, this);

//           this.musicButton = game.add.sprite(415,5,"soundicon");
//          this.musicButton.scale.setTo(0.75);
//          this.musicButton.inputEnabled = true
//          this.musicButton.input.useHandCursor = true;
//          this.musicButton.events.onInputUp.add(this.changemusic, this);
//          if (!game.sound.mute) {
//                this.musicButton.frame = 0;
//             }else{
//                this.musicButton.frame = 1;
//             }
//         },
// changemusic:function()
//          {
//             if (!game.sound.mute) {
//                this.musicButton.frame = 1;
//                game.sound.mute = true;
//             }else{
//                this.musicButton.frame = 0;
//                game.sound.mute = false;
//             };
//          },
// thumbLink:function()
// {
//    YYGGames.navigate("gameover","thumb",RelatedGames[this.randomId]['id']);
// },       
// openLink:function()
// {
//    YYGGames.navigate("gameover","logo");
// },
// moreLink:function()
// {
//    YYGGames.navigate("gameover","more");
// },
// btnOver:function(items){
//   items.scale.setTo(items.scale.x+0.05);
//       effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
//    effectVar.anchor.setTo(0.5);
//    effectVar.scale.setTo(2);
//    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
//    effectVar.animations.play('glitter', 30, false);
//    },
// btnOut:function(items){
//      items.scale.setTo(items.scale.x-0.05);

//    },
// removeGlitter:function(evt){
//       evt.kill(); 
//       },
//       enterRoom:function(){
//    game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//    MyShowAD('selection');

//       Main.d_arr=[1,1,1,1,1,1,1];
//    Main.d_alpha=[1,1,1,1,0,0,0];

// Main.selectionarr=[0];
// Main.roombg=[0];

//   Main.rp_arr=[1,1,1,1,1,1,1,1];
//           Main.fulldress_arr=[0];
//          });

//    },
// }

function MyShowAD(state) {
    console.error("MyShowAD");
    YYGGames.showInterstitial({
        beforeShowAd: () => {
            Main.music.pause();
        },
        afterShowAd: () => {
            Main.music.resume();
            game.state.start(state);
        }
    });
}






game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('sdk_menu', Main.sdk_menu);
game.state.add('hairspa', Main.hairspa);
game.state.add('photoscence', Main.photoscence);
game.state.add('final_screen', Main.final_screen);
game.state.add('dressup', Main.dressup);
game.state.add('menu', Main.menu);
game.state.add('selection', Main.selection);
game.state.add('r_makeup', Main.r_makeup);


YYGGames.startup({
    appName: "Beauty-Makeup-Salon",
    channel: 2,
    complete: () => {
        game.state.start('boot');
    }
})