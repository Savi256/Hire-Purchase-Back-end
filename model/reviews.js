//import the mongoose module
const mongoose = require("mongoose");

//create you reviews schema
const reviews = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  review: {
    type: String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//create a collection name for the schema
const sendReviews = mongoose.model("REVIEWS", reviews);

module.exports = sendReviews;
