var trex, ground, invground;
var trex_running, trex_collide, groundan;
var OBG, CG;
var ob1, ob2, ob3, ob4, ob5, ob6;
var cloIm;
var score;

function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");
groundan = loadImage("ground2.png");
ob1 = loadImage("obstacle1.png");
ob2 = loadImage("obstacle2.png");
ob3 = loadImage("obstacle3.png");
ob4 = loadImage("obstacle4.png");
ob5 = loadImage("obstacle5.png");
ob6 = loadImage("obstacle6.png");
cloIm = loadImage("cloud.png");
}

function setup() {
createCanvas(600, 200);
trex = createSprite(80, 170, 10, 10);
trex.addAnimation("run", trex_running);
trex.scale = 0.5;
ground = createSprite(200, 190, 400, 10);
ground.addAnimation("idon'tcare", groundan);
ground.velocityX = -7.5;
ground.x = ground.width/2;
invground = createSprite(200,199,400,10);
invground.visible = false;
OBG = new Group();
CG = new Group();
score = 0;
}

function draw() {
background(333);
if(keyDown("space")){
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY+0.5;
trex.collide(invground);
if (ground.x < 0){
      ground.x = ground.width/2;
    }
textFont("TimesNewRoman");
textSize(15);
text("Score:"+score, 525, 30);

drawSprites();
  
  spawnClouds();
  spawnObstacles();
  
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(75,140));
    cloud.addImage(cloIm);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    CG.add(cloud);
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,175,10,40);
    obstacle.velocityX = -7.5;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
    switch(rand){
      case 1:
             obstacle.addImage(ob1);
               break;
               
      case 2:
             obstacle.addImage(ob2);
               break;
               
      case 3:
             obstacle.addImage(ob3);
               break;
               
      case 4:
             obstacle.addImage(ob4);
               break;
               
      case 5:
             obstacle.addImage(ob5);
               break;
               
      case 6:
             obstacle.addImage(ob6);
               break;
               
               default:
                       break;
           }
    OBG.add(obstacle);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
  }
}