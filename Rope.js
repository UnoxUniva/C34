class Rope{
    constructor(body1,body2){
        var options= {
            bodyA : body1,
            bodyB : body2,
            stiffness:0.2,
            length: 200
    
            
        }
        this.chain=Constraint.create(options)
        
    
        World.add(world,this.chain)
    }
    display(){
       var firstpos = this.chain.bodyA.position;
       var secpos = this.chain.bodyB.position;
    
        line(firstpos.x,firstpos.y,secpos.x,secpos.y)
    }
    }