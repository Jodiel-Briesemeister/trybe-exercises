// Exercício 1 - Fixando práticas ES6

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  
}

testingScope(true);



// Exercício 2 - Retornar os números em ordem crescente

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens
}

const ordernedNumbers = sortOddsAndEvens();

console.log(`Os números ${ordernedNumbers} se encontram ordenados de forma crescente!`);

// Método bônus utilizando .sort

oddsAndEvens.sort((a, b) => a - b);
console.log(oddsAndEvens);



// Exercícios Parte II

// Exercício 1 - Cálculo do fatorial
const fatorial = number => {
  let result = 1;

  for (let index = 1; index <= number; index += 1) {
    result *= index
  }

  return result
}

console.log(`Fatorial de 4: ${fatorial(4)}`)


// Exercício 2 - Maior palavra da frase
const longestWord = word => {
  let words = word.split(" ")
  let longest = words[0];
  for (let index = 0; index < words.length; index += 1) {
    if (longest.length < words[index].length) {
      longest = words[index];
    }
  }
  return longest;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
