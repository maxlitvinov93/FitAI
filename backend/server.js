const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for demo purposes
let trainings = [];
let meals = [];

app.post('/api/trainings', (req, res) => {
  const training = req.body;
  trainings.push(training);
  res.status(201).json(training);
});

app.get('/api/trainings', (_req, res) => {
  res.json(trainings);
});

app.post('/api/meals', (req, res) => {
  const meal = req.body;
  meals.push(meal);
  res.status(201).json(meal);
});

app.get('/api/meals', (_req, res) => {
  res.json(meals);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
