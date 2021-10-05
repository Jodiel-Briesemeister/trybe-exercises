require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); //
const fs = require('fs'); //
const path = require('path'); //

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

// Exercises

// Usaremos o 'fs' pois teremos que fazer a leitura de todos os arquivos do diretório.

const fileExists = (fileName) => {
  // fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta uploads.
  const files = fs.readdirSync(`${__dirname}/uploads`);

  // Aqui usamos a função some, que retorna `true` se algum dos items do array passar no teste, no nosso caso o `file.includes`.
  return files.some((file) => file.split('-')[1] === fileName);
  // split de 1631909684057-imagemPNGTeste.png -> imagemPNGTeste.png
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    // Colocar uma mensagem de erro na requisição
    req.fileValidationError = true;

    // Rejeitar o arquivo
    return cb(null, false);
  }

  // console.log(file.originalname);
  // console.log(fileExists(`${Date.now()}-${file.originalname}`));

  if (fileExists(file.originalname)) {
    // Colocar uma flag de erro na requisição
    req.fileDuplicated = true;

    // Rejeitar o arquivo
    return cb(null, false);
  }
  // Aceitar o arquivo
  cb(null, true);
};

const storage = multer.diskStorage({ // serve como middleware do multer
  destination: (_req, _file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`); // altera o nome do arquivo salvo
  },
});

const upload = multer({ storage, fileFilter });

// app.use(express.static(`${__dirname}/uploads`));
app.use(express.static(path.join(__dirname, 'uploads'))); // Torna a pasta uploads pública;

app.post('/upload', upload.single('file'), controllers.upload);

//

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
