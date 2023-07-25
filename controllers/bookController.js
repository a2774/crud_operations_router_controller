const Book = require('../modules/bookModule');

// Get all books
async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send('Error: ' + err);
  }
}

// Get book details by ID
async function getBookById(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).send('Error: ' + err);
  }
}

// Create a new book
async function createBook(req, res) {
  const { title, author, pages, publisher, language } = req.body;
  const book = new Book({ title, author, pages, publisher, language });

  try {
    const newBook = await book.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).send('Error: ' + err);
  }
}

// Update book data by ID
async function updateBookById(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    book.set(req.body);
    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(500).send('Error: ' + err);
  }
}

// Delete book by ID
async function deleteBookById(req, res) {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    res.json({ message: 'Book deleted successfully.' });
  } catch (err) {
    res.status(500).send('Error: ' + err);
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
