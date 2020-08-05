class Paper {
    constructor() {
        var optics = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        //this.image = loadImage("paper.png");
        this.body = Bodies.circle(100,540, 50, optics);
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x, pos.y, 50);
      }
    }

   