class Bad {
  constructor(x ,y) {
    this.x = x;
    this.y = y;
    this.col = random(0, 200)
    this.pos = createVector(x, y)
    this.speed = random(0.5, 1.5);
    this.r = res * 1;
    // angle = 0
    this.show = function () {
      noStroke();
      fill(250, 150, this.col);
      ellipse(Math.round(this.x), Math.round(this.y), this.r);
    };

    this.chase = function (ball){
      if (dist(this.x, this.y, ball.x, ball.y) < this.r * 13) {
        this.follow(ball, this.speed )
      }
      if(dist(this.x, this.y, ball.x, ball.y) < this.r - 5){
        
        setup()
        document.getElementById("scoreP").innerHTML = "Score: " + points;
        started = false;
        points = 0;
      }
    }

    this.follow = function(ball, rate){
      if (ball.x > this.x) {
        this.x = this.x + rate;
      } else {
        this.x = this.x - rate;
      }
      if (ball.y > this.y) {
        this.y = this.y + rate;
      } else {
        this.y = this.y - rate;
      }
    }
  }
}