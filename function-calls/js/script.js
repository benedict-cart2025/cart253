/**
 * Some Random Game
 * Benedict Ambayec
 * 
 * One of the first prototypes of a game, I'll make on JS.
 * Might be scuffed but it's all good, we're all learning.
 * 
 */

"use strict";

/**
 * making 540x480 canvas for the game
*/
function setup() {
    //painting a canvas
    createCanvas(640, 480);
}


/**
 * setting the background for our stage
*/
function draw() {
    //pink BG
    background(255, 100, 100);
    //white space
    rect(200, 80, 240, 320);
}