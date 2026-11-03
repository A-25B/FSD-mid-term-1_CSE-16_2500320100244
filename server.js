const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("FSD Mid-Term-1 Application Running!  port no. 3000");
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



// const express = require("express");

// const app = express();
// const PORT = 3000;

// // Middleware to accept JSON data
// app.use(express.json());

// // Store student records in an array
// const students = [];


// // ==============================
// // Task 2: Create Student Records
// // ==============================

// app.post("/api/students", (req, res) => {

//     const { id, name, email, course, age } = req.body;

//     // Validate mandatory fields
//     if (
//         id === undefined || id === null || id === "" ||
//         !name || !email || !course ||
//         age === undefined || age === null
//     ) {
//         return res.status(400).json({
//             message: "All fields are required"
//         });
//     }

//     // Prevent duplicate student IDs
//     const existingStudent = students.find(
//         student => String(student.id) === String(id)
//     );

//     if (existingStudent) {
//         return res.status(409).json({
//             message: "Student ID already exists"
//         });
//     }

//     // Create student record
//     const student = {
//         id,
//         name,
//         email,
//         course,
//         age
//     };

//     // Store student in array
//     students.push(student);

//     // Return success response
//     res.status(201).json({
//         message: "Student created successfully",
//         student: student
//     });

// });


// // ==============================
// // Task 3: Retrieve Student Records
// // ==============================

// // Get all student records
// app.get("/api/students", (req, res) => {

//     res.status(200).json({
//         message: "All student records retrieved successfully",
//         students: students
//     });

// });

// // Get a specific student by ID
// app.get("/api/students/:id", (req, res) => {

//     const studentId = req.params.id;

//     // Find student by ID
//     const student = students.find(
//         student => String(student.id) === studentId
//     );

//     // Check if student exists
//     if (!student) {
//         return res.status(404).json({
//             message: "Student not found"
//         });
//     }

//     // Return student record
//     res.status(200).json({
//         message: "Student retrieved successfully",
//         student: student
//     });

// });


// // ==============================
// // Start Server
// // ==============================

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
