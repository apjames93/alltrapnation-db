exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', function(table){
    table.increments();
    table.string('artistName');
    table.string('artistimg');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('artist');
};
