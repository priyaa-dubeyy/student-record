

> A RESTful backend API built using **Node.js, Express.js, and MongoDB (Mongoose)** to manage student records efficiently.  

---

## ✨ **About the Project**

This project allows users to perform CRUD operations on student data — add, view, update, and delete student records stored in MongoDB. It follows a clean and scalable structure, making it beginner-friendly and ideal for extension.

---

## 🚀 **Features**

- ✅ Add new student data  
- ✅ Fetch list of all students  
- ✅ Update student record by ID  
- ✅ Delete student record  
- ✅ MongoDB connection using Mongoose  
- ✅ Structured routing and model separation  
- ✅ JSON-based API responses  
- ✅ Uses *Nodemon* for easy development

---

## 📁 **Project Structure**

```

student-record/
│
├── app.js
├── package.json
│
├── config/
│   └── db.js            # MongoDB configuration
│
├── models/
│   └── Student.js       # Student Mongoose schema
│
└── routes/
└── studentRoutes.js # API Routes

````

---

## 🛠️ **Installation & Setup**

1. Clone the repository

```bash
git clone priya/student-record
````

2. Move into the folder

```bash
cd student-record
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
npm run dev
```

5. Server runs at:

```
http://localhost:3000
```

---

## 🌐 **API Endpoints**

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/students`     | Get all students     |
| POST   | `/students`     | Add a new student    |
| PUT    | `/students/:id` | Update student by ID |
| DELETE | `/students/:id` | Delete student by ID |

---

## 📌 **Sample POST Request (Add Student)**

```json
{
  "name": "Priya",
  "course": "ECE",
  "age": 20,
  "city": "Jagdalpur"
}
```

Response returns saved student data including `_id`.

---

## 🧠 **Tech Stack**

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Nodemon**

---

## 🤝 **Contributing**

Want to contribute? Follow these steps:

1. Fork the repo
2. Create a new feature branch
3. Commit your changes
4. Submit a Pull Request ✅

---

## 👩‍💻 **Author**

**Priya**
GitHub: *Priya Dubey*
📧 Feel free to connect for suggestions or improvements!

---


Just tell me the number 👉 **1, 2, or 3** 😊
```
