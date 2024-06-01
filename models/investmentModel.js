const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  investor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  investedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    // enum: ['Pending', 'Raised', 'Failed'],
    default: 'Pending'
  },
  amountCollected: {
    type: Number,
    default: 0
  },
  startedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Investment', investmentSchema);
