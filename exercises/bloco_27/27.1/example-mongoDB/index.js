// npm install mongodb

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
    const books = await Book.getAll();

    res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Book.getByAuthorId(id);

  if (!books) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;
  const create = await Book.addNewBook(title, authorId);

  if (!create) return res.status(400).json({ message: 'Dados inválidos' });
  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});