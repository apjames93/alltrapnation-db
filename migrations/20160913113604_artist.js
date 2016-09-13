exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', function(table){
    table.increments();
    table.string('artistName');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('artist');
};
