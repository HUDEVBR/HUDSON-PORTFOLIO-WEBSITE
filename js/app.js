const header = document.querySelector("header");

/*--------------------------- Sticky Navbar ---------------------------*/

function stickyNavbar(){
    header.classList.toggle("scrolled", window.scrollY);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);