import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  custom_id: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
