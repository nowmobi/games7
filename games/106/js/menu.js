class Menu extends Phaser.Scene {    
    constructor() {
        super({key: 'menu'});
    }
    
    create() {    	

        // start playing music
        this.input.on('pointerdown', (pointer) => {
            if (game.sound.context.state === 'suspended') {
                game.sound.context.resume();
            }
        });

        // make sounds
        let sounds = this.scene.get("sounds");
        sounds.makeSounds(this);
        // play the music
        this.musicMenu.play();

        this.bgMenu = this.add.image(width/2-50, height/2+20, 'bgMenu');

        // play button, start the game
        this.buttonStart = this.add.sprite(width-15, height-15, 'buttonPlay').setOrigin(1,1);
        this.buttonStart.setInteractive({useHandCursor: true});
        this.buttonStart.on("pointerup", ()=> {
            this.musicMenu.stop();
            this.scene.start("gameplay");
        });
        // button how to
        this.buttonHowTo = this.add.sprite(width-15, height-130, 'buttonHowToPlay').setOrigin(1,1);
        this.buttonHowTo.setInteractive({useHandCursor: true});
        this.buttonHowTo.on("pointerup", ()=> {
            this.showHowToPlay();
        });

        this.buttonStart.on("pointerover", () => {
            this.buttonStart.setFrame(1);
        });
        this.buttonStart.on("pointerout", () => {
            this.buttonStart.setFrame(0);
        });
        this.buttonHowTo.on("pointerover", () => {
            this.buttonHowTo.setFrame(1);
        });
        this.buttonHowTo.on("pointerout", () => {
            this.buttonHowTo.setFrame(0);
        });

        // how to play scene
        this.makeHowToPlayScene();
        this.hideHowToPlay();
    }

    makeHowToPlayScene() {
        this.bgHowTo = this.add.image(width/2, height/2-20, 'bgHowTo');

        this.txtHowTo = this.add.text(20, 10, "HOW TO PLAY", { fontFamily: "SFSlapstickComic", fontSize: 55, align: "left", stroke: '#000000', strokeThickness: 7, color: '#FFFF00' }).setOrigin(0,0);

        // catch tasty items
        this.txtCatch = this.add.text(20, 130, "Catch tasty items to build your sandwich.", { fontFamily: "ErasDemi", fontSize: 29, align: "left", stroke: '#000000', color: '#5BF2F1', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0,0.5);

        this.txtAvoid = this.add.text(565, height/2-10, "Avoid the yucky items or you\nwill increase the ick-meter. If you catch\n three bad items, the game is over.", { fontFamily: "ErasDemi", fontSize: 29, align: "center", stroke: '#000000', color: '#5BF2F1', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0,0.5);

        this.txtInstructions = this.add.text(width/2+40, height-20, "The taller the sandwich, the more points you will earn!\nThe toaster will randomly pop up pieces of bread.\nIf you're done with your sandwich, catch the bread.\nIf not, you can let it fall and keep building your\nsandwich for more points. But be careful...\nif your sandwich gets too tall, the game is over.", { fontFamily: "ErasDemi", fontSize: 29, align: "center", stroke: '#000000', color: '#5BF2F1', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,1);

        // play
        this.buttonPlay = this.add.sprite(width-10, height-15, 'buttonPlay').setOrigin(1,1);
        this.buttonPlay.setInteractive({useHandCursor: true});
        this.buttonPlay.on("pointerup", ()=> {
            this.musicMenu.stop();
            this.scene.start("gameplay");
        });

        this.buttonPlay.on("pointerover", () => {
            this.buttonPlay.setFrame(1);
        });
        this.buttonPlay.on("pointerout", () => {
            this.buttonPlay.setFrame(0);
        });
    }

    showHowToPlay() {
        this.buttonPlay.setVisible(true);
        this.txtInstructions.setVisible(true);
        this.txtAvoid.setVisible(true);
        this.txtCatch.setVisible(true);
        this.txtHowTo.setVisible(true);
        this.bgHowTo.setVisible(true);
    }

    hideHowToPlay() {
        this.buttonPlay.setVisible(false);
        this.txtInstructions.setVisible(false);
        this.txtAvoid.setVisible(false);
        this.txtCatch.setVisible(false);
        this.txtHowTo.setVisible(false);
        this.bgHowTo.setVisible(false);
    }
}