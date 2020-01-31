let ytide = 0.0;
let x = 0;
let y = 400;
var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  background(214, 250, 255);

  push();
  fill(0, 33, 69);
  beginShape();
  let xtide = 20;
  for (let x = 0; x <= width; x += 15) {
    let y = map(noise(xtide, ytide), 0, 1, 150, 300);
    vertex(x, y);
    xtide += 0.05;
  }
  ytide += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  push();
  var vol = mic.getLevel();
  noStroke();
  fill(255, 93, 84);
  strokeWeight(3);
  translate(width * vol, height * vol*-0.2);
  ellipse(150, height / 2 + 100, 60, 40);
  fill(255);
  ellipse(165, height / 2 + 100, 15, 15);
  fill(0);
  ellipse(165, height / 2 + 100, 8, 8);
  stroke(255, 93, 84);
  strokeWeight(3);
  noFill();
  ellipse(115, height / 2 + 100, 10, 15);
  pop();

  var tittle5 = "Whistle, whistle! so Nemo could cross the tide"
  drawingContext.font = "normal 18px Karla";
  drawingContext.textAlign = "center";
  fill(35, 90, 148);
  text(tittle5, width / 2, (height / 2) + 220);

  var tittle5 = "the stronger, the better"
  drawingContext.font = "normal 12px Karla";
  drawingContext.textAlign = "center";
  fill(74, 135, 199);
  text(tittle5, width / 2, (height / 2) + 240);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
