const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  contractYears: {
    type: Number,
    required: true
  }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;