const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
  id: {type: 'Object'},
  title: { type: String, required: true },
  description: { type: String, required:true},
  icon: { type: String, required: true},
  level: { type:Number , required: true}
});

module.exports = mongoose.model('Services', servicesSchema);