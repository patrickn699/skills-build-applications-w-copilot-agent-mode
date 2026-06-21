import mongoose from 'mongoose';

const MONGO_HOST = '127.0.0.1';
const MONGO_PORT = 27017;
const DATABASE_NAME = 'octofit_db';

const mongoUri = process.env.MONGODB_URI || `mongodb://${MONGO_HOST}:${MONGO_PORT}/${DATABASE_NAME}`;

export async function connectDatabase(): Promise<void> {
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB at', mongoUri);
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB.');
}
