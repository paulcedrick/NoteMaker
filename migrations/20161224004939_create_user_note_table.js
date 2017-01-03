
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_note', function (t) {
    t.increments('id').unsigned().primary();
    t.integer('user_id').unsigned();
    t.foreign('user_id').references('users.id');
    t.integer('note_id').unsigned();
    t.foreign('note_id').references('notes.id');
  });
};

exports.down = function(knex, Promise) {

};
