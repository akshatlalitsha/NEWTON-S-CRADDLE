class Bob {
    constructor(x, y,r) {
      var options = {
          'density':0.8,
          'isStatic':false,
          'restitution':1
      }
      
      this.body = Bodies.circle(x, y, r ,options);
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      //imageMode(CENTER);
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(0,0,this.r, this.r);
      pop();
    }
  };
  