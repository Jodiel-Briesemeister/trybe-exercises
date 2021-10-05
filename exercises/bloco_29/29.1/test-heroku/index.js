const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const msg = process.env.MESSAGE || 'Está vivo!!'

app.get('/', (_req, res) => {
  res.send(msg)
});

app.listen(port);
console.log(`Escutando na porta ${port}`);