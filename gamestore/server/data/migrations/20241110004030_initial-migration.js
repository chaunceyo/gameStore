
exports.up = async function(knex) {
  await knex.schema
  .createTable('consoles', table => {
    table.increments('console_id')
    table.string('console_name', 200).notNullable().unique()
    table.integer('console_price', 200).notNullable()
    table.string('console_img', 200).notNullable()
    table.string('console_type', 200).notNullable()
  })
  .createTable('games', table => {
    table.increments('game_id')
    table.string('game_name', 200).notNullable().unique()
    table.integer('game_price', 200).notNullable()
    table.string('game_img', 200).notNullable()
    table.string('game_gif', 200).notNullable()
    table.string('console_type', 200)
        .notNullable()
        .references('console_type')
        .inTable('consoles')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('games')  
  .dropTableIfExists('consoles')
};
