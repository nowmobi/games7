class Loading extends Phaser.Scene {    
    constructor() {
        super({
            
            key   : 'loading',
            pack  : 
            {
                files : 
                [
                    { type: 'image', key: 'preloader1', url: 'images/preloader1.png' },
                    { type: 'image', key: 'preloader2', url: 'images/preloader2.png' },
                    { type: 'image', key: 'preloader3', url: 'images/preloader3.png' },
                    { type: 'image', key: 'bgLoading', url: 'images/bgLoading.png' },
                    { type: 'image', key: 'loadingHero', url: 'images/loadingHero.png' },
                ] 
            }
        })
    }
    
    setPreloadSprite (sprite) {
		this.preloadSprite = { sprite: sprite, width: sprite.width, height: sprite.height }
		sprite.visible = true;
		// set callback for loading progress updates
		this.load.on('progress', this.onProgress, this);
	}
	
	onProgress (value) {
		if (this.preloadSprite) {
			// calculate width based on value=0.0 .. 1.0
			let w = Math.floor(this.preloadSprite.width * value)
			
			// set width of sprite			
			this.preloadSprite.sprite.frame.width = w
			this.preloadSprite.sprite.frame.cutWidth = w
            
			// update screen
			this.preloadSprite.sprite.frame.updateUVs()
		}
	}
    
    preload() {
        width = config.width;
        height = config.height;

        // prepare font
        this.txtNotVisible = this.add.text(0, 0, "Prepare font", { fontFamily: "ErasDemi", fontSize: 18, align: "left", stroke: '#000000', strokeThickness: 1, color: '#5BF2F1' }).setOrigin(0,0);
        this.txtNotVisible.setVisible(false);
        
        // background
        this.bgLoading = this.add.image(config.width/2, config.height/2 - 90, 'bgLoading');
        // hero
        this.loadingHero = this.add.image(config.width/2, config.height/2 - 60, 'loadingHero').setScale(.9,.9);
        // preloader
        this.preloader3 = this.add.sprite(config.width/2 - 2, height/2 + 240, "preloader3").setScale(.85,.9);
		this.preloader1 = this.add.sprite(config.width/2 - 2, height/2 + 240, "preloader1");
        this.preloader2 = this.add.sprite(config.width/2, height/2 + 240, "preloader2");
        this.setPreloadSprite(this.preloader1);
        this.preloader1.setScale(.77,1.2);
        this.preloader2.setScale(.75,1.2);
        // text loading
        this.txtLoading = this.add.text(config.width/2, height/2 + 165, "LOADING", { fontFamily: "SFSlapstickComic", fontSize: 70, align: "center", color: '#FFFF00',shadow: {
            offsetX: 4,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: false,
            fill: '#000000'
        } });
        this.txtLoading.setOrigin(.5,.5);
        
        // images
        this.load.image('bg', 'images/bg.png');
        this.load.image('bgMenu', 'images/bgMenu.png');
        this.load.image('bgGameOver', 'images/bgGameOver.png');
        this.load.image('bgNextLevel', 'images/bgNextLevel.png');
        this.load.image('bgHowTo', 'images/bgHowTo.png');
        this.load.image('breadToaster', 'images/breadToaster.png');
        this.load.image('box', 'images/box.png');
        this.load.image('bgBlack', 'images/bgBlack.png');
        
        this.load.spritesheet('buttonHelp', 'images/buttonHelp.png', {frameWidth: 171, frameHeight: 101});
        this.load.spritesheet('buttonQuit', 'images/buttonQuit.png', {frameWidth: 171, frameHeight: 101});
        this.load.spritesheet('buttonPause', 'images/buttonPause.png', {frameWidth: 171, frameHeight: 101});
        this.load.spritesheet('buttonPlay', 'images/buttonPlay.png', {frameWidth: 171, frameHeight: 101});
        this.load.spritesheet('buttonHowToPlay', 'images/buttonHowToPlay.png', {frameWidth: 171, frameHeight: 109});
        this.load.spritesheet('buttonMenu', 'images/buttonMenu.png', {frameWidth: 171, frameHeight: 101});
        this.load.spritesheet('buttonCancel', 'images/buttonCancel.png', {frameWidth: 171, frameHeight: 101});
        this.load.spritesheet('buttonContinue', 'images/buttonContinue.png', {frameWidth: 209, frameHeight: 101});
        this.load.spritesheet('buttonPlayAgain', 'images/buttonPlayAgain.png', {frameWidth: 171, frameHeight: 101});
        this.load.image('itemsTasty', 'images/itemsTasty.png');
        this.load.image('itemsYucky', 'images/itemsYucky.png');
        this.load.image('yucky5', 'images/yucky5.png');
        this.load.image('tasty1', 'images/tasty1.png');
        this.load.image('tasty2', 'images/tasty2.png');
        this.load.image('pointer', 'images/pointer.png');
        this.load.image('catchArea', 'images/catchArea.png');
        this.load.image('breadDone', 'images/breadDone.png');
        this.load.image('tastyDone1', 'images/tastyDone1.png');
        this.load.image('tastyDone2', 'images/tastyDone2.png');
        this.load.image('tastyDone3', 'images/tastyDone3.png');
        this.load.image('tastyDone4', 'images/tastyDone4.png');
        this.load.image('tastyDone5', 'images/tastyDone5.png');
        this.load.image('tastyDone6', 'images/tastyDone6.png');
        this.load.image('tastyDone7', 'images/tastyDone7.png');
        this.load.image('tastyDone8', 'images/tastyDone8.png');
        this.load.image('tastyDone9', 'images/tastyDone9.png');
        this.load.image('tastyDone10', 'images/tastyDone10.png');
        // spritesheets
        this.load.spritesheet('player', 'images/player.png', {frameWidth: 302, frameHeight: 233});
        this.load.spritesheet('yucky1', 'images/yucky1.png', {frameWidth: 29, frameHeight: 160});
        this.load.spritesheet('yucky2', 'images/yucky2.png', {frameWidth: 195, frameHeight: 173});
        this.load.spritesheet('yucky3', 'images/yucky3.png', {frameWidth: 138, frameHeight: 125});
        this.load.spritesheet('yucky4', 'images/yucky4.png', {frameWidth: 120, frameHeight: 270});
        this.load.spritesheet('yuckyEffect', 'images/yuckyEffect.png', {frameWidth: 185, frameHeight: 126});
        this.load.spritesheet('tasty3', 'images/tasty3.png', {frameWidth: 116, frameHeight: 105});
        this.load.spritesheet('tasty4', 'images/tasty4.png', {frameWidth: 135, frameHeight: 122});
        this.load.spritesheet('tasty5', 'images/tasty5.png', {frameWidth: 30, frameHeight: 165});
        this.load.spritesheet('tasty6', 'images/tasty6.png', {frameWidth: 30, frameHeight: 165});
        this.load.spritesheet('tasty7', 'images/tasty7.png', {frameWidth: 70, frameHeight: 65});
        this.load.spritesheet('tasty8', 'images/tasty8.png', {frameWidth: 70, frameHeight: 65});
        this.load.spritesheet('tasty9', 'images/tasty9.png', {frameWidth: 46, frameHeight: 38});
        this.load.spritesheet('tasty10', 'images/tasty10.png', {frameWidth: 65, frameHeight: 50});

        this.load.spritesheet('toaster', 'images/toaster.png', {frameWidth: 263, frameHeight: 209});

        this.load.spritesheet('bread', 'images/bread.png', {frameWidth: 170, frameHeight: 166});
        this.load.spritesheet('ickMeter', 'images/ickMeter.png', {frameWidth: 404, frameHeight: 50});
        
        // audio
        this.load.audio('music', 'audio/music.mp3')
        this.load.audio('musicMenu', 'audio/musicMenu.mp3')
        this.load.audio('ickMeterSound', 'audio/ickMeterSound.mp3')
        this.load.audio('eat', 'audio/eat.mp3')
        this.load.audio('gameOverSound', 'audio/gameOverSound.mp3')
        this.load.audio('breadSound', 'audio/breadSound.mp3')
        this.load.audio('stack1', 'audio/stack1.mp3')
        this.load.audio('stack2', 'audio/stack2.mp3')
        this.load.audio('wrong1', 'audio/wrong1.mp3')
        this.load.audio('wrong2', 'audio/wrong2.mp3')
    }
    
    create() {    
        this.scene.start("menu");
    }
}