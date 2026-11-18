
document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector("#produtos #img");
    const slides = document.querySelectorAll("#produtos .slide");//seleciona os slides
    const anterior = document.querySelector("#anterior");//seta esquerda
    const proximo = document.querySelector("#proximo");//seta direita

    let indice = 0;

    function atualizarCarrossel() {

        //quantos slides aparacerem por vez//
        const visiveis = window.innerWidth <= 600 ? 1 : 2;

        //limite de movimento//
        const max = slides.length - visiveis;

        indice = Math.max(0, Math.min(indice, max));

        //calcula o deslocamento
        const largura = slides[0].offsetWidth + 20;
    
        //movimenta o container 
        container.style.transform =
            `translateX(-${indice * largura}px)`;

                //controle das setas
        anterior.disabled = indice === 0;
        proximo.disabled = indice >= max;
    }

    //aqui detecta o clique 
    proximo.onclick = () => {
        indice += window.innerWidth <= 600 ? 1 : 2;
        atualizarCarrossel();
    };

    anterior.onclick = () => {
        indice -= window.innerWidth <= 600 ? 1 : 2;
        atualizarCarrossel();
    };

    //ocorre as atualizaçoes do carrosel
    window.addEventListener("resize", atualizarCarrossel);

    atualizarCarrossel();

});
