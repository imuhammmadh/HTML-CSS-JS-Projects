//Elements
let clear = document.querySelector(".clear")
let add = document.querySelector(".add")
let minus = document.querySelector(".minus")
let multiply = document.querySelector(".multiply")
let divide = document.querySelector(".divide")
let equal = document.querySelector(".equal")
let input = document.querySelector("#input")
//Event Listeners
clear.addEventListener("click", () => {
    input.value = ""
})
add.addEventListener("click", () => {
    input.value += "+"
})
minus.addEventListener("click", () => {
    input.value += "-"
})
multiply.addEventListener("click", () => {
    input.value += "x"
})
divide.addEventListener("click", () => {
    input.value += "/"
})
equal.addEventListener("click", () => {
    input.value = eval(input.value)
})