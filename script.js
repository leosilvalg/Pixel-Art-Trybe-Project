const primeira = document.querySelector('.preto');
const segunda = document.querySelector('.vermelho');
const terceira = document.querySelector('.azul');
const quarta = document.querySelector('.blueviolet');
const pixelBoard = document.querySelector('#pixel-board');
const boardSize = document.getElementById('board-size');
const generateBoard = document.querySelector('#generate-board');
const tamanhoBlocos = 5;
const novaCor = document.getElementById('novasCores');
const restart = document.getElementById('restart');


function criaBlocos(numero) {

  for (let i = 1; i <= numero; i += 1) {
  
    const linha = document.createElement('div');
    linha.className = 'linha';
    pixelBoard.appendChild(linha);

    for (let index = 1; index <= numero; index += 1) {
      
      const coluna = document.createElement('div');
     
      coluna.className = 'pixel';
      linha.appendChild(coluna);
    }
  }
}
criaBlocos(tamanhoBlocos);

function changeSelected(event) {
  const selec = document.querySelector('.selected');
  selec.classList.remove('selected');
  event.target.classList.add('selected');
}

primeira.addEventListener('click', changeSelected);
segunda.addEventListener('click', changeSelected);
terceira.addEventListener('click', changeSelected);
quarta.addEventListener('click', changeSelected);

pixelBoard.addEventListener('click', pintarQuadro);

function pintarQuadro(e) {
  const nomeTeste = document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = nomeTeste;
}

function criaTextoBotao() {
  const botao = document.querySelector('#clear-board');

  botao.innerHTML = 'Clear Board';
}
criaTextoBotao();

const botao = document.querySelector('#clear-board');
botao.addEventListener('click', clear);

function clear() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index of pixels) {
    index.style.backgroundColor = '';
  }
}

function novoTamanho() {
  if (boardSize.value === '') {
    window.alert('Invalid board size!');
  } else if (boardSize.value <= 5) {
    boardSize.value = 5;
    pixelBoard.innerHTML = '';
    criaBlocos(boardSize.value);
  } else if (boardSize.value >= 50) {
    boardSize.value = 50
    pixelBoard.innerHTML = '';
    criaBlocos(boardSize.value);
  } else {
    pixelBoard.innerHTML = '';
    criaBlocos(boardSize.value);
  }
}
generateBoard.addEventListener('click', novoTamanho);
document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) novoTamanho();
});

let corAleatoria1 = [parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')];
let corAleatoria2 = [parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')];
let corAleatoria3 = [parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')];
  
primeira.style.backgroundColor = 'black';
segunda.style.backgroundColor = '#' + corAleatoria1;
terceira.style.backgroundColor = '#' + corAleatoria2;
quarta.style.backgroundColor = '#' + corAleatoria3;


novaCor.addEventListener('click', () => {
  let corAleatoria1 = [parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')];
  let corAleatoria2 = [parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')];
  let corAleatoria3 = [parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')];

  primeira.style.backgroundColor = 'black';
  segunda.style.backgroundColor = '#' + corAleatoria1;
  terceira.style.backgroundColor = '#' + corAleatoria2;
  quarta.style.backgroundColor = '#' + corAleatoria3;
});

restart.addEventListener('click', () => {
  window.location.reload();
})