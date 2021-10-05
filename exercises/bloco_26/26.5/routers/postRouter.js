const router = require('express').Router();
// const { isValidId } = require('../middlewares.js/validations');

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

router.get('/', (_req, res) => res.status(200).json({ posts }));

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const author = posts.find((obj) => obj.id === parseInt(id));
  if (!author) return res.status(404).json({ "message": "post not found" });

  res.status(200).json(author);
});

module.exports = router;