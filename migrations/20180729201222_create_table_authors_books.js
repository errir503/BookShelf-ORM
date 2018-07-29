exports.up = function(knex) {
    return knex.schema.createTable('authors_books', function(table) {
        table.increments('id').primary();
        table.integer('author_id').unsigned().references('id').inTable('authors').onDelete('CASCADE').onUpdate('CASCADE');
        table.integer('book_id').unsigned().references('id').inTable('books').onDelete('CASCADE').onDelete('CASCADE');
    });
};

exports.down = function(knex ){
    return knex.schema.dropTable('authors_books');
};
