const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function extendSchema (Schema, definition, options) {
    return new mongoose.Schema(
      Object.assign({}, Schema.obj, definition),
      options
    );
  }


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
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  lastUpdated: Date,
});
// convert this to give full amount of weight they have lifted
// UserSchema.methods.setFullName = function() {
//   this.fullName = `${this.firstName} ${this.lastName}`;

//   return this.fullName;
// };

const resistance = extendSchema(exercise, {
    weight: {
        type: Number,
        required: true
      },
      reps: {
        type: Number,
        required: true
      },
    
      sets: {
        type: Number,
        required: true
      },

});
const cardio = extendSchema(exercise, {
    distance: {
        type: Number,
        required: true
      },
});



UserSchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();

  return this.lastUpdated;
};

const exerciseModel = mongoose.model("Exercise", exercise);
const resistanceModel = mongoose.model('Resistance', resistance);
const cardioModel = mongoose.model('Cardio', cardio);

module.exports = exerciseModel;
module.exports = resistanceModel;
module.exports = cardioModel;

