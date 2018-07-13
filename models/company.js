var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Company = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  password: { type: String, required: true },
  games: [String]
}, { collection: 'companys' });

module.exports = mongoose.model('Company', Company, 'companys');
