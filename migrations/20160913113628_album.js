exports.up = function(knex, Promise) {
  return knex.schema.createTable('album', function(table){
    table.increments();
    table.string('albumName');
    table.string('albumImg');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('album');
};
