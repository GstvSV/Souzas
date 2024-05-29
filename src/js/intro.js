
const introTitle = document.querySelector(".intro-title")
const introSub = document.querySelector(".intro-sub")
const intro = document.querySelector(".intro")
const introImg = document.querySelector(".intro-img")

function getImagePath(relativePath) {
    const basePath = window.location.pathname.includes('src/html') ? '../../' : './';
    return basePath + relativePath;
}

intro.addEventListener("mouseenter", () => {
    intro.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
    intro.style.color = "white";
    introImg.src = getImagePath('assets/images/AssinaturaHorizontal-Branco.png');
});

intro.addEventListener("mouseleave", () => {
    intro.style.backgroundColor = "transparent";
    intro.style.color = "black";
    introImg.src = getImagePath('assets/images/AssinaturaHorizontal.png');
});