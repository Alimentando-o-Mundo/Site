//nav (copiar e colar todas em todas as pags)
function clickMenu() {
    const menu = document.querySelector('.menu');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}