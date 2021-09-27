
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload() {
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	ellipseMode(CENTER);

	//Create the Bodies Here.
	ball = Bodies.circle(width/4, height/3, 50, ball_options);
	World.add(world, ball);

	ground1 = new Ground(width/2, height/1.2, width, 10);
	leftSide = new Ground(width/1.8, height/1.343, 10, height/6);
	rightSide = new Ground(width/1.2, height/1.343, 10, height/6);
	

	Engine.run(engine); 
}


function draw() {
	background(0);

  	Engine.update(engine);

	ground1.display();
	leftSide.display();
	rightSide.display();
  	ellipse(ball.position.x, ball.position.y, 50);
	if(keyDown(UP_ARROW)) {
		hForce();
		vForce();
	}
}

function hForce() {
	Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0})
}
function vForce() {
	Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05})
}