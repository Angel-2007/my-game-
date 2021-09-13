const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg1, bg2;
var character, charImg, character2, char2Img ;
var door;
var gameState = "ROOM";
var L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13, L14, L15, L16, L17, L18, L19, logImg, vlogImg;
function preload() {
    bg1 = loadImage("bg1.jpg")
    charImg = loadAnimation("1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png")
    char2Img = loadImage("topview.png")
    bg2 = loadImage("bg2.jpg")
    logImg = loadImage("horizontal log.png")
    vlogImg = loadImage("vertical log.png")
}

function setup(){
   createCanvas(1000, 800)
  character = createSprite(500, 600, 100, 100)
  character.addAnimation("animation", charImg)
  character.scale = 0.5

  door = createSprite(870, 510, 100, 170)
  door.visible = false;

  L1 = createSprite(250, 320, 20, 20)
  L1.addImage(logImg)
  L1.scale = 0.15

  L2 = createSprite(300, 370, 20, 20)
  L2.addImage(vlogImg)
  L2.scale = 0.15

  L3 = createSprite(250, 500, 20, 20)
  L3.addImage(logImg)
  L3.scale = 0.15

  L4 = createSprite(430, 430, 20, 20)
  L4.addImage(logImg)
  L4.scale = 0.15

  L5 = createSprite(350, 505, 20, 20)
  L5.addImage(logImg)
  L5.scale = 0.15
  
  L6 = createSprite(450, 510, 20, 20)
  L6.addImage(logImg)
  L6.scale = 0.15

  L7 = createSprite(530, 435, 20, 20)
  L7.addImage(logImg)
  L7.scale = 0.15

  L8 = createSprite(580, 385, 20, 20)
  L8.addImage(vlogImg)
  L8.scale = 0.15

  L9 = createSprite(550, 515, 20, 20)
  L9.addImage(logImg)
  L9.scale = 0.15

  L10 = createSprite(650, 520, 20, 20)
  L10.addImage(logImg)
  L10.scale = 0.15

  L11 = createSprite(695, 470, 20, 20)
  L11.addImage(vlogImg)
  L11.scale = 0.15

  L12 = createSprite(750, 420, 20, 20)
  L12.addImage(logImg)
  L12.scale = 0.15

  L13 = createSprite(795, 470, 20, 20)
  L13.addImage(vlogImg)
  L13.scale = 0.15

  L14 = createSprite(860, 625, 20, 20)
  L14.addImage(logImg)
  L14.scale = 0.15

  L15 = createSprite(765, 620, 20, 20)
  L15.addImage(logImg)
  L15.scale = 0.15

  L16 = createSprite(670, 617, 20, 20)
  L16.addImage(logImg)
  L16.scale = 0.15

  L17 = createSprite(570, 615, 20, 20)
  L17.addImage(logImg)
  L17.scale = 0.15

  L18 = createSprite(470, 612, 20, 20)
  L18.addImage(logImg)
  L18.scale = 0.15

  L19 = createSprite(370, 610, 20, 20)
  L19.addImage(logImg)
  L19.scale = 0.15

}

function draw(){
   background(bg1)
  

  if(gameState==="ROOM"){
    L1.visible = false;
    L2.visible = false;
    L3.visible = false;
    L4.visible = false;
    L5.visible = false;
    L6.visible = false;
    L7.visible = false;
    L8.visible = false;
    L9.visible = false;
    L10.visible = false;
    L11.visible = false;
    L12.visible = false;
    L13.visible = false;
    L14.visible = false;
    L15.visible = false;
    L16.visible = false;
    L17.visible = false;
    L18.visible = false;
    L19.visible = false;

  if(keyDown("LEFT_ARROW")){
    character.x = character.x-10;
  }
  if(keyDown("RIGHT_ARROW")){
    character.x = character.x+10;
  }
  
  if(character.isTouching(door)){
   gameState = "MAZE";
  }
  
}
if(gameState === "MAZE"){
  L1.visible = true;
    L2.visible = true;
    L3.visible = true;
    L4.visible = true;
    L5.visible = true;
    L6.visible = true;
    L7.visible = true;
    L8.visible = true;
    L9.visible = true;
    L10.visible = true;
    L11.visible = true;
    L12.visible = true;
    L13.visible = true;
    L14.visible = true;
    L15.visible = true;
    L16.visible = true;
    L17.visible = true;
    L18.visible = true;
    L19.visible = true;
  background(bg2);
 character2 = createSprite(220, 270, 100, 100)
 character2.addImage(char2Img)
 character2.scale = 0.4
 character.visible = false;

 if(keyDown("LEFT_ARROW")){
  character2.x = character2.x-30;
}
 
if(keyDown("RIGHT_ARROW")){
  character2.x = character2.x+30;
}

 log();
}
drawSprites();
}

function log(){
  
}
