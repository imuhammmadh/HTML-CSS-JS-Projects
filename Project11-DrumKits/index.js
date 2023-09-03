let kits = ["crash", "kick", "snare", "tom"];
let drums = document.querySelector(".drums");
kits.forEach((kits) => {
    let btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kits
    drums.appendChild(btnEl);
})