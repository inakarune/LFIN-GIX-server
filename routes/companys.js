var express = require('express');
var router = express.Router();
var companyController = require('../controllers/companyController');

/* GET company listing. */
router.get('/', companyController.getCompanyAll);

router.get('/:gameid', companyController.getCompanyData);

router.post('/comp', companyController.makeCompany);
module.exports = router;
