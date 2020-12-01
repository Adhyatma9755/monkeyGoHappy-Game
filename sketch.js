var monkey , monkey_running,collide,monkey_collided;
var food,bananaGroup,banana ,bananaImage ;
var obstacleGroup,obstacle, obstacleImage;
var ground;
var survivalTime=0;
var score

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 200);
 monkey = createSprite(50,155,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,190,1200,10);
  ground.visible = true;
  ground.velocityX=-2;
}


function draw() {
 background(180);
  if(ground.x<0) {
  ground.x = ground.width /2;
  }
   if(keyDown("space")){
     monkey.velocityY = -12;
        //monkey.Y = monkey.Y -12;
    }
  console.log(monkey.y);
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  food();
  obstacle();
  
  drawSprites(); 
}

function food(){
  if (frameCount % 80 === 0) {
    var banana= createSprite(600,120,40,10);
 banana.y = Math.round(random(80,120));
   banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    

 banana.lifetime = 200;
  }
}

function obstacle(){
 if (frameCount % 300 === 0) {
    var obstacle= createSprite(600,160,40,10);
 //banana.y = Math.round(random(80,120));
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
   obstacle.velocityX = -2;
    

 obstacle.lifetime = 250;
  }
}