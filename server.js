const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.json({ message: 'Booking App API is running!' });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API test successful' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});