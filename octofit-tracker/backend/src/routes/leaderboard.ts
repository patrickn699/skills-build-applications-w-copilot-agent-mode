import { Router } from 'express';
import Leaderboard from '../models/Leaderboard';

const router = Router();

router.get('/', async (req, res) => {
  const leaderboard = await Leaderboard.find()
    .sort({ rank: 1 })
    .populate('team', 'name score');
  res.json(leaderboard);
});

export default router;
