import User from "../schemas/user.js";

const validProfile = async (req, res, next) => {
  // find in user db for profile
  try {
    const { id } = req.params;
    const profile_exit = await User.find({ custom_id: id });
    if (profile_exit.length === 0) {
      res.status(404).send({ msg: `profile ${id} does not exist ` });
      return;
    }
    next();
  } catch (error) {
    res.status(500).send({ msg: error.msg });
  }
};
export default validProfile;
