const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config(); // loads your .env file

const app = express();
app.use(cors());
const PORT = 5000;

// Middleware to parse JSON data from requests
app.use(express.json());

// 👉 Import your auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// 👉 Import your attendance routes (✅ ADD THESE LINES)
const attendanceRoutes = require('./routes/attendance');
app.use('/api/attendance', attendanceRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

