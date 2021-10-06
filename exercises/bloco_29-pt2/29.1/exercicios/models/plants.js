const connect = require('./connection');

const getPlants = async () => {
  const db = await connect();
  const result = db.collection('plants').find();
  return result
};

module.exports = {
  getPlants,
}