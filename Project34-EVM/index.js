//Creating Elements
let rahul = document.querySelector("#rahul")
let modi = document.querySelector("#modi")
let mohan = document.querySelector("#mohan")
let rahulC = document.querySelector(".rahul")
let modiC = document.querySelector(".modi")
let mohanC = document.querySelector(".mohan")
let rahulN = JSON.parse(localStorage.getItem("Rahul"));
let modiN = JSON.parse(localStorage.getItem("Modi"))
let mohanN = JSON.parse(localStorage.getItem("Mohan"))
let result = document.querySelector(".result")
let evm = document.querySelector(".evm")
let h2 = document.querySelector("h2")
//Event Listener
rahul.addEventListener("click", () => {
    rahulN++
    rahulC.innerText = `${rahulN}`
    result.style.visibility = "visible"
    h2.style.visibility = "visible"
    evm.style.visibility = "hidden"
    localStorage.setItem("Rahul", JSON.stringify(rahulN));
})
modi.addEventListener("click", () => {
    modiN++
    modiC.innerText = `${modiN}`
    result.style.visibility = "visible"
    h2.style.visibility = "visible"
    evm.style.visibility = "hidden"
    localStorage.setItem("Modi", JSON.stringify(modiN))
})
mohan.addEventListener("click", () => {
    mohanN++
    mohanC.innerText = `${mohanN}`
    result.style.visibility = "visible"
    h2.style.visibility = "visible"
    evm.style.visibility = "hidden"
    localStorage.setItem("Mohan", JSON.stringify(mohanN))
})