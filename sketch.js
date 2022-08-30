var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


/*
for(var i=0;i<10;i++){
  console.log(i)
}*/



function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //criando aleatoriedade



 
}

function draw() {
  //definir cor do plano de fundo
  background(220);
  
  
  
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);

  gerarNuvens();
  drawSprites();
  
}

function gerarNuvens(){
  if(frameCount%60 ===0){
    nuvens =  createSprite(600,10,20,20);
    nuvens.velocityX = -3;
    nuvens.y = Math.round(random(90,130))

  }
  
}



