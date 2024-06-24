
const setas = document.querySelectorAll(".arrow");
const titulos = document.querySelectorAll(".prod-title");
const conteudo = document.querySelectorAll(".content");


titulos.forEach((titulo, i) => {
    let isOpen = false;
    titulo.addEventListener("click", () => {
        if(isOpen){
            setas[i].style.transform = "rotate(0deg)";

            conteudo[i].style.opacity = 0;
            conteudo[i].style.maxHeight = 0;
            setTimeout(() => {
                conteudo[i].style.display = "none";
            }, 500);
            isOpen = false;
        }else{
            setas[i].style.transform = "rotate(90deg)";
            conteudo[i].style.display = "block";
            setTimeout(() => {
                conteudo[i].style.opacity = 1;
                conteudo[i].style.maxHeight = "1000px";
            }, 500);
            isOpen = true;
        }
    })
})



