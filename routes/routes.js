const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

router.get("/api/books", getAllBooks);
router.get("/api/books/:id", getBookById);
router.post("/api/books", createBook);
router.put("/api/books/:id", updateBook);
router.delete("/api/books/:id", deleteBook);

module.exports = router;
