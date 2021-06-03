const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// function extendSchema(Schema, definition, options) {
//     return new mongoose.Schema(
//         Object.assign({}, Schema.obj, definition),
//         options
//     );
// }
const workoutSchema = new Schema({
    day: {
        type: String,
        default: new Date()
    },
    
    // lastUpdated: Date,
    exercises: [{
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
    
        distance: {
            type: Number,
            required: true
        },
    }]

})

// const exercisesSchema = extendSchema(workoutSchema, {
//     type: {
//         type: String,
//         trim: true,
//         required: "Type is Required"
//     },
//     name: {
//         type: String,
//         trim: true,
//         required: "Name is Required"
//     },

//     duration: {
//         type: Number,
//         required: true
//     },
//     weight: {
//         type: Number,
//         required: true
//     },
//     reps: {
//         type: Number,
//         required: true
//     },

//     sets: {
//         type: Number,
//         required: true
//     },

//     distance: {
//         type: Number,
//         required: true
//     },

   
// });

// workoutSchema.methods.lastUpdatedDate = function () {
//     this.lastUpdated = Date.now();

//     return this.lastUpdated;
// };

// const exercises = mongoose.model("exercises", exercisesSchema);
const Workout = mongoose.model("Workout", workoutSchema);

// module.exports = exercises;
module.exports = {Workout}
// module.exports = Workout
