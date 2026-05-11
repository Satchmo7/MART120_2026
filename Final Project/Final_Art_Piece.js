var x = 90;
var y = 90;
var diameter = 5;

var r = 230;
var g = 230;
var b = 255;

var rectx = 250;
var recty = 500;
var rectw = 150;
var recth = 300;



function setup() {
  createCanvas(800, 800);
}

function mousePressed(){
    r = floor(random(255));
    g = floor(random(255));
    b = floor(random(255));
}


function draw() {
  background(r, g, b);
  fill(random(255), random(255), random(255));
  circle(x, y, diameter);



if (x <= 400) {
    x += 10;
} else if (x == 250 || x <= 300) {
    x += 2;

} else if (x != 300) {
    x = 50;
}



if (y <= 200) {
    y += 3;
} 
else if (y == 250 || y <= 300) {
    y += 1;
} 
else if (y != 300) {
    y = 50;
}



if (diameter <= 500) {
    diameter += 8;
} 
else if (diameter == 500     || diameter <= 300) {
    diameter += 20;   
} 
else if (diameter != 300) {
    diameter = 5;
}
let angle = frameCount * 0.03;
  rotate(angle);
rect(rectx, recty, rectw, recth);

if(recty >= 1)
{
    recty--;
    
}
if(recty <= 11)
    {
        recty = 700;
    } 

//Text
    textSize(20)
    text('(Click to Change Background!)', 520, 20)


}