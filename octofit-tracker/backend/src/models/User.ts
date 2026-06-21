import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  role: 'user' | 'coach' | 'admin';
  createdAt: Date;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'coach', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
});

export default model<User>('User', userSchema);
