const mongoConnection = require('./connection');

const getAll = async () => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
    title, 
    directedBy, 
    releaseYear
  };
};

const { ObjectId } = require('mongodb');

const getById = async (id) => {

  if(!ObjectId.isValid(id)) return null;

  const db = await mongoConnection.getConnection();
  const result = await db.collection('movies').findOne(ObjectId(id));
  if(!result) return null;

  return result;
};

module.exports = {
  create,
  getAll,
  getById,
};