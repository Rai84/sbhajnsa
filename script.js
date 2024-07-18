const botaoTriste = document.getElementById('botaoTriste');
const botaoFeliz = document.getElementById('botaoFeliz');
const resposta = document.getElementById('resposta');

botaoTriste.addEventListener('click', function() {
    if (!botaoTriste.classList.contains('botao-selecionado')) {
        botaoTriste.classList.add('botao-selecionado');
        botaoFeliz.classList.remove('botao-selecionado');
        resposta.textContent = "Termina desgraça";
    }
});

botaoFeliz.addEventListener('click', function() {
    if (!botaoFeliz.classList.contains('botao-selecionado')) {
        botaoFeliz.classList.add('botao-selecionado');
        botaoTriste.classList.remove('botao-selecionado');
        resposta.textContent = "Se aquieta desgraça";
    }
});
