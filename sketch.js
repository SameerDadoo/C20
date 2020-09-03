var fixedRect, mv;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug= true;
  
  mv = createSprite(400, 200, 80, 30);
  mv.shapeColor = "green";
  mv.debug= true;

}

function draw() {
  background(0,0,0);  
  mv.x = World.mouseX;
  mv.y = World.mouseY;

if (mv.x - fixedRect.x < fixedRect.width/2 + mv.width/2
  && fixedRect.x - mv.x < fixedRect.width/2 + mv.width/2
  && mv.y - fixedRect.y < fixedRect.height/2 + mv.height/2 
  && fixedRect.y - mv.y < fixedRect.height/2 + mv.height/2) {
  
    fixedRect.shapeColor = "red";
  mv.shapeColor = "red";

}
else{
  fixedRect.shapeColor = "green";
  mv.shapeColor = "green";
}
 
drawSprites();
}