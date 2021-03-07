 

var parameterA = 1.4;
var parameterB = -2.5;
var parameterC =  1.544;
var parameterD = 1.740;



var inp_parameterA,  inp_parameterB, inp_parameterC, inp_parameterD;
var text_parameterA, text_parameterB, text_parameterC, text_parameterD;


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

var burn = 0;

var pointSize = 1;
var pointAlfa = 40;

let button1, button2;

var radio;

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
  
  str_parameterA = str(parameterA);
  str_parameterB = str(parameterB);
  str_parameterC =  str(parameterC);
  str_parameterD = str(parameterD);
  
  backColor = 230;
  attrColor = color(132, 3, 0);
  attrColorR = red(attrColor);
  attrColorG = green(attrColor);
  attrColorB = blue(attrColor);
  
  
  displaceX = sizeX/2
  displaceY = sizeY/2
  
  createCanvas(sizeX, sizeX);
  background(backColor);
  displayAttrJong(); 
  

  ///////////////////////////////////////////////////////////////////////////////////
  
  let inp_iterations = createInput(str(iterations));
  inp_iterations.position(20, 0);
  inp_iterations.input(changeValues_iterations);
  
  let text_iterations = createElement('text', 'Iterations, max 1e+7');
  text_iterations.position(25 + inp_iterations.width, 5);


  inp_parameterA = createInput(str_parameterA);
  inp_parameterA.position(20, 25);
  inp_parameterA.input(changeValues_parameterA);
  
  text_parameterA = createElement('text', 'Parameter a = ' + parameterA);
  text_parameterA.position(25 + inp_parameterA.width, 25);
  
  inp_parameterB = createInput(str_parameterB);
  inp_parameterB.position(20, 50);
  inp_parameterB.input(changeValues_parameterB);
  
  text_parameterB = createElement('text', 'Parameter b = ' + parameterB);
  text_parameterB.position(25 + inp_parameterB.width, 50);
  
  
  inp_parameterC = createInput(str_parameterC);
  inp_parameterC.position(20, 75);
  inp_parameterC.input(changeValues_parameterC);
  
  text_parameterC = createElement('text', 'Parameter c = ' + parameterC);
  text_parameterC.position(25 + inp_parameterC.width, 75);

  
  inp_parameterD = createInput(str_parameterD);
  inp_parameterD.position(20, 100);
  inp_parameterD.input(changeValues_parameterD);
  
  text_parameterD = createElement('text', 'Parameter d = ' + parameterD);
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
  
  let text_multyplX = createElement('text', 'scale X, ≈ sizeX/5');
  text_multyplX.position(25 + inp_multyplX.width, 225);  
  
  let inp_multyplY= createInput(str(multyplY));
  inp_multyplY.position(20, 250);
  inp_multyplY.input(changeValues_multyplY);
  
  let text_multyplY = createElement('text', 'scale Y, ≈ sizeY/5');
  text_multyplY.position(25 + inp_multyplY.width, 250);  
  ///////
  
   let inp_displaceX = createInput(str(displaceX));
  inp_displaceX.position(20, 275);
  inp_displaceX.input(changeValues_displaceX);
  
  let text_displaceX = createElement('text', 'displace X, ≈ sizeX/2');
  text_displaceX.position(25 + inp_displaceX.width, 275);  
  
  let inp_displaceY= createInput(str(displaceY));
  inp_displaceY.position(20, 300);
  inp_displaceY.input(changeValues_displaceY);
  
  let text_displaceY = createElement('text', 'displace Y. ≈ sizeY/2');
  text_displaceY.position(25 + inp_displaceY.width, 300);  
  
  ///////////////////////////////////
  let inp_backColor = createColorPicker('#E6E6E6');
  inp_backColor.position(20, 340);
  inp_backColor.input(changeValues_backColor);
  
  let text_backColor = createElement('text', 'background');
  text_backColor.position(60 + inp_backColor.width, 340);

  let inp_attrColor = createColorPicker('#710300');
  inp_attrColor.position(20, 370);
  inp_attrColor.input(changeValues_attrColor);
  
  let text_attrColor = createElement('text', 'attractor');
  text_attrColor.position(60 + inp_attrColor.width, 370);
  
  ///////////////////////////////////
  
  button1 = createButton('display attractor');
  button1.position(20, 400);
  button1.mousePressed(displayAttr_switch);
  button1.class('button');
  
  button2 = createButton('display attractor with random parameters a,b,c,d');
  button2.position(20, 425);
  button2.class('button');
  button2.mousePressed(displayAttr_withRandom);

  
  ///////////////////////////////////
  
  let checkbox_burn = createCheckbox('BURN color mode(increases render time)', false);
  checkbox_burn.changed(changeValues_burn);
  checkbox_burn.position(20, 450);
  
  link = createA('https://github.com/weightan/attractorsJS', 'GitHub');
  link.position(20, 480);
  
  radio = createRadio();
  radio.position(20, 500);
  radio.option(' Peter de Jong attractor');
  radio.option(' Clifford attractor, recommended scale size/7');
  radio.option(' Gumowski-Mira attractor, uses only a,b; recommended scale size/10');
  //radio.attribute('value', ' Peter de Jong attractor')
  radio.style('width', '90px');
  //radio.value(' Peter de Jong attractor');
  
  //textAlign(CENTER);
  //textSize(50);
  
}

