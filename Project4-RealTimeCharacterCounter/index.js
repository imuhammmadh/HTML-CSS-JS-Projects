let textA = document.getElementById("text");
let total = document.getElementById("total");
let remaining = document.getElementById("remaining");
function updateCounter() {
    total.innerText = textA.value.length;
    remaining.innerText = textA.getAttribute("maxlength") - textA.value.length;
}
updateCounter();
textA.addEventListener("keyup", () => {
    updateCounter();
});
