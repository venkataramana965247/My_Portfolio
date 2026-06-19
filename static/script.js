function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const elements = document.querySelectorAll(".section, .about, .project-card, .contact-card, .skill-card");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});

function copyEmail() {
    navigator.clipboard.writeText("ramanakadumula72@gmail.com");
    alert("Email copied!");
}