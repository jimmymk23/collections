function setup() {
    createCanvas(windowWidth, windowHeight);
    background('white');

    for (var i = 0; i < width; i += 20) {
        logs.push(new Tile(15, 19, 100, 6));

    }

    angleMode(DEGREES);
}

function draw() {
    background('white');
    lods[i].update();
    lods[i].draw();
    for (var i = 0; i < logs.length; i++) {
        rect(1, 0, i, 50);
        logs.push(new Tile(10, height, 64, 20));
        noStroke();
        fill('blue');
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background('white');
    frameRate(30);
}

class Tile() {
    constructor(_x, _y, _rad, _points) {
        this.x = _x;
        this.y = _y;
        this.radius = _rad;
        this.points = _points
    }

    update() {
        this.spin += 0.25;
    }

    draw() {
        strokeWeight(5);
        rect(this.x, this.y, this.x + this.r, this.y + this.r);
        this.angle = 360 / this.points;
        cap(ROUND);
    }
}
