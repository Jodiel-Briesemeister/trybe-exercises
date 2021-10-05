const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.send(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.send(404).json({ message: 'Produto não encontrado' })

  res.send(200).json(product);
});

router.post('/', async (req, res) => {
  try{
    const { name, brand } = req.body;
    const newProduct = await ProductModel.add(name, brand);
    res.send(200).json(newProduct);
  }
  catch(error) {
      res.send(500).json({ message: error });
  }
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (!products) return res.send(404).json({ message: 'Produto não encontrado' })

  res.send(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
  const products = await ProductModel.update(req.params.id, name, brand);

//   if (!products) return res.send(404).json({ message: 'Produto não encontrado' });

  res.send(products);
  } 
  catch(err) {
      res.send(500).json({ message: 'Algo deu errado'});
  }
});

module.exports = router;