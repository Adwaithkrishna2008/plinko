var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var particle,particle2,particle3,particle4,particle5,particle6,particle7,particle8;
 var division,division2,division3,division4,division5,division6;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  //particle = new Particle(50,45,10,5);
  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }


 




  


  
  //create particle objects
  particle = new Particle(100,50,10,5);
  particle2 = new Particle(150,30,10,5);
  particle3 = new Particle(190,30,10,5);
  particle4 = new Particle(170,30,10,5);
  particle5 = new Particle(130,30,10,5);
 particle6 = new Particle(180,30,10,5);
 particle7 = new Particle(140,30,10,5);
 particle8 = new Particle(130,30,10,5);

  division= new Divisions(150,760,10,523);
  division2= new Divisions(217,760,10,523);
  division3= new Divisions(297,760,10,523);
  division4= new Divisions(237,760,10,523);
  division4= new Divisions(377,760,10,523);
  division5= new Divisions(477,760,10,523);
 division6= new Divisions(577,760,10,523);
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 150; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  
if(frameCount %60 ===0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10))
}

  //display the paricles 
particle.display();
particle2.display();
particle3.display();
particle4.display();
particle5.display();
division.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
}