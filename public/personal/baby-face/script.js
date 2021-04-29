let img;

function preload() {
    img = loadImage('mattFace.png');
}

var bubs = [];

var options = function() {
  this.amount = 100;
  this.floatSpeed = 1;
}

var gui = new dat.GUI();
var ops = new options();

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#bbede2");

  gui.add(ops, 'amount', 0, 300);
  gui.add(ops, 'floatSpeed', 0, 5);

  for (var i = 0; i < ops.amount; i++) {
    bubs.push(new Face(random(width), img));
  }
}

function draw() {
  background("#bbede2");
  if (ops.amount > bubs.length) {
    for (var i = 1; i < (ops.amount - bubs.length); i++) {
      bubs.push(new Face(random(width), img));
    }
  } else if (ops.amount < bubs.length) {
    for (var i = 0; i < (bubs.length - ops.amount); i++) {
      bubs.splice(random(bubs.length - 1), 1);
    }
  }

  for (var i = 0; i < bubs.length; i++) {
    if (bubs[i].x > width) {
      bubs.splice(i, 1);
      bubs.push(new Face(0, img));
    }
    bubs[i].update();
    bubs[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#bbede2");
}

class Face {
  constructor(x, img) {
    this.img = img;
    this.d = random(50, 90);
    this.x = x - this.d;
    this.y = random(height);
    this.xoff = random(500);
  }

  update() {
    this.x += ops.floatSpeed;
  }

  display() {
      image(this.img, this.x, this.y, this.d, this.d);
  }
}
