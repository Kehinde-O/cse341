const Professional = require('../models/professional');

// @desc    Get professional data
// @route   GET /professional
// @access  Public
exports.getProfessionalData = async (req, res) => {
  try {
    const professionalData = await Professional.findOne();
    
    if (!professionalData) {
      return res.status(404).json({ message: 'Professional data not found' });
    }

    res.json(professionalData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create professional data
// @route   POST /professional
// @access  Private (would typically require authentication)
exports.createProfessionalData = async (req, res) => {
  try {
    const {
      professionalName,
      base64Image,
      nameLink,
      primaryDescription,
      workDescription1,
      workDescription2,
      linkTitleText,
      linkedInLink,
      githubLink,
      contactText
    } = req.body;

    // Check if a professional already exists
    const existingProfessional = await Professional.findOne();
    if (existingProfessional) {
      return res.status(400).json({ message: 'Professional data already exists. Use PUT to update.' });
    }

    const professionalData = new Professional({
      professionalName,
      base64Image,
      nameLink,
      primaryDescription,
      workDescription1,
      workDescription2,
      linkTitleText,
      linkedInLink,
      githubLink,
      contactText
    });

    const savedData = await professionalData.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update professional data
// @route   PUT /professional
// @access  Private (would typically require authentication)
exports.updateProfessionalData = async (req, res) => {
  try {
    const professionalData = await Professional.findOne();
    
    if (!professionalData) {
      return res.status(404).json({ message: 'Professional data not found' });
    }

    const updatedData = await Professional.findByIdAndUpdate(
      professionalData._id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}; 