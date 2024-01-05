const header = document.querySelector("header");

/*--------------------------- Sticky Navbar ---------------------------*/

function stickyNavbar(){
    header.classList.toggle("scrolled", window.scrollY);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/*--------------------------- Reveal Animation ---------------------------*/

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", {delay: 600});
sr.reveal(".showcase-image", {origin: "top", delay: 700});