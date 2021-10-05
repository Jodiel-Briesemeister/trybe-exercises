const readline = require('readline-sync');


const chooseNumber = readline.questionFloat(
    'Escolha qual script deseja executar digitando seu número respectivo \n' +
    '1 - IMC \n' +
    '2 - Velocidade \n' +
    '3 - Sorteio \n'
);

let req = '';

switch (chooseNumber) {
  case 1:
    req = './imc';
    break;
  case 2:
    req = './velocidade';
    break;
  case 3:
    req = './sorteio';
    break;
}

const result = require(req);
