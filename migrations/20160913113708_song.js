exports.up = function(knex, Promise) {
  return knex.schema.createTable('song', function(table){
    table.increments();
    table.string('songName');
     table.integer('albums_id').references('album.id');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('song');
};
