function getStrokeWeight(len) {
    if (len > 140) {
        strokeWeight(20);
    } else if (len > 130) {
        strokeWeight(18);
    } else if (len > 120) {
        strokeWeight(17);
    } else if (len > 110) {
        strokeWeight(16);
    } else if (len > 100) {
        strokeWeight(15);
    } else if (len > 90) {
        strokeWeight(14);
    } else if (len > 80) {
        strokeWeight(13);
    } else if (len > 70) {
        strokeWeight(12);
    } else if (len > 60) {
        strokeWeight(11);
    } else if (len > 50) {
        strokeWeight(10);
    } else if (len > 40) {
        strokeWeight(9);
    } else if (len > 35) {
        strokeWeight(8);
    } else if (len > 30) {
        strokeWeight(7);
    } else if (len > 25) {
        strokeWeight(6);
    } else if (len > 20) {
        strokeWeight(5);
    } else if (len > 16) {
        strokeWeight(4);
    } else if (len > 12) {
        strokeWeight(3);
    } else if (len > 8) {
        strokeWeight(2);
    } else if (len > 5) {
        strokeWeight(1);
    } else {
        strokeWeight(1);
    }
}

function drawLeaf(len) {
    push();
    fill("green");
    stroke("darkgreen");
    strokeWeight(1);
    ellipse(0, -len, 5, 8);
    pop();
}
