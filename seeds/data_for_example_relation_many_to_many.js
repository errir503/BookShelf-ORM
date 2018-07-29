
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('books').insert([
        { name : 'Book 1'},
        { name : 'Book 2'},
        { name : 'Book 3'},
        { name : 'Book 4'},
        { name : 'Book 5'},
        { name : 'Book 6'},
      ]);
};
