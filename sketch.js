var wall, car;
var weight= 0;
var speed= 0;


function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(750, 200, 30, 300);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(weight===0 && speed===0){
    weight = prompt("What is the weight of the car?");
  speed = prompt("What is the speed of the car?");
  }
  
  
  if(weight>0 && speed>0){
    car.velocityX=speed/10;
  }
  if(car.x-wall.x<wall.width/2+car.width/2 && wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    text("Deformation is "+deformation(weight, speed), 400, 300);
    text("Coalision Rating is "+rating(deformation(weight, speed)), 400, 320);
  }

  
}
var w, s;
function deformation(w, s){
  return Math.round((0.5*w*s*s)/22500);
}
var d;
function rating(d){
  if(d>=180){
    return "lethal";
  }
  else if(d<180 && d>80){
    return "average";
  }
  else{
    return "good";
  }
}