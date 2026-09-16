// ===== 50 RESPOSTAS DA BOLA 8 =====
// Cada resposta tem um texto e um tipo (positiva, negativa, neutra)
const respostas = [
    // ========== ✅ POSITIVAS (18) ==========
    { texto: "Com certeza!", tipo: "positiva" },
    { texto: "Sim, definitivamente!", tipo: "positiva" },
    { texto: "Sem dúvidas!", tipo: "positiva" },
    { texto: "Pode contar com isso!", tipo: "positiva" },
    { texto: "As estrelas dizem sim!", tipo: "positiva" },
    { texto: "Meus sinais apontam sim!", tipo: "positiva" },
    { texto: "Você pode confiar!", tipo: "positiva" },
    { texto: "O universo conspira a seu favor!", tipo: "positiva" },
    { texto: "É agora ou nunca! Vá em frente!", tipo: "positiva" },
    { texto: "Sim! E será melhor do que imagina.", tipo: "positiva" },
    { texto: "Tudo indica que sim! 🌟", tipo: "positiva" },
    { texto: "A resposta é sim. Acredite!", tipo: "positiva" },
    { texto: "Certamente! O caminho está aberto.", tipo: "positiva" },
    { texto: "Sim, e os astros confirmam!", tipo: "positiva" },
    { texto: "Com toda a certeza do mundo!", tipo: "positiva" },
    { texto: "Siga em frente, o sim é seu!", tipo: "positiva" },
    { texto: "Sim! O momento é perfeito.", tipo: "positiva" },
    { texto: "Positivo! Grandes coisas te aguardam.", tipo: "positiva" },

    // ========== ❌ NEGATIVAS (17) ==========
    { texto: "Não conte com isso.", tipo: "negativa" },
    { texto: "Minha resposta é não.", tipo: "negativa" },
    { texto: "As perspectivas não são boas.", tipo: "negativa" },
    { texto: "Muito duvidoso...", tipo: "negativa" },
    { texto: "Não, nem pense nisso!", tipo: "negativa" },
    { texto: "As estrelas dizem não.", tipo: "negativa" },
    { texto: "Esqueça essa ideia por agora.", tipo: "negativa" },
    { texto: "Definitivamente não.", tipo: "negativa" },
    { texto: "Meus sinais apontam para o não.", tipo: "negativa" },
    { texto: "Não é o momento certo.", tipo: "negativa" },
    { texto: "As energias não estão a seu favor.", tipo: "negativa" },
    { texto: "Não. Melhor repensar essa escolha.", tipo: "negativa" },
    { texto: "O destino diz: ainda não.", tipo: "negativa" },
    { texto: "Nem hoje, nem amanhã. Desista.", tipo: "negativa" },
    { texto: "Sinto muito... a resposta é não. 😔", tipo: "negativa" },
    { texto: "Não é por aqui esse caminho.", tipo: "negativa" },
    { texto: "Impossível no momento atual.", tipo: "negativa" },

    // ========== 🔮 NEUTRAS / ENIGMÁTICAS (15) ==========
    { texto: "Pergunte novamente mais tarde...", tipo: "neutra" },
    { texto: "Melhor não te contar agora.", tipo: "neutra" },
    { texto: "Concentre-se e pergunte de novo.", tipo: "neutra" },
    { texto: "Não posso prever agora.", tipo: "neutra" },
    { texto: "Isso depende de você...", tipo: "neutra" },
    { texto: "O destino ainda está sendo escrito.", tipo: "neutra" },
    { texto: "Siga seu coração. 💜", tipo: "neutra" },
    { texto: "Talvez... o tempo dirá.", tipo: "neutra" },
    { texto: "As nuvens encobrem a resposta.", tipo: "neutra" },
    { texto: "Nem sim, nem não. Escute sua intuição.", tipo: "neutra" },
    { texto: "A resposta está dentro de você.", tipo: "neutra" },
    { texto: "O silêncio guarda a verdade. Aguarde.", tipo: "neutra" },
    { texto: "O futuro é maleável. Você decide.", tipo: "neutra" },
    { texto: "Aguarde a próxima lua cheia... 🌙", tipo: "neutra" },
    { texto: "Talvez. Mas só o tempo revelará.", tipo: "neutra" }
];

// ===== ELEMENTOS DO DOM =====
const botao = document.getElementById('botao');
const bola = document.getElementById('bola');
const respostaEl = document.getElementById('resposta');
const numero8 = document.getElementById('numero8');
const inputPergunta = document.getElementById('pergunta');
const totalEl = document.getElementById('total');

// ===== ATUALIZA O CONTADOR =====
totalEl.textContent = respostas.length;

// ===== ESTADO =====
let ultimoIndice = -1;
let respondendo = false;

// ===== FUNÇÃO PRINCIPAL =====
function consultarBola8() {
    if (respondendo) return;

    const pergunta = inputPergunta.value.trim();
    if (!pergunta) {
        inputPergunta.focus();
        inputPergunta.style.borderColor = '#ff4d6d';
        setTimeout(() => {
            inputPergunta.style.borderColor = '';
        }, 800);
        return;
    }

    respondendo = true;
    botao.disabled = true;

    // Esconde o número 8
    numero8.classList.add('escondido');

    // Efeito de tremor
    bola.classList.add('tremendo');

    // Mostra "pensando..."
    respostaEl.textContent = "...";
    respostaEl.style.opacity = '1';
    respostaEl.className = ''; // limpa classes de cor

    // Sorteia uma resposta diferente da última
    setTimeout(() => {
        let indice;
        do {
            indice = Math.floor(Math.random() * respostas.length);
        } while (indice === ultimoIndice && respostas.length > 1);
        ultimoIndice = indice;

        const respostaSorteada = respostas[indice];

        // Revela com fade
        respostaEl.style.opacity = '0';
        setTimeout(() => {
            respostaEl.textContent = respostaSorteada.texto;
            respostaEl.className = respostaSorteada.tipo; // aplica cor
            respostaEl.style.opacity = '1';

            bola.classList.remove('tremendo');

            respondendo = false;
            botao.disabled = false;
        }, 300);
    }, 900);
}

// ===== EVENTOS =====
botao.addEventListener('click', consultarBola8);
bola.addEventListener('click', consultarBola8);

inputPergunta.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') consultarBola8();
});