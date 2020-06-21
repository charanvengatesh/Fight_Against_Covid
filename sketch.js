var ball;
let screenX;
let screenY;
let started = false;
let res = 25;
let bads = [];
let points = 0;
function setup() {
  // points = 0;
  background(75, 150, 50);
  createCanvas(800, 500);
  ball = new Ball();
  for (let i = 0; i < 10; i++) {
    bads[i] = new Bad(random(-400, 400), random(-250, 250));
  }
  noLoop();
}

function draw() {
  //BACKGROUND
  background(75, 150, 50);
  if (started) {
    //VIEWING TYPE
    translate(width / 2, height / 2);
    // translate(screenX, screenY);

    fill(255);
    rect(0, 0, 5, 5);

    mX = Math.round((mouseX - width / 2 + ball.x) / res);
    mY = Math.round((mouseY - height / 2 + ball.y) / res);

    //SHOWING PLAYER
    ball.show();
    ball.move();

    //SHOWING BAD PEOPLE
    for (let i = 0; i < bads.length; i++) {
      bads[i].show();
      bads[i].chase(ball);
    }
    points++;
  }
}


function addBoundary(x, y, w, h) {
  rectMode(CENTER);
  noStroke();
  fill(25, 75, 25, 100);
  rect(x, y, w, h);
}

function start() {
  started = true;
  loop();
}