let bgImage = document.getElementsById("bg-img");
window.addEventListener("scroll", () => {
    updateImg();
})
function updateImg() {
    bgImage.style.opacity = 1 - window.pageYOffset / 900;
    bgImage.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}