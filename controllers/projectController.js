const Project = require('../models/projectModel');

// Create a new project
const createProject = async (req, res) => {
  try {
    console.log("reqq", req.body)
    const { title, description, category, links, status } = req.body;
    const creator = req.user.userId;
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

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

const getSingleProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

const updateProject = async (req, res) => {
  try {
    const { title, description, category, links, status } = req.body;
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    project.title = title || project.title;
    project.description = description || project.description;
    project.category = category || project.category;
    project.links = links || project.links;
    project.status = status || project.status;

    const updatedProject = await project.save();
    res.status(200).json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    await project.deleteOne();
    res.status(200).json({ message: 'Project deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};


const getAllProjectsByUser = async (req, res) => {
    try {
      const userId = req.user.userId; 
      const projects = await Project.find({ creator: userId });
      res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  };


module.exports = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
  getAllProjectsByUser
};
