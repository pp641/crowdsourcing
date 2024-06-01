const Investment = require('../models/investmentModel');
const Project = require('../models/projectModel');
const User = require('../models/userModel');

// Create a new funding
const createFunding = async (req, res) => {
  try {
    const { projectId, amount, status, amountCollected } = req.body;
    const investorId = req.user.userId;

    if (!investorId || !projectId || !amount) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    const newInvestment = new Investment({
      investor: investorId,
      project: projectId,
      amount,
      status: status || 'Pending', 
      amountCollected: amountCollected || 0 
    });

    const savedInvestment = await newInvestment.save();

    res.status(201).json(savedInvestment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

const getAllFundingByUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    const investments = await Investment.find({ investor: userId }).populate('project');
    res.status(200).json(investments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

const getAllFundingByProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const investments = await Investment.find({ project: projectId }).populate('investor');
    res.status(200).json(investments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = {
  createFunding,
  getAllFundingByUser,
  getAllFundingByProject
};
