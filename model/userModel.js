const mongoose = require("mongoose");

const scheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  verified: {
    type: Boolean,
    default: false,
    required: true,
  },
});
const userModel = mongoose.model("usermodel", scheme);
module.exports = userModel;
