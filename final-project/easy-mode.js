let ball;
let rectSize = 200;
let xPos = 100;
let xSpace = 100;
let yPos = 100;
let ySpace = 100;

function setup() {
  let canvas = createCanvas(1200, 600);
  canvas.parent("canvasContainer");
  ball = new User();
    tree = new Tree(50,130);
    tree1 = new Tree(350,130);
    tree2 = new Tree(650,130);   
    tree3 = new Tree(950,130);
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
    rect(0,200,1000,200)
    ball.display();
    ball.update();
    tree.display();
    tree1.display();       
    tree2.display();
    tree3.display();
    if(xPos<= 0){
      xPos = 100;
       yPos = 100; 
    }
    if(xPos>= 1200){
      xPos = 100;
       yPos = 100; 
    }
        if(yPos<= 0){
      xPos = 100;
       yPos = 100; 
    }
        if(yPos>= 600){
      xPos = 100;
       yPos = 100; 
    }
    if(xPos<=1000 & xPos>=0 & yPos>=200 & yPos<=400){
       xPos = 100;
       yPos = 100;
       }
    
 console.log(xPos, yPos ,"xPos")
  }
  fill(255)
  rect(95,430, 10,110)
  ellipse(100,530,150,30)
  fill(255, 0, 0)
  circle(100,430,30)
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
  rect(this.x, this.y + 100,30,150);
  fill('green');
  ellipse(this.x + 15,this.y + 95,105,105);

 
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


