let body = document.querySelector("body");
body.addEventListener("mousemove", (event) => {
    let posX = event.offsetX
    let posY = event.offsetY
    let span = document.createElement("span");
    span.style.left = posX + "px";
    span.style.top = posY + "px";
    let size = Math.random() * 100;
    span.style.width = size + "px";
    span.style.heigth = size + "px";
    body.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000)
});