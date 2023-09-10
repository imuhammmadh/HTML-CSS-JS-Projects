let toggleBtn = document.querySelector(".sidebar-toggle");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn");
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove("show-sidebar");
})