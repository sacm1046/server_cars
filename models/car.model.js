const Sequelize = require('sequelize')
const { sequelize } = require('../database/database')

const CarModel = sequelize.define('cars', {
    model: {
        type: Sequelize.TEXT
    },
    year: {
        type: Sequelize.INTEGER
    },
    brand: {
        type: Sequelize.TEXT
    },
}, {
    timestamps: false
})

module.exports = CarModel;