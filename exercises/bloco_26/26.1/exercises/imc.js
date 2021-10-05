const readline = require('readline-sync');

const peso = readline.questionFloat('Qual é o seu peso?: ');
const altura = readline.questionFloat('Qual é a sua altura?: ');

const IMC = peso / (altura * altura);
let situacao = '';

if (IMC < 18.5) {
  situacao = 'Abaixo do peso (magreza)';
} else if(IMC >= 18.5 && IMC <= 24.9) {
  situacao = 'Peso normal';
} else if(IMC >= 25 && IMC <= 29) {
  situacao = 'Acima do peso (sobrepeso)';
} else if(IMC >=30 && IMC <= 34) {
  situacao = 'Obesidade grau I';
} else if(IMC >=35 && IMC <= 39.9) {
  situacao = 'Obesidade grau II';
} else {
  situacao = 'Obesidade graus III e IV';
};

console.log(`Seu IMC é ${Math.round(IMC)} - ${situacao}`);