import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.ATLAS_URI;
export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri);
    console.log(`server connected to the mongodb `);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
