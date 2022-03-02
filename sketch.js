const Engine =Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var snowImage;
var girl;
function preload(){
snowImage=loadImage("snow2.jpg")
}



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
 girl=new Girl(100,100,100,100);
}

function draw() {
  Engine.update(engine)
  background(snowImage);  
  girl.display();
}