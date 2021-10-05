const readline = require('readline-sync');

const distancia = readline.questionInt('Tempo: ');
const tempo = readline.questionInt('Distância: ');

const velocidade = distancia / tempo;
console.log(velocidade);