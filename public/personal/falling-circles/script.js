var circs = [];
var y;
var counter;
var columnWidth;
var diameter;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(75);
    frameRate(20);

    y = 0;
    counter = 0;
    diameter = 15;
    columnWidth = random(25, 35);

}

function draw() {

    circs.push(new Row());
    console.log(circs);

    for (var x = 0; x <= width; x += columnWidth) {
        circs[counter].container.push(new Circle(x, y - diameter, diameter));
    }

    for (var i = 0; i < circs[counter].container.length; i++) {
        circs[counter].container[i].display();
    }

    if (y < (height / 2)) {
        diameter -= .33;
    } else {
        diameter += .33;
    }

    if (y - circs[counter].container[0].d <= height) {
        y += 4;
        counter++;
    } else {
        noLoop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(75);
}

class Circle {
    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
    }

    display() {
        stroke('white');
        fill('rgba(0,0,0,0)');
        ellipse(this.x, this.y, this.d);
    }
}

class Row {
    constructor() {
        this.container = [];
    }
}
