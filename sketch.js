const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var divisions = [];
var particles = [];
var plinkos = [];
var divisionHeight = 280;

function setup() {
  createCanvas(490,650);

  engine = Engine.create();
  world = engine.world;

  border1 = new Border(3, height/2, 5, height)
  border2 = new Border(487, height/2, 5, height)
  border3 = new Border(width/2, 3, width, 5)
  border4 = new Border(width/2, 647, width, 5)

  for(var k = 5; k < width; k = k + 80)
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j < width; j = j + 50)
  {
   plinkos.push(new Plinko(j, 50, 10))
  }

  for(var j = 65; j < width; j = j + 50)
  {
   plinkos.push(new Plinko(j, 125, 10))
  }

  for(var j = 40; j < width; j = j + 50)
  {
   plinkos.push(new Plinko(j, 205, 10))
  }

  for(var j = 65; j < width; j = j + 50)
  {
   plinkos.push(new Plinko(j, 285, 10))
  }

  
  
  
ground = new Ground(width/2, 640, width, 10)

}

function draw()
{

  Engine.update(engine)

  background("black");  

  if(frameCount % 40 === 0)
  {
    particles.push(new Particles(random(width/2-20, width/2+20), 10, 10))
  }
 
 for(var i = 0; i < particles.length; i++)
 {
   particles[i].display();
 }

   for(var j = 0; j < plinkos.length; j++)
   {
     plinkos[j].display();
   }

  for(var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }

  ground.display();

  border1.display();
  border2.display();
  border3.display();
  border4.display();

  drawSprites();
}