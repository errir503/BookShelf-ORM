module.exports = {

  development: {
    client: 'mysql',
    connection: {
        host : process.env.MYSQL_END_POINT || 'localhost',
        port : process.env.MYSQL_PORT || 3306,
        user : process.env.MYSQL_USER || 'root',
        password : process.env.MYSQL_PASSWORD || '1',
        database : process.env.MYSQL_DATABASE || 'bookshelf',
        charset : 'utf8'
    },
      pool: {
          requestTimeout: 20000,
      },
  }

};
