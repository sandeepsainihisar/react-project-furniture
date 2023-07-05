const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
