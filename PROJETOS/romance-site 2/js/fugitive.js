/* js/fugitive.js */
document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no-button");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!noButton) return; // Exit if button not found

    const createFootprint = (x, y) => {
        const footprint = document.createElement("div");
        footprint.classList.add("footprint");
        footprint.style.left = `${x}px`;
        footprint.style.top = `${y}px`;
        document.body.appendChild(footprint);

        setTimeout(() => {
            footprint.remove();
        }, 1000); // Footprint disappears after 1 second
    };

    const moveButton = (e) => {
        const buttonRect = noButton.getBoundingClientRect();
        const mouseX = e.clientX || e.touches[0].clientX;
        const mouseY = e.clientY || e.touches[0].clientY;

        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;

        const distanceX = mouseX - buttonCenterX;
        const distanceY = mouseY - buttonCenterY;

        const threshold = 150; // Distance to trigger movement

        if (Math.abs(distanceX) < threshold && Math.abs(distanceY) < threshold) {
            const newX = Math.random() * (window.innerWidth - buttonRect.width);
            const newY = Math.random() * (window.innerHeight - buttonRect.height);

            noButton.style.position = "absolute";
            noButton.style.left = `${newX}px`;
            noButton.style.top = `${newY}px`;

            if (!prefersReducedMotion) {
                createFootprint(buttonCenterX, buttonCenterY);
            }
        }
    };

    // Prevent click on desktop and touch
    noButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
    });

    noButton.addEventListener("mouseenter", moveButton);
    noButton.addEventListener("touchmove", moveButton);

    document.getElementById("yes-button").addEventListener("click", function() {
        window.location.href = "sim.html";
    });
});


