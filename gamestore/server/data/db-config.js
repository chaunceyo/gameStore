const knex = require('knex')
const configurations = require('../knexfile')
const environment = process.env.NODE_ENV // || 'development' if NODE_ENV isn not in .env

module.exports = knex(configurations[environment])