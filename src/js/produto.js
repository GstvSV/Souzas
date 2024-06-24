
const radios = document.querySelectorAll(".radio-item")
const slider = document.querySelector(".cssel-content")
const options = document.querySelectorAll(".option");
const desc = document.querySelector(".mod-p");

function trocaSlide() {

    const categoria = document.querySelector('.cssel').getAttribute('data-categoria');
    const tipo = document.querySelector('.cssel').getAttribute('data-tipo');
    const link = document.querySelector(".linkwhats");
    let novoLink = 'https://wa.me/5553984118836?text=Ol%C3%A1!%20Quero%20o%20or%C3%A7amento%20de%20uma%20' + categoria + '%20em%20' + tipo;

    if (radios[0].checked) {
        slider.style.transform = "translate(0)"
        desc.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quia velit autem! Nemo, quod eos? <span>opção 1</span>"
        novoLink += '%20de%20tipo%201';
    } else if (radios[1].checked) {
        slider.style.transform = "translate(-100%)"
        desc.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quia velit autem! Nemo, quod eos? opção 2"
        novoLink += '%20de%20tipo%202';
    } else if (radios[2].checked) {
        slider.style.transform = "translate(-200%)"
        desc.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quia velit autem! Nemo, quod eos? opção 3"
        novoLink += '%20de%20tipo%203';
    }

    link.setAttribute('href', novoLink);
}

window.addEventListener('load', trocaSlide);

options.forEach(option => {
    option.addEventListener('click', () => {
        trocaSlide();
    })
});