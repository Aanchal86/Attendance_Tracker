# Attendance Tracker

Attendance Tracker is a full-stack web application built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**.  
It allows users to register, log in, mark attendance, and manage attendance records through a simple web interface.

---

## Features

- User registration
- User login
- Attendance marking
- Attendance records management
- Backend REST APIs using Express.js
- Frontend user interface using React.js
- MongoDB database integration

---

## Tech Stack

### Frontend

- React.js
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

```text
attendance-tracker/
│
├── attendance-backend/
│   ├── models/
│   │   ├── attendance.js
│   │   └── user.js
│   │
│   ├── routes/
│   │   ├── attendance.js
│   │   └── auth.js
│   │
│   ├── utils/
│   │   └── attendanceUtils.js
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── attendance-frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── App.js
│   │   ├── Login.js
│   │   ├── register.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Aanchal86/Attendance_Tracker.git
```

```bash
cd Attendance_Tracker
```

---

## Backend Setup

Go to the backend folder:

```bash
cd attendance-backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `attendance-backend` folder and add your environment variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal and go to the frontend folder:

```bash
cd attendance-frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm start
```

The frontend will run on:

```text
http://localhost:3000
```

---

## API Overview

### Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login existing user |

### Attendance Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/attendance` | Mark attendance |
| GET | `/api/attendance` | Get attendance records |

---

## How It Works

1. User registers through the frontend.
2. User logs in with valid credentials.
3. Attendance data is submitted from the frontend.
4. Backend APIs handle the request.
5. Data is stored and managed using MongoDB.

---

## Folder Description

### `attendance-backend`

Contains the server-side code, API routes, database models, and utility functions.

### `attendance-frontend`

Contains the React.js frontend code, pages, styling, and public assets.

---

## Important Notes

- The `.env` file is not pushed to GitHub for security reasons.
- `node_modules` is ignored using `.gitignore`.
- Run `npm install` separately in both backend and frontend folders after cloning the project.

---

## Future Improvements

- Add JWT authentication
- Add role-based access for admin and users
- Add attendance dashboard
- Add date-wise attendance reports
- Add better UI styling
- Add deployment support

---

## Author

**Aanchal**

GitHub: [Aanchal86](https://github.com/Aanchal86)