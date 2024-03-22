import express from "express";
import {
  httpsGetAllLaunches,
  httpAddNewLaunch,
  httpDeleteLaunch,
} from "./launches.controller.js";

const launchesRouter = express.Router();

launchesRouter.get("/", httpsGetAllLaunches);

launchesRouter.post("/", httpAddNewLaunch);

launchesRouter.delete("/:id", httpDeleteLaunch);

export default launchesRouter;
