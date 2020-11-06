const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 280;

function setup() {
  createCanvas(490, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(235, 790, 475, 20);

  for (var k = 0; k <= width; k = k + 80 ){
divisions.push(new Division(k, height-divisionHeight/2, 19, divisionHeight) )
  }
  for (var j = 40; j <= width; j = j + 70 ){
    plinkos.push(new Plinko(j, 75, 10) )
  }
  for (var j = 20; j <= width-10; j = j + 70 ){
      plinkos.push(new Plinko(j, 175, 10) )
  }
  for (var j = 40; j <= width -20; j = j + 70 ){
      plinkos.push(new Plinko(j, 275, 10) )
  }
  for (var j = 60; j <= width -30; j = j + 90 ){
      plinkos.push(new Plinko(j, 375, 10) )
  }
  Engine.run(engine); 
}
function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount % 15 === 0){
    particle = new Particle(random(width/2-200, width/2+200), 10, 10);
    particles.push(particle);
  }
  
  for (var k = 0; k < divisions.length; k = k +1 ){
    divisions[k].display();
  }
    for (var j = 0; j < plinkos.length; j = j + 1 ){
      plinkos[j].display();
   }
 
   for (var j = 0; j < particles.length; j++ ){
    particles[j].display();
}  

  ground.display();
  drawSprites();
}