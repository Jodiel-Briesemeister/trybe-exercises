const assert = require('assert');

// assert.equal()              // checa se o primeiro e segundo argumentos são iguais em valor (==) 
// assert.strictEqual()        // checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
// assert.notStrictEqual()     // checa se o primeiro e segundo argumentos são diferentes (!==)
// assert.deepStrictEqual()    // checa objeto/objeto filho -> se o primeiro e segundo argumentos são iguais em valor e tipo(===)
// assert.notDeepStrictEqual() // checa objeto/objeto filho -> se o primeiro e segundo argumentos são diferentes (!==)
// assert.ok()                 // 
// assert.fail()               //

// 1: A função sum(a, b) retorna a soma do parâmetro a com o b
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers'); // caso a ou b não sejam números lança o erro e finaliza a execução.
  }

  return a + b;
}

// implemente seus testes aqui


// 1: verifica se sum é uma função
assert.strictEqual(typeof sum, 'function');
// 2: soma de 4 e 5 é 9?
assert.strictEqual(sum(4, 5), 9);
// 3: 0 + 0 = 0?
assert.strictEqual(sum(0, 0), 0);
// 4: Verifica se retorna erro ao comparar 4 com '5'
assert.throws(() => {
  sum(4, '5');
});
// 5: Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);

// // Parte 2 // //

// 1: A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// console.log(myRemove([1, 2, 3, 4], 3)) // [ 1, 2, 4 ]

// 2: Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ]);
// 3: Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 3, 4 ]);
// 4: Verifique se o array passado por parâmetro não sofreu alterações
const myList = [5, 6, 7, 8];

myRemove(myList, 5);

assert.deepStrictEqual(myList, [5, 6, 7, 8]);
// 5: Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);


// // Parte 3 // //

// 1: A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// 2: Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// 3: Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// 4: Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const myList2 = [1, 2, 3, 4];
// console.log(myList2.length) // 4
myRemoveWithoutCopy(myList2, 1); // remove o valor 1 do array myList2, myList2.length passa a retornar 3.
assert.notStrictEqual(myList2.length, 4, 'myList2 não passou por alterações!');
// 5: Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);


// // Parte 4 // //

// 1: A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// 1: Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz')
// 2: Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(9), 'fizz');
// 3: Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(25), 'buzz');
// 4: Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(17), 17);
// 5: Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);

// // Parte 5 // //

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// implemente seus testes aqui

// 1: Compare dois objetos (JSON) para verificar se são idênticos ou não
// assert.deepStrictEqual(obj1, obj2);
// assert.notDeepStrictEqual(obj1, obj3);

// // PRATICANDO TDD - Parte 2 // //
 
// 1: Escreva a função addOne para passar nos testes já implementados.
// escreva a função addOne aqui
// const addOne = (array) => {
//   let result = [];
//   for (index in array) {
//     result[index] = array[index] + 1;
//   }
//   return result
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// 2: Escreva a função wordLengths para passar nos testes já implementados.
// escreva a função wordLengths aqui
// const wordLengths = (word) => {
//   let result = [];
//   for (index in word) {
//     result[index] = word[index].length;
//   }
//   return result;
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected2 = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output2 = wordLengths(words);
// assert.deepStrictEqual(output2, expected2);

// 3: Escreva a função sumAllNumbers para passar nos testes já implementados.
// escreva a função sumAllNumbers aqui
// const sumAllNumbers = (array) => {
//   let result = 0;
//   for (index in array) {
//     result += array[index]
//   }
//   return result;
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected3 = 53;
// const output3 = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output3, expected3);

// 4: Escreva a função findTheNeedle para passar nos testes já implementados.
// escreva a função findTheNeedle aqui
// const findTheNeedle = (array, word) => {
//   let result = -1;
//   for (index in array) {
//     if (array[index] === word) {
//       result = parseInt(index);
//     }
//   }
//   return result;
// }

// let words2 = ['house', 'train', 'slide', 'needle', 'book'];
// let expected4 = 3;
// let output4 = findTheNeedle(words2, 'needle');
// assert.strictEqual(output4, expected4);

// words2 = ['plant', 'shelf', 'arrow', 'bird'];
// expected4 = 0;
// output4 = findTheNeedle(words2, 'plant');
// assert.strictEqual(output4, expected4);

// words2 = ['plant', 'shelf', 'arrow', 'bird'];
// expected4 = -1;
// output4 = findTheNeedle(words2, 'plat');
// assert.strictEqual(output4, expected4);



// Reescrevendo funções utilizando TDD - Parte 3

// 1: Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está 
// retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

// const greetPeople = (arrayPeople) => {
//   let greeting = [];

//   for (index in arrayPeople) {
//     greeting[index] = `Hello ${arrayPeople[index]}`;
//   }
//   return greeting;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// assert.deepStrictEqual(greetPeople(parameter), result)

// 2: Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando
// como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

// const removeVowels = (word) => {
//   const characters = word.split('');
//   const results = [];
//   let assemble = '';
//   let count = 0;

//   for (let index = 0; index < characters.length; index += 1) {
//     if (
//       characters[index] === 'a' ||
//       characters[index] === 'o' ||
//       characters[index] === 'i' ||
//       characters[index] === 'e' ||
//       characters[index] === 'u'
//     ) 
//     {
//       count += 1;
//       results.push(count);
//     } else {
//       results.push(characters[index]);
//     }
//     assemble += results[index];
//   }
//   return assemble;
// };

// const parameter2 = 'Dayane';
// const result2 = 'D1y2n3';

// assert.deepStrictEqual(removeVowels(parameter2), result2)

// 3: 
// const greaterThanTen = (array) => {
//   let results = [];
//   let count = 0;
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] > 10) {
//       results[count] = array[index];
//       count += 1;
//     }
//   }
//   return results;
// };

// const parameter2 = [4, 10, 32, 9, 21];
// const result2 = [32, 21];

// assert.deepStrictEqual(greaterThanTen(parameter2), result2)

// 4:

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter2 = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result2 = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter2), result2)