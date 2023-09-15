let btns = document.querySelectorAll(".tab-btn")
let about = document.querySelector(".about")
let articles = document.querySelectorAll(".content")
about.addEventListener("click", (e) => {
    let id = e.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        articles.forEach((article) => {
            article.classList.remove("active")
        })
        let element = document.getElementById(id);
        element.classList.add("active");
    }
});