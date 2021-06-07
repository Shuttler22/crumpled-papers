class Ball {
    constructor(x,y, radius){
        var options={
            restitution:0.3,
            friction:0,
            density:1.2,
            isStatic :false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("paper.png");
        this.radius = radius;
        World.add(world, this.body)
    }
    display(){
        var ballPos =this.body.position;		

			push()
			translate(ballPos.x, ballPos.y)
            imageMode(CENTER);
//ellipse(200, 200, 40, 40)
image(this.image, 0, 0, this.radius, this.radius);
			pop()
    }
}