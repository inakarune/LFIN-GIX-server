var qs = require('querystring');
var Game = require('../models/game');
var User = require('../models/user');

var getGameAll = function(req, res) {
    Game.find({})
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
};

var getGameData = function(req, res) {
    const game = qs.unescape(req.url).slice(1); // 한글을 query로 보내면 인코딩은 자동으로 해주지만 디코딩은 직접 해줘야 한다.

    Game.findOne({ title: game })
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
};

var updateFunding = function(req, res) {    // user_oid, stock_amount, stock_price, game_oid
    const { user_oid, game_oid, amount, price } = req.body;
    User.update({ _id: user_oid }, { $push: { mystock: { game_oid, amount, price } } })
        .then(function() {
            Game.update({ _id: game_oid }, { $push: { 'funding.people': user_oid } })
                .then(function(data) {
                    res.status(200).send({ msg: 'success for update' });
                })
                .catch(function(err) {
                    res.status(400).send(err);
                });
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
};

module.exports = {
    getGameAll,
    getGameData,
    updateFunding
};