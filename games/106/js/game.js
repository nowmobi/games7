"use strict";
var width, height;
var finalScore = 0;
var levelNumber = 0;
var ickMeterFrame = 0;
var fails = 0;
var gameMusic;
var musicIsPlaying = false;

var config =
{
    type            : Phaser.Canvas,
    backgroundColor : 0x000000,
    width           : 1160, 
    height          : 640, 
    scale           : 
    {
        min: {
          width: 450,
          height: 270,
        },
        max: {
          width: 1160,
          height: 640,
        },
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
    },
    scene : [Loading, Sounds, Menu, Gameplay, GameOver, NextLevel]
}

var game = new Phaser.Game(config);

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function checkOverlap(spriteA, spriteB) {
    let boundsA = spriteA.getBounds();
    let boundsB = spriteB.getBounds();
    return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
  }

function activateFullscreen() {
    if (game.scale.isFullScreen) {
        game.scale.stopFullScreen()
    }
    else {
        game.scale.startFullScreen(false, false)
    }
}

