const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  objective: String,
  status: { type: String, enum: ['draft', 'active', 'completed'], default: 'draft' },
  startDate: Date,
  endDate: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Campaign', campaignSchema);
