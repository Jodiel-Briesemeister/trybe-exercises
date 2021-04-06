
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((accumulated, current) => accumulated + current.split('').reduce((acc, curr) => { 
  if (curr.toLowerCase() === 'a') {
    acc += 1
  }
  return acc
  },0),0)
}

assert.deepStrictEqual(containsA(), 20);