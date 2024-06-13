'use strict';
const {DataTypes} = require('sequelize');
const sequelize = require('../../config/database');

const PortfolioShare = sequelize.define('PortfolioShare', {
    portfolioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    shareId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});
module.exports = PortfolioShare