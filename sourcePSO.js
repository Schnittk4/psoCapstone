
// https://github.com/adamstirtan/pso-js/blob/master/index.html source

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocityX = Math.random() * 2 - 1;
        this.velocityY = Math.random() * 2 - 1;
        this.pBestX = x;
        this.pBestY = y;
        this.maxVelocity = 5.0;
    }

    update(globalBestX, globalBestY, inertia, c1, c2) {
        const inertiaTermX = inertia * this.velocityX;
        const personalTermX = c1 * Math.random() * (this.pBestX - this.x);
        const socialTermX = c2 * Math.random() * (globalBestX - this.x);

        const inertiaTermY = inertia * this.velocityY;
        const personalTermY = c1 * Math.random() * (this.pBestY - this.y);
        const socialTermY = c2 * Math.random() * (globalBestY - this.y);

        this.velocityX = Math.min(this.maxVelocity, Math.max(-this.maxVelocity, inertiaTermX + personalTermX + socialTermX));
        this.velocityY = Math.min(this.maxVelocity, Math.max(-this.maxVelocity, inertiaTermY + personalTermY + socialTermY));

        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        context.fillStyle = 'blue';
        context.fill();
        context.stroke();
    }
}




class Swarm{
    constructor(numParticles) {
        this.particles = Array.from({ length: numParticles }, () => new Particle(Math.random() * 500, Math.random() * 500));
        this.globalBest = { x: this.particles[0].x, y: this.particles[0].y };
    }

    updateGlobalBest() {
        this.particles.forEach(particle => {
            const currentDistance = distance(particle.x, particle.y, particle.objectiveX, particle.objectiveY);
            const gBestDistance = distance(this.globalBest.x, this.globalBest.y, particle.objectiveX, particle.objectiveY);

            if (currentDistance < gBestDistance) {
                this.globalBest.x = particle.x;
                this.globalBest.y = particle.y;
            }
        });
    }

    updateObjective(objectiveX, objectiveY) {
        this.particles.forEach(particle => {
            particle.objectiveX = objectiveX;
            particle.objectiveY = objectiveY;
        });
    }

    updateParticles(inertia, c1, c2) {
        this.particles.forEach(particle => {
            particle.update(this.globalBest.x, this.globalBest.y, inertia, c1, c2);
        });

        this.updateGlobalBest();
    }

    drawParticles(context) {
        this.particles.forEach(particle => {
            particle.draw(context);
        });
    }
}
