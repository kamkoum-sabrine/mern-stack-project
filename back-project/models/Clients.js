const mongoose = require('mongoose');

const clientsSchema = mongoose.Schema({
  id: {type: 'Object'},
  name: {type: String, required: true},
  logo: { type: String, required: true}
});

module.exports = mongoose.model('Clients', clientsSchema);