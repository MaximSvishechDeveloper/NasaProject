const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27,2030"),
  destination: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

const getAllLaunches = () => {
  return Array.from(launches.values());
};

const addNewLaunch = (launch) => {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ["ZTM", "NASA"],
      upcoming: true,
      success: true,
    })
  );
};

const launchExicts = (id) => {
  return launches.has(Number(id));
};

const deleteLaunch = (id) => {
  const idNumber = Number(id);
  const aborted = launches.get(idNumber);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
};

export { getAllLaunches, addNewLaunch, launchExicts, deleteLaunch };
