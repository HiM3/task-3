const express = require("express");
const crypto = require("crypto");
const app = express();
const PORT = 3000;

let books = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Add a new book
app.post("/api/books", (req, res) => {
  const { title, author, price, category } = req.body;

  if (!title || !author || !price || !category) {
    return res.status(400).json({
      success: false,
      message: "All fields (title, author, price, category) are required",
    });
  }

  const newBook = {
    id: crypto.randomUUID(),
    title,
    author,
    price,
    category,
  };

  books.push(newBook);
  res.json({ success: true, message: "Book added successfully", book: newBook });
});

//Get all books
app.get("/api/books", (req, res) => {
  res.json({ success: true, books });
});

//Get a specific book
app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }

  res.json({ success: true, book });
});

//Update a book
app.put("/api/books", (req, res) => {
  const { id } = req.query;
  const { title, author, price, category } = req.body;

  const index = books.findIndex((b) => b.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }

  books[index] = { id, title, author, price, category };
  res.json({ success: true, message: "Book updated successfully", book: books[index] });
});

//Delete a book
app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const exists = books.find((b) => b.id === id);

  if (!exists) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }

  books = books.filter((b) => b.id !== id);
  res.json({ success: true, message: "Book deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`📚 Bookstore API running at http://localhost:${PORT}/api/books`);
});