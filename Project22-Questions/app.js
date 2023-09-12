//using selectors inside the element
let questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
    let btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})