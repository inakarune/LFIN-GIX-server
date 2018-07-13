var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET game listing. */
router.get('/', userController.getUserAll);

/* GET one game finding */
router.get('/:user', userController.getUserData);

module.exports = router;
