import mongoose from "mongoose";

let instance;
const getMongoose = async () => {
  // "replace this with actuall string"
  const mongo_uri = process.env.DB;

  if (instance) {
    return instance;
  }
  instance = await mongoose.connect(mongo_uri);
  return instance;
};

export default getMongoose;
