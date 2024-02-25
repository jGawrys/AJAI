const s2 = p2 => {

    let x1, x2;

    p2.preload = function() { 

    }




    p2.setup = function() {
        var canvas = p2.createCanvas(p2.windowWidth, p2.windowHeight*0.35);
        canvas.parent('sketch_container_header');
        p2.rectMode(p2.CENTER);
        p2.imageMode(p2.CENTER);
        p2.noStroke();
        p2.noiseDetail(6, 0.25);
        p2.fill("#212121");
        x1 = p2.width/2 - 100;
        x2 = p2.width/2 + 100;



    }
    
    p2.draw = function() {
        p2.background(50)
    }
}

new p5(s2)