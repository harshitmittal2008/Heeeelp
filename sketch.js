
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var car,car2,carImg,car2Img;
var track,trackImg;
var score=0;
var gameOver,gameOverImg;


function preload() {

  carImg = loadImage('redCar.png');
  car2Img = loadImage('greenCar.png');
  trackImg = loadImage('track.webp');
  gameOverImg = loadImage('gameOver.png');
}




function setup() {
  createCanvas(400,400);

 track = createSprite(200,300);
 track.addImg(trackImg)
 //track.velocityX = -4
 track.scale = 0.2

 car = createSprite(70,150,20,20)
 car.addImg(carImg)
 car.scale = 0.01

 car2 = createSprite(70,150,20,20)
 car2.addImg(car2Img)
 car2.scale = 0.01

 //create score








  
}


function draw() 
{
  background(51);


  drawSprites()

  
}

