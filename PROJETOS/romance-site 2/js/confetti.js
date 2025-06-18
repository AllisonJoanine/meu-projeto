/* js/confetti.js */
document.addEventListener("DOMContentLoaded", function() {
    const confettiContainer = document.querySelector(".confetti-container");

    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confettiContainer.appendChild(confetti);

        confetti.addEventListener("animationend", () => {
            confetti.remove();
        });
    }

    // Generate confetti for a few seconds
    let confettiInterval = setInterval(createConfetti, 100);
    setTimeout(() => {
        clearInterval(confettiInterval);
    }, 3000); // Stop generating confetti after 3 seconds
});


