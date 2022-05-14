import mongoose from "mongoose";

const Schema = mongoose.Schema;

const exerciseLogSchema = new Schema({
  custom_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ExerciseLog = mongoose.model("exercise-log", exerciseLogSchema);
export default ExerciseLog;
