'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Livro 1',
        author: 'Autor 1',
        pageQuantity: 350,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        // updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Livro 2',
        author: 'Autor 2',
        pageQuantity: 435,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        // updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};