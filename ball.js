class Ball{
    constructor(x,y,r){
        var ball_options={
            isStatic: false,
            restitution:0.7
        }

        this.body=Bodies.circle(x,y,r,ball_options)
        World.add(world,this.body)
        this.r=r
        
    }
    display(){
        var position=this.body.position
        var angle= this.body.angle
        push()
        translate(position.x,position.y)
        rotate(angle)
        
        ellipseMode(RADIUS)
        ellipse(0,0,this.r)
        pop()
   
    }

}