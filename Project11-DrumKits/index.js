let kits = ["kick", "snare", "tom"];
let drums = document.querySelector(".drums");
kits.forEach((kits) => {
    let btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kits;
    btnEl.style.backgroundImage = "url(images/" + kits + ".png)";
    drums.appendChild(btnEl);
    let audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kits + ".mp3"
    drums.appendChild(audioEl);
    btnEl.addEventListener("click", () => {
        audioEl.play();
    })
    window.addEventListener("keydown", (event) => {
        if (event.key == kits.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 100);
        }
    })
});