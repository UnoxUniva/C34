//namespacing using constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1,box2,box3,box4,box5,box6;
var ground;
var ball
var rope

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  
  ground=new Ground(width/2,height-20,width,30,true)

  box1=new Ground(780,200,40,100,false)
  box2=new Ground(980,200,40,100,false)
  box3=new Ground(780,130,40,100,false)
  box4=new Ground(980,130,40,100,false)
  box5=new Ground(width/2,10,100,40,true)
  box6=new Ground(880,70,200,40,false)
  
  ball=new Ball(width/2,300,50)

  rope=new Rope(box5.body,ball.body) 
}

function draw() {
  background(220,255,255);  

  Engine.update(engine);
 
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  
  ball.display()
  
  rope.display()

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}