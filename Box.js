class Box {
    constructor(x, y, width, height) {
     var options = {
          restitution:0.8,
          friction:1.0,
          density:0.04
      }

      //Physical body
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      // Add the body to the physics world
      World.add(world, this.body);
    }
    display(){
        //namespacing
      var pos =this.body.position;
      var angle = this.body.angle;
      //activate the changes only for this object
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER)
      strokeWeight(4);
      stroke("green");
      fill(255);
      //Displayed Body
      rect(0, 0, this.width, this.height);
      pop();
    }
  }