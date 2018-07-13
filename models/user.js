var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MyFunding = new Schema({
  game_oid: { type: String, required: true },
  amount: Number,
  price: Number
});

var Stock = new Schema({
  game_oid: { type: String, required: true },
  amount: { type: Number, default: 0 },
  price: Number
});

var User = new Schema({
  name: { type: String, required: true , trim: true },
  id: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  money: { type: Number, default: 0 },
  myfunding: [MyFunding],
  mystock: [Stock]
}, { collection: 'users' });

User.methods.addMyFundingList = function(data) {
  var funding = {
    game_oid: data.game_oid,
    funding_money: data.money,
    buy: {
      buy_amount: Number,
      buy_price: Number
    },
    sell: {
      sell_total: Number,
      sell_amount: Number,
      sell_price: Number
    }
  };
  this.myfunding.push(funding);
  return this.save();
};

User.methods.addMyStockList = function(data) {
  var stock = {
    game_oid: data.game_oid,
    amount: data.amount,
    price: data.price
  };
  this.mystock.push(stock);
  return this.save();
};

module.exports = mongoose.model('User', User, 'users');
