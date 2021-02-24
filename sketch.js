var hr,mn,sc;


function setup() {
  createCanvas(600,600);
  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  
}

function draw() {
  background("pink");  
  
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  map(hr%12, 0,12, 0, 360)
  

  push();
  rotate(scAngle)
  stroke(0,0,255)
  strokeWeight(7)
  translate(300,300)
  line(10,400,100,100)
  pop();

  push();
  rotate(mnAngle)
  stroke(0,0,255)
  strokeWeight(7)
  translate(300,300)
  line(10,0,100,0)
  pop();

  push();
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  translate(300,300)
  line(300,0,100,0)
  pop();


  drawSprites();
}
