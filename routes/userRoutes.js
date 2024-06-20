const router = require('express').Router();
const userController = require("../controllers/userController")
const isLoggedIn = require('../middlewares/isLoggedIn').isLoggedIn;

router.get('/getAllDevelopers',[isLoggedIn] , userController.getAllDevelopers )
router.get('/getAllChats/:senderId/:receiverId', [isLoggedIn] , userController.getAllChats)

module.exports = router