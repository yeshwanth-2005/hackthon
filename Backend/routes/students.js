const express = require('express');
const Student = require('../models/student'); // Correct path to the student model

const router = express.Router();

// GET route to fetch all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find(); // Fetch all students from the database
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error.message);
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
});

// POST route to add a student
router.post('/add-student', async (req, res) => {
  const { name, email, courses, dob, phone, year } = req.body;

  // Validate input data
  if (!name || !email || !courses || !dob || !phone || !year) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {

    const dobFormatted = new Date(dob).toISOString().slice(0, 10).replace(/-/g, ''); // "YYYY-MM-DD" -> "YYYYMMDD"
    const password = `${name}@${dobFormatted}`; // Generate the password

    const student = new Student({ name, email, courses, dob, phone, year,password });
    await student.save();
    res.status(201).json({ message: 'Student added successfully', student });
  } catch (error) {
    console.error('Error saving student:', error.message);
    res.status(500).json({ message: 'Error adding student', error: error.message });
  }
});

module.exports = router;
