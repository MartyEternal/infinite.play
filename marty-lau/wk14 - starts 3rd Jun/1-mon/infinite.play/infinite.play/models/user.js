const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: {
    type: String,
    default: "default-avatar.png"
  },
  balance: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
