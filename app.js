import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
const PORT = 8000;


app.use(express.json());


connectDB();


app.get("/", (req, res) => {
  res.send("Student API is running...");
});


app.use("/students", studentRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
