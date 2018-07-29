const bookshelf = require('../Database/connection');
const Book = require('./Book');
const AuthorBook = require('./AuthorBook');

let Author = bookshelf.Model.extend({
    tableName : 'authors',
    books : function () {
        return this.belongsToMany(Book).through(AuthorBook);
    }
});

module.exports = Author;
