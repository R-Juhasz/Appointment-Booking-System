const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let bookings = [];

app.get('/bookings', (req, res) => {
  res.json(bookings);
});

app.post('/bookings', (req, res) => {
  const { name, date } = req.body;
  if (!name || !date) {
    return res.status(400).json({ error: 'Name and date are required' });
  }

  bookings.push({ name, date });
  res.status(201).json({ message: 'Booking added' });
});

app.listen(port, () => {
  console.log(`Booking server running at http://localhost:${port}`);
});
