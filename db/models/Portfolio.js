'use strict';
const {DataTypes} = require('sequelize');
const sequelize = require('../../config/database');
const PortfolioShare = require('./PortfolioShare');
const User = require('./User');

const Portfolio = sequelize.define('Portfolio', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});
Portfolio.belongsTo(User, {foreignKey: 'userId'});
Portfolio.hasMany(PortfolioShare, {foreignKey: "portfolioId", onDelete: 'RESTRICT'});
module.exports = Portfolio;