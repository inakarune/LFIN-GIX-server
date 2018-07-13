var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController');

/* GET game listing. */
router.get('/', gameController.getGameAll);

/* GET one game finding */
router.get('/:game', gameController.getGameData);

router.put('/:game/funding', gameController.updateFunding);

module.exports = router;
