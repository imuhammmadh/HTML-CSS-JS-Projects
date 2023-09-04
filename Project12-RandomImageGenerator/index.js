let imageContainer = document.querySelector(".image-container");
let btn = document.querySelector(".btn");
let imgNum = 10;
btn.addEventListener("click", () => {
    addNewImages();
});
function addNewImages() {
    for (let i = 0; i < imgNum; i++) {
        let newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/200?random=${Math.floor(Math.random() * 2000)}`;
        imageContainer.appendChild(newImg);
    }
}