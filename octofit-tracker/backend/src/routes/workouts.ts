import { Router } from 'express';
import Workout from '../models/Workout';

const router = Router();

router.get('/', async (req, res) => {
  const workouts = await Workout.find().sort({ createdAt: -1 });
  res.json(workouts);
});

router.post('/', async (req, res) => {
  const workout = new Workout(req.body);
  await workout.save();
  res.status(201).json(workout);
});

export default router;
