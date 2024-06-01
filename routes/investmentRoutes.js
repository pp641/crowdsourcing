const router = require('express').Router();
const InvestmentModel =  require('../models/investmentModel');
const InvestmentController = require('../controllers/fundingController');
const { isLoggedIn } = require('../middlewares/isLoggedIn');


router.post('/createFunding', [isLoggedIn], InvestmentController.createFunding);
router.get('/getAllFundingByUser/:userId', [isLoggedIn], InvestmentController.getAllFundingByUser);
router.get('/getAllFundingByProject/:projectId', [isLoggedIn], InvestmentController.getAllFundingByProject);


module.exports = router;

