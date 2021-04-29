// setup gui
var Options = function() {
    this.x = 50;
    this.speed = 0.05;
    this.d = 10; // diameter
    this.paused = false;
};

var gui = new dat.GUI();
var ops = new Options();


var angle = 0; // we can keep this as a global variable

function setup() {
    createCanvas(200, 200);
    gui.add(ops, 'x', 0, 100);
    gui.add(ops, 'd', 5, 50);
    gui.add(ops, 'speed', -.5, .5);
    gui.add(ops, 'paused');
}

function draw() {
    background(200);

    push(); // begins change in drawing state
    translate(width / 2, height / 2); // move ellipse to center of canvas
    rotate(angle);
    
    // draw outer ring
    noFill();
    ellipse(0, 0, 2 * ops.x); // change to use ops.x
    
    // draw circles
    fill(255);
    ellipse(ops.x, 0, ops.d); // replace 50 with ops.x
    // use -ops.x to draw a circle opposite this one
    ellipse(-ops.x, 0, ops.d);
    
    
    pop(); // ends change in drawing state

    // EXTRA CREDIT: add in a pause button. 
    // Use !ops.paused to create a block that only executes
    // if ops.paused is false
    
    if (!ops.paused) {
        angle += ops.speed;
    }
 
    
    
}