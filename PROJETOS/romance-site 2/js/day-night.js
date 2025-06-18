
/* js/day-night.js */
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;

    function setDayNightTheme() {
        const now = new Date();
        const hour = now.getHours();

        // Check for dark mode preference first
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        } else if (hour >= 6 && hour < 18) {
            // Day theme (6 AM to 6 PM)
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
        } else {
            // Night theme (6 PM to 6 AM)
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        }
    }

    setDayNightTheme();

    // Update theme every minute (optional, for real-time transition)
    setInterval(setDayNightTheme, 60 * 1000);
});


