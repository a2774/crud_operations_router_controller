const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Get all books
router.get('/books', bookController.getAllBooks);

// Get book details by ID
router.get('/books/:id', bookController.getBookById);

// Create a new book
router.post('/books', bookController.createBook);

// Update book data by ID
router.patch('/books/:id', bookController.updateBookById);

// Delete book by ID
router.delete('/books/:id', bookController.deleteBookById);

module.exports = router;
