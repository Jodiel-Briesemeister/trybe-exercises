const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const test = process.env.ENVIRONMENT || 'Deu ruim';

//  pm2 start ecosystem.config.yml --env prod
//  pm2 start ecosystem.config.yml --env homolog

app.get('/', (_req, res) => {
  res.send(test)
});

app.listen(port);
console.log(`Escutando na porta ${port}`);