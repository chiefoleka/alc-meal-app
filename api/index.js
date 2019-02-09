import express from 'express';
import MealsSerivce from './services/MealsService';

// Set up the express app
const app = express();
const mealsService = new MealsSerivce()

app.get('/api/v1/meals', (req, res) => {
  res.status(200).send(mealsService.getAll());
});

app.get('/api/v1/meals/:id', (req, res) => {
  res.status(200).send(mealsService.get(req.params.id));
});

const PORT = 8080;
app.listen(PORT);
