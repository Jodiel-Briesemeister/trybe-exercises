const fs = require('fs');

function greaterThanZero(value) {
  if (value < 0) {
    return 'negativo';
  }
  else if (value > 0) {
    return 'positivo';
  }
  else if (value === 0) {
      return 'neutro';
  }
  return 'o valor inserido deve ser um número';
}

module.exports = greaterThanZero;