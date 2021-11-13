const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: Date, 
      default: Date.now()
  },
  exercises: {
      type: Array,
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


// {
//     day: new Date(new Date().setDate(new Date().getDate() - 9)),
//     exercises: [
//       {
//         type: 'resistance',
//         name: 'Bicep Curl',
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4,
//       },
//     ],
// }