
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import getInstance from "./db/index.js";
import userRoute from "./routes/user.js";
import exerciseRoute from "./routes/exercise.js";
import validProfile from "./services/validProfile.js";
const PORT = process?.env?.port || 3000;
const mongo = await getInstance();
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
app.get("/ping", (req, res) => {
  res.send({ data: "working" });
});
// service for user routes
app.use("/user", userRoute);
//
app.use("/exercise/:id", validProfile);
app.use("/exercise", exerciseRoute);
//
app.listen(PORT, () => {
  console.log("services is running on" + PORT);
});

