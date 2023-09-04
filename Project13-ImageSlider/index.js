let next = document.querySelector(".right");
let previous = document.querySelector(".left");
let images = document.querySelector(".images");
let imagesNum = document.querySelectorAll("img");
let currentImg = 1;
next.addEventListener("click", () => {
    currentImg++
    updateImg();
});
function updateImg() {
    if (currentImg > imagesNum.length) {
        currentImg = 1;
    }
    images.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
}