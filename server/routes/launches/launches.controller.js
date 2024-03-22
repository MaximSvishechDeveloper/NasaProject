import {
  getAllLaunches,
  addNewLaunch,
  launchExicts,
  deleteLaunch,
} from "../../models/launches.model.js";

const httpsGetAllLaunches = (req, res) => {
  return res.status(200).json(getAllLaunches());
};

const httpAddNewLaunch = (req, res) => {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.destination ||
    !launch.launchDate
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch data",
    });
  }

  addNewLaunch(launch);

  return res.status(201).json(launch);
};

const httpDeleteLaunch = (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (!launchExicts(id)) {
    return res.status(404).json("Launch was not found");
  } else {
    res.status(200).json(deleteLaunch(id));
  }
};

export { httpsGetAllLaunches, httpAddNewLaunch, httpDeleteLaunch };
