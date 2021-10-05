/* index.js */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const cors = require('cors');

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

function compare(a, b) {
  if (a.name < b.name){
    return -1;
  }
  if (a.name > b.name){
    return 1;
  }
  return 0;
}

// Rota padrão de recipes
app.get('/recipes', function (req, res) {
  res.json(recipes.sort(compare));
});

// Rota de filtro (obs: Rota de filtro são prioridade
// e nunca devem ser declarados abaixo de pesquisas de rota (:))
// Exemplo url com 2 filtros: http://localhost:3001/recipes/search?name=Lasanha&maxPrice=50
// Exemplo url com 3 filtros: http://localhost:3001/recipes/search?name=Lasanha&maxPrice=50&minPrice=40
// Exemplo comando via terminal(HTTPie): http :3001/recipes/search name==Macarrão maxPrice==40 minPrice==20
app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => { 
    return r.name.includes(name) && r.price <= parseInt(maxPrice) 
    && r.price >= parseInt(minPrice);
  });
  res.status(200).json(filteredRecipes);
});

// Pesquisa de rota (:) (em recipes)
// Ex: http://localhost:3001/drinks/search?name=Refrigerante%20Lata&maxPrice=50&minPrice=1
app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// Rota padrão de drinks
app.get('/drinks', function (req, res) {
  res.json(drinks.sort(compare));
});

// Rota de filtros em drinks
app.get('/drinks/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredDrinks = drinks.filter((r) => { 
    return r.name.includes(name) && r.price < parseInt(maxPrice) 
    && r.price >= parseInt(minPrice);
  });
  res.status(200).json(filteredDrinks);
});

// Pesquisa de rota (:) (em drinks)
app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

//
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// Método post (recipes)-> Criação de novas receitas que deve receber (id, name, price, waitTime);
app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// Método post (recipes)-> Criação de novas receitas que deve receber (id, name e price);
app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Drink created successfully!'});
});

// Método post onde há necessidade de um token;
// app.get('/validateToken', function (req, res) {
//   const { id, nome, preco } = req.body;
//   const token = req.headers.authorization;
//   if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

//   // recipes.push({ id, nome, preco});
//   res.status(200).json({message: 'Valid Token!'})
// });
// http :3001/validateToken Authorization:abc # vai devolver token inválido
// http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido


// Exemplo de dados inseridos via Fetch:

// fetch(`http://localhost:3001/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     title: 'Macarrão com Frango',
//     price: 30
//   })
// });

// Exemplo de dados inseridos (recipes) via terminal (HTTPie)
// http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30
// http POST :3001/recipes id:=5 name='Macarrão Test' price:=30 waitTime:=15

// Ex em drinks:
// http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30

// Método PUT (Update/Edit) (Nesse caso atualiza/edita os campos id, name e price de recipes)
app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});
// Editando o item da url recipes/2 (ou seja o item com id=2);
// http PUT :3001/recipes/2 name='Macarrão ao alho e óleo' price:=40

// Método DELETE (remove uma receita pelo id)
app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});
// Removendo a receita de id 3 (Comando via terminal HTTPie);
// http DELETE :3001/recipes/3

// Menssagem de tratamento GLOBAL, OBS: Colocar sempre no final do arquivo.
app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});