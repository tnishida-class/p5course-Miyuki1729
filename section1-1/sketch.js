function setup() {
  createCanvas(128,128);
}

function draw() {
  background(252,225,250);
  strokeWeight(2);
  stroke(255);
  fill(23, 16, 87);
  triangle(12,120,116,120,116,10);
  fill(194, 242, 208);
  triangle(0,108,106,108,106,0);
  fill(23, 16, 87);
  textSize(15);
  textAlign(CENTER);
  textFont("serif");
  text("triangle×2", 68, 100);
}
