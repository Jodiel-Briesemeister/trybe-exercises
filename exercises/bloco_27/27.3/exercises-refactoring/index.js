// Comandos -> INICIANDO UM PROJETO:
// npm init -y
// npm install mysql2 nodemon body-parser express
// Adicionar ao package.json em scripts: "debug": "nodemon index.js"

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});