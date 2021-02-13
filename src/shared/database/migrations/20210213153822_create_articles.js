exports.up = async knex => {
  await knex.schema.createTable('articles', table => {
    table.increments('id');
    table.string('title').notNullable();
    table.string('summary').notNullable();
    table.string('content').notNullable();
    table.integer('category_id').notNullable();
    table.integer('author_id').notNullable();

    table.foreign('category_id').references('categories.id');
    table.foreign('author_id').references('authors.id');

    table.unique('title');

    table.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('articles');
};
