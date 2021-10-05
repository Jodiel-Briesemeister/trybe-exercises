//Crie seu código abaixo dessa linha:
const caixaUm = document.querySelector(".caixa1");

const caixaDois = document.querySelector(".caixa2");

const botaoUm = document.querySelector(".botao1");

const botaoDois = document.querySelector(".botao2");

const caixaTexto = document.querySelector(".caixa-texto");

function trocaCor () {
  caixaUm.style.backgroundColor = 'green';
}

function trocaCor2 () {
  caixaDois.style.backgroundColor = 'green';
}

function enviaTexto () {
  caixaUm.innerText = caixaTexto.value;
}

function enviaTexto2 () {
  caixaDois.innerText = caixaTexto.value;
}

function alertaCtrlV () {
  alert("Go Trybe!");
}

botaoUm.addEventListener("mouseover", trocaCor)

botaoUm.addEventListener("click", enviaTexto)

botaoDois.addEventListener("mouseover", trocaCor2)

botaoDois.addEventListener("click", enviaTexto2)

caixaTexto.addEventListener("paste", alertaCtrlV)