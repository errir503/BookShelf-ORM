const bookshelf = require('../Database/connection');

let AuthorBook = bookshelf.Model.extend({
    tableName : 'authors_books'
});

module.exports = bookshelf.model('AuthorBook', AuthorBook);
