var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Contract = new Schema({
  created_at: { type: Date, default: Date.now },
  game: { type: String, required: true },
//   user: { type: String, required: true },
  amount: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Contract', Contract, 'contracts');
