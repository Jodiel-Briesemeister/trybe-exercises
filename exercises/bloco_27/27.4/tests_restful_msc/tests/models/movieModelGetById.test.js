const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

const { ObjectId } = require('mongodb');

describe('Busca o filme pelo id', () => {
  // Código padrão, DB Mockada (memoryServer)
  let connectionMock; 
  const DBServer = new MongoMemoryServer();
  
  before(async () => {
    const URLMock = await DBServer.getUri();  
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'));
    
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });
  
  after(() => {
    mongoConnection.getConnection.restore();
  })
  // 

  describe('Quando existe um filme com o id inserido', () => {
    const expectedMovie = {
      _id: ObjectId('5e63c3a5e4232e4cd0274ac2'),
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    
    before(async () => {
      await connectionMock.collection('movies').insertOne({ ...expectedMovie });
    }); 
    
    after(async () => {
      await connectionMock.collection('movies').drop();
    });

    it('retorna um objeto', async () => {
      const movies = await MoviesModel.getById(expectedMovie._id);
      expect(movies).to.be.a('object');
    });

    it('o objeto possui as propriedades _id, title, releaseYear e directedBy', async () => {
      const movies = await MoviesModel.getById(expectedMovie._id);
      expect(movies).to.include.all.keys('_id', 'title', 'releaseYear', 'directedBy');
    });
  });

  describe('Quando não existe um filme com o id inserido', () => {
    const invalidId = ObjectId('709cb554311d68f491ba5780')

    it('retorna nulo', async () => {
      const movies = await MoviesModel.getById(invalidId);
      expect(movies).to.be.equal(null);
    });
  });

});
