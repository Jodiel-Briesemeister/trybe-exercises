const express = require('express');
const bodyParser = require('body-parser');
const plantsFunctions = require('./plants');

const app = express();
app.use(bodyParser.json());

app.get("/plants", (_req, res) => {
  const plants = plantsFunctions.getPlants();
  res.send(plants);
});

app.get('/plant/:id', (req, res )=> {
  const { id } = req.params;
  const plant = plantsFunctions.getPlantById(id);
  res.send(plant);
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsFunctions.removePlantById(id);
  res.send(plant);
});

app.put('/plant/:id', (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = plantsFunctions.editPlant(id, newPlant);
  res.send(plant);
});

app.post('/plant/:id', (req, res) => {
  const newPlant = req.body.plant;
  const plant = plantsFunctions.createNewPlant(newPlant);
  res.send(plant);
});

app.post('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsFunctions.getPlantsThatNeedsSunWithId(id);
  res.send(plant);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});