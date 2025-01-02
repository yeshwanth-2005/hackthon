const express = require('express');
const Student = require('./models/Student'); // Import the student model

const router = express.Router();

// POST route to add a student
router.post('/add-student', async (req, res) => {
  const { name, email, courses } = req.body;
  try {
    const student = new Student({ name, email, courses });
    await student.save();
    res.status(201).json({ message: 'Student added successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error });
  }
});

module.exports = router;