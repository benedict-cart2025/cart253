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
    createCanvas(640, 480);

}


/**
 * this is kinda difficult
*/

function draw(){
    drawSky();
    drawGround();
    drawMoon();
    drawPlanet();
    drawAlien();
    drawCapsule();
}

function drawSky() {
    // outer space
 background(120, 74, 237);
}

function drawGround() {
    // ground of the moon?
    push();
	noStroke();
	fill(247, 246, 143);
	rect(0, 400, 640, 480);
	pop();
}

function drawCapsule() {
    //half circle structure
    push();
	noStroke();
	fill(227, 227, 227);
	square(200, 240, 280, 180);
	pop();
}

function drawAlien() {
    //lil half circle blob
     push();
	noStroke();
	fill(63, 181, 69);
	circle(100, 240, 280, 180);
	pop();
}

function drawPlanet() {
    //  mars?    
    push();
	noStroke();
	fill(191, 77, 77);
	circle(150, 300, 280, 180);
	pop();
}
