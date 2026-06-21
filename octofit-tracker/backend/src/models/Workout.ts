import { Schema, model, Document } from 'mongoose';

interface Workout extends Document {
  title: string;
  durationMinutes: number;
  caloriesBurned: number;
  createdAt: Date;
}

const workoutSchema = new Schema<Workout>({
  title: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<Workout>('Workout', workoutSchema);
