//Creating Elements
let ball = document.querySelector(".ball")
let main = document.querySelector(".main")
let randomId = 1
//Making killers
let killerMaker = setInterval(() => {
    //Killer Container
    let killerparent = document.createElement("div")
    killerparent.classList = "killer-container"
    killerparent.id = randomId
    main.appendChild(killerparent)
    //Top Killer
    let killer1 = document.createElement("div")
    killer1.classList = "killer-one"
    killerparent.appendChild(killer1)
    //Bottom Killer
    let killer2 = document.createElement("div")
    killer2.classList = "killer-two"
    killerparent.appendChild(killer2)
    //Changing Heights of Killers
    changeHeight(killer1, killer2)
    //Moving Killers to Left
    killerMover(killerparent, randomId)
    //Increasing Killer Container Id value
    randomId++

}, 2750)
//Moving Killers to Left
function killerMover(k, i) {
    let n = 0
    k.interval = setInterval(() => {
        let visibleContainer = document.getElementById(i)
        let visibleId
        if (visibleContainer) {
            visibleId = visibleContainer.id
        } else {
            visibleId = undefined
        }
        if (visibleId) {
            if (n < main.offsetWidth) {
                k.style.right = `${n++}px`
            } else {
                main.removeChild(visibleContainer)
            }
        } else {
            clearInterval(k.interval)
        }
    }, 10)
}
//Changing heights of killers
function changeHeight(o, t) {
    let n1 = Math.ceil(Math.random() * 80)
    o.style.height = `${n1}%`
    t.style.height = `${80 - n1}%`
}