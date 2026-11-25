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


        //operador ternario onde acontece a bertura e o echamento 
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

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
});


// MODO ESCURO

const botaoTema = document.getElementById("theme-toggle");

// Recupera o tema salvo
const temaSalvo = localStorage.getItem("tema");

// Aplica o tema ao carregar a página
if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
}

// Atualiza o ícone do botão
function atualizarIconeTema() {
    const icone = botaoTema.querySelector(".material-icons");

    if (document.body.classList.contains("dark-mode")) {
        icone.textContent = "light_mode";
        botaoTema.setAttribute("aria-label", "Ativar modo claro");
        botaoTema.setAttribute("title", "Modo claro");
    } else {
        icone.textContent = "dark_mode";
        botaoTema.setAttribute("aria-label", "Ativar modo escuro");
        botaoTema.setAttribute("title", "Modo escuro");
    }
}

atualizarIconeTema();

// Alterna entre os temas
botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const temaAtual = document.body.classList.contains("dark-mode")
        ? "escuro"
        : "claro";

    localStorage.setItem("tema", temaAtual);

    atualizarIconeTema();

});