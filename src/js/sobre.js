const lista = document.querySelector('.lista-equipe');
const membros = document.querySelectorAll('.membro');
const anterior = document.querySelector('#anterior');
const proximo = document.querySelector('#proximo');

let indiceAtual = 0;

function atualizarCarrossel () {
    membros.forEach((membro, index) => {
        if (index === indiceAtual) {
            membro.classList.add('ativo');
        } else {
            membro.classList.remove('ativo');
        }
    });

    const selecionado = membros[indiceAtual];

    selecionado.classList.add('ativo');

    const janela = document.querySelector('.janela');
    requestAnimationFrame(() => {
        const centroJanela = janela.clientWidth / 2;
        const centroCard = selecionado.offsetLeft + (selecionado.offsetWidth / 2);
        const deslocamento = centroJanela - centroCard;

        lista.style.transform = `translateX(${deslocamento}px)`;
    });
}

proximo.addEventListener('click', () =>{
    indiceAtual++;

    if(indiceAtual >= membros.length){
        indiceAtual = 0;
    }

    atualizarCarrossel();
});

anterior.addEventListener('click', () =>{
    indiceAtual--;

    if(indiceAtual < 0){
        indiceAtual = membros.length - 1;
    }

    atualizarCarrossel();
});

membros.forEach((membro, index) => {
    membro.addEventListener('click', () => {
        indiceAtual = index;
        atualizarCarrossel();
    });
});

window.addEventListener('load', atualizarCarrossel);
window.addEventListener('resize', atualizarCarrossel);