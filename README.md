# FSD-mid-term-1_CSE-16_2500320100244

# FSD Mid-Term-1 – Student Management API

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman (API Testing)

## Installation and Setup

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

```bash
npm install express
```

4. Start the server:

```bash
node server.js
```

Server URL: `http://localhost:3000`

## API Endpoints

### Task 2: Create Student

**Method:** POST

**Endpoint:** `/api/students`

**Request Body:**
```json
{
  "id": 1,
  "name": "Anuj",
  "email": "anuj@gmail.com",
  "course": "CSE",
  "age": 20
}
```

**Success Response:** 201 Created

### Task 3: Retrieve Student Records

**1. Get All Students**

- Method: GET
- Endpoint: `/api/students`
- Response: 200 OK

**2. Get Student by ID**

- Method: GET
- Endpoint: `/api/students/:id`
- Example: `/api/students/1`
- Response: 200 OK
- If not found: 404 Not Found

### Task 4: Update Student Details

- Method: PUT
- Endpoint: `/api/students/:id`
- Example: `/api/students/1`

**Request Body:**
```json
{
  "name": "Anuj Yadav",
  "email": "anuj@gmail.com",
  "course": "CSE",
  "age": 21
}
```

**Success Response:** 200 OK

### Task 5: Delete Student Records

- Method: DELETE
- Endpoint: `/api/students/:id`
- Example: `/api/students/1`
- Success Response: 200 OK
- If not found: 404 Not Found

## HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | Successful Request |
| 201 | Student Created |
| 400 | Bad Request |
| 404 | Student Not Found |
| 409 | Student ID Already Exists |

## Testing

All API endpoints can be tested using Postman.

**Note:** Student records are stored in an in-memory array. Data resets when the server restarts.

## Author
Anuj Yadav

B.Tech – CSE-16
