
function clicar(elemento) {
    //abre o accordion
    elemento.querySelector(".resposta").classList.toggle("aberto");

    //altera o sinal do accordion
    const sinal = elemento.querySelector("h4 span")
    if(sinal.textContent == '+'){
        sinal.textContent = '-';
    } else {
        sinal.textContent = '+';
    }
};