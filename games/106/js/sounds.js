"use strict"

class Sounds extends Phaser.Scene {
    constructor() {
        super({
            key: "sounds"
        });
    }

    makeSounds(aScene) {
        gameMusic = aScene.sound.add('music', {loop: true});
        aScene.musicMenu = aScene.sound.add('musicMenu', {loop: true});
        aScene.wrong1 = aScene.sound.add('wrong1');
        aScene.wrong2 = aScene.sound.add('wrong2');
        aScene.gameOverSound = aScene.sound.add('gameOverSound');
        aScene.eat = aScene.sound.add('eat');
        aScene.breadSound = aScene.sound.add('breadSound');
        aScene.ickMeterSound = aScene.sound.add('ickMeterSound');
        aScene.stack1 = aScene.sound.add('stack1');
        aScene.stack2 = aScene.sound.add('stack2');
    }
}