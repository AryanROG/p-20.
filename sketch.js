var car,car2,car3,wall;
var speed,weight;
var pic;

function preload(){
   pic = loadImage("js/pic.jpg");

}

function setup() {
  createCanvas(1000,600);

  speed=random(55,95);
  weight=random(400,1500); 

  car = createSprite(40,67,40,40);
  car.velocityX = speed;
  car2 = createSprite(40,305,40,40);
  car2.velocityX = speed;
  car3 = createSprite(40,533,40,40);
  car3.velocityX = speed;

  wall = createSprite(970,200,50,1150);
  wall.shapeColor="brown";
  

  
}

function draw() {
  background(pic);  
  

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="blue"

    }
    if(deformation<100){
      car.shapeColor="green";
    }
  }

  if(wall.x-car2.x < (car2.width+wall.width)/2){
    car2.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
      car2.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car2.shapeColor="blue"

    }
    if(deformation<100){
      car2.shapeColor="green";
    }
  }
    
  if(wall.x-car3.x < (car3.width+wall.width)/2){
    car3.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
      car3.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car3.shapeColor="blue"

    }
    if(deformation<100){
      car3.shapeColor="green";
    }
  }

  
  drawSprites();
}