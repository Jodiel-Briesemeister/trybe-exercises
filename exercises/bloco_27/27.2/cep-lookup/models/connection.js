const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'trybe',
    password: 'trybe12345',
    database: 'cep_lookup' });

module.exports = connection;