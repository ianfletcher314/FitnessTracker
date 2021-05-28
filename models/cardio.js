// CONVERT THIS TO CODE THAT WORKS FOR US 
const mongoose = require("mongoose");
const exercise = require("exerciseModel")
const Schema = mongoose.Schema;

const exercise = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Type is Required"
  },
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  duration: {
    type: Number,
    unique: true,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  lastUpdated: Date,
});

UserSchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();

  return this.lastUpdated;
};

const exerciseModel = mongoose.model("Exercise", exercise);

module.exports = exerciseModel;
