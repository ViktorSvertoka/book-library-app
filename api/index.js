const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://PowerPulse:A8y0zgINSdj0KOtI@cluster0.ebe8vko.mongodb.net';
const client = new MongoClient(url);

const app = express();

app.use(cors());

function getRandomBook(booksData) {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  return randomBook;
}

async function main() {
  await client.connect();

  const db = client.db('books');
  const collection = db.collection('books-library');

  app.get('/book', async (req, res) => {
    try {
      const booksData = await collection.find().toArray();
      const randomBook = getRandomBook(booksData);
      setTimeout(() => {
        res.json(randomBook);
      }, 2000);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Error retrieving data from the database' });
    }
  });

  console.log('Connected to database.');
}

main().catch(console.error);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
