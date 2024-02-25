const s1 = p1 => {

    let maxheight = 400;
    let barwidth = 50;
    let x1, x2;

    p1.preload = function() { 
    happy = p1.loadImage("p5/assets/happy.svg");
    sad = p1.loadImage("p5/assets/sad.svg")
    }




    p1.setup = function() {
        var canvas = p1.createCanvas(400, p1.windowHeight*0.35);
        canvas.parent('sketch_container_happy_sad');
        p1.rectMode(p1.CENTER);
        p1.imageMode(p1.CENTER);
        p1.noStroke();
        p1.noiseDetail(6, 0.25);
        p1.fill("#212121");
        x1 = p1.width/2 - 100;
        x2 = p1.width/2 + 100;



    }
    
    p1.draw = function() {
        p1.clear();

    
    
        p1.push();
        p1.translate(x1, p1.height - barwidth*1.2 - p1.map(p1.noise(1,1,p1.frameCount*0.01), 0, 1, 0, maxheight)/2);
        p1.rect(0, 0, barwidth, p1.map(p1.noise(1,1,p1.frameCount*0.01), 0, 1, 0, maxheight));
        p1.pop();
    
        p1.push();
        p1.translate(x2, p1.height - barwidth*1.2 - p1.map(p1.noise(2,1,p1.frameCount*0.01), 0, 1, 0, maxheight)/2);
        p1.rect(0, 0, barwidth, p1.map(p1.noise(2,1,p1.frameCount*0.01), 0, 1, 0, maxheight));
        p1.pop();
    
        p1.image(sad, x1, p1.height*0.92, barwidth, barwidth)
        p1.image(happy, x2, p1.height*0.92, barwidth, barwidth)

        }
}
new p5(s1)