/**
 *Benny Bayec
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let carName = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

// Starts with the instruction
let carName = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */
function preload() {

}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

}

let carName;
/**
 * Load the car and dinosaur data
 */
function preload() {
    langData = loadJSON
    dinosaurData = loadJSON
    carData = loadJSON
}

/**
 * Create the canvas
*/

function langSwitch() {
    if (lang === "fr") {
        carName = langData.fr
    }
    else {
        if (lang === "en") {
            carName = langData.en
        }
    }
}



function setup() {
    createCanvas(600, 400);


    langSwitch()
}


function generateCarName() {
    let d = random(0, carData.cars.length)
    d = int(d)

    let c = random(0, carData.cars.length)
    c = int(c)

    let n = random(0, nonsenseData.nonsense.length)
    n = int(n)

    console.log(carData.cars[c] + nonsenseData.nonsense[n] + dinosaurData.dinosaurs[d])
}

function mousePressed() {
    generateCarName()
}