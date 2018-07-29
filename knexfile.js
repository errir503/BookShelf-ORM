module.exports = {

  development: {
    client: 'mysql',
    connection: {
        host : process.env.MYSQL_END_POINT,
        port : process.env.MYSQL_PORT,
        user : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE,
        charset : 'utf8'
    },
      pool: {
          requestTimeout: 20000,
      },
  }

};
