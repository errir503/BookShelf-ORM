
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('authors').insert([
        { name: 'author 1'},
        { name: 'author 2'},
        { name: 'author 3'},
        { name: 'author 4'},
        { name: 'author 5'},
        { name: 'author 6'},
      ]);
};
