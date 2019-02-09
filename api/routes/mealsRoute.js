import express from 'express';
import MealsSerivce from '../services/MealsService';

const mealsService = new MealsSerivce();

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).send(mealsService.getAll());
});

router.get('/:id', (req, res) => {
  res.status(200).send(mealsService.get(req.params.id));
});

export default router;
