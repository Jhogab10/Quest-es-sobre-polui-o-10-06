const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem conhecimento sobre a poluição do ar?",
        alternativas: [
            {
                texto: "sou leigo neste assunto!",
                afirmacao: "Vamos aprender mais sobre?"
            },
            {
                texto: "obtenho este conhecimento!",
                afirmacao: "Ótimo, vamos conhecer mais sobre."
            }
        ]
    },
    {
        enunciado: "A poluição atmosférica é um problema novo???",
        alternativas: [
            {
                texto: "Sim!!!",
                afirmacao: "Sim, só agora que está começando a poluição,"
            },
            {
                texto: "Não, esse problema ja vem de muito tempo",
                afirmacao: "A poluição ja vem desde quando as industrias foram criadas."
            }
        ]
    },
    {
        enunciado: "Realiza alguma ativida para a preservação do ambiente?",
        alternativas: [
            {
                texto: "Sim, toda semana...",
                afirmacao: "Realizar atividades que enibem a emissão de carbono é a melhor coisa e"
            },
            {
                texto: "Não, de modo algum...",
                afirmacao: "essa historia de emissão de carbono é lorota"
            }
        ]
    },
    {
        enunciado: "Prejudica de alguma forma o meio ambiente?",
        alternativas: [
            {
                texto: "Infelizmente sim...",
                afirmacao: "Prejudicar o meio-ambiente é a melhor coisa"
            },
            {
                texto: "Não isso não faz parte de mim...",
                afirmacao: "é preciso se concientizar sobre as nossas poluições."
            }
        ]
    },
    {
        enunciado: "Você acredita na melhora ambiental a curto prazo?",
        alternativas: [
            {
                texto: "Sim, acredito que somos capazes de melhorar a situação atual...",
                afirmacao: "Com muito esforço somos sim, capazes de melhorar o planeta."
            },
            {
                texto: "Não, cada vez mais estamos destuindo o planeta...",
                afirmacao: "quanto mais destruir o planeta melhor"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();