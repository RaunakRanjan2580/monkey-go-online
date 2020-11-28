
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  //creating monkey
  monkey = createSprite(50,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground =createSprite(400,350,400,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  //creating survival time
  
  
  
  
  
  //creating groups
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {

  background(220);
  
  
  //creating never ending ground
  if(ground.x>0){
    ground.x = ground.width/2;
  }
  
  //making monkey jump
  if(keyDown("space") && monkey.y>300){
    monkey.velocityY = -16;
  }
  
  //making gravity for monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //colliding monkey from the ground
  monkey.collide(ground);
  
  //applying all functions
  spawnObstacles();
  spawnFood();
  
  drawSprites();
  
  //displaying survival time
  stroke("black");
  fill("black");
  textSize(20);
  text("survival Time : " + survivalTime,220,30);
  survivalTime = Math.round(frameCount/frameRate());
  
}

function spawnObstacles(){
  if(frameCount % 50 === 0){
    obstacle = createSprite(400,310,20,20);
    obstacle.addImage("obstales",obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    obstacle.lifetime = 65;
    obstacleGroup.add(obstacle);
    monkey.depth = obstacle.depth + 1 ;
  }
}

function spawnFood() {
  if(frameCount % 300 === 0){
    banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200))
    banana.scale = 0.09;
    banana.velocityX = -6; 
    banana.addImage("banana",bananaImage);
    banana.lifetime = 67;
    foodGroup.add(banana);
  }
  
}



