/**
 * * Some Random Game
 * Benedict Ambayec
 * 
 * One of the first prototypes of a game, I'll make on JS.
 * Might be scuffed but it's all good, we're all learning.
 * 
 */

"use strict";

/**
 * woah, a setup!
*/
function setup() {
         // e=mc squared
    createCanvas(640, 640);
}


/**
 * this is kinda difficult
*/
function draw() {
    // gris
 background(150, 150, 150);

 // The main part of the record is red
    push();
    fill(255, 0, 0);
    stroke(255, 255, 255);
    ellipse(320, 320, 480, 480);
    pop();

    // The label on the record
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();

    // The hole in the record
    push();
    fill(150, 150, 150);
    stroke(50, 50, 50);
    ellipse(320, 320, 20, 20);
    pop();
}

