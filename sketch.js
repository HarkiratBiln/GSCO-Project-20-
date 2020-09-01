var car;
var wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
 
 //Setting the Speed and Weight into Random Values
 speed =  random(55,90);
 weight = random(400,1500);
 
 //Creating the Car
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = (255);

  //Creating the Wall
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background("black");
  
  





  drawSprites();
}