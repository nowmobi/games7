var isFullscreen = false;
var isLandscape = false;

var initWidth;
var initHeight;

// update canvas size
var refreshCanvas = function() {
    // var newWidth = $( ".webgl-content" ).width();
    // var newHeight = (9/16) * newWidth;
    // $("#unityContainer").width(newWidth);
    //  $("#unityContainer").height(newHeight);

    // Find if the game is portrait or lanscape
    var newWidth;
    var newHeight;

    if (isLandscape) {

        newWidth = window.innerWidth;
        newHeight = (9 / 16) * newWidth;

    } else {

        newHeight = window.innerHeight;
        newWidth = (9 / 16) * newHeight;

    }

    $("#gameContainer").width(newWidth);
    $("#gameContainer").height(newHeight);
};

$(function() {
    // scale canvas correctly once on start
    initWidth = $("#gameContainer").width();
    initHeight = $("#gameContainer").height();

    if (initHeight > initWidth) {
        isLandscape = false;
    } else {
        isLandscape = true;
    }

    refreshCanvas();
});

// on window resize, apply width to game
$(window).resize(function() {
    refreshCanvas();
});

// check for fullscreen toggle
$(document).keydown(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '70') {
        if (!isFullscreen) {
            unityInstance.SetFullscreen(1);
            isFullscreen = true;
        } else {
            unityInstance.SetFullscreen(0);
            isFullscreen = false;
        }
    }
});