let buzzezMany = 100;
let buzzez = [];
let fly = new Buzz(random(1000), random(1000));
function setup() {
  createCanvas(1000, 1000);
  // background(220, 200, 100);
  // fly.spawn();
  for(let i = 0; i < buzzezMany; i++){
    this.buzzez[i] = new Buzz(random(1000), random(1000));
    this.globalBest = createVector(this.buzzez.x[0], this.buzzez.y[0]);
    console.log('i');
  }
  
}

function draw() {
  background(220, 200, 100);
  for(let i = 0; i < buzzezMany; i++){
    buzzez[i].spawn();  
    buzzez[i].update(500, 500, 0.1, 0.2, 0.3);
  }
}

// function updateGlobalBest() {
//   this.particles.forEach(particle => {
//       const currentDistance = dist(particle.x, particle.y, particle.objectiveX, particle.objectiveY);
//       const gBestDistance = dist(this.globalBest.x, this.globalBest.y, particle.objectiveX, particle.objectiveY);
// //ln 24: use dist function
//     // if (currentDistance < gBestDistance) {
//     //     this.globalBest.x = buzzez.x;
//     //     this.globalBest.y = buzzez.y;
//     // }
//   });

  
  // function animate() {
    // const inertia = parseFloat(inertiaSlider.value);
    // const c1 = parseFloat(c1Slider.value);
    // const c2 = parseFloat(c2Slider.value);

    // context.clearRect(0, 0, canvas.width, canvas.height);

    // swarm.updateParticles(inertia, c1, c2);
    // swarm.drawParticles(context);

    // setTimeout(() => {
    //     requestAnimationFrame(animate);
    // }, 1000 / 60);s
// }
