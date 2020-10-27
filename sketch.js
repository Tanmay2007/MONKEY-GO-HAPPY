
var monkey , monkey_running,ground
var banana ,bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score
var gamestate="play";
var survivaltime=0;
function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,400)
   monkey = createSprite(80, 315,10,10)
monkey. addAnimation("moving ",monkey_running)

  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
   
  console.log(ground.x)
  bannanaGroup=createGroup();
  obstaclesGroup=createGroup();
}


function draw() {
background("green")
  
  if (gamestate == "play"){
     
 if (ground.x<0){
  ground.x=ground.width/2;
 }
   if (keyDown("space" )&& monkey.y>  300){
  monkey.velocityY=-12;
  
    }
    monkey.velocityY=monkey.velocityY+0.4;
    
    if (obstaclesGroup.isTouching(monkey)){
  
      bannanaGroup . velocityX=0;
      obstaclesGroup.velocityX=0;
      monkey.addAnimation("sprite_0.png")
      
    }
    
    if (monkey.isTouching(bannanaGroup)){
      bannanaGroup.destroyEach();      
    
    }
    
    stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivaltime,100,50)
  }

  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,550,50);
  
  
  
  monkey.collide(ground);
  spawnFruits();
  spawnObstacle();
  drawSprites();
}

function spawnObstacle() {
  if (frameCount%300===0)  {
     var obstacle = createSprite(400,315,0,0);
    obstacle.addImage(obstacleImage);
   obstacle.scale=0.17 ;
    obstacle.velocityX=-6;
    console.log(obstacle.x)      
    obstaclesGroup.add(obstacle);  
}   
}

function spawnFruits(){
  if (frameCount%80===0){
    var bannana = createSprite(550,Math.round(random(120,200),1,1))
     bannana.addImage(bananaImage);
    bannana. scale = 0.1;
    bannana. velocityX=-5;
    bannana .setLifetimeEach=200;
    bannanaGroup.add(bannana);
  }
  
}




