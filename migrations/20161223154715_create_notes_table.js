
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function (t) {
      t.increments('id').unsigned().primary();
      t.string('title').notNull();
      t.text('body').notNull();

      t.dateTime('created_at').notNull();
      t.dateTime('updated_at').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
