'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('PortfolioShares', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            portfolioId: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            shareId: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('PortfolioShares');
    }
};