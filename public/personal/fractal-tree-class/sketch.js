var angleSlider;
var lenSlider;
let numOfTrees = 3
let trees = [];

function setup() {
    createCanvas(windowWidth, windowHeight-30);
    angleMode(DEGREES);
    angleSlider = createSlider(0, 60, 20, .001);
    lenSlider = createSlider(30, 200, 140, .001);
    for (i = 0; i < numOfTrees; i++) {
        trees.push(new Tree);
    }
}

function draw() {
    frameRate(30);
    noStroke();
    fill("skyblue");
    rect(0, 0, width, 2*height/3);
    fill("#1f8001");
    rect(0, 2*height/3, width, height);
    for (i = 0; i < numOfTrees; i++) {
        trees[i].render();
    }
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight-30);
    background(150);
}
