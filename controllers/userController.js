var User = require('../models/user');

var getUserAll = function(req, res) {
    User.find({})
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(err) {
            res.status(400).send(err);
        }); 
};


var getUserData = function(req, res) {
    const user = req.url.slice(1);

    User.findOne({ _id: user })
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
};


module.exports = {
    getUserAll,
    getUserData
};