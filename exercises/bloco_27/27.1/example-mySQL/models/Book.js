const connection = require('./connection');

const serialize = ({id, title, author_id}) => ({
  id, title, authorId: author_id
});

const getAll = async () => {
  const [books] = await connection.execute(
      'SELECT * FROM model_example.books;'
  );
  return books.map(serialize);
};

const getByAuthorId = async (id) => {
  const query = 'SELECT title FROM model_example.books WHERE author_id = ?';
  const [books] = await connection.execute(query, [id]);
  if (books.length === 0) return null
  return books.map(serialize);
};

const addNewBook = async (title, id) => {
  if (!title || !id || title.length < 3) return false;
  const check = await getByAuthorId(id);
  if (!check) return false;
  await connection.execute(
    'INSERT INTO model_example.books(title, author_id) VALUES(?,?);',
    [title, id]
  );
  return true;
};

module.exports = {
  getAll,
  getByAuthorId,
  addNewBook,
};