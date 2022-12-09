
let particles = [];
function setup() {
  let canvas = createCanvas(1349, 600);
  canvas.parent("canvasContainer");
}

function draw() {
  background(0);
  particles.push( new Particle(random(width), random(height)) );
  
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.attractedTo(mouseX, mouseY);
    p.move();
    p.slowDown();
    p.display();
  }
    if(particles.length >= 30){
    particles.splice(0, 1);
  }
}


class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-5, -3);
    this.dia = 10;
  }

  attractedTo(targetX, targetY) {
    let xAcc = (targetX - this.x) * 0.01;  
    let yAcc = (targetY - this.y) * 0.01;
    this.xSpd += xAcc;
    this.ySpd += yAcc;
  }
  slowDown() {
    this.xSpd = this.xSpd * 0.8; 
    this.ySpd = this.ySpd * 0.8; 
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    fill(random(255), random(255), random(255))
    push();
    translate(this.x, this.y);
    circle(0, 0, this.dia);
    
    pop();
  }
}
