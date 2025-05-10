require('dotenv').config();
const connectDB = require('./config/db');
const seedDatabase = require('./controllers/seed');

// Connect to MongoDB
connectDB()
  .then(() => {
    // Seed the database
    return seedDatabase();
  })
  .then(() => {
    console.log('Database seeded successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  }); 