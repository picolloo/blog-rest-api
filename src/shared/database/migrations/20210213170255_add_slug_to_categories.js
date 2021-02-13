exports.up = async function (knex) {
  await knex.schema.table('categories', table => {
    table.string('slug').notNullable();
    table.unique('slug');
  });
};

exports.down = async function (knex) {
  await knex.schema.table('categories', table => {
    table.dropColumn('slug');
  });
};
