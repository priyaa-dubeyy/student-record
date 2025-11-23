Student Record API

A simple Node.js + Express + MongoDB (Mongoose) based REST API to manage student records.
This project handles basic CRUD operations including creating, reading, updating and deleting student data.

🚀 Features

Add new students

Get all students

Update existing student

Delete a student

MongoDB database connection

Proper folder structure (config, models, routes)

Clean Express routing

JSON-based API responses

📂 Project Structure
student-record-api/
│
├── app.js
├── package.json
│
├── config/
│   └── db.js
│
├── models/
│   └── Student.js
│
└── routes/
    └── studentRoutes.js

💾 Database

The API uses MongoDB as the database.
A studentdb database (automatically created) stores documents like:

{
  "_id": "ObjectId",
  "name": "Harsh",
  "course": "ECE",
  "age": 21,
  "city": "Ranchi"
}

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/harzhr/student-record-api.git

2️⃣ Move into the project folder
cd student-record-api

3️⃣ Install dependencies
npm install

4️⃣ Start MongoDB server

Make sure MongoDB is running (Compass or local service).

5️⃣ Start the server
npm run dev


Server will run at:

http://localhost:8000

🛠️ API Endpoints
📍 GET /students

Get all students

Response:

[
  {
    "_id": "67abc123...",
    "name": "Harsh",
    "course": "ECE",
    "age": 21,
    "city": "Ranchi"
  }
]

📍 POST /students

Add a new student

Body (JSON):

{
  "name": "Harsh",
  "course": "ECE",
  "age": 21,
  "city": "Ranchi"
}


Response:

{
  "_id": "67abc123...",
  "name": "Harsh",
  "course": "ECE",
  "age": 21,
  "city": "Ranchi"
}

📍 PUT /students/:id

Update a student

Body (JSON):

{
  "name": "Updated Name",
  "course": "CSE",
  "age": 22,
  "city": "Delhi"
}

📍 DELETE /students/:id

Delete a student

Response:

{
  "message": "Student deleted successfully"
}

📘 Technologies Used

Node.js

Express.js

MongoDB

Mongoose

Nodemon

🎯 Purpose of the Project

This project demonstrates:

Backend API development

REST concepts

Working with Express routing

MongoDB and Mongoose CRUD operations

Proper folder structure in Node.js projects

Perfect for college minor projects, backend practice, or API development learning.

🙌 Author

Harsh (@harzhr)
GitHub: https://github.com/harzhr