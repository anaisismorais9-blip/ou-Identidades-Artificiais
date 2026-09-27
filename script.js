// Banco de dados dinâmico de amostras para o quiz
const samples = [
    {
        text: '"Acho que a liberdade na escola não é só fazer o que quer, sabe? É mais sobre não se sentir sufocado por regras que ninguém explica o motivo. Às vezes a gente só quer ser ouvido, sem nota ou julgamento."',
        correct: 'humano',
        explanation: 'Acertou! Este trecho foi escrito por um estudante. Ele contém marcas de oralidade ("sabe?", "a gente"), repetições emocionais e um ritmo orgânico que as ferramentas puramente estatísticas tendem a polir demais.'
    },
    {
        text: '"A autonomia no ambiente escolar mitiga as barreiras pedagógicas tradicionais, fomentando um ecossistema propício para o desenvolvimento socioemocional e a liberdade crítica do discente."',
        correct: 'ia',
        explanation: 'Exatamente! Este trecho foi gerado por Inteligência Artificial. Observe o vocabulário excessivamente formal ("mitiga", "fomentando", "discente") e a estrutura sintática perfeitamente previsível, carente de personalidade real.'
    }
];

let currentIndex = 0;

function checkAnswer(userChoice) {
    const currentSample = samples[currentIndex];
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');

    quizContent.classList.add('hidden');
    quizResult.classList.remove('hidden');

    if (userChoice === currentSample.correct) {
        resultTitle.innerHTML = "✨ Percepção Afiada";
        resultTitle.style.color = "#d4af37"; // Cor ouro
    } else {
        resultTitle.innerHTML = "👁️ A Ilusão Algorítmica";
        resultTitle.style.color = "#1c1d22";
    }

    resultText.innerHTML = currentSample.explanation;
}

function resetQuiz() {
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    
    // Alterna o exemplo para dar dinâmica ao site
    currentIndex = (currentIndex + 1) % samples.length;
    
    // Atualiza o texto da nova rodada
    document.querySelector('.text-sample').innerText = samples[currentIndex].text;

    quizResult.classList.add('hidden');
    quizContent.classList.remove('hidden');
}
