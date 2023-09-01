let btn1 = document.querySelector(".btn");
let container = document.querySelector(".main-container");
let popupEl = document.querySelector(".popup-container");
let closeIcon = document.querySelector(".close-icon");
let btn2 = document.querySelector(".popup-btn");
btn1.addEventListener("click", () => {
    container.classList.add("active");
    popupEl.classList.remove("active");
});
closeIcon.addEventListener("click", () => {
    container.classList.remove("active");
    popupEl.classList.add("active");
})
