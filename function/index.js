import * as functions from "firebase-functions";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import getInstance from "./db/index.js";
import userRoute from "./routes/user.js";
import exerciseRoute from "./routes/exercise.js";
import validProfile from "./services/validProfile.js";
// import { config } from "dotenv";

// config();

// initial constant and instance
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

export const apis = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
