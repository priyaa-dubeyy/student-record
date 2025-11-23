import mongoose from "mongoose";

const connectDB = async () => {
  try {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/studentdb");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("DB Error:", err.message);
    
    process.exit(1);
  }
};

export default connectDB;
