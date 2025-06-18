/* js/bloom.js */
document.addEventListener("DOMContentLoaded", function() {
    const flowerContainer = document.querySelector(".flower-container");
    const flower = document.querySelector(".flower");
    const messageContainer = document.querySelector(".message-container");
    const officialMessage = document.getElementById("official-message");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Create petals dynamically
    for (let i = 0; i < 8; i++) { // Example: 8 petals
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.transform = `rotate(${i * 45}deg) translate(0, -20px)`; // Adjust for petal shape and position
        petal.style.backgroundColor = `hsl(${i * 45}, 80%, 70%)`; // Different colors for petals
        flower.appendChild(petal);
    }

    // Trigger bloom animation
    if (!prefersReducedMotion) {
        flower.classList.add("blooming");
        flower.addEventListener("animationend", () => {
            officialMessage.textContent = "Agora é oficial! 💞";
            messageContainer.classList.add("show");
        }, { once: true });
    } else {
        // Reduced motion: show flower immediately and then message
        flower.style.opacity = 1;
        officialMessage.textContent = "Agora é oficial! 💞";
        messageContainer.classList.add("show");
    }
});


