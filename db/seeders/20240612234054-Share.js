'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:

         */
        await queryInterface.bulkInsert('Shares', [{
            symbol: 'XAU',
            quantity: 2000,
            price: 150.16,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            symbol: 'SOL',
            quantity: 2000,
            price: 150.16,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            symbol: 'ETH',
            quantity: 2000,
            price: 150.16,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            symbol: 'XAI',
            quantity: 2000,
            price: 150.16,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            symbol: 'KDA',
            quantity: 2000,
            price: 150.16,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
