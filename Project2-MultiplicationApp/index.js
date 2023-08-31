let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let form = document.getElementById("form");
let input = document.getElementById("input");
let correctAnswer = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));
let score1 = document.getElementById("score");
n1.innerText = num1;
n2.innerText = num2;
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
};
form.addEventListener("submit", () => {
    let userAnswer = +input.value;
    if (userAnswer == correctAnswer) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});
if (!score) {
    score = 0;
};
score1.innerText = `Score:${score}`;