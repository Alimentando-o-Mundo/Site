
document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector("#produtos #img");
    const slides = document.querySelectorAll("#produtos .slide");

    const anterior = document.querySelector("#produtos #anterior");
    const proximo = document.querySelector("#produtos #proximo");

    if (!container || !anterior || !proximo || slides.length === 0) {
        return;
    }

    let indice = 0;

    function quantidadeVisivel() {
        return window.innerWidth <= 650 ? 1 : 2;
    }

    function atualizarCarrossel() {

        const visiveis = quantidadeVisivel();

        const maxIndice = Math.max(0, slides.length - visiveis);

        indice = Math.min(indice, maxIndice);

        // Largura real do slide
        const larguraSlide = slides[0].getBoundingClientRect().width;

        // Espaçamento entre os slides
        const estilos = window.getComputedStyle(container);
        const gap = parseFloat(estilos.gap) || 0;

        // Calcula a movimentação
        const deslocamento = indice * (larguraSlide + gap);

        container.style.transform = `translateX(-${deslocamento}px)`;

        // Estado das setas
        anterior.disabled = indice === 0;
        proximo.disabled = indice >= maxIndice;
    }

    // Avançar
    proximo.addEventListener("click", () => {

        const passo = quantidadeVisivel();
        const maxIndice = Math.max(0, slides.length - passo);

        indice = Math.min(indice + passo, maxIndice);

        atualizarCarrossel();
    });

    // Voltar
    anterior.addEventListener("click", () => {

        const passo = quantidadeVisivel();

        indice = Math.max(0, indice - passo);

        atualizarCarrossel();
    });

    // Redimensionamento da tela
    window.addEventListener("resize", atualizarCarrossel);

    // Inicialização
    atualizarCarrossel();

});

function quantidadeVisivel() {
    return window.innerWidth <= 600 ? 1 : 2;
}