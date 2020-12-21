var car, wall;
var speed, weight;
var deformation;
function setup() {
  createCanvas(1600,400);

  speed = random(50, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  
  wall = createSprite(1500, 200, 30, height/2);
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
  if(wall.isTouching(car)){
  
  deformation = 0.5*weight*speed*speed/22500;
  
  car.velocityX = 0;
  if(deformation<100){
    car.shapeColor="green";
  }
  if(deformation>100 && deformation<180){
    car.shapeColor="yellow";
  }
  if(deformation>180){
    car.shapeColor="red";
  }
  }
  drawSprites();
}