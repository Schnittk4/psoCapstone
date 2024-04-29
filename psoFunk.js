class Buzz{   
    constructor(x, y) {
        // figure out empty vectors
        let globalBest = createVector(0, 0); 
        this.pBest = createVector(x, y);
        this.x = x;
        this.y = y;
        const personalTerm = createVector(random(this.pBest.x, this.x), random(this.pBest.y, this.y));
        const socialTerm = createVector(random(globalBest.x, this.x), random(globalBest.y, this.y));
        const inertiaTerm = createVector();
        this.velocity = createVector(random(2, 1));
        this.maxVelocity = 5.0;
    }
  
    update(globalBestX, globalBestY, inertia, c1, c2){  
        globalBest = globalBest(globalBestX, globalBestY)
        inertiaTerm = this.velocity.mult(inertia);
        personalTerm = this.personalTerm.mult(c1); 
        socialTerm = socialTerm.mult(c2);
        this.velocity = (min(this.maxVelocity, max(-this.maxVelocity, inertiaTerm.x + personalTerm.x + socialTerm.x)), min(this.maxVelocity, max(-this.maxVelocity, inertiaTerm.y + personalTerm.y + socialTerm.y)));
        x += this.velocity.x;
        y += this.velocity.y;
    }   
    spawn(){
        noStroke();
        fill(0, 100, 200);
        rect(this.x, this.y, 100, 100);
    }
  }
// difference between   this.globalBest = { x: this.particles[0].x, y: this.particles[0].y };
//& this.globalBest = createVector()????????
