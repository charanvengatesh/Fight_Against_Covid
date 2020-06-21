class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.pos = createVector(this.x, this.y)
    this.speed = 2;
    this.r = res * 1;
    // angle = 0
    this.show = function () {
      noStroke();
      var a = atan2(mouseY - height / 2, mouseX - width / 2);
      fill(200);
      ellipse(Math.round(this.x), Math.round(this.y), this.r);
      /*push()
          translate(this.x, this.y)
          rotate(a)
          fill(10)
          rectMode(CENTER)
          rect(r, 0, 20, 30)
          pop()*/
    };
    this.move = function () {
      if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
        //Right
        screenX += this.speed;
        ball.x -= this.speed;
      }
      if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
        //Left
        screenX -= this.speed;
        ball.x += this.speed;
      }
      if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
        //Up
        screenY += this.speed;
        ball.y -= this.speed;
      }
      if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
        //Down
        screenY -= this.speed;
        ball.y += this.speed;
      }
      if (keyIsDown(SHIFT)) {
        //Down
        this.speed = 4;
      } else {
        this.speed = 2;
      }
      boundaryBlock();
    };
  }
}

function boundaryBlock() {
  
  if (ball.x > 400) {
    screenX += ball.speed;
    ball.x -= ball.speed;
  }
  if (ball.x < -400) {
    screenX -= ball.speed;
    ball.x += ball.speed;
  }
  if (ball.y > 250) {
    screenY += ball.speed;
    ball.y -= ball.speed;
  }
  if (ball.y < -250) {
    screenY -= ball.speed;
    ball.y += ball.speed;
  }
}
