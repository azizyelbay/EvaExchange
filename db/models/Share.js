'use strict';
const {DataTypes} = require('sequelize');
const sequelize = require('../../config/database');
const PortfolioShare = require('./PortfolioShare');

const Share = sequelize.define('Share', {
    symbol: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            min: 3,
            max: 3
        }
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
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
Share.hasMany(PortfolioShare, {foreignKey: "shareId", onDelete: 'RESTRICT'});
module.exports = Share;