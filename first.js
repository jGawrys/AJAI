let x = 0
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight*0.4);
    canvas.parent('sketch_container_1');
    rectMode(CENTER,CENTER)

  }
  
  function draw() {
    background(220,0);
    rect(width/2,height/2,100+x,100+x)
    x=x+3
    if(x>100) {
        x=0
    }
    rect(mouseX,mouseY,20);}
    function mouseClicked(){
        fill(random(0,255),random(0,255),random(0,255))
    }
