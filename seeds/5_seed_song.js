
exports.seed = function(knex, Promise) {
  return knex('song').del()
    .then(function () {
      return Promise.all([
        knex('song').insert({songtName: 'Kat Kennedy song' , album_id: 1}),
        knex('song').insert({songtName: 'Jordan Comolli song' , album_id: 2}),
        knex('song').insert({songtName: 'James Meyers song' , album_id: 3}),
        knex('song').insert({songtName: 'JTakeOff song' , album_id: 4}),
        knex('song').insert({songtName: 'JAEGER Meric song' , album_id: 5}),
        knex('song').insert({songtName: 'MickeyValen' , album_id: 6}),

      ]);
    });
};
