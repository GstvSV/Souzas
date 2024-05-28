
const menu = document.querySelector(".ham-menu");
const partes = document.querySelectorAll(".parte");
const cima = document.querySelector(".cima");
const meio = document.querySelector(".meio");
const baixo = document.querySelector(".baixo");
const fhlist = document.querySelector(".fh-list");
let menuOpen = false;

menu.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if(menuOpen){
        meio.style.display = "none";
        cima.style.transform = "translateY(10px) rotate(45deg) ";
        baixo.style.transform = "translateY(-10px) rotate(-45deg)";
        fhlist.style.transform = "translateX(0)";
        partes.forEach((parte,i) => {
            parte.style.backgroundColor = "var(--cor2)";
        })
    }else{
        meio.style.display = "block";
        cima.style.transform = "translateY(0) rotate(0)";
        baixo.style.transform = "translateY(0) rotate(0)";
        fhlist.style.transform = "translateX(100%)";
        partes.forEach((parte,i) => {
            parte.style.backgroundColor = "var(--cor1)";
        })
    }

    console.log(menuOpen);
})


window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        fhlist.style.transform = 'translateX(0)';
    }else{
        menuOpen = false;
        fhlist.style.transform = 'translateX(0)';
        cima.style.transform = "translateY(0) rotate(0)";
        baixo.style.transform = "translateY(0) rotate(0)";
        fhlist.style.transform = "translateX(100%)";
        partes.forEach((parte,i) => {
            parte.style.backgroundColor = "var(--cor1)";
        })
    }
});