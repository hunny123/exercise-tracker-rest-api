import express from "express";
import User from "../schemas/user.js";
const userRoute = express.Router();

userRoute.get("/list", async (req, res) => {
  // do something
  try {
    const userData = await User.find({});
    res.send({ data: userData, success: true });
  } catch (e) {
    res.status(502).send({ msg: e.message });
  }
});
userRoute.post("/create", async (req, res) => {
  const { username } = req.body;
  const custom_id = "@" + username;
  try {
    const users = new User({ username, custom_id, count: 0 });
    await users.save();
    res.send({ msg: "succes" });
  } catch (e) {
    res.status(401).send({ msg: e.message });
  }
});
userRoute.get("/availablity/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const user = await User.find({ username: name });
    user.length > 0 &&
      res.send({ available: false, message: "user name exist" });
    user.length === 0 &&
      res.send({ available: true, message: "user name available" });
  } catch (e) {
    res.status(404).send({ msg: e.message });
  }
});

export default userRoute;
