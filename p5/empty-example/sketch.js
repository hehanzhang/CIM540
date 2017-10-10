var bgColor = "green";

var fSize = 200;

var posX = 0;
var posY = 0;

function setup() 
{
    
  createCanvas(1000, 500);
    background(125);
    background(255,0,0);
    background("#333333")
    background(bgColor)
    
    posX = width/2;
    posY = height/5;
}


function draw() 
{
    
    strokeWeight(0);
    //face
    fill("yellow");
    ellipse(posX,posY,fSize,fSize);
    
    //mouth
    fill("red");
    rect(posX - 50,posY + 50,100,20);
    
    //eys
    
    fill("255");
    ellipse(posX - 50, posY - 20,20,40);
    fill("255");
    ellipse(posX + 50, posY - 20,20,40);
    fill("black");
    ellipse(posX + 50, posY - 20,20,20);
    ellipse(posX - 50, posY - 20,20,20);
    
    //mouthline
    
    stroke(125,0,0);
    strokeWeight(1);

    line(posX + 50, posY +60, posX - 50, posY +60);
    

    
    //mole
    point(posX + 20, posY + 10);
    
    fill("pink")
    arc(posX, posY + 60, 50, 50, 0, PI);
}