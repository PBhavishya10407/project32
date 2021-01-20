const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var base1,base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25;
var polygon,projectile;
var Score=0;

function preLoad()
{
  
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  base1 = new Base(270,300,150,10);
  base2 = new Base(600,200,110,10);
  
  box1 = new Block(210,270,20,50);
  box2 = new Block(230,270,20,50);
  box3 = new Block(250,270,20,50);
  box4 = new Block(270,270,20,50);
  box5 = new Block(290,270,20,50);
  box6 = new Block(310,270,20,50);
  box7 = new Block(330,270,20,50);
  box8 = new Block(230,220,20,50);
  box9 = new Block(250,220,20,50);
  box10 = new Block(270,220,20,50);
  box11 = new Block(290,220,20,50);
  box12 = new Block(310,220,20,50);
  box13 = new Block(250,170,20,50);
  box14 = new Block(270,170,20,50);
  box15 = new Block(290,170,20,50);
  box16 = new Block(270,120,20,50);
  box17 = new Block(560,120,20,50);
  box18 = new Block(580,120,20,50);
  box19 = new Block(600,120,20,50);
  box20 = new Block(620,120,20,50);
  box21 = new Block(640,120,20,50);
  box22 = new Block(580,70,20,50);
  box23 = new Block(600,70,20,50);
  box24 = new Block(620,70,20,50);
  box25 = new Block(600,20,20,50);

  polygon = new Polygon(200,100,50);

  projectile = new Projectile(polygon.body,{x:100,y:200});
}

function draw() {
  background(0,0,0);
  
  Engine.update(engine);

  textSize("40");
  fill("red");
  text("Score: "+Score,700,40);

  base1.display();
  base2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
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
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  polygon.display();
  projectile.display();

  box1.Score();
  box2.Score();
  box3.Score();
  box4.Score();
  box5.Score();
  box6.Score();
  box7.Score();
  box8.Score();
  box9.Score();
  box10.Score();
  box11.Score();
  box12.Score();
  box13.Score();
  box14.Score();
  box15.Score();
  box16.Score();
  box17.Score();
  box18.Score();
  box19.Score();
  box20.Score();
  box21.Score();
  box22.Score();
  box23.Score();
  box24.Score();
  box25.Score();

  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    projectile.release();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        projectile.attach(polygon.body);
    }
}