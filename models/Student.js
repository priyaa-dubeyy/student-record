import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  age: Number,
  city: String,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
