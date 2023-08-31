let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AmPm = "AM";
    if (h > 12) {
        h = h - 12;
        AmPm = "PM"
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = AmPm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();