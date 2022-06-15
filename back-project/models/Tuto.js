const mongoose = require('mongoose');

const tutoSchema = mongoose.Schema({
  id: {type: 'Object'},
  title: {type: String, required: true},
  description: { type: String, required: true}
});

module.exports = mongoose.model('Tuto', tutoSchema);