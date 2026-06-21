import { Schema, model, Document, Types } from 'mongoose';

export interface LeaderboardEntry extends Document {
  team: Types.ObjectId;
  rank: number;
  points: number;
  updatedAt: Date;
}

const leaderboardSchema = new Schema<LeaderboardEntry>({
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  rank: { type: Number, required: true },
  points: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now },
});

export default model<LeaderboardEntry>('Leaderboard', leaderboardSchema);
