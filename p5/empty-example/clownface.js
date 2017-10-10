var centerX = 0;
var centerY = 0;
var bgColor;
var hRedColor, hGreenColor,hBlueColor;

function setup() {
  createCanvas(500, 500);
  centerX = width / 2;
  centerY = height / 2;
  bgColor = color(255,0,0);
  hRedColor = createSlider(0,255,0);
  hGreenColor = createSlider(255,0,0);
  hBlueColor = createSlider(0,0,255);
}

function draw() {
  background(bgColor);
  //console.log("MouseX: " + mouseX + " MouseY: " + mouseY);
  centerX = mouseX;
  centerY = mouseY
    
  fill(255)
    stroke(0);
  strokeWeight(1);

  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
  var noseWiggleX = map(mouseX,0,width,-10,10); 
  var noseWiggleY = map(0,mouseY,height,0,10);
  console.log("noseWiggle: " + noseWiggleX)
  ellipse(centerX + noseWiggleX, centerY + 10, 20, 20);
  //eyse
  ellipse(centerX - 10 + noseWiggleX, centerY - 10, 10, 20);
  ellipse(centerX + 10 + noseWiggleX, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

  noFill();
  stroke(hRedColor.value,0,0);
  strokeWeight(4);
  arc(centerX,centerY,100,100, 0,PI)
  strokeWeight(30);
  arc(centerX,centerY,100,100, PI,TWO_PI)
}

function mousePressed(){
    console.log("mousePressed");
    bgColor = color(0,255,0);
    
}