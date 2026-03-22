const express = require('express');
const router = express.Router();
const SensorData = require('../models/SensorData');

// POST data
router.post('/add', async (req, res) => {
  try {
    const data = new SensorData(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET data
router.get('/', async (req, res) => {
  const data = await SensorData.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;