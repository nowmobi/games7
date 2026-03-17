class GameOver extends Phaser.Scene {    
    constructor() {
        super({key: 'gameOver'});
    }
    
    create() {  
        this.bg = this.add.image(width/2, height/2, 'bgGameOver');

        // game over text
        this.txtGameOver = this.add.text(width/2 + 120, 20, "AH BLITZNAK! LOOKS LIKE YOU\nNEED TO WORK ON YOUR\nSANDWICH-STACKER SKILLS.\nKEEP TRYING!", { fontFamily: "SFSlapstickComic", fontSize: 50, align: "center", color: '#FFFF00', shadow: {
            offsetX: 4,
            offsetY: 3,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);

        // text final score
        this.txtFinalScore = this.add.text(width/2 + 120, 220, "FINAL SCORE:", { fontFamily: "SFSlapstickComic", fontSize: 50, align: "left", color: '#5BF2F1', shadow: {
            offsetX: 4,
            offsetY: 3,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);

        // finaly score
        this.numScore = this.add.text(width/2 + 110, 280, finalScore.toString(), { fontFamily: "SFSlapstickComic", fontSize: 50, align: "left", color: '#FFFF00', shadow: {
            offsetX: 4,
            offsetY: 3,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);

        // menu button
        this.buttonMenu = this.add.sprite(width-10, height-15, 'buttonMenu').setOrigin(1,1);
        this.buttonMenu.setInteractive({useHandCursor: true});
        this.buttonMenu.on("pointerup", ()=> {
            finalScore = 0;
            this.scene.start("menu");
        });
        // button play again
        this.buttonPlayAgain = this.add.sprite(width-10, height-125, 'buttonPlayAgain').setOrigin(1,1);
        this.buttonPlayAgain.setInteractive({useHandCursor: true});
        this.buttonPlayAgain.on("pointerup", ()=> {
            finalScore = 0;
            this.scene.start("gameplay");
            gameMusic.resume();
        });

        this.buttonMenu.on("pointerover", () => {
            this.buttonMenu.setFrame(1);
        });
        this.buttonMenu.on("pointerout", () => {
            this.buttonMenu.setFrame(0);
        });
        this.buttonPlayAgain.on("pointerover", () => {
            this.buttonPlayAgain.setFrame(1);
        });
        this.buttonPlayAgain.on("pointerout", () => {
            this.buttonPlayAgain.setFrame(0);
        });

        // show ad
        if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            if (levelNumber % 2 === 0) {
                // pause music
                gameMusic.pause();
                sdk.showBanner();
            }
        }
    }
}