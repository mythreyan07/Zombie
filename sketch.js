var bg,bgImg;
var player,shooter_2Img,shooter_3Img;
var zombie,zombieImg
var heart1Img,heart2Img,heart3Img,heart1,heart2,heart3;
var zombieGroup;

function preload(){
  bgImage = loadImage("assets/bg.jpeg");
  zombieImg = loadImage("assets/zombie.png");
  shooter_2Img = loadImage("assets/shooter_2.png");
  shooter_3Img = loadImage("assets/shooter_3.png");
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale=1.1;

  player = createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage(shooter_2Img);
  player.scale = 0.3;
  player.debug = true;
  player.setcollider("rectangle",0,0,300,300);

  heart1 = createSprite(displayWidth-150,40,20,20);
  heart1.visible = false;
  heart1Img.addImage("heart1",heart1Img);
  heart1.scale = 0.4;

  heart2 = createSprite(displayWidth-100,40,20,20);
  heart2.visible = false;
  heart2Img.addImage("heart2",heart2Img);
  heart2.scale = 0.4;

  heart3 = createSprite(displayWidth-150,40,20,20);
  heart3Img.addImage("heart3",heart3Img);
  heart3.scale = 0.4;

  zombieGroup = new Group();


}

function draw(){
  background(0)

  if(keyDown("UP_ARROW")||touches.length>0)
  {player.y = player.y-30 }

  if(keyDown("DOWN_ARROW")||touches.length>0)
  {player.y = player.y+30}

  if(keyWentDown("space"))
  {player.addImage(shooter_3Img)}
  else if(keyWentUp("space"))
  {player.addImage(shooter_2Img)}

  if(zombieGroup.isTouching(player)){
    for(var i=0;i<zombieGroup.length;i++)
    { if(zombieGroup[i].isTouching(player)){ zombieGroup[i].destroy() } } }
    enemy();
    drawSprites();
  }

function enemy(){
  if(frameCount%50===0){
    zombie = createSprite(random(500,1100),random(100,500),40,40);
    zombie.addImage(zombieImg);
    zombie.scale=0.15;
    zombie.velocityX=-3;
    zombie.debug=true;
    zombie.setcollider("rectangle",0,0,400,400);
    zombie.lifetime = 400;
    zombieGroup.add(zombie);
  }
}