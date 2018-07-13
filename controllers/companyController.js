var Company = require('../models/company');
var mongoose = require('mongoose');
var User = require('../models/user');


var getCompanyAll = function(req, res) {
    Company.find({})
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(err) {
            res.status(400).send(err);
        }); 
};


var getCompanyData = function(req, res) {
    const id = req.url.slice(1);
console.log(id)
    Company.findOne({ 'games': { $in: id } })
        .then(function(data) {console.log(data)
            res.status(200).send(data);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
};

var makeCompany = function(req, res) {
    const com = new Company({ name: 'abc', id: 'abc', password: '1234', games: [] });
    com.save(function(err, book){
        if(err) return console.error(err);
        console.dir(book);
    });
}


module.exports = {
    getCompanyAll,
    getCompanyData,
    makeCompany
};
