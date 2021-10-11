
var trex ,trex_running;
var ground, ground_image
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,190,50,50)
  trex.addAnimation("running",trex_running);
  trex.scale=0.6;

  //ground sprite
  ground=createSprite(300,190,600,10)
  ground.addImage(ground_image);
  ground.velocityX=-5;
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY=-10;
    
  }
  trex.velocityY+=0.8;

//looping ground
if(ground.x<0){
  ground.x=ground.width/2;
}

  trex.collide(ground)
  drawSprites();
}
