const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.registerUser)
router.post('/login' , authController.signIn)
module.exports = router