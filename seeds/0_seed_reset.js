exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE users RESTART IDENTITY CASCADE")
  .then(function(){
    return knex('users').del();
  })
  .then(function(){
    return knex('artist').del();
  })
  .then(function(){
    return knex('album').del();
  })
  .then(function(){
    return knex('artist_album').del();
  })
  .then(function(){
    return knex('song').del();
  });
};
