//Creating Elements
let main = document.getElementById("main")
let score = document.getElementById("score")
let scoreN = 0
let alphabets = "abcdefghijklmnopqrstuvwxyz"
let uniqueId = 1
//Functions
let bubbleMaker = setInterval(() => {
    let bubble = document.createElement("div")
    bubble.classList = "bubble"
    bubble.id = uniqueId
    bubble.style.left = `${Math.random() * (main.offsetWidth - 50)}px`
    bubble.textContent = `${alphabets.charAt(Math.floor(Math.random() * alphabets.length))}`
    main.appendChild(bubble)
    floatBubble(bubble, uniqueId)
    uniqueId++
}, 1000)

function floatBubble(bubble, i) {
    let n = 0
    bubble.interval = setInterval(() => {
        let presentElm = document.getElementById(i)
        let presentId
        if (presentElm) {
            presentId = presentElm.id
        } else {
            presentId = undefined
        }
        if (presentId) {
            if (n < main.offsetHeight) {
                presentElm.style.bottom = `${n++}px`
            } else {
                scoreN--
                score.textContent = `Score:${scoreN}`
                main.removeChild(presentElm)
                clearInterval(bubble.interval)
                if (scoreN <= (-6)) {
                    clearInterval(bubbleMaker)
                    let bubbles = document.querySelectorAll(".bubble")
                    bubbles.forEach(elm => {
                        main.removeChild(elm)
                    })
                }
            }
        } else {
            clearInterval(bubble.interval)
        }
    }, 10)
}

window.addEventListener("keyup", (e) => {
    let pressed = e.key
    let correct = false
    let bubbles = document.querySelectorAll(".bubble")
    if (bubbles.length > 0) {
        bubbles.forEach(elm => {
            if (elm.textContent === pressed) {
                correct = true
                scoreN++
                score.textContent = `Score:${scoreN}`
                main.removeChild(elm)
            }
        })
        if (!correct) {
            scoreN--
            score.textContent = `Score:${scoreN}`
            if (scoreN <= (-6)) {
                clearInterval(bubbleMaker)
                let bubbles = document.querySelectorAll(".bubble")
                bubbles.forEach(elm => {
                    main.removeChild(elm)
                })
            }
        }
    }
})