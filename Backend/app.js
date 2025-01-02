const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const studentRoutes = require('./routes/students'); // Ensure this path and file exist

const app = express();

// Enable CORS
app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware
app.use(express.json());
app.use('/api', studentRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://impact:passwordimpact@cluster0.kkioacb.mongodb.net/', { ssl: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
