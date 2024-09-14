const express = require('express');
const cors = require('cors');
const booksData = require('./data/books.json'); // Import the book data

const app = express();

app.use(cors());

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  return randomBook;
}

app.get('/random-book', (req, res) => {
  res.json(getRandomBook()); // http://localhost:4000/random-book
});

app.get('/random-book-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRandomBook()); // http://localhost:4000/random-book-delayed
  }, 2000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
