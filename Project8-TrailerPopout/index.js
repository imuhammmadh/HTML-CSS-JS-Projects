let btn = document.querySelector(".btn");
let closeIcon = document.querySelector(".close-icon");
let trailer = document.querySelector(".trailer");
btn.addEventListener("click", () => {
    trailer.classList.remove("active");
});
closeIcon.addEventListener("click", () => {
    closeIcon.classList.add("active");
});