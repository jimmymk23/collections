// star array
let stars = [];

// rear widows arrays
let rear1 = [];
let rear2 = [];
let rear3 = [];
let rear4 = [];
// middle windows arrays
let middle1 = [];
let middle2_1 = [];
let middle2_2 = [];
let middle2_3 = [];
let middle2_4 = [];
let middle3_1 = [];
let middle3_2 = [];
let middle3_3 = [];
let middle3_4 = [];
let middle4_1 = [];
let middle4_2 = [];
// front windows arrays
let front1_1 = [];
let front1_2 = [];
let front1_3 = [];
let front2_1 = [];
let front2_2 = [];
let front3 = [];
let front4 = [];

function setup() {
  createCanvas(700, 500);
  for (let i = 0; i < 100; i++) {
    stars.push(new Shine());
  }
  //rear windows
  for (let r = 0; r < 45; r++) {
    rear1[r] = [];
    for (let c = 0; c < 7; c++) {
      rear1[r].push(new Windo(r*4 + 322, c*4 + 52, 1));
    }
    console.log(rear1[r])
  }
  for (let r = 0; r < 49; r++) {
    rear2[r] = [];
    for (let c = 0; c < 7; c++) {
      rear2[r].push(new Windo(r*4 + 303, c*4 + 232, 1));
    }
  }
  for (let r = 0; r < 25; r++) {
    rear3[r] = [];
    for (let c = 0; c < 13; c++) {
      rear3[r].push(new Windo(r*4 + 402, c*4 + 448, 1));
    }
  }
  for (let r = 0; r < 40; r++) {
    rear4[r] = [];
    for (let c = 0; c < 5; c++) {
      rear4[r].push(new Windo(r*4 + 342, c*4 + 601, 1));
    }
  }

  // middle Windows
  for (let r = 0; r < 58; r++) {
    middle1[r] = [];
    for (let c = 0; c < 12; c++) {
      middle1[r].push(new Windo(r*6 + 154, c*6 + 86, 3));
    }
  }
  for (let r = 0; r < 37; r++) {
    middle2_1[r] = [];
    for (let c = 0; c < 13; c++) {
      middle2_1[r].push(new Windo(r*6 + 281, c*6 + 272, 3));
    }
  }
  for (let r = 0; r < 13; r++) {
    middle2_2[r] = [];
    for (let c = 0; c < 9; c++) {
      middle2_2[r].push(new Windo(r*6 + 203, c*6 + 284, 3));
    }
  }
  for (let r = 0; r < 3; r++) {
    middle2_3[r] = [];
    for (let c = 0; c < 6; c++) {
      middle2_3[r].push(new Windo(r*6 + 183, c*6 + 293, 3));
    }
  }
  for (let r = 0; r < 3; r++) {
    middle2_4[r] = [];
    for (let c = 0; c < 3; c++) {
      middle2_4[r].push(new Windo(r*6 + 163, c*6 + 302, 3));
    }
  }
  for (let r = 0; r < 12; r++) {
    middle3_1[r] = [];
    for (let c = 0; c < 7; c++) {
      middle3_1[r].push(new Windo(r*6 + 230, c*6 + 403, 3));
    }
  }
  for (let r = 0; r < 18; r++) {
    middle3_2[r] = [];
    for (let c = 0; c < 3; c++) {
      middle3_2[r].push(new Windo(r*6 + 230, c*6 + 445, 3));
    }
  }
  for (let r = 0; r < 18; r++) {
    middle3_3[r] = [];
    for (let c = 0; c < 2; c++) {
      middle3_3[r].push(new Windo(r*6 + 338, c*6 + 445, 3));
    }
  }
  for (let r = 0; r < 10; r++) {
    middle3_4[r] = [];
    for (let c = 0; c < 1; c++) {
      middle3_4[r].push(new Windo(r*6 + 446, c*6 + 445, 3));
    }
  }
  for (let r = 0; r < 40; r++) {
    middle4_1[r] = [];
    for (let c = 0; c < 11; c++) {
      middle4_1[r].push(new Windo(r*6 + 264, c*6 + 623, 3));
    }
  }

  //Front Windows
  for (let r = 0; r < 10; r++) {
    front1_1[r] = [];
    for (let c = 0; c < 7; c++) {
      front1_1[r].push(new Windo(r*10 + 403, c*10 + 2, 5));
    }
  }
  for (let r = 0; r < 10; r++) {
    front1_2[r] = [];
    for (let c = 0; c < 5; c++) {
      front1_2[r].push(new Windo(r*10 + 303, c*10 + 2, 5));
    }
  }
  for (let r = 0; r < 10; r++) {
    front1_3[r] = [];
    for (let c = 0; c < 2; c++) {
      front1_3[r].push(new Windo(r*10 + 203, c*10 + 22, 5));
    }
  }
  for (let r = 0; r < 15; r++) {
    front2_1[r] = [];
    for (let c = 0; c < 14; c++) {
      front2_1[r].push(new Windo(r*10 + 355, c*10 + 108, 5));
    }
  }
  for (let r = 0; r < 10; r++) {
    front2_2[r] = [];
    for (let c = 0; c < 7; c++) {
      front2_2[r].push(new Windo(r*10 + 255, c*10 + 158, 5));
    }
  }
  for (let r = 0; r < 20; r++) {
    front3[r] = [];
    for (let c = 0; c < 12; c++) {
      front3[r].push(new Windo(r*10 + 305, c*10 + 325, 5));
    }
  }
  for (let r = 0; r < 30; r++) {
    front4[r] = [];
    for (let c = 0; c < 9; c++) {
      front4[r].push(new Windo(r*10 + 210, c*10 + 508, 5));
    }
  }
}

