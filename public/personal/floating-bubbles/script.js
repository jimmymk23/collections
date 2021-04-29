bubs = [];
bubbleColors = ["#b6dfe3", "#9fdde3", "#9fc8e3", "#84b8db", "#78d9de", "#5dc4e3"]

var options = function() {
  this.amount = 100;
  this.floatSpeed = 0.001;
}

var gui = new dat.GUI();
var ops = new options();

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#bbede2");

  gui.add(ops, 'amount', 0, 300);
  gui.add(ops, 'floatSpeed', 0, 0.005);

  for (var i = 0; i < ops.amount; i++) {
    bubs.push(new Bubble(random(width)));
  }
}

function draw() {
  background("#bbede2");
  if (ops.amount > bubs.length) {
    for (var i = 1; i < (ops.amount - bubs.length); i++) {
      bubs.push(new Bubble(random(width)));
    }
  } else if (ops.amount < bubs.length) {
    for (var i = 0; i < (bubs.length - ops.amount); i++) {
      bubs.splice(random(bubs.length - 1), 1);
    }
  }

  for (var i = 0; i < bubs.length; i++) {
    if (bubs[i].x > width + (bubs[i].d)/2) {
      bubs.splice(i, 1);
      bubs.push(new Bubble(0));
    }
    bubs[i].update();
    bubs[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#bbede2");
}

class Bubble {
  constructor(x) {
    this.d = random(20, 40);
    this.x = x - this.d / 2;
    this.y = random(height);
    this.fill = random(bubbleColors);
    this.xoff = random(500);
  }

  update() {

    this.x += 1;

    // if (this.x > width) {
    //   this.x += -1;
    // } else if (this.x <= 0) {
    //   this.x += 1;
    // } else {
    //   this.x += random(-1, 1);
    // }

    this.y = map(noise(this.xoff), 0, 1, 0, height);
    this.xoff += ops.floatSpeed;


    // if (this.y >= height) {
    //   this.y += -1;
    // } else if (this.y <= 0) {
    //   this.y += 1;
    // } else {
    //   this.y += random(-1, 1);
    // }

    // if (this.d >= 40) {
    //   this.d += -1;
    // } else if (this.d <= 20) {
    //   this.d += 1;
    // } else {
    //   this.d += random(-1, 1);
    // }

    // if (this.fill >= 255) {
    //   this.fill += -3;
    // } else if (this.fill <= 0) {
    //   this.fill += 3;
    // } else {
    //   this.fill += random(-3, 3);
    // }
  }

  display() {
    fill(this.fill);
    ellipse(this.x, this.y, this.d);
  }
}
