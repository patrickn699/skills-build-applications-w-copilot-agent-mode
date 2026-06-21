import { Schema, model, Document, Types } from 'mongoose';

export interface Activity extends Document {
  user: Types.ObjectId;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  happenedAt: Date;
}

const activitySchema = new Schema<Activity>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  happenedAt: { type: Date, default: Date.now },
});

export default model<Activity>('Activity', activitySchema);
