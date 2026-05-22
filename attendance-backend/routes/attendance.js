const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");
const { calculateAttendance, classesNeeded } = require('../utils/attendanceUtils');

// 📌 Mark Attendance (simulate thumb scan)
router.post("/mark", async (req, res) => {
  const { studentId, subject } = req.body;

  try {
    const newAttendance = new Attendance({
      studentId,
      subject,
      // date will be set automatically
    });

    await newAttendance.save();
    res.status(201).json({ message: "Attendance marked successfully" });
  } 
  catch (err) {
    console.error("REAL ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});


// 📊 Get attendance summary for a student
router.get("/summary/:studentId", async (req, res) => {
  const { studentId } = req.params;

  try {
    const records = await Attendance.find({ studentId });

    if (!records || records.length === 0) {
      return res.status(404).json({ message: "No attendance records found." });
    }

    // Group by subject
    const summary = {};
    records.forEach((record) => {
      const subject = record.subject;
      if (!summary[subject]) {
        summary[subject] = {
          total: 0,
          present: 0
        };
      }
      summary[subject].total += 1;
      if (record.status === "Present") {
        summary[subject].present += 1;
      }
    });

    // Calculate % and check 75% eligibility
    const result = {};
    for (const subject in summary) {
      const total = summary[subject].total;
      const present = summary[subject].present;

      const percentage = (present / total) * 100;

      // ✅ ADD STATUS
      let status = "Safe";
      if (percentage < 75 && percentage >= 60) status = "Warning";
      if (percentage < 60) status = "Critical";

      // ✅ ADD CLASSES NEEDED
      let needed = 0;
      if (percentage < 75) {
        needed = Math.ceil((0.75 * total - present) / 0.25);
      }

    // Assume 90 total classes
    const remaining = 90 - total;
    const possibleFinal = ((present + remaining) / 90) * 100;

    result[subject] = {
      totalClasses: total,
      attended: present,
      percentage: percentage.toFixed(2) + "%",
      status, // ✅ NEW
      classesNeeded: needed, // ✅ NEW
      canReach75: possibleFinal >= 75
    };
  }  

    res.json(result);
  } catch (err) {
    console.error("Error fetching summary:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { studentId, subject, status } = req.body;

    const newRecord = new Attendance({
      studentId,
      subject,
      status
    });

    await newRecord.save();

    res.json({ message: "Attendance added successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding attendance" });
  }
});

module.exports = router;