
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('artist').insert({ artistName: 'Kat Kennedy' , artistimg: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/14329944_1511058505586662_8284670640721050505_n.jpg?oh=842c52a780b50ac23dab98631ee842c1&oe=5884094D'}),
        knex('artist').insert({ artistName: 'Jordan Comolli' , artistimg: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/14316941_1511058818919964_644082812982683306_n.jpg?oh=1d2f2bb940caae6f75475c6154928108&oe=5843C34A'}),
        knex('artist').insert({ artistName: 'James Meyers' , artistimg: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/14333043_1511058918919954_4994018078686014150_n.jpg?oh=3dad873bc8c9a9093326f0f79de012f2&oe=583C670A'}),
        knex('artist').insert({ artistName: 'JTakeOff' , artistimg: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/14316733_1511059275586585_4462761830743247795_n.jpg?oh=4fd3582411b461344dd4b1a11bcd573c&oe=5846EA94'}),
        knex('artist').insert({ artistName: 'JAEGER Meric' , artistimg: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/14359176_1511059445586568_5332567360321618446_n.jpg?oh=1bc65612b5186e349e1b821f0330293e&oe=587B3812'}),
        knex('artist').insert({ artistName: 'MickeyValen' , artistimg: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/14291732_1511059938919852_7039530462556351860_n.jpg?oh=cbb08bc1838f24b224250395777e4f0c&oe=583D9140'})
      ]);
    });
};
