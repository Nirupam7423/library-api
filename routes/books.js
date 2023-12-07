const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksControllers');

//  Retrieve All Books
router.get('/api/books', booksController.getAllBooks);

//  Add a New Book
router.post('/api/books', booksController.addNewBook);

//  Update Book Details
router.put('/api/books/:id', booksController.updateBookDetails);

module.exports = router;
