
exports.up = async function(knex) {
  await knex.schema
  .createTable('consoles', table => {
    table.increments('console_id')
    table.string('console_name', 200).notNullable().unique()
    table.string('console_price', 200).notNullable()
    table.string('console_img', 200).notNullable()
    table.string('console_type', 200).notNullable()
  })
  .createTable('games', table => {
    table.increments('game_id')
    table.string('game_name', 200).notNullable().unique()
  })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('games')  
  .dropTableIfExists('consoles')
};
