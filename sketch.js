const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onlauncher";
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,30);
    ground2 = new Ground(720,220, 140,20);
   // platform = new Ground(150, 305, 300, 170);

    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    box1 = new Box(700,380,30,30);
    box2 = new Box(720,380,30,30);
    box3 = new Box(740,380,30,30);
    box4 = new Box(760,380,30,30);
    box5 = new Box(710,360,30,30);
    box6 = new Box(730,360,30,30);
    box7 = new Box(750,360,30,30);
    box8 = new Box(720,340,30,30);
    box9 = new Box(740,340,30,30);
    box10 = new Box(730,320,30,30);
    box10.shapeColor="blue";
    box11 = new Box(700,200,30,30);
    box12 = new Box(720,200,30,30);
    box13 = new Box(740,200,30,30);
    box14 = new Box(710,180,30,30);
    box15 = new Box(730,180,30,30);
    box16 = new Box(720,160,30,30);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,350);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    background(55);
    Engine.update(engine);
    strokeWeight(4);
    fill("blue");
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
   // pig1.display();
  //  log1.display();

    box3.display();
    box4.display();
   // pig3.display();
   // log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
   // log4.display();
   // log5.display();

    bird.display();
   // platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}
