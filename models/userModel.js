const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add a first name'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Please add a last name'],
        trim: true
   },
  userName: {
    type: String,
    required: [true, 'Please add a username'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
  },
  profilePicture: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  createdProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  backedProjects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});



userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});



module.exports = mongoose.model('User', userSchema);
