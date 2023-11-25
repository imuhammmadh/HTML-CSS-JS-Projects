//Creating Elements
let numbers = document.querySelectorAll('.number')
let area = document.getElementById("input")
let operators = document.querySelectorAll(".operator")
let clear = document.querySelector(".clear")
let equals = document.querySelector(".equal")
let deleteNum = document.querySelector(".delete")
//Event Listeners
numbers.forEach(num => {
    num.addEventListener("click", () => {
        area.value += num.id
    })
})
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        area.value += operator.id
    })
})
clear.addEventListener("click", () => {
    area.value = ""
})
equals.addEventListener("click", () => {
    area.value = eval(area.value)
})
deleteNum.addEventListener("click", () => {
    area.value = area.value.substring(0, area.value.length - 1)
})