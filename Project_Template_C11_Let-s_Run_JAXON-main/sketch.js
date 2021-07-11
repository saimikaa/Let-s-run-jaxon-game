var path,pathing,pathImage;
var boy,boy_running;
function preload(){
  //pre-load images

  pathImage = loadImage("path.png");
  boy_running = loadAnimation("runner-1.png", "runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  pathing = createSprite(200,200);
  pathing.addImage("pathing",pathImage);
  pathing.velocityY = 4;
  pathing.scale = 1.2;

  boy = createSprite (50,160,20,50);
  boy.addAnimation("boy", boy_running);
  edges = createEdgeSprites();

  rightboundary = createSprite(0,200,400,10);
  leftboundary = createSprtie(300,200,400,10);
  rightboundary.visible = false;
  leftboundary.visible = false;
}

function draw() {
  background(0);

  if(path.y > 400){
  path.y = height/2;
  }
  boy.y = World.mouseY;
  boy.x = World.mouseX;

  boy.collide(rightboundary);
  boy.collide(leftboundary);

  drawSprites()

}
