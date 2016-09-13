
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('artist').insert({ artistName: 'Kat Kennedy'}),
        knex('artist').insert({ artistName: 'Jordan Comolli'}),
        knex('artist').insert({ artistName: 'James Meyers'}),
        knex('artist').insert({ artistName: 'JTakeOff'}),
        knex('artist').insert({ artistName: 'JAEGER Meric'}),
        knex('artist').insert({ artistName: 'MickeyValen'})
      ]);
    });
};
