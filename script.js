const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Impactos da Poluição do Ar: Desafios e Soluções para a Preservação Ambiental",
        alternativas: [
            "Ok, vamos lá!",
            "Isso é terrível!"
        ]
    },
    {
        enunciado: "Quais das seguintes opções são consideradas principais fontes de poluição do ar em áreas urbanas e rurais?",
        alternativas: [
            "Emissões veiculares",
            "Indústrias"
        ]
    },
    {
        enunciado: "",
        alternativas: [
            "",
            ""
        ]
    },
    {
        enunciado: "",
        alternativas: [
            "",
            ""
        ]
    },
    {
        enunciado: "",
        alternativas: [
            "",
            ""
        ]
    },Indústrias
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();