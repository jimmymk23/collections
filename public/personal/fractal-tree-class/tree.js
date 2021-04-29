class Tree {
    constructor() {
        this.angle = angleSlider.value();
        this.len = lenSlider.value();
        this.branchColor = "#4e2710";
        this.strokeWeight = getStrokeWeight(this.len);
        this.originX = floor(random(width * 0.6) + width * 0.2);
        this.layers = ["front", "middle", "back"];
        this.position = random(this.layers);
        if (this.position == "front") {
            this.originY = floor(random(height/15) + 13 * height/15);
        } else if (this.position == "middle") {
            this.originY = floor(random(height/15) + 12 * height/15);
        } else {
            this.originY = floor(random(height/15) + 11 * height/15);
        }
    }

    branch(len) {
        stroke(this.branchColor);
        getStrokeWeight(len);
        if (len > 30) {
            line(0, 0, 0, -len);
            translate(0, -len);
            push();
            rotate(this.angle);
            this.branch(len * .7);
            pop();
            push();
            rotate(-this.angle);
            this.branch(len * .7);
            pop();
        } else if (len > 7) {
            line(0, 0, 0, -len);
            translate(0, -len);
            push();
            rotate(this.angle);
            drawLeaf(len);
            this.branch(len * .75);
            pop();
            push();
            rotate(-this.angle);
            drawLeaf(len);
            this.branch(len * .75);
            pop();
        } else if (len > 3) {
            drawLeaf(len);
        }
    }

    render() {
        this.angle = angleSlider.value();
        this.len = lenSlider.value();
        push();
        translate(this.originX, this.originY);
        if (this.position == "front") {
            this.branch(this.len);
        } else if (this.position == "middle") {
            this.branch(this.len * 0.75);
        } else {
            this.branch(this.len * 0.5);
        }
        pop();
    }


}
