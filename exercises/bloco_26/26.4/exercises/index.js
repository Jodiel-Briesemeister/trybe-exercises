// npm i express body-parser express-rescue
// npm i nodemon -D
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

/* Crie suas rotas aqui */

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));

// --------------------------------------------------- //

// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }


// app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

// OU

app.get('/ping', returnPong);

function returnPong(req, res) {
  res.json({ "message": "pong" });
}

// // = http://localhost:3000/ping


// --------------------------------------------------- //




// --------------------------------------------------- //

// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello ${name}!` });
});
// http POST :3000/hello name='Jodiel'

// --------------------------------------------------- //




// --------------------------------------------------- //

// Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: 
// { "name": "<nome do usuário>", "age": <idade do usuário> }.
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON:
// { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON:
// { "message": "Unauthorized" } com o status code 401 - Unauthorized.

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age) <= 17) return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json({ "message": `Hello ${name}!` });
})
// http POST :3000/greetings name='Jodiel' age='23'

// --------------------------------------------------- //



// --------------------------------------------------- //

// Crie uma rota PUT /users/:name/:age.
// Sua rota deve retornar o seguinte JSON: 
// { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})
// http PUT :3000/users/jodiel/23 name='Jodiel' age='23'

// --------------------------------------------------- //

//5

const fs = require('fs').promises;

// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK .

// app.get('/simpsons', (req, res) => {
//   const simpsons = fs.readFile(simpsons.js, 'utf-8');
//   res.status(200).json({ "message": simpsons })
// })


function getSimpsons () {
  return fs.readFile('./simpsons.js', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
};

// Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.

app.get('/simpsons', async function (req, res) {
  const allSimpsons = await getSimpsons();

  res.status(200).json(allSimpsons);
})
// http GET :3000/simpsons


// Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, 
// retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

app.get('/simpsons/:id', async function (req, res) {
  const { id } = req.params;
  const allSimpsons = await getSimpsons();
  const simpson = allSimpsons.find((obj) => obj.id === id)
  if (!simpson) return res.status(404).json({ message: 'simpson not found' })
  res.status(200).json(simpson);
})
// http GET :3000/simpsons/2



// Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: 
// { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
// Caso já exista uma personagem com o id informado, devolva o JSON:
// { message: 'id already exists' } com o status 409 - Conflict.
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json 
// e devolva um body vazio com o status 204 - No Content. 
// Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.

function createSimpson(obj) {
  return fs.writeFile('./simpsons.js', JSON.stringify(obj))
};

app.post('/simpsons', async function (req, res) {
  const { id, name } = req.body;
  const allSimpsons = await getSimpsons();
  const check = allSimpsons.find((simpson) => simpson.id === id);
  if (check) return res.status(409).json({ message: 'id already exists' });
  allSimpsons.push({id, name})
  createSimpson(allSimpsons);
  res.status(204).end();
});
// http POST :3000/simpsons id=25 name='Neymar Simpson'


