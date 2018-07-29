const bookshelf = require('../Database/connection');
const Author = require('./Author');
const AuthorBook = require('./AuthorBook');


let Book = bookshelf.Model.extend({
   tableName : 'books',
   authors : function () {
       return this.belongsToMany(Author).through(AuthorBook);
   }
});

module.exports = bookshelf.model('Book', Book);
