const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'DB_USER',
  password: 'DB_PASSWORD',
  database: 'DB_NAME',
  charset: 'utf8mb4_unicode_ci',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log('INFO: Mysql database is connected!');
});

module.exports = connection;
