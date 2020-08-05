class Ground {
    constructor() {
      var optics = {
          isStatic: true
      }
      this.body = Bodies.rectangle(width/2,550,800,12,optics);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, 800,12);
    }
  }