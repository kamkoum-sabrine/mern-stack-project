const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  id: {type: 'Object'},
  name: { type: String, required: true },
  job: { type: String, required: true },
  linkedinUrl: { type: String, required: true },
  facebookUrl: { type: String, required: true },
  image: {type: String, required: true}
});

module.exports = mongoose.model('Team', teamSchema);