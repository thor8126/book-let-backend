const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  publicationDate: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  publisher: {
    type: String,
  },
  ISBN: {
    type: String,
  },
  pageCount: {
    type: Number,
  },
  language: {
    type: String,
  },
  coverImage: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
