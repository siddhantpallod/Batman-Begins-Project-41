class createDrop{
    constructor(x,y){

        var options = {
            friction : 0.001,
            restitution : 0.7
        }

       

        this.rain = Bodies.circle(x,y,5,options); 
        World.add(world,this.rain);
    }

    updateY(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x: random(0,400),y : random(0,400)})
        }
    }

    showDrop(){
        var pos = this.rain.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10,10);
    }
}
