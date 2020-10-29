var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(1600,400);

speed = random(55, 90);
car = createSprite(50, 200, 50, 50);
car.velocityX = speed;

wall = createSprite(1500, 200, 60, height/2);
wall.shapeColor = color("black");

weight = random(400, 1500);
}

function draw() {
  background(255,255,255); 

  if (wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500;

    if (deformation<100){
      wall.shapeColor = color(0,250,0);
    }
    else if (deformation>100 && deformation<180){
      wall.shapeColor = color(230, 230, 0);
    }
    if (deformation > 180){
      wall.shapeColor = color(250, 0, 0);
    }

    text(deformation, 200, 50);
  }
  
  drawSprites();
}