function draw() {
  background("#052647");
  frameRate(7);
  noStroke();

  //stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }

  // rear buildings
  fill("#364454");
  rect(50, 320, 60, height);
  rect(200, 300, 60, height);
  rect(440, 400, 60, height);
  rect(600, 340, 20, height);

  // rear windows
  for (let r = 0; r < rear1.length; r++) {
    for (let c = 0; c < rear1[r].length; c++) {
      rear1[r][c].switch();
      rear1[r][c].display();
    }
  }
  for (let r = 0; r < rear2.length; r++) {
    for (let c = 0; c < rear2[r].length; c++) {
      rear2[r][c].switch();
      rear2[r][c].display();
    }
  }
  for (let r = 0; r < rear3.length; r++) {
    for (let c = 0; c < rear3[r].length; c++) {
      rear3[r][c].switch();
      rear3[r][c].display();
    }
  }
  for (let r = 0; r < rear4.length; r++) {
    for (let c = 0; c < rear4[r].length; c++) {
      rear4[r][c].switch();
      rear4[r][c].display();
    }
  }
  // middle buildings
  fill("#47596c");
  rect(80, 150, 80, height);
  rect(270, 280, 80, height);
  rect(280, 200, 60, height);
  rect(290, 180, 40, height);
  rect(300, 160, 20, height);
  rect(307, 120, 5, height);

  //spire light
  fill("rgba(255,50,50,.60)");
  ellipse(310, 117, 9);

  //~resume middle buildings~
  fill("#47596c");
  rect(620, 320, 70, height);
  triangle(620, 260, 620, 320, 690, 320);

  rect(400, 230, 50, height);
  triangle(450, 230, 450, height, 470, 230);
  triangle(400, 230, 470, 230, 420, 180);

  // middle windows
  for (let r = 0; r < middle1.length; r++) {
    for (let c = 0; c < middle1[r].length; c++) {
      middle1[r][c].switch();
      middle1[r][c].display();
    }
  }
  for (let r = 0; r < middle2_1.length; r++) {
    for (let c = 0; c < middle2_1[r].length; c++) {
      middle2_1[r][c].switch();
      middle2_1[r][c].display();
    }
  }
  for (let r = 0; r < middle2_2.length; r++) {
    for (let c = 0; c < middle2_2[r].length; c++) {
      middle2_2[r][c].switch();
      middle2_2[r][c].display();
    }
  }
  for (let r = 0; r < middle2_3.length; r++) {
    for (let c = 0; c < middle2_3[r].length; c++) {
      middle2_3[r][c].switch();
      middle2_3[r][c].display();
    }
  }
  for (let r = 0; r < middle2_4.length; r++) {
    for (let c = 0; c < middle2_4[r].length; c++) {
      middle2_4[r][c].switch();
      middle2_4[r][c].display();
    }
  }
  for (let r = 0; r < middle3_1.length; r++) {
    for (let c = 0; c < middle3_1[r].length; c++) {
      middle3_1[r][c].switch();
      middle3_1[r][c].display();
    }
  }
  for (let r = 0; r < middle3_2.length; r++) {
    for (let c = 0; c < middle3_2[r].length; c++) {
      middle3_2[r][c].switch();
      middle3_2[r][c].display();
    }
  }
  for (let r = 0; r < middle3_3.length; r++) {
    for (let c = 0; c < middle3_3[r].length; c++) {
      middle3_3[r][c].switch();
      middle3_3[r][c].display();
    }
  }
  for (let r = 0; r < middle3_4.length; r++) {
    for (let c = 0; c < middle3_4[r].length; c++) {
      middle3_4[r][c].switch();
      middle3_4[r][c].display();
    }
  }
  // middle3.top (the big triangle window) . . . everything about this part (until "// middle 4") made me want to die.
  let totalWindows = 0;
  let numberOn = 0;
  for (let r = 0; r < middle1.length; r++) {
    for (let c = 0; c < middle1[r].length; c++) {
      totalWindows++;
      if (middle1[r][c].windowOn) {
        numberOn++;
      }
    }
  }
  let percentOn = numberOn/totalWindows;
  fill("rgba(255,253,156," + percentOn + ")");
  triangle(422, 187, 407, 225, 460, 225);
  let lineAnchors = [412, 420, 430, 440, 450];
  stroke("#768798");
  for (let a = 0; a < lineAnchors.length; a++) {
    line(422, 187, lineAnchors[a], 225);
  }
  noStroke();

  // middle 4
  for (let r = 0; r < middle4_1.length; r++) {
    for (let c = 0; c < middle4_1[r].length; c++) {
      middle4_1[r][c].switch();
      middle4_1[r][c].display();
    }
  }
  fill("#052647");
  triangle(620, 260, 690, 260, 690, 320);

  // front buildings
  fill("#768798");
  rect(0, 400, 75, height);
  rect(0, 300, 50, height);
  rect(20, 200, 20, height);
  rect(100, 350, 150, height);
  rect(150, 250, 80, height);
  rect(320, 300, 125, height);
  rect(500, 200, 100, height);

  // front windows
  for (let r = 0; r < front3.length; r++) {
    for (let c = 0; c < front3[r].length; c++) {
      front3[r][c].switch();
      front3[r][c].display();
    }
  }
  for (let r = 0; r < front4.length; r++) {
    for (let c = 0; c < front4[r].length; c++) {
      front4[r][c].switch();
      front4[r][c].display();
    }
  }
  for (let r = 0; r < front2_2.length; r++) {
    for (let c = 0; c < front2_2[r].length; c++) {
      front2_2[r][c].switch();
      front2_2[r][c].display();
    }
  }
  for (let r = 0; r < front2_1.length; r++) {
    for (let c = 0; c < front2_1[r].length; c++) {
      front2_1[r][c].switch();
      front2_1[r][c].display();
    }
  }
  for (let r = 0; r < front1_3.length; r++) {
    for (let c = 0; c < front1_3[r].length; c++) {
      front1_3[r][c].switch();
      front1_3[r][c].display();
    }
  }
  for (let r = 0; r < front1_2.length; r++) {
    for (let c = 0; c < front1_2[r].length; c++) {
      front1_2[r][c].switch();
      front1_2[r][c].display();
    }
  }
  for (let r = 0; r < front1_1.length; r++) {
    for (let c = 0; c < front1_1[r].length; c++) {
      front1_1[r][c].switch();
      front1_1[r][c].display();
    }
  }
}

