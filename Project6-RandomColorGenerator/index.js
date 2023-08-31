let container = document.getElementById("container");
for (let i = 1; i <= 30; i++) {
    let colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}
let colorContainers = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
    colorContainers.forEach((colorContainer) => {
        let newColorCode = randomColor();
        colorContainer.style.backgroundColor = "#" + newColorCode;
        colorContainer.innerText = "#" + newColorCode;
    })
}
function randomColor() {
    let chars = "0123456789abcdef";
    let colorCodeLength = 6;
    let color = "";
    for (let i = 0; i < colorCodeLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNumber, randomNumber + 1);
    }
    return color
}
randomColor();