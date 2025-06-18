/* js/typewriter.js */
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typewriter-text");
    const startButton = document.getElementById("start-button");
    const text = "Oi, Isabelle… posso te perguntar uma coisa? 🤍";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust typing speed here
        } else {
            startButton.style.display = "block";
        }
    }

    // Check for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        textElement.innerHTML = text;
        startButton.style.display = "block";
    } else {
        typeWriter();
    }

    startButton.addEventListener("click", function() {
        window.location.href = "pergunta.html";
    });
});


