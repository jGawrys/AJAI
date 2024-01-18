let x1= 100
let y1= 100
let z1= 100
let x2= -100
let y2= -100
let z2= 100
let xnoise=0.0


function setup() {
  createCanvas(400, 400,WEBGL);
  
  wordObject1 = createWord3D("Lorem",4,3,30)
  wordObject2 = createWord3D("Ipsum",4,3,30)
  wordObject3 = createWord3D("Dolor",4,3,30)
  strokeWeight(10)
  loop()
  
}

function draw() {
  xnoise=xnoise+0.01;
  x1 = noise(xnoise)*400


  background(220);
  orbitControl()

  push()
  //rotateY(frameCount/100)
  wordObject1.show()
  pop()

  push()
  translate(x1,y1,z1)
  wordObject2.show()
  pop()

  push()
  translate(x2,y2,z2)
  wordObject3.show()
  pop()
  line(0,0,0,x1,y1,z1)

  
  
}
