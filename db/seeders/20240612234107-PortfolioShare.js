'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:

    */
    await queryInterface.bulkInsert('PortfolioShares', [{
      portfolioId: 1,
      shareId: 1,
      quantity: 1500,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: 2,
      shareId: 2,
      quantity: 1500,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: 3,
      shareId: 3,
      quantity: 1500,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: 4,
      shareId: 4,
      quantity: 1500,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      portfolioId: 5,
      shareId: 5,
      quantity: 1500,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
