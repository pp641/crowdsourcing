const mongoose = require('mongoose');

const fundingStatusSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  fundingGoal: {
    type: Number,
    required: true
  },
  amountFunded: {
    type: Number,
    default: 0
  },
  backers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    enum: ['Pending', 'Funded', 'Failed'],
    default: 'Pending'
  },
  fundingTime: {
    type: Date,
    default: Date.now+7
  },
  fundingCompletionDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FundingStatus', fundingStatusSchema);
