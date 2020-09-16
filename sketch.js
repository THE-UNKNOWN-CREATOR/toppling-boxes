const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);

    box2 = new Box(200, 100, 60, 60);

    box3 = new Box(150, 300, 50, 50);

    box4 = new Box(150, 100, 60, 60);

    box5 = new Box(175, 60, 50, 20);

    ground1 = new Ground(200, height, 800, 50);
}

function draw(){
    
    background(0);
    console.log(ground1.body.position.x);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground1.display();
    
}