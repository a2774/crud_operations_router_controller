const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  pages: {
    type: Number
  },
  publisher: {
    type: String
  },
  language: {
    type: String
  }
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
