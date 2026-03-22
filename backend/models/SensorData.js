const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
  temperature: Number,
  moisture: Number,
  nitrogen: Number,
  phosphorus: Number,
  potassium: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SensorData', SensorSchema);