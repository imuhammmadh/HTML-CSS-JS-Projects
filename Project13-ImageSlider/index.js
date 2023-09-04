let next = document.querySelector(".right");
let previous = document.querySelector(".left");
let images = document.querySelector(".images");
let imagesNum = document.querySelectorAll("img");
let currentImg = 1;
let timeout;
next.addEventListener("click", () => {
    currentImg++
    clearTimeout(timeout);
    updateImg();
});
previous.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})
updateImg();
function updateImg() {
    if (currentImg > imagesNum.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imagesNum.length
    }
    images.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}