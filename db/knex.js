const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[envinroment]
const knex = require('knex')config()

module.exports = knex 
