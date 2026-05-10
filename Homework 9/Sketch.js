
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
    ellipse(350, 375, 40, 25);
    ellipse(450, 375, 40, 25);
    strokeWeight(10);
    point(350, 375);
    point(450, 375);



//Eyebrows
    rect(310, 320, 70, 10);
    rect(415, 320, 70, 10);

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
    textSize(100);
    text('Landon', 240, 700);


}