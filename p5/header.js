


var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite;

var engine;
var world;
var mouseConstraint;
var canvasMouse;
var canvas;


var boxes = [];
var walls = [];

var centerBlock;
let aiImg,
    artyzmImg,
    fascynacjaImg,
    lekImg,
    moralnoscImg,
    naukaImg,
    pomocImg,
    pracaImg,
    przyszloscImg,
    rozwojImg,
    strachImg;


let verts;
function preload() {
  aiImg=loadImage("p5/assets/AI.png")
  artyzmImg = loadImage("p5/assets/artyzm.png");
  fascynacjaImg = loadImage("p5/assets/fascynacja.png")
  lekImg = loadImage("p5/assets/lek.png");
  moralnoscImg = loadImage("p5/assets/moralnosc.png");
  naukaImg = loadImage("p5/assets/nauka.png");
  pomocImg = loadImage("p5/assets/pomoc.png");
  pracaImg = loadImage("p5/assets/praca.png");
  przyszloscImg= loadImage("p5/assets/przyszlosc.png");
  rozwojImg = loadImage("p5/assets/rozwoj.png");
  strachImg= loadImage("p5/assets/strach.png");

}

function setup() {

  canvas = createCanvas(windowWidth, 400);
  canvas.parent("sketch_container_header")
  engine = Engine.create();
  world = engine.world;
  Runner.run(engine) 

  fill(10,222,255);
  stroke(225,123,12);
  textSize(40)
  imageMode(CENTER)
  // noStroke();

  world.gravity.y =0
  centerBlock = new Boundry(width/2,height/2,150,150,0)

  walls.push(new Boundry(width/2, height, width, 30, 0));
  walls.push(new Boundry(width/2, 0, width, 30, 0));
  walls.push(new Boundry(width, height/2, width, 30, 90));
  walls.push(new Boundry(0, height/2, width, 30, 90));
  



  boxes.push(new Box(70, 50 ,artyzmImg));
  boxes.push(new Box(70, 90, fascynacjaImg));
  boxes.push(new Box(160, 40, lekImg));
  boxes.push(new Box(200, 85, moralnoscImg));
  boxes.push(new Box(300, 50, naukaImg));
  boxes.push(new Box(70,150,pomocImg));
  boxes.push(new Box(325,140,pracaImg));
  boxes.push(new Box(90, 300, przyszloscImg));
  boxes.push(new Box(325, 300, rozwojImg));
  boxes.push(new Box(200, 345, strachImg));


  
  mouseConstraint = MouseConstraint.create(engine);
  canvasMouse = Mouse.create(document.getElementById("sketch_container_header"));
  Mouse.setElement(canvasMouse, document.getElementById("sketch_container_header"))
  canvasMouse.pixelRatio = pixelDensity();
  
  

  

  
  World.add(world, mouseConstraint);
}

function draw() {
  world.gravity.y =sin(frameCount*0.01)*2
  world.gravity.x =sin(PI/3+frameCount*0.01)*2

  // background(50);
  clear();
  image(aiImg,width/2,height/2);
  for (var i=0; i<boxes.length; i++) {
    boxes[i].show();
  }
  
  
  
  
}

// function mouseDragged(){
//   boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)));

// }