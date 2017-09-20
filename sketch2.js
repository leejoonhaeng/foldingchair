var button;
var bgcolor;
var canvas ; 
var x = 100;
var y =100;

var h1;

function setup() {
  canvas = createCanvas(300,300);
  //canvas.position(500,500);
  bgcolor = color(200);
  h1 = createP('my favorit subject is math');
  createP(" ");
  button = createButton("click me");

  button.mousePressed(changeColor);
  createSlider(0,10,5);

  //createSlider(10,100,47);
}


function changeColor(){
	bgcolor = color(random(255));

}

function draw() {
  
  background(bgcolor);
  fill(255,0,0);
  ellipse(100+x,100+y,100,100);
  h1.position(x,y);

  
}