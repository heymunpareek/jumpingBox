/*Hello ma'am!
just a short message: ma'am you MIGHT NOT hear the sound as
 the web api doesn't resume the "AudioContext" on its own
 ma'am you can go through my code. I think I haven't made any mistake
 the thing is sometimes you can hear the audio and sometimes not. 

*/

var canvas;
var music;
var block1, block2, block3, block4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    
    
  
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,500,100,30);
    block1.shapeColor = "blue";
    block2 = createSprite(300,500,100,30);
    block2.shapeColor = "red";
    block3 = createSprite(500,500,100,30);
    block3.shapeColor = "green";
    block4 = createSprite(700,500,100,30);
    block4.shapeColor = "pink";

    box = createSprite(random(200,750), 20, 50,50);
    box.shapeColor = "white";
    box.velocityX =Math.round(random(-5,10));
    box.velocityY = Math.round(random(5, 10));
    
    music.play();
    
    
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    
    box.bounceOff(edges);   

    //stop the box if the box touches a block
    collision();
   
    
    drawSprites();
}

