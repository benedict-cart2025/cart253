/**
 * Benedict's Self portrait
 * Benedict Ambayec
 * 
 * A simple self-portrait mde in JS/P5
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    // A 640x640 canvas
    createCanvas(640, 640);
}

/**
 * Drawing different body parts
*/
function draw() {

    background (124, 169, 214);
    drawBody();
    drawHead();
    drawREye();
    drawLEye();
    drawRIris();
    drawLIris();
    drawNose();
    drawBandana();
    drawBeanieCap();
    drawBeanie();
    
    
}

function drawBody() {
    push();
	noStroke();
	fill(145, 51, 51);
	ellipse(320,670,350,480);
	pop();
}

function drawHead() {
    push();
	noStroke();
	fill(227, 161, 111);
	ellipse(320,320,280,330);
	pop();
}

function drawREye(){
    push();
	noStroke();
	fill(255, 255, 255);
	ellipse(250,320,100,70);
	pop();
}

function drawLEye(){
    push();
	noStroke();
	fill(255, 255, 255);
	ellipse(380,320,100,70);
	pop();
}

function drawRIris(){
     push();
	noStroke();
	fill(33, 33, 33);
	ellipse(250,320,60,70);
	pop();
}

function drawLIris(){
    push();
	noStroke();
	fill(33, 33, 33);
	ellipse(380,320,60,70);
	pop();
}

function drawNose(){
    push();
	noStroke();
	fill(179, 125, 84);
	triangle(315,350,340,420,290,420)
	pop();
}

function drawBandana(){
     push();
	noStroke();
	fill(33, 33, 33);
	arc(318, 435, 80, 60, 0, HALF_PI + HALF_PI);
	pop();
}

function drawBeanie(){
    push();
	noStroke();
	fill(184, 72, 72);
	rect(135, 240, 370, 40);
	pop();
}

function drawBeanieCap(){
     push();
	noStroke();
	fill(145, 51, 51);
	rect(180, 30, 280, 250);
	pop();
}