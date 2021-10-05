// npm install -D mocha chai chai-http sinon mongodb-memory-server@6
// NAME='getPosts' npm test

const chai = require('chai');
const sinon = require('sinon');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

const { MongoClient } = require('mongodb');
const { getConnection } = require('./connectionMock');
const server = require('../src/api/server');
const { describe } = require('mocha');

describe('GET /api/posts/:userId', () => {
  // Código padrão - Banco mockado \/
  let connectionMock;

	before(async () => {
		connectionMock = await getConnection();
		sinon.stub(MongoClient, 'connect').resolves(connectionMock);
	});

  after(async () => {
    await MongoClient.connect.restore();
  });
  // /\
  
  describe('Quando não é passado um JWT para autenticação', () => {
    let response;
    const EXAMPLE_ID = '605de6ded1ff223100cd6aa1'

    before(async () => { // Nesse before não é realizada a conexão com o banco pois não há necessidade;
      response = await chai.request(server)
      .get(`/api/posts/:${EXAMPLE_ID}`)
      .set('authorization', '');
    });
    
    it('retorna código de status "404"', () => {
      expect(response).to.have.status(404);
    });
    
    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    
    it('objeto de resposta possui a propriedade "error"', () => {
      expect(response.body).to.have.property('error');
    });
    
    it('a propriedade "error" possui a mensagem "Token não encontrado ou não informado"', () => {
      expect(response.body.error).to.be.equal('Token não encontrado ou não informado');
    });
  });

  describe('Quando o id não corresponde ao token enviado', () => {
    let response;
    const EXAMPLE_CORRECT_ID = '605de6ded1ff223100cd6aa1'
    const EXAMPLE_WRONG_ID = '565de6ded1ff223100cd6aa3'

    before(async () => {
      const usersCollection = connectionMock.db('jwt_exercise').collection('users');
      await usersCollection.insertOne({
        _id: EXAMPLE_CORRECT_ID,
        username: 'user-logado',
        password: 'senha-logado'
      });
      
      const token = await chai.request(server)
      .post('/api/login')
      .send({
        username: 'user-logado',
        password: 'senha-logado'
      })
      .then((res) => res.body.message);
      
      response = await chai.request(server)
      .get(`/api/posts/${EXAMPLE_WRONG_ID}`)
      .set('authorization', token);
    });

    it('retorna código de status "401"', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto no body', () => {
        expect(response.body).to.be.an('object');
    });

    it('objeto de resposta possui a propriedade "error"', () => {
        expect(response.body).to.have.property('error');
    });

    it('a propriedade "error" possui a mensagem "Acesso negado"', () => {
        expect(response.body.error).to.be.equal('Acesso negado');
    });
  });

  describe('Caso o usuário esteja autenticado corretamente e esteja solicitando'+ 
   ' os dados de seu próprio usuário(token e id)', () => {
    let response;
    const EXAMPLE_CORRECT_ID = '605de6ded1ff223100cd6aa1'

    before(async () => {
      const usersCollection = connectionMock.db('jwt_exercise').collection('users');
      // await usersCollection.insertOne({
      //   _id: EXAMPLE_CORRECT_ID,
      //   username: 'user-logado2',
      //   password: 'senha-logado2'
      // });
      
      const token = await chai.request(server)
      .post('/api/login')
      .send({
        username: 'user-logado',
        password: 'senha-logado'
      })
      .then((res) => res.body.message);
      
      response = await chai.request(server)
      .get(`/api/posts/${EXAMPLE_CORRECT_ID}`)
      .set('authorization', token);
    });
  
    it('retorna código de status "200"', () => {
      expect(response).to.have.status(200);
    });
    
    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    
    it('objeto de resposta possui a propriedade "mockPosts"', () => {
      expect(response.body).to.have.property('mockPosts');
    });
    
    it('a propriedade "mockPosts" é um array', () => {
      expect(response.body.mockPosts).to.be.an('array');
    });
  });
});
