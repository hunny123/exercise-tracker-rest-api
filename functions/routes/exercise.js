import express from "express";
const exerciseRoute = express.Router();
exerciseRoute.get("/", (req, resp) => {
  resp.send({ data: [] });
});
exerciseRoute.get("/:custom-id/list", (req, resp) => {
  // in this we use filter
});

exerciseRoute.get("/:custom-id/details", (req, resp) => {
  // in this will get id in query param
  //will send  the data of the exercise
});

exerciseRoute.post("/:custom-id/create", (req, resp) => {
  // create new exercise
});
exerciseRoute.put("/:custom-id/update", (req, resp) => {
  // update the exercise using id from query
});
export default exerciseRoute;
