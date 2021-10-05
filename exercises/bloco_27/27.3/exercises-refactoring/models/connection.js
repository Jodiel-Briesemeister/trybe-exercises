const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: 'trybe', // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: 'trybe12345', // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: 'rest_exercicios'});

module.exports = connection;

// VERSÃO EM MONGO DB \/

// const mongoClient = require('mongodb').MongoClient;

// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

// const connection = () => {
//   return mongoClient
//     .connect(MONGO_DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((conn) => conn.db('rest_exercicios'))
//     .catch((err) => {
//       console.error(err);
//       process.exit(1);
//    });
// };

// module.exports = connection;