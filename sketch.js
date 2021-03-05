var spX = 1;
var spY = 1;
let n = 10;
let t = 2;

var a = 1.4;
var b = -2.5;
var c =  1.544;
var d = 1.740;

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
  
  createCanvas(4725, 4725);
  background(30);
  //frameRate(24);
  //createLoop({ open:true, duration: 5 , gif:true})
  //image(pg, 0,0);
  
  let oldx  = 1;
  let oldy  = 1;
  stroke(255, 35);
  strokeWeight(1); 
  
  for (let i = 0; i < 10000000; i += 1) {
    
     
  
    let newx = bigX(oldx, oldy);
    let newy = bigY(oldx, oldy);
    
    //if ((newx <  width/2)&&(newy <  height/2)&&(i > 10000)){
      point(830*newx + width/2  , 830*newy + height/2) ;
    //} 
    
    oldx  = newx;
    oldy  = newy;
    //spY += 0.1;
  }
}

function draw() {
  //
  
}


function bigX(xn, yn){
  return sin(a * yn) - cos(b * xn);
}


function bigY(xn, yn){
  return  sin(c * xn) - cos(d * yn);
}  

