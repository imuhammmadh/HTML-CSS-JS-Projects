let btn = document.querySelector(".switch-btn");
let video = document.querySelector(".video-container");
let preloader = document.querySelector(".preloader");
btn.addEventListener("click", () => {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});
window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
});