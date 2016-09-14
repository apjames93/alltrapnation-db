
exports.seed = function(knex, Promise) {
  return knex('artist_album').del()
    .then(function () {
      return Promise.all([
        knex('artist_album').insert({artist_id: 1 , album_id: 1}),
        knex('artist_album').insert({artist_id: 2 , album_id: 2}),
        knex('artist_album').insert({artist_id: 3 , album_id: 3}),
        knex('artist_album').insert({artist_id: 4 , album_id: 4}),
        knex('artist_album').insert({artist_id: 5 , album_id: 5}),
        knex('artist_album').insert({artist_id: 6 , album_id: 6}),
        knex('artist_album').insert({artist_id: 1 , album_id: 7})
      ]);
    });
};
