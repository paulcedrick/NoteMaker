
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (t) {
    t.increments('id').unsigned().primary();
    t.string('firstname').notNull();
    t.string('lastname').notNull();
    t.string('email').notNull().unique();
    t.string('username').notNull().unique();
    t.string('password').notNull();
    t.string('salt').notNull();

    t.dateTime('created_at').notNull();
    t.dateTime('updated_at').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
