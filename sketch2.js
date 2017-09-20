var button;
var bgcolor;
var canvas ; 
var x = 100;
var y =100;
var slider; 
var input;
var nameP;

var h1;

function setup() {
  canvas = createCanvas(300,300);
  //canvas.position(500,500);
  bgcolor = color(200);
  h1 = createP('my favorit subject is math');
  nameP  = createP("your name");
 

  button = createButton("click me");

  button.mousePressed(changeColor);
  slider  = createSlider(0,100,50);
  input = createInput('type your name');

  //createSlider(10,100,47);
}
function updateName(){
	name = input.value();

}

function changeColor(){
	bgcolor = color(random(255));

}

function draw() {
  
  background(bgcolor);
  fill(255,0,0);
  ellipse(100,100,slider.value(), slider.value());
  text(input.value(),100,10);
  nameP.html(input.value());

  
}