var button;
var bgcolor;

function setup() {
  createCanvas(300,300);
  bgcolor = color(200);
  createP('');
  button = createButton("go");
  button.mousePressed(changeColor);

  createSlider(10,100,47);

}

function draw() {
  background(0);
  ellipse(mouseX,mouseY,100,100);
  
}