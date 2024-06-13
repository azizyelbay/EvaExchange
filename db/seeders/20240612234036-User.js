'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:

         */
        await queryInterface.bulkInsert('Users', [{
            firstName: 'TESTNAME1',
            lastName: 'TESTLASTNAME1',
            email: 'TESTNAME1@hotmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            firstName: 'TESTNAME2',
            lastName: 'TESTLASTNAME2',
            email: 'TESTNAME2@hotmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            firstName: 'TESTNAME3',
            lastName: 'TESTLASTNAME3',
            email: 'TESTNAME3@hotmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            firstName: 'TESTNAME4',
            lastName: 'TESTLASTNAME4',
            email: 'TESTNAME4@hotmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            firstName: 'TESTNAME5',
            lastName: 'TESTLASTNAME5',
            email: 'TESTNAME5@hotmail.com',
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
