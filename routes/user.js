import express from "express";
import User from "../schemas/user.js";
import checkUserExist from "../services/checkUser.js";
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
userRoute.post("/create", checkUserExist, async (req, res) => {
  const { username } = req.body;
  const custom_id = username + "@" + username.length + "1";
  try {
    const users = new User({ username, custom_id, count: 0 });
    await users.save();
    res.send({ msg: "succes" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
});
userRoute.get("/availablity/:name", checkUserExist, async (req, res) => {
  const { name } = req.params;
  try {
    res.send({ available: true, message: `user ${name} is available` });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
});

export default userRoute;
