// 1
const employeeInfo = (nomeCompleto) => {
  const email = `${nomeCompleto.split(' ').join('_')}@trybe.com`;
  return { nomeCompleto, email }
};

const newEmployees = () => {
  const employees = {
    id1: employeeInfo('Pedro Guerra'),
    id2: employeeInfo('Luiza Drumond'),
    id3: employeeInfo('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees())

// 2
const validBet = (betNumber, winnerNumber) => betNumber === winnerNumber;

const betDraw = (betNumber, validFunc) => {
  const winnerNumber = Math.floor(Math.random() * 5) + 1;
  validBet(betNumber, winnerNumber)
  return validFunc(betNumber, winnerNumber) ? 'Parabéns você ganhou!' : 'Tente novamente.';
}

console.log(betDraw(4, validBet))

// 3
const respostacorreta = 'higher order function';
const resposta = 'HIGHER ORDER FUNCTION';

const checkAnswer = (rightAnswer) => (answer) => rightAnswer === answer.toLowerCase() ? 'Resposta correta!':'Tente outra resposta.';

console.log(checkAnswer(respostacorreta)(resposta));

// 4
const rightAnswers =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (gabarito, resposta, func) => {
  let count = 0;
  for (let index = 0; index < gabarito.length && index < resposta.length; index += 1) {
    count += func(gabarito[index],resposta[index]);
  }
  return count;
}

console.log(repeat(rightAnswers, studentAnswers, checkAnswer2 = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } 
  else if (studentAnswers === 'N.A') {
    return 0;
  }
  else {
    return -0.5;
  }
}));
