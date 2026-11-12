function clicar(elemento) {
    elemento.querySelector(".resposta").classList.toggle("aberto");

    const sinal = elemento.querySelector("h4 span")
    if(sinal.textContent == '+'){
        sinal.textContent = '-';
    } else {
        sinal.textContent = '+';
    }
};