var lefteyex = 350;
var righteyex = 450;

var eyebrowy = 320;

var size = 75;

var movement = 1;

var count = 0;

var sizeDirection = 5;

function setup() {
    createCanvas(800, 800);
}

function hair() {
    fill(0);
    ellipse(400, 250, 200, 90);
}

function draw() {
    background(230, 230, 255);



//Head
    ellipse(400, 400, 325, 400);

    fill(249, 201, 97);

//Eyes
    ellipse(lefteyex, 375, 40, 25);
    ellipse(righteyex, 375, 40, 25);
    strokeWeight(10);
    point(lefteyex, 375);
    point(righteyex, 375);
    if(lefteyex >= 370 || lefteyex <= 330)
    {
       movement *= -1;
    }
     lefteyex += movement;
     if(righteyex >= 470 || righteyex <= 430)
    {
       movement *= -1;
    }
     righteyex += movement;


//Eyebrows
    rect(310, eyebrowy, 70, 10);
    rect(415, eyebrowy, 70, 10);
    
    if(eyebrowy >= 330 || eyebrowy <= 300)
    {
       movement *= -1;
    }
     eyebrowy += movement;





//Nose
    triangle(390, 440, 400, 425, 410, 440);


//Mouth
    line(375, 500, 425, 500);


//Hair
    ellipse(400, 250, 200, 90);
    ellipse(400, 250, 200, 80);
    ellipse(400, 250, 200, 70);
    ellipse(400, 250, 200, 60);
    ellipse(400, 250, 200, 50);
    ellipse(400, 250, 200, 40);
    ellipse(400, 250, 200, 30);
    ellipse(400, 250, 200, 20);
    ellipse(400, 250, 200, 10);



//Glasses
//Left Glass
    strokeWeight(5);
    line(315, 360, 240, 370)
    line(315, 350, 385, 350);
    line(315, 350, 315, 400);
    line(315, 400, 385, 400);
    line(385, 350, 385, 400);
//Bridge
    line(385, 360, 415, 360);
//Right Glass
    line(415, 350, 485, 350);
    line(415, 350, 415, 400);
    line(415, 400, 485, 400);
    line(485, 350, 485, 400);
    line(485, 360, 560, 370);



//Text
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Landon', 240, 700);


}