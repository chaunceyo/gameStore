
exports.up = async function(knex) {
  await knex.schema
  .createTable('consoles', table => {
    table.increments()
  })
  .createTable('games', table => {
    table.increments()
  })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('games')  
  .dropTableIfExists('consoles')
};