function draw() {
}

///////////////////////////////////////////////////////////////////////////////////////

function bigX_Jong(xn, yn){
  return sin(parameterA * yn) - cos(parameterB * xn);
}

function bigY_Jong(xn, yn){
  return  sin(parameterC * xn) - cos(parameterD * yn);
}  


function bigX_Clifford(xn, yn){
  return sin(parameterA * yn) + parameterC * cos(parameterA * xn);
}

function bigY_Clifford(xn, yn){
  return sin(parameterB * xn) + parameterD * cos(parameterB * yn);
} 


function bigX_Gumowski_Mira (xn, yn){
  return parameterB*yn + parameterA*xn + ((2*(1-parameterA)*xn**2)/(1+ xn**2))
}

function bigY_Gumowski_Mira (xnp, xn){
  return  parameterA*xnp + ((2*(1-parameterA)*xnp**2)/(1+ xnp**2)) - xn
}  

/////////////////////////////////////////////////////////////////////////////////////

function displayAttrJong(){
  push();
  background(backColor);
  let oldx  = 1;
  let oldy  = 1;
  stroke(attrColorR, attrColorG, attrColorB, pointAlfa);
  strokeWeight(pointSize); 
  if (burn){
    blendMode(BURN);
  }
  for (let i = 0; i < iterations ; i += 1) {
    let newx = bigX_Jong(oldx, oldy);
    let newy = bigY_Jong(oldx, oldy);
    point(multyplX*newx + displaceX, multyplY*newy + displaceY) ;
    oldx  = newx;   
    oldy  = newy;  
  }
  pop();
}

function displayAttrClifford(){
  push();
  background(backColor);
  let oldx  = 1;
  let oldy  = 1;
  stroke(attrColorR, attrColorG, attrColorB, pointAlfa);
  strokeWeight(pointSize); 
  if (burn){
    blendMode(BURN);
  }
  for (let i = 0; i < iterations ; i += 1) {
    let newx = bigX_Clifford(oldx, oldy);
    let newy = bigY_Clifford(oldx, oldy);
    point(multyplX*newx + displaceX, multyplY*newy + displaceY) ;
    oldx  = newx;   
    oldy  = newy;  
  }
  pop();
}

function displayAttrGumowski_Mira(){
  
  if  ((parameterA < -0.999)||(parameterA > 0.99)){
    parameterA = map(parameterA, -5, 5, -0.999, 0.99, true);
  }
  
  if  ((parameterB < 0.8)||(parameterB > 0.99)){
    parameterB = map(parameterA, -5, 5, 0.8, 0.99, true);
  }
  
  parameterC = NaN;
  parameterD = NaN;
  
  push();
  background(backColor);
  if (burn){
    blendMode(BURN);
  }
  stroke(attrColorR, attrColorG, attrColorB, pointAlfa);
  strokeWeight(pointSize); 
  
  for (let i = 0; i < iterations/1000; i += 1) {
    
    let oldx  = random(1, 100);
    let oldy  = random(1, 100);  
    

  
    for (let j = 0; j < 1000; j += 1){

      let newx = bigX_Gumowski_Mira(oldx, oldy);
      let newy = bigY_Gumowski_Mira(newx, oldx);
    
      if ((abs(multyplX*newx) <  width/2)&&(abs(multyplY*newy) <  height/2)){
        point(multyplX*newx + width/2  , multyplY*newy + height/2);
      } 
    
    oldx  = newx;
    oldy  = newy;
    }
  }
  pop();
  
  
  
  text_parameterA.html('a = ' + parameterA);
  text_parameterB.html('b = ' + parameterB);
  text_parameterC.html('c = ' +  parameterC);
  text_parameterD.html('d = ' + parameterD);
}


function displayAttr_withRandom () {
  
  parameterA = random(-5, 5);
  parameterB = random(-5, 5);
  
  parameterC = random(-5, 5);
  parameterD = random(-5, 5);
  
  displayAttr_switch();
  
  text_parameterA.html('a = ' + parameterA);
  text_parameterB.html('b = ' + parameterB);
  text_parameterC.html('c = ' +  parameterC);
  text_parameterD.html('d = ' + parameterD);
}

function displayAttr_switch(){
  if (radio.value() == ' Clifford attractor, recommended scale size/7'){
    displayAttrClifford()
  }else if (radio.value() == ' Gumowski-Mira attractor, uses only a,b; recommended scale size/10'){
    displayAttrGumowski_Mira();
  } else {
    displayAttrJong();
  }
}

//////////////////////////////////////////////////////////////////////////////////////

function changeValues_iterations() {
  iterations = int(this.value());
}

function changeValues_parameterA() {
  parameterA = float(this.value());
  text_parameterA.html('a = ' + parameterA);
}

function changeValues_parameterB() {
  parameterB = float(this.value());
  text_parameterB.html('b = ' + parameterB);
}

function changeValues_parameterC() {
  parameterC = float(this.value());
  text_parameterC.html('c = ' +  parameterC);
}

function changeValues_parameterD() {
  parameterD = float(this.value());
  text_parameterD.html('d = ' + parameterD);
}

function changeValues_pointSize() {
  pointSize = float(this.value());
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

function changeValues_burn() {
 burn  = this.checked();
}




