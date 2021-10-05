const connection = require('./connection');

const findByCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE CEP = ?';
  const [result] = await connection.execute(query, [cep]);
  if (!result || !result.length) return null;
  return result;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  return {cep, logradouro, bairro, localidade, uf};
};

module.exports = {
  findByCep,
  createCep,
}