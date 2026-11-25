
const lista = document.querySelector('.lista-equipe');
const membros = document.querySelectorAll('.membro');
const anterior = document.querySelector('#anterior');
const proximo = document.querySelector('#proximo');

let indiceAtual = 0;
function quantidadeVisivel() {
    if (window.innerWidth <= 600) {
        return 1;
    } 

    if (window.innerWidth <= 1020) {
        return 2;
    }

    if (window.innerWidth <= 1400) {
        return 3;
    }

    return 4;
}

function atualizarCarrossel() {

    const quantidade = quantidadeVisivel();

    const inicio = Math.floor(indiceAtual / quantidade) * quantidade;
    const fim = Math.min(inicio + quantidade, membros.length);

    membros.forEach((membro, index) => {

        if (index >= inicio && index < fim) {
            membro.style.display = 'block';
        } else {
            membro.style.display = 'none';
        }

        membro.classList.toggle('ativo', index === indiceAtual);
    });
}

proximo.addEventListener('click', () => {

    const quantidade = quantidadeVisivel();

    let proximoGrupo = Math.floor(indiceAtual / quantidade) + 1;

    if (proximoGrupo * quantidade >= membros.length) {
        indiceAtual = 0;
    } else {
        indiceAtual = proximoGrupo * quantidade;
    }

    atualizarCarrossel();
});

anterior.addEventListener('click', () => {

    const quantidade = quantidadeVisivel();

    let grupoAnterior = Math.floor(indiceAtual / quantidade) - 1;

    if (grupoAnterior < 0) {
        indiceAtual = Math.floor((membros.length - 1) / quantidade) * quantidade;
    } else {
        indiceAtual = grupoAnterior * quantidade;
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