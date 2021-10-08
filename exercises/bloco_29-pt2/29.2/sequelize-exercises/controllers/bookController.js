const { Book } = require('../models');

const getBooks = async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
  };
}

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    return res.status(200).json(book);
  } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
  };
}

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await Book.findByPk(id);
    await bookToDelete.destroy();

    return res.status(200).json(bookToDelete);
  } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
  };
}

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, createdAt } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity, createdAt });

    return res.status(201).json(newBook);
  } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
  };
};

const editBookById = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } =  req.params;

    const result = await Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    res.status(200);
    res.json(result);
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getBooks,
  getBookById,
  deleteBookById,
  createBook,
  editBookById,
};
