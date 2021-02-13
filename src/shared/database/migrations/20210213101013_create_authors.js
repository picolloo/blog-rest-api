exports.up = async knex => {
  await knex.schema.createTable('authors', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('picture');
    table.unique('name');

    table.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('authors');
};
