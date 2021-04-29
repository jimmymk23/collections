class Tile {
    constructor(tempX, tempY, tempWidth, tempHeight) {
        this.width = tempWidth - 1;
        this.height = tempHeight - 1;
        this.x = tempX + this.width / 2;
        this.y = tempY + this.height / 2;
        this.r = (this.width) / 2;
        this.numShapes = random([3, 6]);
        this.angle = 360 / this.numShapes;
        this.rungs = 7;

        this.items = [];
    }

    choose() {
        this.circle = new Circle(this.x, this.y, this.r);
        this.polygon = new Hexagon(this.x, this.y, this.r);
        this.lines = new Lines(this.x, this.y, this.r, this.angle, this.numShapes);
        this.dots = new Dots(this.x, this.y, this.r, this.angle, this.numShapes, this.rungs);
        this.flowers = new Flower(this.x, this.y, this.r, this.angle, this.numShapes);
        this.triangles = new Triangles(this.x, this.y, this.r);

        this.objects = [
            this.circle,
            this.polygon,
            this.lines,
            this.dots,
            this.flowers,
            this.triangles];

        for (var i = 0; i < 2; i++) {
            this.obj = this.objects.pop(shuffle(this.objects, true));
            this.items.push(this.obj);
        }
    }

    update() {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].update();
        }
    }

    display() {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].display();
        }
    }
}

class Circle {
    constructor(tempX, tempY, tempR) {
        this.x = tempX;;
        this.y = tempY;
        this.maxR = tempR;
        this.r = this.maxR;
        this.grow = false;
        this.color = strokeColor;
        this.strokeWeight = 2;
    }

    update() {
        // Does nothing but needs to be here
    }

    display() {
        strokeWeight(this.strokeWeight);
        stroke(this.color);
        push();
        translate(this.x, this.y);
        noFill();
        scale(ops.scale);
        ellipse(0, 0, this.r * 2 - 1);
        pop();
    }
}

class Lines {
    constructor(tempX, tempY, tempR, tempAngle, tempShapes) {
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
        this.angle = tempAngle;
        this.numShapes = tempShapes;
        this.color = strokeColor;
        this.spinAngle = 0;
        this.strokeWeight = 2;
        if (random() < .5) {
            this.clockwise = true;
        } else {
            this.clockwise = false;
        }
    }

    update() {
        if (this.clockwise) {
            this.spinAngle += ops.speed;
        } else {
            this.spinAngle -= ops.speed;
        }
    }

    display() {
        strokeWeight(this.strokeWeight);
        stroke(this.color);
        push();
        translate(this.x, this.y);
        rotate(this.spinAngle);
        // Makes Each Line
        for (var i = 0; i < this.numShapes; i++) {
            push();
            scale(ops.scale);
            if (this.numShapes == 3) {
                line(0, 0, 0, -this.r);
            } else {
                line(0, 0, this.r, 0);
            }
            pop();
            rotate(this.angle);
        }
        pop();
    }
}

class Dots {
    constructor(tempX, tempY, tempR, tempAngle, tempShapes, tempRungs) {
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
        this.maxR = this.r;
        this.grow = false;
        this.angle = tempAngle;
        this.numShapes = tempShapes;
        this.rungs = tempRungs;
        this.color = strokeColor;
        this.spinAngle = 0;
        if (random() < .5) {
            this.clockwise = true;
        } else {
            this.clockwise = false;
        }
    }

    update() {
        if (this.clockwise) {
            this.spinAngle += ops.speed;
        } else {
            this.spinAngle -= ops.speed;
        }
    }

    display() {
        noStroke();
        fill(this.color);
        push();
        translate(this.x, this.y);
        rotate(this.spinAngle);
        // Makes each line
        for (var i = 0; i < this.numShapes; i++) {
            push();
            scale(ops.scale);
            // Makes each dot
            for (var r = 0; r <= this.rungs; r++) {
                ellipse(0, r * ((this.r) / this.rungs), 4);
            }
            pop();
            rotate(this.angle);
        }
        pop();
    }
}

class Hexagon {
    constructor(tempX, tempY, tempR) {
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
        this.vertices = 6;
        this.color = strokeColor;
        this.spinAngle = 0;
        if (random() < .5) {
            this.clockwise = true;
        } else {
            this.clockwise = false;
        }
    }

    update() {
        if (this.clockwise) {
            this.spinAngle += ops.speed;
        } else {
            this.spinAngle -= ops.speed;
        }
    }

    display() {
        stroke(this.color);
        noFill();
        push();
        translate(this.x, this.y);
        rotate(this.spinAngle);
        scale(ops.scale);
        polygon(0, 0, this.r, this.vertices);
        pop();
    }
}

class Flower {
    constructor(tempX, tempY, tempR, tempAngle, tempShapes) {
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
        this.angle = tempAngle;
        this.numShapes = tempShapes;
        this.color = strokeColor;
        this.spinAngle = 0;
        this.strokeWeight = 2;
        if (random() < .5) {
            this.clockwise = true;
        } else {
            this.clockwise = false;
        }
    }

    update() {
        if (this.clockwise) {
            this.spinAngle += ops.speed;
        } else {
            this.spinAngle -= ops.speed;
        }
    }

    display() {
        strokeWeight(this.strokeWeight);
        stroke(this.color);
        push();
        translate(this.x, this.y);
        rotate(this.spinAngle);
        // Makes Each Pedal
        for (var i = 0; i < this.numShapes; i++) {
            push();
            scale(ops.scale);
            noFill();
            ellipse(0, this.r / 2, this.r / 1);
            pop();
            rotate(this.angle);
        }
        pop();
    }
}

class Triangles {
    constructor(tempX, tempY, tempR) {
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
        this.numShapes = 6;
        this.angle = 360 / this.numShapes;
        this.vertices = 3;
        this.color = strokeColor;
        this.spinAngle = 0;
        if (random() < .5) {
            this.clockwise = true;
        } else {
            this.clockwise = false;
        }
    }

    update() {
        if (this.clockwise) {
            this.spinAngle += ops.speed;
        } else {
            this.spinAngle -= ops.speed;
        }
    }

    display() {
        stroke(this.color);
        noFill();
        push();
        translate(this.x, this.y);
        rotate(this.spinAngle);
        for (var i = 0; i < this.numShapes; i++) {
            push();
            scale(ops.scale);
            if (this.numShapes == 3) {
                rotate(60);
            }
            translate(0, -this.r / 2);
            rotate(90);
            noFill();
            polygon(0, 0, this.r / 4, this.vertices);
            pop();
            rotate(this.angle);
        }
        pop();
    }
}

// https://p5js.org/examples/form-regular-polygon.html
// Slightly Modified
function polygon(x, y, radius, npoints) {
    let angle = 360 / npoints;
    beginShape();
    for (let a = 0; a < 360; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
        if (npoints == 6) {
            ellipse(sx, sy, radius / 10);
        }
    }
    endShape(CLOSE);
}
