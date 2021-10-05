const express = require('express');
const bodyParser = require('body-parser');

// const Author = require('./controllers/author');
const cepController = require('./controllers/cep');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', cepController.findByCep);
app.post('/cep', cepController.createCep);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});