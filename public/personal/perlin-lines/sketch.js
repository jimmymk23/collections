var xoff1 = 0;
var xoff2 = 1;
let inc = 0.002;
var noiseR = 1;
var noiseG = 2;
var noiseB = 3;
var loop = true;
var x;
var y;
var xLast;
var yLast;
var r;
var g;
var b;
let scale = 0.15;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(30);
    stroke("black");
    x = map(noise(xoff1), 0, 1, 0-width*scale, width+width*scale);
    y = map(noise(xoff2), 0, 1, 0-height*scale, height+height*scale);
    xLast = x;
    yLast = y;
}

function draw() {
    x = map(noise(xoff1), 0, 1, 0-width*scale, width+width*scale);
    y = map(noise(xoff2), 0, 1, 0-height*scale, height+height*scale);
    r = map(noise(noiseR), 0, 1, 100, 255);
    g = map(noise(noiseG), 0, 1, 100, 255);
    b = map(noise(noiseB), 0, 1, 100, 255);
    stroke(r, g, b);
    line(xLast, yLast, x, y);
    xoff1 += inc;
    xoff2 += inc;
    noiseR += inc;
    noiseG += inc;
    noiseB += inc;
    xLast = x;
    yLast = y;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background("black");
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        noLoop();
    }
    if (keyCode === UP_ARROW) {
        loop();
    }
}
