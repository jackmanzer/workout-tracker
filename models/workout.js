const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: Date, 
      default: Date.now()
  },
  exercises: {
    type: Array, 
    required: true 
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


