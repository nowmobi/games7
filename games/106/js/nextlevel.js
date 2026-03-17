class NextLevel extends Phaser.Scene {    
    constructor() {
        super({key: 'nextLevel'});
    }
    
    create() {    	
        this.bg = this.add.image(width/2-20, height/2+60, 'bgNextLevel');

        this.randomText = Phaser.Math.Between(1,5);

        if (this.randomText === 1) {
            this.message = "EXCELLENT SANDWICH!\n\nMAKE ANOTHER ONE!";
        }
        else if (this.randomText === 2) {
            this.message = "NICE SANDWICH WORK!\n\nKEEP IT UP!";
        }
        else if (this.randomText === 3) {
            this.message = "SANDWICH BREAK!\n\nYUM!";
        }
        else if (this.randomText === 4) {
            this.message = "NOTHING BEATS\n\nA PERFECT SANDWICH!";
        }
        else if (this.randomText === 5) {
            this.message = "625 IS STILL\nHUNGRY!\nKEEP GOING!";
        }

        // text
        this.txtExcellent = this.add.text(width/2 + 280, 25, this.message, { fontFamily: "SFSlapstickComic", fontSize: 55, align: "center", color: '#FFFF00', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);
        
        // level
        this.txtLevel = this.add.text(width/2 + 280, 220, "LEVEL "+ levelNumber, { fontFamily: "SFSlapstickComic", fontSize: 55, align: "center", color: '#FFFF00', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);

        // text score
        this.txtScore = this.add.text(width/2 + 280, 315, "SCORE:", { fontFamily: "SFSlapstickComic", fontSize: 55, align: "center", color: '#5BF2F1', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);

        // score
        this.numScore = this.add.text(width/2 + 280, 375, finalScore.toString(), { fontFamily: "SFSlapstickComic", fontSize: 55, align: "center", color: '#FFFF00', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);

        // menu button
        this.buttonContinue = this.add.sprite(width-10, height-15, 'buttonContinue').setOrigin(1,1);
        this.buttonContinue.setInteractive({useHandCursor: true});
        this.buttonContinue.on("pointerup", ()=> {
            this.scene.start("gameplay");
            gameMusic.resume();
        });

        this.buttonContinue.on("pointerover", () => {
            this.buttonContinue.setFrame(1);
        });
        this.buttonContinue.on("pointerout", () => {
            this.buttonContinue.setFrame(0);
        });

        // show ad
        if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            if (levelNumber %2 != 0) {
                // pause music
                gameMusic.pause();
                sdk.showBanner();
            }
        }
    }
}