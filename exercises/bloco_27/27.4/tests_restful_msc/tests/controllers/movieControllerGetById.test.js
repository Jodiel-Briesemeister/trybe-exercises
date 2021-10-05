const MoviesServices = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Busca o filme pelo id', () => {
  describe('Se o filme não for encontrado', () => {

    // Código mockado
    const request = {};
    const response = {};
    
    before(async () => {
      request.body = {};
      request.params = {
        id: '604cb554311d68f491ba5781'
      };  
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getById').resolves(null);
    });
    
    after(() => {
      MoviesServices.getById.restore();
    });
    //

    it('é chamado o método "status" passando o código 404 - NOT FOUND', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.status.calledWith(404)).to.be.equal(true);
      
    });
  })

  describe('Se o filme for encontrado', () => {

    //Código mockado
    const request = {};
    const response = {};
    const movie = {
      id: '604cb554311d68f491ba5781',
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    before(async () => {
      request.params = {
        id: '604cb554311d68f491ba5781'
      };
      request.body = {};    
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getById').resolves(movie);
    });
    
    after(() => {
      MoviesServices.getById.restore();
    });
    //

    it('é chamado o método "status" passando o código 200 - OK', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});