const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const structure2 = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  confirmEmail: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    lowercase: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  stateOfOrigin: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  NIN: {
    type: Number,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  guarantorDetails: {
    guarantorName: { type: String },
    phoneNumber: { type: Number },
    address: { type: String },
    email: { type: String },
  },
  Product: {
    ProductName: { type: String },
    ProductPrice: { type: String },
    applicationTerm: { type: String },
    applicationType: { type: String },
    numberOfProducts: { type: Number },
  },
});

const existingProposalModel = mongoose.model("proposal", structure2);

module.exports = existingProposalModel;
