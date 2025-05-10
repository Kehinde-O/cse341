const Professional = require('../models/professional');

// Sample professional data for seeding
const sampleProfessionalData = {
  professionalName: "John Doe",
  base64Image: "", // You'll need to add a base64-encoded image here
  nameLink: {
    firstName: "John",
    url: "https://johndoe.com"
  },
  primaryDescription: "Software Developer",
  workDescription1: "Experienced full-stack developer specializing in Node.js and MongoDB applications.",
  workDescription2: "Passionate about creating clean, efficient, and scalable code solutions.",
  linkTitleText: "Connect with me:",
  linkedInLink: {
    text: "LinkedIn Profile",
    link: "https://linkedin.com/in/johndoe"
  },
  githubLink: {
    text: "GitHub Profile",
    link: "https://github.com/johndoe"
  },
  contactText: "Feel free to reach out for collaboration opportunities!"
};

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Professional.deleteMany({});
    
    // Insert new data
    await Professional.create(sampleProfessionalData);
    
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase; 