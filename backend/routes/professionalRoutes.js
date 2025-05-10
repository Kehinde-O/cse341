const express = require('express');
const router = express.Router();
const { 
  getProfessionalData, 
  createProfessionalData, 
  updateProfessionalData 
} = require('../controllers/professionalController');

// Route to get professional data
router.get('/', getProfessionalData);

// Route to create professional data
router.post('/', createProfessionalData);

// Route to update professional data
router.put('/', updateProfessionalData);

module.exports = router; 