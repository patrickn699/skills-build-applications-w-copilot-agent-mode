import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit';

mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

import workoutsRouter from './routes/workouts';

app.get('/', (req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/workouts', workoutsRouter);

const port = Number(process.env.PORT || 8000);
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
