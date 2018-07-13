var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Funding = new Schema({
	start_at: { type: Date, default: Date.now },
  expired_at: { type: Date, default: Date.now },
	people: [String]
});

var Stock = new Schema({
  price: { type: Number, default: 100000 },
  total_amount: { type: Number, default: 100000000 }
});

var Game = new Schema({
  title: { type: String, required: true, trim: true },
  created_at: { type: Date, default: Date.now },
  subtitle: { type: String, required: true },
  video_url: String,
  img_url: { type: String, required: true },
  icon_url: { type: String, required: true },
  feature: { type: String, required: true },
  story: { type: String, required: true },
  tags: [String],
  category: { type: String, required: true },
  cafe: String,
  funding: Funding,
  stock: Stock
});

module.exports = mongoose.model('Game', Game);
