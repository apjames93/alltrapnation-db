exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
                    username: 'guest',
                    password: '$2a$08$hz1l.K5FG9L4jOsBMEs.f.Toasi1egQIi9AjFNAxVDmVbXrs4Htae'
                    }),
      ]);
    });
};
