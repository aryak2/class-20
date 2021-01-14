var aryak,wall;
function setup() {
  createCanvas(800,400);
  aryak=createSprite(200,50,100,60);
  wall=createSprite(600,100,60,100);
  aryak.debug=true;
  wall.debug=true;
}

function draw() {
  background(105,5,235);  
  aryak.y=mouseY;
  aryak.x=mouseX;
  console.log(aryak.x-wall.x)
  if(aryak.x-wall.x<aryak.width/2+wall.width/2 &&
    wall.x-aryak.x<aryak.width/2+wall.width/2 &&
    aryak.y-wall.y<aryak.height/2+wall.height/2&&
    wall.y-aryak.y<aryak.height/2+wall.height/2){
      aryak.shapeColor='purple';
      wall.shapeColor='purple';
    }
    else{
      aryak.shapeColor='green';
      wall.shapeColor='green';
    }
  drawSprites();
}