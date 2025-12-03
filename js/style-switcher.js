/*===== Toggle Style Switcher =====*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");  
});

// Hide style-switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open"); 
    }
});

/*===== Theme Colors =====*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true"); 
        }
    });
}

/*===== Theme Light and Dark Mode =====*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-mon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-mon");
    }
});

/*===== Active Nav Link on Click =====*/
const navLinks = document.querySelectorAll(".nav li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.classList.remove("active")); 
        link.classList.add("active"); 
    });
});

/*===== Scroll Spy: Active Nav Link on Scroll =====*/
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if(link.getAttribute("href") === "#" + sectionId) {
                    link.classList.add("active");
                }
            });
        }
    });

    // Ocultar menú flotante al hacer scroll
    if(menuButtons && !menuButtons.classList.contains("hidden")) {
        menuButtons.classList.add("hidden");
    }
});

/*===== Menú flotante para pantallas pequeñas =====*/
const menuToggle = document.querySelector(".menu-toggle");
const menuButtons = document.querySelector(".menu-buttons");

menuToggle.addEventListener("click", () => {
    menuButtons.classList.toggle("hidden");
});

// Scroll suave para los botones del menú
const sectionButtons = document.querySelectorAll(".section-menu button");

sectionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const section = document.getElementById(targetId);
        if(section) {
            section.scrollIntoView({ behavior: "smooth" });
            menuButtons.classList.add("hidden"); // Oculta el menú al hacer click
        }
    });
});

// Solo mostrar menú flotante en pantallas < 991px
function checkMenuVisibility() {
    if(window.innerWidth < 991) {
        menuToggle.style.display = "flex";
    } else {
        menuToggle.style.display = "none";
        if(menuButtons) menuButtons.classList.add("hidden");
    }
}

window.addEventListener("resize", checkMenuVisibility);
window.addEventListener("load", checkMenuVisibility);
