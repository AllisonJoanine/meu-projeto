
/* js/audio-toggle.js */
document.addEventListener("DOMContentLoaded", function() {
    const audioToggle = document.querySelector(".audio-toggle");
    const audio = new Audio("assets/audio/tema.mp3");
    audio.loop = true;
    audio.volume = 0.2;

    let isPlaying = false;

    audioToggle.addEventListener("click", function() {
        if (isPlaying) {
            audio.pause();
            audioToggle.textContent = "🎵";
        } else {
            audio.play();
            audioToggle.textContent = "🎶";
        }
        isPlaying = !isPlaying;
    });
});


