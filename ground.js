class Ground{
    constructor (x,y,width,height) {

        var ground_option= {
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,ground_option)
        World.add(world,this.body)
        this.width=width
        this.height=height
    }
    display() {
        var pos=this.body.position
rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        
    }
}