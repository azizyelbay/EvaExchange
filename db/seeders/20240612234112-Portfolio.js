'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:

    */
    await queryInterface.bulkInsert('Portfolios', [{
      name: 'Portfolio1',
      userId: 1,
      amount: 20000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Portfolio2',
      userId: 2,
      amount: 20000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Portfolio3',
      userId: 3,
      amount: 20000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Portfolio4',
      userId: 4,
      amount: 20000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Portfolio5',
      userId: 5,
      amount: 20000,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
