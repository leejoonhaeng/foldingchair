var button;
var bgcolor;
var canvas ; 
var x = 100;
var y =100;
var sliderH;
var sliderA;
var sliderAL;
var sliderK; 
var input;
var nameP;
var h1;

function setup() {
  canvas = createCanvas(300,300);
  //canvas.position(500,500);
  bgcolor = color(200);
  h1 = createP('my favorit subject is math');
  createP("h Value");
  sliderH  = createSlider(0,100,50);
  createP("a Value");
  sliderA  = createSlider(0,100,20);
  createP("alpha Value");
  sliderAL  = createSlider(1,60,20);
  createP("k value");
  sliderK  = createSlider(0,100,50);

  createP(" ");
  button = createButton("update");
  button.mousePressed(changeColor);


  //createSlider(10,100,47);
}
function UpdateName(){
	name = input.value();

}

function changeColor(){
	bgcolor = color(random(255));

}

function draw() {
  
  background(bgcolor);
  fill(255,0,0);
  ellipse(100,100,sliderH.value(), sliderH.value());
  text("h = "+sliderH.value() + "\na = " + sliderA.value()+"\nalpha = "+sliderAL.value()+"\nk = "+sliderK.value(),100,10);
  //nameP.html(input.value());

  
}