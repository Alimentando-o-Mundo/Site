const perguntas = [

    {
        pergunta: "Qual é um dos principais desafios para alimentar uma população mundial crescente?",

        alternativas: [
            "Diminuir a produção de alimentos",
            "Aumentar o desperdício de alimentos",
            "Produzir mais alimentos de forma sustentável",
            "Reduzir o acesso à tecnologia no campo"
        ],

        correta: 2,

        explicacao:
            "Produzir mais alimentos de forma sustentável ajuda a atender à demanda sem aumentar os impactos ambientais."
    },


    {
        pergunta: "Qual prática ajuda a economizar água na agricultura?",

        alternativas: [
            "Irrigação por inundação",
            "Deixar a água correr livremente",
            "Irrigação por gotejamento",
            "Regar apenas uma vez por mês"
        ],

        correta: 2,

        explicacao:
            "A irrigação por gotejamento entrega água diretamente próxima às raízes, reduzindo desperdícios."
    },


    {
        pergunta: "O que é agricultura de precisão?",

        alternativas: [
            "Uso de tecnologia para monitorar e otimizar a produção",
            "Plantação feita sem nenhum tipo de tecnologia",
            "Uso exclusivo de ferramentas manuais",
            "Produção agrícola sem planejamento"
        ],

        correta: 0,

        explicacao:
            "A agricultura de precisão utiliza dados e tecnologias para melhorar o uso de recursos e aumentar a eficiência."
    },


    {
        pergunta: "Qual atitude contribui para reduzir o desperdício de alimentos?",

        alternativas: [
            "Comprar alimentos em excesso",
            "Planejar as compras e aproveitar melhor os alimentos",
            "Jogar fora alimentos próximos da validade",
            "Produzir mais alimentos sem planejamento"
        ],

        correta: 1,

        explicacao:
            "Planejar compras e aproveitar melhor os alimentos são atitudes que ajudam a diminuir desperdícios."
    },


    {
        pergunta: "Qual recurso natural é essencial para a produção agrícola?",

        alternativas: [
            "Água",
            "Plástico",
            "Petróleo",
            "Concreto"
        ],

        correta: 0,

        explicacao:
            "A água é essencial para o desenvolvimento das plantas e para diversas atividades agrícolas."
    },


    {
        pergunta: "Como a tecnologia pode ajudar a agricultura?",

        alternativas: [
            "Aumentando o desperdício",
            "Reduzindo a produtividade",
            "Melhorando o monitoramento das plantações",
            "Eliminando a necessidade de planejamento"
        ],

        correta: 2,

        explicacao:
            "Sensores, drones e sistemas de monitoramento podem ajudar agricultores a acompanhar melhor as plantações."
    },


    {
        pergunta: "O que caracteriza uma produção de alimentos sustentável?",

        alternativas: [
            "Uso irresponsável dos recursos",
            "Busca por eficiência e menor impacto ambiental",
            "Aumento constante do desperdício",
            "Eliminação das tecnologias agrícolas"
        ],

        correta: 1,

        explicacao:
            "A produção sustentável busca atender às necessidades atuais preservando os recursos naturais."
    },


    {
        pergunta: "Qual destas fontes pode ser utilizada para gerar energia renovável no campo?",

        alternativas: [
            "Energia solar",
            "Carvão mineral",
            "Gasolina",
            "Diesel"
        ],

        correta: 0,

        explicacao:
            "A energia solar é uma fonte renovável que pode ser utilizada em propriedades rurais."
    },


    {
        pergunta: "Por que reduzir o desperdício de alimentos é importante?",

        alternativas: [
            "Porque diminui a necessidade de produzir qualquer alimento",
            "Porque evita o uso de recursos sem necessidade",
            "Porque impede o desenvolvimento agrícola",
            "Porque reduz a quantidade de alimentos disponíveis"
        ],

        correta: 1,

        explicacao:
            "Quando evitamos desperdícios, também evitamos desperdiçar água, energia, terra e outros recursos utilizados na produção."
    },


    {
        pergunta: "Qual é um exemplo de tecnologia utilizada na agricultura moderna?",

        alternativas: [
            "Drones para monitoramento",
            "Desperdício de água",
            "Queimadas intencionais",
            "Ausência de planejamento"
        ],

        correta: 0,

        explicacao:
            "Drones podem ser utilizados para observar plantações e coletar informações que ajudam no manejo agrícola."
    }

];


let perguntaAtual = 0;
let pontos = 0;
let respondeu = false;


const elementoPergunta =
    document.getElementById("pergunta");

const elementoAlternativas =
    document.getElementById("alternativas");

const elementoNumero =
    document.getElementById("numero");

const elementoProgresso =
    document.getElementById("progresso");

const elementoPorcentagem =
    document.getElementById("porcentagem");

const elementoExplicacao =
    document.getElementById("explicacao");

const tituloExplicacao =
    document.getElementById("tituloExplicacao");

const textoExplicacao =
    document.getElementById("textoExplicacao");

const botaoProxima =
    document.getElementById("proxima");


function mostrarPergunta() {

    respondeu = false;

    const atual = perguntas[perguntaAtual];


    elementoPergunta.textContent =
        atual.pergunta;


    elementoAlternativas.innerHTML = "";


    elementoExplicacao.classList.remove("mostrar");


    const letras = ["A", "B", "C", "D"];


    atual.alternativas.forEach((alternativa, index) => {

        const botao =
            document.createElement("button");


        botao.classList.add("alternativa");


        botao.innerHTML = `
            <span class="letra">${letras[index]}</span>
            <span>${alternativa}</span>
        `;


        botao.addEventListener("click", () => {

            responder(index, botao);

        });


        elementoAlternativas.appendChild(botao);

    });


    const numeroAtual =
        perguntaAtual + 1;


    const total =
        perguntas.length;


    const porcentagem =
        Math.round((numeroAtual / total) * 100);


    elementoNumero.textContent =
        `Pergunta ${numeroAtual} de ${total}`;


    elementoProgresso.style.width =
        `${porcentagem}%`;


    elementoPorcentagem.textContent =
        `${porcentagem}%`;

}


function responder(indice, botaoSelecionado) {

    if (respondeu) return;

    respondeu = true;


    const atual =
        perguntas[perguntaAtual];


    const botoes =
        document.querySelectorAll(".alternativa");


    botoes.forEach(botao => {

        botao.disabled = true;

    });


    if (indice === atual.correta) {

        pontos++;

        botaoSelecionado.classList.add("correta");

        tituloExplicacao.textContent =
            "Isso mesmo!";

        elementoExplicacao.style.background =
            "#f1faed";

    } else {

        botaoSelecionado.classList.add("errada");

        botoes[atual.correta]
            .classList.add("correta");


        tituloExplicacao.textContent =
            "Quase!";

        elementoExplicacao.style.background =
            "#fff5e9";
    }


    textoExplicacao.textContent =
        atual.explicacao;


    elementoExplicacao.classList.add("mostrar");

}


botaoProxima.addEventListener("click", () => {

    if (!respondeu) {

        alert("Escolha uma alternativa primeiro!");

        return;

    }


    perguntaAtual++;


    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        localStorage.setItem(
            "quizPontos",
            pontos
        );

        localStorage.setItem(
            "quizTotal",
            perguntas.length
        );


        window.location.href =
            "resultado.html";

    }

});


mostrarPergunta();