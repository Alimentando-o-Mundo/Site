document.addEventListener('DOMContentLoaded', () => {

    const menu = document.getElementById('nav-bar');
    const nav = document.getElementById('nav_bar');
    const burguer = document.getElementById('burguer');

    
    nav.style.display = 'none';

    burguer.textContent = 'menu';
    burguer.setAttribute('aria-expanded', 'false');

    // Abrir e fechar
    window.clickMenu = function () {

        const aberto = menu.classList.toggle('aberto');

        nav.style.display = aberto ? 'flex' : 'none';

        burguer.textContent = aberto ? 'close' : 'menu';

        burguer.setAttribute('aria-expanded', String(aberto));

    };

    // Fechar menu
    function resetMenu() {

        menu.classList.remove('aberto');

        nav.style.display = 'none';

        burguer.textContent = 'menu';

        burguer.setAttribute('aria-expanded', 'false');

    }

    // Fechar ao clicar nos links
    nav.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', resetMenu);

    });

});