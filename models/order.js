var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Order = new Schema({
  created_at: { type: Date, default: Date.now },
  type: { type: String, required: true },
  game: { type: String, required: true },
  user: { type: String, required: true },
  amount: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Order', Order, 'orders');
