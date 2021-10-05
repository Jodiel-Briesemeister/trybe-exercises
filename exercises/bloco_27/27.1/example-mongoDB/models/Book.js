// models/Author.js

const connection = require('./connection');
const { ObjectId } = require('mongodb');

const formatedData = (_id, title, author_id) => {
  return {
    id: _id,
    title,
    authorId: author_id
  }
}

// Busca todos os autores do banco.
const getAll = async () => {
  // return connection()
  //   .then((db) => db.collection('books').find().toArray())
  const db = await connection();
  const data = await db.collection('books').find().toArray();
  return data.map(({_id, title, author_id}) => ({
    id: _id,
    title,
    authorId: author_id,
  }));
}

const getByAuthorId = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const data = await db.collection('books').findOne(new ObjectId(id));
  if (!data) return null;
  const { _id, title, author_id } = data;
  return formatedData(_id, title, author_id)
};

const addNewBook = async (title, authorId) => {
  const db = await connection();
  const data = await db.collection('books').findOne({ author_id: parseInt(authorId) });
  if (!data) return null;
  await db.collection('books').insertOne({ title, author_id: authorId });
  return true;
};

module.exports = {
  getAll,
  getByAuthorId,
  addNewBook,
};
