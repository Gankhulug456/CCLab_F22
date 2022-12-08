
let ball;
let rectSize = 220;
let xPos = 0;
let xSpace = 110;
let yPos = 0;
let ySpace = 110;

function setup() {
  let canvas = createCanvas(1100, 660);
  canvas.parent("canvasContainer");
  background(220);
  ball = new User();
}

function draw() {
  
  for (let y = 0; y < height; y += rectSize) {
    for (let x = 0; x < width; x += rectSize) {
      // noStroke()
      fill(0, 255, 132)
      
      noStroke()
      rect(x, y, width, height);
    }
    
    
    stroke(1)
    line(0,220,880,220)
    line(0,440,880,440)
    line(880,220,880,440)
    fill(0)
    rect(0,220,880,220)
    ball.display();
    ball.update();
    
    if(xPos<= 0){
      xPos = 110;
       yPos = 110; 
    }
    if(xPos>= 1100){
      xPos = 110;
       yPos = 110; 
    }
        if(yPos<= 0){
      xPos = 110;
       yPos = 110; 
    }
        if(yPos>= 660){
      xPos = 110;
       yPos = 110; 
    }
    if(xPos<=880 & xPos>=0 & yPos>=220 & yPos<=440){
       xPos = 110;
       yPos = 110;
       }
    
 console.log(xPos,"xPos")
  }
  rect(15,460, 190,190)
}
class User {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  update() {}
  display() {
    fill(255, 89, 0)
    circle(xPos, yPos, 150);
  }
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    yPos = yPos - ySpace;
  } else if (keyCode === DOWN_ARROW) {
    yPos = yPos + ySpace;
  }
  if (keyCode === LEFT_ARROW) {
    xPos = xPos - xSpace;
  } else if (keyCode === RIGHT_ARROW) {
    xPos = xPos + xSpace;
  }
}
