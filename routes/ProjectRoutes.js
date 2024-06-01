const router = require('express').Router();
const projectController  = require('../controllers/projectController');
const isLoggedIn = require('../middlewares/isLoggedIn').isLoggedIn;

router.post('/createProject',[isLoggedIn] , projectController.createProject )

module.exports = router