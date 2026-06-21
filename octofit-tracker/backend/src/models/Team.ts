import { Schema, model, Document, Types } from 'mongoose';

export interface Team extends Document {
  name: string;
  members: Types.ObjectId[];
  score: number;
  createdAt: Date;
}

const teamSchema = new Schema<Team>({
  name: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  score: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default model<Team>('Team', teamSchema);
