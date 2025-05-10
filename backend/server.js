require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const professionalRoutes = require('./routes/professionalRoutes');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Increased limit for base64 images
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routes
app.use('/professional', professionalRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('CSE341 API is running. Go to /professional to see data.');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
}); 