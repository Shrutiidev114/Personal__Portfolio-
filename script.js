/* =====================================================
   THEME TOGGLE
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");


// Get saved theme
const savedTheme =
    localStorage.getItem("portfolio-theme");


// Apply saved theme
if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

} else {

    themeBtn.textContent = "🌙";

}


// Toggle theme
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen =
        navLinks.classList.contains("show");

    menuBtn.textContent =
        isOpen ? "✕" : "☰";

});


/* Close menu after clicking a link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuBtn.textContent = "☰";

        });

    });


/* =====================================================
   SCROLL REVEAL
===================================================== */

const animatedElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(element => {

    observer.observe(element);

});

/* =====================================================
   GreetingText
===================================================== */



const greetingText = document.getElementById("greeting-text");

const greetings = [
    "Hello, I'm",
    "Hola, I'm",
    "Hi there, I'm"
];

if (greetingText) {
    let greetingIndex = 0;
    let charIndex = greetings[0].length;
    let deleting = false;

    function typeGreeting() {
        const current = greetings[greetingIndex];

        greetingText.textContent = current.slice(0, charIndex);

        let delay = deleting ? 60 : 100;

        if (!deleting && charIndex === current.length) {
            deleting = true;
            delay = 1200;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            greetingIndex = (greetingIndex + 1) % greetings.length;
            delay = 300;
        } else {
            charIndex += deleting ? -1 : 1;
        }

        setTimeout(typeGreeting, delay);
    }

    setTimeout(typeGreeting, 500);
}