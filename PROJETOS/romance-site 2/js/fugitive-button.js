
/* js/fugitive-button.js */
document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no-button");
    const mainContent = document.querySelector(".main-content");

    if (!noButton) return; // Exit if button not found

    const moveButton = (e) => {
        const buttonRect = noButton.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;

        const distanceX = mouseX - buttonCenterX;
        const distanceY = mouseY - buttonCenterY;

        const threshold = 100; // Distance to trigger movement

        if (Math.abs(distanceX) < threshold && Math.abs(distanceY) < threshold) {
            const newX = Math.random() * (window.innerWidth - buttonRect.width);
            const newY = Math.random() * (window.innerHeight - buttonRect.height);

            noButton.style.position = "absolute";
            noButton.style.left = `${newX}px`;
            noButton.style.top = `${newY}px`;

            // Create a footprint
            createFootprint(buttonCenterX, buttonCenterY);
        }
    };

    const createFootprint = (x, y) => {
        const footprint = document.createElement("div");
        footprint.classList.add("footprint");
        footprint.style.left = `${x}px`;
        footprint.style.top = `${y}px`;
        // Add a simple SVG or image for the footprint
        footprint.innerHTML = 
            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-footprints">
                <path d="M17 16l-2 5-2-5m-6 0l-2 5-2-5m10-4l2-5 2 5m-10 0l2-5 2 5"></path>
            </svg>`;
        document.body.appendChild(footprint);

        setTimeout(() => {
            footprint.classList.add("show");
        }, 10);

        setTimeout(() => {
            footprint.style.opacity = "0";
            footprint.addEventListener("transitionend", () => footprint.remove());
        }, 1000); // Footprint disappears after 1 second
    };

    // Prevent click on desktop and touch
    if (!('ontouchstart' in window) || window.matchMedia('(hover: hover)').matches) {
        noButton.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
        noButton.addEventListener("mouseenter", moveButton);
    } else {
        noButton.addEventListener("touchstart", moveButton);
    }
});




    document.getElementById("yes-button").addEventListener("click", function() {
        window.location.href = "sim.html";
    });