class Shine {
  constructor() {
    this.culers = ["#ffd27d", "#ffa371", "#a6a8ff", "#fffa86", "#a87bff"];
    this.smallSize = 1;
    this.largeSize = 3;
    this.x = random(width);
    this.y = random(3 * height / 4);
    this.size1 = random(this.smallSize, this.largeSize);
    this.size2 = random(this.smallSize, this.largeSize);
    this.color = random(this.culers);
    this.speed = 0.5;
  }

  move() {
    this.size1 += random(-1, 1);
    if (this.size1 > this.largeSize) {
      this.size1 -= 1;
    } else if (this.size1 < this.smallSize) {
      this.size1 += 1;
    }
    this.size2 += random(-1, 1);
    if (this.size2 > this.largeSize) {
      this.size2 -= 1;
    } else if (this.size2 < this.smallSize) {
      this.size2 += 1;
    }
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size1, this.size2);
  }
}

// Window class
class Windo {
  constructor(r, c, size) {
    this.windowColorsF = ["#fffc36", "#fffc59", "#fffd9c", "#e3fcff"];
    this.windowColorsM = ["#fffc59", "#fffd9c", "#e3fcff"];
    this.windowColorsR = ["#fffd9c", "#e3fcff"];
    this.x = c;
    this.y = r;
    this.size = size;
    if (random() < .1) {
      this.windowOn = true;
    } else {
      this.windowOn = false;
    }
    this.chanceOn = 0;
    this.chanceOff = .005;
  }
  // determines the color of the window
  switch() {
    this.chanceOn = map(mouseY, height, 0, 0, .005);
    this.chanceOff = map(mouseY, 0, height, 0, .008);
    if (this.windowOn == true) {
      if (random() < this.chanceOff) {
        this.windowOn = false;
      }
    } else {
      if (random() < this.chanceOn) {
        this.windowOn = true;
      }
    }

  }
  // makes the window
  display() {
    if (this.windowOn) {
      if (this.size == 5){
        fill(random(this.windowColorsF));
      } else if (this.size == 3) {
        fill(random(this.windowColorsM));
      } else {
        fill(random(this.windowColorsR))
      }
    } else {
      // fill off window color gray
      fill("#b2c0c830");
    }
    rect(this.x, this.y, this.size, this.size);
  }
}
// adds 50 more stars every mouse click (max 500 to prevent lag)
function mousePressed() {
  if (stars.length < 500) {
    for (let i = 0; i < 50; i++) {
      stars.push(new Shine());
    }
  }
}
// removes 50 old stars every ENTER press (min 50 stars)
function keyTyped() {
  if (keyCode === ENTER) {
    if (stars.length > 50) {
      reverse(stars);
      for (let i = 0; i < 50; i++) {
        stars.pop();
      }
      reverse(stars);
    }
  }
}
