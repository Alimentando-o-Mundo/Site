const telaMenuMobile = window.matchMedia('(max-width: 1024px)');

function clickMenu() {
    const menu = document.querySelector('.menu');
    const burguer = document.getElementById('burguer');
    const aberto = menu.style.display === 'flex';

    menu.style.display = aberto ? 'none' : 'flex';
    burguer.textContent = aberto ? 'menu' : 'close';
    burguer.setAttribute('aria-expanded', String(!aberto));
}

function resetMenu() {
    const menu = document.querySelector('.menu');
    const burguer = document.getElementById('burguer');
    if (!menu) return;

    menu.style.display = '';
    if (burguer) {
        burguer.textContent = 'menu';
        burguer.setAttribute('aria-expanded', 'false');
    }
}

telaMenuMobile.addEventListener('change', resetMenu);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu a').forEach((link) => {
        link.addEventListener('click', () => {
            if (telaMenuMobile.matches) resetMenu();
        });
    });
});