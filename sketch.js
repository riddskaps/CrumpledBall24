
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,bin1,bin2,bin3,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,500,1200,25)
	ground.shapeColor="yellow"

	bin1= new Wall(890,440,20,100)
	bin2= new Wall(980,480,160,20)
	bin3= new Wall(1050,440,20,100)

	paper=new Paper(200,300,20)
	paper.shapeColor="blue"
	//Create the Bodies Here.

	Engine.run(engine);
  }


function draw() {

  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:11,y:-11});
  
	}
}