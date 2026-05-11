var characterX = 400;
var characterY = 700;
var diameter = 50;

function setup(){
    createCanvas(800, 800);
}

function keyPressed(){

if(keyIsDown(68))
{
    characterX+=20;
}
if(keyIsDown(65))
{
    characterX-=20;
}

if(keyIsDown(83))
{
    characterY+=20;
}

if(keyIsDown(87))
{
    characterY-=20;
}

}

function winCondition(){
    if(characterY > 10)
    {
        background(255, 255, 255);
        textSize(100);
        text("You Win!", 400, 400);
    }
}


function draw(){

background(200, 130, 40);

//Player
    fill(40, 180, 80)
    circle(characterX, characterY, diameter);

//Obstacles
    fill(255, 0, 0);
    rect(0, 500, 500, 40);
    fill(0, 0, 255);
    rect(300, 300, 500, 80);
    rect(550, 0, 40, 220);

//Exit Text
    textSize(20);
    text('Exit', 670, 20);
    text('Here', 670, 40);

//Win Condition
    if(characterY < 10 && characterX >580)
    {
        background(255, 255, 255);
        textSize(100);
        text("You Win!", 400, 400);
    }
}