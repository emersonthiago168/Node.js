const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    use: 'root',
    password: '',
    database: 'nodemysql'
});

module.exports = pool;