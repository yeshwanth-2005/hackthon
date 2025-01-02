const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courses: { type: [String], required: true }, // Array of course names
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  year: { type: Number, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
