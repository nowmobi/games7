(function(lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

    // library properties:
    lib.properties = {
        width: 800,
        height: 600,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
                src: "images/bg1213.jpg?1539079936363",
                id: "bg1213"
            },
            {
                src: "images/Bitmap1copy.png?1539079936363",
                id: "Bitmap1copy"
            },
            {
                src: "images/Bitmap290.png?1539079936363",
                id: "Bitmap290"
            },
            {
                src: "images/Bitmap291.png?1539079936363",
                id: "Bitmap291"
            },
            {
                src: "images/Bitmap292.png?1539079936363",
                id: "Bitmap292"
            },
            {
                src: "images/Bitmap293.png?1539079936363",
                id: "Bitmap293"
            },
            {
                src: "images/Bitmap294.png?1539079936363",
                id: "Bitmap294"
            },
            {
                src: "images/Bitmap295.png?1539079936363",
                id: "Bitmap295"
            },
            {
                src: "images/Bitmap296.png?1539079936363",
                id: "Bitmap296"
            },
            {
                src: "images/Bitmap297.png?1539079936363",
                id: "Bitmap297"
            },
            {
                src: "images/Bitmap298.png?1539079936363",
                id: "Bitmap298"
            },
            {
                src: "images/Bitmap299.png?1539079936363",
                id: "Bitmap299"
            },
            {
                src: "images/Bitmap300.png?1539079936363",
                id: "Bitmap300"
            },
            {
                src: "images/Bitmap301.png?1539079936363",
                id: "Bitmap301"
            },
            {
                src: "images/Bitmap344.png?1539079936364",
                id: "Bitmap344"
            },
            {
                src: "images/Bitmap345.png?1539079936364",
                id: "Bitmap345"
            },
            {
                src: "images/Bitmap349.png?1539079936364",
                id: "Bitmap349"
            },
            {
                src: "images/game_atlas_.png?1539079936345",
                id: "game_atlas_"
            },
            {
                src: "images/game_atlas_2.png?1539079936345",
                id: "game_atlas_2"
            },
            {
                src: "images/game_atlas_3.png?1539079936345",
                id: "game_atlas_3"
            },
            {
                src: "images/game_atlas_4.png?1539079936345",
                id: "game_atlas_4"
            },
            {
                src: "images/game_atlas_5.png?1539079936345",
                id: "game_atlas_5"
            },
            {
                src: "images/game_atlas_6.png?1539079936345",
                id: "game_atlas_6"
            },
            {
                src: "images/game_atlas_7.png?1539079936345",
                id: "game_atlas_7"
            },
            {
                src: "images/game_atlas_8.png?1539079936345",
                id: "game_atlas_8"
            },
            {
                src: "images/game_atlas_9.png?1539079936345",
                id: "game_atlas_9"
            },
            {
                src: "images/game_atlas_10.png?1539079936345",
                id: "game_atlas_10"
            },
            {
                src: "images/game_atlas_11.png?1539079936346",
                id: "game_atlas_11"
            },
            {
                src: "images/game_atlas_12.png?1539079936346",
                id: "game_atlas_12"
            },
            {
                src: "images/game_atlas_13.png?1539079936346",
                id: "game_atlas_13"
            },
            {
                src: "images/game_atlas_14.png?1539079936346",
                id: "game_atlas_14"
            },
            {
                src: "images/game_atlas_15.png?1539079936346",
                id: "game_atlas_15"
            },
            {
                src: "images/game_atlas_16.png?1539079936346",
                id: "game_atlas_16"
            },
            {
                src: "images/game_atlas_17.png?1539079936346",
                id: "game_atlas_17"
            },
            {
                src: "images/game_atlas_18.png?1539079936346",
                id: "game_atlas_18"
            },
            {
                src: "images/game_atlas_19.png?1539079936346",
                id: "game_atlas_19"
            },
            {
                src: "images/game_atlas_20.png?1539079936346",
                id: "game_atlas_20"
            },
            {
                src: "images/game_atlas_21.png?1539079936347",
                id: "game_atlas_21"
            },
            {
                src: "images/game_atlas_22.png?1539079936347",
                id: "game_atlas_22"
            },
            {
                src: "images/game_atlas_23.png?1539079936347",
                id: "game_atlas_23"
            },
            {
                src: "images/game_atlas_24.png?1539079936347",
                id: "game_atlas_24"
            },
            {
                src: "images/game_atlas_25.png?1539079936347",
                id: "game_atlas_25"
            },
            {
                src: "images/game_atlas_26.png?1539079936347",
                id: "game_atlas_26"
            },
            {
                src: "images/game_atlas_27.png?1539079936347",
                id: "game_atlas_27"
            },
            {
                src: "images/game_atlas_28.png?1539079936347",
                id: "game_atlas_28"
            },
            {
                src: "images/game_atlas_29.png?1539079936347",
                id: "game_atlas_29"
            },
            {
                src: "images/game_atlas_30.png?1539079936348",
                id: "game_atlas_30"
            },
            {
                src: "images/game_atlas_31.png?1539079936348",
                id: "game_atlas_31"
            },
            {
                src: "images/game_atlas_32.png?1539079936348",
                id: "game_atlas_32"
            },
            {
                src: "images/game_atlas_33.png?1539079936348",
                id: "game_atlas_33"
            },
            {
                src: "images/game_atlas_34.png?1539079936348",
                id: "game_atlas_34"
            },
            {
                src: "images/game_atlas_35.png?1539079936348",
                id: "game_atlas_35"
            },
            {
                src: "images/game_atlas_36.png?1539079936349",
                id: "game_atlas_36"
            },
            {
                src: "images/game_atlas_37.png?1539079936349",
                id: "game_atlas_37"
            },
            {
                src: "images/game_atlas_38.png?1539079936350",
                id: "game_atlas_38"
            },
            {
                src: "sounds/bgmusic.mp3?1539079936364",
                id: "bgmusic"
            },
            {
                src: "sounds/sparkles.mp3?1539079936364",
                id: "sparkles"
            }
        ]
    };



    lib.ssMetadata = [{
            name: "game_atlas_",
            frames: [
                [0, 0, 553, 553]
            ]
        },
        {
            name: "game_atlas_2",
            frames: [
                [0, 0, 431, 469]
            ]
        },
        {
            name: "game_atlas_3",
            frames: [
                [0, 0, 431, 469]
            ]
        },
        {
            name: "game_atlas_4",
            frames: [
                [0, 0, 426, 464]
            ]
        },
        {
            name: "game_atlas_5",
            frames: [
                [0, 0, 426, 464]
            ]
        },
        {
            name: "game_atlas_6",
            frames: [
                [0, 0, 426, 464]
            ]
        },
        {
            name: "game_atlas_7",
            frames: [
                [0, 0, 426, 464]
            ]
        },
        {
            name: "game_atlas_8",
            frames: [
                [0, 0, 426, 464]
            ]
        },
        {
            name: "game_atlas_9",
            frames: [
                [0, 0, 426, 464]
            ]
        },
        {
            name: "game_atlas_10",
            frames: [
                [0, 0, 426, 464]
            ]
        },
        {
            name: "game_atlas_11",
            frames: [
                [0, 0, 426, 464]
            ]
        },
        {
            name: "game_atlas_12",
            frames: [
                [0, 0, 414, 364]
            ]
        },
        {
            name: "game_atlas_13",
            frames: [
                [0, 0, 414, 363]
            ]
        },
        {
            name: "game_atlas_14",
            frames: [
                [0, 0, 431, 347]
            ]
        },
        {
            name: "game_atlas_15",
            frames: [
                [0, 0, 431, 347]
            ]
        },
        {
            name: "game_atlas_16",
            frames: [
                [0, 0, 411, 363]
            ]
        },
        {
            name: "game_atlas_17",
            frames: [
                [0, 0, 426, 343]
            ]
        },
        {
            name: "game_atlas_18",
            frames: [
                [0, 0, 403, 357]
            ]
        },
        {
            name: "game_atlas_19",
            frames: [
                [0, 0, 394, 365],
                [396, 0, 394, 365]
            ]
        },
        {
            name: "game_atlas_20",
            frames: [
                [0, 0, 420, 338]
            ]
        },
        {
            name: "game_atlas_21",
            frames: [
                [0, 0, 400, 343],
                [402, 0, 393, 346]
            ]
        },
        {
            name: "game_atlas_22",
            frames: [
                [0, 0, 388, 344],
                [390, 0, 368, 362]
            ]
        },
        {
            name: "game_atlas_23",
            frames: [
                [0, 0, 389, 334],
                [391, 0, 331, 373]
            ]
        },
        {
            name: "game_atlas_24",
            frames: [
                [333, 0, 318, 383],
                [0, 0, 331, 373]
            ]
        },
        {
            name: "game_atlas_25",
            frames: [
                [320, 0, 323, 375],
                [0, 0, 318, 383]
            ]
        },
        {
            name: "game_atlas_26",
            frames: [
                [0, 0, 317, 372],
                [319, 260, 452, 256],
                [319, 0, 454, 258]
            ]
        },
        {
            name: "game_atlas_27",
            frames: [
                [0, 0, 301, 384],
                [303, 0, 301, 384]
            ]
        },
        {
            name: "game_atlas_28",
            frames: [
                [0, 0, 289, 375],
                [291, 0, 279, 372]
            ]
        },
        {
            name: "game_atlas_29",
            frames: [
                [308, 0, 428, 225],
                [0, 325, 437, 221],
                [0, 0, 306, 323]
            ]
        },
        {
            name: "game_atlas_30",
            frames: [
                [0, 227, 434, 217],
                [0, 0, 428, 225]
            ]
        },
        {
            name: "game_atlas_31",
            frames: [
                [0, 0, 434, 217],
                [0, 219, 434, 217],
                [436, 0, 305, 304]
            ]
        },
        {
            name: "game_atlas_32",
            frames: [
                [0, 306, 421, 211],
                [306, 0, 421, 211],
                [423, 213, 282, 300],
                [0, 0, 304, 304]
            ]
        },
        {
            name: "game_atlas_33",
            frames: [
                [375, 0, 373, 224],
                [375, 226, 373, 224],
                [0, 227, 373, 224],
                [0, 0, 373, 225]
            ]
        },
        {
            name: "game_atlas_34",
            frames: [
                [374, 0, 372, 223],
                [374, 225, 372, 223],
                [0, 226, 372, 223],
                [0, 0, 372, 224]
            ]
        },
        {
            name: "game_atlas_35",
            frames: [
                [0, 0, 372, 223],
                [374, 0, 372, 223],
                [0, 225, 372, 223],
                [374, 225, 259, 228]
            ]
        },
        {
            name: "game_atlas_36",
            frames: [
                [520, 230, 223, 217],
                [0, 0, 258, 228],
                [0, 230, 258, 228],
                [260, 0, 258, 228],
                [520, 0, 258, 228],
                [260, 230, 258, 227]
            ]
        },
        {
            name: "game_atlas_37",
            frames: [
                [225, 0, 200, 200],
                [225, 202, 200, 200],
                [0, 0, 223, 217],
                [427, 201, 227, 161],
                [244, 404, 239, 136],
                [656, 0, 141, 205],
                [0, 438, 242, 150],
                [485, 364, 178, 181],
                [0, 219, 223, 217],
                [427, 0, 200, 199]
            ]
        },
        {
            name: "game_atlas_38",
            frames: [
                [456, 159, 128, 128],
                [0, 0, 141, 205],
                [247, 240, 131, 95],
                [152, 417, 84, 93],
                [321, 337, 46, 33],
                [0, 456, 106, 61],
                [0, 240, 168, 96],
                [599, 134, 189, 117],
                [599, 0, 186, 132],
                [143, 159, 311, 79],
                [238, 465, 69, 63],
                [444, 289, 97, 97],
                [434, 0, 163, 157],
                [397, 506, 62, 63],
                [143, 0, 289, 100],
                [333, 102, 74, 44],
                [108, 512, 74, 44],
                [0, 519, 74, 44],
                [714, 253, 62, 150],
                [0, 207, 75, 22],
                [380, 240, 62, 161],
                [586, 253, 62, 161],
                [650, 253, 62, 161],
                [170, 240, 75, 175],
                [0, 338, 74, 116],
                [461, 534, 92, 35],
                [143, 102, 101, 47],
                [246, 102, 85, 45],
                [76, 338, 74, 116],
                [444, 388, 74, 116],
                [321, 403, 74, 116],
                [714, 405, 74, 116],
                [520, 416, 74, 116],
                [596, 416, 74, 116],
                [247, 337, 72, 126],
                [309, 521, 74, 44],
                [672, 523, 74, 44],
                [184, 530, 74, 44]
            ]
        }
    ];


    // symbols:



    (lib._024_scale_arrow_fullscreen_expand_zoom_2128 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._111 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._112 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib._30 = function() {
        this.spriteSheet = ss["game_atlas_30"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._31 = function() {
        this.spriteSheet = ss["game_atlas_32"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._32 = function() {
        this.spriteSheet = ss["game_atlas_29"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._33 = function() {
        this.spriteSheet = ss["game_atlas_29"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib._34 = function() {
        this.spriteSheet = ss["game_atlas_31"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._34pngcopy = function() {
        this.spriteSheet = ss["game_atlas_31"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib._35 = function() {
        this.spriteSheet = ss["game_atlas_4"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._36 = function() {
        this.spriteSheet = ss["game_atlas_5"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._37 = function() {
        this.spriteSheet = ss["game_atlas_6"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._39 = function() {
        this.spriteSheet = ss["game_atlas_7"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._40 = function() {
        this.spriteSheet = ss["game_atlas_2"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._41 = function() {
        this.spriteSheet = ss["game_atlas_19"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._42pngcopy2 = function() {
        this.spriteSheet = ss["game_atlas_23"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._43 = function() {
        this.spriteSheet = ss["game_atlas_22"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._44pngcopy2 = function() {
        this.spriteSheet = ss["game_atlas_20"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._45 = function() {
        this.spriteSheet = ss["game_atlas_27"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._46 = function() {
        this.spriteSheet = ss["game_atlas_25"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._47 = function() {
        this.spriteSheet = ss["game_atlas_23"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib._48pngcopy2 = function() {
        this.spriteSheet = ss["game_atlas_26"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._49 = function() {
        this.spriteSheet = ss["game_atlas_24"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._50pngcopy2 = function() {
        this.spriteSheet = ss["game_atlas_36"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._50pngcopy3 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib._51 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib._52 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib._53 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib._53pngcopy = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib._54 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.bg1213 = function() {
        this.initialize(img.bg1213);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1200, 900);


    (lib.Bitmap1copy = function() {
        this.initialize(img.Bitmap1copy);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 892, 304);


    (lib.Bitmap168 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap201 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap283 = function() {
        this.spriteSheet = ss["game_atlas_34"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap284 = function() {
        this.spriteSheet = ss["game_atlas_34"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap285 = function() {
        this.spriteSheet = ss["game_atlas_34"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap286 = function() {
        this.spriteSheet = ss["game_atlas_35"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap287 = function() {
        this.spriteSheet = ss["game_atlas_35"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap288 = function() {
        this.spriteSheet = ss["game_atlas_35"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap289 = function() {
        this.spriteSheet = ss["game_atlas_14"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap290 = function() {
        this.initialize(img.Bitmap290);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 867);


    (lib.Bitmap291 = function() {
        this.initialize(img.Bitmap291);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 867);


    (lib.Bitmap292 = function() {
        this.initialize(img.Bitmap292);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 867);


    (lib.Bitmap293 = function() {
        this.initialize(img.Bitmap293);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 867);


    (lib.Bitmap294 = function() {
        this.initialize(img.Bitmap294);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 868);


    (lib.Bitmap295 = function() {
        this.initialize(img.Bitmap295);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 867);


    (lib.Bitmap296 = function() {
        this.initialize(img.Bitmap296);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 844);


    (lib.Bitmap297 = function() {
        this.initialize(img.Bitmap297);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 844);


    (lib.Bitmap298 = function() {
        this.initialize(img.Bitmap298);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 844);


    (lib.Bitmap299 = function() {
        this.initialize(img.Bitmap299);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 844);


    (lib.Bitmap300 = function() {
        this.initialize(img.Bitmap300);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 844);


    (lib.Bitmap301 = function() {
        this.initialize(img.Bitmap301);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 406, 844);


    (lib.Bitmap302 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap303 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap304 = function() {
        this.spriteSheet = ss["game_atlas_33"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap305 = function() {
        this.spriteSheet = ss["game_atlas_33"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap306 = function() {
        this.spriteSheet = ss["game_atlas_33"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap307 = function() {
        this.spriteSheet = ss["game_atlas_34"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap308 = function() {
        this.spriteSheet = ss["game_atlas_33"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap309 = function() {
        this.spriteSheet = ss["game_atlas_30"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap310 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap311 = function() {
        this.spriteSheet = ss["game_atlas_26"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap312 = function() {
        this.spriteSheet = ss["game_atlas_26"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap313 = function() {
        this.spriteSheet = ss["game_atlas_32"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap314 = function() {
        this.spriteSheet = ss["game_atlas_3"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap315 = function() {
        this.spriteSheet = ss["game_atlas_8"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap316 = function() {
        this.spriteSheet = ss["game_atlas_9"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap317 = function() {
        this.spriteSheet = ss["game_atlas_10"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap318 = function() {
        this.spriteSheet = ss["game_atlas_11"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap319 = function() {
        this.spriteSheet = ss["game_atlas_15"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap320 = function() {
        this.spriteSheet = ss["game_atlas_19"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap321 = function() {
        this.spriteSheet = ss["game_atlas_21"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap322 = function() {
        this.spriteSheet = ss["game_atlas_17"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap323 = function() {
        this.spriteSheet = ss["game_atlas_18"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap324 = function() {
        this.spriteSheet = ss["game_atlas_28"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap325 = function() {
        this.spriteSheet = ss["game_atlas_28"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap326 = function() {
        this.spriteSheet = ss["game_atlas_25"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap327 = function() {
        this.spriteSheet = ss["game_atlas_24"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap328 = function() {
        this.spriteSheet = ss["game_atlas_27"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap329 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap330 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap331 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap332 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap333 = function() {
        this.spriteSheet = ss["game_atlas_12"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap334 = function() {
        this.spriteSheet = ss["game_atlas_36"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap335 = function() {
        this.spriteSheet = ss["game_atlas_16"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap336 = function() {
        this.spriteSheet = ss["game_atlas_13"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap337 = function() {
        this.spriteSheet = ss["game_atlas_21"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap338 = function() {
        this.spriteSheet = ss["game_atlas_36"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap339 = function() {
        this.spriteSheet = ss["game_atlas_35"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap34 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap340 = function() {
        this.spriteSheet = ss["game_atlas_36"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap341 = function() {
        this.spriteSheet = ss["game_atlas_36"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap342 = function() {
        this.spriteSheet = ss["game_atlas_36"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap344 = function() {
        this.initialize(img.Bitmap344);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 519, 613);


    (lib.Bitmap345 = function() {
        this.initialize(img.Bitmap345);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 665, 1028);


    (lib.Bitmap347 = function() {
        this.spriteSheet = ss["game_atlas_32"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap349 = function() {
        this.initialize(img.Bitmap349);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1048, 1045);


    (lib.Bitmap431111111 = function() {
        this.spriteSheet = ss["game_atlas_31"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap7copy21 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap83 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap84 = function() {
        this.spriteSheet = ss["game_atlas_22"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap86 = function() {
        this.spriteSheet = ss["game_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap87 = function() {
        this.spriteSheet = ss["game_atlas_32"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap88 = function() {
        this.spriteSheet = ss["game_atlas_29"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.buton200 = function() {
        this.spriteSheet = ss["game_atlas_37"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.buton = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.dov = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.googleplaybutton = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.image100 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.image102 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.image104 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.image526 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.image527 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.image530 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.image533 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.image536 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.image539 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.image545 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.image546 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.image588 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.image603 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.image66 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.image68 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.image70 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.image72 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.image74 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.image76 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.image92 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.image94 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.image96 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.image98 = function() {
        this.spriteSheet = ss["game_atlas_38"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.Symbol56 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap83();
        this.instance.parent = this;
        this.instance.setTransform(-232, -139);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-232, -139, 97, 97);


    (lib.Symbol55 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap1copy();
        this.instance.parent = this;
        this.instance.setTransform(-576, -319, 0.484, 0.484);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-576, -319, 431.6, 147.1);


    (lib.Symbol54 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap431111111();
        this.instance.parent = this;
        this.instance.setTransform(-266, -238, 0.269, 0.327);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-266, -238, 82.1, 99.4);


    (lib.Symbol53 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            g1: 1,
            g2: 2,
            g3: 3,
            g4: 4,
            g5: 5
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

        // Layer 1
        this.instance = new lib.Bitmap290();
        this.instance.parent = this;
        this.instance.setTransform(2618, -1185);

        this.instance_1 = new lib.Bitmap291();
        this.instance_1.parent = this;
        this.instance_1.setTransform(2618, -1185);

        this.instance_2 = new lib.Bitmap292();
        this.instance_2.parent = this;
        this.instance_2.setTransform(2618, -1185);

        this.instance_3 = new lib.Bitmap293();
        this.instance_3.parent = this;
        this.instance_3.setTransform(2618, -1185);

        this.instance_4 = new lib.Bitmap294();
        this.instance_4.parent = this;
        this.instance_4.setTransform(2618, -1186);

        this.instance_5 = new lib.Bitmap295();
        this.instance_5.parent = this;
        this.instance_5.setTransform(2618, -1185);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(2618, -1185, 406, 867);


    (lib.Symbol52 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            f1: 1,
            f2: 2,
            f3: 3,
            f4: 4,
            f5: 5
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

        // Layer 1
        this.instance = new lib._50pngcopy2();
        this.instance.parent = this;
        this.instance.setTransform(15704, -1042);

        this.instance_1 = new lib._50pngcopy3();
        this.instance_1.parent = this;
        this.instance_1.setTransform(11236, 324);

        this.instance_2 = new lib._54();
        this.instance_2.parent = this;
        this.instance_2.setTransform(11269, 419, 0.78, 0.78);

        this.instance_3 = new lib._52();
        this.instance_3.parent = this;
        this.instance_3.setTransform(11283, 437, 0.704, 0.704);

        this.instance_4 = new lib._53();
        this.instance_4.parent = this;
        this.instance_4.setTransform(11278, 345, 0.921, 0.921);

        this.instance_5 = new lib._51();
        this.instance_5.parent = this;
        this.instance_5.setTransform(11284, 415, 0.818, 0.818);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(15704, -1042, 223, 217);


    (lib.Symbol51 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            e1: 1,
            e2: 2,
            e3: 3,
            e4: 4,
            e5: 5
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

        // Layer 1
        this.instance = new lib._45();
        this.instance.parent = this;
        this.instance.setTransform(16320, -2499);

        this.instance_1 = new lib._48pngcopy2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(13152, -1311, 0.981, 1);

        this.instance_2 = new lib._49();
        this.instance_2.parent = this;
        this.instance_2.setTransform(13138, -1314);

        this.instance_3 = new lib._47();
        this.instance_3.parent = this;
        this.instance_3.setTransform(13145, -1309);

        this.instance_4 = new lib._46();
        this.instance_4.parent = this;
        this.instance_4.setTransform(13153, -1310, 0.893, 1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance,
                p: {
                    x: 16320,
                    y: -2499
                }
            }]
        }).to({
            state: [{
                t: this.instance,
                p: {
                    x: 13147,
                    y: -1315
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(16320, -2499, 301, 384);


    (lib.Symbol50 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            d1: 1,
            d2: 2,
            d3: 3,
            d4: 4,
            d5: 5
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

        // Layer 1
        this.instance = new lib.Bitmap289();
        this.instance.parent = this;
        this.instance.setTransform(14314, -1320);

        this.instance_1 = new lib._41();
        this.instance_1.parent = this;
        this.instance_1.setTransform(11262, -666);

        this.instance_2 = new lib._42pngcopy2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(11248, -648, 1.027, 1.027);

        this.instance_3 = new lib._44pngcopy2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(11241, -637, 1.015, 1.015);

        this.instance_4 = new lib._43();
        this.instance_4.parent = this;
        this.instance_4.setTransform(11253, -658, 1.038, 1.038);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance,
                p: {
                    x: 14314,
                    y: -1320
                }
            }]
        }).to({
            state: [{
                t: this.instance,
                p: {
                    x: 11241,
                    y: -637
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(14314, -1320, 431, 347);


    (lib.Symbol49 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            c1: 1,
            c2: 2,
            c3: 3,
            c4: 4,
            c5: 5
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

        // Layer 1
        this.instance = new lib._40();
        this.instance.parent = this;
        this.instance.setTransform(8136, -331);

        this.instance_1 = new lib._39();
        this.instance_1.parent = this;
        this.instance_1.setTransform(5183, 360);

        this.instance_2 = new lib._37();
        this.instance_2.parent = this;
        this.instance_2.setTransform(5183, 360);

        this.instance_3 = new lib._36();
        this.instance_3.parent = this;
        this.instance_3.setTransform(5183, 360);

        this.instance_4 = new lib._35();
        this.instance_4.parent = this;
        this.instance_4.setTransform(5183, 360);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance,
                p: {
                    x: 8136,
                    y: -331
                }
            }]
        }).to({
            state: [{
                t: this.instance,
                p: {
                    x: 5180,
                    y: 358
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(8136, -331, 431, 469);


    (lib.Symbol48 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            b1: 1,
            b2: 2,
            b3: 3,
            b4: 4,
            b5: 5
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

        // Layer 1
        this.instance = new lib._34();
        this.instance.parent = this;
        this.instance.setTransform(7794, -682);

        this.instance_1 = new lib._34pngcopy();
        this.instance_1.parent = this;
        this.instance_1.setTransform(5322, -382);

        this.instance_2 = new lib._33();
        this.instance_2.parent = this;
        this.instance_2.setTransform(5320, -384);

        this.instance_3 = new lib._32();
        this.instance_3.parent = this;
        this.instance_3.setTransform(5325, -386);

        this.instance_4 = new lib._31();
        this.instance_4.parent = this;
        this.instance_4.setTransform(5328, -379);

        this.instance_5 = new lib._30();
        this.instance_5.parent = this;
        this.instance_5.setTransform(5322, -382);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(7794, -682, 434, 217);


    (lib.Symbol47 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            a1: 1,
            a2: 2,
            a3: 3,
            a4: 4,
            a5: 5
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

        // Layer 1
        this.instance = new lib.Bitmap283();
        this.instance.parent = this;
        this.instance.setTransform(4165, -238);

        this.instance_1 = new lib.Bitmap284();
        this.instance_1.parent = this;
        this.instance_1.setTransform(2592, -171);

        this.instance_2 = new lib.Bitmap285();
        this.instance_2.parent = this;
        this.instance_2.setTransform(2592, -171);

        this.instance_3 = new lib.Bitmap286();
        this.instance_3.parent = this;
        this.instance_3.setTransform(2592, -171);

        this.instance_4 = new lib.Bitmap287();
        this.instance_4.parent = this;
        this.instance_4.setTransform(2592, -171);

        this.instance_5 = new lib.Bitmap288();
        this.instance_5.parent = this;
        this.instance_5.setTransform(2592, -171);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(4165, -238, 372, 223);


    (lib.Symbol46 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap339();
        this.instance.parent = this;
        this.instance.setTransform(694, -1717, 0.868, 0.868);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(680, -1742, 1.277, 1.277);

        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 9), null, new cjs.Matrix2D(1, 0, 0, 1, -11.3, -75.6)).s().p("AhwAiIAAhDIDhAAIAABDg");
        this.shape.setTransform(459.4, -654.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(448, -1742, 487.3, 1091);


    (lib.Symbol45 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap338();
        this.instance.parent = this;
        this.instance.setTransform(623, -1943, 0.892, 0.892);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(609, -1971, 1.302, 1.302);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(609, -1971, 260.4, 259.1);


    (lib.Symbol44 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap341();
        this.instance.parent = this;
        this.instance.setTransform(918, -1545, 0.817, 0.817);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(898, -1572, 1.259, 1.259);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(898, -1572, 251.8, 250.5);


    (lib.Symbol43 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap340();
        this.instance.parent = this;
        this.instance.setTransform(182, -1152, 0.86, 0.86);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(165, -1177, 1.278, 1.278);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(165, -1177, 255.6, 254.4);


    (lib.Symbol42 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap342();
        this.instance.parent = this;
        this.instance.setTransform(-1253, -1305, 0.854, 0.854);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-1274, -1325, 1.259, 1.259);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1274, -1325, 251.8, 250.5);


    (lib.Symbol41 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            h1: 1,
            h2: 2,
            h3: 3,
            h4: 4,
            h5: 5
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

        // Layer 1
        this.instance = new lib.Bitmap296();
        this.instance.parent = this;
        this.instance.setTransform(11324, -6662);

        this.instance_1 = new lib.Bitmap297();
        this.instance_1.parent = this;
        this.instance_1.setTransform(11324, -6662);

        this.instance_2 = new lib.Bitmap298();
        this.instance_2.parent = this;
        this.instance_2.setTransform(11324, -6662);

        this.instance_3 = new lib.Bitmap299();
        this.instance_3.parent = this;
        this.instance_3.setTransform(11324, -6662);

        this.instance_4 = new lib.Bitmap300();
        this.instance_4.parent = this;
        this.instance_4.setTransform(11324, -6662);

        this.instance_5 = new lib.Bitmap301();
        this.instance_5.parent = this;
        this.instance_5.setTransform(11324, -6662);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(11324, -6662, 406, 844);


    (lib.Symbol40 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap337();
        this.instance.parent = this;
        this.instance.setTransform(1382, -621);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1358, -676, 2.269, 2.269);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1358, -676, 453.8, 451.6);


    (lib.Symbol39 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap334();
        this.instance.parent = this;
        this.instance.setTransform(1768, -1447, 1.483, 1.483);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1739, -1498, 2.332, 2.332);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1739, -1498, 466.4, 464.2);


    (lib.Symbol38 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap335();
        this.instance.parent = this;
        this.instance.setTransform(1215, -1252);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1190, -1296, 2.401, 2.401);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1190, -1296, 480.3, 477.9);


    (lib.Symbol37 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap336();
        this.instance.parent = this;
        this.instance.setTransform(1917, -1163);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1884, -1219, 2.484, 2.484);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1884, -1219, 496.8, 494.3);


    (lib.Symbol36 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap333();
        this.instance.parent = this;
        this.instance.setTransform(737, -621);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(714, -671, 2.441, 2.441);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(714, -671, 488.3, 485.9);


    (lib.Symbol35 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap332();
        this.instance.parent = this;
        this.instance.setTransform(294, -775, 0.652, 0.652);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(262, -823, 0.894, 0.894);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(262, -823, 178.7, 177.8);


    (lib.Symbol34 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib._53pngcopy();
        this.instance.parent = this;
        this.instance.setTransform(933, -723, 0.595, 0.595);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(875.7, -744.8, 1.061, 0.87, 0, -0.5, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(875.7, -744.8, 213.6, 173.1);


    (lib.Symbol33 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap329();
        this.instance.parent = this;
        this.instance.setTransform(609, -1086, 0.945, 1);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(583, -1122, 1.039, 0.924);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(583, -1122, 207.9, 183.9);


    (lib.Symbol32 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap330();
        this.instance.parent = this;
        this.instance.setTransform(794, -997, 0.744, 0.744);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(769, -1035, 0.975, 0.883);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(769, -1035, 195, 175.8);


    (lib.Symbol31 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap331();
        this.instance.parent = this;
        this.instance.setTransform(546, -640, 0.518, 0.518);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(515, -670, 0.956, 0.886);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(515, -670, 191.1, 176.4);


    (lib.Symbol30 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap325();
        this.instance.parent = this;
        this.instance.setTransform(1367, -755, 0.545, 0.545);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1304, -791, 1.404, 1.404);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1304, -791, 280.7, 279.3);


    (lib.Symbol29 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap326();
        this.instance.parent = this;
        this.instance.setTransform(1701, -584, 0.486, 0.486);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1645, -619, 1.355, 1.355);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1645, -619, 271.1, 269.8);


    (lib.Symbol28 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap327();
        this.instance.parent = this;
        this.instance.setTransform(1540, -663, 0.506, 0.506);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1491, -701, 1.359, 1.359);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1491, -701, 271.8, 270.5);


    (lib.Symbol27 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap324();
        this.instance.parent = this;
        this.instance.setTransform(1527, -936, 0.509, 0.509);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1468, -970, 1.349, 1.349);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1468, -970, 269.8, 268.4);


    (lib.Symbol26 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap328();
        this.instance.parent = this;
        this.instance.setTransform(1465, -679, 0.526, 0.526);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1401, -715, 1.435, 1.435);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1401, -715, 287, 285.7);


    (lib.Symbol25 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap323();
        this.instance.parent = this;
        this.instance.setTransform(809, -1439, 0.244, 0.244);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(788, -1464, 0.686, 0.686);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(788, -1464, 137.3, 136.6);


    (lib.Symbol24 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap319();
        this.instance.parent = this;
        this.instance.setTransform(-1495, -1455, 0.239, 0.239);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-1517, -1484, 0.716, 0.716);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1517, -1484, 143.2, 142.5);


    (lib.Symbol23 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap321();
        this.instance.parent = this;
        this.instance.setTransform(782, -1227, 0.252, 0.252);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(764, -1254, 0.701, 0.701);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(764, -1254, 140.1, 139.4);


    (lib.Symbol22 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap320();
        this.instance.parent = this;
        this.instance.setTransform(-948, -1056, 0.264, 0.264);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-967, -1077, 0.724, 0.724);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-967, -1077, 144.9, 144.1);


    (lib.Symbol21 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap322();
        this.instance.parent = this;
        this.instance.setTransform(361, -898, 0.248, 0.248);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(343, -924, 0.718, 0.718);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(343, -924, 143.6, 142.9);


    (lib.Symbol20 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap317();
        this.instance.parent = this;
        this.instance.setTransform(1257, -634, 0.404, 0.404);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1159, -692, 1.91, 1.504);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1159, -692, 382, 299.3);


    (lib.Symbol19 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap318();
        this.instance.parent = this;
        this.instance.setTransform(1224, -509, 0.417, 0.417);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1130, -575, 1.901, 1.559);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1130, -575, 380.3, 310.3);


    (lib.Symbol18 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap316();
        this.instance.parent = this;
        this.instance.setTransform(763, -528, 0.41, 0.41);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(667, -590, 1.87, 1.588);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(667, -590, 374, 316.1);


    (lib.Symbol17 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap315();
        this.instance.parent = this;
        this.instance.setTransform(1302, -232, 0.392, 0.392);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1207, -299, 1.813, 1.551);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1207, -299, 362.6, 308.6);


    (lib.Symbol16 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap314();
        this.instance.parent = this;
        this.instance.setTransform(701, -288, 0.443, 0.443);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(609, -348, 1.916, 1.659);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(609, -348, 383.2, 330.2);


    (lib.Symbol15 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap308();
        this.instance.parent = this;
        this.instance.setTransform(-140, -1838, 1.425, 1.425);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-214, -2051, 3.413, 3.413);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-214, -2051, 682.5, 679.1);


    (lib.Symbol14 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap307();
        this.instance.parent = this;
        this.instance.setTransform(309, -1601, 1.377, 1.377);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(234, -1796, 3.361, 3.361);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(234, -1796, 672.2, 668.8);


    (lib.Symbol13 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap306();
        this.instance.parent = this;
        this.instance.setTransform(1104, -2111, 1.401, 1.401);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1035, -2302, 3.345, 3.345);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1035, -2302, 669, 665.7);


    (lib.Symbol12 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap304();
        this.instance.parent = this;
        this.instance.setTransform(12, -1546, 1.317, 1.317);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-77, -1760, 3.487, 3.487);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-77, -1760, 697.4, 693.9);


    (lib.Symbol11 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap305();
        this.instance.parent = this;
        this.instance.setTransform(-1273, -1146, 1.319, 1.319);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-1387, -1326, 3.612, 3.259);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1387, -1326, 722.4, 648.6);


    (lib.Symbol10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap310();
        this.instance.parent = this;
        this.instance.setTransform(2104, -612);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(2083, -657, 0.727, 0.727);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(2083, -657, 145.5, 144.8);


    (lib.Symbol9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap313();
        this.instance.parent = this;
        this.instance.setTransform(-1489.9, -730.9, 0.266, 0.266, 4.7);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-1502.5, -781, 0.753, 0.753, 5.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1516.8, -781, 164.1, 163.5);


    (lib.Symbol8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap309();
        this.instance.parent = this;
        this.instance.setTransform(2518.1, -458.6, 0.236, 0.236, 4.7);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(2498, -500, 0.716, 0.716);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(2498, -500, 143.1, 142.4);


    (lib.Symbol7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap312();
        this.instance.parent = this;
        this.instance.setTransform(-991, -111, 0.239, 0.239);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-1001.2, -159.3, 0.733, 0.733, 5.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1014.5, -159.3, 159.3, 158.7);


    (lib.Symbol6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap311();
        this.instance.parent = this;
        this.instance.setTransform(1844, 31, 0.236, 0.236);

        this.instance_1 = new lib.buton200();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1827.6, -23.4, 0.761, 0.761, 4.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1816.5, -23.4, 163, 162.3);


    (lib.Symbol3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap84();
        this.instance.parent = this;
        this.instance.setTransform(127, -208, 0.232, 0.232);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(127, -208, 85.5, 84.1);


    (lib.Symbol2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap86();
        this.instance.parent = this;
        this.instance.setTransform(-693, -436);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-693, -436, 553, 553);


    (lib.shape604 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 27), null, new cjs.Matrix2D(1, 0, 0, 1, -42.5, -22.5)).s().p("AmnDgIAAnAINPAAIAAHAg");
        this.shape.setTransform(0.5, 8.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 26), null, new cjs.Matrix2D(1, 0, 0, 1, -50.5, -23.5)).s().p("An3DrIAAnUIPvAAIAAHUg");
        this.shape_1.setTransform(-2.2, 18.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.shape548 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 24), null, new cjs.Matrix2D(1.028, 0, 0, 1.028, -38, -59.6)).s().p("Al7JUIAAynIL3AAIAASng");
        this.shape.setTransform(2, -65.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 25), null, new cjs.Matrix2D(1.028, 0, 0, 1.028, -47.3, -18)).s().p("AnYCzIAAlmIOxAAIAAFmg");
        this.shape_1.setTransform(0, -16.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-47.3, -124.8, 94.6, 126.6);


    (lib.shape547 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 24), null, new cjs.Matrix2D(1, 0, 0, 1, -52.7, -58)).s().p("AjTIsIBygjQg8mNAJgcIgNAAIAAqjIF1AAIAASHg");
        this.shape.setTransform(63.7, 58);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(42.4, 0, 42.6, 116);


    (lib.shape540 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 23), null, new cjs.Matrix2D(1, 0, 0, 1, -37.5, -87.5)).s().p("Al2NqIAA7UILtAAIAAbUg");
        this.shape.setTransform(48.7, 87.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 19), null, new cjs.Matrix2D(1, 0, 0, 1, -37.5, -11)).s().p("Al2BuIAAjbILsAAIAADbg");
        this.shape_1.setTransform(37.5, 171.6);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 86.2, 182.6);


    (lib.shape537 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 22), null, new cjs.Matrix2D(1, 0, 0, 1, -31, -80.5)).s().p("Ak1MlIAA5JIJrAAIAAZJg");
        this.shape.setTransform(31, 80.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 19), null, new cjs.Matrix2D(1, 0, 0, 1, -37.5, -11)).s().p("Al1BuIAAjbILrAAIAADbg");
        this.shape_1.setTransform(24.7, 158.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.8, 0, 75, 169.7);


    (lib.shape534 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 21), null, new cjs.Matrix2D(1, 0, 0, 1, -31, -80.5)).s().p("Ak1MlIAA5JIJrAAIAAZJg");
        this.shape.setTransform(31, 80.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 19), null, new cjs.Matrix2D(1, 0, 0, 1, -37.5, -11)).s().p("Al1BuIAAjbILrAAIAADbg");
        this.shape_1.setTransform(24.7, 158.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.8, 0, 75, 169.7);


    (lib.shape531 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 20), null, new cjs.Matrix2D(1, 0, 0, 1, -31, -80.5)).s().p("Ak1MlIAA5JIJrAAIAAZJg");
        this.shape.setTransform(31, 80.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 19), null, new cjs.Matrix2D(1, 0, 0, 1, -37.5, -11)).s().p("Al2BtIAAjZILtAAIAADZg");
        this.shape_1.setTransform(26, 157.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.5, 0, 75, 168.4);


    (lib.shape528 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.Bitmap168();
        this.instance.parent = this;
        this.instance.setTransform(-23, 68);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-23, 68, 131, 95);


    (lib.shape105 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape93 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape77 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 33), null, new cjs.Matrix2D(1, 0, 0, 1, -37, -58)).s().p("AlwJEIAAyHILiAAIAASHg");
        this.shape.setTransform(-19.2, 46.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.2, -11.7, 74, 116);


    (lib.shape75 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 32), null, new cjs.Matrix2D(1, 0, 0, 1, -37, -58)).s().p("AlwJEIAAyHILiAAIAASHg");
        this.shape.setTransform(-19.2, 46.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.2, -11.7, 74, 116);


    (lib.shape73 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 31), null, new cjs.Matrix2D(1, 0, 0, 1, -37, -58)).s().p("AlwJEIAAyHILiAAIAASHg");
        this.shape.setTransform(-19.2, 46.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.2, -11.7, 74, 116);


    (lib.shape69 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 29), null, new cjs.Matrix2D(1, 0, 0, 1, -37, -58)).s().p("AlwJEIAAyHILiAAIAASHg");
        this.shape.setTransform(-19.2, 46.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.2, -11.7, 74, 116);


    (lib.shape67 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 28), null, new cjs.Matrix2D(1, 0, 0, 1, -37, -58)).s().p("AlwJEIAAyHILiAAIAASHg");
        this.shape.setTransform(-19.2, 46.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.2, -11.7, 74, 116);


    (lib.Symbol12copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.googleplaybutton();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.86, 0.86);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 248.6, 86);


    (lib.Symbol10_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance_2 = new lib._024_scale_arrow_fullscreen_expand_zoom_2128();
        this.instance_2.parent = this;
        this.instance_2.setTransform(45.4, 55.2, 0.625, 0.625, 0.9);

        this.instance_3 = new lib.buton();
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_3
            }, {
                t: this.instance_2
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 3, 163, 157);


    (lib.Symbol8_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 30), null, new cjs.Matrix2D(1, 0, 0, 1, -54.1, -18.7)).s().p("AjFC7IAAl1IGLAAIAAF1g");
        this.shape.setTransform(19.9, 18.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 39.8, 37.5);


    (lib.Symbol7_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AshPnQjGAAAAjCIAA5IQAAjDDGgBIZDAAQDGABgBDDIAAZIQABDCjGAAg");
        mask.setTransform(101, 102);

        // Layer 1
        this.instance_2 = new lib._112();
        this.instance_2.parent = this;
        this.instance_2.setTransform(6, 8, 0.938, 0.938);

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(6, 8, 187.6, 187.6);


    (lib.Symbol5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AwCUAQj9AAAAj6MAAAggKQAAj6D9gBMAgEAAAQD+ABAAD6MAAAAgKQAAD6j+AAg");
        mask.setTransform(129, 129);

        // Layer 1
        this.instance = new lib._111();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1.2, 1.2);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1, 1, 239.1, 239.1);


    (lib.Symbol2copy9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // Layer 1
        this.instance = new lib.Bitmap87();
        this.instance.parent = this;
        this.instance.setTransform(477, 361);

        this.instance_1 = new lib.Bitmap88();
        this.instance_1.parent = this;
        this.instance_1.setTransform(477, 354, 0.996, 0.996);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(477, 361, 304, 304);


    (lib.star_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.dov();
        this.instance.parent = this;
        this.instance.setTransform(-59, -108, 0.115, 0.115);

        this.instance_1 = new lib.Bitmap201();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-63, -113, 0.216, 0.216);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-63, -113, 18.2, 20.2);


    (lib.shape604copy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 27), null, new cjs.Matrix2D(1, 0, 0, 1, -42.5, -22.5)).s().p("AmnDgIAAnAINPAAIAAHAg");
        this.shape.setTransform(0.5, 8.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 26), null, new cjs.Matrix2D(1, 0, 0, 1, -50.5, -23.5)).s().p("An3DrIAAnUIPvAAIAAHUg");
        this.shape_1.setTransform(-2.2, 18.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.shape604copy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 27), null, new cjs.Matrix2D(1, 0, 0, 1, -42.5, -22.5)).s().p("AmnDgIAAnAINPAAIAAHAg");
        this.shape.setTransform(0.5, 8.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 26), null, new cjs.Matrix2D(1, 0, 0, 1, -50.5, -23.5)).s().p("An3DrIAAnUIPvAAIAAHUg");
        this.shape_1.setTransform(-2.2, 18.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.shape604copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 27), null, new cjs.Matrix2D(1, 0, 0, 1, -42.5, -22.5)).s().p("AmnDgIAAnAINPAAIAAHAg");
        this.shape.setTransform(0.5, 8.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 26), null, new cjs.Matrix2D(1, 0, 0, 1, -50.5, -23.5)).s().p("An3DrIAAnUIPvAAIAAHUg");
        this.shape_1.setTransform(-2.2, 18.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.shape604copy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 27), null, new cjs.Matrix2D(1, 0, 0, 1, -42.5, -22.5)).s().p("AmnDgIAAnAINPAAIAAHAg");
        this.shape.setTransform(0.5, 8.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 26), null, new cjs.Matrix2D(1, 0, 0, 1, -50.5, -23.5)).s().p("An3DrIAAnUIPvAAIAAHUg");
        this.shape_1.setTransform(-2.2, 18.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.shape604_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 27), null, new cjs.Matrix2D(1, 0, 0, 1, -42.5, -22.5)).s().p("AmnDgIAAnAINPAAIAAHAg");
        this.shape_2.setTransform(0.5, 8.1);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 1
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 26), null, new cjs.Matrix2D(1, 0, 0, 1, -50.5, -23.5)).s().p("An3DrIAAnUIPvAAIAAHUg");
        this.shape_3.setTransform(-2.2, 18.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.shape531_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 20), null, new cjs.Matrix2D(1, 0, 0, 1, -31, -80.5)).s().p("Ak1MlIAA5JIJrAAIAAZJg");
        this.shape_2.setTransform(31, 80.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // Layer 1
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 19), null, new cjs.Matrix2D(1, 0, 0, 1, -37.5, -11)).s().p("Al2BtIAAjZILtAAIAADZg");
        this.shape_3.setTransform(26, 157.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.5, 0, 75, 168.4);


    (lib.shape528_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 18), null, new cjs.Matrix2D(1, 0, 0, 1, -31, -75)).s().p("Ak1LuIAA3bIJrAAIAAXbg");
        this.shape.setTransform(31, 75);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 19), null, new cjs.Matrix2D(1, 0, 0, 1, -37.5, -11)).s().p("Al2BuIAAjbILtAAIAADbg");
        this.shape_1.setTransform(23.4, 147.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.1, 0, 76.1, 158.7);


    (lib.shape105copy10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105copy9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105copy8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105copy7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105copy6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105copy5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105copy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105copy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105copy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape105_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 17), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape_1.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103copy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape103_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 16), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape_1.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101copy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape101_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 15), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape_1.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99copy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape99_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 37), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape_1.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97copy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape97_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 36), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape_1.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95copy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape95_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 35), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -26.8, -33.7)).s().p("AmmBKICbmZIKyEGIibGZg");
        this.shape_1.setTransform(-3.6, 5.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46, -27.9, 84.8, 67.4);


    (lib.shape93copy10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93copy9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93copy8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93copy7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93copy6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93copy5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93copy4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93copy3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93copy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape93_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 34), null, new cjs.Matrix2D(0.935, 0.354, -0.354, 0.935, -11.4, -71.7)).s().p("AouHNIG+yYIKfD/Im+SYg");
        this.shape_1.setTransform(-19.6, 51);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -20.7, 112, 143.4);


    (lib.shape77copy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 33), null, new cjs.Matrix2D(1, 0, 0, 1, -37, -58)).s().p("AlwJEIAAyHILiAAIAASHg");
        this.shape.setTransform(-19.2, 46.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.2, -11.7, 74, 116);


    (lib.shape77_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 33), null, new cjs.Matrix2D(1, 0, 0, 1, -37, -58)).s().p("AlwJEIAAyHILiAAIAASHg");
        this.shape_1.setTransform(-19.2, 46.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.2, -11.7, 74, 116);


    (lib.shape69_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 29), null, new cjs.Matrix2D(1, 0, 0, 1, -37, -58)).s().p("AlwJEIAAyHILiAAIAASHg");
        this.shape_1.setTransform(-19.2, 46.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.2, -11.7, 74, 116);


    (lib.logocopy = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Bitmap349();
        this.instance.parent = this;
        this.instance.setTransform(-1738, -130, 0.825, 0.825);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1738, -130, 865.1, 862.6);


    (lib.ballsanim = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.Bitmap347();
        this.instance.parent = this;
        this.instance.setTransform(299, 156, 1, 1, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(17, 156, 282, 300);


    (lib.Symbol5_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

        // Layer 2
        this.a5 = new lib.Symbol15();
        this.a5.parent = this;
        this.a5.setTransform(453.9, -166.5, 0.216, 0.215, 0, 0, 0, 389.5, 390.3);

        this.a4 = new lib.Symbol14();
        this.a4.parent = this;
        this.a4.setTransform(102, -442.1, 0.218, 0.218, 0, 0, 0, -28, -649.6);

        this.a3 = new lib.Symbol13();
        this.a3.parent = this;
        this.a3.setTransform(-234.2, -183.5, 0.221, 0.221, 0, 0, 0, -0.9, 0.7);

        this.a2 = new lib.Symbol12();
        this.a2.parent = this;
        this.a2.setTransform(-267.2, -308.1, 0.215, 0.215, 0, 0, 0, 290.9, 38.1);

        this.a1 = new lib.Symbol11();
        this.a1.parent = this;
        this.a1.setTransform(-19.5, -380.9, 0.224, 0.224, 0, 0, 0, -658, 56.6);

        this.b5 = new lib.Symbol10();
        this.b5.parent = this;
        this.b5.setTransform(-73.2, -108.4, 0.983, 1.026, -5, 0, 0, 2140.8, -85.9);

        this.b4 = new lib.Symbol9();
        this.b4.parent = this;
        this.b4.setTransform(-201.9, -180, 0.975, 1.017, 0, 5, -175, -864, -218.3);

        this.b3 = new lib.Symbol8();
        this.b3.parent = this;
        this.b3.setTransform(-300.2, -642.2, 0.998, 1.041, -5, 0, 0, 2544.1, -452.9);

        this.b2 = new lib.Symbol7();
        this.b2.parent = this;
        this.b2.setTransform(-420, -516.6, 0.976, 1.018, 0, 5, -175, -280.3, 76.5);

        this.b1 = new lib.Symbol6();
        this.b1.parent = this;
        this.b1.setTransform(-1368.4, -401, 0.962, 1.003, -5, 0, 0, 391.3, 150.7);

        this.c5 = new lib.Symbol20();
        this.c5.parent = this;
        this.c5.setTransform(678.4, -305.6, 0.398, 0.493, 0, 0, 180, 220.7, 92.9);

        this.c4 = new lib.Symbol19();
        this.c4.parent = this;
        this.c4.setTransform(473.4, -472.6, 0.388, 0.476, 0, 0, 180, 1120.7, -112.6);

        this.c3 = new lib.Symbol18();
        this.c3.parent = this;
        this.c3.setTransform(214.5, -430.8, 0.392, 0.461, 0, 0, 0, 1226.4, -24.6);

        this.c2 = new lib.Symbol17();
        this.c2.parent = this;
        this.c2.setTransform(-186, -598.1, 0.407, 0.474, 0, 0, 0, 1179.7, -102.4);

        this.c1 = new lib.Symbol16();
        this.c1.parent = this;
        this.c1.setTransform(-267.4, -618.2, 0.375, 0.442, 0, 0, 0, 811.5, -181.3);

        this.d5 = new lib.Symbol25();
        this.d5.parent = this;
        this.d5.setTransform(-334.5, 776.1, 1.055, 1.064, 0, 0, 0, 162.8, -83.5);

        this.d4 = new lib.Symbol24();
        this.d4.parent = this;
        this.d4.setTransform(1053.8, 879, 1.032, 1.04, 0, 0, 0, -158.5, 27.4);

        this.d3 = new lib.Symbol23();
        this.d3.parent = this;
        this.d3.setTransform(107, 405.9, 1.058, 1.066, 0, 0, 0, 871.1, -223.2);

        this.d2 = new lib.Symbol22();
        this.d2.parent = this;
        this.d2.setTransform(-533.1, 245, 1.03, 1.038, 0, 0, 180, -477.3, -172.3);

        this.d1 = new lib.Symbol21();
        this.d1.parent = this;
        this.d1.setTransform(727, 106.3, 1.006, 1.014, 0, 0, 0, 906.1, -136.6);

        this.e2 = new lib.Symbol30();
        this.e2.parent = this;
        this.e2.setTransform(-109.1, -397, 0.529, 0.529, 0, 0, 0, 1427.3, -234.7);

        this.e3 = new lib.Symbol29();
        this.e3.parent = this;
        this.e3.setTransform(-135, -450.1, 0.536, 0.536, 0, 0, 0, 1400, -167.8);

        this.e4 = new lib.Symbol28();
        this.e4.parent = this;
        this.e4.setTransform(228, -391.9, 0.542, 0.542, 0, 0, 0, 1615.9, -146.5);

        this.e5 = new lib.Symbol27();
        this.e5.parent = this;
        this.e5.setTransform(-289.2, -268.9, 0.536, 0.536, 0, 0, 0, 1570.7, -180.9);

        this.e1 = new lib.Symbol26();
        this.e1.parent = this;
        this.e1.setTransform(373.6, -522.5, 0.515, 0.515, 0, 0, 0, 1496.4, -385.9);

        this.f5 = new lib.Symbol35();
        this.f5.parent = this;
        this.f5.setTransform(828, -253.7, 0.803, 0.837, 0, 0, 0, 886.8, -298.3);

        this.f4 = new lib.Symbol34();
        this.f4.parent = this;
        this.f4.setTransform(-177.2, -291.9, 0.694, 0.835, 0, 0, 180, 1087.5, -267.4);

        this.f3 = new lib.Symbol33();
        this.f3.parent = this;
        this.f3.setTransform(-450.4, 40.6, 0.69, 0.803, 0, 0, 180, 942.4, -210.1);

        this.f2 = new lib.Symbol32();
        this.f2.parent = this;
        this.f2.setTransform(95.3, -589, 0.774, 0.847, 0, 0, 180, 827.9, -912.5);

        this.f1 = new lib.Symbol31();
        this.f1.parent = this;
        this.f1.setTransform(519.6, -208.3, 0.795, 0.828, 0, 0, 0, 973.3, -85.9);

        this.g2 = new lib.Symbol40();
        this.g2.parent = this;
        this.g2.setTransform(356, -539.2, 0.323, 0.323, 0, 0, 0, 1452.3, -200.7);

        this.g3 = new lib.Symbol39();
        this.g3.parent = this;
        this.g3.setTransform(-226, -403.9, 0.306, 0.306, 0, 0, 0, 1565.3, -565.7);

        this.g4 = new lib.Symbol38();
        this.g4.parent = this;
        this.g4.setTransform(-62.4, -353.2, 0.301, 0.301, 0, 0, 0, 992.6, -179.6);

        this.g5 = new lib.Symbol37();
        this.g5.parent = this;
        this.g5.setTransform(-75.4, -352.4, 0.303, 0.303, 0, 0, 0, 1114.2, -101.4);

        this.g1 = new lib.Symbol36();
        this.g1.parent = this;
        this.g1.setTransform(-556.4, -491.5, 0.297, 0.297, 0, 0, 0, 0, -0.4);

        this.h4 = new lib.Symbol45();
        this.h4.parent = this;
        this.h4.setTransform(-675.4, 476.8, 0.582, 0.582, 0, 0, 0, 47.4, 43.1);

        this.h3 = new lib.Symbol44();
        this.h3.parent = this;
        this.h3.setTransform(163.3, -7.8, 0.582, 0.582, 0, 0, 180, 1139.2, -396.6);

        this.h2 = new lib.Symbol43();
        this.h2.parent = this;
        this.h2.setTransform(-102.5, -9.3, 0.582, 0.582, 0, 0, 0, -0.5, -0.5);

        this.h1 = new lib.Symbol42();
        this.h1.parent = this;
        this.h1.setTransform(-299.5, 103.3, 0.582, 0.582, 0, 0, 180, 45.1, 37.8);

        this.h5 = new lib.Symbol46();
        this.h5.parent = this;
        this.h5.setTransform(-214.6, 71.6, 0.582, 0.582, 0, 0, 0, 613.5, -427.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.a1
            }, {
                t: this.a2
            }, {
                t: this.a3
            }, {
                t: this.a4
            }, {
                t: this.a5
            }]
        }).to({
            state: [{
                t: this.b1
            }, {
                t: this.b2
            }, {
                t: this.b3
            }, {
                t: this.b4
            }, {
                t: this.b5
            }]
        }, 1).to({
            state: [{
                t: this.c1
            }, {
                t: this.c2
            }, {
                t: this.c3
            }, {
                t: this.c4
            }, {
                t: this.c5
            }]
        }, 1).to({
            state: [{
                t: this.d1
            }, {
                t: this.d2
            }, {
                t: this.d3
            }, {
                t: this.d4
            }, {
                t: this.d5
            }]
        }, 1).to({
            state: [{
                t: this.e1
            }, {
                t: this.e5
            }, {
                t: this.e4
            }, {
                t: this.e3
            }, {
                t: this.e2
            }]
        }, 1).to({
            state: [{
                t: this.f1
            }, {
                t: this.f2
            }, {
                t: this.f3
            }, {
                t: this.f4
            }, {
                t: this.f5
            }]
        }, 1).to({
            state: [{
                t: this.g1
            }, {
                t: this.g5
            }, {
                t: this.g4
            }, {
                t: this.g3
            }, {
                t: this.g2
            }]
        }, 1).to({
            state: [{
                t: this.h5
            }, {
                t: this.h1
            }, {
                t: this.h2
            }, {
                t: this.h3
            }, {
                t: this.h4
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-346.4, -695.3, 817.5, 150.5);


    (lib.cheeks4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape604("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.lipstik_btn1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.shape67("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(56.2, 11.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 74, 116);


    (lib.lipstik_btn2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.shape69("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(56.2, 11.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 74, 116);


    (lib.lipstik_btn5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.shape75("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(56.2, 11.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 74, 116);


    (lib.lipstik_btn6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.shape77("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(56.2, 11.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 74, 116);


    (lib.sprite549 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape547("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(42.4, 0, 42.6, 116);


    (lib.lipstik_btn4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.shape73("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(56.2, 11.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 74, 116);


    (lib.leash_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape540("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 86.2, 182.6);


    (lib.leash_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape537("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.8, 0, 75, 169.7);


    (lib.leash_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape534("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.8, 0, 75, 169.7);


    (lib.leash_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape531("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.5, 0, 75, 168.4);


    (lib.leash_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape528("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-23, 68, 131, 95);


    (lib.cheeksCursor = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.shape71 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Symbol8_1();
        this.instance.parent = this;
        this.instance.setTransform(-2, 7, 1, 1, 0, 0, 0, 19.9, 18.7);
        this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -85))];
        this.instance.cache(-2, -2, 44, 42);

        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["game_atlas_38"], 30), null, new cjs.Matrix2D(1, 0, 0, 1, -37, -58)).s().p("AlwJEIAAyHIFWAAIAAF3IGMAAIAAMQg");
        this.shape.setTransform(-19.2, 46.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56.2, -11.7, 76.3, 116);


    (lib.Symbol10copy2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Symbol7_1();
        this.instance.parent = this;
        this.instance.setTransform(101.5, 95.1, 1, 1, 0, 0, 0, 101.5, 95.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1.07,
            scaleY: 1.07
        }, 19, cjs.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1
        }, 19, cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.5, 1.5, 201, 201);


    (lib.star_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.star_5();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 22.6
        }, 3).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 52.7
        }, 4).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 75.2,
            x: 0.1
        }, 3).to({
            rotation: 105.3,
            x: 0
        }, 4).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 112.8,
            y: 0
        }, 1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 120.4,
            x: 0.1
        }, 1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 143.1,
            x: 0
        }, 3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-63, -112.9, 18.2, 20.2);


    (lib.star_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 15
        this.instance = new lib.star_4();
        this.instance.parent = this;
        this.instance.setTransform(-18.5, -24.2, 0.996, 0.996, 5.2);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({
            _off: false
        }, 0).to({
            scaleX: 0.82,
            scaleY: 0.82,
            rotation: 5,
            x: -44.9,
            y: -25.3
        }, 2).to({
            scaleX: 0.64,
            scaleY: 0.64,
            x: -71.2,
            y: -26.5
        }, 3).to({
            scaleX: 0.61,
            scaleY: 0.61,
            x: -75.3,
            y: -26.6
        }, 1).to({
            scaleX: 0.59,
            scaleY: 0.59,
            x: -78.9,
            y: -26.8
        }, 1).to({
            scaleX: 0.56,
            scaleY: 0.56,
            x: -82.5,
            y: -27
        }, 1).to({
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: 5.2,
            x: -91.7,
            y: -27.3
        }, 3).to({
            _off: true
        }, 1).wait(1));

        // Layer 13
        this.instance_1 = new lib.star_4();
        this.instance_1.parent = this;
        this.instance_1.setTransform(36.6, -34, 0.997, 0.997, 159.1);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
            _off: false
        }, 0).to({
            scaleX: 0.78,
            scaleY: 0.78,
            rotation: 159.2,
            x: 65.8,
            y: -46.6
        }, 3).to({
            scaleX: 0.64,
            scaleY: 0.64,
            x: 85,
            y: -55
        }, 3).to({
            scaleX: 0.61,
            scaleY: 0.61,
            x: 88.8,
            y: -56.7
        }, 1).to({
            scaleX: 0.56,
            scaleY: 0.56,
            x: 95.4,
            y: -59.6
        }, 2).to({
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: 159.1,
            x: 103.9,
            y: -63.3
        }, 3).to({
            _off: true
        }, 1).wait(3));

        // Layer 11
        this.instance_2 = new lib.star_4();
        this.instance_2.parent = this;
        this.instance_2.setTransform(12.8, 4.7, 0.997, 0.997, -95.1);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({
            _off: false
        }, 0).to({
            scaleX: 0.78,
            scaleY: 0.78,
            rotation: -95,
            x: 17,
            y: 36.1
        }, 3).to({
            scaleX: 0.61,
            scaleY: 0.61,
            x: 20.4,
            y: 61.1
        }, 4).to({
            scaleX: 0.56,
            scaleY: 0.56,
            x: 21.4,
            y: 68.1
        }, 2).to({
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: -95.1,
            x: 22.7,
            y: 77.4
        }, 3).to({
            _off: true
        }, 1).wait(5));

        // Layer 9
        this.instance_3 = new lib.star_4();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-6.8, -47.8, 0.998, 0.998, 58.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({
            scaleX: 0.78,
            scaleY: 0.78,
            rotation: 58.9,
            x: -24.5,
            y: -74.2
        }, 3).to({
            scaleX: 0.64,
            scaleY: 0.64,
            x: -36.2,
            y: -91.6
        }, 3).to({
            scaleX: 0.61,
            scaleY: 0.61,
            x: -38.5,
            y: -95
        }, 1).to({
            scaleX: 0.56,
            scaleY: 0.56,
            x: -42.5,
            y: -101.1
        }, 2).to({
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: 58.8,
            x: -47.7,
            y: -108.8
        }, 3).to({
            _off: true
        }, 1).wait(7));

        // Layer 7
        this.instance_4 = new lib.star_4();
        this.instance_4.parent = this;
        this.instance_4.setTransform(31.5, -38.3, 0.998, 0.998, 144.8);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({
            _off: false
        }, 0).to({
            scaleX: 0.78,
            scaleY: 0.78,
            rotation: 144.9,
            x: 56.6,
            y: -57.7
        }, 3).to({
            scaleX: 0.61,
            scaleY: 0.61,
            x: 76.4,
            y: -73.2
        }, 4).to({
            scaleX: 0.56,
            scaleY: 0.56,
            x: 82.1,
            y: -77.6
        }, 2).to({
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: 144.8,
            x: 89.4,
            y: -83.4
        }, 3).to({
            _off: true
        }, 1).wait(1));

        // Layer 5
        this.instance_5 = new lib.star_4();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-4.1, 5, 0.999, 0.999, -61.3);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({
            _off: false
        }, 0).to({
            scaleX: 0.92,
            scaleY: 0.92,
            rotation: -61.4,
            x: -9.1,
            y: 15.2
        }, 1).to({
            scaleX: 0.78,
            scaleY: 0.78,
            x: -18.1,
            y: 33.6
        }, 2).to({
            scaleX: 0.64,
            scaleY: 0.64,
            x: -27.4,
            y: 52.5
        }, 3).to({
            scaleX: 0.61,
            scaleY: 0.61,
            x: -29.2,
            y: 56.3
        }, 1).to({
            scaleX: 0.59,
            scaleY: 0.59,
            x: -30.8,
            y: 59.5
        }, 1).to({
            scaleX: 0.56,
            scaleY: 0.56,
            x: -32.3,
            y: 62.7
        }, 1).to({
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: -61.3,
            x: -36.5,
            y: 71.1
        }, 3).to({
            _off: true
        }, 1).wait(3));

        // Layer 3
        this.instance_6 = new lib.star_4();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-11.1, -40, 0.998, 0.998, 44.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({
            _off: false
        }, 0).to({
            scaleX: 0.92,
            scaleY: 0.92,
            rotation: 44.4,
            x: -19.4,
            y: -47.5
        }, 1).to({
            scaleX: 0.78,
            scaleY: 0.78,
            x: -34.7,
            y: -61.2
        }, 2).to({
            scaleX: 0.64,
            scaleY: 0.64,
            x: -50.3,
            y: -75.2
        }, 3).to({
            scaleX: 0.61,
            scaleY: 0.61,
            x: -53.4,
            y: -78
        }, 1).to({
            scaleX: 0.54,
            scaleY: 0.54,
            x: -61.3,
            y: -85
        }, 3).to({
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: 44.5,
            x: -65.8,
            y: -89
        }, 2).to({
            _off: true
        }, 1).wait(5));

        // Layer 1
        this.instance_7 = new lib.star_4();
        this.instance_7.parent = this;
        this.instance_7.setTransform(38, -12.7, 1, 1, -161.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({
            scaleX: 0.92,
            scaleY: 0.92,
            rotation: -161.7,
            x: 48.8,
            y: -9.6
        }, 1).to({
            scaleX: 0.78,
            scaleY: 0.78,
            x: 68.6,
            y: -4
        }, 2).to({
            scaleX: 0.69,
            scaleY: 0.69,
            x: 82.1,
            y: -0.2
        }, 2).to({
            scaleX: 0.61,
            scaleY: 0.61,
            x: 92.8,
            y: 2.9
        }, 2).to({
            scaleX: 0.59,
            scaleY: 0.59,
            x: 96.3,
            y: 3.9
        }, 1).to({
            scaleX: 0.56,
            scaleY: 0.56,
            x: 99.8,
            y: 4.8
        }, 1).to({
            scaleX: 0.54,
            scaleY: 0.54,
            x: 102.8,
            y: 5.7
        }, 1).to({
            scaleX: 0.5,
            scaleY: 0.5,
            rotation: -161.6,
            x: 108.7,
            y: 7.4
        }, 2).to({
            _off: true
        }, 1).wait(7));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(39.9, -159.9, 28.4, 274.3);


    (lib.star_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            exportRoot.sparklesSound();
        }
        this.frame_25 = function() {
            this.gotoAndStop(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(1));

        // Layer 33
        this.instance = new lib.star_3();
        this.instance.parent = this;
        this.instance.setTransform(9.7, 15.2, 0.84, 0.84, -45);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({
            _off: false
        }, 0).wait(21));

        // Layer 17
        this.instance_1 = new lib.star_3();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-14.4, 2.5, 0.699, 0.699, 54.2);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({
            _off: false
        }, 0).to({
            _off: true
        }, 19).wait(5));

        // Layer 1
        this.instance_2 = new lib.Bitmap7copy21();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-43, -232);

        this.instance_3 = new lib.star_3();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-5.3, 13.2, 0.7, 0.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }]
        }).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: []
        }, 20).wait(5));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-43, -232, 69, 63);


    (lib.cheeks4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape604copy4("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.cheeks4_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape604copy3("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.cheeks4_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape604copy2("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.cheeks4_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape604copy("synched", 0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.cheeks4_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance_1 = new lib.shape604_1("synched", 0);
        this.instance_1.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-52.7, -14.4, 101, 56.1);


    (lib.lipstik_btn2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance_1 = new lib.shape69_1("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(56.2, 11.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 74, 116);


    (lib.lipstik_btn6_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.shape77copy("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(56.2, 11.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 74, 116);


    (lib.lipstik_btn6_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance_1 = new lib.shape77_1("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(56.2, 11.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 74, 116);


    (lib.leash_4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance_1 = new lib.shape531_1("synched", 0);
        this.instance_1.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.5, 0, 75, 168.4);


    (lib.leash_5_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance_1 = new lib.shape528_1("synched", 0);
        this.instance_1.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.1, 0, 76.1, 158.7);


    (lib.cheeksCursor_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy10("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy10("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy10("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy10("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy10("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy10("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy10("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy9("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy9("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy9("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy9("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy9("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy9("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy9("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy8("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy8("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy8("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy8("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy8("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy8("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy8("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy7("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy7("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy7("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy7("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy7("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy7("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy7("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy6("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy6("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy6("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy6("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy6("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy6("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy6("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy5("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy5("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy5("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy5("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy5("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy5("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy5("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy4("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy4("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy4("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy4("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy4("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy4("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy4("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy3("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy3("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy3("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy3("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy3("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy3("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy3("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy2("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy2("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy2("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy2("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy2("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy2("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy2("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.shape95copy("synched", 0);
        this.instance.parent = this;

        this.instance_1 = new lib.shape97copy("synched", 0);
        this.instance_1.parent = this;

        this.instance_2 = new lib.shape99copy("synched", 0);
        this.instance_2.parent = this;

        this.instance_3 = new lib.shape101copy("synched", 0);
        this.instance_3.parent = this;

        this.instance_4 = new lib.shape103copy("synched", 0);
        this.instance_4.parent = this;

        this.instance_5 = new lib.shape105copy("synched", 0);
        this.instance_5.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_6 = new lib.shape93copy("synched", 0);
        this.instance_6.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.cheeksCursor_11 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance_7 = new lib.shape95_1("synched", 0);
        this.instance_7.parent = this;

        this.instance_8 = new lib.shape97_1("synched", 0);
        this.instance_8.parent = this;

        this.instance_9 = new lib.shape99_1("synched", 0);
        this.instance_9.parent = this;

        this.instance_10 = new lib.shape101_1("synched", 0);
        this.instance_10.parent = this;

        this.instance_11 = new lib.shape103_1("synched", 0);
        this.instance_11.parent = this;

        this.instance_12 = new lib.shape105_1("synched", 0);
        this.instance_12.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_7
            }]
        }).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).wait(1));

        // Layer 1
        this.instance_13 = new lib.shape93_1("synched", 0);
        this.instance_13.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.6, -27.9, 114.4, 150.6);


    (lib.poza1link = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 3
        this.instance = new lib.Symbol5();
        this.instance.parent = this;
        this.instance.setTransform(130.8, 123.8, 1, 1, 0, 0, 0, 130.8, 123.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1.12,
            scaleY: 1.12,
            x: 130.9
        }, 19, cjs.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1,
            x: 130.8
        }, 19, cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 257.5, 257.5);


    (lib.animinter = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_51 = function() {
            exportRoot.goNextScene();
        }
        this.frame_71 = function() {
            this.gotoAndStop(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(51).call(this.frame_51).wait(20).call(this.frame_71).wait(1));

        // Layer 7
        this.instance = new lib.ballsanim();
        this.instance.parent = this;
        this.instance.setTransform(-703, -315.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 125.1,
            regY: 310.4,
            scaleX: 1.13,
            scaleY: 1.13,
            rotation: 32.8,
            x: -522.6,
            y: -403.3
        }, 1, cjs.Ease.get(-0.99)).to({
            regX: 125.3,
            scaleX: 1,
            scaleY: 1,
            rotation: 36.7,
            x: 502.1,
            y: 320.1
        }, 50, cjs.Ease.get(-1)).wait(21));

        // Layer 10 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_1 = new cjs.Graphics().p("EiCwAe4ICMjTQDEkpBXhmQDCjjDmj9QDkj7A9hIQCCiZBmiYQBxipCLj+QC4lTBmk6QBHjXA2khQBBlYAahhQBAjzB3jcQB1jYCvjFQBbhpDujlQDbjUB8iTQC/jjCPkJQAdg1C4mVIC+mmQAJgOAIgPQCZkaBcmKQBTliAEkrQABhBgCg3IANheQAgiQAci5IAmj9MCQpBObMhJrCH6g");
        var mask_graphics_2 = new cjs.Graphics().p("EiCtAe4ICLjTQDEkpBXhmQDCjkDmj9QDkj6A9hIQCCiZBmiYQBxipCLj+QC4lUBmk5QBHjXA2khQBBlYAahhQBAjzB3jcQB1jYCvjFQBchpDtjlQDcjUB7iTQC/jjCQkJQAcg1C4mVIC+mmQAJgOAIgPQCZkaBdmKQBTliAEkrQABhBgDg3IANheQAgiQAdi5IAlj9MCQpBObMhJrCH6g");
        var mask_graphics_3 = new cjs.Graphics().p("EiCnAe3ICMjTQDDkpBXhmQDDjjDmj9QDjj7A+hIQCCiZBmiXQBxipCLj/QC4lTBmk5QBGjXA3khQBBlZAZhgQBAjzB4jdQB1jXCujGQBchoDujlQDbjUB8iTQC/jjCPkKQAdg0C4mVIC+mmQAJgOAIgPQCZkaBcmKQBTliAEkrQABhBgCg3IANheQAgiQAci5IAmj9MCQpBOcMhJsCH5g");
        var mask_graphics_4 = new cjs.Graphics().p("EiCcAe2ICLjTQDEkpBXhmQDDjjDlj9QDkj7A+hIQCCiYBliYQByipCKj+QC5lUBmk5QBGjXA3khQBBlYAZhhQBAjzB4jcQB1jYCujFQBchpDujkQDbjVB8iTQC/jjCPkJQAdg1C4mVIC+mlQAJgOAIgQQCZkaBdmJQBTliAEkrQABhBgDg3IANheQAgiQAdi5IAlj9MCQpBOdMhJtCH4g");
        var mask_graphics_5 = new cjs.Graphics().p("EiCNAe0ICLjTQDEkoBXhmQDDjkDmj8QDjj7A+hIQCCiZBliXQByipCLj+QC4lUBmk5QBGjXA3khQBBlYAahhQBAjzB3jcQB1jXCvjGQBchoDtjlQDcjUB7iTQC/jjCQkJQAdg1C3mVIC+mlQAKgPAIgPQCZkaBcmJQBUliAEkrQABhCgDg2IANheQAgiQAdi5IAlj9MCQoBOfMhJuCH2g");
        var mask_graphics_6 = new cjs.Graphics().p("EiB6AeyICMjTQDDkoBXhmQDDjjDmj9QDjj7A+hHQCCiZBmiYQBxipCLj+QC4lTBnk5QBGjXA3khQBBlYAZhhQBBjzB3jcQB1jXCvjGQBchoDtjlQDcjUB7iTQC/jjCQkJQAdg0C4mVIC+mmQAJgOAIgPQCZkaBdmKQBTlhAEkrQABhCgDg2IAOheQAgiQAci5IAmj9MCQmBOhMhJvCH0g");
        var mask_graphics_7 = new cjs.Graphics().p("EiBjAewICMjTQDEkpBXhlQDCjkDmj8QDkj7A+hHQCCiZBmiYQBxipCLj9QC4lUBmk5QBHjXA3kgQBBlZAZhgQBBjzB3jcQB1jXCvjGQBchoDtjlQDcjUB8iTQC/jiCQkJQAcg1C4mVIC+mlQAKgOAIgPQCZkaBdmKQBTlhAEkrQABhCgDg2IAOheQAgiQAci5IAmj9MCQlBOjMhJwCHyg");
        var mask_graphics_8 = new cjs.Graphics().p("EiBHAetICMjTQDEkoBXhmQDCjjDmj9QDkj6A+hIQCCiYBmiYQBxipCLj9QC4lUBnk4QBGjXA3khQBBlYAahhQBAjzB4jcQB1jXCvjFQBchoDtjlQDcjUB8iTQC/jiCQkJQAcg1C4mUIC+mlQAKgPAIgPQCZkZBdmKQBTlhAEkrQABhCgCg2IANheQAgiQAdi5IAlj8MCQkBOlMhJyCHug");
        var mask_graphics_9 = new cjs.Graphics().p("EiAnAeqICMjTQDEkoBXhmQDDjjDmj8QDjj7A+hHQCCiZBmiXQByipCLj+QC4lTBmk4QBHjXA3khQBBlYAahhQBAjyB4jcQB1jXCvjFQBchpDtjkQDcjUB8iTQC/jiCQkJQAcg0C5mVIC+mlQAJgOAJgPQCZkaBdmJQBTlhAEkrQABhCgCg2IANheQAgiQAdi5IAlj8MCQiBOpMhJ0CHqg");
        var mask_graphics_10 = new cjs.Graphics().p("EiADAemICMjTQDEkoBXhlQDDjjDmj9QDkj6A+hHQCCiZBmiXQBxipCLj9QC5lTBmk5QBHjWA3khQBBlYAahhQBBjyB3jcQB1jXCvjFQBchoDujkQDcjUB8iTQC/jiCQkJQAcg0C5mVIC+mkQAJgPAJgPQCZkZBdmJQBTlhAFkrQABhCgDg2IAOheQAgiQAdi5IAlj8MCQgBOtMhJ3CHmg");
        var mask_graphics_11 = new cjs.Graphics().p("Eh/aAeiICMjTQDEkoBXhlQDDjjDmj8QDkj6A+hHQCCiZBmiXQBxipCMj9QC4lTBnk4QBHjXA2khQBClXAahhQBAjzB4jbQB1jXCvjFQBchoDujkQDcjTB8iTQC/jiCQkJQAdg0C4mUIC/mlQAJgOAIgPQCakaBdmJQBTlhAFkrQABhBgDg2IAOheQAgiQAdi5IAmj8MCQdBOxMhJ6CHig");
        var mask_graphics_12 = new cjs.Graphics().p("Eh+uAedICMjSQDFkoBXhmQDDjiDmj8QDkj6A+hHQCCiYBmiYQByioCLj9QC5lTBmk4QBHjXA3kgQBClYAahgQBAjzB4jcQB1jWCwjFQBchoDtjkQDdjTB7iSQDAjjCQkIQAcg0C5mUIC/mlQAJgOAIgPQCakZBdmJQBUlhAEkrQAChBgDg2IAOheQAgiQAdi5IAlj8MCQbBO2MhJ8CHdg");
        var mask_graphics_13 = new cjs.Graphics().p("Eh99AeYICMjSQDFkoBXhlQDDjjDmj7QDkj6A+hHQCDiYBmiXQBxipCMj9QC5lSBnk4QBHjXA3kgQBBlYAahgQBBjzB4jbQB1jXCvjEQBdhoDtjkQDcjTB8iSQDAjiCQkIQAdg1C4mTIC/mkQAKgPAIgPQCakZBdmJQBUlgAFkrQABhBgDg3IAOhdQAgiQAdi5IAmj8MCQYBO7MhKACHYg");
        var mask_graphics_14 = new cjs.Graphics().p("Eh9HAeSICMjSQDEknBYhlQDDjjDmj7QDkj5A+hIQCDiXBmiXQBxipCMj9QC5lSBnk4QBHjWA3kgQBClYAahgQBBjyB4jcQB1jWCwjEQBchoDujkQDcjSB8iTQC/jhCRkIQAcg1C5mTIC/mkQAKgOAIgQQCakYBdmJQBUlgAFkrQABhBgCg3IANhdQAhiQAdi4IAmj9MCQVBPBMhKECHSg");
        var mask_graphics_15 = new cjs.Graphics().p("Eh8OAeMICMjSQDFknBXhlQDEjiDmj7QDkj5A+hHQCDiYBmiXQByioCLj9QC6lSBnk3QBHjXA3kgQBClXAahgQBBjzB4jbQB2jWCvjEQBchoDujjQDdjSB8iTQC/jhCRkIQAcg0C6mTIC/mkQAJgOAJgPQCZkZBemIQBUlhAFkqQAChCgDg2IAOhdQAgiQAdi4IAmj9MCQSBPHMhKICHMg");
        var mask_graphics_16 = new cjs.Graphics().p("Eh7QAeGICMjSQDFknBXhlQDEjiDmj6QDlj5A+hHQCCiYBniXQBxioCMj8QC5lSBok3QBHjWA4khQBClXAahgQBBjyB4jbQB2jWCvjEQBchnDvjjQDcjTB8iSQDAjhCQkHQAdg1C5mTIDAmjQAJgOAJgPQCakZBdmIQBVlgAFkqQABhCgCg2IANheQAhiQAdi3IAmj9MCQPBPOMhKMCHFg");
        var mask_graphics_17 = new cjs.Graphics().p("Eh6OAd/ICNjSQDEkmBYhlQDDjiDnj6QDlj5A+hHQCCiXBmiXQByioCMj8QC6lRBnk4QBIjWA3kfQBDlXAahhQBBjyB4jaQB2jWCwjEQBchnDujjQDdjSB8iSQC/jhCRkHQAdg0C6mTIC/mjQAKgOAIgPQCakYBemIQBVlgAFkrQAChBgDg2IAOheQAgiQAei3IAmj8MCQKBPUMhKQCG9g");
        var mask_graphics_18 = new cjs.Graphics().p("Eh5IAd3ICNjRQDFkmBYhlQDDjhDnj6QDlj4A+hHQCCiYBniWQByioCMj8QC5lRBok3QBIjWA3kgQBDlWAahhQBCjxB4jbQB2jWCvjDQBdhnDujjQDdjRB8iSQDAjhCRkHQAdg0C5mSIDAmjQAKgOAIgPQCakYBfmIQBUlgAGkqQABhBgCg2IAOheQAgiQAei3IAmj8MCQHBPbMhKWCG2g");
        var mask_graphics_19 = new cjs.Graphics().p("Eh39AdvICNjRQDFkmBXhkQDEjhDnj6QDlj4A+hHQCDiXBmiWQByinCNj8QC5lRBok3QBIjWA4kfQBDlXAahgQBCjxB4jbQB2jVCwjDQBchoDvjiQDcjRB9iRQDAjhCRkHQAcg0C6mSIDBmiQAJgOAIgPQCbkYBemHQBVlgAGkqQAChBgDg2IAOheQAhiQAdi3IAnj8MCQCBPkMhKaCGtg");
        var mask_graphics_20 = new cjs.Graphics().p("Eh2uAdnICNjRQDFklBYhlQDDjgDoj6QDlj3A+hHQCDiXBmiWQByinCNj8QC6lQBok3QBIjVA4kgQBDlWAahgQBCjyB5jaQB2jVCvjDQBdhnDujiQDdjRB9iRQDAjgCRkHQAdg0C6mRIDBmiQAJgOAIgPQCbkYBfmHQBVlfAGkqQABhBgCg3IAOhdQAhiQAdi3IAnj8MCP+BPsMhKgCGlg");
        var mask_graphics_21 = new cjs.Graphics().p("Eh1bAdeICNjQQDGklBXhlQDEjgDoj5QDlj3A+hHQCDiWBmiWQBzinCMj8QC6lQBpk2QBIjWA4kfQBDlWAbhgQBCjxB4jaQB3jVCwjDQBchnDvjhQDdjQB8iSQDAjfCSkHQAdg0C6mRIDBmhQAJgOAJgQQCbkXBfmHQBVlfAGkpQAChCgDg2IAOhdQAhiQAei3IAnj8MCP5BP1MhKlCGcg");
        var mask_graphics_22 = new cjs.Graphics().p("Eh0EAdVICOjQQDFklBYhkQDEjgDoj5QDlj2A+hHQCDiWBniWQByinCNj7QC6lQBpk2QBIjVA5kfQBDlWAbhgQBCjxB5jZQB2jVCwjDQBdhmDujhQDejQB8iRQDAjgCSkGQAdg0C7mRIDBmhQAJgOAJgPQCbkWBfmHQBWlfAGkqQAChBgDg2IAOhdQAhiQAei3IAoj7MCPzBP9MhKrCGSg");
        var mask_graphics_23 = new cjs.Graphics().p("EhyoAdMICNjQQDGklBYhkQDEjfDoj5QDlj2A/hGQCDiXBniVQByinCNj7QC7lPBok2QBJjVA5keQBDlWAbhgQBCjxB5jZQB3jVCwjCQBdhmDvjhQDdjQB8iQQDBjfCSkGQAdg0C7mQIDBmhQAKgOAIgPQCbkWBgmHQBWleAGkqQAChBgCg2IAOhdQAhiQAei3IAoj7MCPuBQHMhKxCGIg");
        var mask_graphics_24 = new cjs.Graphics().p("EhxIAdCICOjQQDGkkBYhkQDEjfDoj4QDlj2A/hGQCDiWBniWQByimCNj6QC7lPBpk2QBJjVA5keQBElVAbhgQBCjxB5jZQB3jUCwjCQBdhmDvjgQDdjQB9iQQDBjfCSkFQAdg0C7mQIDCmgQAJgOAJgPQCbkWBgmHQBWleAHkpQAChBgCg2IAOheQAhiPAei3IAoj7MCPoBQSMhK3CF9g");
        var mask_graphics_25 = new cjs.Graphics().p("EhvkAc3ICOjPQDGkkBYhkQDFjfDoj3QDlj1A/hHQCDiVBniVQBzikCNj9QC8lOBpk1QBIjVA6keQBElVAbhgQBCjwB6jZQB3jUCwjBQBdhnDvjfQDejPB8iRQDBjeCSkFQAeg0C7mPIDCmgQAKgOAIgPQCckWBgmFQBWleAIkpQABhCgCg2IAOhdQAiiPAei3IAoj6MCPjBQbMhK+CFyg");
        var mask_graphics_26 = new cjs.Graphics().p("Eht7AcsICOjPQDGkjBYhkQDFjeDoj3QDmj1A+hGQCEiVBniVQBzikCNj8QC8lOBpk1QBJjUA6keQBElVAbhgQBDjwB6jYQB3jUCwjBQBdhmDvjfQDejPB9iQQDBjeCTkEQAdg0C8mPIDCmfQAJgOAJgPQCckWBgmFQBXleAIkpQABhBgCg2IAPhdQAhiPAei3IApj6MCPcBQnMhLFCFmg");
        var mask_graphics_27 = new cjs.Graphics().p("EhsPAchICOjPQDHkjBYhjQDFjeDpj3QDmj0A+hGQCEiVBniVQBzijCOj8QC8lNBpk1QBJjUA6keQBFlUAbhgQBDjwB6jYQB3jTCxjBQBdhmDvjeQDejPB9iPQDBjeCTkEQAdg0C8mOIDDmfQAKgOAIgPQCckVBhmFQBXldAIkpQAChBgCg2IAOhdQAiiPAei2IApj7MCPWBQyMhLMCFbg");
        var mask_graphics_28 = new cjs.Graphics().p("EhrVAcVICPjOQDHkjBYhjQDFjdDpj2QDmj0A+hGQCEiVBniUQB0ikCOj7QC8lNBqk0QBJjUA6keQBFlUAbhfQBDjwB6jYQB4jTCxjAQBdhmDvjeQDejOB+iPQDBjdCTkEQAdgzC9mOIDDmfQAJgNAJgPQCckVBhmFQBYlcAIkpQAChBgCg2IAOhdQAiiPAfi2IAoj6MCPQBQ+MhLUCFNg");
        var mask_graphics_29 = new cjs.Graphics().p("EhrVAcJICOjOQDIkiBYhjQDFjdDpj2QDmjzA/hGQCEiUBniUQB0ijCOj7QC8lMBrk1QBJjTA6keQBGlTAbhgQBDjvB7jYQB3jTCxi/QBdhmDwjdQDejOB+iPQDBjcCTkEQAegzC9mOIDDmdQAKgOAIgPQCdkUBhmEQBYldAIkpQAChBgCg1IAPhdQAiiPAfi2IApj6MCPIBRKMhLbCFBg");
        var mask_graphics_30 = new cjs.Graphics().p("EhrWAb8ICPjOQDIkhBYhjQDFjcDpj1QDnjzA/hGQCEiUBniUQB0iiCOj7QC9lMBrkzQBJjUA7kdQBGlTAbhfQBDjwB7jXQB4jSCxjAQBdhlDwjdQDfjNB9iOQDCjdCTkDQAdgzC+mNIDEmdQAJgOAJgPQCckTBimEQBZlcAIkpQAChBgCg2IAPhcQAiiPAfi2IApj6MCPCBRXMhLkCE0g");
        var mask_graphics_31 = new cjs.Graphics().p("EhrWAbvICPjOQDIkgBYhjQDGjcDpj0QDnjyA+hGQCFiUBniTQB0ijCPj6QC9lLBrkzQBJjTA7kdQBHlTAbhfQBEjvB6jXQB4jSCyi/QBdhlDwjdQDfjMB9iOQDCjcCUkDQAdgzC+mMIDEmdQAKgOAIgOQCdkUBjmDQBYlcAJkoQAChBgBg2IAOhdQAjiOAfi2IApj5MCO6BRkMhLrCElg");
        var mask_graphics_32 = new cjs.Graphics().p("EhrWAbhICPjNQDIkgBYhiQDGjcDqj0QDnjxA+hGQCFiTBoiTQBziiCPj6QC+lLBrkzQBKjSA7kdQBHlTAbhfQBEjuB7jXQB4jSCyi+QBdhlDxjcQDejLB+iPQDCjbCUkCQAdgzC/mMIDEmcQAKgNAIgPQCekTBjmDQBYlbAKkoQAChBgCg2IAPhdQAiiOAgi2IApj5MCOyBRyMhLzCEXg");
        var mask_graphics_33 = new cjs.Graphics().p("EhrXAbTICPjNQDJkfBYhiQDGjbDqjzQDnjxA/hFQCFiUBoiTQB0ihCPj5QC+lLBrkyQBKjTA8kcQBHlSAbhfQBFjvB7jWQB4jRCyi+QBdhlDxjbQDfjLB+iOQDCjaCUkCQAegzC+mLIDFmcQAKgNAJgPQCdkSBjmDQBalbAJkoQADhAgCg2IAPhdQAiiOAgi1IAqj5MCOqBR/MhL8CEIg");
        var mask_graphics_34 = new cjs.Graphics().p("EhrXAbEICPjMQDJkfBZhhQDGjbDqjyQDnjxA/hFQCFiTBoiSQB0iiCPj4QC/lKBrkyQBLjSA8kcQBHlSAchfQBEjuB8jWQB4jRCyi9QBehlDxjaQDfjLB+iNQDCjaCVkCQAdgzC/mKIDGmaQAJgOAJgPQCekSBkmCQBZlaAKkoQAChBgBg1IAPhdQAjiOAfi1IArj5MCOhBSOMhMFCD5g");
        var mask_graphics_35 = new cjs.Graphics().p("EhrYAa1ICQjLQDJkfBZhhQDGjaDqjyQDojwA/hEQCFiTBoiSQB1ihCPj4QC/lJBskyQBLjSA8kcQBIlRAbhfQBFjuB8jVQB4jRCzi9QBdhkDxjaQDgjKB+iNQDDjZCUkBQAegzC/mKIDGmZQAKgOAIgPQCfkRBkmCQBalaAKknQADhBgCg2IAPhcQAjiOAgi1IArj4MCOZBSdMhMPCDog");
        var mask_graphics_36 = new cjs.Graphics().p("EhrYAamICQjLQDJkeBZhhQDHjaDqjxQDojvA/hEQCFiSBpiTQB0igCQj4QC/lIBskxQBLjSA9kbQBIlSAcheQBFjtB8jVQB5jRCyi8QBehkDxjZQDgjJB+iNQDDjZCVkBQAegyDAmJIDGmaQAKgNAIgPQCfkRBkmBQBblaAKknQADhAgCg2IAQhcQAjiOAgi1IArj4MCOQBSsMhMYCDZg");
        var mask_graphics_37 = new cjs.Graphics().p("EhrYAaWICQjKQDJkeBZhhQDHjYDrjxQDojuA/hFQCFiRBpiSQB1igCQj4QC/lHBtkxQBLjRA9kbQBJlRAcheQBFjuB8jUQB5jQCzi8QBehjDxjZQDgjJB+iMQDEjYCVkAQAegzDAmIIDHmZQAKgNAIgPQCfkQBlmBQBblZALknQADhAgCg2IAQhcQAjiNAgi1IArj4MCOHBS8MhMhCDHg");
        var mask_graphics_38 = new cjs.Graphics().p("EhrZAaGICRjKQDKkdBZhgQDHjZDrjwQDojtA/hEQCGiSBoiRQB1igCRj3QC/lHBukwQBLjRA9kaQBKlRAcheQBFjtB9jUQB5jPCzi8QBehjDyjYQDfjIB/iMQDDjYCWj/QAegzDBmHIDHmYQAKgNAIgPQCfkQBmmAQBblZAMkmQAChBgBg1IAQhcQAjiNAhi1IArj4MCN+BTMMhMrCC3g");
        var mask_graphics_39 = new cjs.Graphics().p("EhrZAZ1ICQjKQDLkbBZhhQDHjXDsjvQDojtBAhEQCFiRBpiRQB1igCRj2QDAlGBukwQBLjRA+kaQBJlQAdheQBGjsB8jUQB6jPCzi7QBehjDyjXQDgjHB/iMQDDjXCWj/QAegyDBmHIDImXQAKgOAJgOQCfkPBmmAQBclYAMkmQAChBgBg1IAQhcQAjiNAhi1IAsj3MCN0BTdMhM1CCkg");
        var mask_graphics_40 = new cjs.Graphics().p("EhrZAZkICQjJQDLkbBZhgQDIjXDsjvQDpjsA/hEQCFiQBqiRQB1ifCRj2QDAlFBukvQBMjRA+kZQBKlQAdheQBGjsB9jTQB6jPCzi6QBehjDyjWQDhjHB/iLQDEjWCWj/QAegyDBmGIDJmWQAJgOAJgOQCgkPBnl/QBclYAMkmQADhAgCg2IAQhbQAkiNAhi0IAsj3MCNqBTtMhM/CCSg");
        var mask_graphics_41 = new cjs.Graphics().p("EhraAZSICRjIQDMkbBZhfQDIjXDsjtQDpjsA/hDQCGiQBpiPQB2igCRj1QDBlFBukvQBNjQA+kZQBLlQAchdQBHjsB9jTQB6jOCzi6QBfhiDyjVQDhjGB/iLQDEjWCWj+QAegyDDmFIDImVQAKgOAJgPQCgkNBnl/QBdlXAMkmQADhAgBg2IAQhbQAkiNAii0IAsj3MCNgBT/MhNLCCAg");
        var mask_graphics_42 = new cjs.Graphics().p("EhraAZAICSjIQDLkaBZhfQDJjWDsjsQDpjrBAhEQCFiPBqiOQB2igCRj1QDClEBvkuQBMjQA/kZQBLlOAcheQBHjrB+jTQB6jNC0i5QBehiDzjVQDhjFB/iLQDEjVCXj9QAegyDDmEIDJmVQAKgNAJgPQCgkNBol+QBdlXANklQADhBgBg1IAQhcQAkiMAiizIAtj3MCNVBURMhNVCBsg");
        var mask_graphics_43 = new cjs.Graphics().p("EhraAYuICSjIQDLkZBahfQDIjVDtjsQDqjqA/hDQCGiPBqiNQB2igCSj0QDBlDBwkuQBNjPA/kZQBLlOAdheQBHjrB+jRQB6jNC0i5QBfhiDzjUQDhjEB/iKQDFjVCXj8QAegyDDmEIDKmTQAKgOAJgOQChkNBol9QBelWANklQADhBgBg1IAQhcQAliMAiizIAtj2MCNKBUjMhNgCBYg");
        var mask_graphics_44 = new cjs.Graphics().p("EhraAYbICSjHQDMkYBahfQDIjUDtjsQDqjpBAhDQCGiOBqiNQB2igCSjzQDClCBwkuQBNjOBAkZQBMlNAcheQBIjqB+jSQB7jMC0i4QBfhhDzjTQDhjECAiKQDFjTCXj8QAegyDEmDIDLmTQAJgNAJgPQChkLBpl9QBelWAOklQADhAgBg1IARhcQAkiLAji0IAtj1MCM/BU1MhNrCBEg");
        var mask_graphics_45 = new cjs.Graphics().p("EhraAYHICSjGQDMkXBahfQDJjTDtjrQDrjoA/hDQCHiOBqiMQB2ifCTjzQDClCBwksQBOjPBAkYQBMlNAdhdQBIjqB+jRQB8jMC0i3QBfhhDzjSQDijDB/iJQDGjTCXj8QAfgyDEmBIDLmSQAKgNAJgPQChkLBql8QBelVAPklQADhAgBg1IARhcQAkiLAjizIAuj2MCMzBVJMhN2CAwg");
        var mask_graphics_46 = new cjs.Graphics().p("EhraAX0ICSjGQDNkXBaheQDJjTDtjpQDrjoBAhCQCHiOBqiMQB2ieCTjyQDDlBBxksQBOjOBAkYQBNlMAdhdQBIjqB/jQQB8jMC0i2QBfhhD0jSQDhjCCAiIQDGjTCYj6QAegyDFmBIDMmRQAKgNAIgOQCikLBql7QBflVAPkkQAEhAgBg1IAQhcQAliLAjizIAvj1MCMnBVdMhOCCAag");
        var mask_graphics_47 = new cjs.Graphics().p("EhraAXfICTjFQDNkWBahdQDJjTDujoQDrjnBAhCQCHiNBqiMQB3ieCTjxQDElABxksQBOjNBBkXQBNlMAdhdQBJjpB/jQQB7jLC1i2QBfhgD0jRQDijBCAiIQDGjSCZj6QAegxDFmAIDNmQQAKgNAIgPQCjkKBql6QBglUAPkkQAEhAgBg2IARhbQAliLAjiyIAvj1MCMbBVwMhONCAFg");
        var mask_graphics_48 = new cjs.Graphics().p("EhraAXLICTjFQDOkVBahdQDKjSDtjnQDsjmBAhCQCHiMBqiMQB3idCUjxQDEk/BxkrQBPjNBBkXQBOlLAdhdQBJjpB/jPQB9jKC1i2QBfhfD0jQQDijBCAiHQDGjRCZj5QAfgyDGl/IDNmPQAKgNAIgOQCjkJBrl7QBglTAQkkQAEg/gBg2IARhaQAliLAkiyIAvj1MCMPBWFMhOZB/ug");
        var mask_graphics_49 = new cjs.Graphics().p("EhraAW2ICTjFQDOkTBbheQDKjQDujnQDsjlBAhBQCHiMBriLQB3idCUjwQDEk/BykqQBPjMBCkXQBOlLAehcQBJjpB/jOQB9jKC1i0QBfhgD1jPQDii/CBiHQDGjRCZj4QAfgxDGl+IDOmOQAKgOAJgOQCjkIBrl6QBhlSAQkkQAEhAAAg1IARhaQAliLAkiyIAvj0MCMDBWZMhOlB/Yg");
        var mask_graphics_50 = new cjs.Graphics().p("EhrZAWgICTjDQDOkUBbhcQDKjQDvjmQDsjkBAhBQCHiLBriLQB4idCUjvQDFk9BykqQBPjMBCkWQBPlKAehcQBKjoCAjOQB8jKC2izQBfhgD1jNQDji/CAiHQDHjPCaj4QAegxDHl9IDOmNQAKgNAJgOQCkkIBsl5QBhlSARkjQAEhAgBg1IAShaQAliLAkixIAwj0MCL1BWuMhOxB/Bg");
        var mask_graphics_51 = new cjs.Graphics().p("EhrZAWKICUjDQDOkSBbhcQDLjPDujlQDtjjBAhBQCHiJBsiMQB3icCVjvQDFk8BzkpQBQjMBCkVQBQlKAehcQBKjoCAjNQB9jJC2izQBfheD1jNQDji+CBiGQDHjPCaj3QAegxDIl8IDPmMQAKgNAJgOQCkkHBtl4QBhlRASkjQAEhAgBg1IAShaQAmiKAkiyIAwjzMCLoBXEMhO+B+pg");
        var mask_graphics_52 = new cjs.Graphics().p("Ehr2AVLICWjCQDUkRBchcQDOjNDyjkQDwjhBBhBQCKiIBtiLQB7icCYjuQDKk7B4kpQBSjMBHkVQBUlKAghdQBNjnCEjNQCAjIC4iyQBiheD4jLQDmi9CDiFQDKjNCej2QAfgxDOl8IDVmLQAKgNAJgOQCokGBzl5QBmlRAWkkQAFhAAAg1IAThaQAoiLAnixIA0j0MCKiBYyMhQ8B+Tg");
        var mask_graphics_53 = new cjs.Graphics().p("EhsSAUPICajBQDXkQBehcQDRjMD2jiQDzjfBChBQCMiHBwiLQB8iaCcjuQDPk6B8kpQBVjMBLkVQBZlLAhhcQBRjoCGjMQCDjIC8iwQBiheD8jJQDpi7CFiEQDNjMCij2QAggxDTl7IDbmKQAKgNAJgOQCskGB4l4QBslSAakkQAFhAACg2IAUhaQAqiLApixIA4j0MCJfBaZMhS0B98g");
        var mask_graphics_54 = new cjs.Graphics().p("EhsrATVICcjAQDckPBehbQDVjLD5jgQD2jeBEg+QCNiIByiLQB/iaCfjsQDTk6CAkpQBYjLBPkWQBelLAhhcQBVjoCJjLQCGjHC+iwQBkhdD+jHQDsi6CHiDQDQjLClj1QAhgxDYl6IDhmKQAKgMAKgPQCvkEB9l5QBxlSAdklQAHhAACg1IAVhbQAsiKAsiyIA7j1MCIeBb7MhUlB9mg");
        var mask_graphics_55 = new cjs.Graphics().p("EhtCASfICfjAQDekNBghbQDXjJD9jfQD5jbBFhAQCPiHB0iKQCAiZCjjsQDXk5CEkoQBbjMBSkWQBilLAjhcQBXjnCMjLQCJjHDAiuQBlhdECjGQDui4CJiCQDTjKCoj0QAigxDdl5IDlmJQALgNAKgOQCzkECCl4QB1lSAhkmQAHhAADg2IAWhbQAuiKAuiyIA+j1MCHgBdWMhWQB9Pg");
        var mask_graphics_56 = new cjs.Graphics().p("EhtYARrIChi/QDjkMBhhaQDZjIEAjeQD8jZBFg/QCSiHB1iJQCDiZCljrQDck4CHkoQBdjLBWkXQBmlLAkhcQBajnCOjLQCLjGDDitQBmhcEEjEQDxi3CLiCQDVjICsj0QAigwDil5IDqmIQALgNAKgOQC2kDCHl5QB5lRAkkmQAJhBADg2IAXhbQAwiKAwiyIBBj1MCGlBerMhX1B84g");
        var mask_graphics_57 = new cjs.Graphics().p("EhtsAQ7ICki+QDlkMBjhZQDbjIECjbQEAjYBGg/QCTiGB3iJQCEiYCojrQDfk3CLkoQBgjLBZkWQBplLAlhcQBdjnCRjKQCNjFDFitQBohbEGjDQDzi1CMiCQDYjHCvjzQAigwDnl4IDvmHQALgNAKgOQC5kDCLl4QB9lSAokmQAJhBADg2IAZhbQAxiKAyiyIBEj1MCFtBf5MhZUB8ig");
        var mask_graphics_58 = new cjs.Graphics().p("Eht+AQNICmi9QDokLBjhYQDfjHEEjaQECjXBGg/QCViFB5iIQCGiYCrjqQDik2COknQBijLBckWQBtlLAmhcQBfjoCTjJQCQjFDHirQBohbEJjCQD1izCOiBQDajGCxjzQAjgwDrl3IDzmGQALgNAKgOQC8kCCPl4QCBlSArknQAJhAAFg2IAZhbQAziKA0izIBGj0MCE4BhCMharB8Lg");
        var mask_graphics_59 = new cjs.Graphics().p("EhuPAPjICoi9QDrkJBkhYQDhjGEHjZQEEjWBHg+QCWiFB6iHQCIiXCtjqQDmk1CRknQBjjLBfkWQBwlLAnhcQBijnCVjJQCRjEDJiqQBqhbELjAQD3izCPiAQDcjFC0jyQAjgwDvl2ID3mGQALgNAKgNQC/kBCTl5QCDlRAuknQALhBAEg2IAbhbQA0iKA2izIBIj1MCEHBiGMhb9B73g");
        var mask_graphics_60 = new cjs.Graphics().p("EhueAO8ICqi8QDtkJBmhYQDijEEJjYQEGjVBIg+QCXiDB7iIQCKiWCvjpQDpk1CTkmQBmjLBhkWQBzlLAohcQBkjnCXjIQCTjEDLipQBqhaENjAQD5ixCQh/QDfjFC1jxQAkgwDyl1ID7mFQALgNALgOQDBkACWl4QCHlSAwknQALhBAGg2IAbhbQA1iKA3iyIBLj1MCDZBjDMhdIB7ig");
        var mask_graphics_61 = new cjs.Graphics().p("EhusAOYICsi7QDwkIBmhYQDkjDELjVQEIjWBIg9QCZiEB8iGQCLiWCxjpQDsk0CWkmQBnjKBjkWQB3lLAohcQBmjnCYjIQCWjDDLipQBshZEOi+QD7ixCRh+QDgjEC4jwQAlgwD1l1ID+mEQALgNALgOQDDkACal3QCJlSAzknQALhBAGg2IAchbQA2iLA5iyIBNj1MCCvBj7MheNB7Qg");
        var mask_graphics_62 = new cjs.Graphics().p("Ehu4AN4ICti7QDykHBnhXQDljDENjUQEKjVBJg9QCaiDB9iGQCMiWCzjoQDukzCYkmQBpjKBmkWQB4lLAqhbQBnjnCajHQCXjDDNioQBshZEQi+QD8ivCTh+QDijDC5jwQAlgwD4l0IEBmEQAMgMALgOQDFj/Ccl4QCMlRA1koQAMhBAGg2IAdhbQA3iKA6iyIBPj1MCCIBktMhfLB6+g");
        var mask_graphics_63 = new cjs.Graphics().p("EhuRANaICui6QD0kGBohXQDnjCEOjTQEMjUBJg9QCbiCB+iGQCNiWC1jnQDwkyCakmQBqjKBokWQB6lLAqhbQBpjnCcjHQCYjCDOioQBthYESi9QD9iuCTh+QDkjCC7jvQAlgwD7lzIEEmEQALgMALgOQDHj/Cfl3QCOlRA3koQANhBAGg2IAdhbQA5iKA7izIBQj0MCBlBlZMhgCB6ug");
        var mask_graphics_64 = new cjs.Graphics().p("EhsQANBICvi6QD2kGBohXQDojBEQjTQENjSBKg9QCbiCB/iGQCOiUC2jnQDykyCckmQBsjJBpkWQB9lLAqhcQBqjmCdjHQCajCDPimQBthZETi7QD/iuCUh9QDkjCC9jvQAmgvD9lzIEGmDQAMgMALgOQDIj+Chl4QCRlQA4koQANhBAHg3IAdhbQA5iKA9iyIBSj1MCBGBmBMhgzB6gg");
        var mask_graphics_65 = new cjs.Graphics().p("EhqhAMqICxi5QD3kGBohWQDqjBERjRQEOjSBKg9QCciCCAiFQCPiVC3jmQD0kyCeklQBsjJBqkWQB/lLArhbQBrjnCejGQCbjCDQimQBuhYEUi7QEAitCUh9QDmjAC+jvQAmgvD/lzIEImCQAMgNALgNQDKj+Cjl3QCSlRA6koQANhBAHg2IAehbQA6iKA+izIBSj0MCAsBmjMhheB6Sg");
        var mask_graphics_66 = new cjs.Graphics().p("EhpCAMXICxi5QD5kFBohWQDrjAESjRQEPjSBKg8QCdiCCBiFQCPiUC5jmQD1kxCfklQBtjKBrkVQCBlLArhbQBsjmCfjGQCbjCDSimQBuhXEVi7QEAisCWh9QDmjADAjuQAlgwEBlyIEKmCQAMgMALgOQDLj9Cll3QCTlRA8koQANhBAHg2IAfhbQA6iKA/iyIBUj1MCAUBnAMhiBB6Hg");
        var mask_graphics_67 = new cjs.Graphics().p("Ehn1AMHICyi5QD6kEBphWQDrjAETjQQEQjRBKg9QCeiBCBiEQCQiUC5jmQD2kxCgklQBvjJBskWQCBlKAshcQBtjmCgjGQCcjBDSilQBuhYEWi5QEBitCWh8QDnjADAjuQAngvEClyIELmBQAMgNALgNQDMj+Cml2QCVlRA8koQAOhBAHg3IAfhbQA7iJA/izIBVj0MCABBnXMhieB5+g");
        var mask_graphics_68 = new cjs.Graphics().p("Ehm4AL7ICyi5QD6kEBqhVQDrjAEUjQQERjRBKg8QCeiBCCiEQCQiUC6jmQD3kwChklQBvjJBtkWQCClKAshcQBujmCgjFQCdjBDSilQBvhYEWi5QECisCWh8QDojADBjtQAmgwEDlxIENmBQAMgNALgNQDNj9Cnl3QCVlQA+kpQANhBAIg2IAfhbQA7iKBAiyIBVj1MB/zBnqMhi1B53g");
        var mask_graphics_69 = new cjs.Graphics().p("EhmNALzICzi5QD6kEBqhVQDsjAEUjQQERjQBLg8QCeiBCCiEQCQiUC7jmQD4kwChklQBvjJBukVQCDlLAshbQBujmChjFQCdjBDTilQBvhYEXi5QECirCWh8QDoi/DCjuQAmgvEElyIENmAQAMgNALgOQDOj8Cnl3QCXlQA+kpQAOhBAHg2IAghbQA7iKBAiyIBWj1MB/oBn3MhjFB5yg");
        var mask_graphics_70 = new cjs.Graphics().p("Ehl0ALtIC0i4QD7kEBphVQDti/EUjQQESjRBKg8QCfiACCiFQCQiTC7jmQD4kwCiklQBwjJBukVQCDlKAshcQBvjmChjFQCdjBDTilQBvhXEXi5QECirCXh8QDoi/DCjuQAngvEElxIEOmBQAMgMALgOQDOj9Col2QCWlRA/koQAOhBAHg2IAghbQA8iKBAiyIBWj1MB/iBn+MhjQB5vg");
        var mask_graphics_71 = new cjs.Graphics().p("EhlsALsICzi5QD7kEBqhVQDti/EUjQQESjQBKg8QCfiBCCiEQCRiUC7jlQD4kwCiklQBvjJBukVQCElLAshbQBvjmChjFQCdjBDTilQBvhXEXi5QEDirCWh8QDpi/DCjuQAmgvEFlxIEOmBQAMgMALgOQDOj9Col2QCXlQA+kpQAOhBAIg2IAfhbQA8iKBAiyIBXj1MB/gBoBMhjTB5ug");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(1).to({
            graphics: mask_graphics_1,
            x: -836.9,
            y: -507.2
        }).wait(1).to({
            graphics: mask_graphics_2,
            x: -836.7,
            y: -507
        }).wait(1).to({
            graphics: mask_graphics_3,
            x: -836.1,
            y: -506.3
        }).wait(1).to({
            graphics: mask_graphics_4,
            x: -835,
            y: -505.2
        }).wait(1).to({
            graphics: mask_graphics_5,
            x: -833.5,
            y: -503.7
        }).wait(1).to({
            graphics: mask_graphics_6,
            x: -831.6,
            y: -501.7
        }).wait(1).to({
            graphics: mask_graphics_7,
            x: -829.2,
            y: -499.2
        }).wait(1).to({
            graphics: mask_graphics_8,
            x: -826.5,
            y: -496.4
        }).wait(1).to({
            graphics: mask_graphics_9,
            x: -823.3,
            y: -493.1
        }).wait(1).to({
            graphics: mask_graphics_10,
            x: -819.6,
            y: -489.3
        }).wait(1).to({
            graphics: mask_graphics_11,
            x: -815.6,
            y: -485.1
        }).wait(1).to({
            graphics: mask_graphics_12,
            x: -811.1,
            y: -480.5
        }).wait(1).to({
            graphics: mask_graphics_13,
            x: -806.2,
            y: -475.4
        }).wait(1).to({
            graphics: mask_graphics_14,
            x: -800.9,
            y: -469.9
        }).wait(1).to({
            graphics: mask_graphics_15,
            x: -795.1,
            y: -464
        }).wait(1).to({
            graphics: mask_graphics_16,
            x: -789,
            y: -457.6
        }).wait(1).to({
            graphics: mask_graphics_17,
            x: -782.4,
            y: -450.7
        }).wait(1).to({
            graphics: mask_graphics_18,
            x: -775.3,
            y: -443.4
        }).wait(1).to({
            graphics: mask_graphics_19,
            x: -767.9,
            y: -435.7
        }).wait(1).to({
            graphics: mask_graphics_20,
            x: -760,
            y: -427.6
        }).wait(1).to({
            graphics: mask_graphics_21,
            x: -751.7,
            y: -419
        }).wait(1).to({
            graphics: mask_graphics_22,
            x: -742.9,
            y: -409.9
        }).wait(1).to({
            graphics: mask_graphics_23,
            x: -733.7,
            y: -400.4
        }).wait(1).to({
            graphics: mask_graphics_24,
            x: -724.2,
            y: -390.5
        }).wait(1).to({
            graphics: mask_graphics_25,
            x: -714.1,
            y: -380.1
        }).wait(1).to({
            graphics: mask_graphics_26,
            x: -703.7,
            y: -369.3
        }).wait(1).to({
            graphics: mask_graphics_27,
            x: -692.8,
            y: -358.1
        }).wait(1).to({
            graphics: mask_graphics_28,
            x: -676,
            y: -346.4
        }).wait(1).to({
            graphics: mask_graphics_29,
            x: -652.5,
            y: -334.3
        }).wait(1).to({
            graphics: mask_graphics_30,
            x: -628.1,
            y: -321.7
        }).wait(1).to({
            graphics: mask_graphics_31,
            x: -602.9,
            y: -308.7
        }).wait(1).to({
            graphics: mask_graphics_32,
            x: -576.8,
            y: -295.2
        }).wait(1).to({
            graphics: mask_graphics_33,
            x: -549.9,
            y: -281.3
        }).wait(1).to({
            graphics: mask_graphics_34,
            x: -522.1,
            y: -267
        }).wait(1).to({
            graphics: mask_graphics_35,
            x: -493.4,
            y: -252.2
        }).wait(1).to({
            graphics: mask_graphics_36,
            x: -463.9,
            y: -237
        }).wait(1).to({
            graphics: mask_graphics_37,
            x: -433.6,
            y: -221.3
        }).wait(1).to({
            graphics: mask_graphics_38,
            x: -402.4,
            y: -205.2
        }).wait(1).to({
            graphics: mask_graphics_39,
            x: -370.3,
            y: -188.7
        }).wait(1).to({
            graphics: mask_graphics_40,
            x: -337.4,
            y: -171.7
        }).wait(1).to({
            graphics: mask_graphics_41,
            x: -303.6,
            y: -154.2
        }).wait(1).to({
            graphics: mask_graphics_42,
            x: -269,
            y: -136.4
        }).wait(1).to({
            graphics: mask_graphics_43,
            x: -233.5,
            y: -118.1
        }).wait(1).to({
            graphics: mask_graphics_44,
            x: -197.2,
            y: -99.3
        }).wait(1).to({
            graphics: mask_graphics_45,
            x: -160,
            y: -80.1
        }).wait(1).to({
            graphics: mask_graphics_46,
            x: -121.9,
            y: -60.5
        }).wait(1).to({
            graphics: mask_graphics_47,
            x: -83,
            y: -40.4
        }).wait(1).to({
            graphics: mask_graphics_48,
            x: -43.3,
            y: -19.9
        }).wait(1).to({
            graphics: mask_graphics_49,
            x: -2.7,
            y: 1.1
        }).wait(1).to({
            graphics: mask_graphics_50,
            x: 38.8,
            y: 22.5
        }).wait(1).to({
            graphics: mask_graphics_51,
            x: 81.1,
            y: 44.1
        }).wait(1).to({
            graphics: mask_graphics_52,
            x: 155.4,
            y: 104.5
        }).wait(1).to({
            graphics: mask_graphics_53,
            x: 225.8,
            y: 161.9
        }).wait(1).to({
            graphics: mask_graphics_54,
            x: 292.4,
            y: 216.1
        }).wait(1).to({
            graphics: mask_graphics_55,
            x: 355.2,
            y: 267.2
        }).wait(1).to({
            graphics: mask_graphics_56,
            x: 414.2,
            y: 315.3
        }).wait(1).to({
            graphics: mask_graphics_57,
            x: 469.4,
            y: 360.2
        }).wait(1).to({
            graphics: mask_graphics_58,
            x: 520.8,
            y: 402.1
        }).wait(1).to({
            graphics: mask_graphics_59,
            x: 568.4,
            y: 440.8
        }).wait(1).to({
            graphics: mask_graphics_60,
            x: 612.2,
            y: 476.5
        }).wait(1).to({
            graphics: mask_graphics_61,
            x: 652.2,
            y: 509
        }).wait(1).to({
            graphics: mask_graphics_62,
            x: 688.4,
            y: 538.5
        }).wait(1).to({
            graphics: mask_graphics_63,
            x: 715.8,
            y: 564.9
        }).wait(1).to({
            graphics: mask_graphics_64,
            x: 730.5,
            y: 588.1
        }).wait(1).to({
            graphics: mask_graphics_65,
            x: 743.3,
            y: 608.3
        }).wait(1).to({
            graphics: mask_graphics_66,
            x: 754.1,
            y: 625.3
        }).wait(1).to({
            graphics: mask_graphics_67,
            x: 763,
            y: 639.3
        }).wait(1).to({
            graphics: mask_graphics_68,
            x: 769.9,
            y: 650.1
        }).wait(1).to({
            graphics: mask_graphics_69,
            x: 774.8,
            y: 657.9
        }).wait(1).to({
            graphics: mask_graphics_70,
            x: 777.7,
            y: 662.5
        }).wait(1).to({
            graphics: mask_graphics_71,
            x: 778.6,
            y: 664.1
        }).wait(1));

        // Layer 2
        this.instance_1 = new lib.Bitmap345();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-204, -267, 0.561, 0.561);

        this.instance_2 = new lib.bg1213();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-412, -272, 0.678, 0.678);

        this.instance_1.mask = this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }]
        }, 1).wait(71));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-686, -159.7, 282, 300);


    (lib.cover = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            var frequency = 10;
            stage.enableMouseOver(frequency);
            this.moregames.cursor = "pointer";
            this.playbutton.cursor = "pointer";
            this.logo.cursor = "pointer";
            this.googleplay.cursor = "pointer";
            var buttonsArray = [this.googleplay, this.logo, this.playbutton, this.moregames];
            var buttonsArrayString = ["googleplay", "logo", "playbutton", "moregames"];
            var buttonClicked = "";
            for (var i = 0; i < buttonsArray.length; i++) {
                buttonsArray[i].name = buttonsArrayString[i];
                buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
                buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
            }

            function hoverButtons(event) {
                event.currentTarget.alpha = .8;
                event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
            }

            function houtButtons(event) {
                event.currentTarget.alpha = 1;
                event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
            }

            this.moregames.addEventListener("click", moregamesfunctionhere.bind(this));

            function moregamesfunctionhere(event) {
                exportRoot.moregamesfunction();
            }
            this.logo.addEventListener("click", logofunctionhere.bind(this));

            function logofunctionhere(event) {
                exportRoot.logofunction();
            }

            this.playbutton.addEventListener("click", playfunctionhere.bind(this));

            function playfunctionhere(event) {
                exportRoot.animInterLevels = "cover";
                exportRoot.goAnim();


            }
            this.googleplay.addEventListener("click", googleplayfunctionhere.bind(this));

            function googleplayfunctionhere(event) {
                exportRoot.googleplayfunction();
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer 2
        this.instance = new lib.Bitmap345();
        this.instance.parent = this;
        this.instance.setTransform(64, 0, 0.561, 0.561);

        this.playbutton = new lib.Symbol2();
        this.playbutton.parent = this;
        this.playbutton.setTransform(720.6, 530.2, 0.232, 0.232, 0, 0, 0, -479.8, -167.8);

        this.moregames = new lib.Symbol3();
        this.moregames.parent = this;
        this.moregames.setTransform(606.4, 532, 1.536, 1.536, 0, 0, 0, 169.2, -165.4);

        this.instance_1 = new lib.Bitmap344();
        this.instance_1.parent = this;
        this.instance_1.setTransform(373, 154, 0.63, 0.63);

        this.googleplay = new lib.Symbol12copy2();
        this.googleplay.parent = this;
        this.googleplay.setTransform(674.4, 409.5, 0.921, 0.921, 0, 0, 0, 124.3, 43.1);
        this.googleplay.visible = false;

        this.logo = new lib.logocopy();
        this.logo.parent = this;
        this.logo.setTransform(746, 40.9, 0.126, 0.126, 0, 0, 0, -1255.5, 199.5);
        new cjs.ButtonHelper(this.logo, 0, 1, 1);

        this.instance_2 = new lib.bg1213();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-5, -7, 0.681, 0.681);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.logo
            }, {
                t: this.googleplay
            }, {
                t: this.instance_1
            }, {
                t: this.moregames
            }, {
                t: this.playbutton
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5, -7, 816.8, 612.6);


    (lib.Symbol4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();

            this.animStars1 = function() {
                this.mcEffect.gotoAndPlay(1);
            }


            var frequency = 10;
            stage.enableMouseOver(frequency);
            var currentTargetNumChildren;
            var buttonsArray = [this.n, this.moregames, this.logo, this.chenar.a1, this.chenar.a2, this.chenar.a3, this.chenar.a4, this.chenar.a5,
                this.chenar.b1, this.chenar.b2, this.chenar.b3, this.chenar.b4, this.chenar.b5,
                this.chenar.c1, this.chenar.c2, this.chenar.c3, this.chenar.c4, this.chenar.c5,
                this.chenar.d1, this.chenar.d2, this.chenar.d3, this.chenar.d4, this.chenar.d5,
                this.chenar.e1, this.chenar.e2, this.chenar.e3, this.chenar.e4, this.chenar.e5,
                this.chenar.f1, this.chenar.f2, this.chenar.f3, this.chenar.f4, this.chenar.f5,
                this.chenar.g1, this.chenar.g2, this.chenar.g3, this.chenar.g4, this.chenar.g5,
                this.chenar.h1, this.chenar.h2, this.chenar.h3, this.chenar.h4, this.chenar.h5,
                this.finish_but, this.moregames1, this.logo1, this.rpl, this.pz1, this.pz2
            ];
            var buttonsArrayString = ["n", "moregames", "logo", "a1", "a2", "a3", "a4", "a5", "b1", "b2", "b3", "b4", "b5",
                "c1", "c2", "c3", "c4", "c5",
                "d1", "d2", "d3", "d4", "d5",
                "e1", "e2", "e3", "e4", "e5",
                "f1", "f2", "f3", "f4", "f5",
                "g1", "g2", "g3", "g4", "g5",
                "h1", "h2", "h3", "h4", "h5",
                "finish_but", "moregames1", "logo1", "rpl", "pz1", "pz2"
            ];
            var buttonClicked = "";
            for (var i = 0; i < buttonsArray.length; i++) {
                buttonsArray[i].cursor = "pointer";
                buttonsArray[i].name = buttonsArrayString[i];
                buttonsArray[i].addEventListener("mouseover", hoverButtons.bind(this));
                buttonsArray[i].addEventListener("mouseout", houtButtons.bind(this));
                buttonsArray[i].addEventListener("click", clickButtons.bind(this));
            }


            function clickButtons(event) {
                if (event.currentTarget.name.indexOf("n") > -1) {
                    exportRoot.animInterLevels = "interlevelscreen";
                    exportRoot.goAnim();
                }
                if (event.currentTarget.name.indexOf("finish_but") > -1) {
                    exportRoot.animInterLevels = "final";

                    exportRoot.goAnim();

                }
                if (event.currentTarget.name.indexOf("rpl") > -1) {
                    exportRoot.animInterLevels = "replay";
                    exportRoot.goAnim();

                }
                if (event.currentTarget.name.indexOf("moregames") > -1) {
                    exportRoot.moregamesfunction();
                }
                if (event.currentTarget.name.indexOf("logo") > -1) {
                    exportRoot.logofunction();
                }
                if (event.currentTarget.name.indexOf("pz1") > -1) {
                    exportRoot.poza1link();
                }
                if (event.currentTarget.name.indexOf("pz2") > -1) {
                    exportRoot.poza2link();
                }
                if (event.currentTarget.name.indexOf("a") > -1) {
                    this.change1(event.currentTarget.name, "aa");
                    this.animStars1();
                    var randNr = rand(0, 2);
                    exportRoot.annaSound();


                }
                if (event.currentTarget.name.indexOf("b") > -1) {
                    this.change2(event.currentTarget.name, "bb");
                    this.animStars1();
                    var randNr = rand(0, 2);
                    exportRoot.annaSound();
                }
                if (event.currentTarget.name.indexOf("c") > -1) {
                    this.change3(event.currentTarget.name, "cc");
                    this.animStars1();
                    var randNr = rand(0, 2);
                    exportRoot.annaSound();


                }
                if (event.currentTarget.name.indexOf("d") > -1) {
                    this.change4(event.currentTarget.name, "dd");
                    this.animStars1();
                    var randNr = rand(0, 2);
                    exportRoot.annaSound();


                }
                if (event.currentTarget.name.indexOf("e") > -1) {
                    this.change5(event.currentTarget.name, "ee");
                    this.animStars1();
                    var randNr = rand(0, 2);
                    exportRoot.annaSound();


                }
                if (event.currentTarget.name.indexOf("f") > -1) {
                    this.change6(event.currentTarget.name, "ff");
                    this.animStars1();
                    var randNr = rand(0, 2);
                    exportRoot.annaSound();


                }
                if (event.currentTarget.name.indexOf("g") > -1) {
                    this.change7(event.currentTarget.name, "gg");
                    this.animStars1();
                    var randNr = rand(0, 2);
                    exportRoot.annaSound();


                }
                if (event.currentTarget.name.indexOf("h") > -1) {
                    this.change8(event.currentTarget.name, "hh");
                    this.animStars1();
                    var randNr = rand(0, 2);
                    exportRoot.annaSound();


                }

            }


            //this.elsaAnnaDoingStuff = function(){
            //}
            function hoverButtons(event) {
                //if(event.currentTarget.name.indexOf("dress") > -1){
                //	this.addChildAt(event.currentTarget,this.getNumChildren()-1);
                //		//this.addChildAt(this.dulapfata,this.getNumChildren()-1);
                //}
                event.currentTarget.alpha = 0.8;
                event.currentTarget.shadow = new createjs.Shadow("#ffffff", 4, 4, 10);
            }

            function houtButtons(event) {
                event.currentTarget.alpha = 1;
                event.currentTarget.shadow = new createjs.Shadow("#ffffff", 0, 0, 0);
            }
            /*this.sortDresses = function(){
		
            }*/
            function rand(min, max, interval) {
                if (typeof(interval) === 'undefined') interval = 1;
                var r = Math.floor(Math.random() * (max - min + interval) / interval);
                return r * interval + min;
            }
            this.change1 = function(arg) {

                this.aa.gotoAndStop(arg);



            }



            this.change2 = function(arg) {
                this.bb.gotoAndStop(arg);



            }
            this.change3 = function(arg) {
                this.cc.gotoAndStop(arg);

            }

            this.change4 = function(arg) {
                this.dd.gotoAndStop(arg);

            }

            this.change5 = function(arg) {
                this.ee.gotoAndStop(arg);

            }

            this.change6 = function(arg) {
                this.ff.gotoAndStop(arg);

            }

            this.change7 = function(arg) {
                this.gg.gotoAndStop(arg);

            }
            this.change8 = function(arg) {
                this.hh.gotoAndStop(arg);

            }

            this.resetfunction = function(arg) {
                this.aa.gotoAndStop(0);
                this.bb.gotoAndStop(0);
                this.cc.gotoAndStop(0);
                this.dd.gotoAndStop(0);
                this.ee.gotoAndStop(0);
                this.ff.gotoAndStop(0);
                this.gg.gotoAndStop(0);
                this.hh.gotoAndStop(0);

            }
            /*this.animatieEliza = function(arg){
            	 createjs.Tween.get(arg)
            			 .to({y:4}, 700 , createjs.Ease.getPowInOut(2.2))
            			 .to({y:7}, 700 , createjs.Ease.getPowInOut(2.2));
            }
            this.animatieEliza(exportRoot.level1.eliza);*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // animatie
        this.mcEffect = new lib.star_2();
        this.mcEffect.parent = this;
        this.mcEffect.setTransform(437.1, -165.4, 3.562, 3.562, 0, 0, 0, -8.4, -200.3);

        this.timeline.addTween(cjs.Tween.get(this.mcEffect).wait(1));

        // butoane final
        this.rpl = new lib.Symbol56();
        this.rpl.parent = this;
        this.rpl.setTransform(729, 616.7, 1.114, 1.114, 0, 0, 0, -184.7, -85.1);

        this.logo1 = new lib.logocopy();
        this.logo1.parent = this;
        this.logo1.setTransform(424.9, 600.8, 0.14, 0.14, 0, 0, 0, -1235.3, 277.6);
        new cjs.ButtonHelper(this.logo1, 0, 1, 1);

        this.moregames1 = new lib.Symbol3();
        this.moregames1.parent = this;
        this.moregames1.setTransform(-125.9, 840.2, 1.286, 1.286, 0, 0, 0, 17.7, 13);

        this.pz2 = new lib.Symbol10copy2();
        this.pz2.parent = this;
        this.pz2.setTransform(695.8, 283, 0.68, 0.665, 0, 0, 0, 100.1, 100.3);

        this.pz1 = new lib.poza1link();
        this.pz1.parent = this;
        this.pz1.setTransform(734.4, 453.8, 0.529, 0.529, 0, 0, 0, 128.2, 128.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.pz1
            }, {
                t: this.pz2
            }, {
                t: this.moregames1
            }, {
                t: this.logo1
            }, {
                t: this.rpl
            }]
        }).wait(1));

        // butoane
        this.finish_but = new lib.Symbol55();
        this.finish_but.parent = this;
        this.finish_but.setTransform(749.1, 608, 0.779, 0.779, 0, 0, 0, -353.1, -250.8);

        this.moregames = new lib.Symbol3();
        this.moregames.parent = this;
        this.moregames.setTransform(56.2, 612.3, 1.435, 1.435, 0, 0, 0, 164.8, -163.4);

        this.logo = new lib.logocopy();
        this.logo.parent = this;
        this.logo.setTransform(746.6, 126.6, 0.136, 0.136, 0, 0, 0, -1283.5, 316.4);
        new cjs.ButtonHelper(this.logo, 0, 1, 1);

        this.n = new lib.Symbol54();
        this.n.parent = this;
        this.n.setTransform(744.5, 613.3, 1.386, 1.138, 0, 0, 0, -225.6, -186.7);

        this.chenar = new lib.Symbol5_1();
        this.chenar.parent = this;
        this.chenar.setTransform(409.7, 769.6, 0.683, 0.683, 0, 0, 0, 62.9, -389.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.chenar
            }, {
                t: this.n
            }, {
                t: this.logo
            }, {
                t: this.moregames
            }, {
                t: this.finish_but
            }]
        }).wait(1));

        // farfurie
        this.hh = new lib.Symbol41();
        this.hh.parent = this;
        this.hh.setTransform(277, 374.3, 0.614, 0.604, 0, 0, 0, 11524.2, -6232.2);

        this.timeline.addTween(cjs.Tween.get(this.hh).wait(1));

        // bete
        this.ff = new lib.Symbol52();
        this.ff.parent = this;
        this.ff.setTransform(514.2, 330.9, 0.285, 0.288, 0, 0, 0, 11353.2, 438.8);

        this.timeline.addTween(cjs.Tween.get(this.ff).wait(1));

        // decor2
        this.ee = new lib.Symbol51();
        this.ee.parent = this;
        this.ee.setTransform(517.9, 428.4, 0.398, 0.318, 0.1, 0, 0, 13304.9, -1116.5);

        this.timeline.addTween(cjs.Tween.get(this.ee).wait(1));

        // toping
        this.dd = new lib.Symbol50();
        this.dd.parent = this;
        this.dd.setTransform(-1467.8, 605.3, 0.407, 0.335, 0, 0, 0, 6575.7, 14.1);

        this.timeline.addTween(cjs.Tween.get(this.dd).wait(1));

        // decor
        this.cc = new lib.Symbol49();
        this.cc.parent = this;
        this.cc.setTransform(-939.9, 441, 0.416, 0.341, 0, 0, 0, 1890.6, 624);

        this.timeline.addTween(cjs.Tween.get(this.cc).wait(1));

        // decor3
        this.instance = new lib.Bitmap303();
        this.instance.parent = this;
        this.instance.setTransform(63, 264, 0.383, 0.383);

        this.gg = new lib.Symbol53();
        this.gg.parent = this;
        this.gg.setTransform(197.7, 375.1, 0.557, 0.597, 0.5, 0, 0, 2828, -728.6);

        this.instance_1 = new lib.Bitmap302();
        this.instance_1.parent = this;
        this.instance_1.setTransform(179, 308, 0.897, 0.912);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.gg
            }, {
                t: this.instance
            }]
        }).wait(1));

        // inghetata
        this.bb = new lib.Symbol48();
        this.bb.parent = this;
        this.bb.setTransform(520.4, 476.1, 0.499, 0.404, 0.2, 0, 0, 5541.9, -275.6);

        this.timeline.addTween(cjs.Tween.get(this.bb).wait(1));

        // blat
        this.aa = new lib.Symbol47();
        this.aa.parent = this;
        this.aa.setTransform(519.6, 542.7, 0.785, 0.661, 0.1, 0, 0, 2780.8, -48.8);

        this.instance_2 = new lib.bg1213();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-13, 66, 0.69, 0.671);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.aa
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-13, -278.3, 1911.4, 948.1);


    (lib.lipstik_btn3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.shape71("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(56.2, 11.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 78.3, 116);


    (lib.pomade_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 13
        this.instance = new lib.sprite549();
        this.instance.parent = this;
        this.instance.setTransform(-25.2, -117.8);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            _off: false
        }, 0).to({
            scaleX: 1.33,
            scaleY: 1.33,
            x: -84.3,
            y: -137.8
        }, 8).to({
            scaleX: 1,
            scaleY: 1,
            x: -69.4,
            y: -117.8,
            alpha: 0
        }, 4).to({
            _off: true
        }, 1).wait(32));

        // Layer 11
        this.lipstick_4 = new lib.lipstik_btn4();
        this.lipstick_4.parent = this;
        this.lipstick_4.setTransform(-52.6, -124.7);
        this.lipstick_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.lipstick_4).wait(10).to({
            _off: false
        }, 0).wait(5).to({
            scaleY: 0.85,
            y: -107.8
        }, 3).to({
            scaleY: 0.95,
            y: -119.1
        }, 2).wait(1).to({
            scaleY: 1,
            y: -124.7
        }, 0).wait(26));

        // Layer 9
        this.lipstick_6 = new lib.lipstik_btn6_2();
        this.lipstick_6.parent = this;
        this.lipstick_6.setTransform(-52.6, -124.7);
        this.lipstick_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.lipstick_6).wait(15).to({
            _off: false
        }, 0).to({
            x: -4.9,
            y: -103.3
        }, 3).wait(1).to({
            x: 11,
            y: -96.1
        }, 0).wait(1).to({
            scaleY: 0.85,
            y: -79.2
        }, 3).to({
            scaleY: 0.95,
            y: -90.5
        }, 2).wait(1).to({
            scaleY: 1,
            y: -96.1
        }, 0).wait(21));

        // Layer 7
        this.lipstick_5 = new lib.lipstik_btn5();
        this.lipstick_5.parent = this;
        this.lipstick_5.setTransform(11, -96.1);
        this.lipstick_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.lipstick_5).wait(20).to({
            _off: false
        }, 0).to({
            x: 63.6,
            y: -117.6
        }, 3).wait(1).to({
            x: 81.2,
            y: -124.7
        }, 0).wait(1).to({
            scaleY: 0.85,
            y: -107.8
        }, 3).to({
            scaleY: 0.95,
            y: -119.1
        }, 2).wait(1).to({
            scaleY: 1,
            y: -124.7
        }, 0).wait(16));

        // Layer 5
        this.lipstick_3 = new lib.lipstik_btn3();
        this.lipstick_3.parent = this;
        this.lipstick_3.setTransform(81.2, -124.7);
        this.lipstick_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.lipstick_3).wait(25).to({
            _off: false
        }, 0).to({
            x: 128.9,
            y: -103.3
        }, 3).wait(1).to({
            x: 144.8,
            y: -96.1
        }, 0).wait(1).to({
            scaleY: 0.85,
            y: -79.2
        }, 3).to({
            scaleY: 0.95,
            y: -90.5
        }, 2).wait(1).to({
            scaleY: 1,
            y: -96.1
        }, 0).wait(11));

        // Layer 3
        this.lipstick_2 = new lib.lipstik_btn2_1();
        this.lipstick_2.parent = this;
        this.lipstick_2.setTransform(144.8, -96.1);
        this.lipstick_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.lipstick_2).wait(30).to({
            _off: false
        }, 0).to({
            x: 192.5,
            y: -117.6
        }, 3).wait(1).to({
            x: 208.5,
            y: -124.7
        }, 0).wait(1).to({
            scaleY: 0.85,
            y: -107.8
        }, 3).to({
            scaleY: 0.95,
            y: -119.1
        }, 2).wait(1).to({
            scaleY: 1,
            y: -124.7
        }, 0).wait(6));

        // Layer 2
        this.instance_1 = new lib.shape547("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-46, -123);

        this.instance_2 = new lib.shape548("synched", 0);
        this.instance_2.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: []
        }, 1).wait(45));

        // Layer 1
        this.lipstick_1 = new lib.lipstik_btn1();
        this.lipstick_1.parent = this;
        this.lipstick_1.setTransform(208.5, -124.7);
        this.lipstick_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.lipstick_1).wait(35).to({
            _off: false
        }, 0).to({
            x: 273.6,
            y: -110.8
        }, 4).to({
            x: 273.4
        }, 1).to({
            scaleY: 0.85,
            y: -93.8
        }, 3).to({
            scaleY: 1,
            y: -110.8
        }, 3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.6, -123, 42.6, 116);


    // stage content:



    (lib.game = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.level1.visible = false;





            var animInterLevels;
            createjs.Touch.enable(stage);
            this.goAnim = function() {
                this.animinterlevel.gotoAndPlay(1);
            }
            this.goNextScene = function() {
                switch (this.animInterLevels) {
                    case "cover":
                        exportRoot.level1.visible = true;
                        exportRoot.cover.visible = false;
                        exportRoot.level1.chenar.gotoAndStop(0);
                        exportRoot.level1.finish_but.visible = false;
                        exportRoot.level1.moregames1.visible = false;
                        exportRoot.level1.logo1.visible = false;
                        exportRoot.level1.rpl.visible = false;
                        exportRoot.level1.pz1.visible = false;
                        exportRoot.level1.pz2.visible = false;


                        break;
                    case "level2":
                        this.level2.visible = true;
                        this.level1.visible = false;
                        this.interlevel.visible = false;
                        this.cover.visible = false;
                        //exportRoot.showAds();
                        break;

                        //	case "level3":
                        //	this.level3.visible = true;
                        //	this.level2.visible = false;
                        //	this.level1.visible = false;
                        //	this.interlevel.visible = false;
                        //	this.cover.visible = false;
                        //	//exportRoot.showAds();
                        //break;

                    case "interlevelscreen":
                        if (exportRoot.level1.chenar.currentFrame == 2) {
                            exportRoot.level1.chenar.gotoAndStop(exportRoot.level1.chenar.currentFrame + 1);


                        } else if (exportRoot.level1.chenar.currentFrame == 6) {
                            exportRoot.level1.finish_but.visible = true;
                            exportRoot.level1.n.visible = false;
                            exportRoot.level1.chenar.gotoAndStop(exportRoot.level1.chenar.currentFrame + 1);
                        } else {
                            exportRoot.level1.chenar.gotoAndStop(exportRoot.level1.chenar.currentFrame + 1);
                        }
                        break;
                    case "final":

                        exportRoot.level1.moregames1.visible = true;
                        exportRoot.level1.logo1.visible = true;
                        exportRoot.level1.rpl.visible = true;
                        exportRoot.level1.pz1.visible = true;
                        exportRoot.level1.pz2.visible = true;
                        exportRoot.level1.moregames.visible = false;
                        exportRoot.level1.chenar.visible = false;
                        exportRoot.level1.logo.visible = false;
                        exportRoot.level1.finish_but.visible = false;
                        exportRoot.level1.n.visible = false;


                        break;
                    case "replay":

                        this.cover.visible = true;
                        this.level1.visible = false;
                        exportRoot.level1.logo1.visible = false;
                        exportRoot.level1.rpl.visible = false;
                        exportRoot.level1.pz1.visible = false;
                        exportRoot.level1.pz2.visible = false;
                        exportRoot.level1.moregames.visible = true;
                        exportRoot.level1.logo.visible = true;
                        exportRoot.level1.n.visible = true;
                        exportRoot.level1.chenar.visible = true;
                        exportRoot.level1.resetfunction();
                        //gdApi.showBanner();




                        break;
                }
            }

            this.fadeInElement = function(arg) {
                arg.alpha = 0;
                createjs.Tween.get(arg, {
                        loop: false
                    })
                    .to({
                        alpha: 1
                    }, 500, createjs.Ease.getPowInOut(2));
            }
            this.fadeOutElement = function(arg) {
                arg.alpha = 1;
                createjs.Tween.get(arg, {
                        loop: false
                    })
                    .to({
                        alpha: 0
                    }, 500, createjs.Ease.getPowInOut(2));
            }
            this.nextFrame = function(arg, arg2) {
                var nextFrameVar = arg.currentFrame + 1;
                if (arg2 == "play") {
                    arg.gotoAndPlay(nextFrameVar);
                } else if (arg2 == "stop") {
                    arg.gotoAndStop(nextFrameVar);
                }
            }
            this.showAds = function() {
                exportRoot.stopSnd();
                exportRoot.removeSnd();
                window[preroll.config.loaderObjectName].refetchAd();
            }
            // -- << more games



            /*function poza1function(event) {
            	exportRoot.poza1link();
            }*/

            createjs.Touch.enable(stage);

            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
            if (isAndroid) {
                // Do something!
                // Redirect to Android-site?
                exportRoot.cover.googleplay.visible = true;
            }

            this.googleplayfunction = function() {
                window.open("market://search?q=pub:3GG Studio", "_blank");
            }


            this.moregamesfunction = function() {
                exportRoot.stopSnd();
                var gamename = 'halloween-special-party-cake';
                var mainwebsite = 'https://buzzmavo.com/category/girls/';
                var stringHost = detect_parent();

                if (stringHost == "rosy") {
                    stringHost = window.location.hostname;
                }
                var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=moregames&utm_campaign=" + gamename;
                realClick(urlsite);
            }
            this.logofunction = function() {
                exportRoot.stopSnd();
                var gamename = 'halloween-special-party-cake';
                var mainwebsite = 'https://buzzmavo.com/category/girls/';
                var stringHost = detect_parent();

                if (stringHost == "rosy") {
                    stringHost = window.location.hostname;
                }
                var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=logo&utm_campaign=" + gamename;
                realClick(urlsite);
            }


            this.poza1link = function() {
                exportRoot.stopSnd();
                var gamename = 'halloween-special-party-cake';
                var mainwebsite = 'https://buzzmavo.com/category/girls/';
                var stringHost = detect_parent();

                if (stringHost == "rosy") {
                    stringHost = window.location.hostname;
                }
                var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Shopping_Mall_Princess&utm_campaign=" + gamename;
                realClick(urlsite);
            }
            this.poza2link = function() {
                exportRoot.stopSnd();
                var gamename = 'halloween-special-party-cake';
                var mainwebsite = 'https://buzzmavo.com/category/girls/';
                var stringHost = detect_parent();

                if (stringHost == "rosy") {
                    stringHost = window.location.hostname;
                }
                var urlsite = mainwebsite + "?utm_source=" + stringHost + "&utm_medium=html5game&utm_content=Princesses_Closet&utm_campaign=" + gamename;
                realClick(urlsite);
            }








            /*this.addthegame = function () {
            	window.open("http://www.playrosy.com/ourgames.html?thegame=rapunzel-and-flynn-happy-family", "_blank");
            }*/

            function detect_parent() {
                var iframe = (parent !== window);
                var url = null;
                if (iframe) {
                    url = document.referrer;
                    ref = url.match(/:\/\/(.[^/]+)/)[1];
                    return ref;
                }
                return "rosy";
            }
            exportRoot.fullscreenBtn.addEventListener("mousedown", toggleFullScreen);

            function toggleFullScreen() {
                var doc = window.document;
                var docEl = doc.documentElement;

                var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
                var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

                if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                    requestFullScreen.call(docEl);
                } else {
                    cancelFullScreen.call(doc);
                }
            }
            var sparklesSound;

            var clickSound;

            var soundOn = 1;

            var isvisible = true;





            bgSnd = createjs.Sound.play("bgmusic", createjs.Sound.INTERRUPT_NONE);

            bgSnd.volume = 0.2;

            bgSnd.on("complete", handleComplete);



            exportRoot.sndBtn.addEventListener("mousedown", sndBtnF);

            function handleComplete() {

                if (soundOn == 1) {

                    if (bgSnd != null) {

                        bgSnd.play();

                    }

                }

            }

            exportRoot.startSnd = function() {

                soundOn = 1;

                exportRoot.sndBtn.gotoAndStop(0);

                playBg();

            }
            exportRoot.removeSnd = function() {

                bgSnd = null;

            }


            function playBg() {

                if (bgSnd == null) {
                    bgSnd = createjs.Sound.play("bgmusic", createjs.Sound.INTERRUPT_NONE);
                    bgSnd.volume = 0.2;
                    bgSnd.on("complete", handleComplete);

                } else {

                    if (soundOn == 1) {

                        bgSnd.play();

                    } else {

                        bgSnd.stop();

                    }
                }

            }



            exportRoot.stopSnd = function() {

                if (bgSnd != null) {
                    soundOn = 0;
                    bgSnd.stop();
                    exportRoot.sndBtn.gotoAndStop(1);

                }

            }

            function sndBtnF() {

                if (soundOn == 1) {

                    soundOn = 0;

                    exportRoot.sndBtn.gotoAndStop(1);

                    exportRoot.stopSnd();

                } else {
                    bgSnd = null;
                    soundOn = 1;

                    exportRoot.sndBtn.gotoAndStop(0);
                    playBg();
                }

            }

            exportRoot.sparklesSound = function() {

                if (soundOn == 1) {

                    sparklesSound = createjs.Sound.play("sparkles", createjs.Sound.INTERRUPT_NONE)

                    sparklesSound.volume = 0.8;

                }

            }

            exportRoot.pigeonSound = function() {

                if (soundOn == 1) {

                    sparklesSound = createjs.Sound.play("pigeonsound", createjs.Sound.INTERRUPT_NONE)

                    sparklesSound.volume = 0.8;

                }

            }
            exportRoot.annaSound = function() {
                var randNumber = rand(0, 2);

                if (soundOn == 1 && randNumber == 1) {
                    annaSound = createjs.Sound.play("annaSound", createjs.Sound.INTERRUPT_NONE)
                    annaSound.volume = 0.3;
                }
            }

            function rand(min, max, interval) {
                if (typeof(interval) === 'undefined') interval = 1;
                var r = Math.floor(Math.random() * (max - min + interval) / interval);
                return r * interval + min;
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // animatie
        this.animinterlevel = new lib.animinter();
        this.animinterlevel.parent = this;
        this.animinterlevel.setTransform(409.5, 264.9);

        this.timeline.addTween(cjs.Tween.get(this.animinterlevel).wait(1));

        // but sunet
        this.fullscreenBtn = new lib.Symbol10_1();
        this.fullscreenBtn.parent = this;
        this.fullscreenBtn.setTransform(-583.5, -69.9, 0.307, 0.306, 0, 0, 0, 1.3, -1.3);

        this.sndBtn = new lib.Symbol2copy9();
        this.sndBtn.parent = this;
        this.sndBtn.setTransform(17.5, 19, 0.13, 0.13, 0, 0, 0, 622.6, 516.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.sndBtn
            }, {
                t: this.fullscreenBtn
            }]
        }).wait(1));

        // level1
        this.level1 = new lib.Symbol4();
        this.level1.parent = this;
        this.level1.setTransform(397.4, 246.5, 1, 1, 0, 0, 0, 400, 314.5);

        this.timeline.addTween(cjs.Tween.get(this.level1).wait(1));

        // cover
        this.cover = new lib.cover();
        this.cover.parent = this;
        this.cover.setTransform(400, 314.5, 1, 1, 0, 0, 0, 400, 314.5);

        this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-183.9, -46.3, 2479.7, 951.9);

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;