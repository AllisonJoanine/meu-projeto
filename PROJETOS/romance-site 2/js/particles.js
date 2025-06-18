/* js/particles.js */

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.createElement("canvas");
    canvas.id = "particles-canvas";
    document.getElementById("particles-js").appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particle class for hearts
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 8 + 2; // Larger size for hearts
            this.speedY = Math.random() * -1 - 0.5; // Upward movement
            this.speedX = Math.random() * 1 - 0.5; // Slight horizontal movement
            this.opacity = 1;
            this.color = `rgba(255, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155},`; // Pinkish/Reddish colors
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.opacity -= 0.005; // Fade out
            if (this.size > 0.2) this.size -= 0.05; // Shrink
        }

        draw() {
            ctx.fillStyle = `${this.color}${this.opacity})`;
            ctx.beginPath();
            // Draw a heart shape (simplified)
            ctx.moveTo(this.x, this.y + this.size / 4);
            ctx.bezierCurveTo(this.x + this.size / 2, this.y - this.size / 2,
                              this.x + this.size, this.y + this.size / 4,
                              this.x, this.y + this.size);
            ctx.bezierCurveTo(this.x - this.size, this.y + this.size / 4,
                              this.x - this.size / 2, this.y - this.size / 2,
                              this.x, this.y + this.size / 4);
            ctx.closePath();
            ctx.fill();
        }
    }

    let particleCount = 50; // Default for desktop
    if (window.innerWidth <= 768) { // Adjust for mobile
        particleCount = 20; // Reduced for mobile
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].opacity <= 0 || particles[i].size <= 0.2) {
                particles.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(animate);
    }

    // Add particles periodically
    setInterval(() => {
        if (particles.length < particleCount) {
            particles.push(new Particle(Math.random() * canvas.width, canvas.height));
        }
    }, 200); // Slower generation for mobile

    animate();
});


