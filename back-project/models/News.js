const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  id: {type: 'Object'},
  title: { type: String, required: true },
  description: { type: String, required:true},
  image: { type: String, required: true}
});

module.exports = mongoose.model('News', newsSchema);