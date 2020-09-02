const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

  ball1=new ball(100,450,40);
  World.add(world,ball1);
  
  ground=new Ground(400,650,1700,10);

dustbin1=new Dustbin(1080,595,15,100);
dustbin2=new Dustbin(850,595,15,100);
dustbin3=new Dustbin(965,640,215,10);

 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  ball1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    
   Matter.Body.applyForce( ball1.body,ball1.body.position,{x:85,y:-85});	
   }
 }


