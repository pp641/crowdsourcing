const Project = require('../models/projectModel')

const createProject = async (req, res) => {
  try {
    const {  title, description, category, links, status } = req.body;
    const creator = req.user.userId
    if (!creator || !title || !description || !category) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const newProject = new Project({
      creator,
      title,
      description,
      category,
      links,
      status
    });

    const savedProject = await newProject.save();

    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = {
  createProject
};
