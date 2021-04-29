// Inspired from: https://www.pinterest.com/pin/842525042768128404/

var logs = [];
let colorPalette = ['#2a1a5e', '#f45905', '#fb9224', '#fbe555'];
let altColors = false;
var backgroundColor = "#b1d7de";
let weight = [1, 2, 2, 3, 3, 4];
var animate = true;

var Options = function() {
    this.spawnSpeed = 10;
    this.counterClockwise = false;
    this.altColors = false;
    this.pause = false;
}

var gui = new dat.GUI();
var ops = new Options();

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(backgroundColor);
    strokeCap(ROUND);
    angleMode(DEGREES);
    translate(width / 2, height / 2);

    gui.add(ops, 'spawnSpeed', 0, 10);
    gui.add(ops, 'counterClockwise');
    gui.add(ops, 'altColors');
    gui.add(ops, 'pause');
}

function draw() {
    if (!ops.pause) {
        background(backgroundColor);
        if (ops.altColors) {
            colorPalette = ['#54428E', '#8963BA', '#AFE3C0', '#90C290'];
            backgroundColor = '#ffae80';
            altColors = true;
        } else {
            colorPalette = ['#2a1a5e', '#f45905', '#fb9224', '#fbe555'];
            backgroundColor = "#b1d7de";
            altColors = false;
        }
        if (ops.spawnSpeed == 0) {

        } else if (frameCount % (11 - Math.floor(ops.spawnSpeed)) == 0) {
            logs.push(new Log());
        }

        for (var i = 0; i < logs.length; i++) {
            if (logs[i].y > sqrt(sq(abs(0 - width / 2)) + sq(abs(0 - height / 2)))) {
                logs.splice(i, 1);
            }

            logs[i].update();
            logs[i].display();
        }
        // console.log(logs.length);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(backgroundColor);
}

class Log {
    constructor() {
        this.startRadius = randomGaussian(20, 5);
        this.x = 0;
        this.y = this.startRadius;
        this.strokeWeight = 1;
        this.height = this.y + 5;
        this.angle = random(360);
        this.fill = random(colorPalette);
        this.strokeInc = randomGaussian(0.07, 0.025);
    }

    update() {
        if (ops.counterClockwise) {
            this.angle -= 0.2;
        } else {
            this.angle += 0.2;
        }
        this.y += .8;
        this.height += 1.5;
        this.strokeWeight += this.strokeInc;;
    }

    display() {
        push();
        translate(width/2, height/2);
        rotate(this.angle);
        fill(this.fill);
        stroke(this.fill);
        strokeWeight(this.strokeWeight);
        line(this.x, this.y, this.x, this.height);
        pop();
    }
}
