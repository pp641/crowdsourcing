const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 1000
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  links: [{
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/\S+$/.test(v); 
      },
      message: props => `${props.value} is not a valid URL!`
    }
  }],
  status: {
    type: String,
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);
