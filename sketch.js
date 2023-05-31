
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2, ground3;
var rotator1, rotator2, rotator3;
var ball1, ball2, ball3, ball4, ball5;
var btn2;

var angle = 60;
var angle2 = 60;
var angle3 = 60;
function setup() {
  createCanvas(550, 600);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.4,
    frictionAir: 0.02
  }
  var rotator_options = {
    isStatic: true
  };



  var ground_options = {
    isStatic: true
  };

  //btn2 = createImg('up.png');
  //btn2.position(350, 30);
  //btn2.size(50, 50);
  //btn2.mouseClicked(vForce);

  rotator1 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
  World.add(world, rotator1);

  rotator2 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
  World.add(world, rotator2);

  rotator3 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
  World.add(world, rotator3);

  ball1 = Bodies.circle(220, 10, 10, ball_options);
  World.add(world, ball1);

  ball2 = Bodies.circle(225, 10, 10, ball_options);
  World.add(world, ball2);

  ball3 = Bodies.circle(230, 10, 10, ball_options);
  World.add(world, ball3);

  ball4 = Bodies.circle(235, 10, 10, ball_options);
  World.add(world, ball4);

  ball5 = Bodies.circle(240, 10, 10, ball_options);
  World.add(world, ball5);

  ground1 = Bodies.rectangle(600, height, 1200, 20, ground_options);
  World.add(world, ground1);
  ground2 = Bodies.rectangle(100, 400, 150, 20, ground_options);
  World.add(world, ground2);
  ground3 = Bodies.rectangle(400, 400, 150, 20, ground_options);
  World.add(world, ground3);

  fill("brown")
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(50);
  Engine.update(engine);


  Matter.Body.rotate(rotator1, angle);
  //serve para capturar a nova configuração
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle);
  rect(0, 0, 150, 20);
  //reverte para a antiga configuração antiga
  angle += 0.4;
  pop()

  

  Matter.Body.rotate(rotator2, angle2);
  //serve para capturar a nova configuração
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  //reverte para a antiga configuração antiga
  angle2 += 0.6
  pop()
  

  Matter.Body.rotate(rotator3, angle3);
  //serve para capturar a nova configuração
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  //reverte para a antiga configuração antiga
  angle3 += 0.8;
  pop()

  ellipse(ball1.position.x, ball1.position.y, 10);
  ellipse(ball2.position.x, ball2.position.y, 10);
  ellipse(ball3.position.x, ball3.position.y, 10);
  ellipse(ball4.position.x, ball4.position.y, 10);
  ellipse(ball5.position.x, ball5.position.y, 10);
  rect(ground1.position.x, ground1.position.y, 1200, 20)
  rect(ground2.position.x, ground2.position.y, 150, 20)
  rect(ground3.position.x, ground3.position.y, 150, 20)


}

//function vForce() {
 // Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
//}
