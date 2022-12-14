let ball;
let rectSize = 200;
let xPos = 37.5;
let xSpace = 100;
let yPos = 37.5;
let ySpace = 37.5;

function setup() {
  let canvas = createCanvas(1200, 600);
  canvas.parent("canvasContainer");
  ball = new User();
  tree = new Tree(0,-10);
  tree2 = new Tree(200, -10);
  tree3 = new Tree(400, -10);
  tree4 = new Tree(600, -10);
  tree5 = new Tree(800, -10);
  tree6 = new Tree(1000, -10);
  tree7 = new Tree(0,290);
  tree8 = new Tree(200, 290);
  tree9 = new Tree(400, 290);
  tree10 = new Tree(600, 290);
  tree11 = new Tree(800, 290);
  tree12 = new Tree(1000, 290);
}

function draw() {
  background(0);

  for (let y = 0; y < height; y += rectSize) {
    for (let x = 0; x < width; x += rectSize) {
      // noStroke()
      fill(0, 60, 189)
      
      noStroke()
      rect(x, y, width, height);
    }
    
    
    stroke(0)
    fill(102, 245, 66)
    rect(0,75,1100,75)
    rect(100,225,1100,75)
    rect(0,375,1100,75)
    rect(100,525,1100,75)
    
    ball.display();
    ball.update();
    tree.display();
    tree.update();
    tree2.display();
    tree3.display();
    tree4.display();
    tree5.display();
    tree6.display();
    tree7.display();
    tree8.display();
    tree9.display();
    tree10.display();
    tree11.display();
    tree12.display(); 

    
    if(xPos<= 0){
      xPos = 37.5;
       yPos = 37.5; 
    }
    if(xPos>= 1200){
      xPos = 37.5;
       yPos = 37.5; 
    }
        if(yPos<= 0){
      xPos = 37.5;
       yPos = 37.5; 
    }
        if(yPos>= 600){
      xPos = 37.5;
       yPos = 37.5; 
    }
    if(xPos<=1100 & xPos>=0 & yPos>=75 & yPos<=150){
       xPos = 37.5;
       yPos = 37.5;
       }
        if(xPos<=1200 & xPos>=100 & yPos>=225 & yPos<=300){
       xPos = 37.5;
       yPos = 37.5;
       }
    if(xPos<=1100 & xPos>=0 & yPos>=375 & yPos<=450){
       xPos = 37.5;
       yPos = 37.5;
    }      
        if(xPos<=1200 & xPos>=100 & yPos>=525 & yPos<=600){
       xPos = 37.5;
       yPos = 37.5;
       }
    
 console.log(xPos, yPos ,"xPos")
  }
  fill(255)
  rect(47.5,530, 5,55)
  ellipse(50,580,75,15)
  fill(255, 0, 0)
  circle(50,530,15)
  if(xPos<=100 & yPos>=500){
    fill(255, 59, 3)
rect(windowWidth/2-350, windowHeight/2-150, 600,200)
fill(255)
textSize(150);
text('You Win', windowWidth/2-320, windowHeight/2);

}
}

class User {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  update() {}
  display() {
  fill(255,0,0)
  rect(xPos -70, yPos -20, 130, 40);
  fill(0)
  triangle(xPos -70, yPos -20, xPos-45, yPos -20, xPos-45, yPos -40);
  triangle(xPos + 60, yPos-20, xPos-30, yPos -20, xPos+35, yPos -40);
  rect(xPos -45, yPos -40, 80, 20);
  fill(0)
  ellipse(xPos -40, yPos + 20, 30, 30);
  circle(xPos + 30, yPos+ 20, 30);
  }
}
class Tree{
  constructor(startX, startY){
    this.x = startX
    this.y = startY
  }
  update(){}
  display(){
 

  fill('brown');
  rect(this.x, this.y + 100,10,50);
  fill('green');
  ellipse(this.x + 5,this.y + 95,35,35);

 
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



