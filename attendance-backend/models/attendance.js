const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: String,   // ✅ changed from ObjectId → String
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ["Present", "Absent"],
    default: "Present"
  }
});

module.exports = mongoose.model("Attendance", attendanceSchema);