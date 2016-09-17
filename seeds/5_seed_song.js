
exports.seed = function(knex, Promise) {
  return knex('song').del()
    .then(function () {
      return Promise.all([
        knex('song').insert({songName: 'Kat Kennedy song' , albums_id: 1}),
        knex('song').insert({songName: 'Jordan Comolli song' , albums_id: 2}),
        knex('song').insert({songName: 'James Meyers song' , albums_id: 3}),
        knex('song').insert({songName: 'JTakeOff song' , albums_id: 4}),
        knex('song').insert({songName: 'JAEGER Meric song' , albums_id: 5}),
        knex('song').insert({songName: 'MickeyValen' , albums_id: 6}),
        knex('song').insert({songName: 'Kat Kennedy song 2' , albums_id: 7}),
        knex('song').insert({songName: 'Jordan Comolli song 2' , albums_id: 8}),
        knex('song').insert({songName: 'James Meyers song 2' , albums_id: 9}),
        knex('song').insert({songName: 'JTakeOff song 2' , albums_id: 10}),
        knex('song').insert({songName: 'JAEGER Meric song 2' , albums_id: 11}),
        knex('song').insert({songName: 'MickeyValen' , albums_id: 12}),

      ]);
    });
};
