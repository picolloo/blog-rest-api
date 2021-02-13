exports.up = async knex => {
  await knex.schema.createTable('categories', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.unique('name');

    table.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('categories');
};
