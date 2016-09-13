exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist_album', function(table){
    table.increments();
    table.integer('artist_id').references('artist.id'); table.integer('album_id').references('album.id');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('artist_album');
};
