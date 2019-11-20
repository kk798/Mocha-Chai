const express = require("express");

const app = express();

app.use(express.json());

const students = [
  {
    id: 1,
    name: "Sean Grey",
    age: 24
  },
  {
    id: 2,
    name: "John Doe",
    age: 26
  },
  {
    id: 3,
    name: "Janet Dane",
    age: 19
  }
];

// Demo
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome To Testing API" });
});

// Addition
app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  const add = (num1, num2) => {
    return num1 + num2;
  };
  res.json({
    status: "success",
    message: "Welcome To Testing API",
    result: add(num1, num2)
  });
});

// Get All Students
app.get("/get-students", (req, res) => {
  return res.status(200).json({
    students,
    message: "All the students"
  });
});

//Get single student data
app.get("/get-student/:id", (req, res) => {
  const findStudent = students.find(
    student => student.id === parseInt(req.params.id, 10)
  );
  if (findStudent) {
    return res.status(200).json({
      student: findStudent,
      message: "A single student record"
    });
  }
  return res.status(404).json({
    message: "Student record not found"
  });
});

//Add a student
app.post("/add-student", (req, res) => {
  if (req.body) {
    students.push(req.body);
    return res.status(200).json({
      student: req.body,
      message: "A student is added"
    });
  }
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
