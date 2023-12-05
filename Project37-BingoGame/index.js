//Creating Elements
let randomN = document.querySelector(".random-num")
let squares = document.querySelectorAll(".square")
//Set Interval
let bingoNumber = setInterval(() => {
    randomN.textContent = `${Math.ceil(Math.random() * 100)}`
}, 4000)
//Numbers is cards
let squareFiller = squares.forEach((square) => {
    square.textContent = `${Math.ceil(Math.random() * 100)}`
    if (square.textContent == randomN.textContent) {
    }
})
console.log(squareFiller);