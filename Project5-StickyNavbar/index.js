let navbar = document.getElementById("navbar");
let bottomContainer = document.getElementById("bottom-container");
window.addEventListener("scroll", () => {
    if (window.scrollY > bottomContainer.offsetTop - navbar.offsetHeight - 50) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
})