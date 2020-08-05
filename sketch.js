const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Box,Box1,Box2;
var paperObject;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();

	Box = new box(650, 535,200,20);
	Box1 = new box(550, 500,20,100);
	Box2 = new box(750, 500,20,100);

	paperObject = new Paper();
	console.log(paperObject);

	Engine.run(engine);

}


function draw() {
  background("silver");

  paperObject.debug = "true";
  Engine.update(engine);

  keyPressed();
  
	ground.display();

	Box.display();
	Box1.display();
	Box2.display();

	paperObject.display();
	 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {		
            Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:5,y:-30})
        }
}



