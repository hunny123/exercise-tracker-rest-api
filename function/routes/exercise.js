import express from "express";
import ExerciseLog from "../schemas/exercise.js";
const exerciseRoute = express.Router();

exerciseRoute.get("/:id/list", async (req, res) => {
  try {
    const { id } = req.params;
    const exerciseLogs = await ExerciseLog.find({ custom_id: id });
    res.send({ data: exerciseLogs });
  } catch (errr) {
    res.status(402).send({ msg: error.msg });
  }
  // in this we use filter
});

exerciseRoute.get("/:id/details", async (req, res) => {
  try {
    const { exercise_id } = req.query;
    const { id } = req.params;
    const log = await ExerciseLog.find({ _id: exercise_id, custom_id: id });
    res.send({ data: log[0] });
  } catch (error) {
    res.status(500).send({ msg: error.msg });
  }
});

exerciseRoute.post("/:id/create", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const exercise = new ExerciseLog({ ...body, custom_id: id });
    const exerciseLog = await exercise.save();
    res.send({
      msg: "successful created",
      ...exerciseLog._doc,
    });
  } catch (error) {
    res.status(401).send({ msg: error.msg });
  }
  // create new exercise
});
exerciseRoute.delete("/:id/delete", async (req, res) => {
  try {
    const { exercise_id } = req.query;
    const { id } = req.params;
    await ExerciseLog.deleteOne({ _id: exercise_id, custom_id: id });
    res.send({ msg: `${exercise_id} is deleted` });
  } catch (error) {
    res.status(500).send({ msg: error.msg });
  }
});
exerciseRoute.put("/:id/update", async (req, res) => {
  try {
    const { exercise_id } = req.query;
    const { id } = req.params;
    const body = req.body;
    const exercise = await ExerciseLog.findByIdAndUpdate(
      { _id: exercise_id, custom_id: id },
      { ...body },
      { new: true }
    );
    const exerciseLog = await exercise.save();
    res.send({
      msg: "successful created",
      ...exerciseLog._doc,
    });
  } catch (error) {
    res.status(401).send({ msg: error.msg });
  }
  // update the exercise using id from query
});
export default exerciseRoute;
