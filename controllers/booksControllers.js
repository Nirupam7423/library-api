const express= require("express")

const Book = require('../models/Books');

//  Get All Books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//  Add a New Book
exports.addNewBook = async (req, res) => {
  //added the condition in schema that each field is required
  const { title, author, genre, publishedYear, id}= req.body;
  if(!title || !author || !genre || !publishedYear || !id)
  {
    return res.status(422).json({error:"Please filled the entire fielde"});
  }
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Intern Server' });
  }
};

// Endpoint 3: Update Book Details
exports.updateBookDetails = async (req, res) => {
  
  try {
    const updatedBook = await Book.findOneAndUpdate({id: req.params.id}, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};