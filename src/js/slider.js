
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