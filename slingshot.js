class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 1,
            length: 1
        }
        this.Slingshot = Constraint.create(options);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(world,this.Slingshot);

    }
    display(){
        stroke("cyan");
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.position.x,this.pointB.position.y);
    }
    fly(){
        this.Slingshot.bodyA = null;
    }
}