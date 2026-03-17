class Gameplay extends Phaser.Scene {
    
    constructor() {
        super({key: 'gameplay'})
    }
    
    create() {
        // init
        this.playerWalkingAnim = false;
        this.gameStarted = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.gamePaused = false;
        this.quitVisible = false;
        this.levelCompleted = false;
        this.gamePoints = 0;    // points in one level
        this.speed = 4.9;       // falling
        this.playerSpeed = 6.5;
        this.breadComing = false;
        this.numberOfItems = 0; // number of created tasty/yucky items
        this.getHitPlaying = false; // animation
        this.overButton = false; // pointer over help/quit/pause

        // level number
        levelNumber++;
        // arrays
        this.tastyItems = [];
        this.yuckyItems = [];
        this.itemsInSandwich = [];

        // make sounds
        let sounds = this.scene.get("sounds");
        sounds.makeSounds(this);
        // play the music
        if (musicIsPlaying === false) {
            gameMusic.play();
            musicIsPlaying = true;
        }

        this.bg = this.add.image(width/2, height/2, 'bg');
        this.toaster = this.add.sprite(width-10, height+15, 'toaster').setOrigin(1,1);

        // score
        this.txtScore = this.add.text(width-15, 5, finalScore.toString(),{ fontFamily: "SFSlapstickComic", fontSize: 50, align: "right", stroke: '#000000', strokeThickness: 7, color: '#e1c70b' }).setOrigin(1,0);
        // ick-meter
        this.txtIckMeter = this.add.text(width-10, 67, "ICK-METER",{ fontFamily: "SFSlapstickComic", fontSize: 28, align: "right", stroke: '#000000', strokeThickness: 4, color: '#e1c70b' }).setOrigin(1,0);
        this.ickMeter = this.add.sprite(width-5, 100, 'ickMeter').setOrigin(1,0);
        this.ickMeter.setScale(.6,1);
        this.ickMeter.setFrame(ickMeterFrame)
        // help
        this.buttonHelp = this.add.image(width-15, height/2 - 19, 'buttonHelp').setOrigin(1,0.5).setInteractive({useHandCursor: true });
        this.buttonHelp.on("pointerup", () => {
            this.pauseTheGame();
            this.children.sendToBack(this.player);
            this.showHowToPlay();
        });
        // quit
        this.buttonQuit = this.add.image(width-15, height/2 - 110, 'buttonQuit').setOrigin(1,0.5).setInteractive({useHandCursor: true });
        this.buttonQuit.on("pointerup", () => {
            this.children.bringToTop(this.player);
            if (this.quitVisible === true) {
                this.hideQuitBox();
            }
            else {
                this.showQuitBox();
            }
            this.quitVisible = !this.quitVisible;
            this.pauseTheGame();
        });
        // pause
        this.buttonPause = this.add.image(width-15, height/2 + 70, 'buttonPause').setOrigin(1,0.5).setInteractive({useHandCursor: true });
        this.buttonPause.on("pointerup", () => {
            this.gamePaused = !this.gamePaused;
            this.buttonResume.setVisible(true);
            this.buttonPause.setVisible(false);
            this.buttonQuit.setVisible(false);
            this.buttonHelp.setVisible(false);
            this.pauseTheGame();
            this.player.anims.play("paused");
            gameMusic.pause();
        });

        this.buttonQuit.setScale(.8,.8);
        this.buttonPause.setScale(.8,.8);
        this.buttonHelp.setScale(.8,.8);

        // button resume
        this.buttonResume = this.add.sprite(width-100, height/2, 'buttonPlay').setOrigin(0.5,0.5);
        this.buttonResume.setInteractive({useHandCursor: true});
        this.buttonResume.on("pointerup", ()=> {
            // resume the game
            this.buttonResume.setVisible(false);
            this.buttonPause.setVisible(true);
            this.buttonQuit.setVisible(true);
            this.buttonHelp.setVisible(true);
            // resume the game
            this.player.setFrame(0);
            this.gamePaused = false;
            this.itemTimer.paused = false;
            gameMusic.resume();
        });
        this.buttonResume.setVisible(false);
        this.tweens.add({
            targets: [this.buttonResume],
            duration: 900,
            scaleX: .94,
            scaleY: .94,
            repeat: -1,
            yoyo: true
        });
        
        // mouse over/out
        this.buttonQuit.on("pointerover", () => {
            this.buttonQuit.setFrame(1);
        });
        this.buttonQuit.on("pointerout", () => {
            this.buttonQuit.setFrame(0);
        });
        this.buttonHelp.on("pointerover", () => {
            this.buttonHelp.setFrame(1);
        });
        this.buttonHelp.on("pointerout", () => {
            this.buttonHelp.setFrame(0);
        });
        this.buttonPause.on("pointerover", () => {
            this.buttonPause.setFrame(1);
        });
        this.buttonPause.on("pointerout", () => {
            this.buttonPause.setFrame(0);
        });

        // the player
        this.player = this.add.sprite(width/2, height+20, 'player').setOrigin(0.5,1);
        this.catchArea = this.add.image(this.player.x, this.player.y, 'catchArea').setScale(2.2, 1);
        this.catchArea.alpha = 0;

        // show level number
        this.txtLevel = this.add.text(width/2, height/2 - 100, "LEVEL " + levelNumber.toString(),{ fontFamily: "SFSlapstickComic", fontSize: 75, align: "center", stroke: '#000000', strokeThickness: 10, color: '#FFFF00' }).setOrigin(.5,0.5);
        this.txtLevel.setScale(0,0);

        this.tweens.add({
            targets: [this.txtLevel],
            ease: "Bounce",
            duration: 1100,
            scaleX: 1,
            scaleY: 1,
            onComplete: () => {
                this.time.delayedCall(700, () => {
                    this.tweens.add({
                        targets: [this.txtLevel],
                        alpha: 0,
                        duration: 250,
                        onComplete: () => {
                            this.txtLevel.destroy();
                        }
                    });
                    // start game
                    this.makeSandwich();
                })
            }
        })
        
        // key down
        if (this.sys.game.device.os.desktop){
            this.input.keyboard.on('keydown', (e) => {
                e.preventDefault();
                if (e.keyCode === Phaser.Input.Keyboard.KeyCodes.A || e.keyCode === Phaser.Input.Keyboard.KeyCodes.LEFT) {
                    this.moveLeft = true;
                    if (this.playerWalkingAnim === false && this.gamePaused === false) {
                        this.player.anims.play("walking");
                        this.playerWalkingAnim = true;
                    }
                }
                else if (e.keyCode === Phaser.Input.Keyboard.KeyCodes.D || e.keyCode === Phaser.Input.Keyboard.KeyCodes.RIGHT) {
                    this.moveRight = true;
                    if (this.playerWalkingAnim === false && this.gamePaused === false) {
                        this.player.anims.play("walking");
                        this.playerWalkingAnim = true;
                    }
                }
                else if (e.keyCode === Phaser.Input.Keyboard.KeyCodes.SPACE) {
                    this.player.y += 5;
                }

            }, this);
            
            // key up
            this.input.keyboard.on('keyup', (e) => {
                if (e.keyCode === Phaser.Input.Keyboard.KeyCodes.A || e.keyCode === Phaser.Input.Keyboard.KeyCodes.LEFT) {
                    this.moveLeft = false;
                    this.player.anims.stop();
                    this.playerWalkingAnim = false;
                }
                else if (e.keyCode === Phaser.Input.Keyboard.KeyCodes.D || e.keyCode === Phaser.Input.Keyboard.KeyCodes.RIGHT) {
                    this.moveRight = false;
                    this.player.anims.stop();
                    this.playerWalkingAnim = false;
                }
            }, this);
        }

        // mobile tap
        if (!this.sys.game.device.os.desktop){
            this.input.on('pointerdown', (pointer) => {
                if (pointer.x > width/2) {
                    this.moveRight = true;
                    this.moveLeft = false;
                    if (this.playerWalkingAnim === false && this.gamePaused === false) {
                        this.player.anims.play("walking");
                        this.playerWalkingAnim = true;
                    }
                }
                else if (pointer.x < width/2) {
                    this.moveRight = false;
                    this.moveLeft = true;
                    if (this.playerWalkingAnim === false && this.gamePaused === false) {
                        this.player.anims.play("walking");
                        this.playerWalkingAnim = true;
                    }
                }
            });
            this.input.on('pointerup', (pointer) => {
                this.moveLeft = false;
                this.moveRight = false;
                this.player.anims.stop();
                this.playerWalkingAnim = false;
            });
        }

        // button sound
        this.buttonSound = this.add.sprite(20, 930, 'button_sound').setInteractive({useHandCursor: true})
        this.buttonSound.setOrigin(0,1)
        this.buttonSound.alpha = 0
        this.buttonSound.on('pointerup', ()=> {
            // mute sounds and switch toggle button
            this.sound.mute = !this.sound.mute
            soundFrame = (soundFrame == 0) ? 1 : 0
            this.buttonSound.setFrame(soundFrame)
        });

        this.makeQuitBox();
        this.hideQuitBox();
        this.makeHowToPlayScene();
        this.hideHowToPlay();

        // make animations
        this.configWalking = {
            key: "walking",
            frames: this.anims.generateFrameNumbers("player", { frames: [ 0,1,2,3,4,5,6,7,8,9,10,11 ] }),
            frameRate: 40,
            repeat: -1,
        };
        this.configPaused = {
            key: "paused",
            frames: this.anims.generateFrameNumbers("player", { frames: [ 16,17,18 ] }),
            frameRate: 14,
        };
        this.configGetHit = {
            key: "getHit",
            frames: this.anims.generateFrameNumbers("player", { frames: [ 12,13,13,13,13,12,12,14 ] }),
            frameRate: 20,
        };
        this.configBread = {
            key: "breadAnim",
            frames: this.anims.generateFrameNumbers("bread", { frames: [ 0,1,2,3 ] }),
            frameRate: 10,
            repeat: -1,
        };
        this.config3 = {
            key: "tasty3Anim",
            frames: this.anims.generateFrameNumbers("tasty3", { frames: [ 0,1,2,3,4,5,6,7 ] }),
            frameRate: 20,
            repeat: -1,
        };
        this.config4 = {
            key: "tasty4Anim",
            frames: this.anims.generateFrameNumbers("tasty4", { frames: [ 0,1,2,3,4 ] }),
            frameRate: 10,
            repeat: -1,
        };
        this.config5 = {
            key: "tasty5Anim",
            frames: this.anims.generateFrameNumbers("tasty5", { frames: [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18 ] }),
            frameRate: 16,
            repeat: -1,
        };
        this.config6 = {
            key: "tasty6Anim",
            frames: this.anims.generateFrameNumbers("tasty6", { frames: [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18 ] }),
            frameRate: 16,
            repeat: -1,
        };
        this.config7 = {
            key: "tasty7Anim",
            frames: this.anims.generateFrameNumbers("tasty7", { frames: [ 0,1,2,3 ] }),
            frameRate: 10,
            repeat: -1,
        };
        this.config8 = {
            key: "tasty8Anim",
            frames: this.anims.generateFrameNumbers("tasty8", { frames: [ 0,1,2,3 ] }),
            frameRate: 10,
            repeat: -1,
        };
        this.config9 = {
            key: "tasty9Anim",
            frames: this.anims.generateFrameNumbers("tasty9", { frames: [ 0,1,2,3 ] }),
            frameRate: 10,
            repeat: -1,
        };
        this.config10 = {
            key: "tasty10Anim",
            frames: this.anims.generateFrameNumbers("tasty10", { frames: [ 0,1,2,3 ] }),
            frameRate: 10,
            repeat: -1,
        };
        // yucky animations
        this.config11 = {
            key: "yucky1Anim",
            frames: this.anims.generateFrameNumbers("yucky1", { frames: [ 0,1,2,3 ] }),
            frameRate: 18,
            repeat: -1,
        };
        this.config12 = {
            key: "yucky2Anim",
            frames: this.anims.generateFrameNumbers("yucky2", { frames: [ 0,1,2,3 ] }),
            frameRate: 10,
            repeat: -1,
        };
        this.config13 = {
            key: "yucky3Anim",
            frames: this.anims.generateFrameNumbers("yucky3", { frames: [ 0,1,2,3 ] }),
            frameRate: 12,
            repeat: -1,
        };
        this.config14 = {
            key: "yucky4Anim",
            frames: this.anims.generateFrameNumbers("yucky4", { frames: [ 0,1,2,3 ] }),
            frameRate: 10,
            repeat: -1,
        };

        // effect
        this.configYucky = {
            key: "yuckyAnim",
            frames: this.anims.generateFrameNumbers("yuckyEffect", { 
            frames: [0,1,2,3,4,5,6] }),
            frameRate: 20,
        }

        // create animation
        this.anims.create(this.configPaused);
        this.anims.create(this.configGetHit);
        this.anims.create(this.configWalking);
        this.anims.create(this.configBread);
        this.anims.create(this.configYucky);
        this.anims.create(this.config3);
        this.anims.create(this.config4);
        this.anims.create(this.config5);
        this.anims.create(this.config6);
        this.anims.create(this.config7);
        this.anims.create(this.config8);
        this.anims.create(this.config9);
        this.anims.create(this.config10);
        this.anims.create(this.config11);
        this.anims.create(this.config12);
        this.anims.create(this.config13);
        this.anims.create(this.config14);
    }

    update() {
        // object that catchs the items follows the player
        this.catchArea.x = this.player.x - 82;
        if (this.itemsInSandwich.length === 0) {
            this.catchArea.y = this.player.y-100;
        }
        else {
            this.catchArea.y = this.player.y-100 - this.itemsInSandwich.length*20;
        }

        if (this.gamePaused === false && this.levelCompleted === false) {
            // move the player
            if (this.moveLeft === true && this.player.x > 125) {
                this.player.x -= this.playerSpeed;
            }
            else if (this.moveRight === true && this.player.x < width-260) {
                this.player.x += this.playerSpeed;
    
            }

            // bread
            if (this.bread != null) {
                this.bread.y += this.speed;
                if (checkOverlap(this.catchArea, this.bread) && this.bread.y-5 < this.catchArea.y) {
                    this.breadDone = this.add.image(this.catchArea.x, this.catchArea.y-20, 'breadDone');
                    this.bread.setVisible(false);

                    this.levelCompleted = true;
                    this.stack1.play();
                    this.gamePoints += 15;
                    this.bread.destroy();
                    this.bread = null;
                    this.showNextLevel();
                }
                else if (this.bread != null && this.bread.y > 1000) {
                    this.bread.destroy();
                }
            }

            for (let x = 0; x < this.tastyItems.length; x++) {
                let tasty = this.tastyItems[x];
                tasty.y += this.speed;

                // catch tasty item
                if (tasty.visible && tasty.number != 99 && checkOverlap(this.catchArea, tasty) && tasty.y-5 < this.catchArea.y) {

                        tasty.setPosition(this.catchArea.x, this.catchArea.y);

                        // add this item in the sandwhich (using new image)
                        if (tasty.number === 1) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone1'); 
                            this.stack2.play();
                        }
                        else if (tasty.number === 2) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone2'); 
                            this.stack1.play();
                        }
                        else if (tasty.number === 3) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone3');
                            this.stack2.play(); 
                        }
                        else if (tasty.number === 4) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone4');
                            this.stack2.play(); 
                        }
                        else if (tasty.number === 5) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone5');
                            this.stack1.play(); 
                        }
                        else if (tasty.number === 6) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone6'); 
                            this.stack1.play();
                        }
                        else if (tasty.number === 7) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone7'); 
                            this.stack2.play();

                            this.hideVisualItems();
                        }
                        else if (tasty.number === 8 && tasty.visible === true) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone8'); 
                            this.stack2.play();

                            this.hideVisualItems();
                        }
                        else if (tasty.number === 9) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone9');
                            this.stack2.play(); 

                            this.hideVisualItems();
                        }
                        else if (tasty.number === 10) {
                            this.itemInSandwich = this.add.image(tasty.x, this.catchArea.y-20, 'tastyDone10'); 
                            this.stack1.play();

                            this.hideVisualItems();
                        }

                        // increase the points
                        if (tasty.visible) {
                            // position the item correctly
                            this.gamePoints += 15;
                            this.itemInSandwich.yPos = this.itemInSandwich.y;
                            this.itemsInSandwich.push(this.itemInSandwich);
                            tasty.setVisible(false);

                            // too tall
                            if (this.itemInSandwich.yPos < 25) {
                                fails = 3;
                                this.showGameOver();
                            }

                        }
                }
            }

            // yucky items
            for (let x = 0; x < this.yuckyItems.length; x++) {
                let yucky = this.yuckyItems[x];
                yucky.y += this.speed;
                // catch yucky item
                if (checkOverlap(this.catchArea, yucky) && yucky.isVisible === true && yucky.y-5 < this.catchArea.y) {
                    yucky.isVisible = false;
                    yucky.setVisible(false);
                    fails++;

                    if (this.moveLeft === false && this.moveRight === false) {
                        this.player.anims.play("getHit");
                        this.player.on('animationcomplete', () => {
                            if (this.getHitPlaying === false && this.gamePaused === false && (this.moveLeft || this.moveRight)) {
                                this.player.anims.play("walking");
                                this.getHitPlaying = true;
                            }
                          });
                    }

                    // effect
                    this.yuckyEffect = this.add.sprite(yucky.x, yucky.y, 'yuckyEffect');
                    this.yuckyEffect.anims.play("yuckyAnim");
                    // different colors
                    if (yucky.number === 2) {
                        this.yuckyEffect.setTintFill("0x4d3f17");
                        this.wrong2.play();
                    }
                    else if (yucky.number === 1) {
                        this.yuckyEffect.setTintFill("0xa887ab");
                        this.wrong1.play();
                    }
                    else if (yucky.number === 3) {
                        this.yuckyEffect.setTintFill("0xb7a873");
                        this.wrong1.play();
                    }
                    else if (yucky.number === 4) {
                        this.yuckyEffect.setTintFill("0x556B2F");
                        this.wrong1.play();
                    }

                    this.yuckyEffect.on('animationcomplete',  (anim, frame) => {
                        this.yuckyEffect.destroy();
                    });

                    // check game over
                    this.showGameOver();
                }
                // destory the item
                if (yucky.y > height + 120) {
                    yucky.setVisible(false);
                }
            }
            // items inside the sandwich
            for (let x = 0; x < this.itemsInSandwich.length; x++) {
                this.itemsInSandwich[x].setPosition(this.catchArea.x, this.itemsInSandwich[x].yPos);
            }
        }
    }

    showGameOver() {
        this.ickMeterSound.play();
        ickMeterFrame++;
        this.ickMeter.setFrame(ickMeterFrame);
        if (fails === 3) {
            // reset 
            levelNumber = 0;
            fails = 0;
            ickMeterFrame = 0;

            this.speed = 0;
            let timer = this.time.delayedCall(500, () => {
                this.sound.stopAll();
                gameMusic.stop();
                musicIsPlaying = false;
                this.gameOverSound.play();
                this.scene.start("gameOver"); 
            });
        }
    }

    showNextLevel() {
        let count = 0;
        this.speed = 0;
        this.eat.play();
        count++;

        let timerRepeat = this.time.addEvent({
            delay: 280,            
            callback: () => {
                count++;
                if (count < 4) {
                    this.eat.play();
                }
                else if (count === 4) {
                    // add points earned in this level to final score
                    finalScore += this.gamePoints;
                    this.scene.start("nextLevel")
                }
            },
            repeat: 2,
        });
    }

    makeQuitBox() {
        this.bgBlack = this.add.image(width/2, height/2, 'bgBlack').setInteractive();
        this.bgBlack.alpha = .6;
        this.bgBlack.displayWidth = width;
        this.bgBlack.displayHeight = height;
        this.box = this.add.image(width/2, 20, 'box').setOrigin(0.5,0);

        this.txtAreYouFull = this.add.text(width/2, 100, "Are you full?", { fontFamily: "SFSlapstickComic", fontSize: 50, align: "left", color: '#FFFF00', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);

        this.txtYourScore = this.add.text(width/2, 180, "Your score:", { fontFamily: "SFSlapstickComic", fontSize: 42, align: "left", color: '#5BF2F1', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);

        // current score (quit box)
        this.txtScoreQuit = this.add.text(width/2, 255, finalScore.toString(), { fontFamily: "SFSlapstickComic", fontSize: 42, align: "center", color: '#FFFF00', shadow: {
            offsetX: 2,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0.5,0);

        // main menu
        this.buttonMenu = this.add.sprite(width/2 - 100, 400, 'buttonMenu').setInteractive({useHandCursor: true});
        this.buttonMenu.on("pointerup", ()=> {
            // reset level number
            levelNumber = 0;
            this.gamePoints = 0;
            finalScore = 0;
            gameMusic.stop();
            this.sound.stopAll();
            musicIsPlaying = false;
            this.scene.start("menu");
        });
        this.buttonMenu.setScale(.9,.9);
        // cancel
        this.buttonCancel = this.add.sprite(width/2 + 100, 400, 'buttonCancel').setInteractive({useHandCursor: true});
        this.buttonCancel.setScale(.9,.9);
        this.buttonCancel.on("pointerup", ()=> {
            this.hideQuitBox();
            this.quitVisible = false;
            this.gamePaused = false;
            this.itemTimer.paused = false;
        });

        // mouse over/out
        this.buttonMenu.on("pointerover", () => {
            this.buttonMenu.setFrame(1);
        });
        this.buttonMenu.on("pointerout", () => {
            this.buttonMenu.setFrame(0);
        });
        this.buttonCancel.on("pointerover", () => {
            this.buttonCancel.setFrame(1);
        });
        this.buttonCancel.on("pointerout", () => {
            this.buttonCancel.setFrame(0);
        });
    }

    hideQuitBox() {
        this.bgBlack.setVisible(false);
        this.box.setVisible(false);
        this.txtAreYouFull.setVisible(false);
        this.txtYourScore.setVisible(false);
        this.txtScoreQuit.setVisible(false);
        this.buttonCancel.setVisible(false);
        this.buttonMenu.setVisible(false);
    }

    showQuitBox() {
        this.children.bringToTop(this.bgBlack);
        this.children.bringToTop(this.box);
        this.children.bringToTop(this.txtAreYouFull);
        this.children.bringToTop(this.txtYourScore);
        this.children.bringToTop(this.txtScoreQuit);
        this.children.bringToTop(this.buttonCancel);
        this.children.bringToTop(this.buttonMenu);

        this.bgBlack.setVisible(true);
        this.box.setVisible(true);
        this.txtAreYouFull.setVisible(true);
        this.txtYourScore.setVisible(true);
        this.txtScoreQuit.setVisible(true);
        this.buttonCancel.setVisible(true);
        this.buttonMenu.setVisible(true);
    }

    makeHowToPlayScene() {
        this.bgHowTo = this.add.image(width/2, height/2-20, 'bgHowTo');

        // catch tasty items
        this.txtCatch = this.add.text(20, 130, "Catch tasty items to build your sandwich.", { fontFamily: "ErasDemi", fontSize: 29, align: "left", stroke: '#000000', color: '#5BF2F1', shadow: {
            offsetX: 3,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        }, }).setOrigin(0,0.5);

        this.txtHowToPlay = this.add.text(20, 10, "HOW TO PLAY", { fontFamily: "SFSlapstickComic", fontSize: 55, align: "left", stroke: '#000000', strokeThickness: 7, color: '#FFFF00' }).setOrigin(0,0);

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
            // unpause the game
            this.gamePaused = false;
            this.itemTimer.paused = false;
            // hide how to play
            this.hideHowToPlay();
        });

        this.buttonPlay.on("pointerover", () => {
            this.buttonPlay.setFrame(1);
        });
        this.buttonPlay.on("pointerout", () => {
            this.buttonPlay.setFrame(0);
        });
    }

    showHowToPlay() {
        this.children.bringToTop(this.bgHowTo);
        this.children.bringToTop(this.buttonPlay);
        this.children.bringToTop(this.toaster2);
        this.children.bringToTop(this.txtInstructions);
        this.children.bringToTop(this.txtAvoid);
        this.children.bringToTop(this.itemsTasty);
        this.children.bringToTop(this.itemsYucky);
        this.children.bringToTop(this.txtCatch);
        this.children.bringToTop(this.pointerTasty);
        this.children.bringToTop(this.pointerYucky);
        this.children.bringToTop(this.txtHowToPlay);

        this.buttonPlay.setVisible(true);
        this.txtInstructions.setVisible(true);
        this.txtAvoid.setVisible(true);
        this.txtCatch.setVisible(true);
        this.txtHowToPlay.setVisible(true);
        this.bgHowTo.setVisible(true);
    }

    hideHowToPlay() {
        this.children.bringToTop(this.player);
        this.buttonPlay.setVisible(false);
        this.txtInstructions.setVisible(false);
        this.txtAvoid.setVisible(false);
        this.txtCatch.setVisible(false);
        this.txtHowToPlay.setVisible(false);
        this.bgHowTo.setVisible(false);
    }

    pauseTheGame() {
        this.gamePaused = true;
        if (this.itemTimer != null) {
            this.itemTimer.paused = true;
        }
    }

    makeSandwich() {
        // random numbers
        let randomN;
        let randomTasty;
        let randomYucky;
        let randomX;

        this.itemTimer = this.time.addEvent({
            delay: 1300,
            callback: () => {
                if (this.gamePaused === false) {
                    randomX = Phaser.Math.Between(60, width-310);
                    // tasty or yucky items
                    randomN = Phaser.Math.Between(1,5);
                    this.numberOfItems++;

                    if (this.numberOfItems % 11 === 0 && this.itemsInSandwich.length > 0) {
                        this.breadComing = true;
                        // bread
                        this.breadToaster = this.add.image(this.toaster.x-120, this.toaster.y-20, 'breadToaster').setOrigin(.5,1);
                        this.breadToaster.setScale(.55,.55);
                        this.children.bringToTop(this.toaster);
                        this.toaster.setFrame(1);
                        this.breadSound.play();
                        this.children.bringToTop(this.player);

                        this.time.delayedCall(150, () => {
                            this.toaster.setFrame(0);
                        });
                        this.tweens.add({
                            targets: [this.breadToaster],
                            y: -100,
                            duration: 1100
                        })
                    }
                    else if (this.breadComing === true) {
                        this.breadComing = false;
                        this.bread = this.add.sprite(this.player.x, -100, 'bread').setScale(.7,.7);
                        this.bread.anims.play("breadAnim");
                    }
                    else {
                        // yucky item
                        if (randomN === 1 || randomN === 3) {
                            randomYucky = Phaser.Math.Between(1,5);
                            this.item = this.add.sprite(randomX, -10, 'yucky'+randomYucky).setOrigin(0.5,1);
                            this.item.isVisible = true;
                            this.item.number = randomYucky;
                            // scale item
                            if (randomYucky !== 1) {
                                this.item.setScale(.75,.75);
                            }
                            this.yuckyItems.push(this.item);

                            if (randomYucky === 1) {
                                this.item.anims.play("yucky1Anim");
                            }
                            else if (randomYucky === 2) {
                                this.item.anims.play("yucky2Anim");
                            }
                            else if (randomYucky === 3) {
                                this.item.anims.play("yucky3Anim");
                            }
                            else if (randomYucky === 4) {
                                this.item.anims.play("yucky4Anim");
                            }
                        }
                        else {  // create tasty item
                            randomTasty = Phaser.Math.Between(1, 10);

                            if (randomTasty != 7 && randomTasty != 8 && randomTasty != 9 && randomTasty != 10) {
                                this.item = this.add.sprite(randomX, -10, 'tasty'+randomTasty).setOrigin(0.5,1);
                                this.item.number = randomTasty;
                            }
                            else {
                                // invisible item, you catch these
                                this.item = this.add.sprite(randomX, -10, 'catchArea').setOrigin(0.5,1);
                                this.item.scaleX = 2;
                                this.item.alpha = 0;
                                this.item.number = randomTasty;
                                
                                // visible items (visual effect)
                                if (randomTasty === 7) {
                                    this.item72 = this.add.sprite(randomX-29, -13, 'tasty7').setOrigin(0.5,1);
                                    this.item72.angle = 15;
                                    this.item72.number = 99;
                                    this.item72.setScale(.75,.75);
                                    this.tastyItems.push(this.item72);
                                    this.item72.anims.play("tasty7Anim");
                                    this.children.bringToTop(this.item72);

                                    this.item2 = this.add.sprite(randomX+29, -10, 'tasty7').setOrigin(0.5,1);
                                    this.item2.angle = -10;
                                    this.item2.number = 99;
                                    this.item2.setScale(.75,.75);
                                    this.tastyItems.push(this.item2);
                                    this.item2.anims.play("tasty7Anim");
                                    this.children.bringToTop(this.item72);
                                }
                                else if (randomTasty === 8) {
                                    this.item82 = this.add.sprite(randomX-27, -10, 'tasty8').setOrigin(0.5,1);
                                    this.item82.angle = 15;
                                    this.item82.number = 99;
                                    this.item82.setScale(.75,.75);
                                    this.tastyItems.push(this.item82);
                                    this.item82.anims.play("tasty8Anim");
                                    this.children.bringToTop(this.item82);

                                    this.item2 = this.add.sprite(randomX+27, -13, 'tasty8').setOrigin(0.5,1);
                                    this.item2.angle = -7;
                                    this.item2.number = 99;
                                    this.item2.setScale(.75,.75);
                                    this.tastyItems.push(this.item2);
                                    this.item2.anims.play("tasty8Anim");
                                    this.children.bringToTop(this.item82);
                                }
                                else if (randomTasty === 9) {
                                    this.item92 = this.add.sprite(randomX-27, -10, 'tasty9').setOrigin(0.5,1);
                                    this.item92.angle = -15;
                                    this.item92.number = 99;
                                    this.item92.setScale(.75,.75);
                                    this.tastyItems.push(this.item92);
                                    this.item92.anims.play("tasty9Anim");
                                    this.children.bringToTop(this.item92);

                                    this.item2 = this.add.sprite(randomX, -20, 'tasty9').setOrigin(0.5,1);
                                    this.item2.angle = 7;
                                    this.item2.number = 99;
                                    this.item2.setScale(.75,.75);
                                    this.tastyItems.push(this.item2);
                                    this.item2.anims.play("tasty9Anim");

                                    this.item93 = this.add.sprite(randomX+22, 0, 'tasty9').setOrigin(0.5,1);
                                    this.item93.angle = -15;
                                    this.item93.number = 99;
                                    this.item93.setScale(.75,.75);
                                    this.tastyItems.push(this.item93);
                                    this.item93.anims.play("tasty9Anim");
                                }
                                else if (randomTasty === 10) {
                                    this.item102 = this.add.sprite(randomX-22, -10, 'tasty10').setOrigin(0.5,1);
                                    this.item102.angle = -7;
                                    this.item102.number = 99;
                                    this.item102.setScale(.75,.75);
                                    this.tastyItems.push(this.item102);
                                    this.item102.anims.play("tasty10Anim");
                                    this.children.bringToTop(this.item102);

                                    this.item2 = this.add.sprite(randomX+22, -13, 'tasty10').setOrigin(0.5,1);
                                    this.item2.angle = 15;
                                    this.item2.number = 99;
                                    this.item2.setScale(.75,.75);
                                    this.tastyItems.push(this.item2);
                                    this.item2.anims.play("tasty10Anim");
                                    this.children.bringToTop(this.item102);
                                }
                            }

                            // scale item
                            if (randomTasty === 7 || randomTasty === 8 || randomTasty === 9 || randomTasty === 10) {
                                this.item.setScale(2,1);
                            }
                            else if (randomTasty === 2 && randomTasty === 3) {
                                this.item.setScale(.75,.75);
                            }
                            else if (randomTasty === 4) {
                                this.item.setScale(.7,.7);
                            }

                            this.tastyItems.push(this.item);
                            
                            if (randomTasty === 3) {
                                this.item.anims.play("tasty3Anim");
                            }
                            else if (randomTasty === 4) {
                                this.item.anims.play("tasty4Anim");
                            }
                            else if (randomTasty === 5) {
                                this.item.anims.play("tasty5Anim");
                            }
                            else if (randomTasty === 6) {
                                this.item.anims.play("tasty6Anim");
                            }
                        }
                    }
                }
            },
            callbackScope: this,
            repeat: -1
        });

    }

    hideVisualItems() {
        for (let t = 0; t < this.tastyItems.length; t++) {
            if (this.tastyItems[t].number === 99 && this.tastyItems[t].y + 60 > this.catchArea.y) {
                this.tastyItems[t].setVisible(false);
            }
        }
    }
}