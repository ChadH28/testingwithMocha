// const environment = process.env.NODE_ENV || 'development'
// const config = require('../knexfile') 
// const enrvironmentConfig = config[environment]
// const knex = require('./knex')
// const connection = knex(enrvironmentConfig)

const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment];
const connection = require('knex')(config);
module.exports = connection
