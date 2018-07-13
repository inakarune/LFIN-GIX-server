var express = require('express');
var router = express.Router();

/* GET company listing. */
router.get('/stocks', function(req, res, next) {
    res.send('hello');
});

module.exports = router;
