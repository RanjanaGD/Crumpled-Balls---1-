class ball{
    constructor(x, y, r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
    }
this.ball=Bodies.circle(200,100,20,options)
World.add(world,this.ball);
//this.image-loadImage("")
    }

display(){
    fill("red");
    push();
    ellipseMode(RADIUS);
    ellipse(75,625,20,20);
   
    pop();
  }



}