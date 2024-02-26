function Box(x, y, img) {
    var options = {
        friction: 0,
        restitution: 0.5,
        frictionAir: 0.05,
    }
    this.body = Bodies.rectangle(x, y, img.width ,img.height, options)
    World.add(world, this.body);
    
    this.show = function(){
        var pos=this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(img, 0,0)


        pop()
    }

}