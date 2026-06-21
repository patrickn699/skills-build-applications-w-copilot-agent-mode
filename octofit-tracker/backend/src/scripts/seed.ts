import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import Workout from '../models/Workout';
import Leaderboard from '../models/Leaderboard';

// Seed the octofit_db database with test data
async function main() {
  const mongoUri = 'mongodb://127.0.0.1:27017/octofit_db';
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB at', mongoUri);

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Workout.deleteMany({}),
    Leaderboard.deleteMany({}),
  ]);

  console.log('Cleared existing data');

  const users = await User.create([
    { name: 'Ava Martinez', email: 'ava@octofit.com', role: 'user' },
    { name: 'Noah Kim', email: 'noah@octofit.com', role: 'coach' },
    { name: 'Mia Patel', email: 'mia@octofit.com', role: 'user' },
  ]);

  const teams = await Team.create([
    { name: 'Octo Sprinters', members: [users[0]._id, users[2]._id], score: 820 },
    { name: 'Aqua Chasers', members: [users[1]._id], score: 740 },
  ]);

  const activities = await Activity.create([
    {
      user: users[0]._id,
      type: 'Run',
      durationMinutes: 35,
      caloriesBurned: 320,
      happenedAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
    },
    {
      user: users[2]._id,
      type: 'Yoga',
      durationMinutes: 45,
      caloriesBurned: 200,
      happenedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
    {
      user: users[1]._id,
      type: 'Swim',
      durationMinutes: 50,
      caloriesBurned: 450,
      happenedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
  ]);

  const workouts = await Workout.create([
    { title: 'Upper Body Strength', durationMinutes: 40, caloriesBurned: 380 },
    { title: 'Morning Cardio Blast', durationMinutes: 30, caloriesBurned: 290 },
    { title: 'Recovery Stretch', durationMinutes: 25, caloriesBurned: 110 },
  ]);

  const leaderboardEntries = await Leaderboard.create([
    { team: teams[0]._id, rank: 1, points: 820 },
    { team: teams[1]._id, rank: 2, points: 740 },
  ]);

  console.log('Inserted sample users:', users.length);
  console.log('Inserted sample teams:', teams.length);
  console.log('Inserted sample activities:', activities.length);
  console.log('Inserted sample workouts:', workouts.length);
  console.log('Inserted leaderboard entries:', leaderboardEntries.length);

  await mongoose.disconnect();
  console.log('Seed complete. Disconnected from MongoDB.');
}

main().catch((error) => {
  console.error('Seed script failed:', error);
  process.exit(1);
});
