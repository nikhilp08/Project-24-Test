
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, rect1, rect2, rect3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new ground(400,650,800,15);

	paper = new paperClass(100,655);
	
	rect1 = new dustbinClass(595,640,200,20);
	rect2 = new dustbinClass(490,555,20,100);
	rect3 = new dustbinClass(610,555,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  
  drawSprites();
 
}



