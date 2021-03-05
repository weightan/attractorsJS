 

var parameterA = 1.4;
var parameterB = -2.5;
var parameterC =  1.544;
var parameterD = 1.740;

var sizeX = 1000;
var sizeY = 1000;

var iterations = 50000;

var multyplX = 180;
var multyplY = 180;

var displaceX = sizeX/2
var displaceY = sizeY/2

var backColor;
var attrColor;

var attrColorR;
var attrColorG;
var attrColorB;


var pontSize = 1;
var pointAlfa = 10;


//let input, button, greeting;
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
  attrColor = color(132, 3, 0);
  attrColorR = red(attrColor);
  attrColorG = green(attrColor);
  attrColorB = blue(attrColor);
  
  
  displaceX = sizeX/2
  displaceY = sizeY/2
  
  createCanvas(sizeX, sizeX);
  background(backColor);
  displayAttr();
 
  let inp_backColor = createColorPicker('#E6E6E6');
  inp_backColor.position(20, 275);
  inp_backColor.input(changeValues_backColor);
  
  let inp_attrColor = createColorPicker('#710300');
  inp_attrColor.position(20, 310);
  inp_attrColor.input(changeValues_attrColor);
  
  let inp_iterations = createInput(str(iterations));
  inp_iterations.position(20, 0);
  inp_iterations.input(changeValues_iterations);

  let inp_parameterA = createInput(str(parameterA));
  inp_parameterA.position(20, 25);
  inp_parameterA.input(changeValues_parameterA);
  
  let inp_parameterB = createInput(str(parameterB));
  inp_parameterB.position(20, 50);
  inp_parameterB.input(changeValues_parameterB);
  
  let inp_parameterC = createInput(str(parameterC));
  inp_parameterC.position(20, 75);
  inp_parameterC.input(changeValues_parameterC);
  
  let inp_parameterD = createInput(str(parameterD));
  inp_parameterD.position(20, 100);
  inp_parameterD.input(changeValues_parameterD);

  let inp_pontSize = createInput(str(pontSize));
  inp_pontSize.position(20, 125);
  inp_pontSize.input(changeValues_pontSize);
  
  let inp_pointAlfa= createInput(str(pointAlfa));
  inp_pointAlfa.position(20, 150);
  inp_pointAlfa.input(changeValues_pointAlfa);
  
  let inp_sizeX = createInput(str(sizeX));
  inp_sizeX.position(20, 175);
  inp_sizeX.input(changeValues_sizeX);
  
  let inp_sizeY= createInput(str(sizeY));
  inp_sizeY.position(20, 200);
  inp_sizeY.input(changeValues_sizeY);
  
  let inp_multyplX = createInput(str(multyplX));
  inp_multyplX.position(20, 225);
  inp_multyplX.input(changeValues_multyplX);
  
  let inp_multyplY= createInput(str(multyplY));
  inp_multyplY.position(20, 250);
  inp_multyplY.input(changeValues_multyplY);
  
  
  
  
  button = createButton('display attractor');
  button.position(20, 400);
  button.mousePressed(displayAttr);

  //textAlign(CENTER);
  //textSize(50);
  
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
  displaceX = sizeX/2
  displaceY = sizeY/2
  push();
  background(backColor);
  let oldx  = 1;
  let oldy  = 1;
  stroke(attrColorR, attrColorG, attrColorB, pointAlfa);
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

function changeValues_pontSize() {
  pontSize = float(this.value());
}

function changeValues_pointAlfa() {
  pointAlfa = float(this.value());
}


function changeValues_sizeX() {
  sizeX = float(this.value());
  resizeCanvas(sizeX, sizeY);
}

function changeValues_sizeY() {
  sizeY = float(this.value());
  resizeCanvas(sizeX, sizeY);
}

function changeValues_multyplX() {
  multyplX= float(this.value());
}

function changeValues_multyplY() {
  multyplY = float(this.value());
}

function changeValues_backColor() {
  backColor = color(this.value());
}

function changeValues_attrColor() {
  attrColor = color(this.value());
  attrColorR = red(attrColor);
  attrColorG = green(attrColor);
  attrColorB = blue(attrColor);
}





