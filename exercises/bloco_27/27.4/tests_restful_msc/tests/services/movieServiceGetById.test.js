const { expect } = require('chai');
const MoviesModel = require('../../models/movieModel');
const movieServices = require('../../services/movieService');
const sinon = require('sinon');

describe('Busca o filme pelo id', () => {

  describe('Se o id inserido não existe no sistema', () => {

    // Código mockado - services
    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(null);
    });
  
    after(() => {
      MoviesModel.getById.restore();
    });
    //

    it('Retorna nulo', async () => {
      const movie = await movieServices.getById();

      expect(movie).to.be.equal(null);
    })
  });

  describe('Se o id existe no sistema', () => {

    // Código mockado - services
    before(() => {
      sinon.stub(MoviesModel, 'getById')
        .resolves({
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    });
  
    after(() => {
      MoviesModel.getById.restore();
    });
    //

    it('Retorna um objeto', async () => {
      const movie = await movieServices.getById();

      expect(movie).to.be.a('object')
    })

    it('O objeto possuis as propriedades id, title, releaseYear, directedBy', async () => {
      const movie = await movieServices.getById();
      expect(movie).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    })
  })
});