
const introTitle = document.querySelector(".intro-title")
const introSub = document.querySelector(".intro-sub")
const intro = document.querySelector(".intro")
const introImg = document.querySelector(".intro-img")

intro.addEventListener("mouseenter", () => {
    intro.style.backgroundColor = "rgb(0, 0, 0, 0.8)"
    intro.style.color = "white";
    introImg.src = "assets/images/AssinaturaHorizontal-Branco.png"

})

intro.addEventListener("mouseleave", () => {
    intro.style.backgroundColor = "transparent"
    intro.style.color = "black"
    introImg.src = "assets/images/AssinaturaHorizontal.png"
})

const radios = document.querySelectorAll(".radio-item")
const slider = document.querySelector(".slider-content")

function trocaSlide() {
    if (radios[0].checked) {
        slider.style.transform = "translate(0)"
    } else if (radios[1].checked) {
        slider.style.transform = "translate(-100%)"
    } else if (radios[2].checked) {
        slider.style.transform = "translate(-200%)"
    }
}

let i = 0;
let intervalId = setInterval(() => {
    radios[i].checked = true
    trocaSlide()
    setTimeout(() => {
        radios[i].checked = false
        i = (i + 1) % radios.length // Avança para o próximo índice, considerando o comprimento do array radios
    }, 5000) // Agora é 1 segundo entre cada mudança, ajuste conforme necessário
}, 6000) // Executa a cada 2 segundos
    
const minhaDiv = document.querySelector(".categoria")
const divTitle = document.querySelector(".categoria-title")

    minhaDiv.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = minhaDiv.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        const offsetX = (x - width / 2) / (width / 2)
        const offsetY = (y - height / 2) / (height / 2)
        const shadowX = -offsetX * 15 // Invertido
        const shadowY = -offsetY * 15 // Invertido
        minhaDiv.style.boxShadow = `${shadowX}px ${shadowY}px 10px rgba(0, 0, 0, 0.8)`
        divTitle.style.color = "var(--cor2)";
    });

    minhaDiv.addEventListener('mouseleave', () => {
        minhaDiv.style.boxShadow = 'none';
        divTitle.style.color = "var(--cor3)";
        
    });
    
    