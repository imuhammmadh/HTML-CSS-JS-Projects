let next = document.querySelector(".right");
let previous = document.querySelector(".left");
let images = document.querySelector(".images");
let currentImg = 1;
next.addEventListener("click", () => {
    currentImg++
    updateImg();
});
function updateImg() {
    images.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
}