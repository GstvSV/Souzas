
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
    
    