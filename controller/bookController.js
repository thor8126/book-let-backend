const Book = require("../models/BookSchema");

// GET /api/books - Retrieve all books from the database
module.exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the books." });
  }
};

// GET /api/books/:id - Retrieve a specific book by its ID
module.exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.json(book);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the book." });
  }
};

// POST /api/books - Create a new book in the database
module.exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the book." });
  }
};

// PUT /api/books/:id - Update an existing book by its ID
module.exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.json(book);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the book." });
  }
};

// DELETE /api/books/:id - Delete a book by its ID
module.exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.sendStatus(204);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the book." });
  }
};
