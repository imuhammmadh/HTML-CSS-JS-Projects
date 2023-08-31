let btn = document.getElementsByClassName("btn");
btn.addEventListener("mouseover", (event) => {
    let x = (event.PageX - btn.offsetLeft);
    let y = (event.PageY - btn.offsetTop);
    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
});