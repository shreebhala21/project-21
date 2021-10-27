
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball,groundObj;
var Leftside,Rightside;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


    var ball_options={
    isStatic:false,
	restitution:0.3,
    friction:0,
	density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(200,170,20,ball_options);
	World.add(world,ball);
	ellipseMode(RADIUS);


	groundObj=new Ground(width/2,670,width,20);
Leftside=new Ground(1100,600,20,120);
Rightside=new Ground(1500,700,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ellipse(ball.position.x,ball.position.y,20);
  
  
 



groundObj.show();
Leftside.show();
Rightside.show();
}

function keyPressed(){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	
	
	
	}
	function Vforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	
	}

