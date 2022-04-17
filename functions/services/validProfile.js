const validProfile = (req, resp) => {
  // find in user db for profile
  resp.status("404").send({ msg: "Profile does not exist" });
};
