var parameterA = 1.4;
var parameterB = -2.5;
var parameterC =  1.544;
var parameterD = 1.740;

var sizeX = 600;
var sizeY = 600;

var iterations = 10000;

var multyplX = 120;
var multyplY = 120;

var displaceX = sizeX/2
var displaceY = sizeY/2

var backColor;
var attrColor;

var pontSize = 3;
var pointAlfa = 30;


let input, button, greeting;
//0a = 1.4, b = -2.1, c = 2.4, d = -2.1
//0a = 1.4, b = -1.899, c = 1.38,d = -1.4
//0a = 1.41, b = -2.3, c = 2.3, d = -2.13
//0a = 2.01, b = -2.5, c = 1.62, d = -0.32
//a = -2.7, b = -0.09, c = -0.86, d = -2.2
//a = -0.827, b = -1.637, c = 1.659, d = -0.943
//a = -2.24, b = 0.43, c = -0.65, d = -2.43
//a = -2, b = -2, c = -1.2, d = 2
//a = -0.709, b = 1.638, c = 0.452, d = 1.740
//0a = 0.970, b = -1.899, c = 1.381,d = -1.506


function setup() {
  backColor = 230;
  
  
  createCanvas(sizeX, sizeX);
  background(backColor);
  displayAttr();
 
  let inp_iterations = createInput(str(iterations));
  inp_iterations.position(0, 0);
  inp_iterations.input(changeValues_iterations);
  
  let inp_parameterA = createInput(str(parameterA));
  inp_parameterA.position(0, 25);
  inp_parameterA.input(changeValues_parameterA);
  
  let inp_parameterB = createInput(str(parameterB));
  inp_parameterB.position(0, 50);
  inp_parameterB.input(changeValues_parameterB);
  
  let inp_parameterC = createInput(str(parameterC));
  inp_parameterC.position(0, 75);
  inp_parameterC.input(changeValues_parameterC);
  
  let inp_parameterD = createInput(str(parameterD));
  inp_parameterD.position(0, 100);
  inp_parameterD.input(changeValues_parameterD);
  
  
  
  button = createButton('display attractor');
  button.position(20, 400);
  button.mousePressed(displayAttr);

  textAlign(CENTER);
  textSize(50);
  
}

function draw() {
}

function bigX(xn, yn){
  return sin(parameterA * yn) - cos(parameterB * xn);
}

function bigY(xn, yn){
  return  sin(parameterC * xn) - cos(parameterD * yn);
}  

function displayAttr(){
  push();
  background(backColor);
  let oldx  = 1;
  let oldy  = 1;
  stroke(0, pointAlfa);
  strokeWeight(pontSize); 
  
  for (let i = 0; i < iterations ; i += 1) {
    let newx = bigX(oldx, oldy);
    let newy = bigY(oldx, oldy);
    point(multyplX*newx + displaceX, multyplY*newy + displaceY) ;
    oldx  = newx;   
    oldy  = newy;  
  }
  pop();
}

function changeValues_iterations() {
  iterations = float(this.value());
}

function changeValues_parameterA() {
  parameterA = float(this.value());
}

function changeValues_parameterB() {
  parameterB = float(this.value());
}

function changeValues_parameterC() {
  parameterC = float(this.value());
}

function changeValues_parameterD() {
  parameterD = float(this.value());
}

