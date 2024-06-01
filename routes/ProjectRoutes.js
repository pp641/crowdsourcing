const router = require('express').Router();
const projectController  = require('../controllers/projectController');
const isLoggedIn = require('../middlewares/isLoggedIn').isLoggedIn;

router.post('/createProject',[isLoggedIn] , projectController.createProject )
router.get('/getAllProjects',[isLoggedIn] , projectController.getAllProjects) // working
router.get('/project/:id',[isLoggedIn] , projectController.getSingleProject) // working
router.get('/user/:userId/projects',[isLoggedIn] , projectController.getAllProjectsByUser);
router.put('/updateProject/:id',[isLoggedIn] , projectController.updateProject) // working
router.delete('/deleteProject/:id',[isLoggedIn] , projectController.deleteProject)

module.exports = router