/* js/stars.js */

document.addEventListener("DOMContentLoaded", function() {
    const starsBackground = document.getElementById("stars-background");
    if (!starsBackground) return;

    const numStars = window.innerWidth < 640 ? 50 : 200; // Reduced for mobile
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10s twinkle
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`;
        
        if (prefersReducedMotion) {
            star.style.animation = "none";
            star.style.opacity = Math.random();
        }
        starsBackground.appendChild(star);
    }

    // Add CSS for stars dynamically
    const style = document.createElement("style");
    style.innerHTML = `
        .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            animation: twinkle infinite alternate;
        }

        @keyframes twinkle {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});


