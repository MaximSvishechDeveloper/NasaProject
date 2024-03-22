import express from "express";
import httpGetAllPlanets from "./plantes.controller.js";
import { getGoodPlanets } from "../../models/planets.model.js";

const planetsRouter = express.Router();

await getGoodPlanets();

planetsRouter.get("/", httpGetAllPlanets);

export default planetsRouter;
