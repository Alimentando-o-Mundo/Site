
document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector("#produtos #img");
    const slides = document.querySelectorAll("#produtos .slide");
    const anterior = document.querySelector("#anterior");
    const proximo = document.querySelector("#proximo");

    let indice = 0;

    function atualizarCarrossel() {

        const visiveis = window.innerWidth <= 600 ? 1 : 2;
        const max = slides.length - visiveis;

        indice = Math.max(0, Math.min(indice, max));

        const largura = slides[0].offsetWidth + 20;

        container.style.transform =
            `translateX(-${indice * largura}px)`;

        anterior.disabled = indice === 0;
        proximo.disabled = indice >= max;
    }

    proximo.onclick = () => {
        indice += window.innerWidth <= 600 ? 1 : 2;
        atualizarCarrossel();
    };

    anterior.onclick = () => {
        indice -= window.innerWidth <= 600 ? 1 : 2;
        atualizarCarrossel();
    };

    window.addEventListener("resize", atualizarCarrossel);

    atualizarCarrossel();

});
