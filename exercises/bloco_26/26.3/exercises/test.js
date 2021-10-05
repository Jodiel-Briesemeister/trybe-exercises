// npm install --save-dev sinon
// npm install -D mocha chai

const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const gtz = require('./greaterThanZero');
const createFile = require('./writeFile');

describe('Teste da função: greaterThanZero', () => {

  describe('quando é maior que zero', () => {
    it('Retorna a string: "positivo"', () => {
      const result = gtz(1)
      expect(result).to.be.a('string');
      expect(result).to.be.equals('positivo');
    });
  });

  describe('quando é menor que zero', () => {
    it('Retorna a string: "negativo"', () => {
      const result = gtz(-1)
      expect(result).to.be.a('string');
      expect(result).to.be.equals('negativo');
    });
  });

  describe('quando é igual a zero', () => {
    it('Retorna a string: "neutro"', () => {
      const result = gtz(0)
      expect(result).to.be.a('string');
      expect(result).to.be.equals('neutro');
    });
  });

  describe('quando o valor inserido não é do tipo Number', () => {
    it('Retorna a string: "o valor inserido deve ser um número"', () => {
      const result = gtz('abc');
      expect(result).to.be.a('string');
      expect(result).to.be.equals('o valor inserido deve ser um número');
    });

  });
});


describe('Teste da função: createFile', () => {
  // before/after previnem que a função 'createFile' ao ser executada dentro do it não crie
  // nenhum arquivo; (restaura para um ponto anterior a ação 'writeFileSync')

  describe('Executa a função: createfile', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });
  
    after(() => {
      fs.writeFileSync.restore();
    });

    it('Retorna a string: "ok"', () => {
      const result = createFile('nomeArquivo.txt', 'conteúdo');

      expect(result).to.be.a('string');
      expect(result).to.be.equals('ok');
    });
  })

  // describe('Checa arquivo criado', () => {
  //   // before(() => {
  //   //   sinon.stub(fs, 'readFileSync');
  //   // });
  //   after(() => {
  //     fs.readFileSync.restore();
  //   });

  //   it('Cria um arquivo com o conteúdo inserido', () => {
  //     const result = createFile('nomeArquivo.txt', 'conteúdo');
  //     const fileContent = fs.readFileSync('nomeArquivo.txt', 'utf-8');
  //     expect(fileContent).to.be.equals('conteúdo');
  //   });
  // });
});