require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { pool } = require('./db');

const app = express();
const port = process.env.PORT || 3000;

// Import routes
const usersRouter = require('./routes/users');
const profilesRouter = require('./routes/profiles');
const plansRouter = require('./routes/plans');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connected successfully');
  }
});

// Routes
app.use('/api/users', usersRouter);
app.use('/api/profiles', profilesRouter);
app.use('/api/plans', plansRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 