const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 70; // Adjust for density

// Resize canvas to match window size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Particle Class
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1; // Size between 1px and 4px
    this.speedX = (Math.random() - 0.5) * 0.8; // Horizontal drift speed
    this.speedY = (Math.random() - 0.5) * 0.8; // Vertical drift speed
    this.opacity = Math.random() * 0.5 + 0.2; // Random opacity
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap particles around screen edges when they go off-screen
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Initialize particles array
function init() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

// Animation loop
function animate() {
  // Clear screen on each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

init();
animate();