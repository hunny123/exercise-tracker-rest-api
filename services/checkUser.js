import User from "../schemas/user.js";
const checkUserExist = async (req, res, next) => {
  const { name } = req.params;
  try {
    const user = await User.find({ username: name });
    user.length > 0 &&
      res
        .status(402)
        .send({ available: false, message: `user ${name} already exist` });
    next && next();
  } catch (e) {
    res.status(404).send({ msg: e.message });
  }
};
export default checkUserExist;
