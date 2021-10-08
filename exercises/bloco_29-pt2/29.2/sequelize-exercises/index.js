const express = require('express');
const bodyParser = require("body-parser");

const bookController = require('./controllers/bookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/book', bookController.getBooks);
app.get('/book/:id', bookController.getBookById);
app.delete('/book/:id', bookController.deleteBookById);
app.post('/book', bookController.createBook);
app.put('/book/:id', bookController.editBookById);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;
