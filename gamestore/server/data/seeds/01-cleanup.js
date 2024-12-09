const { clean } = require('knex-cleaner')

exports.seed = function(knex){
    return clean(knex, {
        mode: 'truncate', //fix this file
        ignoreTables: ['knex_migrations', 'knex_migrations_lock']
    })
}