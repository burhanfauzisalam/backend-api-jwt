const config = require('../config/db.config.js')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false
    }

)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.parents = require('./parents.model.js')(sequelize, Sequelize)

module.exports = db