let statusDisplay = document.querySelector('#status-head');
let movimentoDisplay = document.querySelectorAll('.move-display h2');
let botoes = document.querySelectorAll('button');

let moveList = ["Pedra", "Papel", "Tesoura"];

let vitoriaMsg = 'Vitória';
let derrotaMsg = 'Derrota';
let empateMsg = 'Empate';

function iniciaJogo() {
    statusDisplay.textContent = 'Escolha!';
    
    botoes.forEach((botao, index) => {
        botao.textContent = moveList[index];
        botao.style.display = "inline-block";
        botoes[index].addEventListener("click", fimJogo);
    });
    moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
}

function fimJogo() {
    let movimentoJogador = moveList.indexOf(event.target.textContent);
    let movimentoComputador = movimentoRandomico();

    statusDisplay.textContent = calculaResultado(movimentoJogador, movimentoComputador);

    movimentoDisplay.forEach((movimentoDisplay) => (movimentoDisplay.style.display = "inline-block"));
    movimentoDisplay[0].textContent = `Você Jogou ${moveList[movimentoJogador]}`;
    movimentoDisplay[1].textContent = `Computador Jogou ${moveList[movimentoComputador]}`;

    botoes.forEach((botao, index) => {
        if (index == 1) {
            botao.textContent = "Jogar novamente";
            botao.removeEventListener("click", fimJogo);
            botao.addEventListener("click", iniciaJogo);
        } else {
            botoes.style.display = "none";
        }
  });
}

function calculaResultado(movimento1,movimento2) {
    let resultado = movimento1 - movimento2;

    if (resultado == 1 || resultado + 3 == 1) {
        return vitoriaMsg;
      } else if (resultado == 2 || resultado + 3 == 2) {
        return derrotaMsg;
      } else {
        return empateMsg;
      }
}

function movimentoRandomico() {
    return Math.floor(Math.random() * 3);
}

iniciaJogo();