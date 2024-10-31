import mongoose from 'mongoose';

const uri: string = process.env.MONGODB_URI || '';
if (!uri) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB with Mongoose!");
  } catch (error) {
    console.error("Error connecting to MongoDB with Mongoose:", error);
    process.exit(1);
  }
}

export default connectToDatabase;