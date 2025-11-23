import express from "express";
import Student from "../models/Student.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const data = await Student.find();
    res.json(data);
  } catch (err) {
    console.log("GET /students error:", err);
    res.status(500).json({ message: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const { name, course, age, city } = req.body;

    if (!name || !course) {
      return res.status(400).json({ message: "Name and course are required" });
    }

    const student = new Student({ name, course, age, city });
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    console.log("POST /students error:", err);
    res.status(500).json({ message: err.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("PUT /students/:id error:", err);
    res.status(500).json({ message: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const removed = await Student.findByIdAndDelete(req.params.id);

    if (!removed) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    console.log("DELETE /students/:id error:", err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
