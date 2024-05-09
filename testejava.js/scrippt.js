// Array contendo os possíveis nucleotídeos do DNA
const nucleotides = ['A', 'T', 'C', 'G'];

// Função para gerar uma sequência aleatória de DNA
function generateDNASequence(length) {
    let sequence = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * nucleotides.length);
        sequence += nucleotides[randomIndex];
    }
    return sequence;
}

// Função para atualizar a sequência exibida no HTML
function updateDNASequence(length) {
    const dnaSequenceElement = document.getElementById('dnaSequence');
    const dnaSequence = generateDNASequence(length);
    dnaSequenceElement.textContent = dnaSequence;
}

// Adiciona um evento de clique ao botão para gerar uma nova sequência de DNA
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', function() {
    updateDNASequence(10); // Aqui você pode definir o comprimento da sequência de DNA
});

// Gera uma sequência inicial de DNA ao carregar a página
updateDNASequence(10); // Você pode definir o comprimento da sequência de DNA aqui também
