//Creating Elements
let squares = document.querySelectorAll(".square")
let xScore = document.querySelector(".x")
let xScoreN = 0
let oScore = document.querySelector(".o")
let oScoreN = 0
let chance = document.querySelector("p")
//Event Listener
squares.forEach((square) => {
    square.addEventListener("click", (s) => {
        let box = s.currentTarget
        let boxID = box.id
        if (box) {
            box.textContent = `${chance.textContent[0]}`
            if (box.textContent == "X") {
                chance.textContent = "O's Chance !"
            } else if (box.textContent == "O") {
                chance.textContent = "X's Chance"
            }
        }
    })
})
