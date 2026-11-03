// const http = require("http");

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "text/plain"
//     });

//     res.end("FSD Mid-Term-1 Application Running!  port no. 3000");
// });

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require("express");

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(express.json());

// // Store student records
// const students = [];

// // Task 2: Create Student Records
// app.post("/api/students", (req, res) => {

//     const { id, name, email, course, age } = req.body;

//     // Check required fields
//     if (
//         id === undefined || id === null || id === "" ||
//         !name || !email || !course ||
//         age === undefined || age === null
//     ) {
//         return res.status(400).json({
//             message: "All fields are required"
//         });
//     }

//     // Check duplicate ID
//     const existingStudent = students.find(
//         student => String(student.id) === String(id)
//     );

//     if (existingStudent) {
//         return res.status(409).json({
//             message: "Student ID already exists"
//         });
//     }

//     // Create student
//     const student = {
//         id,
//         name,
//         email,
//         course,
//         age
//     };

//     // Save student
//     students.push(student);

//     // Success response
//     res.status(201).json({
//         message: "Student created successfully",
//         student: student
//     });

// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Student records
let students = [];

// ==================================
// TASK 2: CREATE STUDENT (POST)
// ==================================

app.post("/api/students", (req, res) => {
    const { id, name, email, course, age } = req.body;

    if (!id || !name || !email || !course || !age) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const existingStudent = students.find(s => s.id === id);

    if (existingStudent) {
        return res.status(409).json({
            message: "Student ID already exists"
        });
    }

    const student = { id, name, email, course, age };

    students.push(student);

    res.status(201).json({
        message: "Student created successfully",
        student: student
    });
});


// ==================================
// TASK 3: RETRIEVE STUDENTS (GET)
// ==================================

// Get all students
app.get("/api/students", (req, res) => {
    res.status(200).json(students);
});

// Get student by ID
app.get("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});


// ==================================
// TASK 4: UPDATE STUDENT (PUT)
// ==================================

app.put("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students[index] = {
        ...students[index],
        ...req.body,
        id: students[index].id
    };

    res.status(200).json({
        message: "Student updated successfully",
        student: students[index]
    });
});


// ==================================
// TASK 5: DELETE STUDENT (DELETE)
// ==================================

app.delete("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});


// ==================================
// START SERVER
// ==================================

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
