exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE users, artist_album, song, album,artist RESTART IDENTITY CASCADE")
  .then(function(){
    return knex('users').del();
  })

  .then(function(){
    return knex('artist_album').del();
  })
  .then(function(){
    return knex('song').del();
  })
  .then(function(){
    return knex('album').del();
  })
  .then(function(){
    return knex('artist').del();
  });

};
