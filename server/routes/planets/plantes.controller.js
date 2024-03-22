import { getAllPlanets } from "../../models/planets.model.js";

const httpsGetAllPlanets = (req, res) => {
  return res.status(200).json(getAllPlanets());
};

export default httpsGetAllPlanets;
