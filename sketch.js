var  iss, spacecraft
var hasDocked = false
function preload(){
  issImage = loadImage("Docking-undocking/iss.png");
  spacebgImage = loadImage("Docking-undocking/spacebg.jpg");
  spacecraft1Image = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2Image = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3Image = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4Image = loadImage("Docking-undocking/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage)
  iss.scale = 0.5;

  spacecraft = createSprite(400, 300, 50, 50);
  spacecraft.addImage(spacecraft1Image)
  spacecraft.scale = 0.15;

}

function draw() {
  background(spacebgImage);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3Image);
      spacecraft.x = spacecraft.x-2
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft4Image);
      //spacecraft.y = spacecraft.y+2
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft2Image);
      spacecraft.x = spacecraft.x+2
    }
  }
  if(spacecraft.y<=370&&spacecraft.x<=390){
    text("Docking is successful",200,300);
    hasDocked = true
  }
  drawSprites();

}