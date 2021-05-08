class Ground{
    constructor(x,y,w,h,s){
        var ground_options={
            isStatic: s,
            restitution:0.7
        }

        this.body=Bodies.rectangle(x,y,w,h,ground_options)
        World.add(world,this.body)
        this.w=w
        this.h=h
    }
    display(){
        var position=this.body.position
        var angle= this.body.angle
        push()
        translate(position.x,position.y)
        rotate(angle)
        
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
   
    }

}