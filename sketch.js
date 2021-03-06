 

var parameterA = 1.4;
var parameterB = -2.5;
var parameterC =  1.544;
var parameterD = 1.740;

var sizeX = 1000;
var sizeY = 1000;

var iterations = 100000;

var multyplX = 180;
var multyplY = 180;

var displaceX = sizeX/2
var displaceY = sizeY/2

var backColor;
var attrColor;

var attrColorR;
var attrColorG;
var attrColorB;


var pointSize = 1;
var pointAlfa = 40;

let button;

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
  
  /////////
  let inp_backColor = createColorPicker('#E6E6E6');
  inp_backColor.position(20, 340);
  inp_backColor.input(changeValues_backColor);
  
  let text_backColor = createElement('text', 'background');
  text_backColor.position(25 + inp_backColor.width, 340);

  let inp_attrColor = createColorPicker('#710300');
  inp_attrColor.position(20, 370);
  inp_attrColor.input(changeValues_attrColor);
  
  let text_attrColor = createElement('text', 'attractor');
  text_attrColor.position(25 + inp_attrColor.width, 370);
  //////
  
  let inp_iterations = createInput(str(iterations));
  inp_iterations.position(20, 0);
  inp_iterations.input(changeValues_iterations);
  
  let text_iterations = createElement('text', 'Iterations');
  text_iterations.position(25 + inp_iterations.width, 5);


  let inp_parameterA = createInput(str(parameterA));
  inp_parameterA.position(20, 25);
  inp_parameterA.input(changeValues_parameterA);
  
  let text_parameterA = createElement('text', 'Parameter a');
  text_parameterA.position(25 + inp_parameterA.width, 25);
  
  let inp_parameterB = createInput(str(parameterB));
  inp_parameterB.position(20, 50);
  inp_parameterB.input(changeValues_parameterB);
  
  let text_parameterB = createElement('text', 'Parameter b');
  text_parameterB.position(25 + inp_parameterB.width, 50);
  
  
  let inp_parameterC = createInput(str(parameterC));
  inp_parameterC.position(20, 75);
  inp_parameterC.input(changeValues_parameterC);
  
  let text_parameterC = createElement('text', 'Parameter c');
  text_parameterC.position(25 + inp_parameterC.width, 75);

  
  let inp_parameterD = createInput(str(parameterD));
  inp_parameterD.position(20, 100);
  inp_parameterD.input(changeValues_parameterD);
  
  let text_parameterD = createElement('text', 'Parameter d');
  text_parameterD.position(25 + inp_parameterD.width, 100);

  let inp_pointSize = createInput(str(pointSize));
  inp_pointSize.position(20, 125);
  inp_pointSize.input(changeValues_pointSize);
  
  let text_pointSize = createElement('text', 'Point size');
  text_pointSize.position(25 + inp_pointSize.width, 125);
  
  let inp_pointAlfa= createInput(str(pointAlfa));
  inp_pointAlfa.position(20, 150);
  inp_pointAlfa.input(changeValues_pointAlfa);
  
  let text_pointAlfa = createElement('text', 'Points intensity');
  text_pointAlfa.position(25 + inp_pointAlfa.width, 150);
  
  let inp_sizeX = createInput(str(sizeX));
  inp_sizeX.position(20, 175);
  inp_sizeX.input(changeValues_sizeX);
  
  let text_sizeX = createElement('text', 'size X');
  text_sizeX.position(25 + inp_sizeX.width, 175);
  
  let inp_sizeY= createInput(str(sizeY));
  inp_sizeY.position(20, 200);
  inp_sizeY.input(changeValues_sizeY);
  
  let text_sizeY = createElement('text', 'size Y');
  text_sizeY.position(25 + inp_sizeY.width, 200);
  
  let inp_multyplX = createInput(str(multyplX));
  inp_multyplX.position(20, 225);
  inp_multyplX.input(changeValues_multyplX);
  
  let text_multyplX = createElement('text', 'extention X');
  text_multyplX.position(25 + inp_multyplX.width, 225);  
  
  let inp_multyplY= createInput(str(multyplY));
  inp_multyplY.position(20, 250);
  inp_multyplY.input(changeValues_multyplY);
  
  let text_multyplY = createElement('text', 'extention Y');
  text_multyplY.position(25 + inp_multyplY.width, 250);  
  ///////
  
   let inp_displaceX = createInput(str(displaceX));
  inp_displaceX.position(20, 275);
  inp_displaceX.input(changeValues_displaceX);
  
  let text_displaceX = createElement('text', 'displace X');
  text_displaceX.position(25 + inp_displaceX.width, 275);  
  
  let inp_displaceY= createInput(str(displaceY));
  inp_displaceY.position(20, 300);
  inp_displaceY.input(changeValues_displaceY);
  
  let text_displaceY = createElement('text', 'displace Y');
  text_displaceY.position(25 + inp_displaceY.width, 300);  
  
  
  
  
  button = createButton('display attractor');
  button.position(20, 400);
  button.mousePressed(displayAttr);
  
  link = createA('https://github.com/weightan/attractorsJS', 'GitHub');
  link.position(20, 430);


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
  //let text_button = createElement('text', 'loading');
  //text_button.position(200, 400);
  push();
  background(backColor);
  let oldx  = 1;
  let oldy  = 1;
  stroke(attrColorR, attrColorG, attrColorB, pointAlfa);
  strokeWeight(pointSize); 
  
  for (let i = 0; i < iterations ; i += 1) {
    let newx = bigX(oldx, oldy);
    let newy = bigY(oldx, oldy);
    point(multyplX*newx + displaceX, multyplY*newy + displaceY) ;
    oldx  = newx;   
    oldy  = newy;  
  }
  pop();
  //text_button.hide();
}

function changeValues_iterations() {
  iterations = int(this.value());
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

function changeValues_pointSize() {
  pontSize = float(this.value());
}

function changeValues_pointAlfa() {
  pointAlfa = int(this.value());
}


function changeValues_sizeX() {
  sizeX = int(this.value());
  resizeCanvas(sizeX, sizeY);
}

function changeValues_sizeY() {
  sizeY = int(this.value());
  resizeCanvas(sizeX, sizeY);
}

function changeValues_multyplX() {
  multyplX= int(this.value());
}

function changeValues_multyplY() {
  multyplY = int(this.value());
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


function changeValues_displaceX() {
  displaceX= int(this.value());
}

function changeValues_displaceY() {
  displaceY = int(this.value());
}




